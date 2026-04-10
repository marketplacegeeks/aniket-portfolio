import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, purpose, remarks, downloadType, timestamp } = await request.json();

    console.log("📧 Download tracking request received:", {
      email,
      purpose,
      downloadType,
      timestamp,
    });

    // Validate input
    if (!email || !purpose || !downloadType) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log email configuration
    console.log("📤 Sending email with config:", {
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      hasApiKey: !!process.env.RESEND_API_KEY,
    });

    // Send email notification via Resend
    const result = await resend.emails.send({
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

    console.log("✅ Email sent successfully:", result);

    return NextResponse.json({ success: true, emailId: result.id });
  } catch (error) {
    console.error("❌ Download tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
