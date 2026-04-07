'use client'

import { useState, useEffect, useCallback } from 'react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const current = testimonials[index]

  return (
    <section
      className="relative bg-[#332727] py-24 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('/images/wedding-planner-flowers.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Section label */}
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
          Kind Words
        </p>
        <h2 className="mb-12 font-serif text-3xl font-bold md:text-4xl">
          What Our Clients Say
        </h2>

        {/* Quote */}
        <div className="min-h-40">
          <blockquote
            key={index}
            className="animate-in fade-in duration-500"
          >
            <svg
              className="mx-auto mb-6 h-8 w-8 text-[#AFE5E6]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl italic">
              &ldquo;{current.excerpt}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-serif text-base font-semibold text-[#AFE5E6]">
                {current.name}
              </p>
              <p className="mt-1 text-sm text-white/50">{current.date}</p>
            </footer>
          </blockquote>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-[#AFE5E6] hover:text-[#AFE5E6]"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-[#AFE5E6]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-[#AFE5E6] hover:text-[#AFE5E6]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
