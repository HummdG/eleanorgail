import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Eleanor Gail privacy policy — how we collect, use and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-gray max-w-none">
            <h2 className="font-serif text-2xl font-bold text-[#332727]">
              Privacy Policy
            </h2>
            <p className="text-sm text-gray-400">Last updated: January 2019</p>

            <div className="mt-8 space-y-8 text-gray-600">
              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">Who We Are</h3>
                <p className="mt-3 leading-relaxed">
                  Eleanor Gail is a wedding and event planning company based in Swansea, South Wales.
                  Our website address is eleanorgail.co.uk. We are committed to protecting your
                  personal information and your right to privacy.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">Information We Collect</h3>
                <p className="mt-3 leading-relaxed">
                  When you complete the contact form on our website, we collect your name,
                  email address, telephone number and the contents of your message. This
                  information is used solely for the purpose of responding to your enquiry.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">How We Use Your Information</h3>
                <p className="mt-3 leading-relaxed">
                  We use the information you provide to respond to your enquiry and provide
                  you with the services you have requested. We do not share your personal
                  information with third parties without your consent.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">Cookies</h3>
                <p className="mt-3 leading-relaxed">
                  This website may use cookies to improve your browsing experience. Cookies
                  are small files stored on your device that help us understand how you use
                  our site.
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">Your Rights</h3>
                <p className="mt-3 leading-relaxed">
                  Under the General Data Protection Regulation (GDPR), you have the right
                  to access, correct or delete any personal data we hold about you. To
                  exercise these rights, please contact us at{' '}
                  <a href="mailto:gail@eleanorgail.co.uk" className="text-[#332727] underline">
                    gail@eleanorgail.co.uk
                  </a>
                  .
                </p>
              </section>

              <section>
                <h3 className="font-serif text-xl font-bold text-[#332727]">Contact Us</h3>
                <p className="mt-3 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy
                  practices, please contact us at{' '}
                  <a href="mailto:gail@eleanorgail.co.uk" className="text-[#332727] underline">
                    gail@eleanorgail.co.uk
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
