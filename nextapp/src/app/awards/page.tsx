import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Awards',
  description:
    'Eleanor Gail — award-winning wedding and event planner recognised for excellence in South Wales.',
}

export default function AwardsPage() {
  return (
    <>
      <PageHero
        title="Awards"
        subtitle="Recognised for excellence in event planning"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
              Recognition
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
              Industry Awards &amp; Recognition
            </h2>
            <p className="leading-relaxed text-gray-600">
              We are proud to have been recognised by our industry and peers for
              our commitment to delivering exceptional events for our clients.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-square w-64 overflow-hidden">
              <Image
                src="/images/awards.jpg"
                alt="Eleanor Gail awards and recognition"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <div className="border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-6">
              <h3 className="font-serif text-lg font-bold text-[#332727]">
                Welsh Wedding Awards
              </h3>
              <p className="mt-2 text-gray-600">
                Nominated and shortlisted for recognition as one of South Wales&apos;
                leading wedding planning services.
              </p>
            </div>
            <div className="border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-6">
              <h3 className="font-serif text-lg font-bold text-[#332727]">
                Industry Recognition
              </h3>
              <p className="mt-2 text-gray-600">
                Consistently recommended by clients and venues across South Wales as
                a trusted and professional event planning partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
