import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-secondary-foreground py-20 md:py-28">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-red) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-gold) 0%, transparent 40%)" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-3"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-brand-gold flex items-center gap-2"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>›</span>
          <span className="text-white/80">{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
