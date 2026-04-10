import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, purpose, remarks, downloadType, timestamp } = await request.json();

    // Validate input
    if (!email || !purpose || !downloadType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Send email notification via Resend
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.NOTIFICATION_EMAIL || "your@email.com",
        subject: `New ${downloadType.toUpperCase()} Download - ${email}`,
        html: `
          <h2>Someone just downloaded your ${downloadType}!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Purpose:</strong> ${purpose}</p>
          ${remarks ? `<p><strong>Remarks:</strong> ${remarks}</p>` : ''}
          <p><strong>Downloaded:</strong> ${downloadType === "cv" ? "CV" : "Portfolio"}</p>
          <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Continue even if email fails
    }

    // 2. Log to Google Sheets
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              new Date(timestamp).toISOString(),
              email,
              purpose,
              remarks || "",
              downloadType,
              new Date(timestamp).toLocaleString(),
            ],
          ],
        },
      });
    } catch (sheetsError) {
      console.error("Google Sheets error:", sheetsError);
      // Continue even if sheets logging fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Download tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
