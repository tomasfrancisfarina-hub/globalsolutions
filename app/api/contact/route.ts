import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_COMPANY = 160;
const MAX_MESSAGE = 5000;
const DEFAULT_CONTACT_EMAIL = "info@globalsolutionsworldwide.com";

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const to =
    process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL?.trim() ?? "";
  return { apiKey, to, from };
}

/**
 * Contact form API — single Resend delivery per request.
 * Success (200) only when Resend accepts the message.
 */
export async function POST(request: NextRequest) {
  try {
    const { apiKey, to, from } = getConfig();

    if (!apiKey || !from) {
      console.error(
        "Contact form misconfigured: missing RESEND_API_KEY or RESEND_FROM_EMAIL",
      );
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const raw = body as Record<string, unknown>;
    const name = typeof raw.name === "string" ? raw.name.trim() : "";
    const email = typeof raw.email === "string" ? raw.email.trim() : "";
    const company = typeof raw.company === "string" ? raw.company.trim() : "";
    const message = typeof raw.message === "string" ? raw.message.trim() : "";
    const locale =
      raw.locale === "en" || raw.locale === "es" || raw.locale === "de"
        ? raw.locale
        : undefined;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (
      name.length > MAX_NAME ||
      email.length > MAX_EMAIL ||
      company.length > MAX_COMPANY ||
      message.length > MAX_MESSAGE
    ) {
      return NextResponse.json({ error: "Field too long" }, { status: 400 });
    }

    // Exactly one Resend call per request — no webhook fallback.
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: "Nuevo contacto desde Global Solutions",
      text: [
        "Nuevo mensaje desde el formulario de contacto",
        "",
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company || "—"}`,
        locale ? `Idioma: ${locale}` : null,
        "",
        "Mensaje:",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend rejected email:", error.name, error.message);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    if (!data?.id) {
      console.error("Resend returned no message id");
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Contact form error:",
      error instanceof Error ? error.message : "unknown",
    );
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
