export function contactAutoReplyTemplate({ name }) {
  return `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:#f6f6f6;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <tr>
                <td align="center" style="background:#E5553C;padding:20px;">
                    <span style="
                    font-family: Arial, sans-serif;
                    font-size:28px;
                    font-weight:bold;
                    color:#ffffff;
                    letter-spacing:2px;
                    ">
                    Uthabiti Africa
                    </span>
                </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;color:#333;">
                <h2 style="margin-top:0;">Thank You for Contacting Us</h2>
                <p>Hello ${name || "there"},</p>

                <p>We have received your message successfully.  
                One of our team members will get back to you shortly.</p>

                <p>If your inquiry is urgent, you can reply directly to this email.</p>

                <p style="margin-top:30px;">Warm regards,<br><strong> Uthabiti Support Team</strong></p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="background:#f0f0f0;padding:15px;font-size:12px;color:#777;">
                © ${new Date().getFullYear()} Uthabiti Africa. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
