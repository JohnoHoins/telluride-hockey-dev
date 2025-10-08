import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface RegistrationData {
  parentName: string;
  email: string;
  phone?: string;
  playerName: string;
  ageGroup: string;
  bothWeekends?: boolean;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const formData: RegistrationData = await request.json();
    console.log('Registration received:', formData);
    console.log('RESEND_API_KEY available:', !!process.env.RESEND_API_KEY);
    
    // Create parent email content with professional HTML structure
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Telluride Hockey Skills Camp Registration</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f9fafb;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px 30px 30px; text-align: center; border-bottom: 1px solid #e5e7eb;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #1f2937; letter-spacing: -0.025em;">Telluride Hockey Development</h1>
              <p style="margin: 8px 0 0 0; font-size: 16px; color: #6b7280; font-weight: 500;">Winter Hockey Skills Camp</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <!-- Thank You Section -->
              <div style="margin-bottom: 40px;">
                <h2 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600; color: #1f2937;">Thank you for registering!</h2>
                <p style="margin: 0; font-size: 16px; color: #4b5563; line-height: 1.6;">We're excited to have <strong>${formData.playerName}</strong> join us for the Telluride Hockey Skills Camp.</p>
              </div>
              
              <!-- Registration Details -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">Registration Details</h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 500; color: #374151; width: 120px;">Player:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${formData.playerName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 500; color: #374151;">Age Group:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${formData.ageGroup}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 500; color: #374151;">Parent/Guardian:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${formData.parentName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 500; color: #374151;">Email:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${formData.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 500; color: #374151;">Phone:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${formData.phone || 'Not provided'}</td>
                  </tr>
                  ${formData.bothWeekends ? '<tr><td style="padding: 8px 0; font-weight: 500; color: #374151;">Registration:</td><td style="padding: 8px 0; color: #059669; font-weight: 500;">Both weekends (December 20-21 & 27-28)</td></tr>' : ''}
                  ${formData.notes ? `<tr><td style="padding: 8px 0; font-weight: 500; color: #374151;">Notes:</td><td style="padding: 8px 0; color: #1f2937;">${formData.notes}</td></tr>` : ''}
                </table>
              </div>
              
              <!-- Payment Instructions -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937; text-align: center;">Payment Instructions</h3>
                
                <!-- Payment Amount -->
                <div style="background-color: #2563eb; color: #ffffff; padding: 20px; border-radius: 6px; text-align: center; margin-bottom: 24px;">
                  <p style="margin: 0; font-size: 24px; font-weight: 700;">Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
                </div>
                
                <!-- Payment Options -->
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 0 12px 0 0; vertical-align: top; width: 50%;">
                      <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 20px; height: 100%;">
                        <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1f2937; text-align: center;">Venmo Payment</h4>
                        <div style="text-align: center; margin-bottom: 16px;">
                          <img src="/venmo-qr.png" alt="Venmo QR Code" style="width: 160px; height: 160px; border-radius: 6px; border: 1px solid #d1d5db;">
                        </div>
                        <div style="background-color: #f3f4f6; padding: 12px; border-radius: 4px; text-align: center; margin-bottom: 12px;">
                          <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Send payment to:</p>
                          <strong style="font-size: 16px; color: #1f2937;">@johno-hoins</strong>
                        </div>
                        <p style="margin: 0; font-size: 13px; color: #dc2626; text-align: center; font-weight: 500;">Please include "${formData.playerName}" in the Venmo note</p>
                      </div>
                    </td>
                    <td style="padding: 0 0 0 12px; vertical-align: top; width: 50%;">
                      <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 20px; height: 100%;">
                        <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1f2937; text-align: center;">Cash Payment</h4>
                        <p style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-align: center;">Pay with cash at the camp</p>
                        <div style="background-color: #f0fdf4; padding: 12px; border-radius: 4px; text-align: center; margin-bottom: 12px;">
                          <strong style="font-size: 16px; color: #059669;">Bring exact amount</strong>
                        </div>
                        <p style="margin: 0; font-size: 13px; color: #6b7280; text-align: center;">Payment due at first session</p>
                      </div>
                    </td>
                  </tr>
                </table>
                
                <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; margin-top: 20px; border-radius: 0 4px 4px 0;">
                  <p style="margin: 0; font-size: 14px; color: #1e40af; line-height: 1.5;"><strong>Payment Options:</strong> You can choose either payment method. If paying by Venmo, please send payment before the camp starts and include the player's name in the note. If paying by cash, bring the exact amount to your first session.</p>
                </div>
              </div>
              
              <!-- Camp Schedule -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">Camp Schedule</h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 0 12px 0 0; vertical-align: top; width: 50%;">
                      <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 16px;">
                        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1f2937;">December 20-21</h4>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">6U & 8U: Sat 8:45am • Sun 9:00am</p>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">10U: Sat 12:00pm • Sun 10:30am</p>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">19U: Sat 1:30pm • Sun 12:00pm</p>
                      </div>
                    </td>
                    <td style="padding: 0 0 0 12px; vertical-align: top; width: 50%;">
                      <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 16px;">
                        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1f2937;">December 27-28</h4>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">12U: Sat 8:45am • Sun 9:00am</p>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">14U: Sat 12:00pm • Sun 10:30am</p>
                        <p style="margin: 4px 0; font-size: 13px; color: #4b5563;">19U: Sat 1:30pm • Sun 12:00pm</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Contact Information -->
              <div style="background-color: #f3f4f6; border-radius: 8px; padding: 24px; text-align: center;">
                <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #374151;">Contact Information</h3>
                <p style="margin: 8px 0; font-size: 14px; color: #4b5563;"><strong>Email:</strong> johnohoins@gmail.com</p>
                <p style="margin: 8px 0; font-size: 14px; color: #4b5563;"><strong>Phone:</strong> 970-708-0643</p>
                <p style="margin: 16px 0 0 0; font-size: 14px; color: #6b7280; font-style: italic;">We look forward to seeing you on the ice!</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; background-color: #f9fafb;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">© 2024 Telluride Hockey Development. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;


    // Send email using Resend if available
    if (resend && process.env.RESEND_API_KEY) {
      try {
        console.log('Attempting to send confirmation email...');
        
        // Send confirmation email to parent only
        console.log('Sending confirmation email to:', formData.email);
        const parentEmailResult = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: formData.email,
          subject: 'Telluride Hockey Skills Camp - Registration Confirmation',
          html: parentEmailContent,
        });
        console.log('Parent email result:', parentEmailResult);
        
        console.log('Confirmation email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        console.error('Error details:', emailError);
        // Continue with registration even if email fails
      }
    } else {
      // Fallback: just log the registration
      console.log('New registration (no email service configured):', formData);
      console.log('Resend instance:', !!resend);
      console.log('API Key present:', !!process.env.RESEND_API_KEY);
    }

    return NextResponse.json({ success: true, message: 'Registration successful' });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}