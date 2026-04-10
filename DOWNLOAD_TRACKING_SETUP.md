# CV/Portfolio Download Tracking Setup Guide

Simple email notification system for tracking CV and Portfolio downloads.

---

## 🎯 What This Does

When someone clicks "Download CV" or "Download Portfolio":
1. A modal appears asking for their email, purpose, and optional remarks
2. You receive an email notification via Resend
3. They get the download

---

## 📋 Setup Steps

### Resend Setup (5 minutes)

**Step 1: Create Resend Account**
- Go to [resend.com](https://resend.com)
- Sign up for free (3,000 emails/month)

**Step 2: Get API Key**
- Go to "API Keys" in Resend dashboard
- Click "Create API Key"
- Copy the key (starts with `re_`)

**Step 3: Verify Your Domain (Optional but Recommended)**
- Go to "Domains" in Resend dashboard
- Add your domain (e.g., `yourdomain.com`)
- Add DNS records as shown
- Once verified, you can send from `downloads@yourdomain.com`
- If you skip this, use `onboarding@resend.dev` for testing

**Step 4: Create .env File**
Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_actual_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
NOTIFICATION_EMAIL=mehareac@gmail.com
```

Replace:
- `re_your_actual_key_here` with your actual Resend API key
- `onboarding@resend.dev` with your verified domain email (or keep for testing)
- `mehareac@gmail.com` with your email address

---

## 🔒 Security

**Never commit `.env` or `.env.local` to git!**

The `.gitignore` should already include these files.

---

## 🧪 Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open your site
3. Click "Download CV" or "Download Portfolio"
4. Fill in the form
5. Check your email inbox for notification

---

## 🚀 Deploy to Production

When deploying to Vercel/Netlify:

1. Add environment variables in the hosting dashboard:
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables

2. Add these three variables:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `NOTIFICATION_EMAIL`

3. Redeploy your site

---

## 📧 Email Format

You'll receive emails that look like:

**Subject:** New CV Download - john@company.com

**Body:**
```
Someone just downloaded your cv!

Email: john@company.com
Purpose: Hiring for a role
Remarks: Looking for a senior PM for our AI team
Downloaded: CV
Time: 4/10/2026, 2:30:00 PM
```

---

## 🐛 Troubleshooting

**Emails Not Sending**
- Check your `RESEND_API_KEY` is correct
- Verify `RESEND_FROM_EMAIL` domain is verified (or use `onboarding@resend.dev` for testing)
- Check Resend dashboard logs for errors

**Modal Not Appearing**
- Check browser console for errors
- Verify the modal component is imported correctly

**Error 500 on Submit**
- Check that all environment variables are set
- Look at server logs for specific error messages

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

### Make Remarks Required
Edit `components/DownloadModal.tsx`:
```tsx
<textarea
  id="remarks"
  required  // Add this
  ...
/>
```

---

## ✅ Quick Checklist

- [ ] Resend account created
- [ ] Resend API key obtained
- [ ] `.env.local` file created with all 3 variables
- [ ] Tested locally (npm run dev)
- [ ] Environment variables added to hosting platform
- [ ] Deployed to production
- [ ] Tested in production

---

## 💡 Tips

- The free Resend tier (3,000 emails/month) is plenty for portfolio downloads
- Emails are sent even if the user closes the browser after submitting
- All download data is included in the email for your records
- Consider setting up email filters to organize download notifications

---

That's it! Simple email tracking without any database or spreadsheet complexity.
