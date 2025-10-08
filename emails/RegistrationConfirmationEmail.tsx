import { Html, Head, Preview, Body, Container, Img } from "react-email";

export default function RegistrationConfirmationEmail({ 
  playerName, 
  ageGroup, 
  parentName, 
  email, 
  phone, 
  bothWeekends, 
  notes 
}: {
  playerName: string;
  ageGroup: string;
  parentName: string;
  email: string;
  phone?: string;
  bothWeekends?: boolean;
  notes?: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Registration Confirmed - Telluride Hockey Development</Preview>
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
          
          {/* Header */}
          <h1 style={{ 
            margin: "0 0 8px 0", 
            fontSize: "28px", 
            fontWeight: "600", 
            color: "#111827", 
            textAlign: "center" 
          }}>
            Telluride Hockey Development
          </h1>
          <p style={{ 
            margin: "0 0 32px 0", 
            fontSize: "16px", 
            color: "#6b7280", 
            textAlign: "center" 
          }}>
            Winter Hockey Skills Camp
          </p>
          
          {/* Thank You Message */}
          <p style={{ margin: "0 0 24px 0", fontSize: "16px", color: "#111827" }}>
            Thank you for registering for the Telluride Hockey Skills Camp!
          </p>
          <p style={{ margin: "0 0 32px 0", fontSize: "16px", color: "#111827" }}>
            We're excited to have {playerName} join us.
          </p>
          
          {/* Registration Details */}
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            Player: {playerName}
          </p>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            Age Group: {ageGroup}
          </p>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            Parent/Guardian: {parentName}
          </p>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            Email: {email}
          </p>
          <p style={{ margin: "0 0 32px 0", fontSize: "16px", color: "#111827" }}>
            Phone: {phone || 'Not provided'}
          </p>
          {bothWeekends && (
            <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
              Registration: Both weekends (December 20-21 & 27-28)
            </p>
          )}
          {notes && (
            <p style={{ margin: "0 0 32px 0", fontSize: "16px", color: "#111827" }}>
              Notes: {notes}
            </p>
          )}
          
          {/* Payment Instructions */}
          <h2 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "20px", 
            fontWeight: "600", 
            color: "#111827" 
          }}>
            Payment Instructions
          </h2>
          <p style={{ margin: "0 0 24px 0", fontSize: "16px", color: "#111827" }}>
            Amount: {bothWeekends ? '$380 (both weekends)' : '$190 (one weekend)'}
          </p>
          
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            <strong>Venmo Payment:</strong> Please scan the QR code below to submit payment.
          </p>
          
          <Img
            src={`${process.env.NEXT_PUBLIC_SITE_URL}/venmo-qr.png`}
            alt="Venmo QR"
            width={180}
            height={180}
            style={{ display: 'block', margin: '16px auto', borderRadius: 8 }}
          />
          
          <p style={{ 
            color: '#6B7280', 
            fontSize: '14px', 
            textAlign: 'center',
            margin: "0 0 24px 0"
          }}>
            Please include the player's name in the Venmo payment notes.
          </p>
          
          <p style={{ margin: "0 0 32px 0", fontSize: "16px", color: "#111827" }}>
            <strong>Cash Payment:</strong> You may bring the exact amount to your first session.
          </p>
          
          {/* Camp Schedule */}
          <h2 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "20px", 
            fontWeight: "600", 
            color: "#111827" 
          }}>
            Camp Schedule
          </h2>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            December 21–22: Sat 9–10:50am, Sun 9–10:50am
          </p>
          <p style={{ margin: "0 0 32px 0", fontSize: "16px", color: "#111827" }}>
            December 27–28: Sat 9–10:50am, Sun 9–10:50am
          </p>
          
          {/* Footer */}
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#111827" }}>
            Contact: johnohoins@gmail.com • 970-708-0643
          </p>
          <p style={{ margin: "0", fontSize: "16px", color: "#111827" }}>
            We look forward to seeing you at the rink!
          </p>
          
        </Container>
      </Body>
    </Html>
  );
}
