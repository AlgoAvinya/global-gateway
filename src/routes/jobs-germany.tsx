import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import jobs1 from "@/assets/jobs1.jpeg";
import jobs2 from "@/assets/jobs2.jpeg";
export const Route = createFileRoute("/jobs-germany")({
  head: () => ({
    meta: [
      { title: "Nursing Jobs in Germany — AR Overseas Consultancy (OPC) Pvt. Ltd." },
      {
        name: "description",
        content:
          "Achieve your German nursing dream with AR Overseas Consultancy (OPC) Pvt. Ltd. Earn €2,800–€3,200/month, family reunification, free education for children, PR in 3 years.",
      },
    ],
  }),
  component: JobsGermany,
});

// ─── Color tokens from logo ───────────────────────────────────────────────────
// Red:   #D32F2F (primary), #B71C1C (dark), #EF5350 (light)
// Navy:  #1A237E (primary), #0D1757 (dark),  #283593 (mid)
// White / Light BG: #FFFFFF, #F5F7FF (blue-tinted white), #FFF5F5 (red-tinted white)

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7, ease } } };

// ─── Data ─────────────────────────────────────────────────────────────────────
const offerings = [
  { emoji: "🇩🇪", title: "German Language Training", desc: "A1 → B2 with certified trainers" },
  { emoji: "💼", title: "Job Assistance in Germany", desc: "Interview prep & employer matching" },
  { emoji: "🛡️", title: "Visa & Documentation", desc: "End-to-end paperwork & filings" },
  { emoji: "🤝", title: "Ethical Recruitment", desc: "100% transparent, end-to-end support" },
];

const stats = [
  { value: "1.69M+", label: "Nurses in Germany (2023)", icon: "👩‍⚕️" },
  { value: "€2.8–3.2K", label: "Monthly Salary", icon: "💶" },
  { value: "#4", label: "Healthcare Globally", icon: "🏥" },
  { value: "150K+", label: "Foreign Nurses by 2026", icon: "✈️" },
];

const benefits = [
  { emoji: "💶", title: "Multiply Your Earnings", desc: "Earn 8–10× more than Indian nursing salaries.", side: "left" },
  { emoji: "👨‍👩‍👧", title: "Settle Abroad with Family", desc: "Bring spouse and children under Family Reunification Visa.", side: "right" },
  { emoji: "❤️", title: "World-Class Benefits", desc: "Free or subsidised healthcare and free education for children.", side: "left" },
  { emoji: "🏅", title: "Permanent Residency", desc: "Apply for PR after 3 years; citizenship possible in 5–6 years.", side: "right" },
];

const workCulture = [
  "High demand: 150,000+ nurses required",
  "Salary: €2,500 – €3,400 per month",
  "Global Ranking: #4 healthcare system worldwide",
  "Paid Leave: Approx. 26 days annually",
  "Work-Life Balance: Healthy and stable lifestyle",
  "Secure Career: Respected and stable profession",
];

const eligibility = [
  "Registered Nurse holding a valid license",
  "Seeking a career in Germany",
  "Qualification: BSc / MSc Nursing or GNM",
  "German Language: B1 / B2 (Goethe, telc, ÖSD)",
  "Age preferred below 42 years",
  "Experience: Freshers & experienced nurses welcome",
];

const basicRequirements = [
  "GNM / B.Sc / M.Sc Nursing",
  "Minimum 1–2 years experience (preferred)",
  "German B1 Language Certification",
  "German language proficiency (B1/B2)",
  "Valid passport",
  "Medical fitness certificate",
];

const documents = [
  "Nursing degree / diploma",
  "Nursing registration certificate",
  "Academic transcripts",
  "Experience certificates",
  "Passport",
  "Updated CV",
  "Passport-size photographs",
  "Police clearance certificate",
];

