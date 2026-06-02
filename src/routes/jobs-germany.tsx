import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2, Euro, Users, Plane, Shield, Heart, Building2, Award,
  Languages, GraduationCap, Briefcase, Sparkles, Clock, Calendar, ChevronDown,
  Stethoscope, BookOpen, Phone, Mail
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import nurseImg from "@/assets/nurse-germany.jpg";

export const Route = createFileRoute("/jobs-germany")({
  head: () => ({
    meta: [
      { title: "Nursing Jobs in Germany — AR Overseas Consultancy (OPC) Pvt. Ltd." },
      { name: "description", content: "Achieve your German nursing dream with AR Overseas Consultancy (OPC) Pvt. Ltd. Earn €2,500–€3,400/month, family reunification, free education for children, PR in 3 years." },
      { property: "og:title", content: "Nursing Jobs in Germany — AR Overseas Consultancy" },
      { property: "og:description", content: "Trusted pathway to a successful nursing career in Germany." },
      { property: "og:image", content: "/src/assets/nurse-germany.jpg" },
    ],
  }),
  component: Jobs,
});

const offerings = [
  { icon: Languages, title: "German Language Training", desc: "A1 → B2 with certified trainers" },
  { icon: Briefcase, title: "Job Assistance in Germany", desc: "Interview prep & employer matching" },
  { icon: Shield, title: "Visa & Documentation", desc: "End-to-end paperwork & filings" },
  { icon: Heart, title: "Ethical Recruitment", desc: "100% transparent, end-to-end support" },
];

const stats = [
  { icon: Users, value: "150K+", label: "Nurses Required" },
  { icon: Euro, value: "€2.5–3.4K", label: "Monthly Salary" },
  { icon: Building2, value: "#4", label: "Healthcare Globally" },
  { icon: Shield, value: "5–6 Yrs", label: "To Citizenship" },
];

const benefits = [
  { icon: Euro, title: "Multiply Your Earnings", desc: "Earn 8–10× more than Indian nursing salaries." },
  { icon: Users, title: "Settle Abroad with Family", desc: "Bring spouse and children under Family Reunification Visa." },
  { icon: Heart, title: "World-Class Benefits", desc: "Free or subsidized healthcare and free education for children." },
  { icon: Award, title: "Permanent Residency", desc: "Apply for PR after 3 years; citizenship possible in 5–6 years." },
];

const workCulture = [
  "High demand: 150,000+ nurses required",
  "Salary: €2,500 – €3,400 per month",
  "Ranked #4 globally in healthcare systems",
  "Approx. 26 days of paid annual leave",
  "Strong work-life balance",
  "Secure and respected profession",
];

const eligibility = [
  "Registered Nurse holding a valid license",
  "Qualification: BSc / MSc Nursing or GNM",
  "German Language: B1 / B2 (Goethe, telc, ÖSD)",
  "Age preferred below 42 years",
  "Experience: Freshers & experienced nurses welcome",
  "Valid passport & medical fitness",
];

const languageLevels = [
  { lvl: "A1", name: "Beginner", desc: "Basic vocabulary, self-introduction, simple questions, understanding everyday words." },
  { lvl: "A2", name: "Elementary", desc: "Daily conversations, common expressions, basic interaction with patients and colleagues." },
  { lvl: "B1", name: "Intermediate", desc: "Workplace communication, patient care conversations, understanding instructions and medical basics." },
  { lvl: "B2", name: "Proficient", desc: "Professional-level communication, detailed patient interaction, medical documentation understanding." },
  { lvl: "C1", name: "Advanced", desc: "Fluent, confident professional communication, handling complex medical discussions, reports, procedures." },
  { lvl: "C2", name: "Mastery", desc: "Native-level accuracy and fluency, full command of medical, academic and professional language." },
];

const trackA = [
  "Enroll for German Language Course",
  "Complete Training A1 → A2 → B1 → B2",
  "Clear Certification Exams B1 and B2",
];
const trackB = [
  "Register for German Interviews Assistance",
  "Selection & Visa Processing Assistance",
  "Fly to Germany",
];

const steps = [
  "Initial Career Consultation",
  "Document Submission",
  "Language Training & B1/B2 Certification (Goethe / telc / ÖSD)",
  "Interview Preparation",
  "Online Interviews with German Employers",
  "Receive Offer Letter",
  "Document Translation & Registration",
  "Approval Documents (state to state)",
  "Visa & Recognition Support",
  "Fly to Germany & Start Career",
];

const whyAR = [
  "Flexible Morning & Evening Batches",
  "Online & Offline Learning Options",
  "20+ Model Papers Practice",
  "Top-Rated Faculty",
  "Certified Trainers",
  "Dedicated Mentor Support",
  "Complete Exam & Interview Preparation",
];

const support = [
  "German Language Training (A1–B2)",
  "Interview Preparation",
  "Documentation & Translation",
  "Visa & Work Permit Assistance",
  "Travel & Airport Pickup Assistance",
  "Adaptation Program Guidance",
  "Family Reunification Assistance",
  "Lifetime Career Mentorship",
];

const faqs = [
  {
    q: "How much can I earn in Germany?",
    a: "Before Professional Recognition: ~€2,800/month (~₹2.8L). After Professional Recognition: ~€3,200/month (~₹3.2L). Plus paid leave, healthcare, financial security and pension. Salary increases with experience, specialization and further certifications.",
  },
  {
    q: "How is the work culture in Germany?",
    a: "One of the world's most employee-friendly work cultures: 40 hours/week, ~45 days annual leave (including public holidays), paid overtime or time off in lieu, and a safe, respectful, women-friendly environment with strong legal protections.",
  },
  {
    q: "Can I bring my family with me?",
    a: "Yes. Germany allows family reunification — spouse and children may join you. Spouses can work and access free education opportunities. Children receive free education from primary school to PhD. Family reunification typically begins after professional recognition (usually 6–8 months after arrival).",
  },
];

