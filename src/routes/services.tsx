import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Stethoscope,
  FileCheck,
  Languages,
  HeartHandshake,
  Building2,
  Plane,
  BookOpen,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Shield,
  Users,
  Award,
} from "lucide-react";
import heroDefault from "@/assets/services.png";

// ─── Flag / Map image imports ─────────────────────────────────────────────────
import flagUS from "@/assets/unitedstates.png";
import flagGB from "@/assets/unitedkingdom.png";
import flagCA from "@/assets/canada.png";
import flagAU from "@/assets/australia.png";
import flagDE from "@/assets/germany.png";
import flagEU from "@/assets/europe.png";
import flagNZ from "@/assets/newzealand.png";
import flagIE from "@/assets/ireland.png";

import mapUS from "@/assets/usamap.png";
import mapGB from "@/assets/ukmap.png";
import mapCA from "@/assets/canadamap.png";
import mapAU from "@/assets/australiamap.png";
import mapDE from "@/assets/germanymap.png";
import mapEU from "@/assets/europemap.png";
import mapNZ from "@/assets/newzealandmap.png";
import mapIE from "@/assets/irelandmap.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — AR Overseas Consultancy (OPC) Pvt. Ltd." },
      {
        name: "description",
        content:
          "Study abroad with AR Overseas Hyderabad. Expert guidance for USA, UK, Canada, Australia, Germany & Europe. Nursing jobs, Ausbildung, visa guidance and German language training.",
      },
      { property: "og:title", content: "Services — AR Overseas Consultancy" },
      {
        property: "og:description",
        content: "End-to-end study abroad and recruitment services from Hyderabad.",
      },
    ],
  }),
  component: Services,
});

// ─── Animation constants ──────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };

// ─── Data ─────────────────────────────────────────────────────────────────────
const STRIP = [
  "AR Overseas Consultancy (OPC) Pvt. Ltd.",
  "Education to Employment — Your's Trusted Path",
  "Germany · UK · USA · Canada · Australia · Ireland",
  "Nursing Jobs · Ausbildung · Study Abroad",
  "100% End-to-End Support",
];

