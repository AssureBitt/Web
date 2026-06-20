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

    // 1. Admin Email HTML Template
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Project Inquiry - Assurebit</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #FDFCF8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #384959;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 48px rgba(56, 73, 89, 0.08); border: 1px solid #F5F5F4;">
                <!-- Header -->
                <tr>
                  <td style="background-color: #384959; padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; text-transform: uppercase;">Assurebit</h1>
                    <p style="margin: 6px 0 0 0; color: #88BDF2; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">New Project Inquiry</p>
                  </td>
                </tr>
                
                <!-- Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #384959;">
                      Hello Admin,<br><br>
                      You have received a new contact submission from your website. Below are the inquiry details:
                    </p>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; border-radius: 16px; border: 1px solid #F5F5F4; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 24px;">
                          <h3 style="margin: 0 0 16px 0; font-size: 13px; color: #6A89A7; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Client Profile</h3>
                          
                          <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.4;">
                            <strong style="color: #384959;">Name:</strong> ${name}
                          </p>
                          <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.4;">
                            <strong style="color: #384959;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">${email}</a>
                          </p>
                          <p style="margin: 0; font-size: 15px; line-height: 1.4;">
                            <strong style="color: #384959;">Project Type:</strong> <span style="background-color: #3b82f6; color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; display: inline-block;">${projectType}</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #6A89A7; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">Inquiry / Message Details</h3>
                    <div style="background-color: #F5F5F4; padding: 24px; border-radius: 16px; font-size: 15px; line-height: 1.6; color: #384959; border-left: 4px solid #3b82f6;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #FDFCF8; padding: 30px; text-align: center; border-top: 1px solid #F5F5F4;">
                    <p style="margin: 0; font-size: 13px; color: #6A89A7;">
                      &copy; ${new Date().getFullYear()} Assurebit. All rights reserved.
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 11px; color: rgba(56, 73, 89, 0.4);">
                      This notification email was automatically sent to the administrator.
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

    // 2. User Receipt Email HTML Template
    const userHtmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>We received your inquiry - Assurebit</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #FDFCF8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #384959;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 48px rgba(56, 73, 89, 0.08); border: 1px solid #F5F5F4;">
                <!-- Header -->
                <tr>
                  <td style="background-color: #384959; padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; text-transform: uppercase;">Assurebit</h1>
                    <p style="margin: 6px 0 0 0; color: #88BDF2; font-size: 14px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Inquiry Confirmation</p>
                  </td>
                </tr>
                
                <!-- Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #384959;">
                      Hi ${name},
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #384959;">
                      Thank you for reaching out to Assurebit! We have received your message regarding <strong style="color: #3b82f6;">${projectType}</strong>.
                    </p>
                    <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #384959;">
                      A real human on our engineering and strategy team is reviewing what you shared. We pride ourselves on giving thoughtful, custom replies (no generic bots), and you can expect to hear back from us within the next <strong>24 hours</strong>.
                    </p>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FDFCF8; border-radius: 16px; border: 1px solid #F5F5F4; margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 8px 0; font-size: 13px; color: #6A89A7; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;">A copy of your message:</p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #6A89A7; font-style: italic;">
                            &quot;${message.replace(/\n/g, '<br>')}&quot;
                          </p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #384959;">
                      Talk soon,<br>
                      <strong>The Assurebit Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #FDFCF8; padding: 30px; text-align: center; border-top: 1px solid #F5F5F4;">
                    <p style="margin: 0; font-size: 12px; color: #6A89A7;">
                      If you have any urgent updates, feel free to reply directly to this email or write to us at <a href="mailto:assurebit@gmail.com" style="color: #3b82f6; text-decoration: none;">assurebit@gmail.com</a>.
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

    // Debug API Key status
    console.log('[Resend] API Key loaded:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.slice(0, 8) + '...' : 'MISSING');

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const adminToAddress = 'assurebit@gmail.com';

    console.log(`[Resend] Sending admin notification to: ${adminToAddress}`);
    console.log(`[Resend] Sending user confirmation to: ${email}`);

    // Send Admin Notification Email
    const adminRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Assurebit <${fromAddress}>`,
        to: [adminToAddress],
        subject: `New Project Inquiry from ${name} - ${projectType}`,
        html: adminHtmlContent,
      }),
    });

    const adminBody = await adminRes.json();
    console.log('[Resend Admin] Response status:', adminRes.status);

    // Send User Receipt Email
    const userRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Assurebit <${fromAddress}>`,
        to: [email],
        subject: `We received your inquiry - Assurebit`,
        html: userHtmlContent,
      }),
    });

    const userBody = await userRes.json();
    console.log('[Resend User] Response status:', userRes.status);

    if (!adminRes.ok) {
      return NextResponse.json(
        { error: adminBody.message || adminBody.name || 'Failed to notify admin', details: adminBody },
        { status: adminRes.status }
      );
    }

    return NextResponse.json({ success: true, data: { admin: adminBody, user: userBody } });
  } catch (error) {
    console.error('Error handling contact form API:', error);
    return NextResponse.json(
      { error: 'Failed to handle contact submission.' },
      { status: 500 }
    );
  }
}
