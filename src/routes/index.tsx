import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Stethoscope, Plane, Building2, FileCheck, Languages,
  HeartHandshake, BookOpen, Compass, Award, CheckCircle2, ArrowRight, Quote, Star, Sparkles
} from "lucide-react";
import heroImg from "@/assets/hero-airport.jpg";
import nurseImg from "@/assets/nurse-germany.jpg";
import germanyImg from "@/assets/germany.jpg";
import studentsImg from "@/assets/students.jpg";

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

// Country positions on a stylised world map (% coords)
const countries = [
  { name: "USA", flag: "🇺🇸", x: 20, y: 38 },
  { name: "Canada", flag: "🇨🇦", x: 22, y: 22 },
  { name: "UK", flag: "🇬🇧", x: 46, y: 28 },
  { name: "Ireland", flag: "🇮🇪", x: 43, y: 30 },
  { name: "Germany", flag: "🇩🇪", x: 51, y: 30 },
  { name: "EU", flag: "🇪🇺", x: 49, y: 38 },
  { name: "Australia", flag: "🇦🇺", x: 82, y: 72 },
];

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

          {/* Desktop: orbit layout. Mobile/Tablet: zig-zag timeline */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative mx-auto" style={{ width: "min(100%, 880px)", height: "min(72vw, 720px)" }}>
              {/* Concentric rings — sized as percentages so they always fit */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ width: "62%", height: "82%" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" style={{ width: "48%", height: "64%" }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" style={{ width: "32%", height: "44%" }} />

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-40 w-40 xl:h-48 xl:w-48 rounded-full bg-gradient-brand text-primary-foreground flex flex-col items-center justify-center shadow-glow z-10 text-center px-4"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                  <Sparkles className="h-7 w-7 mb-2" />
                  <span className="font-display font-bold text-base xl:text-lg leading-tight">AR Overseas</span>
                  <span className="text-[9px] xl:text-[10px] uppercase tracking-widest text-brand-gold mt-1">Trusted Path</span>
                </motion.div>
              </div>

              {/* Orbiting service nodes — positioned via percentages (ellipse) so they scale */}
              {services.map((s, i) => {
                const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
                // ellipse radii as % of container
                const rx = 38; // horizontal radius %
                const ry = 42; // vertical radius %
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
                    <div className="relative w-36 xl:w-40 text-center">
                      <div className="mx-auto h-16 w-16 xl:h-20 xl:w-20 rounded-2xl rotate-45 bg-gradient-navy shadow-elegant flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-700">
                        <s.icon className="h-7 w-7 xl:h-8 xl:w-8 text-brand-gold -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700" />
                      </div>
                      <h3 className="font-display font-bold text-secondary mt-3 text-xs xl:text-sm leading-tight">{s.title}</h3>
                      <p className="text-[10px] xl:text-[11px] text-muted-foreground mt-1 leading-snug">{s.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/tablet: zig-zag timeline */}
          <div className="lg:hidden relative max-w-xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-brand-gold to-secondary -translate-x-1/2" />
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex items-center mb-8 ${i % 2 ? "justify-end" : "justify-start"}`}
              >
                <div className={`w-[44%] ${i % 2 ? "text-left pl-4" : "text-right pr-4"}`}>
                  <h3 className="font-display font-bold text-secondary text-base leading-tight">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 h-12 w-12 rotate-45 bg-gradient-brand shadow-glow flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary-foreground -rotate-45" />
                </div>
              </motion.div>
            ))}
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

      {/* WORLD MAP COUNTRIES */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Our Countries</h2>
            <p className="text-muted-foreground mt-3">Pinned across continents — your destination, our expertise.</p>
          </div>

          <div className="relative max-w-5xl mx-auto aspect-[2/1] rounded-3xl bg-gradient-navy overflow-hidden shadow-elegant">
            {/* Dotted world map background */}
            <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
              <defs>
                <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.4" fill="var(--brand-gold)" />
                </pattern>
              </defs>
              <rect width="200" height="100" fill="url(#dots)" />
            </svg>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {countries.slice(1).map((c, i) => (
                <line
                  key={c.name}
                  x1={`${countries[0].x}%`} y1={`${countries[0].y}%`}
                  x2={`${c.x}%`} y2={`${c.y}%`}
                  stroke="var(--brand-gold)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
                  className="animate-dash"
                  style={{ strokeDashoffset: i * 20 }}
                />
              ))}
            </svg>

            {/* Country pins */}
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              >
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-brand-gold/40 animate-pulse-ring" />
                  <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full bg-white shadow-glow flex items-center justify-center text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300">
                    {c.flag}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 rounded-full bg-brand-gold text-secondary text-[10px] md:text-xs font-bold whitespace-nowrap">
                    {c.name}
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
