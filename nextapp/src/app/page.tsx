import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ServiceCards from '@/components/home/ServiceCards'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import CtaSection from '@/components/home/CtaSection'
import Image from 'next/image'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Wedding & Event Planner Swansea, Cardiff, South Wales — Eleanor Gail',
  description:
    "Eleanor Gail is Wales' leading luxury wedding, parties & corporate event planner. Specialising in weddings, corporate events and private parties across South Wales.",
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro strip */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                About Eleanor Gail
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
                First Class, Luxury Experiences
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                Whether you need help with wedding planning, private parties or corporate events,
                we provide first class luxury experiences from conception to delivery, working in
                collaboration with you and our enviable supplier list.
              </p>
              <p className="mb-8 leading-relaxed text-gray-600">
                Constantly looking for new trends, unorthodox in our approach and unapologetically
                client focused — we strive for excellence in everything we do.
              </p>
              <Button href="/about">Meet Gail</Button>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/gail-windley.jpg"
                alt="Gail Windley, owner and lead planner at Eleanor Gail"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceCards />

      {/* Why choose us */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#332727] md:text-4xl">
              Why Choose Eleanor Gail
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#AFE5E6]" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '✦',
                title: 'Rule-Free Planning',
                body: 'Your vision, your way. We put your ideas at the centre of every decision.',
              },
              {
                icon: '✦',
                title: 'Transparent Fees',
                body: 'No commissions. Any supplier discounts we negotiate are passed directly to you.',
              },
              {
                icon: '✦',
                title: 'Full Coverage',
                body: 'From Swansea to Cardiff, Bristol and beyond — we travel for our clients.',
              },
              {
                icon: '✦',
                title: 'Award Winning',
                body: "Recognised as one of South Wales' most trusted luxury event planners.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="mb-4 block text-2xl text-[#AFE5E6]">{item.icon}</span>
                <h3 className="mb-2 font-serif text-lg font-bold text-[#332727]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <CtaSection />
    </>
  )
}
