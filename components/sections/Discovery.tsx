"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraints({
        left: -(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth),
        right: 0,
      });
    }
  }, []);

  return (
    <section className="py-32 bg-luxury-cream overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.4em] text-[10px] text-luxury-dark/60 mb-6 block font-bold">
              Curated Masterpieces
            </span>
            <h2 className="kerning-tight">
              Extraordinary Sanctuaries <br />
              <span className="italic font-light">Around the Globe</span>
            </h2>
          </div>
          <div className="max-w-sm lg:text-right hidden md:block">
             <p className="text-luxury-muted mb-8 font-light leading-relaxed">
              Every property in our portfolio is selected for its architectural soul and connection to its natural environment.
            </p>
            <div className="inline-flex items-center gap-4 group cursor-pointer">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-dark group-hover:text-luxury-gold transition-colors">View All Destinations</span>
              <div className="w-8 h-px bg-luxury-dark group-hover:w-12 group-hover:bg-luxury-gold transition-all" />
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DestinationCard {...dest} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
          >
            {destinations.map((dest, index) => (
              <div key={index} className="min-w-[85vw]">
                <DestinationCard {...dest} />
              </div>
            ))}
          </motion.div>

          <div className="mt-12 flex items-center justify-between">
             <div className="flex gap-2">
                {destinations.map((_, i) => (
                  <div key={i} className={cn("h-1 rounded-full bg-luxury-gold transition-all duration-500", i === 0 ? "w-8" : "w-2 opacity-20")} />
                ))}
             </div>
             <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-muted font-bold">Swipe to Explore</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
