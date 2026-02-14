import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDestination, destinations } from "@/lib/data";
import StructuredData from "@/components/seo/StructuredData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// ISR: Revalidate every hour
export const revalidate = 3600;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const destination = await getDestination(params.slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} | LuxeStay`,
    description: destination.description,
    openGraph: {
      title: destination.name,
      description: destination.description,
      images: [{ url: destination.image }],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const destination = await getDestination(params.slug);

  if (!destination) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.location,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": destination.rating,
      "reviewCount": destination.reviews,
    },
    "offers": {
      "@type": "Offer",
      "price": destination.price.replace("$", "").replace(",", ""),
      "priceCurrency": "USD",
    },
  };

  return (
    <main className="min-h-screen pt-20">
      <StructuredData data={jsonLd} />

      <div className="relative h-[60vh] w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Container className="py-12">
        <div className="max-w-3xl">
          <p className="text-luxury-gold uppercase tracking-widest text-sm font-medium mb-2">
            {destination.location}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-luxury-anthracite mb-6">
            {destination.name}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            {destination.description}
          </p>

          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-neutral-100 mb-8">
            <div>
              <p className="text-sm text-neutral-400 uppercase tracking-tighter mb-1">Price</p>
              <p className="text-2xl font-medium text-luxury-anthracite">
                {destination.price} <span className="text-sm font-normal text-neutral-500">/ night</span>
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-400 uppercase tracking-tighter mb-1">Rating</p>
              <p className="text-2xl font-medium text-luxury-anthracite">
                {destination.rating} <span className="text-sm font-normal text-neutral-500">({destination.reviews} reviews)</span>
              </p>
            </div>
          </div>

          <Button className="w-full md:w-auto px-12 py-4 h-auto text-lg">
            Book This Sanctuary
          </Button>
        </div>
      </Container>
    </main>
  );
}
