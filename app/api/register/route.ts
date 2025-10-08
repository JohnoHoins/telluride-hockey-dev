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
    
    // Create parent email content with elite, production-ready design
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Telluride Hockey Skills Camp Registration</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; background-color: #ffffff;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px 20px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #111827;">Telluride Hockey Development</h1>
              <p style="margin: 8px 0 0 0; font-size: 16px; color: #6b7280;">Winter Hockey Skills Camp</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <!-- Thank You -->
              <div style="margin-bottom: 40px;">
                <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600; color: #111827;">Thank you for registering!</h2>
                <p style="margin: 0; font-size: 16px; color: #6b7280; line-height: 1.6;">We're excited to have <strong>${formData.playerName}</strong> join us for the Telluride Hockey Skills Camp.</p>
              </div>
              
              <!-- Registration Details -->
              <div style="margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #111827;">Registration Details</h3>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Player:</strong> ${formData.playerName}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Age Group:</strong> ${formData.ageGroup}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Parent/Guardian:</strong> ${formData.parentName}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Email:</strong> ${formData.email}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                ${formData.bothWeekends ? '<p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Registration:</strong> Both weekends (December 20-21 & 27-28)</p>' : ''}
                ${formData.notes ? `<p style="margin: 8px 0; font-size: 16px; color: #111827;"><strong>Notes:</strong> ${formData.notes}</p>` : ''}
              </div>
              
              <!-- Payment Instructions -->
              <div style="margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #111827;">Payment instructions</h3>
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #111827;">Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
                
                <div style="text-align: center; margin: 20px 0;">
                  <img src="https://telluridehockeydv.vercel.app/venmo-qr.png" alt="Venmo QR" style="width: 200px; height: 200px; display: block; margin: 16px auto; border-radius: 8px;">
                </div>
                
                <p style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280;">Please include the player's name in the Venmo payment notes.</p>
                
                <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Venmo: Use the QR code above</p>
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #111827;">Cash at first session: Bring exact amount</p>
                
                <p style="margin: 0; font-size: 14px; color: #6b7280;">If the QR doesn't load, reply to this email for payment help.</p>
              </div>
              
              <!-- Camp Schedule -->
              <div style="margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #111827;">Camp Schedule</h3>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;">December 20-21: Sat 8:45am • Sun 9:00am</p>
                <p style="margin: 8px 0; font-size: 16px; color: #111827;">December 27-28: Sat 8:45am • Sun 9:00am</p>
              </div>
              
              <!-- Contact Footer -->
              <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
                <p style="margin: 0 0 16px 0; font-size: 16px; color: #111827;">Contact: johnohoins@gmail.com • 970-708-0643</p>
                <p style="margin: 0; font-size: 16px; color: #6b7280;">We look forward to seeing you on the ice!</p>
              </div>
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