import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link, createRootRoute, useRouterState, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Stethoscope, GraduationCap, Award, Plane, Phone, Mail, MapPin, X, Menu, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const appCss = "/assets/styles-DLBA0Bxw.css";
const logo = "/assets/logo-sOK8VVf-.jpg";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/jobs-germany", label: "Nursing in Germany" },
  { to: "/ausbildung", label: "Ausbildung" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" }
];
const ticker = [
  { icon: Sparkles, text: "Education to Employment — Your Trusted Path" },
  { icon: Stethoscope, text: "Nursing Jobs in Germany — Earn 8–10× More" },
  { icon: GraduationCap, text: "Admissions Open: Germany · UK · USA · Canada · Australia" },
  { icon: Award, text: "100% Visa Success · Free Career Counselling" },
  { icon: Plane, text: "Ausbildung Programs — Paid Vocational Training in Germany" }
];
const MAPS_URL = "https://maps.app.goo.gl/wfg1DTPP2BV49h9t7";
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "header",
      {
        style: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 },
        className: "w-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-brand text-primary-foreground overflow-hidden border-b border-white/10", children: /* @__PURE__ */ jsx("div", { className: "group py-2 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex w-max whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]", children: [...ticker, ...ticker].map((t, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-8 text-xs md:text-sm font-medium", children: [
            /* @__PURE__ */ jsx(t.icon, { className: "h-3.5 w-3.5 text-brand-gold" }),
            t.text,
            /* @__PURE__ */ jsx("span", { className: "text-brand-gold/70 ml-6", children: "★" })
          ] }, i)) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block bg-secondary text-secondary-foreground text-xs border-b border-border/40", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-between items-center px-4 py-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsxs("a", { href: "tel:+918142445464", className: "flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-brand-gold" }),
                "+91 81424 45464"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "tel:+919052445464", className: "flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-brand-gold" }),
                "+91 90524 45464"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "mailto:aroverseas1125@gmail.com", className: "flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200", children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-brand-gold" }),
                "aroverseas1125@gmail.com"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: MAPS_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Plot No: 53, HIG – Phase 1, Rajeshwari Complex, Beside Ganesh Temple, Vanasthalipuram, Hyderabad – 500070",
                className: "flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 text-brand-gold flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Hyderabad, Telangana" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border-b border-slate-200 shadow-md", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center pl-1 pr-3 py-1.5 gap-2", children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "group flex-shrink-0 mr-3", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: logo,
                  alt: "AR Overseas Consultancy",
                  className: "h-14 md:h-16 w-auto transition-transform duration-500 group-hover:scale-105",
                  style: { width: 120, height: 80, marginLeft: 10 }
                }
              ) }),
              /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-0.5 flex-1 justify-end", children: [
                nav.map((n) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: n.to,
                    className: "relative px-3 py-2 text-[14px] font-semibold whitespace-nowrap rounded-md text-slate-700 transition-all duration-200 hover:text-slate-900 group/navitem",
                    activeProps: {
                      className: "!text-white !bg-[#1e3a5f] rounded-md shadow-md"
                    },
                    children: [
                      n.label,
                      /* @__PURE__ */ jsx("span", { className: "absolute left-3 right-3 -bottom-0.5 h-[2px] bg-red-500 origin-left scale-x-0 group-hover/navitem:scale-x-100 transition-transform duration-200 rounded-full" })
                    ]
                  },
                  n.to
                )),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/enquiry",
                    className: "ml-3 inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 text-[14px] font-bold shadow-lg hover:scale-105 hover:shadow-amber-400/40 transition-all duration-300 whitespace-nowrap flex-shrink-0",
                    children: "Free Consultation"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(!open),
                  className: "md:hidden p-2 text-slate-700 flex-shrink-0 ml-auto",
                  "aria-label": "Menu",
                  children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
                }
              )
            ] }),
            open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-slate-200 bg-white animate-in slide-in-from-top duration-300", children: /* @__PURE__ */ jsxs("nav", { className: "px-4 py-3 flex flex-col gap-1", children: [
              nav.map((n) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: n.to,
                  onClick: () => setOpen(false),
                  className: "px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-[#1e3a5f] hover:text-white transition-all duration-200",
                  activeProps: { className: "bg-[#1e3a5f] text-white" },
                  children: n.label
                },
                n.to
              )),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-slate-200 flex flex-col gap-2 text-sm text-slate-600", children: [
                /* @__PURE__ */ jsxs("a", { href: "tel:+918142445464", className: "flex items-center gap-2 px-4 hover:text-brand-gold transition-colors", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-brand-gold" }),
                  "+91 81424 45464"
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "tel:+919052445464", className: "flex items-center gap-2 px-4 hover:text-brand-gold transition-colors", children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-brand-gold" }),
                  "+91 90524 45464"
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "mailto:aroverseas1125@gmail.com", className: "flex items-center gap-2 px-4 hover:text-brand-gold transition-colors", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-brand-gold" }),
                  "aroverseas1125@gmail.com"
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: MAPS_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 px-4 hover:text-brand-gold transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-brand-gold flex-shrink-0" }),
                      "Hyderabad, Telangana"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/enquiry",
                  onClick: () => setOpen(false),
                  className: "mt-3 text-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 text-sm font-bold shadow-lg",
                  children: "Free Consultation"
                }
              )
            ] }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-[108px] md:h-[142px]", "aria-hidden": "true" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gradient-navy text-secondary-foreground mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: "AR Overseas",
            className: "h-16 w-auto mb-4 bg-white/95 rounded-lg p-2"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary-foreground/80 leading-relaxed", children: "Where Great Things Happen. Empowering Indian students & nurses with global career opportunities." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-5", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "http://facebook.com/people/AR-Overseas-Consultancy-OPC-Private-Limited/61579572724088/?rdid=xBtGKAh0f1Faz6Ke&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E5WaPLqjU%2F",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Facebook",
              className: "h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110",
              children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/aroverseasconsultancy9?igsh=MXNsYTJ0b2hsMGFodQ%3D%3D",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110",
              children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-bold mb-4 text-brand-gold", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
          ["/", "Home"],
          ["/about", "About Us"],
          ["/services", "Services"],
          ["/jobs-germany", "Nursing in Germany"],
          ["/ausbildung", "Ausbildung"],
          ["/enquiry", "Enquiry"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to,
            className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
            children: label
          }
        ) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-bold mb-4 text-brand-gold", children: "Our Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/services",
              className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
              children: "Overseas Education"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/jobs-germany",
              className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
              children: "Nursing Jobs in Germany"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/ausbildung",
              className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
              children: "Ausbildung"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/services",
              className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
              children: "Visa Services"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/services",
              className: "text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300",
              children: "German Language Training"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-lg font-bold mb-4 text-brand-gold", children: "India Office" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-secondary-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://maps.app.goo.gl/wfg1DTPP2BV49h9t7",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex gap-2 hover:text-brand-gold transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" }),
                /* @__PURE__ */ jsx("span", { children: "Plot 53, HIG Phase 1, H.No 6-2-662, Rajeshwari Complex, Vanasthalipuram, Hyderabad, Telangana 500070" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+918142445464",
              className: "flex gap-2 hover:text-brand-gold transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" }),
                /* @__PURE__ */ jsx("span", { children: "+91 81424 45464" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+919052445464",
              className: "flex gap-2 hover:text-brand-gold transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" }),
                /* @__PURE__ */ jsx("span", { children: "+91 90524 45464" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:aroverseas1125@gmail.com",
              className: "flex gap-2 hover:text-brand-gold transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" }),
                /* @__PURE__ */ jsx("span", { children: "aroverseas1125@gmail.com" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-5 text-xs text-center text-secondary-foreground/70", children: [
      "© 2025 AR Overseas Consultancy (OPC) Pvt. Ltd. · All Rights Reserved ·",
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "hover:text-brand-gold transition-colors duration-300",
          children: "Privacy Policy"
        }
      )
    ] }) })
  ] });
}
const items = [
  {
    href: "https://wa.me/917396949498?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20AR%20Overseas%20Consultancy",
    label: "WhatsApp",
    icon: FaWhatsapp,
    className: "bg-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.6)]"
  },
  {
    href: "tel:+917396949498",
    label: "Call",
    icon: IoCall,
    className: "bg-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.7)]"
  },
  {
    href: "mailto:aroverseas1125@gmail.com",
    label: "Email",
    icon: MdEmail,
    className: "bg-secondary hover:shadow-[0_0_24px_hsl(var(--secondary)/0.7)]"
  }
];
function FloatingContact() {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-5 right-5 z-[60] flex flex-col gap-3", children: items.map((it, i) => /* @__PURE__ */ jsxs(
    motion.a,
    {
      href: it.href,
      target: it.href.startsWith("http") ? "_blank" : void 0,
      rel: "noopener noreferrer",
      "aria-label": it.label,
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.6 + i * 0.1,
        type: "spring",
        stiffness: 220,
        damping: 18
      },
      whileHover: {
        scale: 1.12,
        rotate: -6
      },
      whileTap: { scale: 0.92 },
      className: `group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-all duration-300 ${it.className}`,
      children: [
        /* @__PURE__ */ jsx(it.icon, { className: "h-7 w-7" }),
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0", children: it.label }),
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/40 animate-ping opacity-30" })
      ]
    },
    it.label
  )) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-8xl font-display font-bold text-gradient-brand", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-2xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform", children: "Go home" })
  ] }) });
}
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { name: "description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { property: "og:title", content: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { name: "twitter:title", content: "AR Overseas Consultancy (OPC) Pvt. Ltd. — Where Great Things Happen" },
      { property: "og:description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { name: "twitter:description", content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study & work abroad in Germany, UK, USA, Canada, Australia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ee03e11f-782b-49ce-8b5e-e77c66281623/id-preview-a8e87fa0--bbd83067-1f1c-4539-b48c-0629be638abc.lovable.app-1778399519770.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ee03e11f-782b-49ce-8b5e-e77c66281623/id-preview-a8e87fa0--bbd83067-1f1c-4539-b48c-0629be638abc.lovable.app-1778399519770.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,500&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-x-hidden pt-[106px] md:pt-[138px]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        children: /* @__PURE__ */ jsx(Outlet, {})
      },
      pathname
    ) }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingContact, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./services-DTIBL_uW.js");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services — AR Overseas Consultancy (OPC) Pvt. Ltd."
    }, {
      name: "description",
      content: "Study abroad with AR Overseas Hyderabad. Expert guidance for USA, UK, Canada, Australia, Germany & Europe. Nursing jobs, Ausbildung, visa guidance and German language training."
    }, {
      property: "og:title",
      content: "Services — AR Overseas Consultancy"
    }, {
      property: "og:description",
      content: "End-to-end study abroad and recruitment services from Hyderabad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./jobs-germany-9Gvf18D1.js");
