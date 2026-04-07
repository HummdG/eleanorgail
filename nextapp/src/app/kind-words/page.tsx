import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import { testimonials } from '@/data/testimonials'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Kind Words',
  description:
    'Read what our happy clients say about Eleanor Gail — testimonials from real weddings and events across South Wales.',
}

export default function KindWordsPage() {
  return (
    <>
      <PageHero
        title="Kind Words"
        subtitle="What our wonderful clients say"
        backgroundImage="/images/wedding-planner-flowers.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="text-gray-600">
              We are honoured and humbled by the kind words our clients share with us.
              These are just some of the messages we&apos;ve received.
            </p>
          </div>

          <div className="space-y-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-8"
              >
                <svg
                  className="mb-4 h-6 w-6 text-[#AFE5E6]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mb-4 leading-relaxed text-gray-700 italic">
                  &ldquo;{t.full}&rdquo;
                </blockquote>
                <footer className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-[#332727]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.date}</p>
                  </div>
                </footer>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-gray-600">
              Ready to create your own story? Let&apos;s start planning.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
