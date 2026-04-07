'use client'

import { useState } from 'react'
import Link from 'next/link'

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

interface MobileMenuProps {
  isScrolled: boolean
}

export default function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className={`flex flex-col gap-1.5 p-2 transition-colors ${
          isScrolled ? 'text-[#332727]' : 'text-white'
        }`}
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            open ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
            open ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>

      {/* Drawer */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg">
          <nav className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-[#332727] font-medium hover:text-[#AFE5E6] transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="bg-gray-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-10 py-3 text-sm text-[#332727] hover:text-[#AFE5E6] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
