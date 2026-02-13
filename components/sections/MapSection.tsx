import { Container } from "@/components/ui/Container";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  return (
    <section className="py-24 bg-luxury-offwhite">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="uppercase tracking-[0.3em] text-xs text-luxury-gold mb-4 block font-medium">
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Located in the Heart <br /> of Extraordinary
            </h2>
            <p className="text-luxury-muted mb-8 font-light leading-relaxed">
              Our properties are strategically chosen for their cultural significance and natural beauty. Find us in the most sought-after corners of the globe.
            </p>
            <div className="space-y-4">
              {[
                "Flagship Resort - Maldives",
                "European Hub - Paris, France",
                "Cultural Oasis - Kyoto, Japan",
              ].map((location, i) => (
                <div key={i} className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" aria-hidden="true" />
                  <span className="text-sm tracking-wide">{location}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 w-full aspect-video bg-luxury-champagne/20 relative overflow-hidden border border-luxury-champagne"
            role="region"
            aria-label="Interactive Map Placeholder"
          >
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-30" />

            {/* Map Markers (Stylized) */}
            <div className="absolute top-1/4 left-1/3 animate-pulse">
               <div className="w-3 h-3 bg-luxury-gold rounded-full shadow-[0_0_15px_rgba(197,160,89,0.8)]" />
            </div>
            <div className="absolute top-1/2 right-1/4 animate-pulse delay-700">
               <div className="w-3 h-3 bg-luxury-gold rounded-full shadow-[0_0_15px_rgba(197,160,89,0.8)]" />
            </div>
            <div className="absolute bottom-1/3 left-1/2 animate-pulse delay-300">
               <div className="w-3 h-3 bg-luxury-gold rounded-full shadow-[0_0_15px_rgba(197,160,89,0.8)]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-luxury-offwhite/80 backdrop-blur-sm p-6 text-center shadow-lg border border-luxury-champagne max-w-[200px]">
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">Interactive Map</p>
                  <p className="text-xs text-luxury-anthracite">Google Maps API Integration Ready</p>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
