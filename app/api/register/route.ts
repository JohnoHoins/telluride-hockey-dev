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
    
    // Create parent email content exactly as specified
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Telluride Hockey Skills Camp Registration</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111827; background-color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff;">
          
          <!-- Header -->
          <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 600; color: #111827; text-align: center;">Telluride Hockey Development</h1>
          <p style="margin: 0 0 40px 0; font-size: 16px; color: #6b7280; text-align: center;">Winter Hockey Skills Camp</p>
          
          <!-- Intro -->
          <p style="margin: 0 0 40px 0; font-size: 16px; color: #111827;">Thank you for registering for the Telluride Hockey Skills Camp! We're excited to have ${formData.playerName} join us.</p>
          
          <!-- Registration Details -->
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Player: ${formData.playerName}</p>
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Age Group: ${formData.ageGroup}</p>
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Parent/Guardian: ${formData.parentName}</p>
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Email: ${formData.email}</p>
          <p style="margin: 0 0 40px 0; font-size: 16px; color: #111827;">Phone: ${formData.phone || 'Not provided'}</p>
          
          <!-- Payment Instructions -->
          <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #111827;">Payment Instructions</h2>
          <p style="margin: 0 0 16px 0; font-size: 16px; color: #111827;">Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
          
          <p style="margin: 0 0 20px 0; font-size: 16px; color: #111827;">Please scan the QR code below to submit payment by Venmo.</p>
          
          <img src="https://telluridehockeydev.com/venmo-qr.png" alt="Venmo QR Code" width="180" height="180" style="display:block;margin:20px auto;border-radius:8px;" />
          
          <p style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280; text-align: center;">Please include the player's name in the Venmo payment notes.</p>
          
          <p style="margin: 0 0 40px 0; font-size: 16px; color: #111827;">You may also bring the exact amount in cash to your first session.</p>
          
          <!-- Camp Schedule -->
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">December 21–22: Sat 9–10:50 am • Sun 9–10:50 am</p>
          <p style="margin: 0 0 40px 0; font-size: 16px; color: #111827;">December 27–28: Sat 9–10:50 am • Sun 9–10:50 am</p>
          
          <!-- Footer -->
          <p style="margin: 0 0 8px 0; font-size: 16px; color: #111827;">Contact: johnohoins@gmail.com • 970-708-0643</p>
          <p style="margin: 0; font-size: 16px; color: #111827;">We look forward to seeing you at the rink!</p>
          
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