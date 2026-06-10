import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, Heart, ShieldCheck, Sparkles, Award } from "lucide-react";
import consultImg from "@/assets/2.jpeg";
import heroDefault from "@/assets/aboutus.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AR Overseas Consultancy" },
      { name: "description", content: "India's leading overseas career & education consultant — connecting Indian talent with global opportunities in Germany and beyond." },
      { property: "og:title", content: "About AR Overseas Consultancy" },
      { property: "og:description", content: "Trusted, transparent and professional guidance for Indian students and nurses." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, label: "Transparency" },
  { icon: Award, label: "Integrity" },
  { icon: Sparkles, label: "Professionalism" },
  { icon: Heart, label: "Commitment" },
  { icon: Target, label: "Student-Centric" },
];

const marqueeStrip = [
  "AR Overseas Consultancy (OPC) Pvt. Ltd.",
  "Education to Employment — Your Trusted Path",
  "Germany · UK · USA · Canada · Australia · Ireland",
  "Nursing Jobs · Ausbildung · Study Abroad",
  "100% End-to-End Support",
];

function About() {
  return (
    <div className="font-editorial [&_h1]:font-editorial [&_h2]:font-editorial [&_h3]:font-editorial [&_h4]:font-editorial [&_p]:font-sans" style={{marginTop: -120}}>

      {/* ── PAGE HERO ── */}
      <section className="relative isolate overflow-hidden text-secondary-foreground min-h-[420px] md:min-h-[480px] flex flex-col justify-between">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={heroDefault}
            alt="About Us"
            className="w-full h-full object-cover object-center"
            style={{width: "65%", height: "100%", objectFit: "fill", justifySelf: "end"}}
          />
        </motion.div>
        {/* lighter overlay so image is clearly visible */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />

        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold"
          >
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm text-brand-gold flex items-center gap-2"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/80">About Us</span>
          </motion.div>
        </div>

        {/* Scrolling marquee strip */}
        {/* <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
          <div className="flex w-max whitespace-nowrap animate-marquee py-2.5">
            {[...marqueeStrip, ...marqueeStrip, ...marqueeStrip].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 text-xs md:text-sm font-medium text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {t}
              </span>
            ))}
          </div>
        </div> */}
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={consultImg}
            alt="Counselling session"
            loading="lazy"
            className="rounded-3xl shadow-elegant w-full"
          />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">About Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-5 text-secondary">AR Overseas Consultancy (OPC) Pvt. Ltd.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of India's leading overseas career and education consultants, helping students and healthcare professionals achieve global opportunities in Germany and other top countries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a dedicated team of industry experts, we specialize in nursing recruitment for Germany, study abroad programs, German language training, IELTS/TOEFL/PTE/GRE and career consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We help students study abroad for B.S. (Bachelor's), B.E. and M.S. (Master's) programs across the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", text: "To become the most reliable and ethical overseas consultancy, connecting Indian talent with global opportunities." },
            { icon: Target, title: "Our Mission", text: "To provide trusted, transparent, and professional guidance for Indian students and nurses to build successful international careers." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl p-10 shadow-card border border-border hover:shadow-elegant transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5">
                <v.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Core Values</span>
            <h2 className="text-4xl font-bold mt-3 text-secondary">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <v.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="font-semibold text-secondary">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE STAND OUT ── */}
      <section className="py-20 bg-gradient-navy text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Why We Stand Out</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Excellent placement history",
              "Personalized guidance for every applicant",
              "Full support from language training to landing your dream country & job",
              "Strong network of universities & German nurse employers",
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <p className="text-secondary-foreground/90 mt-1.5">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}