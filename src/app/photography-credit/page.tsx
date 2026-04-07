import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Photography Credits',
  description: 'Photography credits for images used on the Eleanor Gail website.',
}

export default function PhotographyCreditPage() {
  return (
    <>
      <PageHero title="Photography Credits" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-serif text-2xl font-bold text-[#332727]">
            Photo Credits
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Eleanor Gail would like to thank all the talented photographers who
              have captured the beautiful weddings and events we have been privileged
              to plan.
            </p>
            <p>
              Photography on this website is credited to the following photographers:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Owen Mathias Photography</li>
              <li>And all other photographers who have kindly supplied images</li>
            </ul>
            <p>
              If you believe any image on this website belongs to you and has not been
              correctly credited, please contact us at{' '}
              <a href="mailto:gail@eleanorgail.co.uk" className="text-[#332727] underline">
                gail@eleanorgail.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
