import { NextResponse } from "next/server";

const { AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID, AIRTABLE_TOKEN } = process.env;

const airtableUrl =
  AIRTABLE_BASE_ID && AIRTABLE_TABLE_ID
    ? `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`
    : undefined;

export async function POST(request: Request) {
  if (!AIRTABLE_TOKEN || !airtableUrl) {
    return NextResponse.json(
      { error: "Airtable environment variables are not configured." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const businessEmail =
      typeof body.businessEmail === "string" ? body.businessEmail.trim() : "";
    const contactNumber =
      typeof body.contactNumber === "string" ? body.contactNumber.trim() : "";
    if (!name || !businessEmail) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const fields: Record<string, string> = {
      Name: name,
      "Business Email": businessEmail,
    };

    if (contactNumber) {
      fields["Contact Number"] = contactNumber;
    }

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields,
          },
        ],
      }),
    });

    if (!airtableResponse.ok) {
      const errorPayload = await airtableResponse.text();
      console.error("Airtable error", airtableResponse.status, errorPayload);
      return NextResponse.json(
        { error: "Failed to store submission." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
