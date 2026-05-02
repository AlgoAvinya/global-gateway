import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Stethoscope, FileCheck, Languages, HeartHandshake, Building2, Plane, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Overseas Education Experts | AR Overseas Consultancy" },
      { name: "description", content: "Study abroad with AR Overseas Hyderabad. Expert guidance for USA, UK, Canada, Australia, Germany & Europe with high success rate." },
      { property: "og:title", content: "Services — AR Overseas Consultancy" },
      { property: "og:description", content: "End-to-end study abroad and recruitment services from Hyderabad." },
    ],
  }),
  component: Services,
});

const allServices = [
  { icon: GraduationCap, title: "Overseas Education", desc: "Germany, UK, Canada, Australia, USA & EU." },
  { icon: Stethoscope, title: "Nursing Jobs in Germany", desc: "End-to-end placement with top German hospitals." },
  { icon: HeartHandshake, title: "Ausbildung Support", desc: "Germany's paid vocational training pathway." },
  { icon: Building2, title: "Healthcare & Hospital Recruitment", desc: "Trusted European partnerships." },
  { icon: FileCheck, title: "Visa Guidance & Documentation", desc: "Complete filing & interview prep." },
  { icon: Languages, title: "German Language Training", desc: "A1 to B2 with certified trainers." },
  { icon: BookOpen, title: "Career Counseling", desc: "Personalized country & course guidance." },
  { icon: Plane, title: "Pre-departure & Post-arrival", desc: "Travel, accommodation & settlement." },
];

const destinations = [
  { name: "USA", duration: "MS / 1.5–2 yrs", psw: "Up to 3 yrs (STEM OPT)", programs: ["MS in Computer Science", "Data Science / AI", "Cyber Security", "Engineering", "MBA / MIS"] },
  { name: "United Kingdom", duration: "1 Year Master's", psw: "2 Years Graduate Route", programs: ["MSc Management", "Data Analytics", "Cyber Security", "MBA", "Healthcare"] },
  { name: "Canada", duration: "Master's & PG", psw: "Up to 3 yrs PGWP", programs: ["Engineering & CS", "MBA / Public Health", "Project Management", "Supply Chain"] },
  { name: "Australia", duration: "Master's", psw: "2–4 Years", programs: ["IT / Computer Science", "Engineering", "Data Science", "Accounting & Nursing"] },
  { name: "Germany", duration: "MS Programs", psw: "18-Month Job Search Visa", programs: ["MS Computer Science", "Engineering", "MBA", "Biotech / Healthcare"] },
  { name: "Europe", duration: "Affordable Master's", psw: "1–3 Years", programs: ["Engineering & Tech", "Data Science", "MBA", "Health Sciences"] },
  { name: "New Zealand", duration: "Master's", psw: "Up to 3 Years", programs: ["Engineering & IT", "Applied Management", "Public Health", "Agriculture"] },
];

const faqs = [
  { q: "Is IELTS mandatory to study abroad?", a: "No. IELTS is waivable in many universities based on academic background and medium of instruction." },
  { q: "Can I apply with an education gap?", a: "Yes. Education gaps are accepted case-by-case with proper justification." },
  { q: "Do you help with education loans?", a: "Yes. We assist with bank and NBFC loans and scholarships." },
  { q: "What is the minimum percentage required?", a: "Most universities accept 50–60%, depending on country and course." },
  { q: "Is free counselling available?", a: "Yes. We provide 100% free career counselling." },
  { q: "Which country is best for PR?", a: "Canada, Australia and New Zealand offer clear PR pathways." },
];

function Services() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary">What We Offer</h2>
            <p className="text-muted-foreground">From career counselling to landing your dream country — we handle every step.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant border border-border hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Study Abroad</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Destinations We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant border border-border transition-all duration-500"
              >
                <h3 className="font-display text-2xl font-bold text-secondary mb-1">{d.name}</h3>
                <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{d.duration}</div>
                <div className="text-xs text-muted-foreground mb-5">PSW: {d.psw}</div>
                <ul className="space-y-1.5">
                  {d.programs.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary">Frequently Asked Questions</h2>
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
                <summary className="cursor-pointer list-none p-6 flex items-center justify-between font-semibold text-secondary">
                  {f.q}
                  <span className="ml-4 h-8 w-8 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
