import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import heroDefault from "@/assets/hero-airport.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AR Overseas Consultancy Hyderabad" },
      { name: "description", content: "Visit our Hyderabad office or call us. Mon–Sat, 9 AM – 6 PM. We're here to help your global journey." },
      { property: "og:title", content: "Contact AR Overseas Consultancy" },
      { property: "og:description", content: "Reach our team for free counselling and support." },
    ],
  }),
  component: Contact,
});

// ─── Data ──────────────────────────────────────────────────────────────────────
const cards = [
  { icon: Phone, title: "Phone", lines: ["+91 81424 45464", "+91 90524 45464", "+91 8885949498"] },
  { icon: MapPin, title: "Location", lines: ["Plot 53, HIG Phase 1, H.No 6-2-662", "Rajeshwari Complex, Vanasthalipuram", "Hyderabad, Telangana 500070"] },
  { icon: Mail, title: "E-mail", lines: ["aroverseas1125@gmail.com", "www.aroverseasconsultancy.com"] },
];

const STRIP = [
  "AR Overseas Consultancy (OPC) Pvt. Ltd.",
  "Education to Employment — Your Trusted Path",
  "Germany · UK · USA · Canada · Australia · Ireland",
  "Nursing Jobs · Ausbildung · Study Abroad",
  "100% End-to-End Support",
];

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Page ──────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-secondary-foreground">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease }}
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroDefault})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/90 via-secondary/75 to-primary/70" />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 18% 28%, var(--brand-gold) 0%, transparent 38%), radial-gradient(circle at 82% 72%, var(--brand-red) 0%, transparent 42%)" }}
        />

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease }}
            className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold"
          >
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Contact Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, ease }}
            className="text-sm text-brand-gold flex items-center gap-2"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/80">Contact Us</span>
          </motion.div>
        </div>

        {/* Scrolling marquee strip */}
        <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="flex w-max whitespace-nowrap animate-marquee py-2.5">
            {[...STRIP, ...STRIP, ...STRIP].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-xs md:text-sm font-medium text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact cards + map ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease }}
                className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant border border-border transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                  <c.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-3">{c.title}</h3>
                <div className="space-y-1">
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border"
          >
            <iframe
              title="AR Overseas Office"
              src="https://www.google.com/maps?q=Vanasthalipuram,+Hyderabad,+Telangana+500070&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-navy text-secondary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Globe className="h-12 w-12 mx-auto mb-4 text-brand-gold animate-float" />
          <h2 className="text-4xl font-bold mb-4">Let's Build Your Global Future</h2>
          <p className="text-white/80 mb-8">Open Mon–Sat, 9 AM – 6 PM. Walk in, call or write — your dream destination is one conversation away.</p>
          <a
            href="tel:+918142445464"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}