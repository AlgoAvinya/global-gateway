import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, GraduationCap, Stethoscope, FileCheck, Languages, HeartHandshake, Building2, Plane, BookOpen, ChevronDown, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — AR Overseas Consultancy (OPC) Pvt. Ltd." },
      { name: "description", content: "Study abroad with AR Overseas Hyderabad. Expert guidance for USA, UK, Canada, Australia, Germany & Europe with high success rate." },
      { property: "og:title", content: "Services — AR Overseas Consultancy" },
      { property: "og:description", content: "End-to-end study abroad and recruitment services from Hyderabad." },
    ],
  }),
  component: Services,
});

const allServices = [
  {
    icon: GraduationCap,
    title: "Overseas Education",
    short: "Germany, UK, Canada, Australia, USA & EU.",
    details: [
      "End-to-end admissions for Bachelor's and Master's programs.",
      "Direct tie-ups with top UK universities for fast-track admits.",
      "Profile evaluation, university shortlisting and SOP/LOR support.",
      "Scholarship & education-loan assistance.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Nursing Jobs in Germany",
    short: "Placements with top German hospitals.",
    details: [
      "Direct recruitment via certified German employers.",
      "Salary €2,500–€3,400/month with family reunification.",
      "Free German language training (A1 → B2).",
      "Visa, recognition and on-arrival support.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Ausbildung Support",
    short: "Germany's paid vocational training pathway.",
    details: [
      "Earn while you learn — monthly stipend, no tuition.",
      "Healthcare, IT, mechatronics, hospitality, logistics & more.",
      "Globally recognised certification + PR pathway.",
      "Application, employer matching and visa support.",
    ],
  },
  {
    icon: Building2,
    title: "Healthcare & Hospital Recruitment",
    short: "Trusted European partnerships.",
    details: [
      "Hospitals & elderly-care facilities across Germany & EU.",
      "Ethical recruitment with full documentation.",
      "Interview preparation with German employers.",
      "Adaptation & integration programs.",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Guidance & Documentation",
    short: "Complete filing & interview prep.",
    details: [
      "Student, work, dependent and spouse visa filings.",
      "Document translation, attestation and registration.",
      "Mock interviews for embassy & employer screenings.",
      "Real-time tracking until visa stamping.",
    ],
  },
  {
    icon: Languages,
    title: "German Language Training",
    short: "A1 to B2 with certified trainers.",
    details: [
      "Morning, evening, online and offline batches.",
      "Goethe, telc and ÖSD exam preparation.",
      "20+ model papers, mentor support and mock tests.",
      "Healthcare-specific German for nurses.",
    ],
  },
  {
    icon: BookOpen,
    title: "Career Counseling",
    short: "Personalized country & course guidance.",
    details: [
      "1-on-1 profile evaluation by senior counsellors.",
      "Country, course and university shortlisting.",
      "ROI, scholarship and post-study work mapping.",
      "Honest, transparent advice — no hidden costs.",
    ],
  },
  {
    icon: Plane,
    title: "Pre-departure & Post-arrival",
    short: "Travel, accommodation & settlement.",
    details: [
      "Forex, travel and airport pickup arrangements.",
      "Accommodation guidance before you fly.",
      "Adaptation program & local cultural orientation.",
      "Family reunification support after arrival.",
    ],
  },
];

const destinations = [
  { name: "USA", flag: "🇺🇸", duration: "MS / 1.5–2 yrs", psw: "Up to 3 yrs (STEM OPT)", programs: ["MS in Computer Science", "Data Science / AI", "Cyber Security", "Engineering", "MBA / MIS"] },
  { name: "United Kingdom", flag: "🇬🇧", duration: "1 Year Master's", psw: "2 Years Graduate Route", programs: ["MSc Management", "Data Analytics", "Cyber Security", "MBA", "Healthcare"] },
  { name: "Canada", flag: "🇨🇦", duration: "Master's & PG", psw: "Up to 3 yrs PGWP", programs: ["Engineering & CS", "MBA / Public Health", "Project Management", "Supply Chain"] },
  { name: "Australia", flag: "🇦🇺", duration: "Master's", psw: "2–4 Years", programs: ["IT / Computer Science", "Engineering", "Data Science", "Accounting & Nursing"] },
  { name: "Germany", flag: "🇩🇪", duration: "MS Programs", psw: "18-Month Job Search Visa", programs: ["MS Computer Science", "Engineering", "MBA", "Biotech / Healthcare"] },
  { name: "Europe", flag: "🇪🇺", duration: "Affordable Master's", psw: "1–3 Years", programs: ["Engineering & Tech", "Data Science", "MBA", "Health Sciences"] },
  { name: "New Zealand", flag: "🇳🇿", duration: "Master's", psw: "Up to 3 Years", programs: ["Engineering & IT", "Applied Management", "Public Health", "Agriculture"] },
  { name: "Ireland", flag: "🇮🇪", duration: "1 Year Master's", psw: "Up to 2 Years", programs: ["MSc Computing", "Data Analytics", "Business", "Pharma & Biotech"] },
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
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageHero title="Our Services" crumb="Services" subtitle="From career counselling to landing your dream country — AR Overseas Consultancy (OPC) Pvt. Ltd. handles every step." />

      {/* What We Offer — clickable expand panel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Complete Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary font-display">What We Offer</h2>
            <p className="text-muted-foreground">Click any card to explore what's included.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr,1.4fr] gap-6">
            {/* Service list */}
            <div className="space-y-3">
              {allServices.map((s, i) => {
                const active = openIdx === i;
                return (
                  <motion.button
                    key={s.title}
                    type="button"
                    onClick={() => setOpenIdx(active ? null : i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${active ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow" : "bg-card border-border hover:border-brand-gold hover:shadow-card"}`}
                  >
                    <div className={`h-11 w-11 rounded-xl grid place-items-center flex-shrink-0 transition-colors ${active ? "bg-white/20" : "bg-accent"}`}>
                      <s.icon className={`h-5 w-5 ${active ? "text-white" : "text-primary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-display font-bold ${active ? "text-white" : "text-secondary"}`}>{s.title}</div>
                      <div className={`text-xs mt-0.5 ${active ? "text-white/80" : "text-muted-foreground"}`}>{s.short}</div>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${active ? "rotate-180 text-white" : "text-muted-foreground"}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Active detail panel */}
            <div className="relative min-h-[400px] rounded-3xl bg-gradient-to-br from-card to-accent/30 border border-border shadow-elegant overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 50%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 50%)" }} />
              <AnimatePresence mode="wait">
                {openIdx !== null && (
                  <motion.div
                    key={openIdx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative p-8 md:p-10 h-full"
                  >
                    {(() => {
                      const s = allServices[openIdx];
                      const Icon = s.icon;
                      return (
                        <>
                          <div className="flex items-center gap-4 mb-5">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow">
                              <Icon className="h-7 w-7 text-primary-foreground" />
                            </div>
                            <div>
                              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Service</span>
                              <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary">{s.title}</h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground italic mb-6">{s.short}</p>
                          <ul className="space-y-3">
                            {s.details.map((d) => (
                              <motion.li
                                key={d}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-3 bg-white/60 backdrop-blur rounded-xl p-3 border border-border/60"
                              >
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/85 text-sm">{d}</span>
                              </motion.li>
                            ))}
                          </ul>
                          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                            AR Overseas Consultancy (OPC) Pvt. Ltd.
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations We Offer — world map background + flags */}
      <section className="relative py-20 bg-muted/40 overflow-hidden">
        {/* Background world map */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <g className="text-secondary">
            {/* Stylised continents as soft shapes */}
            <path d="M150,140 Q230,90 320,150 T420,180 Q360,230 280,240 T160,220 Z" fill="url(#dots)" />
            <path d="M430,130 Q510,100 600,140 T720,180 Q650,230 560,240 T450,200 Z" fill="url(#dots)" />
            <path d="M460,260 Q540,240 600,300 T660,360 Q580,400 500,380 T440,320 Z" fill="url(#dots)" />
            <path d="M740,300 Q820,290 870,340 T900,400 Q820,420 760,400 T720,350 Z" fill="url(#dots)" />
            <path d="M180,300 Q260,290 320,340 T360,400 Q280,420 220,400 T160,350 Z" fill="url(#dots)" />
          </g>
        </svg>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Study Abroad</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary font-display">Destinations We Offer</h2>
            <p className="text-muted-foreground mt-3">Eight world-class destinations · One trusted partner.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant border border-border hover:border-brand-gold transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500 select-none">{d.flag}</div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl" aria-hidden>{d.flag}</span>
                    <h3 className="font-display text-2xl font-bold text-secondary">{d.name}</h3>
                  </div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{d.duration}</div>
                  <div className="text-xs text-muted-foreground mb-5">PSW: {d.psw}</div>
                  <ul className="space-y-1.5">
                    {d.programs.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-secondary font-display">Frequently Asked Questions</h2>
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
