import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { g as flagNZ, e as flagEU, h as flagIE, b as flagCA, f as flagUS, a as flagGB, c as flagAU, d as flagDE } from "./ireland-5eUAgl2p.js";
import { ArrowRight, X, MapPin, Sparkles, GraduationCap, Compass, Plane, BookOpen, Award, FileCheck, Stethoscope, HeartHandshake, Building2, Languages, Handshake, School, ClipboardCheck, Send, Stamp, Briefcase, CheckCircle2, Quote, Star } from "lucide-react";
import { h as heroImg3 } from "./2-q7vUXJzP.js";
const COUNTRIES = [
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    lat: 51.1657,
    lng: 10.4515,
    tagline: "Tuition-free education and the world's #4 healthcare system.",
    highlights: [
      "No tuition fees at most public universities",
      "Strong demand for nurses, engineers and IT",
      "18-month job search visa after studies",
      "PR pathway after 21–33 months of work"
    ],
    programs: ["MS Engineering & CS", "Ausbildung (Paid Training)", "Nursing Jobs", "MBA"],
    perks: ["Earn 8–10× Indian salaries", "Free healthcare", "Family reunification"]
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "🇬🇧",
    lat: 55.3781,
    lng: -3.436,
    tagline: "World-class universities with 2-year Graduate Route visa.",
    highlights: [
      "1-year Master's programs",
      "Direct admission to partner universities",
      "Graduate Route visa for 2 years",
      "Globally recognised degrees"
    ],
    programs: ["MSc Management", "Data Analytics", "Cyber Security", "Healthcare"],
    perks: ["Scholarships available", "Part-time work allowed", "Strong alumni network"]
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    lat: 39.8283,
    lng: -98.5795,
    tagline: "Top-ranked universities and unmatched career opportunities.",
    highlights: [
      "MS programs of 1.5–2 years",
      "STEM OPT extension up to 3 years",
      "World leading research labs",
      "Diverse scholarship options"
    ],
    programs: ["MS in CS", "Data Science / AI", "Cyber Security", "MBA / MIS"],
    perks: ["High starting salaries", "Global brand value", "Innovation hub"]
  },
  {
    code: "CA",
    name: "Canada",
    flag: "🇨🇦",
    lat: 56.1304,
    lng: -106.3468,
    tagline: "Friendly immigration and a clear PR pathway.",
    highlights: [
      "Post-graduation work permit up to 3 years",
      "Express Entry PR pathway",
      "Affordable Master's & PG diplomas",
      "Welcoming, multicultural society"
    ],
    programs: ["Engineering & CS", "MBA / Public Health", "Project Management", "Supply Chain"],
    perks: ["Spouse work permit", "Universal healthcare", "Strong job market"]
  },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    lat: -25.2744,
    lng: 133.7751,
    tagline: "High quality of life and strong post-study work rights.",
    highlights: [
      "2–4 year post-study work visa",
      "Top 100 universities",
      "Demand for IT, nursing and accounting",
      "Pathway to PR"
    ],
    programs: ["IT / CS", "Engineering", "Data Science", "Nursing & Accounting"],
    perks: ["Excellent lifestyle", "Safe & multicultural", "Spouse work rights"]
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    lat: 53.4129,
    lng: -8.2439,
    tagline: "Europe's tech hub with English-taught programs.",
    highlights: [
      "Stay-back visa up to 2 years",
      "Home to Google, Meta, Apple EU HQs",
      "1-year Master's programs",
      "Affordable EU tuition"
    ],
    programs: ["MSc Computing", "Data Analytics", "Business", "Pharma & Biotech"],
    perks: ["Friendly visa policies", "Strong Indian community", "EU access"]
  },
  {
    code: "EU",
    name: "Europe (EU)",
    flag: "🇪🇺",
    lat: 47,
    lng: 15,
    tagline: "Affordable Master's across France, Netherlands, Sweden and more.",
    highlights: [
      "Low or zero tuition in many countries",
      "Scholarship-friendly",
      "Schengen mobility",
      "Strong industry-academia links"
    ],
    programs: ["Engineering & Tech", "Data Science", "MBA", "Health Sciences"],
    perks: ["1–3 yr post-study work", "Diverse cultures", "Pathway to EU PR"]
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    lat: -40.9006,
    lng: 174.886,
    tagline: "Beautiful landscapes and a balanced student life.",
    highlights: [
      "Up to 3-year post-study work visa",
      "High-quality British-style education",
      "Demand for IT and healthcare",
      "Easy PR pathway"
    ],
    programs: ["Engineering & IT", "Applied Management", "Public Health", "Agriculture"],
    perks: ["Spouse work rights", "Safe & peaceful", "Work-life balance"]
  }
];
const FLAG_MAP = {
  DE: flagDE,
  AU: flagAU,
  GB: flagGB,
  UK: flagGB,
  US: flagUS,
  CA: flagCA,
  IE: flagIE,
  EU: flagEU,
  NZ: flagNZ
};
const Globe = lazy(() => import("react-globe.gl").then((m) => ({ default: m.default })));
function CountryGlobe() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const GLOBE_SIZE = 420;
  const wrapRef = useRef(null);
  const globeRef = useRef(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.6;
      globeRef.current.controls().enableZoom = false;
    }
  }, [mounted]);
  const flyToCountry = (country) => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView(
      { lat: country.lat, lng: country.lng, altitude: 1.8 },
      800
      // ms transition
    );
  };
  const resumeAutoRotate = () => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = true;
  };
  const points = COUNTRIES.map((c) => ({
    ...c,
    size: 0.9,
    // highlighted = gold + bigger, normal = red
    color: hovered === c.code ? "#F5C158" : "#FF4D4D",
    radius: hovered === c.code ? 1.2 : 0.65
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center max-w-6xl mx-auto w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: wrapRef,
          className: "relative flex-shrink-0",
          style: { width: GLOBE_SIZE + 24, height: GLOBE_SIZE + 24, padding: 12 },
          onMouseEnter: () => {
            if (globeRef.current) globeRef.current.controls().autoRotate = false;
          },
          onMouseLeave: () => {
            if (globeRef.current) globeRef.current.controls().autoRotate = true;
            setHovered(null);
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-3 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute rounded-full border-2 border-dashed border-blue-400/40 animate-spin-slow pointer-events-none",
                style: { inset: 0 }
              }
            ),
            mounted && /* @__PURE__ */ jsx(
              Suspense,
              {
                fallback: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "rounded-full bg-blue-900/40 animate-pulse",
                    style: { width: GLOBE_SIZE, height: GLOBE_SIZE }
                  }
                ),
                children: /* @__PURE__ */ jsx("div", { className: "absolute", style: { top: 12, left: 12 }, children: /* @__PURE__ */ jsx(
                  Globe,
                  {
                    ref: globeRef,
                    width: GLOBE_SIZE,
                    height: GLOBE_SIZE,
                    backgroundColor: "rgba(0,0,0,0)",
                    globeImageUrl: "//unpkg.com/three-globe/example/img/earth-day.jpg",
                    bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
                    atmosphereColor: "#4fc3f7",
                    atmosphereAltitude: 0.18,
                    pointsData: points,
                    pointLat: (d) => d.lat,
                    pointLng: (d) => d.lng,
                    pointColor: (d) => d.color,
                    pointAltitude: (d) => hovered === d.code ? 0.12 : 0.05,
                    pointRadius: (d) => hovered === d.code ? 1.2 : 0.65,
                    pointLabel: (d) => `<div style="background:rgba(10,20,50,0.92);color:#fff;padding:6px 10px;border-radius:8px;font-family:Inter;font-size:12px;border:1px solid ${hovered === d.code ? "#F5C158" : "#FF4D4D"}"><b>${d.name}</b><br/><span style="color:#F5C158;font-size:10px">Click to explore</span></div>`,
                    onPointClick: (d) => setSelected(d),
                    onPointHover: (d) => {
                      if (d) {
                        setHovered(d.code);
                      } else {
                        setHovered(null);
                        resumeAutoRotate();
                      }
                    },
                    ringsData: hovered ? points.filter((p) => p.code === hovered) : points.slice(0, 4),
                    ringLat: (d) => d.lat,
                    ringLng: (d) => d.lng,
                    ringColor: () => (t) => `rgba(245,193,88,${1 - t})`,
                    ringMaxRadius: 5,
                    ringPropagationSpeed: 2.5,
                    ringRepeatPeriod: 1e3
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground bg-background/70 backdrop-blur px-2.5 py-1 rounded-full border border-border whitespace-nowrap", children: "Click any pin to explore" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex-1 w-full min-w-0 grid grid-cols-2 gap-2", children: COUNTRIES.map((c, i) => {
        const isHovered = hovered === c.code;
        return /* @__PURE__ */ jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => setSelected(c),
            onMouseEnter: () => {
              setHovered(c.code);
              flyToCountry(c);
            },
            onMouseLeave: () => {
              setHovered(null);
              resumeAutoRotate();
            },
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.04 },
            animate: {
              scale: isHovered ? 1.04 : 1,
              x: isHovered ? 6 : 0
            },
            className: `group flex items-center gap-2 p-2.5 rounded-lg bg-card border transition-all duration-300 text-left ${isHovered ? "border-brand-gold shadow-elegant bg-brand-gold/5" : "border-border hover:border-brand-gold hover:shadow-elegant"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `h-7 w-10 flex-shrink-0 rounded-sm bg-muted flex items-center justify-center shadow-card transition-transform overflow-hidden ${isHovered ? "rotate-6 scale-110" : ""}`, children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: FLAG_MAP[c.code],
                  alt: c.name,
                  className: "h-full w-full object-contain"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: `text-xs font-semibold truncate leading-tight transition-colors ${isHovered ? "text-brand-gold" : "text-secondary"}`, children: c.name }),
                /* @__PURE__ */ jsx("div", { className: "text-[9px] uppercase tracking-wide text-muted-foreground", children: "Study · Work" })
              ] }),
              /* @__PURE__ */ jsx(ArrowRight, { className: `h-3 w-3 flex-shrink-0 transition-all ${isHovered ? "opacity-100 translate-x-0 text-brand-gold" : "opacity-0 -translate-x-1 text-brand-gold"}` })
            ]
          },
          c.code
        );
      }) })
    ] }),
    selected && typeof document !== "undefined" && createPortal(
      /* @__PURE__ */ jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.25 },
          className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm",
          onClick: () => setSelected(null),
          children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.92, y: 30 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              transition: { type: "spring", stiffness: 200, damping: 22 },
              onClick: (e) => e.stopPropagation(),
              className: "relative w-full max-w-2xl bg-card rounded-3xl shadow-elegant overflow-hidden border border-border",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative h-32 bg-gradient-navy overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute inset-0 opacity-30",
                      style: {
                        backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute -right-4 -bottom-4 opacity-20 select-none", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: FLAG_MAP[selected.code],
                      alt: selected.name,
                      className: "w-48 h-32 object-contain"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setSelected(null),
                      "aria-label": "Close",
                      className: "absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur grid place-items-center text-white transition-colors",
                      children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-6 text-white", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-1 flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
                      " Destination"
                    ] }),
                    /* @__PURE__ */ jsxs("h3", { className: "font-display text-3xl font-bold flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: FLAG_MAP[selected.code],
                          alt: selected.name,
                          className: "h-7 w-10 object-contain rounded-sm flex-shrink-0"
                        }
                      ),
                      selected.name
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 max-h-[60vh] overflow-y-auto", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground italic mb-6", children: selected.tagline }),
                  /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                        " Why Choose"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1.5", children: selected.highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-foreground/85 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" }),
                        h
                      ] }, h)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
                        " Popular Programs"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: selected.programs.map((p) => /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "text-[11px] px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border",
                          children: p
                        },
                        p
                      )) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-widest text-primary font-bold mb-2", children: "Key Perks" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: selected.perks.map((p) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-foreground/85", children: [
                        "• ",
                        p
                      ] }, p)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/enquiry",
                        onClick: () => setSelected(null),
                        className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform",
                        children: [
                          "Get Free Counselling ",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: "/services",
                        onClick: () => setSelected(null),
                        className: "inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold border border-border hover:bg-accent/70 transition-colors",
                        children: "View Services"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        }
      ) }),
      document.body
    )
  ] });
}
const heroImg = "/global-gateway/assets/hero-airport-BTT6Y2Np.jpg";
const nurseImg = "/global-gateway/assets/nurse-germany-ChmHxKFO.jpg";
const germanyImg = "/global-gateway/assets/germany-vKwHbgAZ.jpg";
const studentsImg = "/global-gateway/assets/students-DE18577p.jpg";
const uniBathSpa = "/global-gateway/assets/uni-bath-spa-CIgVnHrt.png";
const uniUEL = "/global-gateway/assets/uni-uel-E-vrYnVj.png";
const uniRGU = "/global-gateway/assets/uni-rgu-BuYkJIu3.png";
const uniHeriot = "/global-gateway/assets/uni-heriot-watt-CvBwLh7L.png";
const uniGCU = "/global-gateway/assets/uni-gcu-CmDgt0VE.png";
const uniUWL = "/global-gateway/assets/uni-uwl-DJ1YUK-t.png";
const uniNapier = "/global-gateway/assets/uni-napier-CSBbV-V1.png";
const uniHerts = "/global-gateway/assets/uni-herts-piJnwQcY.png";
const heroImg2 = "/global-gateway/assets/1-C6ljmK8S.jpeg";
const counsellingSteps = [{
  icon: Compass,
  label: "Career Counselling"
}, {
  icon: Plane,
  label: "Choose Destination"
}, {
  icon: BookOpen,
  label: "Universities / Courses"
}, {
  icon: Award,
  label: "Admissions / Scholarships"
}, {
  icon: FileCheck,
  label: "Visas"
}, {
  icon: GraduationCap,
  label: "Travel"
}];
const services = [{
  icon: Stethoscope,
  title: "Nursing Jobs in Germany",
  desc: "Opportunities with top German hospitals."
}, {
  icon: HeartHandshake,
  title: "Ausbildung",
  desc: "Germany's paid vocational training."
}, {
  icon: GraduationCap,
  title: "Overseas Education",
  desc: "Germany, UK, Canada, Australia, USA, NZ & EU."
}, {
  icon: Building2,
  title: "Healthcare Recruitment",
  desc: "Hospitals & institutions across Europe."
}, {
  icon: FileCheck,
  title: "Visa Guidance",
  desc: "Complete documentation support end-to-end."
}, {
  icon: Languages,
  title: "German Language",
  desc: "A1 to B2 certification programs."
}, {
  icon: Plane,
  title: "Pre & Post Arrival",
  desc: "Assistance until successful settlement."
}, {
  icon: BookOpen,
  title: "IELTS / TOEFL / PTE / GRE",
  desc: "Test prep tailored to your destination."
}];
const skills = [{
  label: "Student Visas",
  value: 100
}, {
  label: "Spouse Visas",
  value: 100
}, {
  label: "Business Visas",
  value: 100
}, {
  label: "Immigration",
  value: 100
}, {
  label: "Student Loans",
  value: 100
}];
const testimonials = [{
  name: "Sai Madhav",
  text: "I will recommend AR to my friends and others. The information I got from Harsha bro about Germany is genuine and unbiased. With the information I had forehand, I did not come across any surprises when I landed in Germany."
}, {
  name: "Vijay Kumar",
  text: "It has been an amazing experience with AR. From counselling, until I arrived in Germany, AR took care of everything. I should also thank Anil Kumar for receiving me and guiding me to settle down quickly."
}, {
  name: "Ram Reddy",
  text: "My experience with AR was very good. Anil Kumar sir assisted me in selection of university and course. The best part is AR helped me find an accommodation before I arrived."
}];
const processSteps = [{
  n: 1,
  icon: Handshake,
  title: "Initial Consultation",
  desc: "Assess Goals & Options"
}, {
  n: 2,
  icon: School,
  title: "University Selection",
  desc: "Choose the Right School"
}, {
  n: 3,
  icon: ClipboardCheck,
  title: "Application Preparation",
  desc: "Craft Your Application"
}, {
  n: 4,
  icon: GraduationCap,
  title: "Test Preparation",
  desc: "Prepare for Exams"
}, {
  n: 5,
  icon: Send,
  title: "Submit Applications",
  desc: "Send Your Documents"
}, {
  n: 6,
  icon: Stamp,
  title: "Visa Assistance",
  desc: "Get Visa Support"
}, {
  n: 7,
  icon: Briefcase,
  title: "Pre-Departure Guidance",
  desc: "Plan for Your Move"
}];
const universities = [{
  name: "Bath Spa University",
  logo: uniBathSpa
}, {
  name: "University of East London",
  logo: uniUEL
}, {
  name: "Robert Gordon University Aberdeen",
  logo: uniRGU
}, {
  name: "Heriot Watt University",
  logo: uniHeriot
}, {
  name: "Glasgow Caledonian University",
  logo: uniGCU
}, {
  name: "University of West London",
  logo: uniUWL
}, {
  name: "Edinburgh Napier University",
  logo: uniNapier
}, {
  name: "University of Hertfordshire",
  logo: uniHerts
}];
function Index() {
  const heroImages = [heroImg, heroImg2, heroImg3];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxs("div", { className: "ar-page", children: [
      /* @__PURE__ */ jsxs("section", { className: "ar-hero relative flex items-center overflow-hidden bg-red-800", children: [
        heroImages.map((image, index) => /* @__PURE__ */ jsx("img", { src: image, alt: `Hero ${index + 1}`, className: `absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 brightness-75 ${index === currentImage ? "opacity-100" : "opacity-0"}`, style: {
          zIndex: 0
        } }, index)),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20", style: {
          zIndex: 1
        } }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -right-32 top-10 h-96 w-96 rounded-full border border-brand-gold/20 animate-spin-slow hidden md:block", style: {
          zIndex: 1
        } }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -right-20 top-24 h-72 w-72 rounded-full border-2 border-dashed border-white/10 animate-counter-spin hidden md:block", style: {
          zIndex: 1
        } }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 pb-24 w-full", style: {
          position: "relative",
          zIndex: 2,
          paddingTop: "80px"
        }, children: /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "max-w-3xl text-white", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs uppercase tracking-[0.2em] text-brand-gold border border-white/20 mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
            "AR Overseas Consultancy (OPC) Pvt. Ltd."
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6", style: {
            textShadow: "0 4px 20px rgba(0,0,0,0.8)"
          }, children: [
            "Education to",
            " ",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-gold bg-clip-text text-transparent", children: "Employment" }),
            /* @__PURE__ */ jsx("span", { className: "block text-2xl sm:text-3xl md:text-4xl mt-3 font-display italic text-white/95", style: {
              textShadow: "0 4px 20px rgba(0,0,0,0.8)"
            }, children: "Your Trusted Path." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-xl text-white/95 max-w-2xl mb-8 leading-relaxed", style: {
            textShadow: "0 2px 12px rgba(0,0,0,0.8)"
          }, children: "Your trusted partner for Overseas Education & Healthcare Recruitment. We turn your dream of studying or working abroad into reality." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/enquiry", className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300", children: [
              "Free Counselling",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/jobs-germany", className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-all duration-300", children: "Jobs in Germany" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2", children: heroImages.map((_, index) => /* @__PURE__ */ jsx("button", { onClick: () => setCurrentImage(index), className: `h-2 rounded-full transition-all duration-300 ${currentImage === index ? "w-8 bg-brand-gold" : "w-2 bg-white/60"}` }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "ar-steps-strip", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-4", children: counsellingSteps.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.3 + i * 0.08
        }, className: "flex flex-col items-center text-center text-white", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6 mb-1.5 text-brand-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs font-medium leading-tight", children: s.label })
        ] }, s.label)) }) }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12 md:mb-20", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "What We Do" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 mb-4 text-secondary", children: "Our Universe of Services" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Eight pillars orbiting one mission — your global career." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto aspect-square", style: {
          width: "min(100%, 650px)"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-primary/20 animate-spin-slow", style: {
            width: "78%"
          } }),
          /* @__PURE__ */ jsx("div", { className: "ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-dashed border-brand-gold/30 animate-counter-spin", style: {
            width: "55%"
          } }),
          /* @__PURE__ */ jsx("div", { className: "ar-deco absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full border border-primary/10", style: {
            width: "36%"
          } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
            scale: 1.05
          }, className: "relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-48 xl:w-48 rounded-full bg-gradient-brand text-primary-foreground flex flex-col items-center justify-center shadow-glow z-10 text-center px-2", children: [
            /* @__PURE__ */ jsx("span", { className: "ar-deco absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" }),
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 mb-1 md:mb-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-[10px] sm:text-xs md:text-base xl:text-lg leading-tight", children: "AR Overseas" }),
            /* @__PURE__ */ jsx("span", { className: "text-[7px] sm:text-[8px] xl:text-[10px] uppercase tracking-widest text-brand-gold mt-0.5 md:mt-1", children: "Trusted Path" })
          ] }) }),
          services.map((s, i) => {
            const angle = i / services.length * Math.PI * 2 - Math.PI / 2;
            const r = 39;
            const left = 37 + Math.cos(angle) * r;
            const top = 40 + Math.sin(angle) * r;
            return /* @__PURE__ */ jsx(motion.div, { initial: {
              opacity: 0,
              scale: 0
            }, whileInView: {
              opacity: 1,
              scale: 1
            }, viewport: {
              once: true
            }, transition: {
              delay: i * 0.08,
              type: "spring"
            }, whileHover: {
              scale: 1.08,
              zIndex: 20
            }, className: "absolute group", style: {
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)"
            }, children: /* @__PURE__ */ jsxs("div", { className: "relative w-20 sm:w-28 md:w-36 xl:w-40 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-2xl rotate-45 bg-gradient-navy shadow-elegant flex items-center justify-center group-hover:rotate-[225deg] transition-transform duration-700", children: /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 xl:h-8 xl:w-8 text-brand-gold -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-secondary mt-1.5 sm:mt-2 md:mt-3 text-[9px] sm:text-[11px] md:text-xs xl:text-sm leading-tight", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "hidden sm:block text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground mt-1 leading-snug", children: s.desc })
            ] }) }, s.title);
          })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary to-brand-navy", children: [
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute inset-0 opacity-[0.07]", style: {
          backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)"
        } }),
        [...Array(12)].map((_, i) => /* @__PURE__ */ jsx(motion.div, { className: "ar-deco absolute h-1 w-1 rounded-full bg-brand-gold/60", style: {
          left: `${i * 8.3 % 100}%`,
          top: `${i * 17 % 100}%`
        }, animate: {
          y: [0, -30, 0],
          opacity: [0.2, 1, 0.2]
        }, transition: {
          duration: 3 + i % 3,
          repeat: Infinity,
          delay: i * 0.3
        } }, i)),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative", children: [
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6
          }, className: "text-center max-w-2xl mx-auto mb-16", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold", children: "Our Roadmap" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 mb-3 text-white font-display", children: "Our Step-by-Step Process" }),
            /* @__PURE__ */ jsx("div", { className: "h-0.5 w-24 bg-gradient-gold mx-auto mb-3" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/70 italic", children: "Guiding You to Study Abroad Success" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "ar-deco absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-red to-brand-gold -translate-x-1/2" }),
            processSteps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return /* @__PURE__ */ jsxs(motion.div, { initial: {
                opacity: 0,
                x: isLeft ? -40 : 40,
                y: 20
              }, whileInView: {
                opacity: 1,
                x: 0,
                y: 0
              }, viewport: {
                once: true,
                margin: "-50px"
              }, transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 120
              }, className: `relative mb-8 md:mb-14 flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`, children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
                  scale: 1.2,
                  rotate: 360
                }, transition: {
                  duration: 0.6
                }, className: "relative h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-gradient-brand shadow-glow flex items-center justify-center text-primary-foreground border-2 sm:border-4 border-secondary", children: [
                  /* @__PURE__ */ jsx("span", { className: "ar-deco absolute inset-0 rounded-full border-2 border-brand-gold/40 animate-pulse-ring" }),
                  /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-brand-gold text-secondary text-[9px] sm:text-xs font-bold flex items-center justify-center shadow-md", children: s.n })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: `w-[44%] ${isLeft ? "pr-8 sm:pr-12 md:pr-16 text-right" : "pl-8 sm:pl-12 md:pl-16 text-left"}`, children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
                  scale: 1.03,
                  y: -3
                }, className: "ar-card-clip group relative bg-white/5 border border-white/10 hover:border-brand-gold/50 rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500 shadow-card", children: [
                  /* @__PURE__ */ jsx("div", { className: "ar-deco absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-brand-gold/0 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxs("div", { className: `text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1 ${isLeft ? "text-right" : "text-left"}`, children: [
                      "Step ",
                      s.n
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-white text-xs sm:text-base md:text-xl leading-tight", children: s.title }),
                    /* @__PURE__ */ jsx("p", { className: "hidden sm:block text-xs md:text-sm text-white/70 mt-1.5", children: s.desc })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "w-[44%]" })
              ] }, s.n);
            })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 bg-muted/40", children: [
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-gold opacity-10 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative", children: [
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            x: -30
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.7
          }, className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" }),
            /* @__PURE__ */ jsx("img", { src: studentsImg, alt: "Happy international students", className: "relative rounded-[2.5rem] shadow-elegant w-full", loading: "lazy" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gradient-brand text-primary-foreground shadow-glow flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-display font-bold", children: "10+" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider", children: "Years Trust" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            x: 30
          }, whileInView: {
            opacity: 1,
            x: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.7
          }, children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Who We Are?" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 mb-5 text-secondary", children: "Welcome to AR Overseas Consultancy" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Your trusted partner for Overseas Education & Healthcare Recruitment. We are committed to empowering Indian students and nursing professionals with global career opportunities through transparent processes, expert guidance, and trusted European partnerships." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 mt-8", children: [["100%", "Career Counselling"], ["100%", "Admission Guidance"], ["100%", "Visa Guidance"]].map(([n, l]) => /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsx("div", { className: "h-28 w-28 bg-gradient-brand rotate-45 rounded-2xl flex items-center justify-center shadow-glow group-hover:rotate-[225deg] transition-transform duration-700", children: /* @__PURE__ */ jsxs("div", { className: "-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700 text-center text-primary-foreground", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-display font-bold", children: n }),
              /* @__PURE__ */ jsx("div", { className: "text-[9px] uppercase tracking-wider px-2 leading-tight", children: l })
            ] }) }) }, l)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-28 bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative", children: [
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 30
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.6
          }, className: "text-center mb-14", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Global Reach" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 text-secondary font-display", children: "Where We Send You" }),
            /* @__PURE__ */ jsx("div", { className: "h-0.5 w-24 bg-gradient-brand mx-auto mt-3 mb-3" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Your destination, our expertise — across continents." })
          ] }),
          /* @__PURE__ */ jsx(CountryGlobe, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "relative py-24 md:py-32 overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[80px]" }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-gold/8 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute bottom-0 right-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 40
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.7
          }, className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-gradient-to-r from-transparent to-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-primary font-semibold", children: "Trusted Partners" }),
              /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-gradient-to-l from-transparent to-primary" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-secondary font-display leading-tight", children: [
              "Our Partner",
              " ",
              /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary via-brand-gold to-primary bg-clip-text text-transparent", children: "Universities" }),
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.3
          }, className: "relative group/marquee", children: [
            /* @__PURE__ */ jsx("div", { className: "ar-deco absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none", style: {
              background: "linear-gradient(to right, #ffffff, transparent)"
            } }),
            /* @__PURE__ */ jsx("div", { className: "ar-deco absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none", style: {
              background: "linear-gradient(to left, #ffffff, transparent)"
            } }),
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-y border-border py-8", children: /* @__PURE__ */ jsx("div", { className: "flex items-stretch", style: {
              width: "max-content",
              animation: "marquee-scroll 30s linear infinite"
            }, children: [...universities, ...universities].map((u, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center gap-3 flex-shrink-0 px-8 cursor-pointer group/item", style: {
              minWidth: 170
            }, children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-32 w-48 flex items-center justify-center rounded-2xl border-2 border-border group-hover/item:border-primary/40 transition-all duration-300 group-hover/item:scale-105 group-hover/item:-translate-y-1 group-hover/item:shadow-lg bg-white", children: [
                /* @__PURE__ */ jsx("div", { className: "ar-deco absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300", style: {
                  background: "radial-gradient(circle at center, rgba(var(--primary-rgb, 30,80,200),0.06) 0%, transparent 70%)"
                } }),
                /* @__PURE__ */ jsx("img", { src: u.logo, alt: u.name, style: {
                  width: "150px",
                  height: "90px",
                  objectFit: "contain"
                }, className: "transition-all duration-300 contrast-125 saturate-150 scale-125 group-hover/item:scale-110" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.12em] text-secondary/70 group-hover/item:text-primary font-semibold transition-colors duration-300 text-center whitespace-nowrap", children: u.name }),
              /* @__PURE__ */ jsx("div", { className: "ar-deco absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-border" })
            ] }, i)) }) })
          ] }),
          /* @__PURE__ */ jsx("style", { children: `
              @keyframes marquee-scroll {
                from { transform: translateX(0); }
                to   { transform: translateX(-50%); }
              }
              .group\\/marquee:hover div[style*="marquee-scroll"] {
                animation-play-state: paused !important;
              }
            ` }),
          /* @__PURE__ */ jsx(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.5
          }, className: "flex justify-center mt-10", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-semibold", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "8 Partner Universities · Direct Admissions",
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-navy text-secondary-foreground", children: [
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute inset-0 opacity-10", style: {
          backgroundImage: "radial-gradient(circle at 10% 20%, var(--brand-gold) 0%, transparent 50%), radial-gradient(circle at 90% 80%, var(--brand-red) 0%, transparent 50%)"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid lg:grid-cols-2 gap-14 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold", children: "Why Us" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 mb-6", children: "Why Choose Us?" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["100% Transparent Process", "Expert Counselors with Years of Experience", "Tie-ups with Top German Employers", "End-to-End Support Until Job Joining", "Faster Application & Visa Processing", "Personalized Career Guidance", "Tie-ups with top universities & strong network with German nurse employers"].map((t, i) => /* @__PURE__ */ jsxs(motion.li, { initial: {
              opacity: 0,
              x: -20
            }, whileInView: {
              opacity: 1,
              x: 0
            }, viewport: {
              once: true
            }, transition: {
              delay: i * 0.05
            }, className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-secondary-foreground/90", children: t })
            ] }, t)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold", children: "Expertise" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 mb-8", children: "Skills of Consultancy" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-6", children: skills.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              scale: 0.6
            }, whileInView: {
              opacity: 1,
              scale: 1
            }, viewport: {
              once: true
            }, transition: {
              delay: i * 0.1
            }, className: "flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative h-28 w-28", children: [
                /* @__PURE__ */ jsxs("svg", { className: "h-full w-full -rotate-90", viewBox: "0 0 100 100", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "42", stroke: "rgba(255,255,255,0.1)", strokeWidth: "8", fill: "none" }),
                  /* @__PURE__ */ jsx(motion.circle, { cx: "50", cy: "50", r: "42", stroke: "var(--brand-gold)", strokeWidth: "8", fill: "none", strokeLinecap: "round", strokeDasharray: 2 * Math.PI * 42, initial: {
                    strokeDashoffset: 2 * Math.PI * 42
                  }, whileInView: {
                    strokeDashoffset: 2 * Math.PI * 42 * (1 - s.value / 100)
                  }, viewport: {
                    once: true
                  }, transition: {
                    duration: 1.4,
                    delay: i * 0.1,
                    ease: "easeOut"
                  } })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-xl font-display font-bold text-brand-gold", children: [
                  s.value,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs mt-3 font-medium", children: s.label })
            ] }, s.label)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Testimonials" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-3 text-secondary", children: "Student Stories" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-10 max-w-6xl mx-auto", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1
        }, className: "relative pl-6", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand rounded-full" }),
          /* @__PURE__ */ jsx(Quote, { className: "h-10 w-10 text-primary/30 mb-3" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed italic mb-5", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-bold shadow-glow", children: t.name[0] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-secondary", children: t.name }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-brand-gold", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current" }, j)) })
            ] })
          ] })
        ] }, t.name)) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative py-24", children: [
        /* @__PURE__ */ jsx("img", { src: germanyImg, alt: "Germany", className: "ar-deco absolute inset-0 w-full h-full object-cover", loading: "lazy", style: {
          zIndex: 0
        } }),
        /* @__PURE__ */ jsx("div", { className: "ar-deco absolute inset-0 bg-gradient-hero", style: {
          zIndex: 1
        } }),
        /* @__PURE__ */ jsxs("div", { className: "ar-deco absolute inset-0 flex items-center justify-center", style: {
          zIndex: 1
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "h-[500px] w-[500px] rounded-full border border-white/10 animate-spin-slow" }),
          /* @__PURE__ */ jsx("div", { className: "absolute h-[380px] w-[380px] rounded-full border border-dashed border-brand-gold/30 animate-counter-spin" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center text-secondary-foreground max-w-3xl", style: {
          position: "relative",
          zIndex: 2
        }, children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-12 w-12 mx-auto mb-5 text-brand-gold animate-float" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-5", children: "Your Global Journey Begins Here" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-white/85 mb-8", children: "Choose AR Overseas Consultancy and make your international career dreams come true." }),
          /* @__PURE__ */ jsxs(Link, { to: "/enquiry", className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300", children: [
            "Start Your Journey ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Featured" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mt-3 mb-4 text-secondary", children: "Nursing Career in Germany" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Earn 8–10× more than Indian nursing salaries. Work in the world's #4 healthcare system with full family reunification, free education for children, and a clear PR pathway." }),
          /* @__PURE__ */ jsxs(Link, { to: "/jobs-germany", className: "inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all", children: [
            "Learn More ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "ar-deco absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[3rem] animate-spin-slow" }),
          /* @__PURE__ */ jsx("img", { src: nurseImg, alt: "Nurse in Germany", className: "relative rounded-[2.5rem] shadow-elegant", loading: "lazy" })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
