import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import Button from '@/components/shared/Button'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'Corporate Events',
  description:
    'Professional corporate event planning in South Wales. Eleanor Gail delivers memorable corporate experiences from product launches to gala dinners.',
}

export default function CorporateEventsPage() {
  return (
    <>
      <PageHero
        title="Corporate Events"
        subtitle="Memorable corporate experiences that reflect your brand"
        backgroundImage="/images/corporate-events.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/corporate-events.jpg"
                alt="Corporate event planning in South Wales"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                Corporate Events
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
                Events That Make an Impression
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  We understand that corporate events are an extension of your brand. Whether
                  you&apos;re hosting a product launch, client appreciation evening, team
                  building event or annual gala dinner, Eleanor Gail delivers experiences
                  that make a lasting impression.
                </p>
                <p>
                  Our extensive knowledge of South Wales venues and supplier networks means
                  we can secure the best locations and services to meet your brief and budget
                  — with complete transparency on costs.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="mb-4 font-serif text-xl font-bold text-[#332727]">
                  Corporate Event Services:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Product launches &amp; brand activations',
                    'Gala dinners &amp; award ceremonies',
                    'Client appreciation events',
                    'Team building experiences',
                    'Conference &amp; seminar planning',
                    'Charity fundraising events',
                    'Staff celebration events',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#AFE5E6]">✦</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Discuss Your Event</Button>
                <Button href="/fees" variant="outline">View Fees</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
