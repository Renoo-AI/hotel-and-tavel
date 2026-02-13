import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-luxury-offwhite border-t border-luxury-champagne py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-2xl font-serif tracking-tighter mb-6">LUXESTAY</div>
            <p className="text-sm text-luxury-muted font-light leading-relaxed">
              Defining the future of luxury travel through curated experiences and unparalleled service.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-luxury-muted font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">All Destinations</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Private Villas</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Luxury Cruises</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Exclusive Offers</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Support</h4>
             <ul className="space-y-4 text-sm text-luxury-muted font-light">
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">FAQs</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a></li>
             </ul>
          </div>
          <div>
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Newsletter</h4>
             <p className="text-xs text-luxury-muted mb-4 font-light">Join our list for exclusive travel inspiration.</p>
             <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border-b border-luxury-champagne flex-1 text-sm py-2 focus:outline-none focus:border-luxury-gold"
                  aria-label="Email address for newsletter"
                />
                <button
                  className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
             </div>
          </div>
        </div>
        <div className="border-t border-luxury-champagne pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[10px] uppercase tracking-widest text-luxury-muted">
             © 2024 LuxeStay. All rights reserved.
           </p>
           <div className="flex gap-6 text-[10px] uppercase tracking-widest text-luxury-muted">
              <a href="#" className="hover:text-luxury-gold transition-colors" aria-label="Visit our Instagram">Instagram</a>
              <a href="#" className="hover:text-luxury-gold transition-colors" aria-label="Visit our Twitter">Twitter</a>
              <a href="#" className="hover:text-luxury-gold transition-colors" aria-label="Visit our LinkedIn">LinkedIn</a>
           </div>
        </div>
      </Container>
    </footer>
  );
};
