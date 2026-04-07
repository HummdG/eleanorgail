import type { Metadata } from 'next'
import { libreBaskerville, ptSans } from '@/lib/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppWidget from '@/components/layout/WhatsAppWidget'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Eleanor Gail — Wedding & Event Planner | Swansea, South Wales',
    template: '%s | Eleanor Gail',
  },
  description:
    "Eleanor Gail is Wales' leading luxury wedding, parties & corporate event planner, serving Swansea, Cardiff and the M4 corridor.",
  keywords: [
    'wedding planner',
    'event planner',
    'Swansea',
    'Cardiff',
    'South Wales',
    'corporate events',
    'party planning',
    'luxury weddings',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Eleanor Gail',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${libreBaskerville.variable} ${ptSans.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <div id="modal-root" />
      </body>
    </html>
  )
}
