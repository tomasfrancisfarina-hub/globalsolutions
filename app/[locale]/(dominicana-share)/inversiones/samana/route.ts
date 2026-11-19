import { NextResponse } from "next/server";
import { serveSamanaPage } from "@/dominicana-share/serve";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;
  if (locale !== "es") {
    return new NextResponse("Not found", { status: 404 });
  }
  return serveSamanaPage("es");
}
