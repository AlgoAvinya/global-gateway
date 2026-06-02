import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Briefcase, Award, Globe2, Heart, CheckCircle2, BookOpen,
  Stethoscope, Cpu, Wrench, Utensils, Truck, Car, Store, Sparkles,
  Phone, Mail, Plane, Languages, FileCheck, Users, ChevronRight
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import germanyImg from "@/assets/germany.jpg";

export const Route = createFileRoute("/ausbildung")({
  head: () => ({
    meta: [
      { title: "Ausbildung in Germany — Paid Vocational Training | AR Overseas Consultancy (OPC) Pvt. Ltd." },
      { name: "description", content: "Study, work, earn and settle in Germany through Ausbildung — Germany's paid dual vocational training program. End-to-end guidance from AR Overseas Consultancy." },
      { property: "og:title", content: "Ausbildung in Germany — Build Your Career in Europe" },
      { property: "og:description", content: "Earn while you learn. Globally recognised qualification. Pathway to PR and settlement in Germany." },
      { property: "og:image", content: "/src/assets/germany.jpg" },
    ],
  }),
  component: Ausbildung,
});

const promise = [
  { icon: GraduationCap, text: "No tuition fees" },
  { icon: Briefcase, text: "Paid training with German companies" },
  { icon: Award, text: "Globally recognised qualification" },
  { icon: Globe2, text: "International career opportunities" },
  { icon: Heart, text: "German residence & settlement pathway" },
  { icon: CheckCircle2, text: "Job & PR opportunities after completion" },
];

const benefits = [
  { icon: Briefcase, title: "Earn While You Learn", desc: "Receive a monthly stipend during training with no tuition fees." },
  { icon: Wrench, title: "Practical Job Experience", desc: "Hands-on training with German employers and strong skill-based learning." },
  { icon: Award, title: "Globally Recognised Certification", desc: "German vocational qualifications are valued worldwide with high employability." },
  { icon: Globe2, title: "Career & Settlement Pathway", desc: "High chances of employment, permanent residence and family reunion." },
  { icon: Heart, title: "High Quality of Life", desc: "Excellent healthcare, safety, social security and work-life balance." },
];

const courses = [
  { icon: Stethoscope, name: "Nursing & Healthcare" },
  { icon: Cpu, name: "IT & Software Systems" },
  { icon: Wrench, name: "Mechatronics & Engineering" },
  { icon: Utensils, name: "Hospitality & Hotel Management" },
  { icon: Truck, name: "Logistics & Supply Chain" },
  { icon: Car, name: "Automotive & Technical Trades" },
  { icon: Store, name: "Retail & Business Administration" },
];

const eligibility = [
  "Minimum 12th pass (any stream)",
  "Age generally between 18–28 years",
  "Willingness to learn German",
  "German language level B1 / B2 (program-dependent)",
  "Strong motivation to work and settle in Germany",
];

const langSupport = [
  "German language learning roadmap (A1 to B2)",
  "Exam preparation guidance (Goethe / TELC)",
  "Level planning from A1 to B2",
  "Interview communication preparation",
];

const steps = [
  { n: 1, t: "Career Counselling", d: "Profile evaluation and course selection", icon: Users },
  { n: 2, t: "German Language Training", d: "Structured learning plan and exam preparation", icon: Languages },
  { n: 3, t: "Application Preparation", d: "CV, motivation letter and document translation", icon: FileCheck },
  { n: 4, t: "Employer Matching", d: "Applications to approved German companies", icon: Briefcase },
  { n: 5, t: "Interview Preparation", d: "Mock interviews and confidence training", icon: Sparkles },
  { n: 6, t: "Visa & Documentation", d: "Complete Ausbildung visa assistance", icon: FileCheck },
  { n: 7, t: "Travel & Settlement Support", d: "Accommodation and arrival guidance", icon: Plane },
];

const whyAR = [
  "Germany-focused career experts",
  "Transparent & ethical processes",
  "Personalised student support",
  "Personal attention for every student",
  "Strong German career pathway knowledge",
  "Strong employer & training partner network",
  "Support even after you reach Germany",
];

