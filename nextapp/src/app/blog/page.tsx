import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Hints, tips and inspiration from Eleanor Gail — South Wales\' leading wedding and event planner.',
}

const posts = [
  {
    title: "You're Engaged — What's Next?",
    date: 'January 2019',
    category: 'Wedding Planner',
    excerpt:
      "Congratulations! You're engaged. Now the fun really begins. Here's our guide to the first steps every newly engaged couple should take.",
    href: '#',
  },
  {
    title: 'The Wedding Fayre at the Brangwyn Hall — Here We Come',
    date: 'November 2018',
    category: 'Wedding Planner',
    excerpt:
      "We're delighted to be exhibiting at the Brangwyn Hall Wedding Fayre. Come and meet the Eleanor Gail team and start planning your perfect day.",
    href: '#',
  },
  {
    title: 'Elegance and Glamour at Llangoed Hall',
    date: 'October 2018',
    category: 'Wedding Planner',
    excerpt:
      'A breathtaking day of elegance and glamour set against the stunning backdrop of Llangoed Hall in the Brecon Beacons.',
    href: '#',
  },
  {
    title: 'A Stylish Spring Wedding at Oldwalls, Gower',
    date: 'September 2018',
    category: 'Wedding Planner',
    excerpt:
      'Spring sunshine and stunning Gower scenery made for the most beautiful backdrop to this stylish and contemporary wedding.',
    href: '#',
  },
  {
    title: 'Miranda & Owen\'s Private Garden Wedding, Langland, Swansea',
    date: 'August 2018',
    category: 'Wedding Planner',
    excerpt:
      'A stunning private garden provided the most romantic setting for this beautiful summer wedding in Langland, Swansea.',
    href: '#',
  },
  {
    title: 'Hints & Tips: Choosing Your Wedding Venue',
    date: 'July 2018',
    category: 'Hints & Tips',
    excerpt:
      'Choosing your wedding venue is one of the biggest decisions you\'ll make. Here are our top tips for finding the perfect location.',
    href: '#',
  },
]

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
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex-1 p-6">
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
                  <p className="text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                </div>
                <div className="border-t border-gray-100 px-6 py-4">
                  <span className="text-sm font-medium text-[#332727]">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
