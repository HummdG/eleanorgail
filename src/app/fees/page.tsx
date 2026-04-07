import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Fees',
  description:
    'Transparent, commission-free event planning fees from Eleanor Gail. Any supplier discounts are passed directly to you.',
}

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees"
        subtitle="Transparent pricing with no hidden costs"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
            Our Approach to Fees
          </p>
          <h2 className="mb-8 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
            Completely Independent &amp; Impartial
          </h2>

          <div className="space-y-6 text-left text-gray-600">
            <div className="rounded-none border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-6">
              <p className="font-serif text-lg font-semibold text-[#332727]">
                We Don&apos;t Work on Commission
              </p>
              <p className="mt-2 leading-relaxed">
                All our fees are transparent because we don&apos;t work on commission.
                Any discounts we negotiate with suppliers on your behalf are passed
                directly onto you — not kept by us.
              </p>
            </div>

            <div className="rounded-none border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-6">
              <p className="font-serif text-lg font-semibold text-[#332727]">
                Fees Tailored to Your Needs
              </p>
              <p className="mt-2 leading-relaxed">
                Our fees reflect the service we believe is right for your wedding or event.
                Because we&apos;re not reliant on financial incentives from suppliers, we are
                able to offer a completely independent and impartial service — always
                recommending what&apos;s best for you.
              </p>
            </div>

            <div className="rounded-none border-l-4 border-[#AFE5E6] bg-[#FAF8F5] p-6">
              <p className="font-serif text-lg font-semibold text-[#332727]">
                How It Works
              </p>
              <ol className="mt-3 space-y-3 leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-serif font-bold text-[#AFE5E6]">1.</span>
                  <span>Complete our enquiry form or give us a call for an initial consultation to confirm your requirements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-serif font-bold text-[#AFE5E6]">2.</span>
                  <span>We draw up a detailed, transparent quotation based on the services you need.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-serif font-bold text-[#AFE5E6]">3.</span>
                  <span>Once you&apos;ve approved our quote, we create a schedule and start planning your perfect event.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-6 text-gray-600">
              We welcome enquiries and are always pleased to discuss your ideas.
              Please get in touch to start the conversation.
            </p>
            <Button href="/contact">Request a Quote</Button>
          </div>
        </div>
      </section>
    </>
  )
}
