import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contact | Janoh Security' }

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const { product } = await searchParams
  const initialDetails = product ? `I would like to ask about ${product}.` : ''

  return <main className="min-h-[70vh] bg-[#17251e] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-semibold uppercase text-[#d4ec8b]">Contact & quotes</p><h1 className="mt-3 max-w-xl font-serif text-5xl leading-tight">Tell us what you need protected.</h1><p className="mt-5 max-w-lg text-base leading-7 text-white/75">Request a site visit, ask about a service or check product availability. Share a few details and our team can follow up.</p><p className="mt-8 text-sm text-white/60">Serving residential, business and industrial needs in Zimbabwe.</p></div><ContactForm contactEmail={contactEmail} whatsappNumber={whatsappNumber} initialDetails={initialDetails} /></div>
  </main>
}
