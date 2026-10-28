import Link from 'next/link'

const services = [
  { title: 'Residential protection', text: 'Security personnel and practical protection solutions for houses, family properties and residential communities.' },
  { title: 'Business security', text: 'Guarding options for offices, shops and commercial premises, shaped around your site and operating hours.' },
  { title: 'Industrial sites', text: 'Security support for industrial facilities, staff areas, entrances and larger sites.' },
  { title: 'CCTV installation', text: 'Camera system enquiries, from an initial site assessment through installation planning.' },
  { title: 'Electronic gates', text: 'Access control and electronic gate installation enquiries for residential and commercial sites.' },
]

export default function ServicesPage() {
  return <main className="min-h-[70vh] bg-[#f4f3ed] px-5 py-16 text-[#18221d] sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase text-[#526743]">Services</p><h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">Protection built around your site.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#536057]">Start with a conversation about your people, property and priorities. We will help you explore the right next step.</p>
      <div className="mt-14 grid border-t border-[#c8cdc4] md:grid-cols-2">{services.map((service, index) => <article key={service.title} className="grid gap-4 border-b border-[#c8cdc4] py-8 sm:grid-cols-[64px_1fr] sm:pr-10"><span className="font-serif text-2xl text-[#708260]">{String(index + 1).padStart(2, '0')}</span><div><h2 className="text-xl font-semibold">{service.title}</h2><p className="mt-2 max-w-lg text-sm leading-6 text-[#536057]">{service.text}</p></div></article>)}</div>
      <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center bg-[#26372d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#405743]">Request a site visit</Link>
    </div>
  </main>
}
