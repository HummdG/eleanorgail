import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our portfolio of beautiful weddings and events planned by Eleanor Gail across South Wales.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into the events we've created"
        backgroundImage="/images/wedding-planner-flowers.jpg"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#AFE5E6]">
              Our Portfolio
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#332727] md:text-4xl">
              Weddings &amp; Events
            </h2>
            <p className="mx-auto max-w-xl text-gray-600">
              Each event is as unique as the people behind it. Here is a selection
              of the beautiful moments we have been privileged to create.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
