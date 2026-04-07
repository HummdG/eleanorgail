import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/shared/PageHero'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Eleanor Gail offers full-service wedding planning, corporate event management and private party planning across South Wales.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Exceptional events from conception to delivery"
        backgroundImage="/images/wedding-planner-flowers.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 text-center">
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
              Eleanor Gail are Wales&apos; premier wedding and event planning specialists.
              Our extensive experience means you have complete peace of mind that your event
              will run smoothly. Our services are flexible — we can assist with specific
              aspects or organise everything from start to finish.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.href}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                    Service
                  </p>
                  <h2 className="mb-4 font-serif text-3xl font-bold text-[#332727]">
                    {service.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#332727] transition-gap hover:gap-3"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
