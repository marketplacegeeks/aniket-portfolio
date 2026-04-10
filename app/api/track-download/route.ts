import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const { email, purpose, remarks, downloadType, timestamp } = await request.json();

    console.log("📧 Download tracking request received:", {
      email,
      purpose,
      downloadType,
      timestamp,
    });

    // Validate required fields
    if (!email || !purpose || !downloadType) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      console.error("❌ Invalid email format:", email);
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate email length
    if (email.length > 254) {
      console.error("❌ Email too long:", email.length);
      return NextResponse.json(
        { error: "Email address too long" },
        { status: 400 }
      );
    }

    // Validate downloadType
    if (!["cv", "portfolio"].includes(downloadType)) {
      console.error("❌ Invalid download type:", downloadType);
      return NextResponse.json(
        { error: "Invalid download type" },
        { status: 400 }
      );
    }

    // Log email configuration
    console.log("📤 Sending email with config:", {
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.NOTIFICATION_EMAIL,
      hasApiKey: !!process.env.RESEND_API_KEY,
    });

    // Sanitize user inputs for email
    const sanitizedEmail = escapeHtml(email);
    const sanitizedPurpose = escapeHtml(purpose);
    const sanitizedRemarks = remarks ? escapeHtml(remarks) : '';

    // Send email notification via Resend
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.NOTIFICATION_EMAIL || "your@email.com",
      subject: `New ${downloadType.toUpperCase()} Download - ${sanitizedEmail}`,
      html: `
        <h2>Someone just downloaded your ${downloadType}!</h2>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Purpose:</strong> ${sanitizedPurpose}</p>
        ${sanitizedRemarks ? `<p><strong>Remarks:</strong> ${sanitizedRemarks}</p>` : ''}
        <p><strong>Downloaded:</strong> ${downloadType === "cv" ? "CV" : "Portfolio"}</p>
        <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
      `,
    });

    console.log("✅ Email sent successfully:", result);

    return NextResponse.json({ success: true, emailId: result.data?.id });
  } catch (error) {
    console.error("❌ Download tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
