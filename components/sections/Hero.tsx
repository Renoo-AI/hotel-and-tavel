"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Hotel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Container className="relative z-10 text-center text-luxury-offwhite">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-sm mb-4 block">
            Welcome to Paradise
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            The Art of <br /> Quiet Luxury
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide opacity-90">
            Experience unparalleled comfort and elegance in the world&apos;s most
            exclusive destinations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-luxury-offwhite text-luxury-anthracite hover:bg-luxury-champagne border-none">
              Explore Suites
            </Button>
            <Button variant="outline" size="lg" className="border-luxury-offwhite text-luxury-offwhite hover:bg-luxury-offwhite hover:text-luxury-anthracite">
              Book Your Stay
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-luxury-offwhite to-transparent" />
      </motion.div>
    </section>
  );
};
