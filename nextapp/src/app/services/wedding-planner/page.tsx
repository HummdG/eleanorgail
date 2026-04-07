import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import Button from '@/components/shared/Button'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'Wedding Planner',
  description:
    'Eleanor Gail offers luxury wedding planning across South Wales. From intimate ceremonies to grand celebrations, we bring your vision to life.',
}

export default function WeddingPlannerPage() {
  return (
    <>
      <PageHero
        title="Wedding Planner"
        subtitle="South Wales' most trusted luxury wedding planner"
        backgroundImage="/images/wedding-planner-flowers.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                Wedding Planning
              </p>
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
                Your Perfect Wedding Day
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  At Eleanor Gail, we believe your wedding day should be a true reflection of
                  you as a couple. We take a rule-free approach to wedding planning, putting
                  your vision and ideas at the centre of our creative process.
                </p>
                <p>
                  From venue search and creative wedding design to on-the-day coordination and
                  management, we take the pressure out of planning so you can focus on enjoying
                  every moment of your special day.
                </p>
                <p>
                  We transform venues — from stately homes to marquees — into breathtakingly
                  beautiful spaces, bringing your wedding to life and setting the tone for your
                  celebration.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="mb-4 font-serif text-xl font-bold text-[#332727]">
                  Our Wedding Services Include:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Full wedding planning from conception to delivery',
                    'On the Day Coordination &amp; Management',
                    'Venue Search &amp; Sourcing',
                    'Creative Wedding &amp; Event Design',
                    'Supplier Management &amp; Coordination',
                    'Budget Management',
                    'Timeline &amp; Schedule Planning',
                    'Rehearsal Coordination',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#AFE5E6]">✦</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Enquire Now</Button>
                <Button href="/gallery" variant="outline">View Gallery</Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wedding-planner-flowers.jpg"
                  alt="Elegant wedding floral arrangements"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wedding-banner.jpg"
                  alt="Beautiful wedding ceremony by Eleanor Gail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
