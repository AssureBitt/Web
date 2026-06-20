import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Request</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #FDFCF8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #384959;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(56, 73, 89, 0.08); border: 1px solid #F5F5F4;">
                <!-- Header with Logo -->
                <tr>
                  <td style="background-color: #384959; padding: 30px; text-align: center;">
                    <!-- Placeholder "SUPER IT" Text Logo. You can replace the h1 with an <img src="URL" /> for a real logo later -->
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold; letter-spacing: 1px;">SUPER IT</h1>
                    <p style="margin: 5px 0 0 0; color: #88BDF2; font-size: 14px;">New Contact Submission</p>
                  </td>
                </tr>
                
                <!-- Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #384959;">
                      Hello Team,<br><br>
                      You have received a new project inquiry. Here are the details:
                    </p>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; border-radius: 8px; margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 10px 0; font-size: 14px; color: #6A89A7; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Client Details</p>
                          
                          <p style="margin: 0 0 8px 0; font-size: 15px;">
                            <strong style="color: #384959;">Name:</strong> ${name}
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 15px;">
                            <strong style="color: #384959;">Email:</strong> <a href="mailto:${email}" style="color: #88BDF2; text-decoration: none;">${email}</a>
                          </p>
                          <p style="margin: 0 0 8px 0; font-size: 15px;">
                            <strong style="color: #384959;">Project Type:</strong> <span style="background-color: #BDDDFC; color: #384959; padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: bold; display: inline-block;">${projectType}</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 0 0 10px 0; font-size: 14px; color: #6A89A7; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Message</p>
                    <div style="background-color: #F5F5F4; padding: 20px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #384959; border-left: 4px solid #6A89A7;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </td>
                </tr>
                
                <!-- Footer with Copyright -->
                <tr>
                  <td style="background-color: #FDFCF8; padding: 24px; text-align: center; border-top: 1px solid #F5F5F4;">
                    <p style="margin: 0; font-size: 13px; color: #6A89A7;">
                      &copy; ${new Date().getFullYear()} Super IT. All rights reserved.
                    </p>
                    <p style="margin: 5px 0 0 0; font-size: 12px; color: rgba(56, 73, 89, 0.5);">
                      This is an automated message from your website contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Debug: confirm the API key is loaded (prints first 8 chars only for safety)
    console.log('[Resend] API Key loaded:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.slice(0, 8) + '...' : 'MISSING');

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toAddress = process.env.RESEND_TO_EMAIL || 'shrujalp@whitelabeliq.com';

    console.log(`[Resend] Sending from: ${fromAddress} → to: ${toAddress}`);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Super IT <${fromAddress}>`,
        to: [toAddress],
        subject: `New Project Inquiry from ${name} - ${projectType}`,
        html: htmlContent,
      }),
    });

    const responseBody = await res.json();
    console.log('[Resend] Response status:', res.status);
    console.log('[Resend] Response body:', JSON.stringify(responseBody));

    if (!res.ok) {
      return NextResponse.json(
        { error: responseBody.message || responseBody.name || 'Failed to send email', details: responseBody },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data: responseBody });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