// CHANGED: service 06 label updated to include IELTS/GRE/TOEFL/PTE
const TABS = [
  { id: "overseas",   icon: GraduationCap,  label: "Overseas Education",                              short: "Education",   color: "from-blue-700 to-blue-900",         activeText: "text-blue-100" },
  { id: "nursing",    icon: Stethoscope,    label: "Nursing Jobs in Germany",                         short: "Nursing",     color: "from-red-600 to-red-700",           activeText: "text-red-100" },
  { id: "ausbildung", icon: HeartHandshake, label: "Ausbildung Program",                                      short: "Ausbildung",  color: "from-orange-500 to-red-600",        activeText: "text-orange-100" },
  { id: "healthcare", icon: Building2,      label: "Healthcare Recruitment",                          short: "Healthcare",  color: "from-teal-600 to-blue-700",         activeText: "text-teal-100" },
  { id: "visa",       icon: FileCheck,      label: "Visa Guidance",                                   short: "Visa",        color: "from-blue-600 to-blue-800",         activeText: "text-blue-100" },
  { id: "language",   icon: Languages,      label: "German Language A1–B2, IELTS, GRE, TOEFL & PTE", short: "Language",    color: "from-yellow-500 to-red-600",        activeText: "text-yellow-100" },
  { id: "career",     icon: BookOpen,       label: "Career Counselling",                              short: "Career",      color: "from-red-600 to-blue-800",          activeText: "text-red-100" },
  { id: "departure",  icon: Plane,          label: "Pre & Post Departure",                            short: "Departure",   color: "from-blue-700 to-red-700",          activeText: "text-blue-100" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const destinations = [
  {
    name: "USA",
    mapImg: mapUS,
    flagImg: flagUS,
    duration: "MS / 1.5–2 yrs",
    psw: "Up to 3 yrs (STEM OPT)",
    programs: ["MS in Computer Science", "Data Science / AI", "Cyber Security", "Engineering", "MBA / MIS"],
  },
  {
    name: "United Kingdom",
    mapImg: mapGB,
    flagImg: flagGB,
    duration: "1 Year Master's",
    psw: "2 Years Graduate Route",
    programs: ["MSc Management", "Data Analytics", "Cyber Security", "MBA", "Healthcare"],
  },
  {
    name: "Canada",
    mapImg: mapCA,
    flagImg: flagCA,
    duration: "Master's & PG",
    psw: "Up to 3 yrs PGWP",
    programs: ["Engineering & CS", "MBA / Public Health", "Project Management", "Supply Chain"],
  },
  {
    name: "Australia",
    mapImg: mapAU,
    flagImg: flagAU,
    duration: "Master's",
    psw: "2–4 Years",
    programs: ["IT / Computer Science", "Engineering", "Data Science", "Accounting & Nursing"],
  },
  {
    name: "Germany",
    mapImg: mapDE,
    flagImg: flagDE,
    duration: "MS Programs",
    psw: "18-Month Job Search Visa",
    programs: ["MS Computer Science", "Engineering", "MBA", "Biotech / Healthcare"],
  },
  {
    name: "Europe",
    mapImg: mapEU,
    flagImg: flagEU,
    duration: "Affordable Master's",
    psw: "1–3 Years",
    programs: ["Engineering & Tech", "Data Science", "MBA", "Health Sciences"],
  },
  {
    name: "New Zealand",
    mapImg: mapNZ,
    flagImg: flagNZ,
    duration: "Master's",
    psw: "Up to 3 Years",
    programs: ["Engineering & IT", "Applied Management", "Public Health", "Agriculture"],
  },
  {
    name: "Ireland",
    mapImg: mapIE,
    flagImg: flagIE,
    duration: "1 Year Master's",
    psw: "Up to 2 Years",
    programs: ["MSc Computing", "Data Analytics", "Business", "Pharma & Biotech"],
  },
];

const faqs = [
  { q: "Is IELTS mandatory to study abroad?",     a: "No. IELTS is waivable in many universities based on academic background and medium of instruction.", color: "from-blue-50 to-blue-100",    border: "border-blue-200",   num: "bg-blue-700" },
  { q: "Can I apply with an education gap?",       a: "Yes. Education gaps are accepted case-by-case with proper justification and documentation.",          color: "from-red-50 to-red-100",     border: "border-red-200",    num: "bg-red-600" },
  { q: "Do you help with education loans?",        a: "Yes. We assist with bank and NBFC education loans and scholarships.",                                  color: "from-blue-50 to-blue-100",   border: "border-blue-200",   num: "bg-blue-800" },
  { q: "What is the minimum percentage required?", a: "Most universities accept 50–60%, depending on country and course.",                                    color: "from-red-50 to-red-100",     border: "border-red-200",    num: "bg-red-700" },
  { q: "Is free counselling available?",           a: "Yes. We provide 100% free career counselling.",                                                        color: "from-blue-50 to-blue-100",   border: "border-blue-200",   num: "bg-blue-700" },
  { q: "Which country is best for PR?",            a: "Canada, Australia and New Zealand offer clear PR pathways.",                                            color: "from-red-50 to-red-100",     border: "border-red-200",    num: "bg-red-600" },
];

const langLevels = [
  { code: "A1", name: "Beginner",     bg: "from-emerald-500 to-teal-600",   shadow: "shadow-emerald-300/50", ring: "ring-emerald-300", points: ["No prior knowledge needed", "Basic grammar & simple sentences", "Introductions & everyday phrases"] },
  { code: "A2", name: "Elementary",   bg: "from-blue-600 to-blue-700",      shadow: "shadow-blue-300/50",    ring: "ring-blue-300",    points: ["Expanded vocabulary", "Sentence structure building", "Routine social conversations"] },
  { code: "B1", name: "Intermediate", bg: "from-red-500 to-red-600",        shadow: "shadow-red-300/50",     ring: "ring-red-300",     points: ["Workplace-ready communication", "Professional vocabulary", "Required for most Ausbildung & jobs"] },
  { code: "B2", name: "Proficient",   bg: "from-amber-500 to-orange-600",   shadow: "shadow-amber-300/50",   ring: "ring-amber-300",   points: ["Strong grammar mastery", "Fluent professional discussions", "Required for nursing & medical roles"] },
];

const counsellingSteps = [
  { n: "1", title: "Free Initial Assessment",              desc: "No-cost session to understand your academic background, career goals, and financial situation.",                         color: "from-blue-600 to-blue-700",   shadow: "shadow-blue-300/50" },
  { n: "2", title: "Career Goal & Background Analysis",    desc: "Deep-dive into your profile: degrees, scores, work experience, gaps, and long-term aspirations.",                      color: "from-red-500 to-red-600",     shadow: "shadow-red-300/50" },
  { n: "3", title: "Country & Job Market Recommendation",  desc: "Objective comparison of destinations — USA, UK, Canada, Australia, Germany, Europe — based on your profile.",          color: "from-blue-700 to-blue-800",   shadow: "shadow-blue-300/50" },
  { n: "4", title: "Clear Roadmap — Education or Employment",desc: "A written step-by-step plan covering timelines, language requirements, documentation, and costs.",                   color: "from-red-600 to-red-700",     shadow: "shadow-red-300/50" },
  { n: "5", title: "Documentation & Next-Step Guidance",   desc: "Once the path is clear, we move into execution with dedicated support at every stage.",                                color: "from-blue-600 to-red-600",    shadow: "shadow-blue-300/50" },
];

// CHANGED: Student Visa desc updated per PDF
const visaTypes = [
  { icon: "🎓", title: "Student Visa",    bg: "from-blue-600 to-blue-800",  shadow: "shadow-blue-300/50",  desc: "For students admitted to USA, Germany, UK, Canada, Australia, Ireland, Europe and top 27+ Countries universities or language programs. We handle SOP guidance, financial document review, and embassy preparation support." },
  { icon: "💼", title: "Work Visa",       bg: "from-red-500 to-red-700",    shadow: "shadow-red-300/50",   desc: "Skilled worker visa (Fachkräftezuwanderung), Ausbildung visa, and EU Blue Card for highly qualified candidates." },
  { icon: "👨‍👩‍👧", title: "Dependent Visa", bg: "from-blue-700 to-red-600",  shadow: "shadow-blue-300/50",  desc: "For spouses and family members joining you in Germany. We guide through proof of accommodation and family reunification documentation." },
  { icon: "🔍", title: "Job Seeker Visa", bg: "from-red-600 to-blue-700",   shadow: "shadow-red-300/50",   desc: "Enter Germany and search for employment up to 6 months. We assess eligibility and guide through the Chancenkarte (Opportunity Card) if applicable." },
];

// CHANGED: Certified Trainers desc updated per PDF; B2 only (not B1/B2)
const healthcareFeatures = [
  { icon: "🎓", title: "Certified Trainers",    bg: "bg-blue-700",   desc: "All instructors certified in German Language Proficiency." },
  { icon: "📅", title: "Flexible Batches",      bg: "bg-red-600",    desc: "Morning, evening, online and offline options to fit your schedule." },
  { icon: "🏥", title: "Medical Vocabulary",    bg: "bg-blue-800",   desc: "Clinical terminology, patient communication, and workplace German for hospitals." },
  { icon: "📝", title: "Exam Preparation",      bg: "bg-red-700",    desc: "B2 certification prep with 20+ model papers and mock interviews." },
  { icon: "🤝", title: "Employer Placement",    bg: "bg-blue-900",   desc: "Verified hospitals and employer interview support after language training." },
  { icon: "📋", title: "Documentation Support", bg: "bg-red-800",    desc: "Credential recognition, document translation, and German authority submission." },
];

const ausbildungSteps = [
  { title: "Profile Evaluation",         color: "from-blue-600 to-blue-700", desc: "We assess your academic background, age, language level, and goals to confirm Ausbildung eligibility." },
  { title: "German Language A1–B2",      color: "from-red-500 to-red-600",   desc: "Most programs require B2. We provide structured in-house training to get you there." },
  { title: "Sector & Employer Matching", color: "from-blue-700 to-blue-800", desc: "Match your profile with programs in nursing, IT, engineering, hospitality and more." },
  { title: "Contract & Visa Processing", color: "from-red-600 to-red-700",   desc: "Handle your training contract documentation and Germany vocational visa." },
  { title: "Pre-departure & Arrival",    color: "from-blue-600 to-red-600",  desc: "Accommodation guidance, airport coordination, and settling-in orientation in Germany." },
];

const langWhyPoints = [
  { icon: "🕐", text: "Flexible Morning & Evening Batches", bg: "from-blue-50 to-blue-100",  border: "border-blue-200",  dot: "bg-blue-600" },
  { icon: "💻", text: "Online & Offline Learning Options",  bg: "from-red-50 to-red-100",   border: "border-red-200",   dot: "bg-red-600" },
  { icon: "📝", text: "20+ Model Papers Practice",          bg: "from-blue-50 to-blue-100", border: "border-blue-200",  dot: "bg-blue-700" },
  { icon: "⭐", text: "Top-Rated Faculty",                  bg: "from-red-50 to-red-100",   border: "border-red-200",   dot: "bg-red-700" },
  { icon: "🏅", text: "Certified Trainers",                  bg: "from-blue-50 to-blue-100", border: "border-blue-200",  dot: "bg-blue-800" },
  { icon: "👨‍🏫", text: "Dedicated Mentor Support",           bg: "from-red-50 to-red-100",   border: "border-red-200",   dot: "bg-red-800" },
  { icon: "🎯", text: "Complete Exam & Interview Preparation",bg:"from-blue-50 to-red-50",    border: "border-blue-200",  dot: "bg-blue-700" },
];

const whyCards = [
  { icon: Star,           title: "Experienced Counsellors",       desc: "Senior overseas education experts with hands-on knowledge of each destination.",                        bg: "from-blue-600 to-blue-700",  shadow: "shadow-blue-300/50" },
  { icon: Shield,         title: "Transparent Process",           desc: "Honest guidance, no hidden costs, no false promises. We tell you exactly what to expect.",              bg: "from-red-500 to-red-600",    shadow: "shadow-red-300/50" },
  { icon: Award,          title: "High Visa Success Rate",        desc: "Thorough documentation review and mock interviews give our students an edge at the embassy.",           bg: "from-blue-700 to-blue-800",  shadow: "shadow-blue-300/50" },
  { icon: Users,          title: "Strong University Partnerships", desc: "Direct tie-ups with top-ranked universities in UK, Germany, Canada, Australia, and more.",             bg: "from-red-600 to-red-700",    shadow: "shadow-red-300/50" },
  { icon: HeartHandshake, title: "Personalized Attention",        desc: "Every student is treated individually — no batch-processing or generic advice.",                        bg: "from-blue-600 to-red-600",   shadow: "shadow-blue-300/50" },
  { icon: Sparkles,       title: "End-to-End Support",            desc: "From career counselling to post-arrival assistance — we are with you throughout the journey.",          bg: "from-red-600 to-blue-700",   shadow: "shadow-red-300/50" },
];

// ─── Primitives ───────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold mb-3 ${light ? "text-red-200" : "text-red-600 dark:text-red-400"}`}>
      <span className={`h-px w-6 rounded-full ${light ? "bg-red-200/60" : "bg-red-500/50"}`} />
      {children}
      <span className={`h-px w-6 rounded-full ${light ? "bg-red-200/60" : "bg-red-500/50"}`} />
    </span>
  );
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-display text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4 ${className}`}>{children}</h2>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-muted-foreground leading-relaxed text-sm md:text-base ${className}`}>{children}</p>;
}

