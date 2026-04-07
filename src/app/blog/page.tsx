import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/shared/PageHero'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Hints, tips and inspiration from Eleanor Gail — South Wales' leading wedding and event planner.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Inspiration, hints & tips from our team"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <article className="flex flex-1 flex-col">
                  {/* Featured image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                      <span className="rounded bg-[#AFE5E6]/30 px-2 py-0.5 text-[#332727]">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mb-3 font-serif text-xl font-bold text-[#332727] transition-colors group-hover:text-[#4a3535]">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-gray-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <span className="text-sm font-medium text-[#332727] transition-colors group-hover:text-[#AFE5E6]">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
