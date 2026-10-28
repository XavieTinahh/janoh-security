import Link from 'next/link'
import { products } from '@/data/products'

const services = [
  ['Residential security', 'Security support for homes and residential communities.'],
  ['Business security', 'Guarding options for offices, shops and commercial premises.'],
  ['CCTV & access control', 'Camera and electronic gate installation enquiries for your site.'],
]

export default function Home() {
  return (
    <main className="bg-[#f4f3ed] text-[#18221d]">
      <section className="relative isolate flex min-h-[min(76svh,700px)] items-end overflow-hidden bg-[#17251e] text-white sm:min-h-[620px]">
        <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2200&q=85" alt="Security camera monitoring a property" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,18,14,0.9)_0%,rgba(9,18,14,0.64)_52%,rgba(9,18,14,0.15)_100%)]" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12">
          <p className="mb-6 text-sm font-semibold uppercase text-[#d4ec8b]">Janoh Security · Zimbabwe</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.06] sm:text-6xl lg:text-7xl">Security for the places that matter.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Practical security services and equipment for homes, businesses and industrial sites.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[#d4ec8b] px-6 py-3 text-sm font-semibold text-[#18221d] transition hover:bg-white">Request a quote</Link>
            <Link href="/shop" className="inline-flex min-h-12 items-center justify-center border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Browse the shop</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-sm font-semibold uppercase text-[#526743]">Security services</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Protection shaped around you.</h2></div>
            <Link href="/services" className="border-b border-[#526743] pb-1 text-sm font-semibold text-[#34432d]">Explore all services</Link>
          </div>
          <div className="grid border-t border-[#c8cdc4] md:grid-cols-3">
            {services.map(([title, description], index) => <article key={title} className="border-b border-[#c8cdc4] py-7 md:pr-8">
              <span className="font-serif text-2xl text-[#708260]">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#536057]">{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e7e9df] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase text-[#526743]">Janoh Security shop</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Equipment for added peace of mind.</h2></div><Link href="/shop" className="border-b border-[#526743] pb-1 text-sm font-semibold text-[#34432d]">View all products</Link></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <Link key={product.name} href="/shop" className="group bg-[#f4f3ed]">
              <img src={product.image} alt={product.alt} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5"><p className="text-xs font-semibold uppercase text-[#526743]">{product.category}</p><h3 className="mt-2 text-lg font-semibold group-hover:underline">{product.name}</h3><p className="mt-2 text-sm leading-6 text-[#536057]">Enquire for availability</p></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-y border-[#c8cdc4] py-10 md:flex-row md:items-center">
          <div><p className="text-sm font-semibold uppercase text-[#526743]">Talk to Janoh Security</p><h2 className="mt-2 font-serif text-3xl">Tell us what you need protected.</h2></div>
          <Link href="/contact" className="inline-flex min-h-12 w-fit items-center bg-[#26372d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#405743]">Contact our team</Link>
        </div>
      </section>
    </main>
  )
}
