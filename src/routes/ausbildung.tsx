import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ausbildungImg from "@/assets/ausbildung.png";
import ausbildungImg2 from "@/assets/ausbildung2.png";

export const Route = createFileRoute("/ausbildung")({
  head: () => ({
    meta: [
      { title: "Ausbildung in Germany — AR Overseas Consultancy (OPC) Pvt. Ltd." },
      {
        name: "description",
        content:
          "Germany's Ausbildung (Vocational Training) — Study, Work, Earn & Settle. 9 programs including Nursing, Hotel Management, Mechatronics, Logistics, and more.",
      },
    ],
  }),
  component: Ausbildung,
});

// ─── Brand Colors ─────────────────────────────────────────────────────────────
// Primary Red:  #CC1B1B   (logo red)
// Primary Blue: #1A3FA0   (logo navy blue)
// Light Red:    #FFF0F0
// Light Blue:   #EEF2FF
// Mid Red:      #E53535
// Mid Blue:     #2952C8

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const programs = [
  {
    id: "01",
    title: "Nursing Assistant",
    german: "Pflegeassistent/in",
    emoji: "🏥",
    role: "Assist patients with daily activities, monitor health parameters, support registered nurses, and provide compassionate care for elderly or disabled patients.",
    duration: "3 Years",
    pathway: "Pathway to Registered Nurse",
    age: "18–28 Years",
    edu: "12th Pass / Any Stream",
    lang: "B1 German",
    stipend: "€900–€1,200",
    salary: "€2,000–€2,500",
    extras: ["Flight Ticket Included"],
    bg: "from-red-50 to-blue-50",
    accent: "bg-red-600",
    accentText: "text-red-600",
    dot: "#CC1B1B",
    stripBg: "#FFF5F5",
  },
  {
    id: "02",
    title: "Hotel Management",
    german: "Hotelfachmann / Hotelfachfrau",
    emoji: "🏨",
    role: "Work in hotels, restaurants, and resorts handling guest services, front office operations, housekeeping supervision, reservation management, and event support.",
    duration: "3 Years",
    pathway: "Full-time job after completion",
    age: "18–28 Years",
    edu: "12th Pass",
    lang: "B1 German (Goethe Certified)",
    stipend: "€900–€1,200",
    salary: "€2,000–€2,300",
    extras: ["Male / Female", "Flight Ticket Included"],
    bg: "from-blue-50 to-indigo-50",
    accent: "bg-blue-700",
    accentText: "text-blue-700",
    dot: "#1A3FA0",
    stripBg: "#F0F4FF",
  },
  {
    id: "03",
    title: "Mechatronics & Electronics",
    german: "Mechatroniker/in",
    emoji: "⚙️",
    role: "Design, develop, maintain electromechanical systems, robotics, automation equipment, electronics, and manufacturing machinery in German industrial facilities.",
    duration: "3 Years",
    pathway: "High-demand engineering sector",
    age: "18–28 Years",
    edu: "12th with Maths (Compulsory)",
    lang: "B1 German",
    stipend: "€1,000–€1,200",
    salary: "€2,000+",
    extras: ["Flight Ticket Included"],
    bg: "from-red-50 to-orange-50",
    accent: "bg-red-700",
    accentText: "text-red-700",
    dot: "#CC1B1B",
    stripBg: "#FFF5F5",
  },
  {
    id: "04",
    title: "Logistics",
    german: "Fachkraft für Lagerlogistik",
    emoji: "🚚",
    role: "Manage inventory, storage systems, order processing, transportation planning, and end-to-end supply chain operations for German companies.",
    duration: "3 Years",
    pathway: "Core industry backbone",
    age: "18–28 Years",
    edu: "12th Pass",
    lang: "B1 German",
    stipend: "€1,000–€1,200",
    salary: "€2,000+",
    extras: ["Flight Ticket Included"],
    bg: "from-blue-50 to-sky-50",
    accent: "bg-blue-700",
    accentText: "text-blue-700",
    dot: "#1A3FA0",
    stripBg: "#EEF4FF",
  },
  {
    id: "05",
    title: "Industrial Mechanic",
    german: "Industriemechaniker/in",
    emoji: "🔧",
    role: "Work in factories maintaining machinery, assembling components, reading technical drawings, and ensuring smooth production operations across German industries.",
    duration: "3.5 Years",
    pathway: "Manufacturing & production",
    age: "18–28 Years",
    edu: "12th with Maths / ITI / Diploma",
    lang: "B1 German",
    stipend: "€1,000–€1,200",
    salary: "€2,300–€2,800",
    extras: ["Flight Ticket Included"],
    bg: "from-red-50 to-pink-50",
    accent: "bg-red-600",
    accentText: "text-red-600",
    dot: "#CC1B1B",
    stripBg: "#FFF5F5",
  },
  {
    id: "06",
    title: "Automobile Mechanic",
    german: "Kfz-Mechatroniker",
    emoji: "🚗",
    role: "Diagnose, repair, and maintain vehicles including engines, electronics, braking systems, and advanced diagnostic equipment in German auto workshops.",
    duration: "3.5 Years",
    pathway: "Germany's strongest industry",
    age: "18–28 Years",
    edu: "12th Pass / ITI / Diploma",
    lang: "B1 German (Goethe Certified)",
    stipend: "€1,000–€1,200",
    salary: "€2,200–€2,600",
    extras: ["Male / Female", "Flight Ticket Included"],
    bg: "from-blue-50 to-indigo-50",
    accent: "bg-blue-600",
    accentText: "text-blue-600",
    dot: "#1A3FA0",
    stripBg: "#EEF4FF",
  },
  {
    id: "07",
    title: "Baker",
    german: "Bäcker/in",
    emoji: "🥐",
    role: "Prepare breads, cakes, pastries, and desserts using traditional German and modern techniques. Mixing, baking, decorating, and maintaining hygiene standards.",
    duration: "3 Years",
    pathway: "Guaranteed employment after completion",
    age: "18–28 Years",
    edu: "12th Pass",
    lang: "B1 German (Goethe Certified) + Willing to learn",
    stipend: "€1,000–€1,200",
    salary: "€2,000+",
    extras: ["Male / Female", "Flight Ticket Included"],
    bg: "from-orange-50 to-red-50",
    accent: "bg-red-700",
    accentText: "text-red-700",
    dot: "#CC1B1B",
    stripBg: "#FFF5F5",
  },
  {
    id: "08",
    title: "Gastronomy / Chef",
    german: "Koch / Köchin",
    emoji: "👨‍🍳",
    role: "Prepare meals, season dishes, garnish plates, maintain kitchen hygiene, and ensure smooth operations in restaurants, hotels, or catering establishments across Germany.",
    duration: "3 Years",
    pathway: "Full-time job after graduation",
    age: "18–28 Years",
    edu: "12th / Diploma / BHM / Hotel Management",
    lang: "B1 German (Goethe Certified)",
    stipend: "€1,000–€1,200",
    salary: "€2,000+",
    extras: ["Male / Female", "Flight Ticket Included"],
    bg: "from-blue-50 to-cyan-50",
    accent: "bg-blue-600",
    accentText: "text-blue-600",
    dot: "#1A3FA0",
    stripBg: "#EEF4FF",
  },
  {
    id: "09",
    title: "Food Processing Technician",
    german: "Fachkraft Lebensmitteltechnik",
    emoji: "🏭",
    role: "Prepare ingredients, operate food machinery, quality control, packaging, sanitation, and supervise food production processes in German manufacturing facilities.",
    duration: "3 Years",
    pathway: "Guaranteed employment after completion",
    age: "18–28 Years",
    edu: "12th Pass (comfortable with meat products)",
    lang: "B1 German (No IELTS required)",
    stipend: "€1,000–€1,200",
    salary: "€2,000+",
    extras: ["Flight Ticket Included"],
    bg: "from-red-50 to-blue-50",
    accent: "bg-red-600",
    accentText: "text-red-600",
    dot: "#CC1B1B",
    stripBg: "#FFF5F5",
  },
];

