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
      whileHover={{ y: -10 }}
      className="group relative cursor-pointer overflow-hidden bg-luxury-offwhite"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute top-4 right-4 bg-luxury-offwhite/20 backdrop-blur-md p-2 rounded-full text-luxury-offwhite opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="py-6">
        <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-medium">
          {location}
        </span>
        <h3 className="text-xl font-serif mt-2 group-hover:text-luxury-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-luxury-muted">
          Starting from <span className="text-luxury-anthracite font-semibold">{price}</span> / night
        </p>
      </div>
    </motion.div>
  );
};
