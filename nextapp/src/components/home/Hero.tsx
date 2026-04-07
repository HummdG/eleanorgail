'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/wedding-banner.jpg"
        alt="Elegant wedding celebration by Eleanor Gail"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay — stronger centre for readability */}
      <div className="absolute inset-0 bg-[#1a1008]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/70 via-transparent to-[#1a1008]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6] [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
            Swansea — Cardiff
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
            South Wales&apos; Leading<br />
            <span className="italic">Wedding &amp; Events</span><br />
            Planning
          </h1>
          <div className="mx-auto my-6 h-px w-20 bg-[#AFE5E6]" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/90 md:text-lg [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            At Eleanor Gail we specialise in creating unique and beautiful weddings,
            events and special occasions that exceed our clients&apos; expectations.
            Rule-free planning, putting your vision at the centre of everything we do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/contact" variant="white">
            Start Planning
          </Button>
          <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-[#332727]">
            Our Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
