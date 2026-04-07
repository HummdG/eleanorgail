'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Wedding Planner', href: '/services/wedding-planner' },
      { label: 'Corporate Events', href: '/services/corporate-events' },
      { label: 'Private Parties', href: '/services/private-parties' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Fees', href: '/fees' },
  { label: 'Kind Words', href: '/kind-words' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isTransparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/50 to-transparent'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 z-50">
            <Image
              src="/images/logo.png"
              alt="Eleanor Gail — Wedding & Event Planner"
              width={180}
              height={60}
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                isTransparent ? 'brightness-0 invert' : ''
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-[#AFE5E6] ${
                      isTransparent ? 'text-white drop-shadow-sm' : 'text-[#332727]'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full min-w-48 bg-white shadow-xl border-t-2 border-[#AFE5E6]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-[#332727] hover:bg-[#AFE5E6]/20 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-[#AFE5E6] ${
                    isTransparent ? 'text-white drop-shadow-sm' : 'text-[#332727]'
                  } ${pathname === link.href ? 'border-b-2 border-[#AFE5E6]' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger — always visible */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors"
          >
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? 'translate-y-[7px] rotate-45 bg-[#332727]'
                  : isTransparent
                  ? 'bg-white'
                  : 'bg-[#332727]'
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                mobileOpen ? 'opacity-0 bg-[#332727]' : isTransparent ? 'bg-white' : 'bg-[#332727]'
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? '-translate-y-[7px] -rotate-45 bg-[#332727]'
                  : isTransparent
                  ? 'bg-white'
                  : 'bg-[#332727]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay, outside header so width/positioning is reliable */}
      <div
        className={`fixed inset-0 z-30 flex flex-col bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top spacer (matches header height) */}
        <div className="h-[72px] shrink-0 border-b border-gray-100" />

        {/* Links */}
        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.href} className="border-b border-gray-100">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-8 py-5 font-serif text-lg font-semibold text-[#332727] transition-colors hover:text-[#AFE5E6] hover:bg-gray-50 ${
                  pathname === link.href ? 'text-[#AFE5E6]' : ''
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="bg-[#FAF8F5]">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-12 py-3.5 text-sm text-gray-600 hover:text-[#332727] transition-colors"
                    >
                      — {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer strip */}
        <div className="shrink-0 border-t border-gray-100 px-8 py-6">
          <p className="text-xs text-gray-400">© 2024 Eleanor Gail</p>
          <a href="tel:07876551592" className="mt-1 block text-sm font-medium text-[#332727]">
            0787 655 1592
          </a>
        </div>
      </div>
    </>
  )
}
