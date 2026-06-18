import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin,
  Sparkles, Plane, GraduationCap, Stethoscope, Award,
} from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/",             label: "Home"              },
  { to: "/about",        label: "About Us"          },
  { to: "/services",     label: "Services"          },
  { to: "/jobs-germany", label: "Nursing in Germany"},
  { to: "/ausbildung",   label: "Ausbildung"        },
  { to: "/enquiry",      label: "Enquiry"           },
  { to: "/contact",      label: "Contact"           },
] as const;

const ticker = [
  { icon: Sparkles,      text: "Education to Employment — Your Trusted Path"               },
  { icon: Stethoscope,   text: "Nursing Jobs in Germany — Get Started Today"                 },
  { icon: GraduationCap, text: "Admissions Open: Germany · UK · USA · Canada · Australia"  },
  { icon: Award,         text: "100% Visa Success · Free Career Counselling"               },
  { icon: Plane,         text: "Ausbildung Programs — Paid Vocational Training in Germany" },
];

const MAPS_URL = "https://maps.app.goo.gl/wfg1DTPP2BV49h9t7";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}
        className="w-full"
      >

        {/* ════════════════════════════════════════════
            TOP BAR — marquee
        ════════════════════════════════════════════ */}
        <div className="bg-gradient-brand text-primary-foreground overflow-hidden border-b border-white/10">
          <div className="group py-2 overflow-hidden">
            <div className="flex w-max whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-8 text-xs md:text-sm font-medium">
                  <t.icon className="h-3.5 w-3.5 text-brand-gold" />
                  {t.text}
                  <span className="text-brand-gold/70 ml-6">★</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            CONTACT BAR — desktop only
        ════════════════════════════════════════════ */}
        <div className="hidden md:block bg-secondary text-secondary-foreground text-xs border-b border-border/40">
          <div className="w-full flex justify-between items-center px-4 py-1.5">
            {/* Left: phone + email */}
            <div className="flex items-center gap-5">
              <a href="tel:+917396949498" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200">
                <Phone className="h-3 w-3 text-brand-gold" />
                +91 73969 49498
              </a>
              <a href="tel:+918885949498" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200">
                <Phone className="h-3 w-3 text-brand-gold" />
                +91 88859 49498
              </a>
              <a href="mailto:info@aroverseasconsultancy.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200">
                <Mail className="h-3 w-3 text-brand-gold" />
                info@aroverseasconsultancy.com
              </a>
            </div>
            {/* Right: address */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Plot No: 53, HIG – Phase 1, Rajeshwari Complex, Beside Ganesh Temple, Vanasthalipuram, Hyderabad – 500070"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              <MapPin className="h-3 w-3 text-brand-gold flex-shrink-0" />
              <span>Hyderabad, Telangana</span>
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════════════
            MAIN NAV BAR — white background
        ════════════════════════════════════════════ */}
        <div className="bg-white border-b border-slate-200 shadow-md">
          <div className="w-full flex items-center pl-1 pr-3 py-1.5 gap-2">

            {/* ── Logo only, flush left ── */}
            <Link to="/" className="group flex-shrink-0 mr-3">
              <img
                src={logo}
                alt="AR Overseas Consultancy"
                className="h-14 md:h-16 w-auto transition-transform duration-500 group-hover:scale-105"
                style={{width: 120, height: 80, marginLeft: 10}}
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-end">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative px-3 py-2 text-[14px] font-semibold whitespace-nowrap rounded-md text-slate-700 transition-all duration-200 hover:text-slate-900 group/navitem"
                  activeProps={{
                    className: "!text-white !bg-[#1e3a5f] rounded-md shadow-md",
                  }}
                >
                  {n.label}
                  {/* red underline slides in on hover only */}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-red-500 origin-left scale-x-0 group-hover/navitem:scale-x-100 transition-transform duration-200 rounded-full" />
                </Link>
              ))}

              {/* Free Consultation CTA */}
              <Link
                to="/enquiry"
                className="ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 text-[14px] font-bold shadow-lg hover:scale-105 hover:shadow-amber-400/40 transition-all duration-300 whitespace-nowrap flex-shrink-0"
              >
                Free Consultation
              </Link>
            </nav>

            {/* ── Hamburger — mobile only ── */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-700 flex-shrink-0 ml-auto"
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* ── Mobile drawer ── */}
          {open && (
            <div className="md:hidden border-t border-slate-200 bg-white animate-in slide-in-from-top duration-300">
              <nav className="px-4 py-3 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-[#1e3a5f] hover:text-white transition-all duration-200"
                    activeProps={{ className: "bg-[#1e3a5f] text-white" }}
                  >
                    {n.label}
                  </Link>
                ))}
                {/* Contact info in mobile drawer */}
                <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col gap-2 text-sm text-slate-600">
                  <a href="tel:+917396949498" className="flex items-center gap-2 px-4 hover:text-brand-gold transition-colors">
                    <Phone className="h-4 w-4 text-brand-gold" />
                    +91 73969 49498
                  </a>
                  <a href="tel:+918885949498" className="flex items-center gap-2 px-4 hover:text-brand-gold transition-colors">
                    <Phone className="h-4 w-4 text-brand-gold" />
                    +91 88859 49498
                  </a>
                  <a href="mailto:info@aroverseasconsultancy.com" className="flex items-center gap-2 px-4 hover:text-brand-gold transition-colors">
                    <Mail className="h-4 w-4 text-brand-gold" />
                    info@aroverseasconsultancy.com
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 hover:text-brand-gold transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    Hyderabad, Telangana
                  </a>
                </div>
                <Link
                  to="/enquiry"
                  onClick={() => setOpen(false)}
                  className="mt-3 text-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 text-sm font-bold shadow-lg"
                >
                  Free Consultation
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer: desktop marquee(36)+contact(30)+nav(76)=142px | mobile marquee(36)+nav(72)=108px */}
      <div className="h-[108px] md:h-[142px]" aria-hidden="true" />
    </>
  );
}