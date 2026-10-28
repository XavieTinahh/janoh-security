# Janoh Security

Company website and product enquiry catalogue built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Contact form

Create `.env.local` with the public contact destinations:

```env
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

The form opens the visitor's email app when they enter an email address, or WhatsApp when they enter a phone number. The visitor confirms and sends the prepared message from that app.

## Routes

- `/` — Home
- `/services` — Security services
- `/shop` — Product catalogue and availability enquiries
- `/about` — Company information
- `/contact` — Contact form
