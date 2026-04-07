import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#332727] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Eleanor Gail"
              width={160}
              height={53}
              className="mb-4 h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Wales&apos; leading luxury wedding, parties &amp; corporate event planner.
              Based in Swansea, serving the M4 corridor and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#AFE5E6]">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Fees', href: '/fees' },
                { label: 'Kind Words', href: '/kind-words' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#AFE5E6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#AFE5E6]">
              Get in Touch
            </h3>
            <address className="not-italic space-y-3 text-sm text-white/70">
              <p>
                <a
                  href="tel:07876551592"
                  className="transition-colors hover:text-[#AFE5E6]"
                >
                  0787 655 1592
                </a>
              </p>
              <p>
                <a
                  href="mailto:gail@eleanorgail.co.uk"
                  className="transition-colors hover:text-[#AFE5E6]"
                >
                  gail@eleanorgail.co.uk
                </a>
              </p>
              <p className="leading-relaxed">
                Eleanor Gail<br />
                Penygraig Road, Alltwen<br />
                Pontardawe, Swansea<br />
                SA8 3BS
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2024 Eleanor Gail. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/photography-credit" className="hover:text-white/70 transition-colors">
              Photography Credits
            </Link>
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
