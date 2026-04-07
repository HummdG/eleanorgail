import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import Button from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Gail Windley, owner of Eleanor Gail — Wales\' leading luxury wedding and event planner based in Swansea, South Wales.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Eleanor Gail" subtitle="Meet the team behind your perfect event" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* Portrait */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/gail-windley.jpg"
                  alt="Gail Windley, owner of Eleanor Gail"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Signature */}
              <div className="mt-6 flex justify-center">
                <Image
                  src="/images/signature.png"
                  alt="Gail Windley signature"
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain opacity-80"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:pt-4">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
                Our Story
              </p>
              <h2 className="mb-8 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
                Gail Windley
              </h2>

              <div className="space-y-5 leading-relaxed text-gray-600">
                <p>
                  Gail Windley is the owner of the Swansea-based wedding &amp; event planning
                  company Eleanor Gail.
                </p>
                <p>
                  Gail has dreamt of owning her own business since arranging her own
                  &lsquo;Wedding away from home&rsquo; and following a career in project and
                  event management in and around London, she decided to make her dream a reality.
                  In 2012, Eleanor Gail was born from a combination of an appreciation for all
                  things beautiful, an insane need to organise, and a passion for creative and
                  breathtaking wedding design.
                </p>
                <p>
                  Today Eleanor Gail has become one of South Wales&apos; leading event and
                  wedding planning companies, transforming venues from stately homes to marquees
                  into the most amazing spaces.
                </p>
                <p>
                  Originally from Swansea, Gail lives in Pontardawe with her husband Chris and
                  children Jonathan &amp; Ellie.
                </p>
                <p className="font-medium italic text-[#332727]">
                  &ldquo;Who is Eleanor Gail and where did the name come from? Well, it&apos;s me
                  — or rather, it&apos;s my name. But my friends call me Gail.&rdquo;
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="/services" variant="outline">Our Services</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
            Coverage Area
          </p>
          <h2 className="mb-6 font-serif text-2xl font-bold text-[#332727] md:text-3xl">
            Where We Work
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
            Our headquarters are based in Swansea in South Wales, but we regularly travel for
            our clients producing unique weddings and events along the M4 corridor, covering
            Swansea, Cardiff, Newport, Carmarthen, Brecon, Hereford, Bristol, Reading, the
            South West of England and beyond.
          </p>
        </div>
      </section>
    </>
  )
}
