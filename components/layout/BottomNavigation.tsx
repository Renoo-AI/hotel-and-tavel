"use client";

import { Home, Search, Calendar, User, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Search, label: "Explore", id: "explore" },
  { icon: Heart, label: "Saved", id: "saved" },
  { icon: Calendar, label: "Bookings", id: "bookings" },
  { icon: User, label: "Profile", id: "profile" },
];

export const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      {/* Background with glassmorphism and safe area padding */}
      <div className="bg-white/80 backdrop-blur-2xl border-t border-luxury-gold/10 pb-[env(safe-area-inset-bottom)] px-6 pt-3 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center max-w-lg mx-auto h-16">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative flex flex-col items-center justify-center w-12 group"
                aria-label={item.label}
              >
                <div className="relative">
                  <item.icon
                    className={cn(
                      "w-6 h-6 transition-all duration-300",
                      isActive ? "text-luxury-dark" : "text-neutral-500 group-active:scale-90"
                    )}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-luxury-gold rounded-full"
                    />
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] mt-1 font-medium transition-colors duration-300",
                    isActive ? "text-luxury-dark" : "text-neutral-500"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
