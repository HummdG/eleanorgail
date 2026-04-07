export interface Service {
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    title: 'Wedding Planner',
    description:
      'From intimate ceremonies to grand celebrations, we bring your wedding vision to life with meticulous attention to every detail.',
    href: '/services/wedding-planner',
    image: '/images/wedding-planner-flowers.jpg',
    imageAlt: 'Elegant wedding floral arrangements by Eleanor Gail',
  },
  {
    title: 'Corporate Events',
    description:
      'Memorable corporate experiences that reflect your brand values. From product launches to gala dinners across South Wales.',
    href: '/services/corporate-events',
    image: '/images/corporate-events.jpg',
    imageAlt: 'Corporate event planning in South Wales by Eleanor Gail',
  },
  {
    title: 'Private Parties',
    description:
      'Whether it\'s a milestone birthday, anniversary or celebration, we craft bespoke private party experiences you\'ll never forget.',
    href: '/services/private-parties',
    image: '/images/private-party.jpg',
    imageAlt: 'Private party planning by Eleanor Gail',
  },
]
