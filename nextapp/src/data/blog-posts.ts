export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  imageAlt: string
  content: string // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'a-spring-wedding-at-gileston-manor',
    title: 'A Spring Wedding at Gileston Manor',
    date: 'September 30, 2022',
    category: 'Wedding Planner',
    excerpt:
      'A beautiful spring celebration at the stunning Gileston Manor — an elegant venue that provided the perfect backdrop for this gorgeous wedding day.',
    image: '/images/blog/gileston-manor.jpg',
    imageAlt: 'Spring wedding at Gileston Manor',
    content: `
      <p>A beautiful spring celebration at the stunning Gileston Manor — an elegant venue that provided the perfect backdrop for this gorgeous wedding day.</p>
      <p>Every detail was carefully considered, from the floral arrangements to the table styling, creating a day that was truly breathtaking from start to finish.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'the-sequel-wedding-at-penrice-castle',
    title: 'The Sequel Wedding at Penrice Castle',
    date: 'April 13, 2021',
    category: 'Wedding Planner',
    excerpt:
      'When a couple finally gets to celebrate their special day at the stunning Penrice Castle after postponement — the result is nothing short of magical.',
    image: '/images/blog/penrice-castle.jpg',
    imageAlt: 'Wedding at Penrice Castle photographed by Owen Mathias Photography',
    content: `
      <p>When a couple finally gets to celebrate their special day at the stunning Penrice Castle, the result is nothing short of magical. This was a wedding that had been lovingly postponed, and the wait was more than worth it.</p>
      <p>Penrice Castle, nestled in the beautiful Gower Peninsula, provided a dramatic and romantic setting. Photography by the wonderful Owen Mathias Photography captured every emotion of this unforgettable day.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'alice-in-wonderland-themed-party-for-aunty-acid',
    title: 'Alice in Wonderland Themed Party for Aunty Acid',
    date: 'January 29, 2019',
    category: 'Corporate Events',
    excerpt:
      'A wonderfully whimsical Alice in Wonderland themed event for the famous Aunty Acid — a party that was truly down the rabbit hole in the best possible way.',
    image: '/images/blog/aunty-acid.jpg',
    imageAlt: 'Alice in Wonderland themed party for Aunty Acid',
    content: `
      <p>Down the rabbit hole we went for this wonderfully whimsical Alice in Wonderland themed party for the famous Aunty Acid. This was a corporate and private party event like no other — an immersive experience that transported guests into a world of wonder.</p>
      <p>From the décor to the entertainment, every element was carefully curated to bring the theme to life. Mad Hatters tea parties, oversized playing cards, and a colour palette straight from the pages of Lewis Carroll's classic — this was an event that guests will talk about for years to come.</p>
      <p>If you would like help planning a corporate or themed event, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'miranda-owens-private-garden-wedding-langland-swansea',
    title: "Miranda & Owen's Private Garden Wedding, Langland, Swansea",
    date: 'January 22, 2019',
    category: 'Wedding Planner',
    excerpt:
      'A stunning private garden in Langland provided the most romantic setting for this beautiful summer wedding in Swansea.',
    image: '/images/blog/miranda-owen.jpg',
    imageAlt: "Miranda and Owen's private garden wedding in Langland, Swansea",
    content: `
      <p>A stunning private garden in Langland, Swansea, provided the most romantic and intimate setting for Miranda and Owen's beautiful summer wedding.</p>
      <p>There is something truly special about a private garden wedding — the informality, the natural beauty, the personal touches that make it entirely unique to the couple. Miranda and Owen's day was everything you'd hope for and more.</p>
      <blockquote>
        <p>"Dear Gail 'The World's Best Wedding Planner'... We can't thank you enough for being the backbone of the entire planning procedure! You are not only professional, punctual and efficient, but polite, caring and accommodating, all with a friendly face to top it off."</p>
        <footer>— Miranda &amp; Owen</footer>
      </blockquote>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'hannah-rachels-wedfest-at-cwm-ty-coed-carmarthen',
    title: "Hannah & Rachel's WedFest at Cwm Ty Coed, Carmarthen",
    date: 'January 21, 2019',
    category: 'Wedding Planner',
    excerpt:
      'A joyful and unconventional WedFest celebration at the beautiful Cwm Ty Coed in Carmarthen — a party meets wedding in the most wonderful way.',
    image: '/images/blog/hannah-rachel.jpg',
    imageAlt: "Hannah and Rachel's WedFest at Cwm Ty Coed, Carmarthen",
    content: `
      <p>When Hannah and Rachel said they wanted a WedFest, we knew this was going to be something truly special. Held at the beautiful Cwm Ty Coed in Carmarthen, this was a celebration that perfectly blended the joy of a festival with the magic of a wedding.</p>
      <p>From the relaxed outdoor styling to the festival-inspired details, every element reflected Hannah and Rachel's personalities and their love of life and fun. This was a day where the couple's guests didn't just attend a wedding — they lived it.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'shaun-jordans-wedding-at-the-corran-laugharne',
    title: "Shaun & Jordan's Wedding at The Corran, Laugharne",
    date: 'August 10, 2017',
    category: 'Wedding Planner',
    excerpt:
      'A gorgeous wedding at the beautiful Corran Resort & Spa in Laugharne, set against the breathtaking estuary of the River Taf.',
    image: '/images/blog/shaun-jordan.jpg',
    imageAlt: "Shaun and Jordan's wedding at The Corran, Laugharne",
    content: `
      <p>Set against the breathtaking estuary of the River Taf in Laugharne, The Corran Resort & Spa provided an utterly beautiful backdrop for Shaun and Jordan's wedding day.</p>
      <p>The natural beauty of this stunning West Wales location lent itself perfectly to an elegant, romantic celebration. The couple's vision was one of relaxed luxury — and that is exactly what we delivered.</p>
      <p>Every detail, from the floral arrangements reflecting the coastal setting to the table styling and evening reception, was carefully planned to create a seamless and magical day.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'nicky-and-daves-wedding-at-llangoed-hall',
    title: "Nicky and Dave's Wedding at Llangoed Hall",
    date: 'February 27, 2017',
    category: 'Wedding Planner',
    excerpt:
      "From the outset, Nicky and Dave had a clear vision for their wedding — and with Llangoed Hall as the venue, the result was breathtakingly beautiful.",
    image: '/images/blog/nicky-dave.jpg',
    imageAlt: "Nicky and Dave's wedding at Llangoed Hall",
    content: `
      <p>From the outset, Nicky and Dave had a clear idea of the type of wedding they wanted, but little idea of how to make it happen. That's where Eleanor Gail came in.</p>
      <p>Llangoed Hall, nestled in the Wye Valley, is one of Wales' most prestigious country house hotels — and it provided a stunning canvas for this beautifully considered wedding.</p>
      <blockquote>
        <p>"From the outset we both had an idea of the type of wedding that we wanted, but little idea of how to make it happen. My overriding memory of Gail is her telling us 'make sure you practice how you're going to kiss when the registrar tells you, you want it to look right and you only get one chance' — now that's dedication and why you should have no hesitation in hiring Gail for your special day."</p>
        <footer>— Nicky &amp; Dave</footer>
      </blockquote>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'kanika-and-edwards-wedding-at-glanusk-estate',
    title: "Kanika and Edward's Wedding at Glanusk Estate",
    date: 'September 30, 2016',
    category: 'Wedding Planner',
    excerpt:
      'Planning a wedding at Glanusk Estate was a mammoth task — but the result was a breathtaking fusion of cultures and a day that neither guests nor couple will ever forget.',
    image: '/images/blog/kanika-edward.jpg',
    imageAlt: "Kanika and Edward's wedding at Glanusk Estate",
    content: `
      <p>Planning a wedding at Glanusk Estate was a mammoth task — but the result was a breathtaking English-Indian fusion celebration that neither guests nor couple will ever forget.</p>
      <p>Glanusk Estate in the Brecon Beacons provided a spectacular and vast setting for this incredible day. Bringing together two cultures, two families and one extraordinary vision required meticulous planning and creative flair.</p>
      <blockquote>
        <p>"Planning our wedding at Glanusk Estate was a mammoth task. Gail literally made our wedding day. It couldn't have gone any better and we highly recommend her to anyone who asks!"</p>
        <footer>— Kanika &amp; Ed</footer>
      </blockquote>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'ceri-and-barts-wedding-at-llangoed-hall',
    title: "Ceri and Bart's Wedding at Llangoed Hall",
    date: 'September 8, 2016',
    category: 'Wedding Planner',
    excerpt:
      "Another stunning celebration at the magnificent Llangoed Hall — Ceri and Bart's wedding was an intimate and elegant affair in the heart of the Welsh countryside.",
    image: '/images/blog/ceri-bart.jpg',
    imageAlt: "Ceri and Bart's wedding at Llangoed Hall",
    content: `
      <p>Another stunning celebration at the magnificent Llangoed Hall — Ceri and Bart's wedding was an intimate and elegant affair set in the heart of the Welsh countryside.</p>
      <p>The couple's vision was one of refined elegance — classic styling with personal touches that made the day entirely their own. Llangoed Hall's beautiful interiors and grounds provided the perfect setting.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'youre-engaged-whats-next',
    title: "You're Engaged! What's Next?",
    date: 'January 4, 2016',
    category: 'Wedding Planner',
    excerpt:
      "Congratulations! He asked and you said yes. After sharing the news, here's our guide to the first steps every newly engaged couple should take.",
    image: '/images/blog/youre-engaged.jpg',
    imageAlt: 'Newly engaged couple — wedding planning guide by Eleanor Gail',
    content: `
      <p>I remember the excitement of being engaged and wondering how to plan a wedding. After all, I knew I wanted to be married, I just hadn't really thought about the wedding and relied on friends and wedding magazines to steer me in the right direction. So as a wedding planner and a former bride I say — welcome to our very first planning feature.</p>

      <h3>Set a Date</h3>
      <p>Congratulations! He asked and you said "Yes". After sharing your news with family and closest friends you'll need to set a date. After all, the question you'll be asked most — after "How did he propose?" — is "When are you getting married?". Just to be clear this is not a set-in-stone date but a "We're thinking of Spring 2020" date. This will give your guests a mental note for their diary and allow you the flexibility you need while searching for the perfect venue.</p>

      <h3>Budget</h3>
      <p>Setting a budget and sticking to it is the hardest part of planning your wedding. This will be one of the MOST important days of your life, the MOST amount of money you will spend outside of your mortgage and you WILL fall in love with things you won't have costed for. Your budget will determine the number of guests, your choice of venue, how many bridesmaids/groomsmen and the list goes on.</p>
      <p>It's so important you understand how much money you will allocate to each and every part of your wedding. Setting up a separate bank account for your wedding will really help with keeping the reins on your spending.</p>

      <h3>Writing a Guest List</h3>
      <p>Catering for your guests will be the largest part of your budget. It's really important you have an idea of how many guests you can afford as well as how many you'd like to invite. Your search for a venue will also be determined by their capacity. Ask your parents to draw up a guest list of those they'd like to include, especially if they're contributing.</p>
      <p>There will be many drafts of your guest list so don't panic if your first count is a ridiculous number — just be mindful that the more people you invite, the more expensive your wedding will be.</p>

      <h3>Your Venue Search</h3>
      <p>All the things you've done so far will come together to form part of your decision in choosing a wedding venue. Are you having a church or a civil ceremony? If it's the latter then you will need to ensure you choose from the list of approved venues.</p>
      <p>There will be many things that will narrow your search: the area, the number of guests, your budget and of course the venue's availability. Get ready to roll your sleeves up, draw up a list of ideal venues, short-list them and make appointments to visit. You'll know when you've seen the venue you like — you'll fall in love with it!</p>

      <h3>Should You Say "I Do" to a Wedding Planner?</h3>
      <p>Taking my bias aside (of course you should hire a wedding planner) there are many things you should consider before contacting a planner. The chances are you haven't planned an event on this scale before and if you hire a wedding planner you'll have to relinquish some control — and only you can decide if you're comfortable doing that.</p>
      <p>Wedding planners are an additional cost but they can negotiate better prices or terms to fit within your budget. A good planner will keep up with trends, have established relationships with suppliers and offer design ideas that reflect you and are unique to your wedding, whilst troubleshooting along the way.</p>

      <h3>Enjoy and Celebrate</h3>
      <p>Planning your wedding should be a lovely experience. Enjoy it. Celebrate your engagement. This can seem quite overwhelming but please keep in mind — you're having a wedding to get married, not getting married to have a wedding. It's an exciting time for you and your fiancé and the wedding is 'day one' of the rest of your life together.</p>

      <p>If you'd like help with any aspect of your wedding please call Gail on <a href="tel:07876551592">0787 655 1592</a> or email <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a>.</p>
    `,
  },
  {
    slug: 'linda-and-victors-wedding-at-bryngarw-house',
    title: "Linda & Victor's Wedding at Bryngarw House",
    date: 'October 21, 2015',
    category: 'Wedding Planner',
    excerpt:
      "The beautiful Bryngarw House in Bridgend provided a stunning backdrop for Linda and Victor's elegant autumn wedding.",
    image: '/images/blog/linda-victor.jpg',
    imageAlt: "Linda and Victor's wedding at Bryngarw House",
    content: `
      <p>The beautiful Bryngarw House in Bridgend provided a stunning backdrop for Linda and Victor's elegant autumn wedding. Set within 113 acres of Country Park, this Grade II listed house offered the perfect combination of history, grandeur and natural beauty.</p>
      <p>Autumn at Bryngarw is particularly special — the golden leaves and crisp air adding a magical quality to every photograph and memory from the day.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'moroccan-inspired-wedding-at-coed-y-mwstwr-hotel',
    title: 'Moroccan Inspired Wedding at Coed Y Mwstwr Hotel, Bridgend',
    date: 'September 29, 2015',
    category: 'Wedding Planner',
    excerpt:
      'Rich jewel tones, lanterns and intricate patterns transformed Coed Y Mwstwr Hotel into a Moroccan-inspired wonderland for this stunning wedding.',
    image: '/images/blog/moroccan-wedding.jpg',
    imageAlt: 'Moroccan inspired wedding at Coed Y Mwstwr Hotel, Bridgend',
    content: `
      <p>Rich jewel tones, lanterns and intricate patterns transformed Coed Y Mwstwr Hotel in Bridgend into a Moroccan-inspired wonderland for this stunning and colourful wedding.</p>
      <p>The couple's vision was bold, beautiful and entirely unique — a celebration dripping with glamour, colour and personality. From the elaborate centrepieces to the vibrant colour palette, every detail told a story.</p>
      <p>Photography by Owen Mathias Photography captured the warmth and vibrancy of this incredible day beautifully.</p>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'a-stylish-spring-wedding-at-oldwalls-gower',
    title: 'A Stylish Spring Wedding at Oldwalls, Gower',
    date: 'June 23, 2015',
    category: 'Wedding Planner',
    excerpt:
      "A stylish spring wedding in the heart of the Gower — Tassy and Chris's day at Oldwalls was simply beautiful from start to finish.",
    image: '/images/gallery/10.jpg',
    imageAlt: 'Stylish spring wedding at Oldwalls, Gower',
    content: `
      <p>A stylish spring wedding in the heart of the Gower is what happens when Oldwalls Gower holds a wedding reception for one of their family — their youngest daughter Tassy.</p>
      <p>This incredibly elegant wedding was quite simply beautiful from start to finish. Although we had a very clear idea on a classic/modern theme, the details started with the dress by British designer Suzanne Neville.</p>
      <p>The invitations had a bespoke floral design and were laser cut to give the impression of lace, while the 7-tier wedding cake had embellishments and lace similar to those on the dress.</p>
      <p>The venue was choc full of blooms — a mix of tall and shorter table arrangements in clear glass vases and gorgeous ceiling-hung wreaths. Not only were the flowers visually stunning but their scent is something I will never forget. I kid you not, I could smell the flowers before I entered the marquee!</p>
      <p>Congratulations to Tassy &amp; Chris who became Mr &amp; Mrs Purnell.</p>

      <h3>Suppliers</h3>
      <ul>
        <li><strong>Venue:</strong> Oldwalls Gower</li>
        <li><strong>Photography:</strong> Marc Smith Photography</li>
        <li><strong>Dress:</strong> Cherish by Suzanne Neville</li>
        <li><strong>Invitations:</strong> Hummingbird Card Co</li>
        <li><strong>Cake:</strong> Scrum Diddly</li>
        <li><strong>Flowers:</strong> Eve Fransesca</li>
        <li><strong>Ivory Glass Carriage:</strong> Ben Ford Carriages</li>
      </ul>

      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
  {
    slug: 'elegance-and-glamour-at-llangoed-hall',
    title: 'Elegance and Glamour at Llangoed Hall',
    date: 'February 27, 2015',
    category: 'Wedding Planner',
    excerpt:
      'Guests arrived from Sydney to New York for this relaxed, intimate wedding in the heart of Wales — a day that screamed elegance from start to finish.',
    image: '/images/aisle-runner.jpg',
    imageAlt: 'Elegant wedding details at Llangoed Hall',
    content: `
      <p>It's considered lucky if it rains on your wedding day and last Sunday at Llangoed Hall in the beautiful Wye Valley, it did just that. Guests started to arrive on the Saturday from far and wide — Sydney to New York and everywhere in between — for this relaxed, intimate wedding in the heart of Wales.</p>
      <p>From the venue to the flowers, the invitations and the cake, this wedding screamed elegance. I hope you enjoy looking at the photographs as much as I enjoyed working with Annie &amp; Chris to create their perfect day.</p>
      <ul>
        <li>A cream aisle runner from Beau Decor with an ivory petal border was the perfect finishing touch for the wedding ceremony.</li>
        <li>Hand cut Welsh slate monogram tile by Eleanor Gail.</li>
        <li>Hand drawn blackboard to match the wedding invitation by Eleanor Gail.</li>
        <li>With the wedding party coming from Sydney, Malaysia, Singapore, New York and even the Bride coming from Hong Kong, a bespoke table planner was hand made by Eleanor Gail.</li>
        <li>Soft pink flower arrangements by Shan Sherwood in mercury glass vases by Belle Journee.</li>
        <li>Naked wedding cake by Scrumdiddly.</li>
      </ul>
      <p>If you would like help with any aspect of wedding planning and design or on the day support, please contact Gail at <a href="mailto:gail@eleanorgail.co.uk">gail@eleanorgail.co.uk</a> or call <a href="tel:07876551592">0787 655 1592</a>.</p>
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
