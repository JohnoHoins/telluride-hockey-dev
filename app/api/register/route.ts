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
    
    // Create parent email content with clean, minimal design
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Telluride Hockey Skills Camp Registration</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; background-color: #ffffff;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 30px 30px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #1f2937;">Telluride Hockey Development</h1>
              <p style="margin: 8px 0 0 0; font-size: 16px; color: #6b7280;">Winter Hockey Skills Camp</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <!-- Thank You Section -->
              <div style="margin-bottom: 40px;">
                <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600; color: #1f2937;">Thank you for registering!</h2>
                <p style="margin: 0; font-size: 16px; color: #4b5563; line-height: 1.6;">We're excited to have <strong>${formData.playerName}</strong> join us for the Telluride Hockey Skills Camp.</p>
              </div>
              
              <!-- Payment Section -->
              <div style="text-align: center; margin-bottom: 40px;">
                <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">Payment Instructions</h3>
                
                <!-- Payment Amount -->
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                  <p style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
                </div>
                
                <!-- Venmo QR Code -->
                <div style="margin-bottom: 20px;">
                  <img src="https://telluridehockeydv.vercel.app/venmo-qr.png" alt="Venmo QR Code" style="width: 200px; height: 200px; border-radius: 8px; border: 1px solid #d1d5db; display: block; margin: 0 auto;">
                </div>
                
                <!-- Payment Note -->
                <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">Please include the player's name in the Venmo payment notes.</p>
              </div>
              
              <!-- Contact Information -->
              <div style="border-top: 1px solid #e5e7eb; padding-top: 30px; text-align: center;">
                <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #374151;">Contact Information</h3>
                <p style="margin: 8px 0; font-size: 14px; color: #4b5563;">Email: johnohoins@gmail.com</p>
                <p style="margin: 8px 0; font-size: 14px; color: #4b5563;">Phone: 970-708-0643</p>
                <p style="margin: 16px 0 0 0; font-size: 14px; color: #6b7280;">We look forward to seeing you on the ice!</p>
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