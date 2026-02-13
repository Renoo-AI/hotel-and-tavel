import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Eleanor Sterling",
    role: "Travel Journalist",
    content: "The attention to detail is simply breathtaking. Every aspect of the stay was curated to perfection, offering a level of tranquility I haven't found elsewhere.",
    rating: 5,
  },
  {
    name: "Julian Vane",
    role: "Architect",
    content: "A masterclass in minimalist luxury. The architecture and interior design create an atmosphere that is both sophisticated and deeply welcoming.",
    rating: 5,
  },
  {
    name: "Sophia Thorne",
    role: "Frequent Traveler",
    content: "Exceeded all expectations. The personalized service and stunning locations make this my only choice for luxury travel.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-luxury-anthracite text-luxury-offwhite">
      <Container>
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-luxury-gold mb-4 block">
            Client Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">What Our Guests Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex mb-6" aria-label={`${review.rating} star rating`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-lg font-light italic mb-8 leading-relaxed opacity-90">
                &quot;{review.content}&quot;
              </p>
              <div>
                <p className="font-serif text-xl mb-1">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