const benefits = [
  { icon: "💶", label: "Earn While You Learn" },
  { icon: "🎓", label: "No Tuition Fees" },
  { icon: "🏆", label: "Global Certification" },
  { icon: "✈️", label: "Flight Ticket Included" },
  { icon: "🇩🇪", label: "German PR Pathway" },
  { icon: "👨‍👩‍👧", label: "Family Settlement" },
  { icon: "🛠️", label: "Hands-on Training" },
  { icon: "🌟", label: "High Quality Life" },
];

const processSteps = [
  { n: "01", title: "Career Counselling", desc: "Profile evaluation & program selection", icon: "💬" },
  { n: "02", title: "Language Training", desc: "German A1 → B1 with certified trainers", icon: "🇩🇪" },
  { n: "03", title: "Application & Docs", desc: "Complete documentation support", icon: "📋" },
  { n: "04", title: "Employer Matching", desc: "Matched with German companies", icon: "🤝" },
  { n: "05", title: "Interview Prep", desc: "Mock interviews & communication training", icon: "🎯" },
  { n: "06", title: "Visa & Documents", desc: "Visa filing & recognition support", icon: "🛡️" },
  { n: "07", title: "Travel & Settlement", desc: "Airport pickup & adaptation support", icon: "✈️" },
];

const marqueeItems = [
  "Nursing Assistant", "Hotel Management", "Mechatronics & Electronics",
  "Logistics", "Industrial Mechanic", "Automobile Mechanic",
  "Baker", "Gastronomy / Chef", "Food Processing Technician",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Marquee({ items, speed = 30, reverse = false }: { items: string[]; speed?: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-max"
        style={{ animation: `marqueeScroll ${speed}s linear infinite${reverse ? " reverse" : ""}` }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8 text-sm font-black uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: "#1A3FA0" }}>
            <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "#CC1B1B" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function OrbitRing() {
  return (
    <div className="relative h-[420px] w-[420px] mx-auto hidden md:block">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: "rgba(26,63,160,0.15)" }} />
      <div className="absolute inset-8 rounded-full border-2" style={{ borderColor: "rgba(204,27,27,0.12)" }} />

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full flex items-center justify-center shadow-2xl border-2 border-white" style={{ background: "linear-gradient(135deg, #CC1B1B, #1A3FA0)" }}>
          <span className="text-3xl">🇩🇪</span>
        </div>
      </div>

      {/* Rotating items */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {benefits.map((b, i) => {
          const angle = (i / benefits.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const r = 185;
          const x = 210 + r * Math.sin(rad) - 44;
          const y = 210 - r * Math.cos(rad) - 44;
          return (
            <motion.div
              key={b.label}
              style={{ position: "absolute", left: x, top: y }}
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="h-[88px] w-[88px] flex flex-col items-center justify-center rounded-full shadow-xl border-2 border-white bg-white"
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="text-[9px] font-bold text-center leading-tight px-1 mt-0.5" style={{ color: "#1A3FA0" }}>{b.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function ProgramStrip({ prog, idx }: { prog: typeof programs[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = idx % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden py-20 md:py-28 bg-gradient-to-br ${prog.bg}`}
      style={{ borderBottom: "1px solid rgba(26,63,160,0.08)" }}
    >
      {/* Giant ghost number */}
      <div
        className="absolute select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: "clamp(12rem, 30vw, 22rem)",
          right: isRight ? undefined : "-2rem",
          left: isRight ? "-2rem" : undefined,
          bottom: "-2rem",
          fontFamily: "serif",
          color: prog.dot === "#CC1B1B" ? "rgba(204,27,27,0.05)" : "rgba(26,63,160,0.05)",
        }}
      >
        {prog.id}
      </div>

      {/* Glow blob */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: prog.dot,
          top: "20%",
          right: isRight ? "10%" : undefined,
          left: isRight ? undefined : "10%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-start`}>

          {/* Left: Emoji + Program number + German name */}
          <motion.div
            initial={{ opacity: 0, x: isRight ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex-shrink-0 flex flex-col items-center md:items-start gap-4"
          >
            {/* Big emoji circle */}
            <div
              className="h-28 w-28 md:h-36 md:w-36 rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-xl border-4 border-white"
              style={{ background: `radial-gradient(circle at 40% 35%, ${prog.dot}30, ${prog.dot}10)` }}
            >
              {prog.emoji}
            </div>
            <div className="text-center md:text-left">
              <div className="text-xs font-black uppercase tracking-[0.3em] mb-1" style={{ color: "rgba(26,63,160,0.4)" }}>Program {prog.id}</div>
              <div className={`italic text-sm font-bold ${prog.accentText} leading-snug max-w-[180px]`}>{prog.german}</div>
            </div>

            {/* Duration pill */}
            <div className="flex items-center gap-2 mt-2">
              <span className={`h-2 w-2 rounded-full ${prog.accent}`} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1A3FA0" }}>{prog.duration}</span>
            </div>
            {prog.pathway && (
              <div className="text-xs italic max-w-[180px] text-center md:text-left leading-snug" style={{ color: "rgba(26,63,160,0.5)" }}>
                {prog.pathway}
              </div>
            )}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="flex-1 min-w-0"
          >
            {/* Title */}
            <h2 className="font-display font-black text-3xl md:text-5xl leading-tight mb-5" style={{ color: "#1A3FA0" }}>
              {prog.title}
            </h2>

            {/* Role */}
            <p className="text-base leading-relaxed mb-8 max-w-xl border-l-4 pl-4" style={{ color: "#374151", borderColor: prog.dot + "40" }}>
              {prog.role}
            </p>

            {/* Eligibility row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
              {[
                { label: prog.age, icon: "👤" },
                { label: prog.edu, icon: "🎓" },
                { label: prog.lang, icon: "🗣️" },
                ...prog.extras.map((e) => ({ label: e, icon: "✦" })),
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ color: "#374151", background: "rgba(255,255,255,0.8)", borderColor: "rgba(26,63,160,0.15)" }}>
                  <span className="text-[10px]">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* Stipend + Salary */}
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold mb-0.5" style={{ color: "rgba(26,63,160,0.5)" }}>Stipend</div>
                <div
                  className="font-display font-black leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    background: `linear-gradient(135deg, ${prog.dot} 40%, #1A3FA0)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {prog.stipend}
                  <span className="text-base font-semibold ml-1" style={{ WebkitTextFillColor: "rgba(55,65,81,0.5)", fontSize: "1rem" }}>/mo</span>
                </div>
              </div>

              <div className="text-3xl font-thin self-center" style={{ color: "rgba(26,63,160,0.3)" }}>→</div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold mb-0.5" style={{ color: "rgba(26,63,160,0.5)" }}>After Ausbildung</div>
                <div
                  className="font-display font-black leading-none"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    background: `linear-gradient(135deg, #1A3FA0, ${prog.dot})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {prog.salary}
                  <span className="text-sm font-semibold ml-1" style={{ WebkitTextFillColor: "rgba(55,65,81,0.5)", fontSize: "0.875rem" }}>/mo</span>
                </div>
              </div>
            </div>

            {/* Flight included tag */}
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border" style={{ color: "#1A3FA0", borderColor: "rgba(26,63,160,0.2)", background: "rgba(26,63,160,0.05)" }}>
              <span>✈️</span> Flight Ticket Included
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
function Ausbildung() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="font-sans overflow-x-hidden" style={{ background: "#FFFFFF", marginTop: -120 }}>
      <style>{`
        @keyframes marqueeScroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        @keyframes floatA { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(3deg)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(-4deg)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
        .float-a { animation: floatA 6s ease-in-out infinite; }
        .float-b { animation: floatB 8s ease-in-out infinite 1s; }
        .float-c { animation: floatC 7s ease-in-out infinite 2s; }
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .spin-slow { animation: spinSlow 30s linear infinite; }
        @keyframes pulseDot { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
     <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">

  {/* Background layers */}
  <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FFF5F5 50%, #EEF4FF 100%)" }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 20% 40%, rgba(26,63,160,0.12), transparent 55%)" }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 80% 60%, rgba(204,27,27,0.08), transparent 50%)" }}
    />
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(26,63,160,0.5) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </motion.div>

  {/* Floating program bubbles — left side only (safe on both layouts) */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[
      { e: "🏥", top: "12%", left: "2%",  cls: "float-a", s: 48 },
      { e: "⚙️", top: "52%", left: "1%",  cls: "float-c", s: 44 },
      { e: "🥐", top: "78%", left: "3%",  cls: "float-b", s: 40 },
    ].map((b, i) => (
      <div
        key={i}
        className={`absolute ${b.cls} opacity-[0.15]`}
        style={{ top: b.top, left: b.left, fontSize: b.s }}
      >
        {b.e}
      </div>
    ))}
  </div>

  {/* Decorative rings */}
  <div
    className="absolute right-[-200px] top-[-200px] h-[700px] w-[700px] rounded-full spin-slow pointer-events-none border-2"
    style={{ borderColor: "rgba(26,63,160,0.08)" }}
  />
  <div
    className="absolute right-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full spin-slow pointer-events-none border-2"
    style={{ borderColor: "rgba(204,27,27,0.06)", animationDirection: "reverse", animationDuration: "20s" }}
  />

  {/* ── Main layout ── */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="show"
    className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full"
  >
    {/*
      Mobile:  single column — content on top, img1 below, img2 below that
      Desktop: two columns — content left (1/2), images stacked right (1/2)
    */}
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">

      {/* ── LEFT: Text content ── */}
      <div className="w-full lg:w-1/2 flex flex-col">

        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border self-start"
          style={{ background: "rgba(204,27,27,0.08)", borderColor: "rgba(204,27,27,0.2)" }}
        >
          <span
            className="h-2 w-2 rounded-full flex-shrink-0"
            style={{ background: "#CC1B1B", animation: "pulseDot 1.8s ease-in-out infinite" }}
          />
          <span
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold"
            style={{ color: "#CC1B1B" }}
          >
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-3">
          <span
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.35em]"
            style={{ color: "rgba(26,63,160,0.5)" }}
          >
            Ausbildung in Germany
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-black leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", color: "#1A3FA0" }}
        >
          <span style={{ color: "#1A2A5E" }}>Build Your</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #CC1B1B, #1A3FA0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Career in Europe
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg max-w-xl mb-5 leading-relaxed"
          style={{ color: "#374151" }}
        >
          Germany's world-famous dual vocational training system —
          combine classroom learning with real company training and
          earn a monthly stipend from day one.
        </motion.p>

        {/* Pill row */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
          {[
            "📚 Study · Work · Earn · Settle",
            "🎓 No Tuition Fees",
            "💶 Stipend €600–€1,200/month",
            "🇩🇪 German Residence Pathway",
          ].map((t) => (
            <span
              key={t}
              className="border px-3 sm:px-4 py-1.5 rounded-full font-semibold text-[11px] sm:text-xs"
              style={{
                background: "rgba(26,63,160,0.06)",
                borderColor: "rgba(26,63,160,0.15)",
                color: "#1A3FA0",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-white font-black text-sm px-6 sm:px-8 py-3.5 rounded-full shadow-xl"
            style={{
              background: "linear-gradient(135deg, #CC1B1B, #A01515)",
              boxShadow: "0 8px 32px rgba(204,27,27,0.35)",
            }}
          >
            🚀 Book Free Counselling
          </motion.a>
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 font-bold text-sm px-6 sm:px-8 py-3.5 rounded-full border-2 transition-colors"
            style={{ background: "rgba(26,63,160,0.06)", borderColor: "#1A3FA0", color: "#1A3FA0" }}
          >
            📋 View Programs
          </motion.a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(26,63,160,0.12)" }}
        >
          {[
            { num: "9",           label: "Programs Available" },
            { num: "2–3.5",       label: "Years Duration" },
            { num: "€600–€1,200", label: "Monthly Stipend" },
            { num: "100%",        label: "End-to-End Support" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-black text-2xl" style={{ color: "#1A3FA0" }}>
                {s.num}
              </div>
              <div
                className="text-[10px] uppercase tracking-wider font-semibold mt-0.5 leading-snug"
                style={{ color: "rgba(26,63,160,0.45)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── RIGHT: Images stacked (desktop) / inline after content (mobile) ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 flex flex-col gap-4 mt-10 lg:mt-0 lg:sticky lg:top-8"
      >
        {/* Image 1 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/70">
          <img
            src={ausbildungImg}
            alt="Ausbildung Germany"
            className="w-full object-cover"
            style={{ height: "clamp(200px, 28vw, 320px)" }}
            draggable={false}
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/70">
          <img
            src={ausbildungImg2}
            alt="Ausbildung Programs"
            className="w-full object-cover"
            style={{ height: "clamp(200px, 28vw, 320px)" }}
            draggable={false}
          />
        </div>
      </motion.div>

    </div>
  </motion.div>
</section>
      {/* ══ MARQUEE ═══════════════════════════════════════════════════════════ */}
      <div className="py-4 overflow-hidden" style={{ background: "linear-gradient(90deg, #EEF2FF, #FFF5F5, #EEF2FF)", borderTop: "1px solid rgba(26,63,160,0.1)", borderBottom: "1px solid rgba(26,63,160,0.1)" }}>
        <Marquee items={marqueeItems} speed={35} />
      </div>

      {/* ══ WHAT IS AUSBILDUNG ════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#F8FAFF" }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #1A3FA0, #CC1B1B, #1A3FA0)" }} />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold block mb-4" style={{ color: "#CC1B1B" }}>What is Ausbildung?</span>
            <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A2A5E" }}>
              Germany's Legendary{" "}
              <span style={{ background: "linear-gradient(135deg, #CC1B1B, #1A3FA0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dual System</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "#4B5563" }}>
              Ausbildung is Germany's world-famous <strong style={{ color: "#1A2A5E" }}>dual vocational training system</strong> that combines classroom learning at vocational schools (Berufsschule) with hands-on practical training at real German companies.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "#4B5563" }}>
              Unlike traditional education, Ausbildung lets you <strong style={{ color: "#CC1B1B" }}>earn while you learn</strong>, gain real job experience, and secure long-term employment — all without paying tuition fees.
            </p>

            {/* Key specs */}
            <div className="space-y-3">
              {[
                { label: "Duration", value: "2 – 3.5 Years" },
                { label: "Certificate", value: "Gesellenbrief (EU Valid)" },
                { label: "Stipend", value: "€600 – €1,200 / month" },
                { label: "Eligibility", value: "12th Pass + B1 German" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider w-20 flex-shrink-0" style={{ color: "rgba(26,63,160,0.45)" }}>{item.label}</span>
                  <div className="h-px flex-1" style={{ background: "rgba(26,63,160,0.12)" }} />
                  <span className="font-bold text-sm" style={{ color: "#1A2A5E" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dual circle diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[360px] h-[260px] mx-auto">
              {/* Circle A */}
              <div
                className="absolute left-0 top-0 h-[240px] w-[240px] rounded-full border-2 flex flex-col items-center justify-center text-center"
                style={{ borderColor: "rgba(26,63,160,0.25)", background: "radial-gradient(circle at 40% 40%, rgba(26,63,160,0.12), rgba(26,63,160,0.03))" }}
              >
                <span className="text-3xl mb-2">🏫</span>
                <div className="font-black text-sm" style={{ color: "#1A3FA0" }}>Berufsschule</div>
                <div className="text-[11px] mt-1 px-6 leading-snug" style={{ color: "#6B7280" }}>Vocational School — theory & knowledge</div>
              </div>

              {/* Circle B */}
              <div
                className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full border-2 flex flex-col items-center justify-center text-center"
                style={{ borderColor: "rgba(204,27,27,0.25)", background: "radial-gradient(circle at 60% 40%, rgba(204,27,27,0.12), rgba(204,27,27,0.03))" }}
              >
                <span className="text-3xl mb-2">🏭</span>
                <div className="font-black text-sm" style={{ color: "#CC1B1B" }}>Company Training</div>
                <div className="text-[11px] mt-1 px-6 leading-snug" style={{ color: "#6B7280" }}>Real employer — hands-on practice & pay</div>
              </div>

              {/* Intersection label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                <div className="border-2 border-white rounded-full px-4 py-3 shadow-xl" style={{ background: "#F8FAFF", borderColor: "rgba(26,63,160,0.2)" }}>
                  <div className="font-black text-xs uppercase tracking-wider" style={{ color: "#1A2A5E" }}>Ausbildung</div>
                  <div className="text-[9px] mt-0.5" style={{ color: "#6B7280" }}>Dual System</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ ORBITAL BENEFITS ══════════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FFF5F5 50%, #EEF4FF 100%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(26,63,160,0.05), transparent 60%)" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold block mb-4" style={{ color: "#CC1B1B" }}>Why Choose Us?</span>
              <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1A2A5E" }}>
                Why Ausbildung<br />
                <span style={{ background: "linear-gradient(135deg, #CC1B1B, #1A3FA0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Changes Everything</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "💶", title: "Earn While You Learn", desc: "Monthly stipend with zero tuition fees." },
                  { icon: "🛠️", title: "Real Practical Training", desc: "Hands-on experience with German employers." },
                  { icon: "🏆", title: "Globally Recognised", desc: "Gesellenbrief certificate valid across EU." },
                  { icon: "🇩🇪", title: "PR & Settlement Pathway", desc: "Job, PR, and family settlement opportunities." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border-2 border-white shadow-md" style={{ background: "rgba(26,63,160,0.08)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: "#1A2A5E" }}>{item.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile benefits list */}
              <div className="md:hidden flex flex-wrap gap-2">
                {benefits.map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 border-2 border-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm" style={{ background: "rgba(26,63,160,0.06)", color: "#1A3FA0" }}>
                    {b.icon} {b.label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <OrbitRing />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ LARGE STATS ROW ═══════════════════════════════════════════════════ */}
      <section className="py-16 overflow-hidden" style={{ background: "#1A2A5E", borderTop: "4px solid #CC1B1B" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { num: "9", unit: "+", label: "Ausbildung Programs" },
              { num: "€1.2K", unit: "", label: "Max Monthly Stipend" },
              { num: "3.5", unit: "yrs", label: "Maximum Duration" },
              { num: "100%", unit: "", label: "End-to-End Support" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease }}
                className="px-6 py-8 text-center"
                style={{ borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="font-display font-black text-white leading-none mb-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  {s.num}
                  <span className="text-3xl" style={{ color: "#FF6B6B" }}>{s.unit}</span>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE 2 ═════════════════════════════════════════════════════════ */}
      <div className="py-3 overflow-hidden" style={{ background: "#F0F4FF", borderBottom: "1px solid rgba(26,63,160,0.1)" }}>
        <Marquee items={["No Tuition Fees", "Paid Training", "Flight Ticket Included", "B1 German Required", "Age 18–28", "Globally Recognised Certificate", "PR Pathway after Completion"]} speed={40} reverse />
      </div>

      {/* ══ PROGRAMS ══════════════════════════════════════════════════════════ */}
      <div id="programs">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold block mb-3"
            style={{ color: "#CC1B1B" }}
          >
            All Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="font-display font-black"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#1A2A5E" }}
          >
            Ausbildung Programs Available
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-3 text-sm max-w-xl mx-auto"
            style={{ color: "#6B7280" }}
          >
            Full details for each program — eligibility, stipend, and post-Ausbildung salary.
          </motion.p>
        </div>

        {programs.map((prog, idx) => (
          <ProgramStrip key={prog.id} prog={prog} idx={idx} />
        ))}
      </div>

      {/* ══ POPULAR CATEGORIES ═══════════════════════════════════════════════ */}
      <section className="py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #EEF2FF, #F8FAFF, #EEF4FF)", borderTop: "1px solid rgba(26,63,160,0.1)", borderBottom: "1px solid rgba(26,63,160,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold block mb-3" style={{ color: "#CC1B1B" }}>Also Available</span>
          <h2 className="font-display font-black text-3xl" style={{ color: "#1A2A5E" }}>More Ausbildung Fields</h2>
          <p className="text-sm mt-2" style={{ color: "#6B7280" }}>Course availability depends on eligibility and employer demand.</p>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4 px-6 min-w-max mx-auto">
            {[
              { icon: "💻", name: "IT & Software Systems" },
              { icon: "📊", name: "Business Administration" },
              { icon: "🛍️", name: "Retail Management" },
              { icon: "⚡", name: "Electrical Engineering" },
              { icon: "🏗️", name: "Construction Tech" },
              { icon: "🌿", name: "Agriculture & Environment" },
              { icon: "💇", name: "Cosmetics & Beauty" },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex-shrink-0 flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border-2 border-white cursor-default shadow-md"
                style={{ background: "rgba(255,255,255,0.9)" }}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-bold text-center max-w-[100px] leading-snug" style={{ color: "#1A3FA0" }}>{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY ═══════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] font-bold block mb-3" style={{ color: "#CC1B1B" }}>Who Can Apply?</motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A2A5E" }}>
              General Eligibility Criteria
            </motion.h2>
          </motion.div>

          {/* Spoke layout */}
          <div className="grid md:grid-cols-3 gap-0 rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(26,63,160,0.1)" }}>
            {[
              { icon: "🎂", title: "Age", value: "18 – 28 Years" },
              { icon: "📚", title: "Education", value: "Minimum 12th Pass (any stream)" },
              { icon: "🗣️", title: "Language", value: "German B1 / B2 required" },
              { icon: "💪", title: "Motivation", value: "Strong drive to work in Germany" },
              { icon: "📝", title: "No IELTS", value: "No English test required" },
              { icon: "✈️", title: "Willingness", value: "Open to relocate to Germany" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease }}
                className="p-8 text-center bg-white"
                style={{ border: "1px solid rgba(26,63,160,0.08)" }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2" style={{ color: "rgba(26,63,160,0.45)" }}>{item.title}</div>
                <div className="font-bold text-sm leading-snug" style={{ color: "#1A2A5E" }}>{item.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Language roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ease }}
            className="mt-14 p-8 rounded-3xl border-2 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(26,63,160,0.04), rgba(204,27,27,0.04))", borderColor: "rgba(26,63,160,0.12)" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold block mb-5 text-center" style={{ color: "#CC1B1B" }}>German Language Roadmap</span>
            <div className="flex items-center justify-center flex-wrap gap-0">
              {["A1", "A2", "B1", "B2"].map((lvl, i) => (
                <div key={lvl} className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="h-16 w-16 rounded-full flex flex-col items-center justify-center border-2 shadow-md"
                    style={{
                      borderColor: i < 2 ? "rgba(26,63,160,0.4)" : "rgba(204,27,27,0.4)",
                      background: i < 2 ? "rgba(26,63,160,0.08)" : "rgba(204,27,27,0.08)",
                    }}
                  >
                    <span className="font-black text-lg" style={{ color: i < 2 ? "#1A3FA0" : "#CC1B1B" }}>{lvl}</span>
                    <span className="text-[8px] uppercase tracking-wider" style={{ color: "#6B7280" }}>{["Beginner","Elementary","Intermediate","Proficient"][i]}</span>
                  </motion.div>
                  {i < 3 && (
                    <div className="w-8 h-px mx-1" style={{ background: "linear-gradient(90deg, rgba(26,63,160,0.3), rgba(204,27,27,0.3))" }} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-5 italic" style={{ color: "#6B7280" }}>🗣️ Language is the foundation of your success in Germany. We provide Goethe / TELC exam preparation.</p>
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F0F4FF, #FFF5F5)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="show" variants={stagger} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] font-bold block mb-3" style={{ color: "#CC1B1B" }}>Step by Step</motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A2A5E" }}>
              Our End-to-End Process
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-sm" style={{ color: "#6B7280" }}>From your first consultation to landing in Germany — we handle everything.</motion.p>
          </motion.div>

          <div className="space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isOpen = activeStep === i;
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ease }}
                  className={`flex items-start gap-6 py-6 cursor-pointer group ${isLeft ? "flex-row" : "flex-row-reverse text-right"}`}
                  style={{ borderBottom: "1px solid rgba(26,63,160,0.08)" }}
                  onClick={() => setActiveStep(isOpen ? null : i)}
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-16 w-16 flex-shrink-0 rounded-full flex flex-col items-center justify-center shadow-lg border-2 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "#CC1B1B" : "#1A3FA0",
                      background: isOpen ? "linear-gradient(135deg, #CC1B1B, #A01515)" : "linear-gradient(135deg, #1A3FA0, #0F2875)",
                    }}
                  >
                    <span className="text-xl">{step.icon}</span>
                    <span className="text-[9px] font-black" style={{ color: "rgba(255,255,255,0.6)" }}>{step.n}</span>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-black text-lg transition-colors" style={{ color: isOpen ? "#CC1B1B" : "#1A2A5E" }}>{step.title}</h3>
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-xl font-thin flex-shrink-0" style={{ color: "#CC1B1B" }}>+</motion.span>
                    </div>
                    <p className="text-sm" style={{ color: "#6B7280" }}>{step.desc}</p>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm mt-3 pl-3 border-l-4" style={{ color: "#374151", borderColor: "#CC1B1B" }}>
                            {[
                              "We evaluate your academic profile, work experience, and German language level to recommend the best Ausbildung program for your career goals.",
                              "Our certified trainers guide you from A1 through B1 with structured classroom sessions, online support, 20+ model papers, and Goethe/TELC exam preparation.",
                              "We help you collect, translate, and submit all required documents including educational certificates, passport copies, and application forms.",
                              "We match your profile with partner German companies offering Ausbildung positions in your chosen field across different German states.",
                              "Intensive mock interviews, communication coaching, and cultural orientation to ensure you excel in employer interviews.",
                              "End-to-end assistance with work visa (§ 16a AufenthG), document verification, and Ausbildung contract review.",
                              "Airport pickup coordination, accommodation support, SIM card, bank account setup, and local orientation on arrival.",
                            ][i]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#1A3FA0" }}>
              <span className="h-2 w-2 rounded-full" style={{ background: "#CC1B1B" }} />
              100% End-to-End Support from AR Overseas Consultancy (OPC) Pvt. Ltd.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A2A5E 0%, #CC1B1B 50%, #1A3FA0 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 55%)" }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #FF6B6B, #FFFFFF, #6B9EFF)" }} />

        <motion.div
          animate={{ y: [-14, 14, -14], rotate: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[10%] text-9xl opacity-10 pointer-events-none select-none"
        >🇩🇪</motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-[8%] text-7xl opacity-10 pointer-events-none select-none"
        >✈️</motion.div>

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold block mb-4"
            style={{ color: "rgba(255,200,200,0.9)" }}
          >
            Start Your Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="font-display font-black text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            From India to Germany —
            <br />
            <span style={{ background: "linear-gradient(135deg, #B8D4FF, #FFB8B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We Guide You End-to-End
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease }}
            className="text-base mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Book a free counselling session today and find the right Ausbildung program for your career.
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
              { href: "tel:+918885949498",               icon: "📞", text: "+91 88859 49498" },
              { href: "mailto:aroverseas1125@gmail.com", icon: "📧", text: "aroverseas1125@gmail.com" },
            ].map((c) => (
              <motion.a
                key={c.href}
                variants={fadeUp}
                href={c.href}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors border"
                style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)" }}
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
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            📍 Plot No: 53, HIG – Phase 1, Near Ganesh Temple, Vanasthalipuram, Hyderabad, Telangana – 500070
            <br />
            <span className="mt-1 inline-block">Mon–Sat: 09am to 06pm</span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}