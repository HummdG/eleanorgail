import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/services'

export default function ServiceCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#332727] md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#AFE5E6]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block overflow-hidden bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-[#332727]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#332727] transition-gap group-hover:gap-3">
                  <span>Learn More</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
