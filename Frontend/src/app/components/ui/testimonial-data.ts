export interface Testimonial {
  name: string;
  company: string;
  image: string;
  title: string;
  description: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    company: "Acme Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Product Manager",
    description: "Linear has transformed the way our team collaborates. The intuitive interface and powerful features make project management a breeze.",
  },
  {
    name: "Michael Smith",
    company: "BetaTech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Lead Developer",
    description: "The seamless workflow and beautiful design of Linear have boosted our productivity. We can't imagine working without it.",
  },
  {
    name: "Sofia Lee",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "UX Designer",
    description: "Linear's attention to detail and user experience is unmatched. Our team loves how easy it is to stay organized and focused.",
  },
];

export const cardOffsets = [
  { y: 0, scale: 1, rotate: -6, z: 1 },
  { y: 20, scale: 0.96, rotate: 0, z: 0 },
  { y: 40, scale: 0.92, rotate: 6, z: -1 },
];
