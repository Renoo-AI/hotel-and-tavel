import { Container } from "@/components/ui/Container";
import { MapPin, Globe } from "lucide-react";

export const MapSection = () => {
  return (
    <section className="py-32 bg-luxury-cream">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div
              className="w-full aspect-square md:aspect-video lg:aspect-square bg-luxury-dark relative overflow-hidden shadow-cinematic group"
              role="region"
              aria-label="Interactive Map Placeholder"
            >
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-20 transition-transform duration-[3000ms] group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-dark via-transparent to-luxury-dark/40 opacity-80" />

              {/* Map Markers (Stylized) */}
              {[
                { top: '25%', left: '33%', delay: '0s' },
                { top: '50%', right: '25%', delay: '0.7s' },
                { top: '65%', left: '50%', delay: '0.3s' },
              ].map((marker, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{ top: marker.top, left: marker.left, right: marker.right, animationDelay: marker.delay }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 w-8 h-8 bg-luxury-gold/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
                    <div className="w-4 h-4 bg-luxury-gold rounded-full shadow-[0_0_20px_rgba(197,160,89,1)] relative z-10" />
                  </div>
                </div>
              ))}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-luxury-dark/60 backdrop-blur-xl border border-white/10 p-10 text-center shadow-cinematic max-w-xs transform -rotate-1">
                    <Globe className="w-8 h-8 text-luxury-gold mx-auto mb-6 opacity-80" />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 font-bold">The Portfolio</p>
                    <p className="text-sm text-luxury-offwhite font-light italic leading-relaxed">Strategic destinations chosen for their cultural soul and natural majesty.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <span className="uppercase tracking-[0.4em] text-[10px] text-luxury-gold mb-6 block font-bold">
              Global Vision
            </span>
            <h2 className="kerning-tight mb-8">
              In the Heart of <br />
              <span className="italic font-light">The Extraordinary</span>
            </h2>
            <p className="text-luxury-muted mb-12 font-light leading-relaxed text-lg">
              Our presence spans three continents, each property offering a unique interpretation of luxury through the lens of local heritage and modern sophistication.
            </p>
            <div className="space-y-8">
              {[
                { name: "Azure Serenity", loc: "Maldives", type: "Flagship Island Sanctuary" },
                { name: "L'Eclat", loc: "Paris, France", type: "Urban Heritage Retreat" },
                { name: "Borgo del Silenzio", loc: "Tuscany, Italy", type: "Tuscan Estate & Spa" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group cursor-pointer">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center border border-luxury-gold/20 rounded-full group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-500">
                    <MapPin className="w-4 h-4 text-luxury-gold group-hover:text-luxury-dark transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 group-hover:text-luxury-gold transition-colors">{item.name}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted mb-1">{item.loc}</p>
                    <p className="text-xs font-light italic opacity-60">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
