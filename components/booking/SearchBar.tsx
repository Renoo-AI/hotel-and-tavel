"use client";

import { useState, useEffect } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const SearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-cinematic p-1 md:p-2 flex flex-col md:flex-row items-center gap-2",
        "gpu-accelerated"
      )}
    >
      {/* Destination */}
      <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-black/5 group cursor-pointer">
        <MapPin className="text-luxury-gold w-4 h-4 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col flex-1">
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-semibold mb-1">Destination</label>
          <input
            type="text"
            placeholder="Search sanctuary..."
            className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/40 outline-none font-medium"
          />
        </div>
      </div>

      <div className="hidden md:block w-px h-10 bg-luxury-gold/20" />

      {/* Dates */}
      <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-black/5 group cursor-pointer">
        <Calendar className="text-luxury-gold w-4 h-4 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col flex-1">
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-semibold mb-1">Check-in - Out</label>
          <input
            type="text"
            placeholder="Select dates"
            className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/40 outline-none font-medium"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
      </div>

      <div className="hidden md:block w-px h-10 bg-luxury-gold/20" />

      {/* Guests */}
      <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-black/5 group cursor-pointer">
        <Users className="text-luxury-gold w-4 h-4 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col flex-1">
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-semibold mb-1">Guests</label>
          <select
            className="bg-transparent border-none focus:ring-0 p-0 text-sm appearance-none outline-none cursor-pointer font-medium"
          >
            <option>2 Adults, 0 Children</option>
            <option>1 Adult</option>
            <option>2 Adults, 1 Child</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <Button
        variant="primary"
        className="w-full md:w-auto h-full px-12 bg-luxury-dark text-luxury-offwhite hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-500 rounded-none kerning-loose"
      >
        <Search className="w-4 h-4 mr-2" />
        Check Availability
      </Button>
    </div>
  );

  return (
    <>
      {/* Relative version for initial page load */}
      <div className="relative -mt-16 z-40">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {content}
          </motion.div>
        </Container>
      </div>

      {/* Sticky version */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed top-0 left-0 w-full z-[110] py-4 bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-cinematic"
          >
            <Container>
              {content}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
