import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/cards/DestinationCard";

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    location: "Maldives",
    title: "Azure Serenity Resort",
    price: "$1,200",
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    location: "Paris, France",
    title: "L'Eclat Parisienne",
    price: "$850",
  },
  {
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
    location: "Santorini, Greece",
    title: "Vesta Caldera Suites",
    price: "$950",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    location: "Tuscany, Italy",
    title: "Borgo del Silenzio",
    price: "$700",
  },
];

export const Discovery = () => {
  return (
    <section className="py-24 bg-luxury-offwhite">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-xs text-luxury-gold mb-4 block font-medium">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Discover Our Most <br /> Exclusive Destinations
            </h2>
          </div>
          <p className="text-luxury-muted max-w-sm mb-2 font-light leading-relaxed">
            Handpicked retreats designed for those who seek the extraordinary in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </Container>
    </section>
  );
};
