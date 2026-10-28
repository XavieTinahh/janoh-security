'use client'

import { FormEvent, useState } from 'react'

interface ContactFormProps {
  contactEmail: string
  whatsappNumber: string
  initialDetails?: string
}

export default function ContactForm({ contactEmail, whatsappNumber, initialDetails = '' }: ContactFormProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const customerContact = String(formData.get('contact') ?? '').trim()
    const subject = `Security enquiry: ${formData.get('enquiryType')}`
    const body = [
      `Name: ${formData.get('name')}`,
      `Contact: ${customerContact}`,
      `Enquiry: ${formData.get('enquiryType')}`,
      '',
      formData.get('details'),
    ].join('\n')

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerContact)
    const isPhone = /^[+\d\s().-]+$/.test(customerContact) && customerContact.replace(/\D/g, '').length >= 7

    if (isEmail) {
      if (!contactEmail) {
        setMessage('The company email address has not been configured yet.')
        return
      }

      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setMessage('Your email app should open with your enquiry ready to send.')
      return
    }

    if (isPhone) {
      if (!whatsappNumber) {
        setMessage('The company WhatsApp number has not been configured yet.')
        return
      }

      const number = whatsappNumber.replace(/\D/g, '')
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, '_blank', 'noopener,noreferrer')
      setMessage('WhatsApp should open with your enquiry ready to send.')
      return
    }

    setMessage('Enter a valid email address or phone number so we know how to open your enquiry.')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium">
        Your name
        <input
          required
          name="name"
          autoComplete="name"
          className="min-h-12 border border-white/20 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d4ec8b]"
          placeholder="Name"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Your email or phone number
        <input
          required
          name="contact"
          autoComplete="on"
          inputMode="text"
          type="text"
          className="min-h-12 border border-white/20 bg-white/5 px-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d4ec8b]"
          placeholder="How can we reach you?"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        What can we help with?
        <select
          name="enquiryType"
          className="min-h-12 border border-white/20 bg-[#203229] px-4 text-white outline-none focus:border-[#d4ec8b]"
        >
          <option>Request a site visit or quote</option>
          <option>Security personnel</option>
          <option>CCTV or electronic gate installation</option>
          <option>Product availability</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        A few details
        <textarea
          required
          name="details"
          rows={4}
          className="resize-y border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#d4ec8b]"
          defaultValue={initialDetails}
          placeholder="Tell us about the property, service or equipment you have in mind."
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="min-h-12 bg-[#d4ec8b] px-6 py-3 text-sm font-semibold text-[#18221d] transition hover:bg-white"
        >
          {contactEmail ? 'Prepare email enquiry' : 'Prepare enquiry'}
        </button>
        <p aria-live="polite" className="mt-3 min-h-5 text-sm text-white/70">
          {message}
        </p>
      </div>
    </form>
  )
}
