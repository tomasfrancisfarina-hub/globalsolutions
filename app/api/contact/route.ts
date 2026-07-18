import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Contact form API — prepared for CRM integration (v2)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Integrate with CRM (HubSpot, Pipedrive) when features.crm is enabled
    // TODO: Send notification email

    return NextResponse.json({ success: true, message: "Message received" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
