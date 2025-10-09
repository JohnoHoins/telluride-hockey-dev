import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

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

// Function to add registration to Google Sheets
async function addToGoogleSheet(formData: RegistrationData) {
  try {
    if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
      console.log('Google Sheets not configured, skipping...');
      return;
    }

    // Parse the private key (it might have escaped newlines)
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });
    
    const row = [
      timestamp,
      formData.parentName,
      formData.email,
      formData.phone || '',
      formData.playerName,
      formData.ageGroup,
      formData.bothWeekends ? 'Both Weekends' : 'One Weekend',
      formData.bothWeekends ? '$380' : '$190',
      formData.notes || '',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:I', // Adjust sheet name if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    console.log('Successfully added to Google Sheet');
  } catch (error) {
    console.error('Error adding to Google Sheet:', error);
    // Don't fail the registration if Google Sheets fails
  }
}

export async function POST(request: Request) {
  try {
    const formData: RegistrationData = await request.json();
    console.log('Registration received:', formData);
    console.log('RESEND_API_KEY available:', !!process.env.RESEND_API_KEY);
    
    // Add to Google Sheet
    await addToGoogleSheet(formData);
    
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
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border: 1px solid #e2e8f0;">
          <h3 style="margin-top: 0; color: #1e40af; font-size: 20px; font-weight: bold;">Payment Instructions</h3>
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; color: #1e40af;">Amount Due: ${formData.bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}</p>
            
            <a href="https://venmo.com/code?user_id=@johno-hoins&amount=${formData.bothWeekends ? '380' : '190'}&note=${encodeURIComponent(formData.playerName + ' - Telluride Hockey Camp')}" 
               style="display: inline-block; background: #3b82f6; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; margin: 10px 0;">
              Pay with Venmo
            </a>
            <p style="font-size: 14px; color: #6b7280; margin-top: 10px;">Tap to open Venmo app and pay instantly</p>
          </div>
          
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="font-size: 15px; color: #374151; margin: 0 0 10px 0; font-weight: 600;">Or send manually:</p>
            <p style="font-size: 15px; color: #374151; margin: 5px 0;"><strong>Venmo:</strong> @johno-hoins</p>
            <p style="font-size: 15px; color: #374151; margin: 5px 0;"><strong>Amount:</strong> $${formData.bothWeekends ? '380' : '190'}</p>
            <p style="font-size: 15px; color: #374151; margin: 5px 0;"><strong>Note:</strong> ${formData.playerName} - Telluride Hockey Camp</p>
          </div>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #374151; font-size: 16px; font-weight: 500;">Alternative: You may also bring the exact amount in cash to your first session</p>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #1e40af; font-size: 18px; text-align: center;">Camp Schedule</h3>
          
          <div style="background: #3b82f6; padding: 15px; border-radius: 8px; margin-bottom: 10px; color: white;">
            <h4 style="margin: 0 0 8px 0; color: white; font-size: 16px; font-weight: bold;">December 20–21</h4>
            <p style="margin: 0; color: #dbeafe; font-size: 14px; line-height: 1.4;">
              <strong>6U & 8U:</strong> Sat 8:45am • Sun 9:00am<br>
              <strong>10U:</strong> Sat 12:00pm • Sun 10:30am<br>
              <strong>19U/High School:</strong> Sat 1:30pm • Sun 12:00pm
            </p>
          </div>
          
          <div style="background: #10b981; padding: 15px; border-radius: 8px; color: white;">
            <h4 style="margin: 0 0 8px 0; color: white; font-size: 16px; font-weight: bold;">December 27–28</h4>
            <p style="margin: 0; color: #d1fae5; font-size: 14px; line-height: 1.4;">
              <strong>12U:</strong> Sat 8:45am • Sun 9:00am<br>
              <strong>14U:</strong> Sat 12:00pm • Sun 10:30am<br>
              <strong>19U/High School:</strong> Sat 1:30pm • Sun 12:00pm
            </p>
          </div>
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
          from: 'Telluride Hockey <registration@telluride-hockey-dev.com>',
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