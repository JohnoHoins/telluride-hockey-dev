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
    
    // Clean, simple email with QR code
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">Telluride Hockey Development</h1>
        
        <p>Thank you for registering for the Telluride Hockey Skills Camp! We're excited to have ${formData.playerName} join us.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e40af;">Registration Details</h3>
          <p><strong>Player:</strong> ${formData.playerName}</p>
          <p><strong>Age Group:</strong> ${formData.ageGroup}</p>
          <p><strong>Parent/Guardian:</strong> ${formData.parentName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          ${formData.bothWeekends ? '<p><strong>Registration:</strong> Both weekends</p>' : ''}
          ${formData.notes ? `<p><strong>Notes:</strong> ${formData.notes}</p>` : ''}
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <h3 style="margin-top: 0; color: #1e40af;">Payment Instructions</h3>
          <p><strong>Amount:</strong> ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
          
          <div style="margin: 20px 0;">
            <img src="https://telluridehockeydv.vercel.app/venmo-qr.jpg" alt="Venmo QR Code" style="max-width: 200px; height: auto; border-radius: 8px;" />
            <p style="font-size: 14px; color: #666; margin-top: 10px;">Scan with Venmo app to pay</p>
          </div>
          
          <p><strong>Venmo:</strong> @johno-hoins</p>
          <p style="font-size: 14px; color: #666;">Please include the player's name in the payment notes</p>
        </div>
        
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #166534;"><strong>Alternative:</strong> You may also bring the exact amount in cash to your first session</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <h3 style="color: #1e40af;">Camp Schedule</h3>
          <p><strong>December 21–22:</strong> Saturday 9:00–10:50 AM • Sunday 9:00–10:50 AM</p>
          <p><strong>December 27–28:</strong> Saturday 9:00–10:50 AM • Sunday 9:00–10:50 AM</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
          <p>Contact: johnohoins@gmail.com • 970-708-0643</p>
          <p>We look forward to seeing you at the rink!</p>
        </div>
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