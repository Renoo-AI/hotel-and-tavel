"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-organic",
        isScrolled
          ? "bg-luxury-dark/80 backdrop-blur-xl py-4 shadow-cinematic border-b border-white/5"
          : "bg-transparent py-8"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "text-2xl font-serif tracking-[0.2em] transition-colors duration-500",
              isScrolled ? "text-luxury-offwhite" : "text-luxury-offwhite"
            )}
          >
            LUXESTAY
          </motion.div>

          {/* Desktop Nav */}
          <div className={cn(
            "hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-medium transition-colors duration-500",
            "text-luxury-offwhite/80"
          )}>
            {["Destinations", "Resorts", "Experience", "Offers"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group hover:text-luxury-gold transition-colors duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              className={cn(
                "transition-all duration-500 rounded-none kerning-loose",
                !isScrolled && "border-white/30 text-white hover:bg-white hover:text-luxury-dark border-luxury-offwhite"
              )}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-luxury-offwhite"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-luxury-dark z-[90] flex flex-col items-center justify-center gap-8"
          >
             {["Destinations", "Resorts", "Experience", "Offers"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-serif tracking-widest text-luxury-offwhite hover:text-luxury-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="primary" className="mt-8 px-12">Book Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
