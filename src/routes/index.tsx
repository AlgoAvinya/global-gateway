import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CountryGlobe } from "@/components/site/CountryGlobe";
import {
  GraduationCap, Stethoscope, Plane, Building2, FileCheck, Languages,
  HeartHandshake, BookOpen, Compass, Award, CheckCircle2, ArrowRight, Quote, Star, Sparkles,
  Handshake, School, ClipboardCheck, Send, Stamp, Briefcase
} from "lucide-react";
import heroImg from "@/assets/hero-airport.jpg";
import nurseImg from "@/assets/nurse-germany.jpg";
import germanyImg from "@/assets/germany.jpg";
import studentsImg from "@/assets/students.jpg";
import uniBathSpa from "@/assets/uni-bath-spa.png";
import uniUEL from "@/assets/uni-uel.png";
import uniRGU from "@/assets/uni-rgu.png";
import uniHeriot from "@/assets/uni-heriot-watt.png";
import uniGCU from "@/assets/uni-gcu.png";
import uniUWL from "@/assets/uni-uwl.png";
import uniNapier from "@/assets/uni-napier.png";
import uniHerts from "@/assets/uni-herts.png";
import heroImg2 from "@/assets/1.jpeg";
import heroImg3 from "@/assets/2.jpeg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR Overseas Consultancy — Education to Employment, Your's Trusted Path" },
      { name: "description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study or work abroad in Germany, UK, USA, Canada, Australia & EU." },
      { property: "og:title", content: "AR Overseas Consultancy — Education to Employment" },
      { property: "og:description", content: "Empowering Indian students & nurses with global career opportunities." },
    ],
  }),
  component: Index,
});

const counsellingSteps = [
  { icon: Compass, label: "Career Counselling" },
  { icon: Plane, label: "Choose Destination" },
  { icon: BookOpen, label: "Universities / Courses" },
  { icon: Award, label: "Admissions / Scholarships" },
  { icon: FileCheck, label: "Visas" },
  { icon: GraduationCap, label: "Travel" },
];

const services = [
  { icon: Stethoscope, title: "Nursing Jobs in Germany", desc: "Opportunities with top German hospitals." },
  { icon: HeartHandshake, title: "Ausbildung Program", desc: "Germany's paid vocational training." },
  { icon: GraduationCap, title: "Overseas Education", desc: "Germany, UK, Canada, Australia, USA, NZ, Ireland, EU & Top 27+ Countries." },
  { icon: Building2, title: "Healthcare Studies & Recruitment ", desc: "Hospitals & Institutions across world." },
  { icon: FileCheck, title: "Visa Guidance", desc: "Complete documentation support end-to-end." },
  { icon: Languages, title: "German Language", desc: "A1 to B2 certification programs." },
  { icon: Plane, title: "Pre & Post Arrival", desc: "Assistance until successful settlement." },
  { icon: BookOpen, title: "IELTS / GRE / PTE Classes", desc: "Test prep tailored to your destination." },
];

const skills = [
  { label: "Student Visas", value: 100 },
  { label: "Spouse Visas", value: 100 },
  { label: "Business Visas", value: 100 },
  { label: "Immigration", value: 100 },
  { label: "Student Loans", value: 100 },
];

const testimonials = [
  { name: "Sai Madhav", text: "I will recommend AR Overseas Consultancy(OPC) to my friends and others. The information I got from Harsha bro about Germany is genuine and unbiased. With the information I had forehand, I did not come across any surprises when I landed in Germany." },
  { name: "Vijay Kumar", text: "It has been an amazing experience with AR Overseas Consultancy(OPC). From counselling, until I arrived in Germany, AR Overseas Consultancy(OPC) took care of everything. I should also thank Anil for receiving me and guiding me to settle down quickly." },
  { name: "Ram Reddy", text: "My experience with AR Overseas Consultancy(OPC) was very good. Anil sir assisted me in selection of university and course. The best part is AR helped me find an accommodation before I arrived." },
];

const processSteps = [
  { n: 1, icon: Handshake, title: "Initial Consultation", desc: "Assess Goals & Options" },
  { n: 2, icon: School, title: "University Selection", desc: "Choose the Right School" },
  { n: 3, icon: ClipboardCheck, title: "Application Preparation", desc: "Craft Your Application" },
  { n: 4, icon: GraduationCap, title: "Test Preparation", desc: "Prepare for Exams" },
  { n: 5, icon: Send, title: "Submit Applications", desc: "Send Your Documents" },
  { n: 6, icon: Stamp, title: "Visa Assistance", desc: "Get Visa Support" },
  { n: 7, icon: Briefcase, title: "Pre-Departure Guidance", desc: "Plan for Your Move" },
];

