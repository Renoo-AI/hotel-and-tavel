"use client";

import { useState, useEffect } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "z-50 transition-all duration-500 w-full",
        isSticky ? "fixed top-0 left-0 bg-luxury-offwhite/90 backdrop-blur-md shadow-md py-4" : "relative -mt-16 py-0"
      )}
    >
      <Container>
        <div className="bg-luxury-offwhite border border-luxury-champagne p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 shadow-xl">
          {/* Destination */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-luxury-champagne pb-4 md:pb-0">
            <MapPin className="text-luxury-gold w-5 h-5" />
            <div className="flex flex-col flex-1">
              <label className="text-[10px] uppercase tracking-widest text-luxury-muted">Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/50 outline-none"
                aria-label="Destination"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-luxury-champagne pb-4 md:pb-0">
            <Calendar className="text-luxury-gold w-5 h-5" />
            <div className="flex flex-col flex-1">
              <label className="text-[10px] uppercase tracking-widest text-luxury-muted">Check-in / Out</label>
              <input
                type="text"
                placeholder="Add dates"
                className="bg-transparent border-none focus:ring-0 p-0 text-sm placeholder:text-luxury-anthracite/50 outline-none"
                aria-label="Booking dates"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 pb-4 md:pb-0">
            <Users className="text-luxury-gold w-5 h-5" />
            <div className="flex flex-col flex-1">
              <label className="text-[10px] uppercase tracking-widest text-luxury-muted">Guests</label>
              <select
                className="bg-transparent border-none focus:ring-0 p-0 text-sm appearance-none outline-none cursor-pointer"
                aria-label="Number of guests"
              >
                <option>2 Adults, 0 Children</option>
                <option>1 Adult</option>
                <option>2 Adults, 1 Child</option>
                <option>4 Adults</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Button variant="primary" className="w-full md:w-auto px-10" aria-label="Search availability">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </Container>
    </div>
  );
};
