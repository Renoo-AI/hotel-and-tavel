"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-dark"
    >
      {/* Background with Parallax and Mesh Gradient Overlay */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Hotel"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-mesh-gradient opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/40 via-transparent to-luxury-dark" />
      </motion.div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          style={{ opacity }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="uppercase text-xs mb-6 block text-luxury-gold font-medium kerning-loose"
          >
            Defining the Future of Hospitality
          </motion.span>

          <h1 className="text-mask mb-8 gpu-accelerated">
            The Art of <br />
            <span className="italic font-light">Quiet Luxury</span>
          </h1>

          <p className="text-luxury-offwhite/70 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            Where architecture meets emotion. Discover a collection of sanctuaries
            designed for the discerning traveler seeking profound tranquility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              className="bg-luxury-gold text-luxury-dark hover:bg-white transition-all duration-500 rounded-none px-10 kerning-loose"
            >
              Explore Suites
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 rounded-none px-10 kerning-loose"
            >
              Our Philosophy
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Cinematic Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-luxury-gold/60">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-luxury-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
};
