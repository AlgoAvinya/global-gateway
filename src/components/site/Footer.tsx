import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="AR Overseas" className="h-16 w-auto mb-4 bg-white/95 rounded-lg p-2" />
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">
            Where Great Things Happen. Empowering Indian students & nurses with global career opportunities.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/jobs-germany", "Jobs In Germany"], ["/enquiry", "Enquiry"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">Our Services</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li>Overseas Education</li>
            <li>Nursing Jobs in Germany</li>
            <li>Ausbildung</li>
            <li>Visa Services</li>
            <li>German Language Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">India Office</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" /> Plot 53, HIG Phase 1, H.No 6-2-662, Rajeshwari Complex, Vanasthalipuram, Hyderabad, Telangana 500070</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" /> +91 81424 45464 · 90524 45464</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" /> aroverseas1125@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-center text-secondary-foreground/70">
          © 2025 AR Overseas Consultancy (OPC) Pvt. Ltd. · All Rights Reserved · <a className="hover:text-brand-gold">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