const langLevels = [
  { lvl: "A1", name: "Beginner",     time: "1.5 Months", desc: "Basic vocabulary, self-introduction, simple questions, everyday words.",                                      active: true,  redAccent: false },
  { lvl: "A2", name: "Elementary",   time: "1.5 Months", desc: "Daily conversations, common expressions, basic patient interactions.",                                       active: true,  redAccent: false },
  { lvl: "B1", name: "Intermediate", time: "2 Months",   desc: "Workplace communication, patient care, understanding medical basics.",                                       active: true,  redAccent: true  },
  { lvl: "B2", name: "Proficient",   time: "3 Months",   desc: "Professional-level communication, detailed patient interaction, documentation.",                             active: true,  redAccent: true  },
  { lvl: "C1", name: "Advanced",     time: "—",          desc: "Fluent confident professional communication, complex medical discussions.",                                   active: false, redAccent: false },
  { lvl: "C2", name: "Mastery",      time: "—",          desc: "Native-level accuracy, full command of medical and academic language.",                                       active: false, redAccent: false },
];

const steps = [
  { s: "Initial Career Consultation",                                             icon: "💬", isRed: false },
  { s: "Document Submission",                                                      icon: "📋", isRed: true  },
  { s: "Language Training & Clear B1/B2 Certification (Goethe / telc / ÖSD)",    icon: "🇩🇪", isRed: false },
  { s: "Interview Preparation",                                                    icon: "🎯", isRed: true  },
  { s: "Online Interviews Assistance with German Employers",                       icon: "💻", isRed: false },
  { s: "Receive Offer Letter: After Attending Online Interviews",                  icon: "📩", isRed: true  },
  { s: "Document Translation & Registration",                                      icon: "📄", isRed: false },
  { s: "Approval Documents: Dependent on State to State",                          icon: "✅", isRed: true  },
  { s: "Visa & Recognition Support",                                               icon: "🛡️", isRed: false },
  { s: "Fly to Germany & Start Career",                                            icon: "✈️", isRed: true  },
];

const whyAR = [
  { text: "Flexible Morning & Evening Batches", icon: "🕐", isRed: false },
  { text: "Online & Offline Learning Options",  icon: "💻", isRed: true  },
  { text: "20+ Model Papers Practice",          icon: "📝", isRed: false },
  { text: "Top-Rated Faculty",                  icon: "⭐", isRed: true  },
  { text: "Certified Trainers",                 icon: "🏅", isRed: false },
  { text: "Dedicated Mentor Support",           icon: "👨‍🏫", isRed: true  },
  { text: "Complete Exam & Interview Preparation", icon: "🎯", isRed: false },
];

const support = [
  "German Language Training (A1–B2)",
  "Interview Preparation",
  "Documentation & Translation",
  "Visa & Work Permit Assistance",
  "Travel & Airport Pickup Assistance",
  "Adaptation Program Guidance",
  "Family Reunification Assistance",
  "Your Success Is Our Responsibility",
];

const faqs = [
  { q: "How much can I earn in Germany?", a: "Before Professional Recognition: €2,800/month (~₹2.8L). After Professional Recognition: €3,200/month (~₹3.2L). Benefits include paid leave, healthcare, financial security and pension. Salary increases with experience, specialisation and further certifications." },
  { q: "How is the work culture in Germany?", a: "The world's best employee-friendly work culture — 40-hour work week, approx. 45 days of annual leave including public holidays, overtime paid extra or compensated with time off. Germany offers a safe, respectful, and women-friendly work environment with strong legal protections for nurses." },
  { q: "Can I bring my family with me?", a: "Yes. Germany allows family reunification — spouse and children may join you. Spouse can work and access free education opportunities. Children receive free education from primary school to PhD. Family Reunification begins after professional recognition (usually 6–8 months after arrival)." },
  { q: "Do I need German language certification?", a: "Yes. B1 / B2 certification is mandatory for licensing and employment in Germany." },
  { q: "Can freshers apply?", a: "Yes. Experienced candidates are preferred, but freshers with B1/B2 certification can apply." },
  { q: "Is the process safe and legal?", a: "Yes. All placements are through authorised German employers. AR Overseas Consultancy (OPC) Pvt. Ltd. follows best recruitment assistance practices." },
];

