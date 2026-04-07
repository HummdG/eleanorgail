export interface Testimonial {
  id: number
  name: string
  date: string
  excerpt: string
  full: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Miranda & Owen',
    date: 'August 2018',
    excerpt:
      "Gail's professionalism and knowledge of wedding planning are second to none. She makes you feel comfortable and at ease. Not once did we ever worry that something was not being done or was overlooked.",
    full: "Dear Gail 'The World's Best Wedding Planner' — that should be your middle name! We can't thank you enough for being the backbone of the entire planning procedure! You are not only professional, punctual and efficient, but polite, caring and accommodating, all with a friendly face to top it off. Needless to say, it wouldn't have been the same without you at the helm. We are so grateful for your part in making our special day so memorable. All Our Love and Thanks, Miranda & Owen.",
  },
  {
    id: 2,
    name: 'Jane & Rob',
    date: 'June 2017',
    excerpt:
      "We can't thank you enough for everything that you did to make our day so perfect. It truly was magical and certainly a day not only us, but everyone else will remember too.",
    full: "Well lovely lady, where do I start? We can't thank you enough for everything that you did to make our day so perfect. It truly was magical and certainly a day not only us, but everyone else will remember too. You are one very special, talented lady. Thank you from the bottom of our hearts. Lots of love. Jane & Rob",
  },
  {
    id: 3,
    name: 'Kathryn & Louis Ferneyhough',
    date: 'July 2018',
    excerpt:
      'We just wanted to say a massive thank you for all that you did on the day. We had the best day and we really appreciate all your help — you were so great!',
    full: 'Hi Gail, We just wanted to say a massive thank you for all that you did on the 14th. We had the best day and we really appreciate all your help, so thank you so much!!!!! You were so great! Kathryn & Louis Ferneyhough',
  },
  {
    id: 4,
    name: 'Kanika & Ed',
    date: 'July 2016',
    excerpt:
      'Planning our wedding at Glanusk Estate was a mammoth task. Gail literally made our wedding day. It couldn\'t have gone any better and we highly recommend her to anyone who asks!',
    full: "Planning our wedding at Glanusk Estate was a mammoth task. Gail literally made our wedding day. It couldn't have gone any better and we highly recommend her to anyone who asks! Kanika & Ed",
  },
  {
    id: 5,
    name: 'Nicky & Dave',
    date: 'November 2016',
    excerpt:
      'From the outset we had an idea of the wedding we wanted, but little idea of how to make it happen. Gail took our vision and turned it into the most perfect day. Her dedication and attention to detail was extraordinary.',
    full: "From the outset we both had an idea of the type of wedding that we wanted, but little idea of how to make it happen. Gail took our vision and turned it into the most perfect day. Her dedication and attention to detail was extraordinary. My overriding memory of Gail is her telling us 'make sure you practice how you're going to kiss when the registrar tells you, you want it to look right and you only get one chance' — now that's dedication and why you should have no hesitation in hiring Gail for your special day. Nicky & Dave",
  },
]
