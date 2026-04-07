'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '@/data/gallery-images'
import LightboxModal from './LightboxModal'

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : 0))
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0
    )

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => openLightbox(index)}
            className="group mb-4 block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AFE5E6] focus-visible:ring-offset-2"
            aria-label={`View image: ${image.alt}`}
          >
            <div className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#332727]/0 transition-colors duration-300 group-hover:bg-[#332727]/20 flex items-center justify-center">
                <span className="scale-75 opacity-0 text-white text-2xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  ⊕
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  )
}
