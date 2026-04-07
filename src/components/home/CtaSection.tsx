import Button from '@/components/shared/Button'

export default function CtaSection() {
  return (
    <section className="bg-[#AFE5E6] py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#332727] md:text-4xl">
          Ready to Start Planning?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#332727]/80 md:text-lg">
          Bring us your ideas and let Eleanor Gail take care of the rest.
          Our initial consultation is always free — let&apos;s talk about
          your perfect day.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          <Button href="/fees" variant="outline">
            View Our Fees
          </Button>
        </div>
      </div>
    </section>
  )
}
