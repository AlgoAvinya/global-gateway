import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    href: "https://wa.me/917396949498?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20AR%20Overseas%20Consultancy",
    label: "WhatsApp",
    icon: MessageCircle,
    className: "bg-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.6)]",
  },
  {
    href: "tel:+917396949498",
    label: "Call",
    icon: Phone,
    className: "bg-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.7)]",
  },
  {
    href: "mailto:aroverseas1125@gmail.com",
    label: "Email",
    icon: Mail,
    className: "bg-secondary hover:shadow-[0_0_24px_hsl(var(--secondary)/0.7)]",
  },
];

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3">
      {items.map((it, i) => (
        <motion.a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={it.label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 220, damping: 18 }}
          whileHover={{ scale: 1.12, rotate: -6 }}
          whileTap={{ scale: 0.92 }}
          className={`group relative grid h-12 w-12 place-items-center rounded-full text-white shadow-elegant transition-shadow duration-300 ${it.className}`}
        >
          <it.icon className="h-5 w-5" />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            {it.label}
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/40 animate-ping opacity-40" />
        </motion.a>
      ))}
    </div>
  );
}
