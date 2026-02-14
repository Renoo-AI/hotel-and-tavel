export interface Destination {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
  rating: number;
  reviews: number;
}

export const destinations: Destination[] = [
  {
    slug: "maldives-sanctuary",
    name: "Maldives Sanctuary",
    description: "An exclusive overwater villa experience with private infinity pools and crystal clear lagoon views.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
    price: "$1,200",
    location: "Baa Atoll, Maldives",
    rating: 4.9,
    reviews: 128,
  },
  {
    slug: "swiss-alpine-retreat",
    name: "Swiss Alpine Retreat",
    description: "Luxury chalet nestled in the heart of the Alps, offering world-class skiing and panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000&auto=format&fit=crop",
    price: "$850",
    location: "Zermatt, Switzerland",
    rating: 4.8,
    reviews: 95,
  },
  {
    slug: "kyoto-zen-estate",
    name: "Kyoto Zen Estate",
    description: "Traditional Ryokan architecture meeting modern luxury in the historic Higashiyama district.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    price: "$700",
    location: "Kyoto, Japan",
    rating: 5.0,
    reviews: 64,
  },
];

export async function getDestination(slug: string): Promise<Destination | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return destinations.find((d) => d.slug === slug);
}
