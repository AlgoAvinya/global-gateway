import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence, useInView } from "framer-motion";
const jobs1 = "/assets/jobs1-Dv7mTEqq.jpeg";
const jobs2 = "/assets/jobs2-CWy0dLAn.jpeg";
const ease = [0.22, 1, 0.36, 1];
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease
    }
  }
};
const fadeIn = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease
    }
  }
};
const offerings = [{
  emoji: "🇩🇪",
  title: "German Language Training",
  desc: "A1 → B2 with certified trainers"
}, {
  emoji: "💼",
  title: "Job Assistance in Germany",
  desc: "Interview prep & employer matching"
}, {
  emoji: "🛡️",
  title: "Visa & Documentation",
  desc: "End-to-end paperwork & filings"
}, {
  emoji: "🤝",
  title: "Ethical Recruitment",
  desc: "100% transparent, end-to-end support"
}];
const stats = [{
  value: "1.69M+",
  label: "Nurses in Germany (2023)",
  icon: "👩‍⚕️"
}, {
  value: "€2.8–3.2K",
  label: "Monthly Salary",
  icon: "💶"
}, {
  value: "#4",
  label: "Healthcare Globally",
  icon: "🏥"
}, {
  value: "150K+",
  label: "Foreign Nurses by 2026",
  icon: "✈️"
}];
const benefits = [{
  emoji: "💶",
  title: "Multiply Your Earnings",
  desc: "Earn 8–10× more than Indian nursing salaries.",
  side: "left"
}, {
  emoji: "👨‍👩‍👧",
  title: "Settle Abroad with Family",
  desc: "Bring spouse and children under Family Reunification Visa.",
  side: "right"
}, {
  emoji: "❤️",
  title: "World-Class Benefits",
  desc: "Free or subsidised healthcare and free education for children.",
  side: "left"
}, {
  emoji: "🏅",
  title: "Permanent Residency",
  desc: "Apply for PR after 3 years; citizenship possible in 5–6 years.",
  side: "right"
}];
const workCulture = ["High demand: 150,000+ nurses required", "Salary: €2,500 – €3,400 per month", "Global Ranking: #4 healthcare system worldwide", "Paid Leave: Approx. 26 days annually", "Work-Life Balance: Healthy and stable lifestyle", "Secure Career: Respected and stable profession"];
const eligibility = ["Registered Nurse holding a valid license", "Seeking a career in Germany", "Qualification: BSc / MSc Nursing or GNM", "German Language: B1 / B2 (Goethe, telc, ÖSD)", "Age preferred below 42 years", "Experience: Freshers & experienced nurses welcome"];
const basicRequirements = ["GNM / B.Sc / M.Sc Nursing", "Minimum 1–2 years experience (preferred)", "German B1 Language Certification", "German language proficiency (B1/B2)", "Valid passport", "Medical fitness certificate"];
const documents = ["Nursing degree / diploma", "Nursing registration certificate", "Academic transcripts", "Experience certificates", "Passport", "Updated CV", "Passport-size photographs", "Police clearance certificate"];
const langLevels = [{
  lvl: "A1",
  name: "Beginner",
  time: "1.5 Months",
  desc: "Basic vocabulary, self-introduction, simple questions, everyday words.",
  active: true,
  redAccent: false
}, {
  lvl: "A2",
  name: "Elementary",
  time: "1.5 Months",
  desc: "Daily conversations, common expressions, basic patient interactions.",
  active: true,
  redAccent: false
}, {
  lvl: "B1",
  name: "Intermediate",
  time: "2 Months",
  desc: "Workplace communication, patient care, understanding medical basics.",
  active: true,
  redAccent: true
}, {
  lvl: "B2",
  name: "Proficient",
  time: "3 Months",
  desc: "Professional-level communication, detailed patient interaction, documentation.",
  active: true,
  redAccent: true
}, {
  lvl: "C1",
  name: "Advanced",
  time: "—",
  desc: "Fluent confident professional communication, complex medical discussions.",
  active: false,
  redAccent: false
}, {
  lvl: "C2",
  name: "Mastery",
  time: "—",
  desc: "Native-level accuracy, full command of medical and academic language.",
  active: false,
  redAccent: false
}];
const steps = [{
  s: "Initial Career Consultation",
  icon: "💬",
  isRed: false
}, {
  s: "Document Submission",
  icon: "📋",
  isRed: true
}, {
  s: "Language Training & Clear B1/B2 Certification (Goethe / telc / ÖSD)",
  icon: "🇩🇪",
  isRed: false
}, {
  s: "Interview Preparation",
  icon: "🎯",
  isRed: true
}, {
  s: "Online Interviews Assistance with German Employers",
  icon: "💻",
  isRed: false
}, {
  s: "Receive Offer Letter: After Attending Online Interviews",
  icon: "📩",
  isRed: true
}, {
  s: "Document Translation & Registration",
  icon: "📄",
  isRed: false
}, {
  s: "Approval Documents: Dependent on State to State",
  icon: "✅",
  isRed: true
}, {
  s: "Visa & Recognition Support",
  icon: "🛡️",
  isRed: false
}, {
  s: "Fly to Germany & Start Career",
  icon: "✈️",
  isRed: true
}];
const whyAR = [{
  text: "Flexible Morning & Evening Batches",
  icon: "🕐",
  isRed: false
}, {
  text: "Online & Offline Learning Options",
  icon: "💻",
  isRed: true
}, {
  text: "20+ Model Papers Practice",
  icon: "📝",
  isRed: false
}, {
  text: "Top-Rated Faculty",
  icon: "⭐",
  isRed: true
}, {
  text: "Certified Trainers",
  icon: "🏅",
  isRed: false
}, {
  text: "Dedicated Mentor Support",
  icon: "👨‍🏫",
  isRed: true
}, {
  text: "Complete Exam & Interview Preparation",
  icon: "🎯",
  isRed: false
}];
const support = ["German Language Training (A1–B2)", "Interview Preparation", "Documentation & Translation", "Visa & Work Permit Assistance", "Travel & Airport Pickup Assistance", "Adaptation Program Guidance", "Family Reunification Assistance", "Your Success Is Our Responsibility"];
const faqs = [{
  q: "How much can I earn in Germany?",
  a: "Before Professional Recognition: €2,800/month (~₹2.8L). After Professional Recognition: €3,200/month (~₹3.2L). Benefits include paid leave, healthcare, financial security and pension. Salary increases with experience, specialisation and further certifications."
}, {
  q: "How is the work culture in Germany?",
  a: "The world's best employee-friendly work culture — 40-hour work week, approx. 45 days of annual leave including public holidays, overtime paid extra or compensated with time off. Germany offers a safe, respectful, and women-friendly work environment with strong legal protections for nurses."
}, {
  q: "Can I bring my family with me?",
  a: "Yes. Germany allows family reunification — spouse and children may join you. Spouse can work and access free education opportunities. Children receive free education from primary school to PhD. Family Reunification begins after professional recognition (usually 6–8 months after arrival)."
}, {
  q: "Do I need German language certification?",
  a: "Yes. B1 / B2 certification is mandatory for licensing and employment in Germany."
}, {
  q: "Can freshers apply?",
  a: "Yes. Experienced candidates are preferred, but freshers with B1/B2 certification can apply."
}, {
  q: "Is the process safe and legal?",
  a: "Yes. All placements are through authorised German employers. AR Overseas Consultancy (OPC) Pvt. Ltd. follows best recruitment assistance practices."
}];
const germanyStats = [{
  num: "1.69M+",
  txt: "nurses employed in Germany (2023)"
}, {
  num: "44/100",
  txt: "applicants per 100 vacancies — severe shortage"
}, {
  num: "150K",
  txt: "foreign nurses expected to be hired by 2026"
}, {
  num: "+4.7%",
  txt: "salary hikes recorded in 2024"
}];
const heroImages = [jobs1, jobs2];
function Marquee({
  items,
  speed = 30,
  dark = false
}) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden w-full", children: /* @__PURE__ */ jsx("div", { className: "flex w-max gap-0", style: {
    animation: `marqueeScroll ${speed}s linear infinite`
  }, children: [...items, ...items, ...items].map((item, i) => /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-3 px-6 text-sm font-semibold whitespace-nowrap ${dark ? "text-white/85" : "text-[#1A237E]/80"}`, children: [
    /* @__PURE__ */ jsx("span", { className: `h-2 w-2 rounded-full flex-shrink-0 ${["bg-[#D32F2F]", "bg-[#1A237E]", "bg-red-400", "bg-blue-400", "bg-[#D32F2F]", "bg-[#1A237E]"][i % 6]}` }),
    item
  ] }, i)) }) });
}
function FlipStat({
  value,
  label,
  icon,
  delay
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setFlipped(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);
  return /* @__PURE__ */ jsx("div", { ref, className: "relative h-36 cursor-pointer group", style: {
    perspective: 800
  }, onClick: () => setFlipped(!flipped), children: /* @__PURE__ */ jsxs(motion.div, { animate: {
    rotateY: flipped ? 180 : 0
  }, transition: {
    duration: 0.7,
    ease
  }, style: {
    transformStyle: "preserve-3d",
    position: "absolute",
    inset: 0
  }, children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 rounded-2xl bg-white border-2 border-[#1A237E]/15 flex flex-col items-center justify-center shadow-lg shadow-[#1A237E]/10", style: {
      backfaceVisibility: "hidden"
    }, children: [
      /* @__PURE__ */ jsx("span", { className: "text-5xl mb-1", children: icon }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-[#1A237E]/60 font-semibold uppercase tracking-widest", children: label })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-xl", style: {
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
      background: "linear-gradient(135deg, #D32F2F, #B71C1C)"
    }, children: [
      /* @__PURE__ */ jsx("span", { className: "font-black text-white text-3xl md:text-4xl drop-shadow", children: value }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-red-100/80 font-semibold uppercase tracking-widest mt-1 text-center px-3", children: label })
    ] })
  ] }) });
}
function TimelineStep({
  step,
  index,
  total
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px"
  });
  const isLeft = index % 2 === 0;
  return /* @__PURE__ */ jsxs(motion.div, { ref, initial: {
    opacity: 0,
    x: isLeft ? -40 : 40
  }, animate: inView ? {
    opacity: 1,
    x: 0
  } : {}, transition: {
    duration: 0.6,
    delay: index * 0.07,
    ease
  }, className: `flex items-center gap-4 md:gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} relative`, children: [
    /* @__PURE__ */ jsx("div", { className: `flex-1 ${isLeft ? "text-right" : "text-left"}`, children: /* @__PURE__ */ jsxs("div", { className: `inline-block p-4 rounded-2xl border-2 shadow-md max-w-xs ${isLeft ? "ml-auto" : ""} ${step.isRed ? "border-[#D32F2F]/20 bg-red-50" : "border-[#1A237E]/15 bg-blue-50"}`, children: [
      /* @__PURE__ */ jsxs("span", { className: `text-xs font-bold uppercase tracking-widest block mb-1 ${step.isRed ? "text-[#D32F2F]" : "text-[#1A237E]"}`, children: [
        "Step ",
        String(index + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm font-semibold leading-snug", children: step.s })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center relative z-10", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 0,
        rotate: -180
      }, animate: inView ? {
        scale: 1,
        rotate: 0
      } : {}, transition: {
        duration: 0.5,
        delay: index * 0.07 + 0.2,
        ease
      }, className: `h-12 w-12 rounded-full flex items-center justify-center shadow-xl text-xl border-4 border-white ${step.isRed ? "bg-[#D32F2F]" : "bg-[#1A237E]"}`, children: step.icon }),
      index < total - 1 && /* @__PURE__ */ jsx(motion.div, { initial: {
        scaleY: 0
      }, animate: inView ? {
        scaleY: 1
      } : {}, transition: {
        duration: 0.4,
        delay: index * 0.07 + 0.35,
        ease
      }, className: "w-0.5 h-10 origin-top mt-1", style: {
        background: "linear-gradient(to bottom, #D32F2F60, #1A237E40)"
      } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1" })
  ] });
}
function FaqItem({
  q,
  a,
  index
}) {
  const [open, setOpen] = useState(false);
  const isRed = index % 2 === 0;
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: index * 0.05,
    ease
  }, className: `rounded-2xl border-2 overflow-hidden transition-all duration-300 mb-3 ${open ? isRed ? "border-[#D32F2F]/30 bg-red-50 shadow-lg shadow-red-100" : "border-[#1A237E]/20 bg-blue-50 shadow-lg shadow-blue-100" : "border-slate-200 bg-white hover:border-slate-300"}`, children: [
    /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpen(!open), className: "w-full p-5 flex items-center gap-4 text-left focus-visible:outline-none", children: [
      /* @__PURE__ */ jsx("span", { className: `h-7 w-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 transition-colors ${open ? isRed ? "bg-[#D32F2F]" : "bg-[#1A237E]" : "bg-slate-300"}`, children: index + 1 }),
      /* @__PURE__ */ jsx("span", { className: `font-bold text-sm flex-1 pr-4 transition-colors ${open ? "text-slate-900" : "text-slate-600"}`, children: q }),
      /* @__PURE__ */ jsx(motion.span, { animate: {
        rotate: open ? 45 : 0
      }, transition: {
        duration: 0.25
      }, className: `text-2xl font-light flex-shrink-0 ${isRed ? "text-[#D32F2F]" : "text-[#1A237E]"}`, children: "+" })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(motion.div, { initial: {
      height: 0,
      opacity: 0
    }, animate: {
      height: "auto",
      opacity: 1
    }, exit: {
      height: 0,
      opacity: 0
    }, transition: {
      duration: 0.3,
      ease
    }, className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200", children: a }) }) })
  ] });
}
function JobsGermany() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeRequirementsTab, setActiveRequirementsTab] = useState(0);
  const heroRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef
  });
  useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5e3);
    return () => clearInterval(t);
  }, []);
  const requirementTabs = [{
    title: "✅ Eligibility",
    items: eligibility,
    note: null
  }, {
    title: "🎓 Requirements",
    items: basicRequirements,
    note: null
  }, {
    title: "📄 Documents Required",
    items: documents,
    note: "We guide you step-by-step to ensure all documentation meets German standards."
  }];
  return /* @__PURE__ */ jsxs("div", { className: "font-sans bg-white text-slate-800 overflow-x-hidden", style: {
    marginTop: -120
  }, children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marqueeScroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }
        @keyframes spinSlow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes pulseBig { 0%,100% { transform: scale(1); opacity: 0.08 } 50% { transform: scale(1.12); opacity: 0.18 } }
        .spin-slow { animation: spinSlow 20s linear infinite; }
        .pulse-big { animation: pulseBig 6s ease-in-out infinite; }
      ` }),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative min-h-[75vh] overflow-hidden", style: {
      background: "#4A0404"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
        backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
        backgroundSize: "52px 52px"
      } }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 min-h-[95vh] relative z-10", style: {
        marginTop: -50,
        marginBottom: -50
      }, children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center min-h-[95vh]", children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: stagger, initial: "hidden", animate: "show", className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: fadeIn, className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6", style: {
            background: "rgba(211,47,47,0.20)",
            border: "1px solid rgba(239,83,80,0.40)"
          }, children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-red-400 animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-red-200 font-bold", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." })
          ] }),
          /* @__PURE__ */ jsxs(motion.h1, { variants: fadeUp, className: "font-display text-5xl md:text-7xl font-black leading-[1.05] mb-5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "Achieve Your" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { style: {
              background: "linear-gradient(90deg,#EF5350,#FFCDD2,#90CAF9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }, children: "German Nursing" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-white/90", children: "Dream" })
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-white/75 text-lg leading-relaxed max-w-xl mb-8", children: "Your trusted pathway to a successful nursing career in Germany — from classroom to career, we walk with you every step." }),
          /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(motion.a, { href: "#contact", whileHover: {
              scale: 1.04
            }, whileTap: {
              scale: 0.97
            }, className: "inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full", style: {
              background: "linear-gradient(135deg,#D32F2F,#B71C1C)"
            }, children: "🚀 Free Career Consultation" }),
            /* @__PURE__ */ jsx(motion.a, { href: "#process", whileHover: {
              scale: 1.04
            }, whileTap: {
              scale: 0.97
            }, className: "inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full border border-white/30 bg-white/10", children: "✈️ View Process" })
          ] }),
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn, className: "flex gap-2 mt-10", children: heroImages.map((_, i) => /* @__PURE__ */ jsx("button", { onClick: () => setHeroIdx(i), className: "rounded-full transition-all duration-300", style: {
            height: 8,
            width: i === heroIdx ? 28 : 8,
            background: i === heroIdx ? "#EF5350" : "rgba(255,255,255,0.35)"
          } }, i)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative h-[500px] lg:h-[650px] flex items-center justify-center", children: heroImages.map((src, i) => /* @__PURE__ */ jsx(motion.img, { src, alt: "", className: "absolute inset-0 w-full h-full object-contain", initial: {
          opacity: 0
        }, animate: {
          opacity: i === heroIdx ? 1 : 0
        }, transition: {
          duration: 1.2
        }, draggable: false }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 relative overflow-hidden", style: {
      background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse at 50% 50%, rgba(211,47,47,0.06), transparent 65%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
        /* @__PURE__ */ jsx(motion.p, { variants: fadeIn, initial: "hidden", whileInView: "show", viewport: {
          once: true
        }, className: "text-center text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold mb-4", children: "— Tap to reveal —" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsx(FlipStat, { ...s, delay: i * 200 + 400 }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1.5", style: {
        background: "linear-gradient(90deg, #1A237E, #D32F2F, #1A237E)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          x: -40
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7,
          ease
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-4", children: "About Us" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6", children: [
            "Connecting India's Healthcare Talent to",
            " ",
            /* @__PURE__ */ jsx("span", { style: {
              background: "linear-gradient(90deg, #D32F2F, #1A237E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }, children: "Global Opportunities" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-600 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." }),
            " is a trusted international recruitment assistant and language training organisation dedicated to helping Indian nurses build successful careers in Germany and other global destinations."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed mb-8", children: "Our mission is simple: to make international migration smooth, transparent, and stress-free for healthcare professionals. Headquartered in Hyderabad, Telangana, we work closely with international recruitment partners and certified language trainers to ensure quality outcomes for every candidate." }),
          /* @__PURE__ */ jsx("div", { className: "relative pl-5 border-l-4 border-[#D32F2F]", children: /* @__PURE__ */ jsx("p", { className: "text-[#D32F2F] font-black text-xl italic font-display", children: '"Empowering Nurses. Building Global Careers."' }) })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          x: 40
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7,
          ease,
          delay: 0.1
        }, className: "relative", children: [{
          label: "Best Recruitment Assistance Practices",
          emoji: "🏆",
          isRed: false
        }, {
          label: "Certified German Language Trainers",
          emoji: "📚",
          isRed: true
        }, {
          label: "Complete End-to-End Support",
          emoji: "🔄",
          isRed: false
        }, {
          label: "Trusted by Hundreds of Nurses",
          emoji: "❤️",
          isRed: true
        }].map((item, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          x: 30,
          rotate: 3
        }, whileInView: {
          opacity: 1,
          x: 0,
          rotate: 0
        }, whileHover: {
          scale: 1.03,
          x: 6
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1 + 0.2,
          duration: 0.5,
          ease
        }, className: "flex items-center gap-4 p-5 rounded-2xl border-2 shadow-md mb-4", style: item.isRed ? {
          background: "linear-gradient(135deg, #FFF5F5, #FFEBEE)",
          borderColor: "rgba(211,47,47,0.2)"
        } : {
          background: "linear-gradient(135deg, #F5F7FF, #E8EAF6)",
          borderColor: "rgba(26,35,126,0.15)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl", children: item.emoji }),
          /* @__PURE__ */ jsx("p", { className: "font-bold text-slate-800 text-sm", children: item.label })
        ] }, item.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-16 border-y overflow-hidden", style: {
      background: "linear-gradient(135deg, #E8EAF6 0%, #F5F7FF 50%, #E8EAF6 100%)",
      borderColor: "rgba(26,35,126,0.1)"
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 mb-10 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold", children: "Complete Solutions" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-black text-slate-900 mt-2", children: "We Offer Complete Career Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 mt-2 text-sm", children: "We help qualified Indian nurses secure high-paying jobs in Germany through our official recruitment partnerships." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden w-full", children: /* @__PURE__ */ jsx("div", { className: "flex w-max gap-6 px-6", style: {
        animation: "marqueeScroll 18s linear infinite"
      }, children: [...offerings, ...offerings, ...offerings].map((o, i) => /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 w-64 rounded-2xl border-2 p-6 shadow-md bg-white", style: {
        borderColor: i % 2 === 0 ? "rgba(26,35,126,0.15)" : "rgba(211,47,47,0.15)"
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "text-4xl block mb-3", children: o.emoji }),
        /* @__PURE__ */ jsx("h3", { className: "font-black text-slate-900 text-base mb-1", children: o.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs", children: o.desc })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden", style: {
      background: "linear-gradient(135deg, #1A237E 0%, #0D1757 50%, #B71C1C 100%)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse at 50% 0%, rgba(211,47,47,0.25), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", variants: stagger, viewport: {
          once: true
        }, className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-red-300 text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Germany by the Numbers" }),
          /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-white", children: "Why Germany Urgently Needs Nurses" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-0", children: germanyStats.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7,
          delay: i * 0.1,
          ease
        }, className: `flex items-center gap-8 py-8 border-b border-white/15 ${i % 2 !== 0 ? "flex-row-reverse text-right" : ""}`, children: [
          /* @__PURE__ */ jsx("div", { className: `flex-shrink-0 font-display font-black text-5xl md:text-7xl bg-clip-text text-transparent`, style: {
            background: i % 2 === 0 ? "linear-gradient(135deg, #EF5350, #FFCDD2)" : "linear-gradient(135deg, #90CAF9, #BBDEFB)",
            WebkitBackgroundClip: "text"
          }, children: s.num }),
          /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" }),
          /* @__PURE__ */ jsx("p", { className: `text-white/75 font-semibold text-lg max-w-xs ${i % 2 !== 0 ? "ml-auto" : ""}`, children: s.txt })
        ] }, s.num)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 relative overflow-hidden bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-16", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Why Germany?" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "Why Choose Germany for Your Nursing Career?" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-slate-500 mt-3 text-sm max-w-xl mx-auto", children: "Germany is the #1 destination for nurses due to job security, long-term settlement options, and continuous demand." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: benefits.map((b, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7,
        delay: i * 0.08,
        ease
      }, className: `flex items-center gap-10 md:gap-20 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          rotate: [0, -10, 10, -5, 0],
          scale: 1.1
        }, transition: {
          duration: 0.5
        }, className: "flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-3xl flex items-center justify-center text-5xl md:text-6xl shadow-2xl", style: {
          background: i % 2 === 0 ? "linear-gradient(135deg, #1A237E, #283593)" : "linear-gradient(135deg, #D32F2F, #B71C1C)"
        }, children: b.emoji }),
        /* @__PURE__ */ jsxs("div", { className: i % 2 !== 0 ? "text-right" : "", children: [
          /* @__PURE__ */ jsx("div", { className: `h-1 w-12 rounded-full mb-4 ${i % 2 === 0 ? "bg-[#1A237E]" : "bg-[#D32F2F]"}` }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl font-black text-slate-900 mb-3", children: b.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed max-w-md text-base", children: b.desc })
        ] })
      ] }, b.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 rounded-2xl overflow-hidden border-2 shadow-xl", style: {
        borderColor: "rgba(26,35,126,0.15)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "p-5 border-b", style: {
          background: "linear-gradient(90deg, #1A237E, #D32F2F)",
          borderColor: "rgba(255,255,255,0.1)"
        }, children: /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-black text-white text-center", children: "Why Work as a Nurse in Germany?" }) }),
        /* @__PURE__ */ jsx("div", { className: "py-5 overflow-hidden", style: {
          background: "#F5F7FF"
        }, children: /* @__PURE__ */ jsx(Marquee, { items: workCulture, speed: 22 }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden", style: {
      background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none", style: {
        background: "rgba(211,47,47,0.06)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
        /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-12", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
          once: true
        }, children: [
          /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Opportunities" }),
          /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "Work as a Nurse in Germany" }),
          /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-slate-500 mt-3 text-sm", children: "Opportunities in hospitals & elderly care facilities across Germany." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-8 flex-wrap justify-center", children: requirementTabs.map((tab, i) => /* @__PURE__ */ jsx(motion.button, { type: "button", onClick: () => setActiveRequirementsTab(i), whileHover: {
          scale: 1.04
        }, whileTap: {
          scale: 0.97
        }, className: `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-250 border-2 ${activeRequirementsTab === i ? "text-white border-transparent shadow-lg" : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300"}`, style: activeRequirementsTab === i ? {
          background: "linear-gradient(135deg, #D32F2F, #1A237E)"
        } : {}, children: tab.title }, tab.title)) }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -15
        }, transition: {
          duration: 0.3,
          ease
        }, className: "grid sm:grid-cols-2 gap-3", children: [
          requirementTabs[activeRequirementsTab].items.map((item, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            x: -16
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            delay: i * 0.05,
            ease
          }, className: `flex items-start gap-3 p-4 rounded-xl border-2 bg-white shadow-sm ${i % 2 === 0 ? "border-[#1A237E]/15" : "border-[#D32F2F]/15"}`, children: [
            /* @__PURE__ */ jsx("span", { className: `h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-black ${i % 2 === 0 ? "bg-[#1A237E]" : "bg-[#D32F2F]"}`, children: i + 1 }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-700 text-sm leading-relaxed", children: item })
          ] }, item)),
          requirementTabs[activeRequirementsTab].note && /* @__PURE__ */ jsx(motion.p, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.4
          }, className: "sm:col-span-2 text-slate-400 text-xs italic mt-2 px-2", children: requirementTabs[activeRequirementsTab].note })
        ] }, activeRequirementsTab) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-14", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "German Language" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "Why Is German Language Mandatory?" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-slate-500 mt-3 text-sm max-w-2xl mx-auto", children: "Required for licensing & employment · Essential for patient care & hospital communication · Helps in daily life, integration & career growth." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block", style: {
          background: "linear-gradient(to bottom, #1A237E60, #D32F2F60, transparent)"
        } }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: langLevels.map((l, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6,
          delay: i * 0.08,
          ease
        }, className: `flex items-center gap-4 md:gap-8 ${i % 2 !== 0 ? "flex-row-reverse" : ""} relative`, children: [
          /* @__PURE__ */ jsx("div", { className: `flex-1 ${i % 2 !== 0 ? "text-right" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: `inline-block p-5 rounded-2xl border-2 shadow-md max-w-sm ${l.active ? l.redAccent ? "border-[#D32F2F]/20 bg-red-50" : "border-[#1A237E]/15 bg-blue-50" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              l.time !== "—" && /* @__PURE__ */ jsx("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${l.redAccent ? "bg-[#D32F2F]/10 text-[#D32F2F]" : "bg-[#1A237E]/10 text-[#1A237E]"}`, children: l.time }),
              !l.active && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider", children: "Advanced" })
            ] }),
            /* @__PURE__ */ jsx("h4", { className: "font-black text-slate-800 text-sm mb-1", children: l.name }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs leading-relaxed", children: l.desc })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 relative z-10", children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
            scale: 1.15,
            rotate: 10
          }, className: "h-14 w-14 rounded-2xl flex flex-col items-center justify-center shadow-xl border-2 border-white", style: {
            background: l.active ? l.redAccent ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)" : "linear-gradient(135deg, #9E9E9E, #757575)"
          }, children: [
            /* @__PURE__ */ jsx("span", { className: "font-black text-white text-base", children: l.lvl }),
            l.active && /* @__PURE__ */ jsx("span", { className: "text-[8px] text-white/80 font-bold", children: "ACTIVE" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1" })
        ] }, l.lvl)) }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.4,
          ease
        }, className: "mt-10 p-5 rounded-2xl border-2 text-center", style: {
          borderColor: "rgba(211,47,47,0.25)",
          background: "linear-gradient(135deg, #FFF5F5, #F5F7FF)"
        }, children: /* @__PURE__ */ jsxs("span", { className: "font-bold text-slate-800 text-sm", children: [
          "📌 Most German employers require",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-[#D32F2F]", children: "B2 certification" }),
          ". Freshers with B1/B2 can apply."
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row min-h-[400px]", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -40
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7,
        ease
      }, className: "flex-1 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden", style: {
        background: "linear-gradient(135deg, #1A237E, #283593)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-2xl", style: {
          background: "rgba(255,255,255,0.08)"
        } }),
        /* @__PURE__ */ jsx("span", { className: "text-5xl mb-6 block", children: "🏥" }),
        /* @__PURE__ */ jsx("span", { className: "text-blue-200 text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Program Overview" }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl font-black text-white mb-3", children: "Assistant Nurse" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm mb-6 leading-relaxed max-w-xs", children: "Begin your German nursing journey as a Nursing Assistant upon B1/B2 certification." }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-6xl font-black text-white", children: "~€2,800" }),
        /* @__PURE__ */ jsx("div", { className: "text-white/50 text-xs uppercase tracking-widest mt-1", children: "Approx. gross monthly salary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col items-center justify-center bg-white px-6 py-8 border-x border-slate-100", children: [
        /* @__PURE__ */ jsx("div", { className: "h-full w-0.5", style: {
          background: "linear-gradient(to bottom, rgba(26,35,126,0.2), rgba(211,47,47,0.2), rgba(26,35,126,0.2))"
        } }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-xs font-bold my-4 whitespace-nowrap", children: "→ PROGRESS →" }),
        /* @__PURE__ */ jsx("div", { className: "h-full w-0.5", style: {
          background: "linear-gradient(to bottom, rgba(26,35,126,0.2), rgba(211,47,47,0.2), rgba(26,35,126,0.2))"
        } })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: 40
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7,
        ease,
        delay: 0.1
      }, className: "flex-1 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden", style: {
        background: "linear-gradient(135deg, #D32F2F, #B71C1C)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl", style: {
          background: "rgba(255,255,255,0.08)"
        } }),
        /* @__PURE__ */ jsx("span", { className: "text-5xl mb-6 block", children: "⭐" }),
        /* @__PURE__ */ jsx("span", { className: "text-red-200 text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "After Anerkennung" }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl font-black text-white mb-3", children: "Regular Nurse" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm mb-6 leading-relaxed max-w-xs", children: "Progress to Regular Nurse after Anerkennung with increased salary and full benefits." }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-6xl font-black text-white", children: "~€3,200" }),
        /* @__PURE__ */ jsx("div", { className: "text-white/50 text-xs uppercase tracking-widest mt-1", children: "Approx. monthly salary" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 relative overflow-hidden", style: {
      background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-14", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Get Started" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "How to Get Started?" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-slate-500 mt-3 text-sm max-w-xl mx-auto", children: "Two clear tracks — wherever you are in your German language journey, we have a pathway for you." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [{
        title: "Without Language Training",
        emoji: "📚",
        isRed: false,
        items: ["Enroll for German Language Course", "Complete Training A1 → A2 → B1 → B2", "Clear Certification Exams B1 and B2"]
      }, {
        title: "Language Training Completed",
        emoji: "✈️",
        isRed: true,
        items: ["Register for German Interviews Assistance", "Selection & Visa Processing Assistance", "Fly to Germany"]
      }].map((track, t) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: t * 0.15,
        duration: 0.6,
        ease
      }, className: "relative rounded-3xl border-2 p-8 overflow-hidden bg-white shadow-lg", style: {
        borderColor: track.isRed ? "rgba(211,47,47,0.2)" : "rgba(26,35,126,0.15)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-7 h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-xl", style: {
          background: track.isRed ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)"
        }, children: track.emoji }),
        /* @__PURE__ */ jsx("h3", { className: "font-black text-slate-900 text-xl mb-6 mt-4", children: track.title }),
        /* @__PURE__ */ jsx("ol", { className: "space-y-5", children: track.items.map((item, i) => /* @__PURE__ */ jsxs(motion.li, { initial: {
          opacity: 0,
          x: -20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: t * 0.15 + i * 0.1 + 0.3,
          ease
        }, className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-7 w-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0 shadow-md", style: {
            background: track.isRed ? "#D32F2F" : "#1A237E"
          }, children: i + 1 }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-600 text-sm leading-relaxed mt-0.5", children: item })
        ] }, item)) })
      ] }, track.title)) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-slate-400 text-sm mt-8 italic", children: "AR Overseas Consultancy (OPC) Pvt. Ltd. assists with language training, recruitment, interviews and the visa process." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-white relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-14", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "Why Learn with AR Overseas Consultancy?" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-slate-500 mt-3 text-sm", children: "Built for serious learners — flexible, expert-led and exam-ready." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: whyAR.map((w, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.6,
        rotate: -15
      }, whileInView: {
        opacity: 1,
        scale: 1,
        rotate: 0
      }, whileHover: {
        scale: 1.08,
        rotate: [0, -3, 3, 0]
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.07,
        duration: 0.5,
        ease
      }, className: "flex items-center gap-3 text-white px-5 py-3.5 rounded-2xl shadow-lg font-bold text-sm cursor-default", style: {
        background: w.isRed ? "linear-gradient(135deg, #D32F2F, #B71C1C)" : "linear-gradient(135deg, #1A237E, #283593)"
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "text-xl", children: w.icon }),
        w.text
      ] }, w.text)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "process", className: "py-24 relative overflow-hidden", style: {
      background: "linear-gradient(135deg, #1A237E 0%, #0D1757 40%, #B71C1C 100%)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-14", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-red-300 text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "End-to-End Support" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-white", children: "Simple & Transparent Application Process" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-white/60 mt-3 text-sm", children: "A 10-step journey from your first consultation to flying to Germany." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: steps.map((step, i) => /* @__PURE__ */ jsx(TimelineStep, { step, index: i, total: steps.length }, step.s)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-black text-white text-center mb-6", children: "Our Complete Support & Assistance Includes" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: support.map((sp, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.06,
          ease
        }, whileHover: {
          scale: 1.05
        }, className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/10 border text-white", style: {
          borderColor: i % 2 === 0 ? "rgba(255,255,255,0.2)" : "rgba(239,83,80,0.4)"
        }, children: [
          /* @__PURE__ */ jsx("span", { className: "text-red-300 text-xs", children: "✦" }),
          sp
        ] }, sp)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(motion.a, { href: "#contact", whileHover: {
          scale: 1.04
        }, whileTap: {
          scale: 0.97
        }, className: "inline-flex items-center gap-2 text-white font-black text-sm px-8 py-4 rounded-full shadow-xl", style: {
          background: "linear-gradient(135deg, #D32F2F, #B71C1C)",
          boxShadow: "0 8px 32px rgba(211,47,47,0.5)"
        }, children: "✈️ Start Your Journey Today" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 relative", style: {
      background: "linear-gradient(135deg, #F5F7FF 0%, #FFF5F5 100%)"
    }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-14", initial: "hidden", whileInView: "show", variants: stagger, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-[#D32F2F] text-xs uppercase tracking-[0.3em] font-bold block mb-3", children: "FAQs" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "font-display text-4xl md:text-5xl font-black text-slate-900", children: "Common Questions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: faqs.map((f, i) => /* @__PURE__ */ jsx(FaqItem, { ...f, index: i }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(135deg, #1A237E 0%, #0D1757 40%, #D32F2F 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.06), transparent 55%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1", style: {
        background: "linear-gradient(90deg, #90CAF9, #EF5350, #90CAF9)"
      } }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        y: [-12, 12, -12],
        rotate: [0, 5, 0]
      }, transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "absolute top-10 right-[12%] text-8xl opacity-10 pointer-events-none select-none", children: "🇩🇪" }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        y: [8, -8, 8],
        rotate: [0, -4, 0]
      }, transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }, className: "absolute bottom-10 left-[8%] text-7xl opacity-10 pointer-events-none select-none", children: "✈️" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center relative", style: {
        zIndex: 10
      }, children: [
        /* @__PURE__ */ jsx(motion.div, { animate: {
          rotate: [0, 8, -8, 0],
          scale: [1, 1.1, 1]
        }, transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "text-5xl mb-6 inline-block", children: "✨" }),
        /* @__PURE__ */ jsx(motion.span, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, viewport: {
          once: true
        }, className: "text-red-200 text-xs uppercase tracking-[0.3em] font-bold block mb-4", children: "Join Us" }),
        /* @__PURE__ */ jsxs(motion.h2, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7,
          ease
        }, className: "font-display text-4xl md:text-5xl font-black text-white mb-5 leading-tight", children: [
          "Let's Build Your Global",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { style: {
            background: "linear-gradient(90deg, #90CAF9, #FFCDD2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }, children: "Nursing Career Together" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.2,
          duration: 0.6,
          ease
        }, className: "text-white/75 text-base mb-10 max-w-xl mx-auto leading-relaxed", children: "Start your journey towards a secure, respected, and high-paying career in Germany with AR Overseas Consultancy (OPC) Pvt. Ltd." }),
        /* @__PURE__ */ jsx(motion.div, { initial: "hidden", whileInView: "show", variants: stagger, viewport: {
          once: true
        }, className: "flex flex-wrap gap-3 justify-center mb-8", children: [{
          href: "tel:+917396949498",
          icon: "📞",
          text: "+91 73969 49498"
        }, {
          href: "tel:+918142445464",
          icon: "📞",
          text: "+91 81424 45464"
        }, {
          href: "tel:+919052445464",
          icon: "📞",
          text: "+91 90524 45464"
        }, {
          href: "mailto:aroverseas1125@gmail.com",
          icon: "📧",
          text: "aroverseas1125@gmail.com"
        }, {
          href: "https://aroverseasconsultancy.com",
          icon: "🌍",
          text: "aroverseasconsultancy.com"
        }].map((c) => /* @__PURE__ */ jsxs(motion.a, { variants: fadeUp, href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: c.href.startsWith("http") ? "noreferrer" : void 0, whileHover: {
          scale: 1.04
        }, whileTap: {
          scale: 0.97
        }, className: "inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors", children: [
          /* @__PURE__ */ jsx("span", { children: c.icon }),
          c.text
        ] }, c.href)) }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.5
        }, className: "text-white/45 text-xs", children: "📍 Plot No: 53, HIG – Phase 1, Near Ganesh Temple, Vanasthalipuram, Hyderabad, Telangana – 500070" })
      ] })
    ] })
  ] });
}
export {
  JobsGermany as component
};
