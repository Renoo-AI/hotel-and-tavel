"use client";

import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-32 bg-luxury-dark text-luxury-offwhite relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <Container>
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.4em] text-[10px] text-luxury-gold mb-6 block font-bold">
            Unrivaled Experiences
          </span>
          <h2 className="text-mask kerning-tight">Echoes of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex mb-8 gap-1" aria-label={`${review.rating} star rating`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <blockquote className="text-xl font-serif italic mb-10 leading-relaxed text-luxury-offwhite/90 group-hover:text-luxury-offwhite transition-colors duration-500">
                &quot;{review.content}&quot;
              </blockquote>
              <div className="w-8 h-px bg-luxury-gold/40 mb-8 group-hover:w-16 transition-all duration-700" />
              <div>
                <p className="font-serif text-2xl mb-2 text-white">{review.name}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-gold font-bold">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
