import Link from 'next/link'
import { products } from '@/data/products'

export const metadata = { title: 'Shop | Janoh Security' }

export default function ShopPage() {
  return <main className="min-h-[70vh] bg-[#f4f3ed] px-5 py-14 text-[#18221d] sm:px-8 lg:px-12 lg:py-20">
    <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase text-[#526743]">Janoh Security shop</p><h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">Security equipment for home and work.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#536057]">Browse our product categories and contact us to confirm current models, availability and pricing.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <article key={product.name} className="flex flex-col bg-white">
        <img src={product.image} alt={product.alt} className="aspect-[4/3] w-full object-cover" />
        <div className="flex flex-1 flex-col p-5"><p className="text-xs font-semibold uppercase text-[#526743]">{product.category}</p><h2 className="mt-2 text-xl font-semibold">{product.name}</h2><p className="mt-3 text-sm leading-6 text-[#536057]">{product.description}</p><Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="mt-auto inline-flex w-fit border-b border-[#526743] pb-1 pt-6 text-sm font-semibold text-[#34432d]">Ask about this product</Link></div>
      </article>)}</div>
      <p className="mt-8 border-l-2 border-[#708260] pl-4 text-sm leading-6 text-[#536057]">This catalogue is an enquiry service. We will confirm stock and final pricing before you place an order.</p>
    </div>
  </main>
}
