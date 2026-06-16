import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck, Award, Sparkles, Heart } from "lucide-react";
import { h as heroImg3 } from "./2-q7vUXJzP.js";
const heroDefault = "/global-gateway/assets/aboutus-CDiFRHn9.jpeg";
const values = [{
  icon: ShieldCheck,
  label: "Transparency"
}, {
  icon: Award,
  label: "Integrity"
}, {
  icon: Sparkles,
  label: "Professionalism"
}, {
  icon: Heart,
  label: "Commitment"
}, {
  icon: Target,
  label: "Student-Centric"
}];
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "font-editorial [&_h1]:font-editorial [&_h2]:font-editorial [&_h3]:font-editorial [&_h4]:font-editorial [&_p]:font-sans", style: {
    marginTop: -120
  }, children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden text-secondary-foreground min-h-[420px] md:min-h-[480px] flex items-center", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 1.08,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1]
      }, className: "absolute inset-0 -z-10 flex justify-end items-center", children: /* @__PURE__ */ jsx("img", { src: heroDefault, alt: "About Us", className: "h-full w-auto object-contain object-right", draggable: false, style: {
        maxWidth: "65%"
      } }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-10 md:py-16 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 14
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]", children: "About Us" }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.35
        }, className: "text-sm text-brand-gold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/80", children: "About Us" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(motion.img, { initial: {
        opacity: 0,
        scale: 0.95
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7
      }, src: heroImg3, alt: "Counselling session", loading: "lazy", className: "rounded-3xl shadow-elegant w-full" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "About Us" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mt-3 mb-5 text-secondary", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "One of India's leading overseas career and education consultants, helping students and healthcare professionals achieve global opportunities in Germany and other top countries." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "With a dedicated team of industry experts, we specialize in nursing recruitment for Germany, study abroad programs, German language training, IELTS/TOEFL/PTE/GRE and career consulting." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We help students study abroad for B.S. (Bachelor's), B.E. and M.S. (Master's) programs across the world." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/40", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 grid md:grid-cols-2 gap-6", children: [{
      icon: Eye,
      title: "Our Vision",
      text: "To become the most reliable and ethical overseas consultancy, connecting Indian talent with global opportunities."
    }, {
      icon: Target,
      title: "Our Mission",
      text: "To provide trusted, transparent, and professional guidance for Indian students and nurses to build successful international careers."
    }].map((v, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "bg-card rounded-3xl p-10 shadow-card border border-border hover:shadow-elegant transition-all duration-500", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(v.icon, { className: "h-7 w-7 text-primary-foreground" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-secondary mb-3", children: v.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: v.text })
    ] }, v.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Core Values" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mt-3 text-secondary", children: "Our Values" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-5", children: values.map((v, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.07
      }, className: "bg-card border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsx(v.icon, { className: "h-8 w-8 mx-auto mb-3 text-primary" }),
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-secondary", children: v.label })
      ] }, v.label)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-navy text-secondary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Why We Stand Out" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5", children: ["Excellent placement history", "Personalized guidance for every applicant", "Full support from language training to landing your dream country & job", "Strong network of universities & German nurse employers"].map((t, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 font-bold text-primary-foreground", children: i + 1 }),
        /* @__PURE__ */ jsx("p", { className: "text-secondary-foreground/90 mt-1.5", children: t })
      ] }, t)) })
    ] }) })
  ] });
}
export {
  About as component
};
