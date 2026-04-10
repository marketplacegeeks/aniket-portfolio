# CV/Portfolio Download Tracking Setup Guide

This guide will help you set up email notifications and Google Sheets logging for CV/Portfolio downloads.

---

## 🎯 What This Does

When someone clicks "Download CV" or "Download Portfolio":
1. A modal appears asking for their email and purpose
2. You receive an email notification via Resend
3. The data is logged to a Google Sheet
4. They get the download

---

## 📋 Setup Steps

### 1. Resend Setup (Email Notifications)

**Step 1: Create Resend Account**
- Go to [resend.com](https://resend.com)
- Sign up for free (3,000 emails/month)

**Step 2: Get API Key**
- Go to "API Keys" in Resend dashboard
- Click "Create API Key"
- Copy the key (starts with `re_`)

**Step 3: Verify Your Domain (Optional but Recommended)**
- Go to "Domains" in Resend dashboard
- Add your domain (e.g., `scouterzero.com`)
- Add DNS records as shown
- Once verified, you can send from `downloads@scouterzero.com`

**Step 4: Add to .env**
```env
RESEND_API_KEY=re_your_actual_key_here
RESEND_FROM_EMAIL=downloads@yourdomain.com  # or onboarding@resend.dev for testing
NOTIFICATION_EMAIL=mehareac@gmail.com       # Your email to receive notifications
```

---

### 2. Google Sheets Setup (Data Logging)

**Step 1: Create a Google Sheet**
- Go to [sheets.google.com](https://sheets.google.com)
- Create a new sheet called "Download Tracking"
- Add these headers in Row 1:
  ```
  Timestamp | Email | Purpose | Remarks | Type | Formatted Date
  ```
- Copy the Sheet ID from URL: `https://docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit`

**Step 2: Create Service Account**
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a new project (or select existing)
- Enable "Google Sheets API":
  - Click "Enable APIs and Services"
  - Search "Google Sheets API"
  - Click "Enable"

**Step 3: Create Service Account Credentials**
- Go to "Credentials" → "Create Credentials" → "Service Account"
- Give it a name: "Download Tracker"
- Click "Create and Continue"
- Skip "Grant Access" and "Grant User Access" (click Continue/Done)
- Click on the service account you just created
- Go to "Keys" tab → "Add Key" → "Create New Key"
- Choose "JSON" format
- Download the JSON file

**Step 4: Share Sheet with Service Account**
- Open your Google Sheet
- Click "Share"
- Paste the service account email (from JSON: `client_email`)
  - Example: `download-tracker@your-project.iam.gserviceaccount.com`
- Give it "Editor" access
- Uncheck "Notify people"
- Click "Share"

**Step 5: Add to .env**
Open the downloaded JSON file and extract:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=the_client_email_from_json
GOOGLE_PRIVATE_KEY="the_private_key_from_json_with_quotes"
GOOGLE_SHEET_ID=your_sheet_id_from_url
```

⚠️ **Important**: The private key must include the quotes and `\n` characters. It should look like:
```
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...\n-----END PRIVATE KEY-----\n"
```

---

## 🔒 Security

**Never commit `.env` to git!**

The `.gitignore` should already include `.env`, but verify:
```bash
echo ".env" >> .gitignore
```

---

## 🧪 Testing

### Test Locally

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open your site
3. Click "Download CV" or "Download Portfolio"
4. Fill in the form
5. Check:
   - ✅ You receive an email
   - ✅ Data appears in your Google Sheet
   - ✅ File downloads after submission

### Test Email Separately (Optional)
Create `test-email.js`:
```javascript
const { Resend } = require('resend');
const resend = new Resend('your_api_key_here');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'your@email.com',
  subject: 'Test Email',
  html: '<p>It works!</p>'
}).then(console.log).catch(console.error);
```

Run: `node test-email.js`

---

## 🚀 Deploy to Production

When deploying to Vercel/Netlify:

1. Add all environment variables in the hosting dashboard:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

2. Redeploy your site

---

## 📊 Google Sheet Structure

Your sheet will be populated like this:

| Timestamp | Email | Purpose | Type | Formatted Date |
|-----------|-------|---------|------|----------------|
| 2026-04-10T10:30:00.000Z | hiring@company.com | Hiring for a role | cv | 4/10/2026, 10:30:00 AM |
| 2026-04-10T11:15:00.000Z | john@startup.com | Exploring collaboration | portfolio | 4/10/2026, 11:15:00 AM |

---

## 🐛 Troubleshooting

### Emails Not Sending
- Check your `RESEND_API_KEY` is correct
- Verify `RESEND_FROM_EMAIL` domain is verified (or use `onboarding@resend.dev` for testing)
- Check Resend dashboard logs

### Google Sheets Not Logging
- Verify service account email has Editor access to the sheet
- Check `GOOGLE_SHEET_ID` is correct
- Make sure `GOOGLE_PRIVATE_KEY` has proper line breaks (`\n`)
- Check the sheet name is "Sheet1" (or update in code)

### Modal Not Appearing
- Check browser console for errors
- Verify the modal component is imported correctly

---

## 🎨 Customization

### Change Purpose Options
Edit `components/DownloadModal.tsx`:
```tsx
<option value="Your custom option">Your custom option</option>
```

### Change Email Template
Edit `app/api/track-download/route.ts`:
```typescript
html: `Your custom HTML email template here`
```

### Add More Fields
1. Add field to modal form
2. Add to API request body
3. Add to Google Sheets columns

---

## 📞 Support

If you run into issues:
1. Check the Resend [documentation](https://resend.com/docs)
2. Check Google Sheets API [documentation](https://developers.google.com/sheets/api)
3. Review browser console and server logs

---

## ✅ Checklist

- [ ] Resend account created
- [ ] Resend API key added to .env
- [ ] Domain verified in Resend (optional)
- [ ] Google Sheet created with headers
- [ ] Google Sheets API enabled
- [ ] Service account created
- [ ] Service account has access to sheet
- [ ] All env vars added to .env
- [ ] Tested locally
- [ ] Environment variables added to hosting platform
- [ ] Deployed to production
