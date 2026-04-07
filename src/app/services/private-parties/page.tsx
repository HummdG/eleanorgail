import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import Button from '@/components/shared/Button'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'Private Parties',
  description:
    'Bespoke private party planning across South Wales. Eleanor Gail creates unforgettable birthday parties, anniversaries and special celebrations.',
}

export default function PrivatePartiesPage() {
  return (
    <>
      <PageHero
        title="Private Parties"
        subtitle="Bespoke celebrations crafted around you"
        backgroundImage="/images/private-party.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                Private Parties
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
                Celebrations to Remember
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  Life&apos;s milestones deserve to be celebrated in style. Whether it&apos;s
                  a landmark birthday, a special anniversary, a christening, or any occasion
                  worth marking, Eleanor Gail creates bespoke private party experiences that
                  you and your guests will never forget.
                </p>
                <p>
                  We work closely with you to understand your vision and budget, then handle
                  every detail — so you can relax and enjoy the party you always imagined.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="mb-4 font-serif text-xl font-bold text-[#332727]">
                  Private Party Services:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Milestone birthday celebrations',
                    'Anniversary parties',
                    'Christenings &amp; naming ceremonies',
                    'Engagement parties',
                    'Themed event design',
                    'Venue sourcing &amp; styling',
                    'Catering &amp; entertainment coordination',
                    'Full event day management',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#AFE5E6]">✦</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Start Planning</Button>
                <Button href="/gallery" variant="outline">View Gallery</Button>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/private-party.jpg"
                alt="Private party planning by Eleanor Gail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
