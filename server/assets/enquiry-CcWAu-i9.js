import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
const heroDefault = "/assets/enquiry-DC3E0ryj.png";
const ease = [0.22, 1, 0.36, 1];
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
      duration: 0.5,
      ease
    }
  }
};
function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden text-secondary-foreground", style: {
      marginTop: -120
    }, children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 1.15,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 1.6,
        ease
      }, className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("img", { src: heroDefault, alt: "Enquiry", style: {
        width: "50%",
        height: "100%",
        objectFit: "fill",
        justifySelf: "end",
        padding: 10
      } }) }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1.2,
        delay: 0.3,
        ease
      }, className: "absolute inset-0 -z-10 bg-gradient-to-r from-secondary/75 via-secondary/35 to-transparent" }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 0.2
      }, transition: {
        duration: 1.4,
        delay: 0.5,
        ease
      }, className: "absolute inset-0 -z-10", style: {
        backgroundImage: "radial-gradient(circle at 18% 28%, var(--brand-gold) 0%, transparent 38%), radial-gradient(circle at 82% 72%, var(--brand-red) 0%, transparent 42%)"
      } }),
      /* @__PURE__ */ jsxs(motion.div, { className: "container mx-auto px-4 py-20 md:py-28 relative z-10", variants: staggerContainer, initial: "hidden", animate: "show", children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." }),
        /* @__PURE__ */ jsx(motion.h1, { variants: fadeUp, className: "font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]", children: "Enquiry" }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeIn, className: "text-sm text-brand-gold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/80", children: "Enquiry" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/40", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 32
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.65,
      ease
    }, className: "bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-12", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-10", variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Get In Touch" }),
        /* @__PURE__ */ jsx(motion.h2, { variants: fadeUp, className: "text-4xl font-bold mt-3 text-secondary", children: "Free Legal Consultation" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground mt-3", children: "Fill out the form — our experts respond within 24 hours." })
      ] }),
      submitted ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.88,
        y: 16
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        ease
      }, className: "text-center py-12", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          scale: 0,
          rotate: -15
        }, animate: {
          scale: 1,
          rotate: 0
        }, transition: {
          type: "spring",
          stiffness: 200,
          damping: 14,
          delay: 0.1
        }, children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-16 w-16 mx-auto text-primary mb-4" }) }),
        /* @__PURE__ */ jsx(motion.h3, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.25,
          duration: 0.4,
          ease
        }, className: "text-2xl font-bold text-secondary mb-2", children: "Thank you!" }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.35,
          duration: 0.4,
          ease
        }, className: "text-muted-foreground", children: "Your enquiry has been received. We'll be in touch shortly." })
      ] }) : /* @__PURE__ */ jsxs(motion.form, { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "space-y-5", variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-40px"
      }, children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(FormInput, { label: "Full Name", name: "name", required: true }),
          /* @__PURE__ */ jsx(FormInput, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsx(FormInput, { label: "Mobile Number", name: "phone", type: "tel", required: true }),
          /* @__PURE__ */ jsx(FormInput, { label: "Address", name: "address", required: true })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(FormSelect, { label: "Service", options: ["Overseas Education", "Nursing Jobs in Germany", "Ausbildung", "Visa Guidance", "German Language", "IELTS / TOEFL"] }),
          /* @__PURE__ */ jsx(FormSelect, { label: "Country", options: ["Germany", "USA", "UK", "Canada", "Australia", "New Zealand", "EU Countries"] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(FormFile, { label: "Education Profile" }),
          /* @__PURE__ */ jsx(FormFile, { label: "Certification Upload" })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-secondary block mb-2", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 4, className: "w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200", placeholder: "Tell us about your goals..." })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxs(motion.button, { type: "submit", whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }, className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-8 py-4 font-semibold shadow-glow", children: [
          "Submit Enquiry ",
          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
function FormInput({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium text-secondary block mb-2", children: [
      label,
      props.required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { ...props, className: "w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200", placeholder: `Enter ${label}` })
  ] });
}
function FormSelect({
  label,
  options
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-secondary block mb-2", children: label }),
    /* @__PURE__ */ jsxs("select", { className: "w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200", children: [
      /* @__PURE__ */ jsxs("option", { children: [
        "--- Select ",
        label,
        " ---"
      ] }),
      options.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o))
    ] })
  ] });
}
function FormFile({
  label
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-secondary block mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { type: "file", className: "w-full text-sm text-muted-foreground file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-brand file:text-primary-foreground hover:file:opacity-90 cursor-pointer" })
  ] });
}
export {
  Enquiry as component
};
