import Link from 'next/link'

export const metadata = { title: 'About us | Janoh Security' }

export default function AboutPage() {
  return <main className="min-h-[70vh] bg-[#f4f3ed] px-5 py-16 text-[#18221d] sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#c8cdc4] py-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16"><div><p className="text-sm font-semibold uppercase text-[#526743]">About Janoh Security</p><h1 className="mt-3 font-serif text-5xl leading-tight">Local priorities. Practical protection.</h1></div><div><p className="text-lg leading-8 text-[#34413a]">Janoh Security supports security needs for homes, companies and industrial environments in Zimbabwe. Our work brings together security services, CCTV and electronic gate installation, alongside a growing range of security equipment.</p><p className="mt-5 text-base leading-7 text-[#536057]">Every site has different needs. We begin by listening, then discuss practical options for the property, people and budget.</p><Link href="/contact" className="mt-7 inline-flex border-b border-[#526743] pb-1 text-sm font-semibold text-[#34432d]">Talk through your requirements</Link></div></div>
  </main>
}
