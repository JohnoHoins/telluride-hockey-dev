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
    
    // Send email to parent with payment instructions
    const parentEmailContent = `
      <h2>Thank you for registering for Telluride Hockey Skills Camp!</h2>
      
      <p>We're excited to have ${formData.playerName} join us for the camp.</p>
      
      <h3>Registration Details:</h3>
      <ul>
        <li><strong>Player:</strong> ${formData.playerName}</li>
        <li><strong>Age Group:</strong> ${formData.ageGroup}</li>
        <li><strong>Parent/Guardian:</strong> ${formData.parentName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
        ${formData.bothWeekends ? '<li><strong>Registration:</strong> Both weekends (December 20-21 & 27-28)</li>' : ''}
        ${formData.notes ? `<li><strong>Notes:</strong> ${formData.notes}</li>` : ''}
      </ul>
      
      <h3>Payment Instructions:</h3>
      <p>Please complete your registration by sending payment via Venmo to @YOURHANDLE</p>
      <p>Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
      
      <p>If you have any questions, please contact us:</p>
      <ul>
        <li>Email: johnohoins@gmail.com</li>
        <li>Phone: 970-708-0643</li>
      </ul>
      
      <p>We look forward to seeing you on the ice!</p>
      
      <p>Best regards,<br>
      Telluride Hockey Development Team</p>
    `;

    // Send email to admin with registration details
    const adminEmailContent = `
      <h2>New Registration - Telluride Hockey Skills Camp</h2>
      
      <h3>Registration Details:</h3>
      <ul>
        <li><strong>Player:</strong> ${formData.playerName}</li>
        <li><strong>Age Group:</strong> ${formData.ageGroup}</li>
        <li><strong>Parent/Guardian:</strong> ${formData.parentName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
        ${formData.bothWeekends ? '<li><strong>Registration:</strong> Both weekends (December 20-21 & 27-28)</li>' : ''}
        <li><strong>Payment Amount:</strong> ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</li>
        ${formData.notes ? `<li><strong>Notes:</strong> ${formData.notes}</li>` : ''}
      </ul>
      
      <p>Please follow up with payment confirmation.</p>
    `;

    // Send emails using Resend if available
    if (resend && process.env.RESEND_API_KEY) {
      try {
        console.log('Attempting to send emails...');
        
        // Send confirmation email to parent
        console.log('Sending confirmation email to:', formData.email);
        const parentEmailResult = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: formData.email,
          subject: 'Telluride Hockey Skills Camp - Registration Confirmation',
          html: parentEmailContent,
        });
        console.log('Parent email result:', parentEmailResult);

        // Send notification email to admin
        console.log('Sending admin notification email to: johnohoins@gmail.com');
        const adminEmailResult = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'johnohoins@gmail.com',
          subject: 'New Registration - Telluride Hockey Skills Camp',
          html: adminEmailContent,
        });
        console.log('Admin email result:', adminEmailResult);
        
        console.log('All emails sent successfully');
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
