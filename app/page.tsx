import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SearchBar } from "@/components/booking/SearchBar";
import { Discovery } from "@/components/sections/Discovery";
import { Testimonials } from "@/components/sections/Testimonials";
import { MapSection } from "@/components/sections/MapSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <Discovery />
      <Testimonials />
      <MapSection />
      <Footer />
    </main>
  );
}
