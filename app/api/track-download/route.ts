import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    // Send email notification via Resend
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Download tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
