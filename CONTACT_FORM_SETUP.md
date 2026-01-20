# Contact Form Setup Instructions

The contact form needs to be configured to send emails to `nashvillendg@gmail.com`. Here are the recommended options:

## Option 1: Formspree (Recommended - Easiest)

1. **Create Account**
   - Go to [Formspree.io](https://formspree.io)
   - Sign up for a free account (50 submissions/month free)

2. **Create Form**
   - Click "New Form"
   - Name it "Liquor & Wine Outlet Contact"
   - Set the email to: `nashvillendg@gmail.com`
   - Copy your form endpoint (looks like: `https://formspree.io/f/xvqgqjkn`)

3. **Update the Form**
   - Open `dist/contact/index.html`
   - Find the form tag (line ~65)
   - Replace `YOUR_FORM_ID_HERE` with your Formspree form ID
   - Example: `action="https://formspree.io/f/xvqgqjkn"`

4. **Test**
   - Deploy to Render
   - Submit a test form
   - Check `nashvillendg@gmail.com` for the email

## Option 2: EmailJS (Client-Side Solution)

1. **Create Account**
   - Go to [EmailJS.com](https://www.emailjs.com)
   - Sign up for free account (200 emails/month free)

2. **Set Up Service**
   - Add Email Service (Gmail, Outlook, etc.)
   - Create Email Template:
     - To Email: `nashvillendg@gmail.com`
     - Subject: `Contact Form Submission - Liquor & Wine Outlet`
     - Body: Include `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`

3. **Update Code**
   - Get your Public Key, Service ID, and Template ID
   - Update `dist/assets/js/main.js`:
   ```javascript
   // Add EmailJS script in contact/index.html head:
   // <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   
   // Update form submission handler:
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
     name: data.name,
     email: data.email,
     phone: data.phone,
     message: data.message
   }, 'YOUR_PUBLIC_KEY');
   ```

## Option 3: Serverless Function (Advanced)

If you need more control, you can create a serverless function:

1. **AWS Lambda / Vercel / Netlify Functions**
   - Create a function that sends email via SendGrid, AWS SES, etc.
   - Update form to POST to your function endpoint

2. **Render Backend Service**
   - Create a simple Express.js service on Render
   - Use nodemailer or similar to send emails
   - Update form action to point to your backend

## Current Status

The form is currently set up with a placeholder Formspree endpoint. You **must** configure one of the options above before the form will work.

## Testing

After setup:
1. Deploy to Render
2. Visit the contact page
3. Fill out and submit the form
4. Check `nashvillendg@gmail.com` for the email

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **No email received**: Verify email service configuration
- **CORS errors**: Make sure your form service allows your domain
