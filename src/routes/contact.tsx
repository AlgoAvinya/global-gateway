import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Globe, ArrowUpRight } from "lucide-react";
import heroDefault from "@/assets/contact.png";

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
const STRIP = [
  "AR Overseas Consultancy (OPC) Pvt. Ltd.",
  "Education to Employment — Your Trusted Path",
  "Germany · UK · USA · Canada · Australia · Ireland",
  "Nursing Jobs · Ausbildung · Study Abroad",
  "100% End-to-End Support",
];

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// ─── Page ──────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative isolate overflow-hidden text-white"
        style={{ marginTop: -120 }}
      >
        {/* Background image — right-anchored, visible */}
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={heroDefault}
            alt="Contact"
            className="absolute right-0 top-0 h-full"
            style={{ width: "60%", objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>

        {/* Strong left-to-right gradient so text is always readable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to right, var(--color-secondary, #0f2044) 38%, color-mix(in srgb, var(--color-secondary, #0f2044) 60%, transparent) 65%, transparent 100%)",
          }}
        />

        {/* Radial colour accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8% 30%, var(--brand-gold) 0%, transparent 35%), radial-gradient(circle at 25% 80%, var(--brand-red) 0%, transparent 30%)",
          }}
        />

        {/* Hero text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{padding: 40}}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold"
          >
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/75 text-lg mb-6 max-w-md"
          >
            We're open Mon–Sat, 9 AM – 6 PM. Walk in, call, or write — your global journey starts with one conversation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="text-sm text-brand-gold flex items-center gap-2"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/70">Contact Us</span>
          </motion.div>
        </motion.div>

        {/* Marquee strip */}
        {/* <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="flex w-max whitespace-nowrap animate-marquee py-2.5">
            {[...STRIP, ...STRIP, ...STRIP].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-xs md:text-sm font-medium text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {t}
              </span>
            ))}
          </div>
        </div> */}
      </section>

      {/* ══ CONTACT CARDS ═════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--brand-gold) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--brand-red) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Reach Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mt-2">How to Find Us</h2>
          </motion.div>

          {/* Three cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            {/* Phone */}
            <motion.a
              href="tel:+917396949498"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, ease, duration: 0.55 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -12px rgba(var(--brand-gold-rgb, 212,175,55), 0.3)" }}
              className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-gold) 8%, transparent), transparent 60%)" }} />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, var(--brand-gold), #b8860b)" }}>
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-1">Phone</h3>
                <p className="text-xs text-primary uppercase tracking-widest mb-3 font-semibold">Tap to call</p>
                <div className="space-y-1">
                  {["+91 73969 49498", "+91 88859 49498", "+91 8885949498"].map((l) => (
                    <p key={l} className="text-sm text-muted-foreground font-medium">{l}</p>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://maps.app.goo.gl/wfg1DTPP2BV49h9t7"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease, duration: 0.55 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -12px rgba(var(--brand-red-rgb, 200,30,30), 0.3)" }}
              className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-red) 8%, transparent), transparent 60%)" }} />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #e53935, #b71c1c)" }}>
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-1">Location</h3>
                <p className="text-xs text-primary uppercase tracking-widest mb-3 font-semibold">Open in Maps</p>
                <div className="space-y-1">
                  {["Plot 53, HIG Phase 1, H.No 6-2-662", "Rajeshwari Complex, Vanasthalipuram", "Hyderabad, Telangana 500070"].map((l) => (
                    <p key={l} className="text-sm text-muted-foreground font-medium">{l}</p>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@aroverseasconsultancy.com"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, ease, duration: 0.55 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -12px rgba(59,130,246,0.25)" }}
              className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.08), transparent 60%)" }} />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #1e88e5, #0d47a1)" }}>
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-1">E-mail</h3>
                <p className="text-xs text-primary uppercase tracking-widest mb-3 font-semibold">Send a message</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground font-medium">info@aroverseasconsultancy.com</p>
                  <p className="text-sm text-muted-foreground font-medium">www.aroverseasconsultancy.com</p>
                </div>
                <ArrowUpRight className="h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>

          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            className="relative rounded-3xl overflow-hidden border border-border shadow-elegant"
          >
            {/* Coloured top bar */}
            <div className="h-2 w-full" style={{ background: "linear-gradient(to right, var(--brand-gold), var(--brand-red), #1e88e5)" }} />
            <iframe
            title="AR Overseas Office — Vanasthalipuram"
            src="https://maps.google.com/maps?q=Rajeshwari+Complex+Vanasthalipuram+Hyderabad+Telangana+500070&z=17&output=embed"
            width="100%"
            height="460"
  style={{ border: 0, display: "block" }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            {/* Floating address chip */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, ease }}
              className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border shadow-elegant flex items-start gap-3"
            >
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-secondary">AR Overseas Consultancy</p>
                <p className="text-xs text-muted-foreground">Rajeshwari Complex, Vanasthalipuram, Hyderabad 500070</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-navy text-white text-center relative overflow-hidden">
        {/* Decorative arcs */}
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 50% 120%, color-mix(in srgb, var(--brand-gold) 18%, transparent) 0%, transparent 60%)" }} />

        <motion.div
          className="container mx-auto px-4 max-w-2xl relative z-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Globe className="h-14 w-14 mx-auto mb-5 text-brand-gold animate-float" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Let's Build Your<br />
            <span style={{ WebkitTextStroke: "1.5px var(--brand-gold)", color: "transparent" }}>Global Future</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-lg mb-10">
            Open Mon–Sat, 9 AM – 6 PM. Walk in, call, or write —<br className="hidden md:block" /> your dream destination is one conversation away.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+917396949498"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow text-white"
            >
              <Phone className="h-4 w-4" /> Call Now
            </motion.a>
            <motion.a
              href="https://maps.app.goo.gl/wfg1DTPP2BV49h9t7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold hover:bg-white/20 transition-colors text-white"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </motion.a>
          </motion.div> 
        </motion.div>
      </section>
    </>
  );
}