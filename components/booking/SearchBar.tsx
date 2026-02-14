"use client";

import { useState, useEffect } from "react";
import { Search, Calendar, Users, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer } from "vaul";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { Skeleton } from "@/components/ui/Skeleton";
import DOMPurify from "dompurify";

export const SearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const sanitizeInput = (input: string) => {
    if (typeof window === "undefined") return input;
    return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  };

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SearchContent = ({ className }: { className?: string }) => (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-cinematic p-1 md:p-2 flex flex-col md:flex-row items-center gap-2",
        "gpu-accelerated",
        className
      )}
    >
      {/* Destination */}
      <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-black/5 group cursor-pointer">
        <MapPin className="text-luxury-gold w-4 h-4 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col flex-1">
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-dark/60 font-semibold mb-1">Destination</label>
          <input
            type="text"
            placeholder="Search sanctuary..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(sanitizeInput(e.target.value))}
            className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/40 outline-none font-medium w-full"
          />
        </div>
      </div>

      <div className="hidden md:block w-px h-10 bg-luxury-gold/20" />

      {/* Dates */}
      <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 hover:bg-black/5 group cursor-pointer">
        <Calendar className="text-luxury-gold w-4 h-4 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col flex-1">
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-dark/60 font-semibold mb-1">Check-in - Out</label>
          <input
            type="text"
            placeholder="Select dates"
            className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/40 outline-none font-medium w-full"
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
          <label className="text-[9px] uppercase tracking-[0.2em] text-luxury-dark/60 font-semibold mb-1">Guests</label>
          <select
            className="bg-transparent border-none focus:ring-0 p-0 text-sm appearance-none outline-none cursor-pointer font-medium w-full"
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

  if (!isMounted) {
    return (
      <div className="relative -mt-16 z-40">
        <Container>
          <Skeleton className="h-20 w-full bg-white/50 backdrop-blur-2xl border border-white/40 shadow-cinematic" />
        </Container>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Search Bar (Relative) */}
      {!isMobile && (
        <div className="relative -mt-16 z-40 hidden md:block">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SearchContent />
            </motion.div>
          </Container>
        </div>
      )}

      {/* Desktop Sticky Search Bar */}
      {!isMobile && (
        <AnimatePresence>
          {isSticky && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 w-full z-[110] py-4 bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-cinematic hidden md:block"
            >
              <Container>
                <SearchContent />
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Search Card Trigger */}
      {isMobile && (
        <div className="relative -mt-8 z-40 px-4 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white/90 backdrop-blur-xl p-4 shadow-cinematic border border-luxury-gold/10 flex items-center justify-between active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-luxury-gold" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-luxury-dark/60">Start your journey</p>
                <p className="text-sm font-medium text-luxury-muted">Where would you like to go?</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
            </div>
          </button>
        </div>
      )}

      {/* Mobile Fixed CTA */}
      {isMobile && isSticky && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-[calc(4rem+env(safe-area-inset-bottom))] left-0 right-0 z-[90] px-4 pb-4 md:hidden pointer-events-none"
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full h-14 bg-luxury-dark text-luxury-offwhite shadow-cinematic rounded-full font-bold uppercase tracking-[0.2em] text-xs pointer-events-auto active:scale-95 transition-transform flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            Book Your Stay
          </Button>
        </motion.div>
      )}

      {/* Mobile Booking Drawer */}
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]" />
          <Drawer.Content className="bg-luxury-offwhite flex flex-col rounded-t-[32px] h-[85vh] fixed bottom-0 left-0 right-0 z-[201] outline-none">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-luxury-gold/20 my-4" />
            <div className="flex-1 overflow-y-auto p-8 pt-2">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-serif">Plan Your Escape</h2>
                  <p className="text-sm text-luxury-muted font-light italic">Tailored to your preferences</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-luxury-cream flex items-center justify-center active:scale-90 transition-transform"
                >
                  <X className="w-5 h-5 text-luxury-dark" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Destination */}
                <div className="group">
                   <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-dark/60 font-bold mb-4 block">Destination</label>
                   <div className="flex items-center gap-4 p-4 bg-luxury-cream border-b border-luxury-gold/20 focus-within:border-luxury-gold transition-colors">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                      <input
                        type="text"
                        placeholder="Select a destination"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(sanitizeInput(e.target.value))}
                        className="bg-transparent border-none focus:ring-0 p-0 text-lg placeholder:text-luxury-muted/40 outline-none w-full"
                      />
                   </div>
                </div>

                {/* Dates */}
                <div className="group">
                   <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-dark/60 font-bold mb-4 block">Travel Dates</label>
                   <div className="flex items-center gap-4 p-4 bg-luxury-cream border-b border-luxury-gold/20">
                      <Calendar className="w-5 h-5 text-luxury-gold" />
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <input type="date" className="bg-transparent border-none focus:ring-0 p-0 text-sm outline-none" />
                        <input type="date" className="bg-transparent border-none focus:ring-0 p-0 text-sm outline-none" />
                      </div>
                   </div>
                </div>

                {/* Guests */}
                <div className="group">
                   <label className="text-[10px] uppercase tracking-[0.3em] text-luxury-dark/60 font-bold mb-4 block">Guests</label>
                   <div className="flex items-center gap-4 p-4 bg-luxury-cream border-b border-luxury-gold/20">
                      <Users className="w-5 h-5 text-luxury-gold" />
                      <select className="bg-transparent border-none focus:ring-0 p-0 text-lg outline-none w-full appearance-none">
                        <option>2 Adults, 0 Children</option>
                        <option>1 Adult</option>
                        <option>2 Adults, 1 Child</option>
                        <option>4 Adults</option>
                      </select>
                   </div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <Button className="w-full h-16 bg-luxury-dark text-luxury-offwhite rounded-none text-xs uppercase tracking-[0.4em] font-bold active:scale-[0.98] transition-transform">
                  Check Availability
                </Button>
                <p className="text-[10px] text-center text-luxury-muted uppercase tracking-widest opacity-60">
                  Best price guaranteed via our concierge
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};
