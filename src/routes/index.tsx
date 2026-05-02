import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Stethoscope, Plane, Building2, FileCheck, Languages,
  HeartHandshake, BookOpen, Compass, Award, CheckCircle2, Users, ArrowRight, Quote
} from "lucide-react";
import heroImg from "@/assets/hero-airport.jpg";
import nurseImg from "@/assets/nurse-germany.jpg";
import germanyImg from "@/assets/germany.jpg";
import studentsImg from "@/assets/students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AR Overseas Consultancy — Where Great Things Happen" },
      { name: "description", content: "Your trusted partner for overseas education & healthcare recruitment. Study or work abroad in Germany, UK, USA, Canada, Australia & EU." },
      { property: "og:title", content: "AR Overseas Consultancy — Where Great Things Happen" },
      { property: "og:description", content: "Empowering Indian students & nurses with global career opportunities." },
    ],
  }),
  component: Index,
});

const counsellingSteps = [
  { icon: Compass, label: "Career Counselling" },
  { icon: Plane, label: "Choose your Destination" },
  { icon: BookOpen, label: "Universities / Courses" },
  { icon: Award, label: "Admissions / Scholarships" },
  { icon: FileCheck, label: "Visas" },
  { icon: GraduationCap, label: "Travel" },
];

const services = [
  { icon: Stethoscope, title: "Nursing Jobs in Germany", desc: "Opportunities with top German hospitals." },
  { icon: HeartHandshake, title: "Ausbildung", desc: "Start your international career with Germany's paid vocational training." },
  { icon: GraduationCap, title: "Overseas Education", desc: "Germany, UK, Canada, Australia, USA, NZ & EU countries." },
  { icon: Building2, title: "Healthcare Recruitment", desc: "Hospitals & healthcare institutions across Europe." },
  { icon: FileCheck, title: "Visa Guidance", desc: "Complete documentation support end-to-end." },
  { icon: Languages, title: "German Language Training", desc: "A1 to B2 certification programs." },
  { icon: Plane, title: "Pre & Post Arrival Support", desc: "Assistance until successful settlement." },
  { icon: BookOpen, title: "IELTS / TOEFL / PTE / GRE", desc: "Test prep tailored to your destination." },
];

const countries = [
  { name: "Germany", flag: "🇩🇪" }, { name: "USA", flag: "🇺🇸" }, { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" }, { name: "Australia", flag: "🇦🇺" }, { name: "Ireland", flag: "🇮🇪" },
  { name: "EU Countries", flag: "🇪🇺" },
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
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Student travelling abroad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-secondary-foreground">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-brand-gold border border-white/20 mb-6">
              AR Overseas Consultancy (OPC) Pvt. Ltd.
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Where Great <span className="text-gradient-brand bg-gradient-gold bg-clip-text text-transparent">Things</span> Happen.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
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
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 py-5 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {counsellingSteps.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="flex flex-col items-center text-center text-white">
                  <s.icon className="h-6 w-6 mb-1.5 text-brand-gold" />
                  <span className="text-[11px] md:text-xs font-medium">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary">Our Major Services</h2>
            <p className="text-muted-foreground">Expert solutions for your global career.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all duration-500 border border-border hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-500">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <img src={studentsImg} alt="Happy international students" className="rounded-3xl shadow-elegant w-full" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-brand text-primary-foreground rounded-2xl p-6 shadow-glow hidden md:block">
              <div className="text-4xl font-display font-bold">10+</div>
              <div className="text-xs uppercase tracking-wider">Years of Trust</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Who We Are?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-secondary">Welcome to AR Overseas Consultancy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your trusted partner for Overseas Education & Healthcare Recruitment. We are committed to empowering Indian students and nursing professionals with global career opportunities through transparent processes, expert guidance, and trusted European partnerships.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[["100%", "Career Counselling"], ["100%", "Admission Guidance"], ["100%", "Visa Guidance"]].map(([n, l]) => (
                <div key={l} className="text-center bg-card rounded-2xl p-5 shadow-card border border-border">
                  <div className="text-3xl font-display font-bold text-gradient-brand">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Our Countries</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl px-7 py-5 shadow-card hover:shadow-elegant transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span className="text-3xl">{c.flag}</span>
                <span className="font-semibold text-secondary">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + SKILLS */}
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
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Skills of Consultancy</h2>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{s.label}</span>
                    <span className="text-brand-gold font-bold">{s.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-brand rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Student Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant border border-border transition-all duration-500 relative"
              >
                <Quote className="h-10 w-10 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Student</div>
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
        <div className="container mx-auto px-4 relative z-10 text-center text-secondary-foreground max-w-3xl">
          <Users className="h-12 w-12 mx-auto mb-5 text-brand-gold" />
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
          <img src={nurseImg} alt="Nurse in Germany" className="rounded-3xl shadow-elegant" loading="lazy" />
        </div>
      </section>
    </>
  );
}
