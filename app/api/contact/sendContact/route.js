import { transporter } from "@/lib/mailer";
import { contactAutoReplyTemplate } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    // Normalize name
    const fullName =
      name ||
      `${firstName || ""} ${lastName || ""}`.trim();

    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    // Send notification to Uthabiti team
    await transporter.sendMail({
      from: `"Uthabiti Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    // Auto-reply to the user 
    await transporter.sendMail({
      from: `"Uthabiti Africa" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Uthabiti Africa",
      html: contactAutoReplyTemplate({
        name: fullName,
      }),
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}