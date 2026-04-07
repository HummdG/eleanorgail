import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  overlay?: boolean
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage = '/images/wedding-table-banner.jpg',
  overlay = true,
}: PageHeroProps) {
  return (
    <section className="relative flex h-72 items-center justify-center md:h-96">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      {overlay && (
        <div className="absolute inset-0 bg-[#332727]/50" />
      )}
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-white/90 md:text-xl">{subtitle}</p>
        )}
        <div className="mx-auto mt-4 h-0.5 w-16 bg-[#AFE5E6]" />
      </div>
    </section>
  )
}
