'use client'

import { useState } from 'react'

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CLOSE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const SEND_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
)

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup card */}
      <div
        className={`w-80 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-label="WhatsApp chat with Gail"
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/30 text-white text-lg font-bold select-none">
              G
            </div>
            {/* Online dot */}
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#25D366] bg-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white leading-tight">Gail Windley</p>
            <p className="text-xs text-white/80 leading-tight">Wedding Planner · Eleanor Gail</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="h-4 w-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat body — WhatsApp-style tiled background */}
        <div
          className="relative min-h-36 px-4 py-5"
          style={{
            backgroundColor: '#e5ddd5',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b2a99a' fill-opacity='0.25'%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23b2a99a' stroke-opacity='0.2' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {/* Message bubble */}
          <div className="relative max-w-[85%] rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
            {/* Bubble tail */}
            <div className="absolute -left-2 top-0 h-0 w-0 border-b-8 border-r-8 border-b-transparent border-r-white" />
            <p className="text-sm text-[#332727] leading-relaxed">
              👋 Hi! I&apos;m Gail. How can I help you plan your perfect day?
            </p>
            <p className="mt-1.5 text-right text-[10px] text-gray-400">a few minutes ago</p>
          </div>
        </div>

        {/* CTA button */}
        <a
          href="https://wa.me/447876551592?text=Hi%20Gail%2C%20I%27d%20love%20to%20discuss%20planning%20my%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 bg-[#25D366] py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#20bc5a]"
          onClick={() => setOpen(false)}
        >
          {SEND_ICON}
          Start Chat
        </a>
      </div>

      {/* FAB — WhatsApp icon when closed, × when open */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {/* Pulse ring — only when closed */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        )}
        <span className="relative transition-all duration-200">
          {open ? CLOSE_ICON : WA_ICON}
        </span>
      </button>

    </div>
  )
}