function Check({ children, color = "text-blue-600 dark:text-blue-400" }: { children: React.ReactNode; color?: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-foreground/80">
      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${color}`} />
      <span>{children}</span>
    </li>
  );
}

function Banner({ children, gradient = "from-blue-50 via-red-50 to-transparent", border = "border-blue-200" }: { children: React.ReactNode; gradient?: string; border?: string }) {
  return (
    <div className={`relative mt-8 p-5 rounded-2xl overflow-hidden text-sm text-foreground/80 leading-relaxed border ${border} bg-gradient-to-r ${gradient}`}>
      <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-500 via-blue-600 to-red-500/30 rounded-l-full" />
      <div className="pl-3">{children}</div>
    </div>
  );
}

// ─── Tab Panels ───────────────────────────────────────────────────────────────

function OverseasEducationPanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div variants={fadeUp}>
          <Eyebrow>Study Abroad</Eyebrow>
          <Heading>
            Your Dream University is{" "}
            <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
              Closer Than You Think
            </span>
          </Heading>
          <Body className="mb-4">
            AR Overseas Consultancy guides students from Telangana & Andhra Pradesh to top-ranked
            universities worldwide — with end-to-end support from profile evaluation all the way to
            visa success and post-arrival settling.
          </Body>
          <Body>
            Whether you want a 1-year fast-track Master's in the UK or a research-intensive MS in
            the USA, we match you to programs that fit your budget, scores, and career goals.
          </Body>
          {/* CHANGED: "8+" → "27+" destinations */}
          <div className="flex gap-4 mt-8">
            {[
              { num: "27+",  lbl: "Destinations",    bg: "from-blue-600 to-blue-700",  shadow: "shadow-blue-300/50" },
              { num: "100%", lbl: "Free Counselling", bg: "from-red-500 to-red-600",    shadow: "shadow-red-300/50" },
              { num: "50%+", lbl: "Min. Eligibility", bg: "from-blue-700 to-red-600",   shadow: "shadow-blue-300/50" },
            ].map((s) => (
              <motion.div
                key={s.lbl}
                whileHover={{ y: -4, scale: 1.06 }}
                className={`relative text-center rounded-2xl bg-gradient-to-br ${s.bg} shadow-lg ${s.shadow} p-4 min-w-[90px]`}
              >
                <span className="font-display text-3xl font-black text-white block drop-shadow">{s.num}</span>
                <span className="text-[9px] text-white/80 uppercase tracking-widest mt-0.5 block font-bold">{s.lbl}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="relative rounded-2xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 to-red-50 p-6 shadow-xl shadow-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-200/50 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/50 to-transparent rounded-tr-full" />
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <h4 className="text-xs uppercase tracking-widest text-red-600 font-bold">What's Included</h4>
            </div>
            {/* CHANGED: "SOP, LOR & Resume Preparation" → "Support"; "Visa Filing & Interview Coaching" → "Preparation Support" */}
            <ul className="space-y-3 relative">
              {[
                "Free Career Counselling & Country Guidance",
                "Personalized University & Course Shortlisting",
                "SOP, LOR & Resume Preparation Support",
                "Scholarship & Education Loan Assistance",
                "Visa Filing & Interview Preparation Support",
                "Pre-Departure Orientation",
                "Post-Arrival Support",
              ].map((item) => (
                <Check key={item} color="text-red-500">{item}</Check>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <Banner gradient="from-blue-50 via-red-50 to-transparent" border="border-blue-200">
        <strong className="text-red-600">Who can apply?</strong> Bachelor's degree holders with 50%
        and above. Freshers and experienced candidates welcome. Education gaps considered
        case-by-case. Students across Telangana & AP are encouraged to apply.
      </Banner>
    </motion.div>
  );
}

function NursingJobsPanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-red-600" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] opacity-[0.12] select-none pointer-events-none">🏥</div>
        <div className="relative p-8 md:p-12">
          <Eyebrow light>Germany Nursing Program</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            High-Demand Nursing Careers{" "}
            <span className="text-yellow-300">in Germany</span>
          </h2>
          <p className="text-white/85 leading-relaxed text-sm md:text-base max-w-xl mb-7">
            Germany faces a critical shortage of healthcare professionals. Qualified nurses from India
            are actively sought by German hospitals — with attractive salaries, structured recognition
            programs, and clear pathways to permanent residency.
          </p>
          <Link
            to="/jobs-germany"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-black text-sm px-7 py-3.5 rounded-full transition-all shadow-xl"
          >
            View Nursing Jobs in Germany <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <h3 className="font-display text-lg font-bold text-secondary mb-5">What Our Nursing Program Includes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "🩺", title: "Eligibility Check",           bg: "from-blue-600 to-blue-700",  shadow: "shadow-blue-200",  desc: "GNM / B.Sc Nursing / M.Sc Nursing. Freshers and experienced. Age as per program guidelines." },
            { icon: "🇩🇪", title: "German Language A1–B2",      bg: "from-red-500 to-red-600",    shadow: "shadow-red-200",   desc: "Structured training from scratch to B2 — the level required for German healthcare roles." },
            { icon: "📄", title: "Recognition & Documentation", bg: "from-blue-700 to-blue-800",  shadow: "shadow-blue-200",  desc: "Complete support for credential recognition, document translation, and submission to German authorities." },
            { icon: "🤝", title: "Employer Matching",            bg: "from-red-600 to-red-700",    shadow: "shadow-red-200",   desc: "Direct connections to verified German hospitals and care facilities with job contracts before departure." },
            { icon: "✈️", title: "Work Visa Processing",         bg: "from-blue-600 to-red-600",   shadow: "shadow-blue-200",  desc: "End-to-end visa support including appointment scheduling, documentation, and Embassy preparation." },
            { icon: "👨‍👩‍👧", title: "Family Reunion & PR Guidance",bg:"from-red-600 to-blue-700",   shadow: "shadow-red-200",   desc: "Guidance on bringing your family to Germany and navigating the pathway to permanent residency." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, ease }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${f.shadow} transition-all duration-300`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${f.bg}`} />
              <div className="relative p-5 flex items-start gap-4 border border-border rounded-2xl bg-card">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.bg} flex items-center justify-center text-lg flex-shrink-0 shadow-md`}>
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Banner>
        <strong className="text-red-600">Why Germany?</strong> Competitive salaries (€2,500–€3,500+
        /month), paid relocation support, structured career growth, and one of Europe's fastest
        routes to permanent residency. Germany is a safe, family-friendly country with strong
        demand for nursing professionals.
      </Banner>
    </motion.div>
  );
}

function AusbildungPanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div variants={fadeUp}>
          <Eyebrow>Vocational Training in Germany</Eyebrow>
          <Heading>
            Ausbildung —{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Learn & Earn
            </span>{" "}
            in Germany
          </Heading>
          <Body className="mb-4">
            Ausbildung is Germany's world-renowned dual vocational training system — you work and
            study simultaneously, earning a monthly stipend while gaining a fully recognized German
            qualification.
          </Body>
          <Body className="mb-7">
            It's an ideal pathway for candidates who want a stable career in Germany without a
            university degree. AR Overseas provides complete Ausbildung support: profile evaluation,
            German language preparation, employer placement, and visa processing.
          </Body>
          <Link
            to="/ausbildung"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-red-600 text-white font-black text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-200"
          >
            Learn About Ausbildung <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-0">
          {ausbildungSteps.map((step, i) => (
            <div key={step.title} className="flex gap-4 pb-5 relative group">
              {i < ausbildungSteps.length - 1 && (
                <div className="absolute left-[18px] top-11 bottom-0 w-px bg-gradient-to-b from-red-300 via-blue-200 to-transparent" />
              )}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                className={`h-9 w-9 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-black text-sm flex-shrink-0 z-10 shadow-lg`}
              >
                {i + 1}
              </motion.div>
              <div className="pt-1 group-hover:translate-x-1.5 transition-transform duration-300">
                <h4 className="font-bold text-secondary text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Ausbildung Program Eligibility Checklist ── */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="font-display text-lg font-bold text-secondary">
            For Ausbildung Program
          </h3>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-6 shadow-md">
          <ul className="space-y-3">
            {[
              "Eligibility Check for Ausbildung Program",
              "German Language Guidance A1–B2",
              "Notary, Translation & Documentation Process",
              "Interview Preparation Assistance",
              "Employer Matching & Ausbildung Contracts",
              "Ausbildung Visa & Germany Registration Support",
              "Family Reunion & PR Guidance",
            ].map((item) => (
              <Check key={item} color="text-red-500">
                <span className="text-foreground/80">{item}</span>
              </Check>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* CHANGED: Age 18–35 → 18–27; 10th removed → 12th / Diploma / Graduation; B1 target → B2 target */}
      <Banner>
        <strong className="text-red-600">Who can apply?</strong> Candidates aged 18–27 with 12th /
        Diploma / Graduation. Willingness to learn German (A1 start, B2 target). No prior work
        experience required for many programs. Both freshers and experienced professionals welcome.
      </Banner>
    </motion.div>
  );
}

function HealthcarePanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <Eyebrow>Healthcare & Hospital</Eyebrow>
        <Heading>
          Healthcare & Hospital{" "}
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Recruitment</span>
        </Heading>
        <Body className="mb-3">
          Germany's healthcare sector is growing rapidly and actively recruiting qualified
          professionals from India. AR Overseas Consultancy connects doctors, nurses,
          physiotherapists, and other medical staff to verified German hospitals and care institutions.
        </Body>
        <Body>
          We handle every step, from profile matching and document preparation to visa filing and relocation support.
        </Body>
      </motion.div>

      <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      <motion.div variants={fadeUp}>
        <Eyebrow>Language Training for Healthcare</Eyebrow>
        <h3 className="font-display text-xl font-bold text-secondary mb-3">
          Professional Training with{" "}
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Certified Trainers</span>
        </h3>
        {/* CHANGED: "minimum B1/B2" → "minimum B2" */}
        <Body className="max-w-xl mb-7">
          Healthcare professionals require minimum B2 German proficiency to work in Germany. Our
          certified trainers deliver professional, exam-focused language training to help you achieve
          the exact level required for your job and visa — with flexible batch timings and personalized attention.
        </Body>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthcareFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, ease }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex items-start gap-4 p-5 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 overflow-hidden relative"
            >
              <div className={`flex-shrink-0 h-10 w-10 rounded-xl ${f.bg} flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <div>
                <h4 className="font-bold text-secondary text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Banner>
        <strong className="text-red-600">Roles We Recruit For:</strong> Staff Nurses · ICU / ICN
        Nurses · Operation Theatre Nurses · GNM · B.Sc / M.Sc Nursing · Physiotherapists · Medical
        Lab Technicians · Care Assistants (Pflegekraft)
      </Banner>
    </motion.div>
  );
}

function VisaPanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <Eyebrow>Documentation & Filing</Eyebrow>
        <Heading>
          Visa Guidance &{" "}
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Documentation</span>
        </Heading>
        <Body>
          Navigating the German visa process can be complex. Our expert team provides full
          documentation review, application filing, and preparation coaching so you walk into your
          embassy appointment with complete confidence.
        </Body>
      </motion.div>

      <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
        {visaTypes.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, ease }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`relative rounded-2xl overflow-hidden shadow-xl ${v.shadow} transition-all duration-400`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${v.bg}`} />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-white/10" />
            <div className="relative p-7">
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="font-display font-black text-white mb-2 text-lg">{v.title}</h3>
              <p className="text-sm text-white/85 leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-red-50 p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="font-display text-lg font-bold text-secondary">What We Cover</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {[
            "Document checklist & review",
            "Application form filling assistance",
            "Financial proof preparation",
            "Embassy appointment guidance",
            "Interview coaching & mock sessions",
            "Biometric & passport support",
            "Rejection case analysis & re-application",
            "APS certificate guidance (Germany)",
          ].map((item) => (
            <Check key={item} color="text-red-500"><span className="text-foreground/80">{item}</span></Check>
          ))}
        </div>
      </motion.div>

      {/* CHANGED: Pull quote updated — "student visas for all top 27+ Countries and work visas for Germany" */}
      <Banner>
        <strong className="text-red-600">High Visa Success Rate.</strong> Our transparent process
        and thorough documentation review have helped hundreds of students and professionals secure
        student visas for all top 27+ Countries and work visas for Germany. We never promise what
        we can't deliver — and we prepare you for what the consulate actually looks for.
      </Banner>
    </motion.div>
  );
}

function LanguagePanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <Eyebrow>Language Training</Eyebrow>
        {/* CHANGED: Headline updated to include IELTS, GRE, TOEFL & PTE */}
        <Heading>
          German Language A1–B2, IELTS, GRE,{" "}
          <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">TOEFL & PTE Classes</span>
        </Heading>
        <Body>
          Whether you're preparing for a nursing job, an Ausbildung program, or a Master's at a
          German university, language proficiency is your most important asset. Our structured
          curriculum takes you from complete beginner to professional fluency — and our test-prep
          classes cover IELTS, GRE, TOEFL and PTE for study and immigration abroad.
        </Body>
      </motion.div>

      <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {langLevels.map((l, i) => (
          <motion.div
            key={l.code}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, ease }}
            whileHover={{ y: -8, scale: 1.04 }}
            className={`relative rounded-2xl overflow-hidden shadow-xl ${l.shadow} ring-2 ${l.ring} transition-all duration-350`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${l.bg}`} />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/15" />
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-black/10" />
            <div className="relative p-6">
              <span className="font-display text-6xl font-black text-white drop-shadow-lg block mb-0.5">{l.code}</span>
              <h4 className="font-bold text-white/95 text-sm mb-5 uppercase tracking-widest">{l.name}</h4>
              <ul className="space-y-2.5">
                {l.points.map((p) => (
                  <li key={p} className="text-xs text-white/90 flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80 flex-shrink-0 mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp}>
        <h3 className="font-display text-lg font-bold text-secondary mb-6">How to Get Started</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: "For Candidates Without Language Training",        dot: "bg-blue-600",  border: "border-blue-200", bg: "from-blue-50 to-blue-100", steps: ["Enroll for German Language Course with AR Overseas Consultancy","Complete structured training: A1 → A2 → B1 → B2","Clear certification exams for B1 and B2 levels","Proceed to recruitment, visa, and Germany placement"] },
            { title: "For Candidates With Language Training Completed", dot: "bg-red-600",   border: "border-red-200",  bg: "from-red-50 to-red-100",  steps: ["Register for German employer interview assistance","Selection, job contract, and visa processing support","Pre-departure orientation and fly to Germany"] },
          ].map((col) => (
            <div key={col.title} className={`rounded-2xl border ${col.border} bg-gradient-to-br ${col.bg} p-6`}>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-black/5">
                <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                <h4 className="font-bold text-secondary text-sm">{col.title}</h4>
              </div>
              {col.steps.map((step, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-black/5 last:border-0 group">
                  <span className={`h-6 w-6 rounded-full ${col.dot} text-white text-xs font-black flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>{i + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <h3 className="font-display text-lg font-bold text-secondary mb-5">Why Learn German with AR Overseas?</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {langWhyPoints.map((w, i) => (
            <motion.div
              key={w.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, ease }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`relative flex items-center gap-3 p-3.5 rounded-xl border ${w.border} bg-gradient-to-br ${w.bg} text-sm font-semibold text-secondary overflow-hidden group`}
            >
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${w.bg}`} />
              <span className="text-xl">{w.icon}</span>
              {w.text}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ADDED: IELTS / GRE / TOEFL / PTE section */}
      <motion.div variants={fadeUp}>
        <h3 className="font-display text-lg font-bold text-secondary mb-5">Test Preparation Classes</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { code: "IELTS", bg: "from-blue-600 to-blue-700", shadow: "shadow-blue-300/50", ring: "ring-blue-300", desc: "International English Language Testing System — required for UK, Australia, Canada & New Zealand admissions and immigration." },
            { code: "GRE",   bg: "from-red-500 to-red-600",   shadow: "shadow-red-300/50",  ring: "ring-red-300",  desc: "Graduate Record Examination — required for MS programs in USA, UK and other top destinations." },
            { code: "TOEFL", bg: "from-blue-700 to-blue-800", shadow: "shadow-blue-300/50", ring: "ring-blue-300", desc: "Test of English as a Foreign Language — widely accepted across USA, Canada, Europe & Australia for university admissions." },
            { code: "PTE",   bg: "from-red-600 to-red-700",   shadow: "shadow-red-300/50",  ring: "ring-red-300",  desc: "Pearson Test of English — accepted for study, work & migration visas across multiple countries." },
          ].map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease }}
              whileHover={{ y: -8, scale: 1.04 }}
              className={`relative rounded-2xl overflow-hidden shadow-xl ${t.shadow} ring-2 ${t.ring} transition-all duration-350`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.bg}`} />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/15" />
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-black/10" />
              <div className="relative p-6">
                <span className="font-display text-5xl font-black text-white drop-shadow-lg block mb-3">{t.code}</span>
                <p className="text-xs text-white/90 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Banner>
        AR Overseas Consultancy assists with{" "}
        <strong className="text-red-600">language training, recruitment, employer interviews, and visa processing</strong>{" "}
        — all under one roof, so you don't need to coordinate between multiple agencies.
      </Banner>
    </motion.div>
  );
}

function CareerPanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <Eyebrow>Personalized Guidance</Eyebrow>
        <Heading>
          Career Counselling —{" "}
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Right Path, Right Time</span>
        </Heading>
        <Body>
          Many students and professionals choose courses or countries without proper guidance —
          leading to wrong course selection, visa rejections, or limited job opportunities. Our
          personalized counselling helps you make confident, informed decisions for a future abroad.
        </Body>
      </motion.div>

      <motion.div variants={fadeUp} className="max-w-2xl">
        {counsellingSteps.map((step, i) => (
          <div key={step.title} className="flex gap-4 pb-5 relative group">
            {i < counsellingSteps.length - 1 && (
              <div className="absolute left-[18px] top-11 bottom-0 w-px bg-gradient-to-b from-red-300 via-blue-200 to-transparent" />
            )}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`h-9 w-9 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-black text-sm flex-shrink-0 z-10 shadow-lg ${step.shadow}`}
            >
              {step.n}
            </motion.div>
            <div className="pt-1 group-hover:translate-x-2 transition-transform duration-300">
              <h4 className="font-bold text-secondary text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
        {[
          {
            label: "For Study Abroad",
            col: "bg-blue-600", border: "border-blue-200", bg: "from-blue-50 to-blue-100", check: "text-red-500",
            // CHANGED: "Visa Filing & Interview Preparation" → "Visa Filing & Interview Preparation Support"
            items: [
              "Course & Career Path Analysis",
              "Country, Course & University Shortlisting",
              "Eligibility & Profile Evaluation",
              "Budget Planning & Scholarships",
              "Post-Study Work & PR Overview",
              "SOP, LOR & Resume Preparation assistance",
              "Visa Filing & Interview Preparation Support",
            ],
          },
          {
            label: "For Nurse Jobs in Germany",
            col: "bg-red-600", border: "border-red-200", bg: "from-red-50 to-red-100", check: "text-blue-600",
            // CHANGED: "Employer Matching & Job Contracts" → "Employer Matching & Job Contracts Assistance"
            items: [
              "Eligibility Check for Germany Nursing Program",
              "German Language Guidance A1–B2",
              "Recognition & Documentation Process",
              "Employer Matching & Job Contracts Assistance",
              "Work Visa & Germany Registration Support",
              "Employer Interview Preparation Assistance",
              "Family Reunion & PR Guidance",
            ],
          },
        ].map((col) => (
          <div key={col.label} className={`rounded-2xl border ${col.border} bg-gradient-to-br ${col.bg} p-6 shadow-md`}>
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-black/5">
              <span className={`h-2.5 w-2.5 rounded-full ${col.col}`} />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-secondary">{col.label}</span>
            </div>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <Check key={item} color={col.check}><span className="text-foreground/80">{item}</span></Check>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <Banner>
        <strong className="text-red-600">Every counselling session is personalized</strong> — no
        generic advice. We are specialized in Study Abroad and German Nursing, trusted by students
        across Telangana and Andhra Pradesh, with a consistently high success rate.
      </Banner>
    </motion.div>
  );
}

function DeparturePanel() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
      <motion.div variants={fadeUp} className="max-w-2xl">
        <Eyebrow>Your Journey, Supported</Eyebrow>
        <Heading>
          Pre-Departure &{" "}
          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">Post-Arrival Services</span>
        </Heading>
        <Body>
          Getting your visa is only half the journey. AR Overseas Consultancy ensures you're fully
          prepared before you board — and supported after you land, so you can settle in with
          confidence and focus on what matters.
        </Body>
      </motion.div>

      <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
        {[
          {
            emoji: "✈️", title: "Pre-Departure Services",
            bg: "from-blue-600 to-blue-700", border: "border-blue-200", check: "text-red-500",
            // CHANGED: three bullet texts updated per PDF
            items: [
              "Complete pre-departure orientation session",
              "Travel booking and flight guidance",
              "Accommodation Research and Shortlisting Support",
              "Banking & SIM Card Pre-arrival Checklist Guidance",
              "University / Employer Enrollment Documentation Support",
              "Health insurance guidance",
              "Currency, cost-of-living & budgeting briefing",
              "Cultural orientation for Germany / destination country",
            ],
          },
          {
            emoji: "🏡", title: "Post-Arrival Support",
            bg: "from-red-500 to-red-600", border: "border-red-200", check: "text-blue-600",
            items: [
              "Airport pickup coordination assistance",
              "City registration (Anmeldung) guidance for Germany",
              "Local SIM and bank account setup guidance",
              "University / hospital onboarding support",
              "Housing and flatmate guidance",
              "Integration into local Indian community",
              "Public transport and city navigation tips",
              "Ongoing WhatsApp / remote support access",
            ],
          },
        ].map((col) => (
          <motion.div key={col.title} whileHover={{ y: -3 }} className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-350`}>
            <div className={`bg-gradient-to-r ${col.bg} p-5 flex items-center gap-3`}>
              <span className="text-2xl">{col.emoji}</span>
              <h3 className="font-display font-black text-white">{col.title}</h3>
            </div>
            <div className={`border ${col.border} border-t-0 rounded-b-2xl p-6 bg-gradient-to-br from-white to-blue-50/50`}>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <Check key={item} color={col.check}><span className="text-foreground/80">{item}</span></Check>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Banner>
        <strong className="text-red-600">
          From travel guidance to accommodation assistance — we support you throughout the journey.
        </strong>{" "}
        Our alumni network in Germany, UK, Canada, and Australia is a ready resource for newly
        arrived students and professionals.
      </Banner>
    </motion.div>
  );
}

const PANEL_MAP: Record<TabId, React.FC> = {
  overseas: OverseasEducationPanel,
  nursing: NursingJobsPanel,
  ausbildung: AusbildungPanel,
  healthcare: HealthcarePanel,
  visa: VisaPanel,
  language: LanguagePanel,
  career: CareerPanel,
  departure: DeparturePanel,
};

// ─── Main Page ────────────────────────────────────────────────────────────────
function Services() {
  const [activeTab, setActiveTab] = useState<TabId>("overseas");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ActivePanel = PANEL_MAP[activeTab];
  const activeTabData = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
     <section
  className="relative isolate overflow-hidden min-h-[62vh] flex items-center"
  style={{ marginTop: -120 }}
>
  {/* Background Image Right Side */}
  <motion.div
    initial={{ scale: 1.12, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.6, ease }}
    className="absolute inset-0 flex justify-end items-center pointer-events-none"
  >
    <img
      src={heroDefault}
      alt=""
      className="h-full w-auto object-contain object-right"
      draggable={false}
    />
  </motion.div>

  {/* Bottom Scrim */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

  {/* Content */}
  <motion.div
    className="container mx-auto px-4 py-20 md:py-28 relative z-10"
    variants={stagger}
    initial="hidden"
    animate="show"
  >
    <div className="max-w-2xl">
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 bg-black/30 border border-white/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
      >
        <span className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
        <span
          className="text-[11px] uppercase tracking-[0.25em] text-white font-bold"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
        >
          AR Overseas Consultancy (OPC) Pvt. Ltd.
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl md:text-7xl font-black mb-4 leading-tight"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
      >
        <span className="text-white">Our </span>
        <span className="relative">
          <span className="bg-gradient-to-r from-yellow-300 via-black to-blue-200 bg-clip-text text-transparent">
            Services
          </span>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.7, ease }}
            className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 via-yellow-300 to-blue-300 rounded-full origin-left"
          />
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="max-w-xl text-white text-base md:text-lg mb-6 leading-relaxed font-medium"
        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
      >
        From career counselling to landing your dream country —
        AR Overseas Consultancy (OPC) Pvt. Ltd. handles every step.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex items-center gap-2 mb-8"
      >
        <Link
          to="/"
          className="text-yellow-300 hover:text-white transition-colors text-sm font-semibold"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
        >
          Home
        </Link>

        <span className="text-white/70 text-sm">›</span>

        <span
          className="text-white text-sm font-medium"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
        >
          Services
        </span>
      </motion.div>

      {/* CHANGED: "8+ Destinations" → "27+ Destinations" */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap gap-3"
      >
        {[
          { label: "27+ Destinations",  bg: "bg-blue-700/80 border-blue-300/50" },
          { label: "Free Counselling",  bg: "bg-red-600/80 border-red-300/50" },
          { label: "100% End-to-End",   bg: "bg-blue-800/80 border-blue-300/50" },
          { label: "Hyderabad Based",   bg: "bg-red-700/80 border-red-300/50" },
        ].map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center gap-1.5 ${tag.bg} border text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            {tag.label}
          </span>
        ))}
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* ══ TABBED SERVICES ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div className="text-center mb-12" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-600 dark:text-red-400 font-bold">Complete Solutions</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/60" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black mt-2 bg-gradient-to-r from-blue-700 via-red-600 to-blue-700 bg-clip-text text-transparent">
              What We Offer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3 text-sm">
              Select a service below to explore what's included.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {TABS.map(({ id, icon: Icon, label, short, color }) => {
              const active = activeTab === id;
              return (
                <motion.button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition-all duration-250 group"
                >
                  <div className={`absolute inset-0 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"} bg-gradient-to-br ${color}`} />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${active ? "opacity-0" : "opacity-100"} bg-gradient-to-br from-blue-50 to-red-50`} />
                  {!active && <div className={`absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-br ${color} transition-opacity duration-300`} />}
                  {active && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/50" />}
                  <div className={`absolute inset-0 rounded-2xl border transition-colors duration-300 ${active ? "border-white/30" : "border-blue-200 group-hover:border-blue-300"}`} />

                  <div className="relative p-4 flex flex-col items-center gap-2.5 text-center">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 ${active ? "bg-white/25 shadow-white/10" : "bg-white group-hover:bg-blue-100"}`}>
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${active ? "text-white" : "text-blue-700 group-hover:text-blue-800"}`} />
                    </div>
                    <span className={`text-[11px] font-bold leading-tight transition-colors duration-300 ${active ? "text-white" : "text-secondary/80 group-hover:text-secondary"}`}>
                      <span className="sm:hidden">{short}</span>
                      <span className="hidden sm:inline">{label}</span>
                    </span>
                    {active && (
                      <motion.span
                        layoutId="tab-dot"
                        className="h-1.5 w-1.5 rounded-full bg-white/90"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            key={activeTab + "-bar"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className={`mb-8 rounded-2xl bg-gradient-to-r ${activeTabData.color} p-4 flex items-center gap-3 shadow-xl overflow-hidden relative`}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 text-6xl select-none">
              <activeTabData.icon className="h-16 w-16 text-white" />
            </div>
            <div className="h-10 w-10 rounded-xl bg-white/25 flex items-center justify-center flex-shrink-0 relative">
              <activeTabData.icon className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-white relative">{activeTabData.label}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease }}
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ═════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(29,78,216,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(227,30,36,0.08),transparent_50%)]" />
        <motion.div animate={{ y: [-8, 8, -8], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] h-48 w-48 rounded-full bg-blue-200 blur-3xl" />
        <motion.div animate={{ y: [6, -6, 6], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 left-[8%] h-56 w-56 rounded-full bg-red-200 blur-3xl" />

        <div className="container mx-auto px-4 max-w-5xl relative">
          <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-600 font-bold">Why AR Overseas</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/60" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black mt-2 text-secondary">
              Trusted by Students Across{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Telangana & AP</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, ease }}
                whileHover={{ y: -7, scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden shadow-xl ${item.shadow} transition-all duration-350`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.bg}`} />
                <div className="bg-white border border-blue-100 border-t-0 rounded-b-2xl p-6">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4 shadow-lg ${item.shadow}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-black text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESTINATIONS ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-background">
        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
          <defs><pattern id="dots2" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="currentColor" /></pattern></defs>
          <g className="text-blue-200">
            <path d="M150,140 Q230,90 320,150 T420,180 Q360,230 280,240 T160,220 Z" fill="url(#dots2)" />
            <path d="M430,130 Q510,100 600,140 T720,180 Q650,230 560,240 T450,200 Z" fill="url(#dots2)" />
            <path d="M460,260 Q540,240 600,300 T660,360 Q580,400 500,380 T440,320 Z" fill="url(#dots2)" />
            <path d="M740,300 Q820,290 870,340 T900,400 Q820,420 760,400 T720,350 Z" fill="url(#dots2)" />
            <path d="M180,300 Q260,290 320,340 T360,400 Q280,420 220,400 T160,350 Z" fill="url(#dots2)" />
          </g>
        </svg>

        <div className="container mx-auto px-4 relative">
          <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-600 dark:text-red-400 font-bold">Study Abroad</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/60" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black mt-2 text-secondary">
              Destinations We Offer
            </motion.h2>
            {/* CHANGED: "Eight world-class" → "27+ world-class" */}
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3 text-sm">
              27+ world-class destinations · One trusted partner.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease }}
                whileHover={{ y: -9, scale: 1.025 }}
                className="group relative rounded-3xl overflow-hidden flex-col justify-end"
              >
                <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={d.mapImg}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/15" />
                <div className="relative p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={d.flagImg}
                      alt={`${d.name} flag`}
                      className="h-8 w-13 object-cover rounded-md shadow-lg border border-white/30 flex-shrink-0"
                      style={{ width: "52px", height: "34px" }}
                    />
                    <div>
                      <h3 className="font-display text-xl font-black text-white drop-shadow leading-tight">{d.name}</h3>
                      <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-0.5">{d.duration}</div>
                    </div>
                  </div>
                  <span className="inline-block self-start text-[10px] font-black text-white bg-blue-700/80 border border-blue-400/40 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    PSW: {d.psw}
                  </span>
                  <ul className="space-y-1.5">
                    {d.programs.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle2 className="h-3.5 w-3.5 text-white/50 flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQS ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <motion.div className="text-center mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/60" />
              <span className="text-xs uppercase tracking-[0.3em] text-red-600 dark:text-red-400 font-bold">FAQs</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/60" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-black mt-2 text-secondary">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-350 ${open ? `border ${f.border} shadow-xl` : "border border-border bg-card"}`}
                >
                  {open && <div className={`absolute inset-0 bg-gradient-to-br ${f.color}`} />}
                  <div className={`absolute left-0 inset-y-0 w-1.5 ${f.num} rounded-l-2xl transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="relative w-full p-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`hidden sm:flex h-7 w-7 rounded-full ${open ? f.num : "bg-muted"} text-white text-xs font-black items-center justify-center flex-shrink-0 transition-colors`}>{i + 1}</span>
                      <span className="font-bold text-sm text-secondary transition-colors">{f.q}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-all ${open ? `${f.num} text-white` : "bg-muted text-muted-foreground"}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden relative"
                      >
                        <p className="px-6 sm:pl-[4.5rem] pb-6 pt-1 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONTACT CTA ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-red-600" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(255,255,255,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,255,255,0.12),transparent_50%)]" />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] h-44 w-44 rounded-full bg-white/15 blur-3xl" />
        <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 left-[5%] h-56 w-56 rounded-full bg-yellow-200/20 blur-3xl" />

        <div className="container mx-auto px-4 max-w-5xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease }}>
              <Eyebrow light>Get In Touch</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Journey?</span>
              </h2>
              <p className="text-white/85 leading-relaxed text-sm mb-8">
                Book a free counselling session. We'll evaluate your profile and give you a clear,
                honest roadmap — no obligations.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone,  bg: "bg-white/20", content: <span><a href="tel:+917396949498" className="text-white hover:text-yellow-200 transition-colors">+91 73969 49498</a>{" | "}<a href="tel:+918885949498" className="text-white hover:text-yellow-200 transition-colors">+91 88859 49498</a>{" | "}<a href="tel:+918142445464" className="text-white hover:text-yellow-200 transition-colors">+91 81424 45464</a></span> },
                  { icon: Mail,   bg: "bg-white/20", content: <a href="mailto:info@aroverseasconsultancy.com" className="text-white hover:text-yellow-200 transition-colors">info@aroverseasconsultancy.com</a> },
                  { icon: MapPin, bg: "bg-white/20", content: <span className="text-white/90">Plot No. 53, HIG Phase 1, Rajeshwari Complex, Vanasthalipuram, Hyderabad – 500070</span> },
                  { icon: Clock,  bg: "bg-white/20", content: <span className="text-white/90">Mon–Sat: 9 AM – 8 PM</span> },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`h-8 w-8 rounded-lg ${row.bg} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg backdrop-blur-sm`}>
                      <row.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-sm pt-1.5">{row.content}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease, delay: 0.12 }} className="flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/enquiry" className="flex w-full items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-black py-4 rounded-2xl transition-all text-sm shadow-xl">
                  <Sparkles className="h-4 w-4" />
                  Book Free Counselling Session
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/jobs-germany" className="flex w-full items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold py-4 rounded-2xl hover:bg-white/25 transition-all text-sm backdrop-blur-sm">
                  <Stethoscope className="h-4 w-4 text-yellow-300" />
                  View Nursing Jobs in Germany
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="flex w-full items-center justify-center gap-2 text-white/80 font-semibold py-3 rounded-2xl hover:text-white hover:bg-white/10 transition-all text-sm border border-transparent hover:border-white/20">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <div className="mt-2 p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-wrap gap-3 justify-center backdrop-blur-sm">
                {[
                  { text: "Free Counselling", color: "text-yellow-200" },
                  { text: "100% Transparent",  color: "text-white" },
                  { text: "High Visa Success", color: "text-yellow-200" },
                ].map((badge) => (
                  <span key={badge.text} className={`flex items-center gap-1.5 text-[11px] ${badge.color} font-bold`}>
                    <CheckCircle2 className="h-3.5 w-3.5" /> {badge.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}