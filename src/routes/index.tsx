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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR Overseas Consultancy — Education to Employment, Your Trusted Path" },
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
  { icon: HeartHandshake, title: "Ausbildung", desc: "Germany's paid vocational training." },
  { icon: GraduationCap, title: "Overseas Education", desc: "Germany, UK, Canada, Australia, USA, NZ & EU." },
  { icon: Building2, title: "Healthcare Recruitment", desc: "Hospitals & institutions across Europe." },
  { icon: FileCheck, title: "Visa Guidance", desc: "Complete documentation support end-to-end." },
  { icon: Languages, title: "German Language", desc: "A1 to B2 certification programs." },
  { icon: Plane, title: "Pre & Post Arrival", desc: "Assistance until successful settlement." },
  { icon: BookOpen, title: "IELTS / TOEFL / PTE / GRE", desc: "Test prep tailored to your destination." },
];

// Country list moved to src/data/countries.ts (used by CountryGlobe)

const skills = [
  { label: "Student Visas", value: 100 },
  { label: "Spouse Visas", value: 100 },
  { label: "Business Visas", value: 100 },
  { label: "Immigration", value: 100 },
  { label: "Student Loans", value: 100 },
];

const testimonials = [
  { name: "Sai Madhav", text: "I will recommend AR to my friends and others. The information I got from Harsha bro about Germany is genuine and unbiased. With the information I had forehand, I did not come across any surprises when I landed in Germany." },
  { name: "Vijay Kumar", text: "It has been an amazing experience with AR. From counselling, until I arrived in Germany, AR took care of everything. I should also thank Anil Kumar for receiving me and guiding me to settle down quickly." },
  { name: "Ram Reddy", text: "My experience with AR was very good. Anil Kumar sir assisted me in selection of university and course. The best part is AR helped me find an accommodation before I arrived." },
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
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Student travelling abroad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Floating decorative rings */}
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-brand-gold/20 animate-spin-slow hidden md:block" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full border-2 border-dashed border-white/10 animate-counter-spin hidden md:block" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-secondary-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-brand-gold border border-white/20 mb-6">
              <Sparkles className="h-3 w-3" /> AR Overseas Consultancy (OPC) Pvt. Ltd.
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Education to <span className="text-gradient-brand bg-gradient-gold bg-clip-text text-transparent">Employment</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 font-display italic text-white/90">Your Trusted Path.</span>
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
              Your trusted partner for Overseas Education & Healthcare Recruitment. We turn your dream of studying or working abroad into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300">
                Free Counselling <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/jobs-germany" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-all duration-300">
                Jobs in Germany
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Counselling steps strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 py-4 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {counsellingSteps.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="flex flex-col items-center text-center text-white">
                  <s.icon className="h-6 w-6 mb-1.5 text-brand-gold" />
                  <span className="text-[10px] md:text-xs font-medium leading-tight">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORBITING SERVICES */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary">Our Universe of Services</h2>
            <p className="text-muted-foreground">Eight pillars orbiting one mission — your global career.</p>
          </div>

          {/* Orbit layout — same on all devices */}
          <div className="flex items-center justify-center">
            <div className="relative mx-auto" style={{ width: "min(100%, 880px)", height: "min(110vw, 720px)" }}>
              {/* Concentric rings — sized as percentages so they always fit */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ width: "62%", height: "82%" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" style={{ width: "48%", height: "64%" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" style={{ width: "32%", height: "44%" }} />

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-48 xl:w-48 rounded-full bg-gradient-brand text-primary-foreground flex flex-col items-center justify-center shadow-glow z-10 text-center px-2"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 mb-1 md:mb-2" />
                  <span className="font-display font-bold text-[10px] sm:text-xs md:text-base xl:text-lg leading-tight">AR Overseas</span>
                  <span className="text-[7px] sm:text-[8px] xl:text-[10px] uppercase tracking-widest text-brand-gold mt-0.5 md:mt-1">Trusted Path</span>
                </motion.div>
              </div>

              {/* Orbiting service nodes — positioned via percentages (ellipse) so they scale */}
              {services.map((s, i) => {
                const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
                const rx = 38;
                const ry = 42;
                const left = 50 + Math.cos(angle) * rx;
                const top = 50 + Math.sin(angle) * ry;
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

      {/* STEP-BY-STEP PROCESS — interactive staircase */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)" }} />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-gold/60"
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

          {/* Staircase layout — works on all sizes */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-red to-brand-gold -translate-x-1/2" />

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
                  {/* Number badge on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-gradient-brand shadow-glow flex items-center justify-center text-primary-foreground border-2 sm:border-4 border-secondary"
                    >
                      <span className="absolute inset-0 rounded-full border-2 border-brand-gold/40 animate-pulse-ring" />
                      <s.icon className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-brand-gold text-secondary text-[9px] sm:text-xs font-bold flex items-center justify-center shadow-md">{s.n}</span>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`w-[44%] ${isLeft ? "pr-8 sm:pr-12 md:pr-16 text-right" : "pl-8 sm:pl-12 md:pl-16 text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-gold/50 rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500 shadow-card overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className={`text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1 ${isLeft ? "text-right" : "text-left"}`}>Step {s.n}</div>
                        <h3 className="font-display font-bold text-white text-xs sm:text-base md:text-xl leading-tight">{s.title}</h3>
                        <p className="hidden sm:block text-xs md:text-sm text-white/70 mt-1.5">{s.desc}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="w-[44%]" />

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-gold opacity-10 blur-3xl" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            {/* Rotating frame */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" />
            <img src={studentsImg} alt="Happy international students" className="relative rounded-[2.5rem] shadow-elegant w-full" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gradient-brand text-primary-foreground shadow-glow flex flex-col items-center justify-center">
              <div className="text-3xl font-display font-bold">10+</div>
              <div className="text-[10px] uppercase tracking-wider">Years Trust</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Who We Are?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-secondary">Welcome to AR Overseas Consultancy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your trusted partner for Overseas Education & Healthcare Recruitment. We are committed to empowering Indian students and nursing professionals with global career opportunities through transparent processes, expert guidance, and trusted European partnerships.
            </p>
            {/* Hexagon stat row */}
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

      {/* WORLD COUNTRIES — globe-style hub */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

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

      {/* UNIVERSITY PARTNERS — single creative tile grid */}
      <section className="py-20 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Trusted Partners</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3 text-secondary font-display">Our Partner Universities</h2>
            <div className="h-0.5 w-24 bg-gradient-brand mx-auto mb-3" />
            <p className="text-muted-foreground">Direct admission tie-ups with leading UK universities.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-5xl mx-auto">
            {universities.map((u, i) => (
              <motion.div
                key={u.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 bg-card rounded-2xl shadow-card hover:shadow-elegant border border-border group-hover:border-brand-gold/60 transition-all duration-500 overflow-hidden flex flex-col">
                  <div className="h-1.5 bg-gradient-brand group-hover:h-2 transition-all" />
                  <div className="flex-1 flex items-center justify-center p-5 bg-gradient-to-b from-white to-muted/30">
                    <img
                      src={u.logo}
                      alt={u.name}
                      loading="lazy"
                      className="max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + SKILLS (CIRCULAR PROGRESS) */}
      <section className="py-24 bg-gradient-navy text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, var(--brand-gold) 0%, transparent 50%), radial-gradient(circle at 90% 80%, var(--brand-red) 0%, transparent 50%)" }} />
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

      {/* TESTIMONIALS — quote ribbon */}
      <section className="py-24 bg-background relative overflow-hidden">
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

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={germanyImg} alt="Germany" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[500px] w-[500px] rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-secondary-foreground max-w-3xl">
          <Sparkles className="h-12 w-12 mx-auto mb-5 text-brand-gold animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Your Global Journey Begins Here</h2>
          <p className="text-lg text-white/85 mb-8">
            Choose AR Overseas Consultancy and make your international career dreams come true.
          </p>
          <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Nurse band */}
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
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" />
            <img src={nurseImg} alt="Nurse in Germany" className="relative rounded-[2.5rem] shadow-elegant" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
