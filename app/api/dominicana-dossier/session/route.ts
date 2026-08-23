import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { DOMINICANA_COOKIE_NAME } from "@/dominicana-dossier/config";
import { PRIVATE_NO_STORE_HEADERS } from "@/dominicana-dossier/private-files";
import { hasValidDossierSessionFromCookie } from "@/dominicana-dossier/session";

export const runtime = "nodejs";

export async function GET() {
  const store = await cookies();
  const ok = hasValidDossierSessionFromCookie(store.get(DOMINICANA_COOKIE_NAME)?.value);
  return NextResponse.json(
    { ok },
    { status: ok ? 200 : 401, headers: PRIVATE_NO_STORE_HEADERS },
  );
}
