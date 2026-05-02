import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Euro, Users, Plane, Shield, Heart, Building2, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import nurseImg from "@/assets/nurse-germany.jpg";
import germanyImg from "@/assets/germany.jpg";

export const Route = createFileRoute("/jobs-germany")({
  head: () => ({
    meta: [
      { title: "Nursing Jobs in Germany — AR Overseas Consultancy" },
      { name: "description", content: "Achieve your German nursing dream. €2,500–€3,400/month, family reunification, free education for children, PR in 3 years." },
      { property: "og:title", content: "Nursing Jobs in Germany" },
      { property: "og:description", content: "Trusted pathway to a successful nursing career in Germany." },
      { property: "og:image", content: "/src/assets/nurse-germany.jpg" },
    ],
  }),
  component: Jobs,
});

const stats = [
  { icon: Users, value: "200K+", label: "Vacancies" },
  { icon: Euro, value: "€3,400", label: "Monthly Salary" },
  { icon: Building2, value: "#4", label: "Healthcare Globally" },
  { icon: Shield, value: "5–6 Yrs", label: "To Citizenship" },
];

const benefits = [
  { icon: Euro, title: "Multiply Your Earnings", desc: "Earn 8–10× more than Indian nursing salaries." },
  { icon: Users, title: "Family Reunification", desc: "Bring spouse & children — spouse can work too." },
  { icon: Heart, title: "Free Education for Children", desc: "From primary school all the way to PhD." },
  { icon: Award, title: "Permanent Residency", desc: "PR after 3 years; citizenship in 5–6 years." },
];

const steps = [
  "Initial Career Consultation",
  "Document Submission",
  "German Language Training (A1 → B1/B2)",
  "Interview Preparation",
  "Online Interviews with German Employers",
  "Receive Offer Letter",
  "Document Translation & Registration",
  "State Approval Documents",
  "Visa & Recognition Support",
  "Fly to Germany & Start Career",
];

function Jobs() {
  return (
    <>
      <PageHero title="Jobs In Germany" crumb="Jobs In Germany" />

      <section className="relative py-20 overflow-hidden">
        <img src={germanyImg} alt="Germany" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-10 items-center text-secondary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4">Trusted Pathway</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Achieve Your German Nursing Dream</h1>
            <p className="text-white/85 leading-relaxed mb-6">
              We help qualified Indian nurses secure high-paying jobs in Germany through official recruitment partnerships — language training, documentation, interview prep, placement and visa assistance.
            </p>
            <Link to="/enquiry" className="inline-flex items-center rounded-full bg-gradient-brand px-7 py-3.5 font-semibold shadow-glow hover:scale-105 transition-transform">
              Apply Now
            </Link>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={nurseImg}
            alt="Nurse in Germany"
            loading="lazy"
            className="rounded-3xl shadow-elegant"
          />
        </div>
      </section>

      <section className="py-16 bg-background">
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

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Germany</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Career Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Eligibility</span>
            <h2 className="text-4xl font-bold mt-3 mb-6 text-secondary">Who Can Apply?</h2>
            <ul className="space-y-3">
              {[
                "Registered Nurse with valid license",
                "GNM / B.Sc / M.Sc Nursing qualification",
                "1–2 years experience preferred (freshers welcome)",
                "German Language B1 / B2 (Goethe, telc, ÖSD)",
                "Age preferred below 42 years",
                "Valid passport & medical fitness",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-card transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">German Language</span>
            <h2 className="text-4xl font-bold mt-3 mb-6 text-secondary">Certification Levels</h2>
            <div className="space-y-3">
              {[
                ["A1", "Beginner", "Basic vocabulary, self-introduction"],
                ["A2", "Elementary", "Daily conversations & basic interaction"],
                ["B1", "Intermediate", "Workplace & patient care communication"],
                ["B2", "Proficient", "Professional medical communication"],
                ["C1", "Advanced", "Complex medical discussions & reports"],
                ["C2", "Mastery", "Native-level professional fluency"],
              ].map(([lvl, name, desc], i) => (
                <motion.div
                  key={lvl}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                    {lvl}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{name}</div>
                    <div className="text-sm text-muted-foreground">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">End-to-End Support</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Application Process</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">A simple, transparent 10-step journey from consultation to your nursing job in Germany.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center font-bold flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-secondary-foreground/95 font-medium">{s}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow hover:scale-105 transition-transform">
              <Plane className="h-4 w-4" /> Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