const Route$5 = createFileRoute("/jobs-germany")({
  head: () => ({
    meta: [{
      title: "Nursing Jobs in Germany — AR Overseas Consultancy (OPC) Pvt. Ltd."
    }, {
      name: "description",
      content: "Achieve your German nursing dream with AR Overseas Consultancy (OPC) Pvt. Ltd. Earn €2,800–€3,200/month, family reunification, free education for children, PR in 3 years."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./enquiry-CcWAu-i9.js");
const Route$4 = createFileRoute("/enquiry")({
  head: () => ({
    meta: [{
      title: "Free Consultation Enquiry — AR Overseas Consultancy"
    }, {
      name: "description",
      content: "Get free legal consultation for studying or working abroad. Submit your enquiry today."
    }, {
      property: "og:title",
      content: "Enquiry — AR Overseas Consultancy"
    }, {
      property: "og:description",
      content: "Tell us about your goals — we'll guide you free of cost."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-B82fXgd5.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — AR Overseas Consultancy Hyderabad"
    }, {
      name: "description",
      content: "Visit our Hyderabad office or call us. Mon–Sat, 9 AM – 6 PM. We're here to help your global journey."
    }, {
      property: "og:title",
      content: "Contact AR Overseas Consultancy"
    }, {
      property: "og:description",
      content: "Reach our team for free counselling and support."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ausbildung-DP5TfYM_.js");
const Route$2 = createFileRoute("/ausbildung")({
  head: () => ({
    meta: [{
      title: "Ausbildung in Germany — AR Overseas Consultancy (OPC) Pvt. Ltd."
    }, {
      name: "description",
      content: "Germany's Ausbildung (Vocational Training) — Study, Work, Earn & Settle. 9 programs including Nursing, Hotel Management, Mechatronics, Logistics, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-I46A2Za9.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — AR Overseas Consultancy"
    }, {
      name: "description",
      content: "India's leading overseas career & education consultant — connecting Indian talent with global opportunities in Germany and beyond."
    }, {
      property: "og:title",
      content: "About AR Overseas Consultancy"
    }, {
      property: "og:description",
      content: "Trusted, transparent and professional guidance for Indian students and nurses."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CyPKrByl.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AR Overseas Consultancy — Education to Employment, Your Trusted Path"
    }, {
      name: "description",
      content: "Trusted partner for Overseas Education & Healthcare Recruitment. Study or work abroad in Germany, UK, USA, Canada, Australia & EU."
    }, {
      property: "og:title",
      content: "AR Overseas Consultancy — Education to Employment"
    }, {
      property: "og:description",
      content: "Empowering Indian students & nurses with global career opportunities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const JobsGermanyRoute = Route$5.update({
  id: "/jobs-germany",
  path: "/jobs-germany",
  getParentRoute: () => Route$7
});
const EnquiryRoute = Route$4.update({
  id: "/enquiry",
  path: "/enquiry",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AusbildungRoute = Route$2.update({
  id: "/ausbildung",
  path: "/ausbildung",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AusbildungRoute,
  ContactRoute,
  EnquiryRoute,
  JobsGermanyRoute,
  ServicesRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
