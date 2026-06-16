import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight, MapPin, Mail, Globe } from "lucide-react";
const heroDefault = "/global-gateway/assets/contact-CYXAyK1w.png";
const ease = [0.22, 1, 0.36, 1];
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
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
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden text-white", style: {
      marginTop: -120
    }, children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 1.12,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 1.6,
        ease
      }, className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("img", { src: heroDefault, alt: "Contact", className: "absolute right-0 top-0 h-full", style: {
        width: "60%",
        objectFit: "cover",
        objectPosition: "center"
      } }) }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1.2,
        delay: 0.3,
        ease
      }, className: "absolute inset-0 -z-10", style: {
        background: "linear-gradient(to right, var(--color-secondary, #0f2044) 38%, color-mix(in srgb, var(--color-secondary, #0f2044) 60%, transparent) 65%, transparent 100%)"
      } }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 0.25
      }, transition: {
        duration: 1.4,
        delay: 0.5,
        ease
      }, className: "absolute inset-0 -z-10", style: {
        backgroundImage: "radial-gradient(circle at 8% 30%, var(--brand-gold) 0%, transparent 35%), radial-gradient(circle at 25% 80%, var(--brand-red) 0%, transparent 30%)"
      } }),
      /* @__PURE__ */ jsxs(motion.div, { variants: stagger, initial: "hidden", animate: "show", style: {
        padding: 40
      }, children: [
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold", children: "AR Overseas Consultancy (OPC) Pvt. Ltd." }),
        /* @__PURE__ */ jsx(motion.h1, { variants: fadeUp, className: "font-display text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]", children: "Get in Touch" }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-white/75 text-lg mb-6 max-w-md", children: "We're open Mon–Sat, 9 AM – 6 PM. Walk in, call, or write — your global journey starts with one conversation." }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "text-sm text-brand-gold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/70", children: "Contact Us" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-background relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]", style: {
        background: "radial-gradient(circle, var(--brand-gold) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-[0.07]", style: {
        background: "radial-gradient(circle, var(--brand-red) 0%, transparent 70%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          ease
        }, className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary font-semibold", children: "Reach Us" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-secondary mt-2", children: "How to Find Us" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-16", children: [
          /* @__PURE__ */ jsxs(motion.a, { href: "tel:+918142445464", initial: {
            opacity: 0,
            y: 36
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0,
            ease,
            duration: 0.55
          }, whileHover: {
            y: -6,
            boxShadow: "0 20px 60px -12px rgba(var(--brand-gold-rgb, 212,175,55), 0.3)"
          }, className: "group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: {
              background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-gold) 8%, transparent), transparent 60%)"
            } }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", style: {
                background: "linear-gradient(135deg, var(--brand-gold), #b8860b)"
              }, children: /* @__PURE__ */ jsx(Phone, { className: "h-7 w-7 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-secondary mb-1", children: "Phone" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-primary uppercase tracking-widest mb-3 font-semibold", children: "Tap to call" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1", children: ["+91 81424 45464", "+91 90524 45464", "+91 8885949498"].map((l) => /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium", children: l }, l)) }),
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.a, { href: "https://maps.app.goo.gl/wfg1DTPP2BV49h9t7", target: "_blank", rel: "noopener noreferrer", initial: {
            opacity: 0,
            y: 36
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.1,
            ease,
            duration: 0.55
          }, whileHover: {
            y: -6,
            boxShadow: "0 20px 60px -12px rgba(var(--brand-red-rgb, 200,30,30), 0.3)"
          }, className: "group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: {
              background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-red) 8%, transparent), transparent 60%)"
            } }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", style: {
                background: "linear-gradient(135deg, #e53935, #b71c1c)"
              }, children: /* @__PURE__ */ jsx(MapPin, { className: "h-7 w-7 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-secondary mb-1", children: "Location" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-primary uppercase tracking-widest mb-3 font-semibold", children: "Open in Maps" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1", children: ["Plot 53, HIG Phase 1, H.No 6-2-662", "Rajeshwari Complex, Vanasthalipuram", "Hyderabad, Telangana 500070"].map((l) => /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium", children: l }, l)) }),
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.a, { href: "mailto:aroverseas1125@gmail.com", initial: {
            opacity: 0,
            y: 36
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.2,
            ease,
            duration: 0.55
          }, whileHover: {
            y: -6,
            boxShadow: "0 20px 60px -12px rgba(59,130,246,0.25)"
          }, className: "group relative bg-card rounded-3xl p-8 border border-border overflow-hidden cursor-pointer block text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: {
              background: "linear-gradient(135deg, rgba(59,130,246,0.08), transparent 60%)"
            } }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", style: {
                background: "linear-gradient(135deg, #1e88e5, #0d47a1)"
              }, children: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-secondary mb-1", children: "E-mail" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-primary uppercase tracking-widest mb-3 font-semibold", children: "Send a message" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "aroverseas1125@gmail.com" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "www.aroverseasconsultancy.com" })
              ] }),
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 mx-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 28
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-60px"
        }, transition: {
          duration: 0.65,
          ease
        }, className: "relative rounded-3xl overflow-hidden border border-border shadow-elegant", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 w-full", style: {
            background: "linear-gradient(to right, var(--brand-gold), var(--brand-red), #1e88e5)"
          } }),
          /* @__PURE__ */ jsx("iframe", { title: "AR Overseas Office — Vanasthalipuram", src: "https://maps.google.com/maps?q=Rajeshwari+Complex+Vanasthalipuram+Hyderabad+Telangana+500070&z=17&output=embed", width: "100%", height: "460", style: {
            border: 0,
            display: "block"
          }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0,
            y: 8
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.4,
            ease
          }, className: "absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border shadow-elegant flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-secondary", children: "AR Overseas Consultancy" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Rajeshwari Complex, Vanasthalipuram, Hyderabad 500070" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-gradient-navy text-white text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", style: {
        backgroundImage: "radial-gradient(ellipse at 50% 120%, color-mix(in srgb, var(--brand-gold) 18%, transparent) 0%, transparent 60%)"
      } }),
      /* @__PURE__ */ jsxs(motion.div, { className: "container mx-auto px-4 max-w-2xl relative z-10", variants: stagger, initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsx(Globe, { className: "h-14 w-14 mx-auto mb-5 text-brand-gold animate-float" }) }),
        /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-bold mb-4 leading-tight", children: [
          "Let's Build Your",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { style: {
            WebkitTextStroke: "1.5px var(--brand-gold)",
            color: "transparent"
          }, children: "Global Future" })
        ] }),
        /* @__PURE__ */ jsxs(motion.p, { variants: fadeUp, className: "text-white/70 text-lg mb-10", children: [
          "Open Mon–Sat, 9 AM – 6 PM. Walk in, call, or write —",
          /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
          " your dream destination is one conversation away."
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(motion.a, { href: "tel:+918142445464", whileHover: {
            scale: 1.04
          }, whileTap: {
            scale: 0.97
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 18
          }, className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow text-white", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " Call Now"
          ] }),
          /* @__PURE__ */ jsxs(motion.a, { href: "https://maps.app.goo.gl/wfg1DTPP2BV49h9t7", target: "_blank", rel: "noopener noreferrer", whileHover: {
            scale: 1.04
          }, whileTap: {
            scale: 0.97
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 18
          }, className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold hover:bg-white/20 transition-colors text-white", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            " Get Directions"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
