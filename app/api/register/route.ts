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
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const formData: RegistrationData = await request.json();
    
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
        ${formData.notes ? `<li><strong>Notes:</strong> ${formData.notes}</li>` : ''}
      </ul>
      
      <h3>Payment Instructions:</h3>
      <p>Please complete your registration by sending payment via Venmo to @YOURHANDLE</p>
      <p>Amount: $190 per player</p>
      
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
        ${formData.notes ? `<li><strong>Notes:</strong> ${formData.notes}</li>` : ''}
      </ul>
      
      <p>Please follow up with payment confirmation.</p>
    `;

    // Send emails using Resend if available
    if (resend && process.env.RESEND_API_KEY) {
      try {
        // Send confirmation email to parent
        await resend.emails.send({
          from: 'noreply@telluridehockey.com',
          to: formData.email,
          subject: 'Telluride Hockey Skills Camp - Registration Confirmation',
          html: parentEmailContent,
        });

        // Send notification email to admin
        await resend.emails.send({
          from: 'noreply@telluridehockey.com',
          to: 'johnohoins@gmail.com',
          subject: 'New Registration - Telluride Hockey Skills Camp',
          html: adminEmailContent,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with registration even if email fails
      }
    } else {
      // Fallback: just log the registration
      console.log('New registration (no email service configured):', formData);
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
