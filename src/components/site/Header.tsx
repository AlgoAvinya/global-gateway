import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Sparkles, Plane, GraduationCap, Stethoscope, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/jobs-germany", label: "Jobs In Germany" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

const ticker = [
  { icon: Sparkles, text: "Education to Employment — Your Trusted Path" },
  { icon: Stethoscope, text: "Nursing Jobs in Germany — Earn 8–10× More" },
  { icon: GraduationCap, text: "Admissions Open: Germany · UK · USA · Canada · Australia" },
  { icon: Award, text: "100% Visa Success · Free Career Counselling" },
  { icon: Plane, text: "Ausbildung Programs — Paid Vocational Training in Germany" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement marquee — seamless circular loop */}
      <div className="bg-gradient-brand text-primary-foreground overflow-hidden border-b border-white/10">
        <div className="flex w-max whitespace-nowrap animate-marquee py-2">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-8 text-xs md:text-sm font-medium">
              <t.icon className="h-3.5 w-3.5 text-brand-gold" />
              {t.text}
              <span className="text-brand-gold/70 ml-6">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Contact bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground text-xs">
        <div className="container mx-auto flex justify-between items-center px-4 py-1.5">
          <div className="flex items-center gap-5">
            <a href="tel:+918142445464" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"><Phone className="h-3 w-3" /> +91 81424 45464 · 90524 45464</a>
            <a href="mailto:aroverseas1125@gmail.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"><Mail className="h-3 w-3" /> aroverseas1125@gmail.com</a>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-brand-gold" /> Hyderabad, Telangana</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-4">
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img src={logo} alt="AR Overseas Consultancy" className="h-12 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base md:text-lg font-bold text-secondary">AR Overseas</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-semibold">Education to Employment</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative px-3 py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors duration-300 whitespace-nowrap"
                activeProps={{ className: "!text-primary [&_span]:scale-x-100" }}
              >
                {n.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <Link
              to="/enquiry"
              className="ml-3 inline-flex items-center rounded-full bg-gradient-brand text-primary-foreground px-5 py-2 text-sm font-semibold shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Free Consultation
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-secondary" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-secondary font-medium hover:bg-accent transition-colors"
                  activeProps={{ className: "text-primary bg-accent" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/enquiry"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-gradient-brand text-primary-foreground px-5 py-3 text-sm font-semibold shadow-glow"
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
