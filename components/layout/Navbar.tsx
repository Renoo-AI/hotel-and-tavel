"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        isScrolled ? "bg-luxury-offwhite/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className={cn(
            "text-2xl font-serif tracking-tighter transition-colors duration-500",
            isScrolled ? "text-luxury-anthracite" : "text-luxury-offwhite"
          )}>
            LUXESTAY
          </div>

          {/* Desktop Nav */}
          <div className={cn(
            "hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500",
            isScrolled ? "text-luxury-anthracite" : "text-luxury-offwhite"
          )}>
            <a href="#" className="hover:text-luxury-gold transition-colors">Destinations</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Resorts</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Experience</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Offers</a>
            <Button
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              className={cn(
               !isScrolled && "border-luxury-offwhite text-luxury-offwhite hover:bg-luxury-offwhite hover:text-luxury-anthracite"
              )}
              aria-label="Book your stay now"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-500",
              isScrolled ? "text-luxury-anthracite" : "text-luxury-offwhite"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luxury-offwhite border-t border-luxury-champagne p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
           <a href="#" className="text-sm uppercase tracking-widest text-luxury-anthracite">Destinations</a>
           <a href="#" className="text-sm uppercase tracking-widest text-luxury-anthracite">Resorts</a>
           <a href="#" className="text-sm uppercase tracking-widest text-luxury-anthracite">Experience</a>
           <a href="#" className="text-sm uppercase tracking-widest text-luxury-anthracite">Offers</a>
           <Button variant="primary" className="w-full">Book Now</Button>
        </div>
      )}
    </nav>
  );
};
