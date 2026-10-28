'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { href: '/services', label: 'Services' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#d9ddd4] bg-[#f4f3ed] text-[#18221d]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0 text-lg font-bold uppercase tracking-[0.08em]" onClick={() => setMenuOpen(false)}>
          Janoh <span className="font-normal text-[#64715f]">Security</span>
        </Link>
        <button
          type="button"
          className="inline-flex min-h-10 items-center border border-[#b9c0b3] px-3 text-sm font-semibold md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-b border-[#d9ddd4] bg-[#f4f3ed] px-5 pb-5 pt-2 text-sm md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:p-0`}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="py-3 text-[#536057] transition hover:text-black md:py-2">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex min-h-11 items-center justify-center bg-[#26372d] px-4 font-semibold text-white transition hover:bg-[#405743] md:mt-0">
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
