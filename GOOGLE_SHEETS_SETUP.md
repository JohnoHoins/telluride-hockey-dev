# Google Sheets Setup Instructions

This guide will help you automatically save all registrations to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Telluride Hockey Registrations" (or whatever you prefer)
4. Add these column headers in the first row:
   - A1: `Timestamp`
   - B1: `Parent/Guardian Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Player Name`
   - F1: `Age Group`
   - G1: `Weekends`
   - H1: `Amount`
   - I1: `Notes`

5. Copy the Sheet ID from the URL. It's the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/[THIS_IS_THE_SHEET_ID]/edit
   ```

## Step 2: Create a Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
   - Name it "Telluride Hockey" or similar
3. Enable the Google Sheets API:
   - In the search bar, type "Google Sheets API"
   - Click on it and click "Enable"
4. Create a Service Account:
   - Go to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Name: `telluride-hockey-sheets`
   - Click "Create and Continue"
   - Skip the optional steps, click "Done"
5. Create a Key:
   - Click on the service account you just created
   - Go to the "Keys" tab
   - Click "Add Key" → "Create new key"
   - Select "JSON"
   - Click "Create" - this will download a JSON file

## Step 3: Extract Credentials from JSON

Open the downloaded JSON file. You'll need two values:
- `client_email` - looks like: `something@project-name.iam.gserviceaccount.com`
- `private_key` - a long text starting with `-----BEGIN PRIVATE KEY-----`

## Step 4: Share the Sheet with Service Account

1. Go back to your Google Sheet
2. Click the "Share" button (top right)
3. Paste the `client_email` from step 3
4. Give it "Editor" permissions
5. **Uncheck "Notify people"**
6. Click "Share"

## Step 5: Add Environment Variables to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (`telluride-hockey-dev`)
3. Go to "Settings" → "Environment Variables"
4. Add these three variables:

**GOOGLE_SHEET_ID**
```
[paste the Sheet ID from Step 1]
```

**GOOGLE_SHEETS_CLIENT_EMAIL**
```
[paste the client_email from the JSON file]
```

**GOOGLE_SHEETS_PRIVATE_KEY**
```
[paste the ENTIRE private_key from the JSON file, including -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----]
```

5. Click "Save" for each one
6. Redeploy your site (Vercel → Deployments → click "..." → Redeploy)

## Step 6: Test It!

1. Go to your website
2. Submit a test registration
3. Check your Google Sheet - a new row should appear with all the data!

## Data You'll See

Every registration will automatically create a new row with:
- Timestamp (when they registered)
- Parent/Guardian Name
- Email
- Phone
- Player Name
- Age Group (6U, 8U, 10U, etc.)
- Weekends (One Weekend or Both Weekends)
- Amount ($190 or $380)
- Notes (if they added any)

You can sort, filter, and export this data anytime!

## Troubleshooting

- If registrations aren't appearing, check Vercel logs for errors
- Make sure the service account email has Editor access to the sheet
- Make sure all three environment variables are set correctly in Vercel
- The private key must include the BEGIN and END lines

