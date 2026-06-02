import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroDefault from "@/assets/hero-airport.jpg";

interface PageHeroProps {
  title: string;
  crumb: string;
  subtitle?: string;
  image?: string;
  marquee?: string[];
}

export function PageHero({ title, crumb, subtitle, image = heroDefault, marquee }: PageHeroProps) {
  const strip = marquee ?? [
    "AR Overseas Consultancy (OPC) Pvt. Ltd.",
    "Education to Employment — Your Trusted Path",
    "Germany · UK · USA · Canada · Australia · Ireland",
    "Nursing Jobs · Ausbildung · Study Abroad",
    "100% End-to-End Support",
  ];

  return (
    <section className="relative isolate overflow-hidden text-secondary-foreground">
      {/* Leader background image with parallax */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/90 via-secondary/75 to-primary/70" />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 18% 28%, var(--brand-gold) 0%, transparent 38%), radial-gradient(circle at 82% 72%, var(--brand-red) 0%, transparent 42%)" }} />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold"
        >
          AR Overseas Consultancy (OPC) Pvt. Ltd.
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl text-white/85 text-base md:text-lg mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-brand-gold flex items-center gap-2"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>›</span>
          <span className="text-white/80">{crumb}</span>
        </motion.div>
      </div>

      {/* Scrolling sub-strip with different leader matter */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-marquee py-2.5">
          {[...strip, ...strip, ...strip].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-xs md:text-sm font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