function Jobs() {
  return (
    <>
      <PageHero
        title="Achieve Your German Nursing Dream"
        crumb="Jobs in Germany"
        subtitle="Your trusted pathway to a successful nursing career in Germany with AR Overseas Consultancy (OPC) Pvt. Ltd."
        image={nurseImg}
        marquee={[
          "German Language Training A1 → B2",
          "Job Assistance in Germany",
          "Visa & Documentation Support",
          "Ethical Recruitment · 100% End-to-End Support",
          "From Classroom to Career — We Walk with You Every Step",
        ]}
      />

      {/* Slide 1 — Complete Career Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">We Offer Complete Career Solutions</h2>
            <p className="text-muted-foreground">From classroom to career — we walk with you every step.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border hover:border-brand-gold transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <o.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary mb-1.5">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl p-7 text-center shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon className="h-9 w-9 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-display font-bold text-gradient-brand">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Slide 3 — Why Germany */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Germany?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Why Choose Germany for Your Nursing Career?</h2>
            <p className="text-muted-foreground">One of the top 10 highest-paying countries for nurses, with exceptional quality of life.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-card to-accent/20 rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-navy text-secondary-foreground rounded-3xl p-8 md:p-10 shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">Why Work as a Nurse in Germany?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {workCulture.map((w, i) => (
                <motion.div
                  key={w}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{w}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4 — Eligibility */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Work as a Nurse in Germany</h2>
            <p className="text-muted-foreground">Opportunities in hospitals & elderly care facilities across Germany.</p>
          </div>
          <div className="bg-card rounded-3xl border border-border shadow-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-primary" /> Eligibility Criteria
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {eligibility.map((e, i) => (
                <motion.div
                  key={e}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/40 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{e}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5 — Importance of German Language */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">German Language</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Why Is German Language Mandatory?</h2>
            <p className="text-muted-foreground">Required for licensing & employment · Essential for patient care · Helps in daily life & career growth.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {languageLevels.map((l, i) => (
              <motion.div
                key={l.lvl}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-5 bg-card border border-border hover:border-brand-gold rounded-2xl p-5 shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative h-16 w-16 rounded-2xl bg-gradient-brand text-primary-foreground flex items-center justify-center font-display font-bold text-2xl flex-shrink-0 shadow-glow group-hover:rotate-6 transition-transform">
                  {l.lvl}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-secondary">{l.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-accent/50 border border-brand-gold/40 text-center">
            <span className="text-sm font-semibold text-secondary">📌 Most German employers require <span className="text-primary">B2 certification</span>.</span>
          </div>
        </div>
      </section>

      {/* Slide 7 — How to Get Started (two tracks) */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-brand-navy text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 font-display">How to Get Started?</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">Two clear tracks — wherever you are in your German language journey, we have a pathway for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Without Language Training", icon: BookOpen, items: trackA, color: "from-brand-red to-primary" },
              { title: "Language Training Completed", icon: Plane, items: trackB, color: "from-brand-gold to-yellow-500" },
            ].map((track, ti) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.1 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:border-brand-gold/50 transition-all"
              >
                <div className={`absolute -top-5 left-7 h-12 w-12 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center shadow-glow`}>
                  <track.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-5 mt-2">{track.title}</h3>
                <ol className="space-y-3">
                  {track.items.map((s, i) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="h-7 w-7 rounded-full bg-gradient-brand text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-white/90 mt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/70 italic mt-10 max-w-2xl mx-auto">
            AR Overseas Consultancy (OPC) Pvt. Ltd. assists with language training, recruitment, interviews and the visa process.
          </p>
        </div>
      </section>

      {/* Slide 8 — Why students choose AR */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Why Learn with AR Overseas Consultancy?</h2>
            <p className="text-muted-foreground">Built for serious learners — flexible, expert-led and exam-ready.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyAR.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elegant hover:border-brand-gold transition-all"
              >
                <div className="h-9 w-9 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {i + 1}
                </div>
                <span className="text-foreground/85 mt-1 font-medium">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 10 — Application Process */}
      <section className="py-20 bg-gradient-navy text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">End-to-End Support</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 font-display">Simple & Transparent Application Process</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">A 10-step journey from your first consultation to flying to Germany.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center font-bold flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-secondary-foreground/95 font-medium">{s}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 max-w-5xl mx-auto">
            <h3 className="text-center font-display text-2xl font-bold mb-6">Our Complete Support & Assistance Includes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {support.map((sp, i) => (
                <motion.div
                  key={sp}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-3"
                >
                  <Sparkles className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{sp}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow hover:scale-105 transition-transform">
              <Plane className="h-4 w-4" /> Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>

      {/* Slide 9 — FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary font-display">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4 font-semibold text-secondary">
                  <span>{f.q}</span>
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 11 — Join Us / Contact */}
      <section className="py-20 bg-gradient-to-br from-primary via-brand-red to-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Sparkles className="h-12 w-12 mx-auto mb-5 text-brand-gold animate-float" />
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Join Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 font-display">Let's Build Your Global Nursing Career Together</h2>
          <p className="text-white/85 mb-8 text-lg">
            Start your journey towards a secure, respected, and high-paying career in Germany with AR Overseas Consultancy (OPC) Pvt. Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
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
          <p className="text-white/70 text-sm">
            📍 Near Ganesh Temple, Vanasthalipuram, Hyderabad, Telangana — 500070
          </p>
        </div>
      </section>
    </>
  );
}