const germanyStats = [
  { num: "1.69M+", txt: "nurses employed in Germany (2023)" },
  { num: "44/100", txt: "applicants per 100 vacancies — severe shortage" },
  { num: "150K",   txt: "foreign nurses expected to be hired by 2026" },
  { num: "+4.7%",  txt: "salary hikes recorded in 2024" },
];

const heroImages = [
  jobs1,
  jobs2,
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Marquee({ items, speed = 30, dark = false }: { items: string[]; speed?: number; dark?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-max gap-0"
        style={{ animation: `marqueeScroll ${speed}s linear infinite` }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-3 px-6 text-sm font-semibold whitespace-nowrap ${dark ? "text-white/85" : "text-[#1A237E]/80"}`}>
            <span className={`h-2 w-2 rounded-full flex-shrink-0 ${["bg-[#D32F2F]","bg-[#1A237E]","bg-red-400","bg-blue-400","bg-[#D32F2F]","bg-[#1A237E]"][i % 6]}`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FlipStat({ value, label, icon, delay }: { value: string; label: string; icon: string; delay: number }) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setFlipped(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  return (
    <div ref={ref} className="relative h-36 cursor-pointer group" style={{ perspective: 800 }} onClick={() => setFlipped(!flipped)}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease }}
        style={{ transformStyle: "preserve-3d", position: "absolute", inset: 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-white border-2 border-[#1A237E]/15 flex flex-col items-center justify-center shadow-lg shadow-[#1A237E]/10" style={{ backfaceVisibility: "hidden" }}>
          <span className="text-5xl mb-1">{icon}</span>
          <span className="text-xs text-[#1A237E]/60 font-semibold uppercase tracking-widest">{label}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(135deg, #D32F2F, #B71C1C)" }}>
          <span className="font-black text-white text-3xl md:text-4xl drop-shadow">{value}</span>
          <span className="text-xs text-red-100/80 font-semibold uppercase tracking-widest mt-1 text-center px-3">{label}</span>
        </div>
      </motion.div>
    </div>
  );
}

function TimelineStep({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} relative`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <div className={`inline-block p-4 rounded-2xl border-2 shadow-md max-w-xs ${isLeft ? "ml-auto" : ""} ${step.isRed ? "border-[#D32F2F]/20 bg-red-50" : "border-[#1A237E]/15 bg-blue-50"}`}>
          <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${step.isRed ? "text-[#D32F2F]" : "text-[#1A237E]"}`}>Step {String(index + 1).padStart(2, "0")}</span>
          <p className="text-slate-700 text-sm font-semibold leading-snug">{step.s}</p>
        </div>
      </div>

      <div className="flex-shrink-0 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.07 + 0.2, ease }}
          className={`h-12 w-12 rounded-full flex items-center justify-center shadow-xl text-xl border-4 border-white ${step.isRed ? "bg-[#D32F2F]" : "bg-[#1A237E]"}`}
        >
          {step.icon}
        </motion.div>
        {index < total - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.07 + 0.35, ease }}
            className="w-0.5 h-10 origin-top mt-1"
            style={{ background: "linear-gradient(to bottom, #D32F2F60, #1A237E40)" }}
          />
        )}
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const isRed = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, ease }}
      className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 mb-3 ${open ? (isRed ? "border-[#D32F2F]/30 bg-red-50 shadow-lg shadow-red-100" : "border-[#1A237E]/20 bg-blue-50 shadow-lg shadow-blue-100") : "border-slate-200 bg-white hover:border-slate-300"}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-center gap-4 text-left focus-visible:outline-none"
      >
        <span className={`h-7 w-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 transition-colors ${open ? (isRed ? "bg-[#D32F2F]" : "bg-[#1A237E]") : "bg-slate-300"}`}>{index + 1}</span>
        <span className={`font-bold text-sm flex-1 pr-4 transition-colors ${open ? "text-slate-900" : "text-slate-600"}`}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className={`text-2xl font-light flex-shrink-0 ${isRed ? "text-[#D32F2F]" : "text-[#1A237E]"}`}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
function JobsGermany() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeRequirementsTab, setActiveRequirementsTab] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const requirementTabs = [
    { title: "✅ Eligibility",        items: eligibility,        note: null },
    { title: "🎓 Requirements",       items: basicRequirements,  note: null },
    { title: "📄 Documents Required", items: documents,          note: "We guide you step-by-step to ensure all documentation meets German standards." },
  ];

  return (
    <div className="font-sans bg-white text-slate-800 overflow-x-hidden" style={{marginTop: -120}}>
      <style>{`
        @keyframes marqueeScroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        @keyframes spinSlow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes pulseBig { 0%,100% { transform: scale(1); opacity: 0.08 } 50% { transform: scale(1.12); opacity: 0.18 } }
        .spin-slow { animation: spinSlow 20s linear infinite; }
        .pulse-big { animation: pulseBig 6s ease-in-out infinite; }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
     <section
  ref={heroRef}
  className="relative min-h-[75vh] overflow-hidden"
  style={{
    background: "#4A0404",
  }}
>
  {/* Decorative Background */}
  <div className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
      backgroundSize: "52px 52px",
    }}
  />

  <div className="container mx-auto px-6 min-h-[95vh] relative z-10" style={{marginTop: -50, marginBottom: -50}}>
    <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[95vh]">

      {/* LEFT SIDE CONTENT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.div
          variants={fadeIn}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{
            background: "rgba(211,47,47,0.20)",
            border: "1px solid rgba(239,83,80,0.40)",
          }}
        >
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-red-200 font-bold">
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-5"
        >
          <span className="text-white">Achieve Your</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg,#EF5350,#FFCDD2,#90CAF9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            German Nursing
          </span>
          <br />
          <span className="text-white/90">Dream</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/75 text-lg leading-relaxed max-w-xl mb-8"
        >
          Your trusted pathway to a successful nursing career in Germany —
          from classroom to career, we walk with you every step.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full"
            style={{
              background: "linear-gradient(135deg,#D32F2F,#B71C1C)",
            }}
          >
            🚀 Free Career Consultation
          </motion.a>

          <motion.a
            href="#process"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full border border-white/30 bg-white/10"
          >
            ✈️ View Process
          </motion.a>
        </motion.div>

        <motion.div variants={fadeIn} className="flex gap-2 mt-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className="rounded-full transition-all duration-300"
              style={{
                height: 8,
                width: i === heroIdx ? 28 : 8,
                background:
                  i === heroIdx
                    ? "#EF5350"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center">
        {heroImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{
              opacity: i === heroIdx ? 1 : 0,
            }}
            transition={{ duration: 1.2 }}
            draggable={false}
          />
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ══ STAT FLIP CARDS ═══════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(211,47,47,0.06), transparent 65%)" }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.p variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold mb-4">
            — Tap to reveal —
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <FlipStat key={s.label} {...s} delay={i * 200 + 400} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT US ══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: "linear-gradient(90deg, #1A237E, #D32F2F, #1A237E)" }} />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-4">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Connecting India's Healthcare Talent to{" "}
              <span style={{ background: "linear-gradient(90deg, #D32F2F, #1A237E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Global Opportunities</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">AR Overseas Consultancy (OPC) Pvt. Ltd.</strong> is a trusted international recruitment assistant and language training organisation dedicated to helping Indian nurses build successful careers in Germany and other global destinations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our mission is simple: to make international migration smooth, transparent, and stress-free for healthcare professionals. Headquartered in Hyderabad, Telangana, we work closely with international recruitment partners and certified language trainers to ensure quality outcomes for every candidate.
            </p>
            <div className="relative pl-5 border-l-4 border-[#D32F2F]">
              <p className="text-[#D32F2F] font-black text-xl italic font-display">"Empowering Nurses. Building Global Careers."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="relative"
          >
            {[
              { label: "Best Recruitment Assistance Practices", emoji: "🏆", isRed: false },
              { label: "Certified German Language Trainers",    emoji: "📚", isRed: true  },
              { label: "Complete End-to-End Support",           emoji: "🔄", isRed: false },
              { label: "Trusted by Hundreds of Nurses",         emoji: "❤️", isRed: true  },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30, rotate: 3 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                whileHover={{ scale: 1.03, x: 6 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease }}
                className="flex items-center gap-4 p-5 rounded-2xl border-2 shadow-md mb-4"
                style={item.isRed
                  ? { background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)", borderColor: "rgba(211,47,47,0.2)" }
                  : { background: "linear-gradient(135deg, #F5F7FF, #E8EAF6)", borderColor: "rgba(26,35,126,0.15)" }
                }
              >
                <span className="text-3xl">{item.emoji}</span>
                <p className="font-bold text-slate-800 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ COMPLETE SOLUTIONS ════════════════════════════════════════════════ */}
      <section className="py-16 border-y overflow-hidden" style={{ background: "linear-gradient(135deg, #E8EAF6 0%, #F5F7FF 50%, #E8EAF6 100%)", borderColor: "rgba(26,35,126,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold">Complete Solutions</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 mt-2">We Offer Complete Career Solutions</h2>
          <p className="text-slate-500 mt-2 text-sm">We help qualified Indian nurses secure high-paying jobs in Germany through our official recruitment partnerships.</p>
        </div>
        <div className="overflow-hidden w-full">
          <div className="flex w-max gap-6 px-6" style={{ animation: "marqueeScroll 18s linear infinite" }}>
            {[...offerings, ...offerings, ...offerings].map((o, i) => (
              <div key={i} className="flex-shrink-0 w-64 rounded-2xl border-2 p-6 shadow-md bg-white" style={{ borderColor: i % 2 === 0 ? "rgba(26,35,126,0.15)" : "rgba(211,47,47,0.15)" }}>
                <span className="text-4xl block mb-3">{o.emoji}</span>
                <h3 className="font-black text-slate-900 text-base mb-1">{o.title}</h3>
                <p className="text-slate-500 text-xs">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GERMANY BY NUMBERS ════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D1757 50%, #B71C1C 100%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(211,47,47,0.25), transparent 60%)" }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-red-300 text-xs uppercase tracking-[0.3em] font-bold block mb-3">Germany by the Numbers</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-white">Why Germany Urgently Needs Nurses</motion.h2>
          </motion.div>

          <div className="space-y-0">
            {germanyStats.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className={`flex items-center gap-8 py-8 border-b border-white/15 ${i % 2 !== 0 ? "flex-row-reverse text-right" : ""}`}
              >
                <div className={`flex-shrink-0 font-display font-black text-5xl md:text-7xl bg-clip-text text-transparent`}
                  style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #EF5350, #FFCDD2)" : "linear-gradient(135deg, #90CAF9, #BBDEFB)", WebkitBackgroundClip: "text" }}>
                  {s.num}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                <p className={`text-white/75 font-semibold text-lg max-w-xs ${i % 2 !== 0 ? "ml-auto" : ""}`}>{s.txt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY GERMANY ═══════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">Why Germany?</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">
              Why Choose Germany for Your Nursing Career?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
              Germany is the #1 destination for nurses due to job security, long-term settlement options, and continuous demand.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className={`flex items-center gap-10 md:gap-20 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-3xl flex items-center justify-center text-5xl md:text-6xl shadow-2xl"
                  style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #1A237E, #283593)" : "linear-gradient(135deg, #D32F2F, #B71C1C)" }}
                >
                  {b.emoji}
                </motion.div>
                <div className={i % 2 !== 0 ? "text-right" : ""}>
                  <div className={`h-1 w-12 rounded-full mb-4 ${i % 2 === 0 ? "bg-[#1A237E]" : "bg-[#D32F2F]"}`} />
                  <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md text-base">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Work culture ticker */}
          <div className="mt-20 rounded-2xl overflow-hidden border-2 shadow-xl" style={{ borderColor: "rgba(26,35,126,0.15)" }}>
            <div className="p-5 border-b" style={{ background: "linear-gradient(90deg, #1A237E, #D32F2F)", borderColor: "rgba(255,255,255,0.1)" }}>
              <h3 className="font-display text-xl font-black text-white text-center">Why Work as a Nurse in Germany?</h3>
            </div>
            <div className="py-5 overflow-hidden" style={{ background: "#F5F7FF" }}>
              <Marquee items={workCulture} speed={22} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY / REQUIREMENTS / DOCS — tabbed ════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(211,47,47,0.06)" }} />
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">Opportunities</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">Work as a Nurse in Germany</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mt-3 text-sm">Opportunities in hospitals & elderly care facilities across Germany.</motion.p>
          </motion.div>

          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {requirementTabs.map((tab, i) => (
              <motion.button
                key={tab.title}
                type="button"
                onClick={() => setActiveRequirementsTab(i)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-250 border-2 ${activeRequirementsTab === i ? "text-white border-transparent shadow-lg" : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300"}`}
                style={activeRequirementsTab === i ? { background: "linear-gradient(135deg, #D32F2F, #1A237E)" } : {}}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRequirementsTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {requirementTabs[activeRequirementsTab].items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ease }}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 bg-white shadow-sm ${i % 2 === 0 ? "border-[#1A237E]/15" : "border-[#D32F2F]/15"}`}
                >
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-black ${i % 2 === 0 ? "bg-[#1A237E]" : "bg-[#D32F2F]"}`}>{i + 1}</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
              {requirementTabs[activeRequirementsTab].note && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="sm:col-span-2 text-slate-400 text-xs italic mt-2 px-2">
                  {requirementTabs[activeRequirementsTab].note}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ GERMAN LANGUAGE — roadmap ═════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">German Language</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">Why Is German Language Mandatory?</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mt-3 text-sm max-w-2xl mx-auto">
              Required for licensing & employment · Essential for patient care & hospital communication · Helps in daily life, integration & career growth.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block" style={{ background: "linear-gradient(to bottom, #1A237E60, #D32F2F60, transparent)" }} />

            <div className="space-y-8">
              {langLevels.map((l, i) => (
                <motion.div
                  key={l.lvl}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={`flex items-center gap-4 md:gap-8 ${i % 2 !== 0 ? "flex-row-reverse" : ""} relative`}
                >
                  <div className={`flex-1 ${i % 2 !== 0 ? "text-right" : ""}`}>
                    <div className={`inline-block p-5 rounded-2xl border-2 shadow-md max-w-sm ${l.active ? (l.redAccent ? "border-[#D32F2F]/20 bg-red-50" : "border-[#1A237E]/15 bg-blue-50") : "border-slate-200 bg-slate-50"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {l.time !== "—" && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${l.redAccent ? "bg-[#D32F2F]/10 text-[#D32F2F]" : "bg-[#1A237E]/10 text-[#1A237E]"}`}>{l.time}</span>
                        )}
                        {!l.active && <span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Advanced</span>}
                      </div>
                      <h4 className="font-black text-slate-800 text-sm mb-1">{l.name}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{l.desc}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="h-14 w-14 rounded-2xl flex flex-col items-center justify-center shadow-xl border-2 border-white"
                      style={{ background: l.active ? (l.redAccent ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)") : "linear-gradient(135deg, #9E9E9E, #757575)" }}
                    >
                      <span className="font-black text-white text-base">{l.lvl}</span>
                      {l.active && <span className="text-[8px] text-white/80 font-bold">ACTIVE</span>}
                    </motion.div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, ease }}
              className="mt-10 p-5 rounded-2xl border-2 text-center"
              style={{ borderColor: "rgba(211,47,47,0.25)", background: "linear-gradient(135deg, #FFF5F5, #F5F7FF)" }}
            >
              <span className="font-bold text-slate-800 text-sm">
                📌 Most German employers require{" "}
                <span className="text-[#D32F2F]">B2 certification</span>.
                Freshers with B1/B2 can apply.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROGRAM OVERVIEW — split comparison ══════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex-1 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1A237E, #283593)" }}
          >
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-2xl" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-5xl mb-6 block">🏥</span>
            <span className="text-blue-200 text-xs uppercase tracking-[0.3em] font-bold block mb-3">Program Overview</span>
            <h3 className="font-display text-3xl font-black text-white mb-3">Assistant Nurse</h3>
            <p className="text-white/65 text-sm mb-6 leading-relaxed max-w-xs">Begin your German nursing journey as a Nursing Assistant upon B1/B2 certification.</p>
            <div className="font-display text-6xl font-black text-white">~€2,800</div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-1">Approx. gross monthly salary</div>
          </motion.div>

          <div className="hidden md:flex flex-col items-center justify-center bg-white px-6 py-8 border-x border-slate-100">
            <div className="h-full w-0.5" style={{ background: "linear-gradient(to bottom, rgba(26,35,126,0.2), rgba(211,47,47,0.2), rgba(26,35,126,0.2))" }} />
            <span className="text-slate-300 text-xs font-bold my-4 whitespace-nowrap">→ PROGRESS →</span>
            <div className="h-full w-0.5" style={{ background: "linear-gradient(to bottom, rgba(26,35,126,0.2), rgba(211,47,47,0.2), rgba(26,35,126,0.2))" }} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex-1 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #D32F2F, #B71C1C)" }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-5xl mb-6 block">⭐</span>
            <span className="text-red-200 text-xs uppercase tracking-[0.3em] font-bold block mb-3">After Anerkennung</span>
            <h3 className="font-display text-3xl font-black text-white mb-3">Regular Nurse</h3>
            <p className="text-white/65 text-sm mb-6 leading-relaxed max-w-xs">Progress to Regular Nurse after Anerkennung with increased salary and full benefits.</p>
            <div className="font-display text-6xl font-black text-white">~€3,200</div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-1">Approx. monthly salary</div>
          </motion.div>
        </div>
      </section>

      {/* ══ HOW TO GET STARTED ════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)" }}>
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">Get Started</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">How to Get Started?</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">Two clear tracks — wherever you are in your German language journey, we have a pathway for you.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Without Language Training", emoji: "📚", isRed: false, items: ["Enroll for German Language Course", "Complete Training A1 → A2 → B1 → B2", "Clear Certification Exams B1 and B2"] },
              { title: "Language Training Completed", emoji: "✈️", isRed: true, items: ["Register for German Interviews Assistance", "Selection & Visa Processing Assistance", "Fly to Germany"] },
            ].map((track, t) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: t * 0.15, duration: 0.6, ease }}
                className="relative rounded-3xl border-2 p-8 overflow-hidden bg-white shadow-lg"
                style={{ borderColor: track.isRed ? "rgba(211,47,47,0.2)" : "rgba(26,35,126,0.15)" }}
              >
                <div className="absolute -top-4 left-7 h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-xl"
                  style={{ background: track.isRed ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)" }}>
                  {track.emoji}
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-6 mt-4">{track.title}</h3>
                <ol className="space-y-5">
                  {track.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: t * 0.15 + i * 0.1 + 0.3, ease }}
                      className="flex items-start gap-3"
                    >
                      <span className="h-7 w-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 shadow-md"
                        style={{ background: track.isRed ? "#D32F2F" : "#1A237E" }}>{i + 1}</span>
                      <span className="text-slate-600 text-sm leading-relaxed mt-0.5">{item}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 italic">AR Overseas Consultancy (OPC) Pvt. Ltd. assists with language training, recruitment, interviews and the visa process.</p>
        </div>
      </section>

      {/* ══ WHY CHOOSE AR ════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">Why Choose Us</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">Why Learn with AR Overseas Consultancy?</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mt-3 text-sm">Built for serious learners — flexible, expert-led and exam-ready.</motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {whyAR.map((w, i) => (
              <motion.div
                key={w.text}
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease }}
                className="flex items-center gap-3 text-white px-5 py-3.5 rounded-2xl shadow-lg font-bold text-sm cursor-default"
                style={{ background: w.isRed ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)" }}
              >
                <span className="text-xl">{w.icon}</span>
                {w.text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPLICATION PROCESS — vertical timeline ════════════════════════════ */}
      <section id="process" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D1757 40%, #B71C1C 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-red-300 text-xs uppercase tracking-[0.3em] font-bold block mb-3">End-to-End Support</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-white">Simple & Transparent Application Process</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mt-3 text-sm">A 10-step journey from your first consultation to flying to Germany.</motion.p>
          </motion.div>

          <div className="space-y-2">
            {steps.map((step, i) => (
              <TimelineStep key={step.s} step={step} index={i} total={steps.length} />
            ))}
          </div>

          {/* Support includes */}
          <div className="mt-16">
            <h3 className="font-display text-xl font-black text-white text-center mb-6">Our Complete Support & Assistance Includes</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {support.map((sp, i) => (
                <motion.div
                  key={sp}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/10 border text-white"
                  style={{ borderColor: i % 2 === 0 ? "rgba(255,255,255,0.2)" : "rgba(239,83,80,0.4)" }}
                >
                  <span className="text-red-300 text-xs">✦</span>
                  {sp}
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full shadow-xl"
                style={{ background: "linear-gradient(135deg, #D32F2F, #B71C1C)", boxShadow: "0 8px 32px rgba(211,47,47,0.5)" }}
              >
                ✈️ Start Your Journey Today
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQs ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative" style={{ background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3">FAQs</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black text-slate-900">Common Questions</motion.h2>
          </motion.div>
          <div className="relative">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT CTA ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A237E 0%, #0D1757 40%, #D32F2F 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.06), transparent 55%)" }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #90CAF9, #EF5350, #90CAF9)" }} />

        <motion.div animate={{ y: [-12, 12, -12], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[12%] text-8xl opacity-10 pointer-events-none select-none">🇩🇪</motion.div>
        <motion.div animate={{ y: [8, -8, 8], rotate: [0, -4, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-[8%] text-7xl opacity-10 pointer-events-none select-none">✈️</motion.div>

        <div className="max-w-3xl mx-auto px-6 text-center relative" style={{ zIndex: 10 }}>
          <motion.div
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl mb-6 inline-block"
          >✨</motion.div>

          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-red-200 text-xs uppercase tracking-[0.3em] font-bold block mb-4">Join Us</motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Let's Build Your Global<br />
            <span style={{ background: "linear-gradient(90deg, #90CAF9, #FFCDD2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Nursing Career Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="text-white/75 text-base mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Start your journey towards a secure, respected, and high-paying career in Germany with AR Overseas Consultancy (OPC) Pvt. Ltd.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={stagger}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {[
              { href: "tel:+917396949498",               icon: "📞", text: "+91 73969 49498" },
              { href: "tel:+918142445464",               icon: "📞", text: "+91 81424 45464" },
              { href: "tel:+919052445464",               icon: "📞", text: "+91 90524 45464" },
              { href: "mailto:aroverseas1125@gmail.com", icon: "📧", text: "aroverseas1125@gmail.com" },
              { href: "https://aroverseasconsultancy.com", icon: "🌍", text: "aroverseasconsultancy.com" },
            ].map((c) => (
              <motion.a
                key={c.href}
                variants={fadeUp}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <span>{c.icon}</span>{c.text}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/45 text-xs"
          >
            📍 Plot No: 53, HIG – Phase 1, Near Ganesh Temple, Vanasthalipuram, Hyderabad, Telangana – 500070
          </motion.p>
        </div>
      </section>
    </div>
  );
}