const universities = [
  { name: "Bath Spa University", logo: uniBathSpa },
  { name: "University of East London", logo: uniUEL },
  { name: "Robert Gordon University Aberdeen", logo: uniRGU },
  { name: "Heriot Watt University", logo: uniHeriot },
  { name: "Glasgow Caledonian University", logo: uniGCU },
  { name: "University of West London", logo: uniUWL },
  { name: "Edinburgh Napier University", logo: uniNapier },
  { name: "University of Hertfordshire", logo: uniHerts },
];

function Index() {
  const heroImages = [heroImg, heroImg2, heroImg3];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 4000); // change every 4 seconds

  return () => clearInterval(interval);
}, []);
  return (
    <>
      {/*
        ════════════════════════════════════════════════════════════════
        SCROLL FIX — Critical rules explained:

        GAP FIX:
          Your navbar has THREE layers: ticker (~36px) + contact bar (~40px)
          + nav (~80px) = ~156px total fixed height.
          The hero must start at top:0 and use padding-top to push content
          below the navbar. We do NOT add margin-top to the page — the hero
          image fills from the very top edge behind the navbar.

        SECTION SCROLL FIX:
          The culprit is `will-change: transform` — in Chrome, any element
          with will-change:transform becomes a containing block AND a scroll
          container for its children. Removing it stops section scrolling.

          Additionally, `transform` on motion.div during whileInView
          animations creates stacking contexts. The fix: use `translateZ(0)`
          ONLY on the outer page wrapper (not on sections), and keep all
          sections with overflow:visible.

          `backdrop-filter` creates a stacking context in WebKit which can
          become a scroll container if the element has any overflow. We
          remove backdrop-blur from all block-level elements and keep it
          only on the hero steps strip (position:absolute, no overflow).

        FRAMER MOTION FIX:
          whileInView with `x` or `y` transforms temporarily changes element
          bounds, which can trigger IntersectionObserver to pick a wrong
          scroll root. Fix: add `viewport={{ root: undefined }}` (already
          default) and ensure no ancestor has overflow other than visible.
        ════════════════════════════════════════════════════════════════
      */}
      <style>{`
        /*
          1. The page wrapper: NO will-change, NO overflow-hidden.
             translateZ(0) gives GPU compositing without creating a
             scroll container. overflow-x:clip clips horizontal bleed
             WITHOUT creating a scroll container (unlike overflow-x:hidden).
        */
        .ar-page {
          transform: translateZ(0);
          overflow:hidden;
          margin-top: -130px; /* Negative margin to pull the page up behind the fixed navbar */
        }

        /*
          2. Sections: always overflow:visible.
             position:relative is needed for absolute children,
             but must NOT have any overflow value other than visible.
        */
        .ar-page > section {
          overflow: visible !important;
          position: relative;
          display: block;
          /* No height, no min-height except on hero */
        }

        /*
          3. Decorative elements: pointer-events and user-select none
             so they never intercept scroll/touch events.
        */
        .ar-deco {
          pointer-events: none !important;
          user-select: none !important;
        }

        /*
          4. Hero section specifically: full viewport height.
             Use 100dvh (dynamic viewport height) — this accounts for
             mobile browser chrome correctly on all modern browsers.
             Fallback to 100vh for older browsers.
        */
        .ar-hero {
          min-height: 100vh;
          min-height: 100dvh;
        }

        /*
          5. Steps strip: absolutely positioned inside hero.
             position:absolute elements do NOT create scroll containers
             regardless of backdrop-filter, so this is safe.
        */
        .ar-steps-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
          padding: 1rem 0;
          background: rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.18);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        /*
          6. Small contained cards: overflow:hidden is fine here
             because these elements have fixed dimensions and no
             scrollable content or animated children.
        */
        .ar-card-clip {
          overflow: hidden;
        }

        /*
          7. NUCLEAR OPTION for scroll trap:
             If any ancestor (layout wrapper, router outlet, etc.)
             has overflow:hidden or overflow:auto, IntersectionObserver
             treats it as the scroll root, causing section-wise scroll.
             This targets any common TanStack Router outlet wrappers.
        */
        [data-router-outlet],
        [data-outlet] {
          overflow: visible !important;
          height: auto !important;
        }
      `}</style>

      <div className="ar-page">

        {/* ── HERO ──────────────────────────────────────────────────────────
            The hero section covers the full viewport INCLUDING behind the
            navbar. The navbar is fixed/sticky so it floats above.
            We do NOT add margin-top — the hero image starts at y=0.
            Content is pushed down with padding-top that matches navbar height.

            YOUR NAVBAR HEIGHT from screenshot:
              ticker bar  ≈ 36px
              contact bar ≈ 40px
              nav bar     ≈ 80px
              TOTAL       ≈ 156px → use pt-[156px] or adjust to exact value
        ──────────────────────────────────────────────────────────────────── */}
        <section className="ar-hero relative flex items-center overflow-hidden bg-red-800">

  {/* Background Image Slider */}
  {heroImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Hero ${index + 1}`}
      className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 brightness-75 ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 0 }}
    />
  ))}

  {/* Premium Overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"
    style={{ zIndex: 1 }}
  />

  {/* Decorative Rings */}
  <div
    className="ar-deco absolute -right-32 top-10 h-96 w-96 rounded-full border border-brand-gold/20 animate-spin-slow hidden md:block"
    style={{ zIndex: 1 }}
  />

  <div
    className="ar-deco absolute -right-20 top-24 h-72 w-72 rounded-full border-2 border-dashed border-white/10 animate-counter-spin hidden md:block"
    style={{ zIndex: 1 }}
  />

  {/* Content */}
  <div
    className="container mx-auto px-4 pb-24 w-full"
    style={{
      position: "relative",
      zIndex: 2,
      paddingTop: "80px",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl text-white"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs uppercase tracking-[0.2em] text-brand-gold border border-white/20 mb-6">
        <Sparkles className="h-3 w-3" />
        AR Overseas Consultancy (OPC) Pvt. Ltd.
      </span>

      <h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
        style={{
          textShadow: "0 4px 20px rgba(0,0,0,0.8)",
        }}
      >
        Education to{" "}
        <span className="bg-gradient-gold bg-clip-text text-transparent">
          Employment
        </span>

        <span
          className="block text-2xl sm:text-3xl md:text-4xl mt-3 font-display italic text-white/95"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          Your's Trusted Path.
        </span>
      </h1>

      <p
        className="text-base md:text-xl text-white/95 max-w-2xl mb-8 leading-relaxed"
        style={{
          textShadow: "0 2px 12px rgba(0,0,0,0.8)",
        }}
      >
        Your's trusted partner for Overseas Education & Healthcare Recruitment.
        We turn your dream of studying or working abroad into reality.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/enquiry"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300"
        >
          Free Counselling
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          to="/jobs-germany"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-all duration-300"
        >
          Jobs in Germany
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Slider Indicators */}
  <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
          currentImage === index
            ? "w-8 bg-brand-gold"
            : "w-2 bg-white/60"
        }`}
      />
    ))}
  </div>

  {/* Steps Strip */}
  <div className="ar-steps-strip">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {counsellingSteps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="flex flex-col items-center text-center text-white"
          >
            <s.icon className="h-6 w-6 mb-1.5 text-brand-gold" />
            <span className="text-[10px] md:text-xs font-medium leading-tight">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

</section>

        {/* ── ORBITING SERVICES ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary">Our Universe of Services</h2>
              <p className="text-muted-foreground">Eight pillars orbiting one mission — your global career.</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative mx-auto aspect-square" style={{ width: "min(100%, 650px)" }}>
                <div className="ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ width: "78%" }} />
                <div className="ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" style={{ width: "55%" }} />
                <div className="ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-primary/10" style={{ width: "36%" }} />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-48 xl:w-48 rounded-full bg-gradient-brand text-primary-foreground flex flex-col items-center justify-center shadow-glow z-10 text-center px-2"
                  >
                    <span className="ar-deco absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 mb-1 md:mb-2" />
                    <span className="font-display font-bold text-[10px] sm:text-xs md:text-base xl:text-lg leading-tight">AR Overseas</span>
                    <span className="text-[7px] sm:text-[8px] xl:text-[10px] uppercase tracking-widest text-brand-gold mt-0.5 md:mt-1">Trusted Path</span>
                  </motion.div>
                </div>

                {services.map((s, i) => {
                  const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
                  const r = 39;
                  const left = 37 + Math.cos(angle) * r;
                  const top = 40 + Math.sin(angle) * r;
                  return (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, type: "spring" }}
                      whileHover={{ scale: 1.08, zIndex: 20 }}
                      className="absolute group"
                      style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
                    >
                      <div className="relative w-20 sm:w-28 md:w-36 xl:w-40 text-center">
                        <div className="mx-auto h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-2xl rotate-45 bg-gradient-navy shadow-elegant flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-700">
                          <s.icon className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-brand-gold -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700" />
                        </div>
                        <h3 className="font-display font-bold text-secondary mt-1.5 sm:mt-2 md:mt-3 text-[9px] sm:text-[11px] md:text-xs xl:text-sm leading-tight">{s.title}</h3>
                        <p className="hidden sm:block text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground mt-1 leading-snug">{s.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP-BY-STEP PROCESS ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary to-brand-navy">
          <div
            className="ar-deco absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)" }}
          />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="ar-deco absolute h-1 w-1 rounded-full bg-brand-gold/60"
              style={{ left: `${(i * 8.3) % 100}%`, top: `${(i * 17) % 100}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Our Roadmap</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-white font-display">Our Step-by-Step Process</h2>
              <div className="h-0.5 w-24 bg-gradient-gold mx-auto mb-3" />
              <p className="text-white/70 italic">Guiding You to Study Abroad Success</p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <div className="ar-deco absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-red to-brand-gold -translate-x-1/2" />

              {processSteps.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                    className={`relative mb-8 md:mb-14 flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-gradient-brand shadow-glow flex items-center justify-center text-primary-foreground border-2 sm:border-4 border-secondary"
                      >
                        <span className="ar-deco absolute inset-0 rounded-full border-2 border-brand-gold/40 animate-pulse-ring" />
                        <s.icon className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-brand-gold text-secondary text-[9px] sm:text-xs font-bold flex items-center justify-center shadow-md">{s.n}</span>
                      </motion.div>
                    </div>

                    <div className={`w-[44%] ${isLeft ? "pr-8 sm:pr-12 md:pr-16 text-right" : "pl-8 sm:pl-12 md:pl-16 text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="ar-card-clip group relative bg-white/5 border border-white/10 hover:border-brand-gold/50 rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500 shadow-card"
                      >
                        <div className="ar-deco absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <div className={`text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1 ${isLeft ? "text-right" : "text-left"}`}>Step {s.n}</div>
                          <h3 className="font-display font-bold text-white text-xs sm:text-base md:text-xl leading-tight">{s.title}</h3>
                          <p className="hidden sm:block text-xs md:text-sm text-white/70 mt-1.5">{s.desc}</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="w-[44%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ────────────────────────────────────────────────────── */}
        <section className="py-24 bg-muted/40">
          <div className="ar-deco absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-gold opacity-10 blur-3xl" />
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="ar-deco absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" />
              <img src={studentsImg} alt="Happy international students" className="relative rounded-[2.5rem] shadow-elegant w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gradient-brand text-primary-foreground shadow-glow flex flex-col items-center justify-center">
                <div className="text-3xl font-display font-bold">10+</div>
                <div className="text-[10px] uppercase tracking-wider">Years Trust</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Who We Are?</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-secondary">Welcome to AR Overseas Consultancy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your's trusted partner for Overseas Education & Healthcare Recruitment. We are committed to empowering Indian students and nursing professionals with global career opportunities through transparent processes, expert guidance, and trusted European partnerships.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {[["100%", "Career Counselling"], ["100%", "Admission Guidance"], ["100%", "Visa Guidance"]].map(([n, l]) => (
                  <div key={l} className="relative group">
                    <div className="h-28 w-28 bg-gradient-brand rotate-45 rounded-2xl flex items-center justify-center shadow-glow group-hover:rotate-[225deg] transition-transform duration-700">
                      <div className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700 text-center text-primary-foreground">
                        <div className="text-2xl font-display font-bold">{n}</div>
                        <div className="text-[9px] uppercase tracking-wider px-2 leading-tight">{l}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WORLD COUNTRIES ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="ar-deco absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="ar-deco absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Global Reach</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary font-display">Where We Send You</h2>
              <div className="h-0.5 w-24 bg-gradient-brand mx-auto mt-3 mb-3" />
              <p className="text-muted-foreground">Your destination, our expertise — across continents.</p>
            </motion.div>
            <CountryGlobe />
          </div>
        </section>

        {/* ── UNIVERSITY PARTNERS ───────────────────────────────────────────── */}
        {/* ── UNIVERSITY PARTNERS ── clean white background ── */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">

          {/* ── Subtle background accent ── */}
          <div className="ar-deco absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
          <div className="ar-deco absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-gold/8 blur-3xl" />
          <div className="ar-deco absolute bottom-0 right-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">

            {/* ── Header ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
             
              <h2 className="text-4xl md:text-5xl font-bold text-secondary font-display leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-brand-gold to-primary bg-clip-text text-transparent">
                    Universities
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                </span>
              </h2>
            </motion.div>

            {/* ── Scrolling University Strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group/marquee"
            >
              {/* fade edges */}
              <div className="ar-deco absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
              />
              <div className="ar-deco absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
              />

              <div className="overflow-hidden border-y border-border py-8">
                <div
                  className="flex items-stretch"
                  style={{
                    width: "max-content",
                    animation: "marquee-scroll 30s linear infinite",
                  }}
                >
                  {[...universities, ...universities].map((u, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col items-center justify-center gap-3 flex-shrink-0 px-8 cursor-pointer group/item"
                      style={{ minWidth: 170 }}
                    >
                      {/* Logo box */}
                      {/* Logo box */}
<div
  className="relative h-32 w-48 flex items-center justify-center rounded-2xl border-2 border-border group-hover/item:border-primary/40 transition-all duration-300 group-hover/item:scale-105 group-hover/item:-translate-y-1 group-hover/item:shadow-lg bg-white"
>
  <div className="ar-deco absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
    style={{ background: "radial-gradient(circle at center, rgba(var(--primary-rgb, 30,80,200),0.06) 0%, transparent 70%)" }}
  />
<img
  src={u.logo}
  alt={u.name}
  style={{ width: "150px", height: "90px", objectFit: "contain" }}
  className="transition-all duration-300 contrast-125 saturate-150 scale-125 group-hover/item:scale-110"
/>
</div>
                      {/* Name — always visible, dark */}
                      <span className="text-[10px] uppercase tracking-[0.12em] text-secondary/70 group-hover/item:text-primary font-semibold transition-colors duration-300 text-center whitespace-nowrap">
                        {u.name}
                      </span>
                      {/* Separator */}
                      <div className="ar-deco absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-border" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <style>{`
              @keyframes marquee-scroll {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
              .group\\/marquee:hover div[style*="marquee-scroll"] {
                animation-play-state: paused !important;
              }
            `}</style>

            

          </div>
        </section>

        {/* ── WHY CHOOSE + SKILLS ───────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-navy text-secondary-foreground">
          <div
            className="ar-deco absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 10% 20%, var(--brand-gold) 0%, transparent 50%), radial-gradient(circle at 90% 80%, var(--brand-red) 0%, transparent 50%)" }}
          />
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 relative z-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Why Choose Us?</h2>
              <ul className="space-y-3">
                {[
                  "100% Transparent Process",
                  "Expert Counselors with Years of Experience",
                  "Tie-ups with Top German Employers",
                  "End-to-End Support Until Job Joining",
                  "Faster Application & Visa Processing",
                  "Personalized Career Guidance",
                  "Tie-ups with top universities & strong network with German nurse employers",
                ].map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground/90">{t}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Skills of Consultancy</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative h-28 w-28">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                        <motion.circle
                          cx="50" cy="50" r="42"
                          stroke="var(--brand-gold)" strokeWidth="8" fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 42}
                          initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                          whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - s.value / 100) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: i * 0.1, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xl font-display font-bold text-brand-gold">{s.value}%</div>
                    </div>
                    <span className="text-xs mt-3 font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Student Stories</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand rounded-full" />
                  <Quote className="h-10 w-10 text-primary/30 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">{t.name}</div>
                      <div className="flex gap-0.5 text-brand-gold">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="relative py-24">
          <img src={germanyImg} alt="Germany" className="ar-deco absolute inset-0 w-full h-full object-cover" loading="lazy" style={{ zIndex: 0 }} />
          <div className="ar-deco absolute inset-0 bg-gradient-hero" style={{ zIndex: 1 }} />
          <div className="ar-deco absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
            <div className="h-[500px] w-[500px] rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" />
          </div>
          <div className="container mx-auto px-4 text-center text-secondary-foreground max-w-3xl" style={{ position: "relative", zIndex: 2 }}>
            <Sparkles className="h-12 w-12 mx-auto mb-5 text-brand-gold animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Your Global Journey Begins Here</h2>
            <p className="text-lg text-white/85 mb-8">
              Choose AR Overseas Consultancy and make your international career dreams come true.
            </p>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ── NURSE BAND ────────────────────────────────────────────────────── */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Featured</span>
              <h2 className="text-4xl font-bold mt-3 mb-4 text-secondary">Nursing Career in Germany</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Earn 8–10× more than Indian nursing salaries. Work in the world's #4 healthcare system with full family reunification, free education for children, and a clear PR pathway.
              </p>
              <Link to="/jobs-germany" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="ar-deco absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" />
              <img src={nurseImg} alt="Nurse in Germany" className="relative rounded-[2.5rem] shadow-elegant" loading="lazy" />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}