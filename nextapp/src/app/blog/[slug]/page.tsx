import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, getPostBySlug } from '@/data/blog-posts'
import Button from '@/components/shared/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null

  return (
    <div className="bg-white">

      {/* ── Full-bleed hero (pt-[72px] clears the fixed header) ── */}
      <div className="relative pt-[72px]">
        <div className="relative h-[55vh] min-h-[380px] w-full md:h-[65vh]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Layered overlays for depth + readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f]/80 via-[#1a0f0f]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0f]/30 to-transparent" />

          {/* Hero text — anchored to bottom-left for editorial feel */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-12 lg:px-20">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#AFE5E6]">
                  {post.category}
                </span>
                <span className="h-px w-8 bg-[#AFE5E6]" />
                <span className="text-[10px] text-white/50 tracking-wider">{post.date}</span>
              </div>
              <h1 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.4)] md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">

          {/* Breadcrumb */}
          <nav className="mb-12 flex items-center gap-2 text-xs tracking-wide text-gray-400">
            <Link href="/" className="hover:text-[#332727] transition-colors uppercase">Home</Link>
            <span className="text-[#AFE5E6]">·</span>
            <Link href="/blog" className="hover:text-[#332727] transition-colors uppercase">Blog</Link>
            <span className="text-[#AFE5E6]">·</span>
            <span className="text-[#332727] truncate max-w-[200px] uppercase">{post.category}</span>
          </nav>

          {/* Two-column layout on large screens: article + sidebar */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_260px]">

            {/* ── Main article ── */}
            <article>
              {/* Excerpt lede */}
              <p className="mb-10 border-l-4 border-[#AFE5E6] pl-5 font-serif text-lg italic leading-relaxed text-[#332727]/70 md:text-xl">
                {post.excerpt}
              </p>

              {/* Body */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Ornamental divider */}
              <div className="my-14 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-sm text-[#AFE5E6]">✦</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              {/* CTA block */}
              <div className="relative overflow-hidden bg-[#332727] px-8 py-10 text-center text-white">
                {/* Subtle decorative corner lines */}
                <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-[#AFE5E6]/40" />
                <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-[#AFE5E6]/40" />
                <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#AFE5E6]/40" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#AFE5E6]/40" />
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#AFE5E6]">
                  Eleanor Gail
                </p>
                <p className="mb-3 font-serif text-2xl font-bold">
                  Inspired? Let&apos;s Start Planning.
                </p>
                <p className="mb-8 text-sm leading-relaxed text-white/60">
                  Get in touch with Gail to discuss your event.<br />
                  Initial consultations are always free.
                </p>
                <Button href="/contact" variant="white">
                  Enquire Now
                </Button>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-10">

                {/* About Gail */}
                <div className="border-t-2 border-[#AFE5E6] pt-6">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Written by
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/images/gail-windley.jpg"
                        alt="Gail Windley"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-bold text-[#332727]">Gail Windley</p>
                      <p className="text-xs text-gray-400">Wedding Planner · Eleanor Gail</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-gray-500">
                    Wales&apos; leading luxury wedding &amp; event planner, based in Swansea and serving the M4 corridor and beyond.
                  </p>
                </div>

                {/* Filed under */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Filed under
                  </p>
                  <span className="inline-block bg-[#AFE5E6]/20 px-3 py-1 text-xs font-medium text-[#332727]">
                    {post.category}
                  </span>
                </div>

                {/* Contact sidebar CTA */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Planning an event?
                  </p>
                  <div className="space-y-2 text-sm text-[#332727]">
                    <a href="tel:07876551592" className="flex items-center gap-2 hover:text-[#AFE5E6] transition-colors">
                      <span className="text-[#AFE5E6]">→</span> 0787 655 1592
                    </a>
                    <a href="mailto:gail@eleanorgail.co.uk" className="flex items-center gap-2 hover:text-[#AFE5E6] transition-colors">
                      <span className="text-[#AFE5E6]">→</span> gail@eleanorgail.co.uk
                    </a>
                  </div>
                </div>

              </div>
            </aside>
          </div>

          {/* ── Prev / Next navigation ── */}
          {(prevPost || nextPost) && (
            <nav className="mt-16 grid grid-cols-1 gap-px border-t border-gray-100 pt-8 sm:grid-cols-2">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-2 py-6 pr-8"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    ← Older
                  </span>
                  <span className="font-serif text-base font-bold text-[#332727] transition-colors group-hover:text-[#4a3535] line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col items-end gap-2 border-l border-gray-100 py-6 pl-8"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Newer →
                  </span>
                  <span className="font-serif text-base font-bold text-[#332727] transition-colors group-hover:text-[#4a3535] line-clamp-2 text-right">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}

          <div className="mt-8 border-t border-gray-100 pt-8">
            <Link
              href="/blog"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-[#332727]"
            >
              ← All Posts
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
