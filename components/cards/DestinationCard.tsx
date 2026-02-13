"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  location: string;
  title: string;
  price: string;
}

export const DestinationCard = ({
  image,
  location,
  title,
  price,
}: DestinationCardProps) => {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden bg-white gpu-accelerated shadow-sm hover:shadow-cinematic transition-all duration-700 ease-organic"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Cinematic Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-organic">
          <ArrowUpRight className="w-5 h-5" />
        </div>

        <div className="absolute bottom-8 left-8 right-8 text-white">
           <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold mb-2 block">
            {location}
          </span>
          <h3 className="text-2xl font-serif mb-4 leading-tight">
            {title}
          </h3>
          <div className="w-0 h-px bg-luxury-gold group-hover:w-full transition-all duration-700 ease-organic" />
        </div>
      </div>

      <div className="p-8 bg-white border-x border-b border-luxury-champagne/10">
        <div className="flex justify-between items-end">
          <p className="text-[10px] uppercase tracking-widest text-luxury-muted">
            Rates from <span className="text-luxury-dark font-bold ml-1">{price}</span>
          </p>
          <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">View Suite</span>
        </div>
      </div>
    </motion.div>
  );
};
