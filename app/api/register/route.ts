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
    
    // TEST: No images, just text to isolate the issue
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <body>
        <h1>🚨 IMAGE TEST EMAIL 🚨</h1>
        <p>This email has NO images to test if the issue is with images or email content.</p>
        <p>If you see this message, the email system is working.</p>
        <p>Next step: We'll add images back one by one to find the problem.</p>
        <hr>
        <p><strong>Registration Details:</strong></p>
        <p>Player: ${formData.playerName}</p>
        <p>Age Group: ${formData.ageGroup}</p>
        <p>Parent: ${formData.parentName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone || 'Not provided'}</p>
        <p>Both Weekends: ${formData.bothWeekends ? 'Yes' : 'No'}</p>
        <p>Notes: ${formData.notes || 'None'}</p>
        <hr>
        <p><strong>Payment:</strong> ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
        <p><strong>Venmo:</strong> @johno-hoins</p>
        <p><strong>Cash:</strong> You may also bring cash to your first session</p>
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