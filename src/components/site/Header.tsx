import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/jobs-germany", label: "Jobs In Germany" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-navy text-secondary-foreground text-xs">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> +91 81424 45464 · 90524 45464 · 8885949498</span>
          </div>
          <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> Mon–Sat: 9 AM – 6 PM</span>
        </div>
      </div>

      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="AR Overseas Consultancy" className="h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg font-bold text-secondary">AR Overseas</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Consultancy (OPC) Pvt. Ltd.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                activeProps={{ className: "text-primary" }}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-brand origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </Link>
            ))}
            <Link
              to="/enquiry"
              className="ml-3 inline-flex items-center rounded-full bg-gradient-brand text-primary-foreground px-5 py-2 text-sm font-semibold shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Free Consultation
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-secondary" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                  activeProps={{ className: "text-primary bg-accent" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
