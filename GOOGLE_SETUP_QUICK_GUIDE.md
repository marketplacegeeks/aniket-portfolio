# Quick Guide: Getting Google Sheets Credentials

## 📊 GOOGLE_SHEET_ID

**Super Easy - Just 2 steps:**

1. Create a new Google Sheet at [sheets.google.com](https://sheets.google.com)
2. Look at the URL in your browser:
   ```
   https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
                                          ^^^^^^^^^^^^^^^^^^^
                                          This is your Sheet ID
   ```
3. Copy that ID between `/d/` and `/edit`

**Add to .env:**
```env
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
```

---

## 🔑 GOOGLE_SERVICE_ACCOUNT_EMAIL & GOOGLE_PRIVATE_KEY

**Step-by-step with screenshots:**

### 1. Go to Google Cloud Console
- Visit: [console.cloud.google.com](https://console.cloud.google.com)
- Click "Select a project" → "New Project"
- Name it: "Portfolio Downloads" (or anything)
- Click "Create"

### 2. Enable Google Sheets API
- In the search bar at top, type: **"Google Sheets API"**
- Click on it
- Click the blue **"ENABLE"** button
- Wait a few seconds

### 3. Create Service Account
- Click hamburger menu (☰) → **"IAM & Admin"** → **"Service Accounts"**
- Click **"+ CREATE SERVICE ACCOUNT"** (top of page)
- Fill in:
  - **Service account name:** `download-tracker`
  - **Service account ID:** (auto-fills, leave it)
- Click **"CREATE AND CONTINUE"**
- Skip the two optional steps (just click "CONTINUE" then "DONE")

### 4. Create JSON Key (This gives you both values!)
- You'll see your new service account in the list
- Click on it (the email address)
- Go to the **"KEYS"** tab at the top
- Click **"ADD KEY"** → **"Create new key"**
- Choose **"JSON"** format
- Click **"CREATE"**
- A JSON file will download to your computer

### 5. Extract Values from JSON
Open the downloaded JSON file in any text editor. It looks like this:

```json
{
  "type": "service_account",
  "project_id": "portfolio-downloads-123456",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQE...\n-----END PRIVATE KEY-----\n",
  "client_email": "download-tracker@portfolio-downloads-123456.iam.gserviceaccount.com",
  "client_id": "123456789",
  ...
}
```

**Extract these two:**

1. **GOOGLE_SERVICE_ACCOUNT_EMAIL** = Copy the `client_email` value
2. **GOOGLE_PRIVATE_KEY** = Copy the entire `private_key` value (INCLUDING the quotes and \n characters)

### 6. Add to .env

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=download-tracker@portfolio-downloads-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

⚠️ **IMPORTANT:**
- Keep the quotes around the private key
- Keep all the `\n` characters in the private key
- Just copy-paste the entire value from the JSON file

### 7. Share Your Sheet with the Service Account
- Open your Google Sheet
- Click **"Share"** button (top right)
- Paste the **service account email** (the long one ending in `.iam.gserviceaccount.com`)
- Set permission to **"Editor"**
- **Uncheck** "Notify people"
- Click **"Share"**

---

## ✅ Final .env File

Your complete `.env` file should look like:

```env
# Resend API Configuration
RESEND_API_KEY=re_abc123xyz789
RESEND_FROM_EMAIL=onboarding@resend.dev
NOTIFICATION_EMAIL=mehareac@gmail.com

# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=download-tracker@portfolio-downloads-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
```

---

## 🧪 Test It

After setting up:

1. Create `.env` file with all the values
2. Make sure your Google Sheet has these headers:
   ```
   Timestamp | Email | Purpose | Remarks | Type | Formatted Date
   ```
3. Run: `npm run dev`
4. Click "Download CV" on your site
5. Fill in the form
6. Check:
   - ✅ Email arrives in your inbox
   - ✅ New row appears in your Google Sheet
   - ✅ File downloads

---

## 🐛 Troubleshooting

**Error: "insufficient authentication scopes"**
- Make sure you shared the sheet with the service account email
- The service account needs "Editor" access

**Error: "PERMISSION_DENIED"**
- Double-check the service account email in the Share dialog
- Make sure it ends with `.iam.gserviceaccount.com`

**Private key error**
- Make sure you kept the quotes around the key
- Make sure all the `\n` are there (don't replace them with actual line breaks)
- Copy the entire value from the JSON file including quotes

**Sheet not found**
- Verify the GOOGLE_SHEET_ID is correct
- It should be just the ID, not the full URL

---

## 📹 Video Tutorial (If You Need It)

Search YouTube for: "Google Service Account Setup" - there are many visual guides!

The key points are:
1. Create project in Google Cloud
2. Enable Google Sheets API
3. Create Service Account
4. Download JSON key
5. Share your sheet with the service account email
