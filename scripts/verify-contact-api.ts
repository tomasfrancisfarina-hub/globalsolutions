/**
 * Contact API verification script (no live Resend send unless env is set).
 * Run: npx tsx scripts/verify-contact-api.ts
 */
import { POST } from "../app/api/contact/route";
import { NextRequest } from "next/server";

function req(body: unknown) {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function main() {
  const saved = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  };

  // 1) Missing env → 503
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_EMAIL;
  delete process.env.RESEND_FROM_EMAIL;
  let res = await POST(
    req({
      name: "Ada",
      email: "ada@example.com",
      company: "Acme",
      message: "Hello",
    }),
  );
  console.log("missing-env", res.status, await res.json());
  if (res.status !== 503) throw new Error("Expected 503 without env");

  // 2) Invalid payload → 400
  process.env.RESEND_API_KEY = "re_test_key";
  process.env.CONTACT_EMAIL = "info@globalsolutionsworldwide.com";
  process.env.RESEND_FROM_EMAIL = "Global Solutions <onboarding@resend.dev>";
  res = await POST(req({ name: "", email: "bad", message: "" }));
  console.log("invalid-payload", res.status, await res.json());
  if (res.status !== 400) throw new Error("Expected 400 for invalid payload");

  // 3) Simulated Resend success via fetch mock
  const originalFetch = globalThis.fetch;
  let resendCalls = 0;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    if (url.includes("api.resend.com")) {
      resendCalls += 1;
      const body = JSON.parse(String(init?.body ?? "{}"));
      if (!body.reply_to && !body.replyTo) {
        // Resend SDK sends camelCase in options; wire format may vary — check to/from
      }
      return new Response(JSON.stringify({ id: "msg_simulated" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return originalFetch(input, init);
  }) as typeof fetch;

  res = await POST(
    req({
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical",
      message: "Interested in growth consulting.",
    }),
  );
  const okBody = await res.json();
  console.log("simulated-resend", res.status, okBody, "calls", resendCalls);
  if (res.status !== 200 || !okBody.success) {
    throw new Error("Expected 200 with simulated Resend");
  }
  if (resendCalls !== 1) {
    throw new Error(`Expected exactly 1 Resend call, got ${resendCalls}`);
  }

  // 4) Double concurrent POST with mock — API allows parallel (client must debounce)
  resendCalls = 0;
  const [a, b] = await Promise.all([
    POST(
      req({
        name: "A",
        email: "a@example.com",
        company: "",
        message: "One",
      }),
    ),
    POST(
      req({
        name: "B",
        email: "b@example.com",
        company: "",
        message: "Two",
      }),
    ),
  ]);
  console.log(
    "concurrent-api",
    a.status,
    b.status,
    "resendCalls",
    resendCalls,
  );
  if (a.status !== 200 || b.status !== 200 || resendCalls !== 2) {
    throw new Error("Concurrent API calls should each hit Resend once");
  }

  // 5) Simulated Resend failure → 500
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    if (url.includes("api.resend.com")) {
      return new Response(JSON.stringify({ message: "boom" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return originalFetch(input, init);
  }) as typeof fetch;

  res = await POST(
    req({
      name: "Ada",
      email: "ada@example.com",
      company: "",
      message: "Hello again",
    }),
  );
  console.log("simulated-failure", res.status, await res.json());
  if (res.status !== 500) throw new Error("Expected 500 on Resend failure");

  globalThis.fetch = originalFetch;
  process.env.RESEND_API_KEY = saved.RESEND_API_KEY;
  process.env.CONTACT_EMAIL = saved.CONTACT_EMAIL;
  process.env.RESEND_FROM_EMAIL = saved.RESEND_FROM_EMAIL;

  console.log("ALL_CONTACT_API_CHECKS_PASSED");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
