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
    
    // Create parent email content with proper HTML structure
    const parentEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Telluride Hockey Skills Camp Registration</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 28px;">🏒 Telluride Hockey Skills Camp</h1>
          <h2 style="margin: 10px 0 0 0; font-size: 20px; font-weight: normal;">Registration Confirmation</h2>
        </div>
        
        <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h3 style="color: #1e40af; margin-top: 0;">Thank you for registering!</h3>
          <p>We're excited to have <strong>${formData.playerName}</strong> join us for the Telluride Hockey Skills Camp!</p>
        </div>
        
        <div style="background: white; border: 2px solid #e5e7eb; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h3 style="color: #1e40af; margin-top: 0;">Registration Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Player:</strong> ${formData.playerName}</li>
            <li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Age Group:</strong> ${formData.ageGroup}</li>
            <li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Parent/Guardian:</strong> ${formData.parentName}</li>
            <li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Email:</strong> ${formData.email}</li>
            <li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
            ${formData.bothWeekends ? '<li style="margin: 10px 0; padding: 8px; background: #dcfce7; border-radius: 5px; color: #166534;"><strong>Registration:</strong> Both weekends (December 20-21 & 27-28)</li>' : ''}
            ${formData.notes ? `<li style="margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 5px;"><strong>Notes:</strong> ${formData.notes}</li>` : ''}
          </ul>
        </div>
        
        <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h3 style="color: #92400e; margin-top: 0;">💰 Payment Instructions:</h3>
          <p style="font-size: 18px; margin: 15px 0;"><strong>Amount: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</strong></p>
          
          <div style="display: flex; gap: 15px; flex-wrap: wrap; margin: 20px 0;">
            <div style="flex: 1; min-width: 250px; background: white; padding: 20px; border-radius: 8px; border: 2px solid #3b82f6;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">💳 Venmo Payment</h4>
              <p style="margin: 10px 0;">Send payment via Venmo to:</p>
              <div style="background: #f1f5f9; padding: 10px; border-radius: 5px; text-align: center; margin: 10px 0;">
                <strong style="font-size: 16px; color: #1e40af;">@YOURHANDLE</strong>
              </div>
              <p style="font-size: 12px; color: #6b7280; margin: 5px 0;">Include player name in the Venmo note</p>
            </div>
            
            <div style="flex: 1; min-width: 250px; background: white; padding: 20px; border-radius: 8px; border: 2px solid #10b981;">
              <h4 style="margin: 0 0 10px 0; color: #047857;">💵 Cash Payment</h4>
              <p style="margin: 10px 0;">Pay with cash at the camp:</p>
              <div style="background: #ecfdf5; padding: 10px; border-radius: 5px; text-align: center; margin: 10px 0;">
                <strong style="font-size: 16px; color: #047857;">Bring exact amount</strong>
              </div>
              <p style="font-size: 12px; color: #6b7280; margin: 5px 0;">Payment due at first session</p>
            </div>
          </div>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="margin: 0; font-size: 14px; color: #0c4a6e;"><strong>Note:</strong> You can choose either payment method. If paying by Venmo, please send payment before the camp starts. If paying by cash, bring the exact amount to your first session.</p>
          </div>
        </div>
        
        <div style="background: #e0f2fe; border: 2px solid #0ea5e9; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h3 style="color: #0c4a6e; margin-top: 0;">📅 Camp Schedule:</h3>
          <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 8px;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">December 20-21</h4>
              <p style="margin: 5px 0; font-size: 14px;">6U & 8U: Sat 8:45am • Sun 9:00am</p>
              <p style="margin: 5px 0; font-size: 14px;">10U: Sat 12:00pm • Sun 10:30am</p>
              <p style="margin: 5px 0; font-size: 14px;">19U: Sat 1:30pm • Sun 12:00pm</p>
            </div>
            <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 8px;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">December 27-28</h4>
              <p style="margin: 5px 0; font-size: 14px;">12U: Sat 8:45am • Sun 9:00am</p>
              <p style="margin: 5px 0; font-size: 14px;">14U: Sat 12:00pm • Sun 10:30am</p>
              <p style="margin: 5px 0; font-size: 14px;">19U: Sat 1:30pm • Sun 12:00pm</p>
            </div>
          </div>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; text-align: center;">
          <h3 style="color: #374151; margin-top: 0;">📞 Contact Information:</h3>
          <p style="margin: 10px 0;"><strong>Email:</strong> johnohoins@gmail.com</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> 970-708-0643</p>
          <p style="margin: 20px 0 0 0; font-style: italic; color: #6b7280;">We look forward to seeing you on the ice!</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>© 2024 Telluride Hockey Development. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    // Create admin email content
    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Registration - Telluride Hockey Skills Camp</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #dc2626; color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
          <h1 style="margin: 0;">🏒 New Registration Received</h1>
          <h2 style="margin: 10px 0 0 0; font-weight: normal;">Telluride Hockey Skills Camp</h2>
        </div>
        
        <div style="background: white; border: 2px solid #e5e7eb; padding: 25px; border-radius: 10px;">
          <h3 style="color: #dc2626; margin-top: 0;">Registration Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Player:</strong> ${formData.playerName}</li>
            <li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Age Group:</strong> ${formData.ageGroup}</li>
            <li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Parent/Guardian:</strong> ${formData.parentName}</li>
            <li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Email:</strong> ${formData.email}</li>
            <li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</li>
            ${formData.bothWeekends ? '<li style="margin: 10px 0; padding: 10px; background: #dcfce7; border-radius: 5px; color: #166534;"><strong>Registration:</strong> Both weekends (December 20-21 & 27-28)</li>' : ''}
            <li style="margin: 10px 0; padding: 10px; background: #fef3c7; border-radius: 5px; color: #92400e;"><strong>Payment Amount:</strong> ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</li>
            ${formData.notes ? `<li style="margin: 10px 0; padding: 10px; background: #fef2f2; border-radius: 5px;"><strong>Notes:</strong> ${formData.notes}</li>` : ''}
          </ul>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; text-align: center; margin-top: 25px;">
          <p style="margin: 0; font-weight: bold; color: #dc2626;">Please follow up with payment confirmation.</p>
        </div>
      </body>
      </html>
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