function Ausbildung() {
  return (
    <>
      <PageHero
        title="Ausbildung in Germany"
        crumb="Ausbildung"
        subtitle="Study · Work · Earn · Settle — Build your career in Europe with Germany's paid vocational training program."
        image={germanyImg}
        marquee={[
          "No tuition fees",
          "Paid training with German companies",
          "Globally recognised qualification",
          "German residence & settlement pathway",
          "From India to Germany — We Guide You End-to-End",
        ]}
      />

      {/* Promise tiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Build Your Career in Europe</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Start Your International Career</h2>
            <p className="text-muted-foreground">Practical training, monthly salary and a long-term future in Europe.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {promise.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 bg-card border border-border hover:border-brand-gold rounded-2xl p-5 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center flex-shrink-0">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-medium text-secondary">{p.text}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
              Book a Free Counselling Session <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Ausbildung */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">The Program</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">What is Ausbildung in Germany?</h2>
            <p className="text-muted-foreground">Germany's world-famous dual vocational training system.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-secondary mb-2">Classroom Learning</h3>
              <p className="text-muted-foreground">Theoretical education at German vocational schools — the foundation that prepares you for real-world practice.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <Wrench className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-secondary mb-2">Practical Paid Training</h3>
              <p className="text-muted-foreground">Hands-on work with German companies. Earn while you learn, gain real job experience and become industry-ready from day one.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Ausbildung?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary font-display">Why Choose Ausbildung in Germany?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-card to-accent/20 rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border hover:border-brand-gold transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular courses */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Popular Ausbildung Courses</h2>
            <p className="text-muted-foreground">We assist with programs in high-demand sectors (availability depends on eligibility and employer demand).</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="group flex items-center gap-4 bg-card border border-border hover:border-brand-gold rounded-2xl p-5 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-navy grid place-items-center group-hover:bg-gradient-brand transition-colors">
                  <c.icon className="h-6 w-6 text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <span className="font-display font-bold text-secondary">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Language */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Eligibility</span>
            <h2 className="text-3xl font-bold mt-3 mb-5 text-secondary font-display">Are You Eligible?</h2>
            <ul className="space-y-3">
              {eligibility.map((e, i) => (
                <motion.li
                  key={e}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{e}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-navy text-secondary-foreground rounded-3xl p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, var(--brand-gold) 0%, transparent 50%)" }} />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">German Language</span>
              <h2 className="text-3xl font-bold mt-3 mb-2 font-display">A Mandatory Foundation</h2>
              <p className="text-white/80 mb-5 text-sm">Language is the foundation of your success in Germany — we help you master it.</p>
              <ul className="space-y-3">
                {langSupport.map((l, i) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Languages className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-brand-navy text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Our Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 font-display">Our Step-by-Step Process</h2>
            <p className="text-white/70 mt-3">100% End-to-End Support — from counselling to settlement.</p>
          </div>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-5 transition-all"
              >
                <div className="relative h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center flex-shrink-0 shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                  <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-brand-gold text-secondary text-xs font-bold flex items-center justify-center">{s.n}</span>
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-lg">{s.t}</div>
                  <div className="text-sm text-white/70">{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AR */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Why Choose AR Overseas Consultancy?</h2>
            <p className="text-muted-foreground italic">We don't just send students abroad — we build careers.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyAR.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 bg-card border border-border hover:border-brand-gold rounded-2xl p-5 shadow-card hover:shadow-elegant transition-all"
              >
                <Sparkles className="h-5 w-5 text-brand-gold flex-shrink-0 mt-1" />
                <span className="font-medium text-foreground/90">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-brand-red to-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Sparkles className="h-12 w-12 mx-auto mb-5 text-brand-gold animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Start Your Ausbildung Journey Today!</h2>
          <p className="text-white/85 mb-8 text-lg">Talk to our Germany experts at AR Overseas Consultancy (OPC) Pvt. Ltd.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-transform">
              <GraduationCap className="h-4 w-4" /> Free Career Consultation
            </Link>
            <a href="tel:+917396949498" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/25 transition-colors">
              <Phone className="h-4 w-4" /> +91 73969 49498
            </a>
            <a href="mailto:aroverseas1125@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/25 transition-colors">
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>
          <p className="text-white/70 text-sm">📍 Near Ganesh Temple, Vanasthalipuram, Hyderabad, Telangana — 500070</p>
        </div>
      </section>
    </>
  );
}
