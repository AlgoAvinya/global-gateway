import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { COUNTRIES, type CountryInfo } from "@/data/countries";

// Client-only dynamic import — react-globe.gl uses three.js / WebGL
const Globe = lazy(() => import("react-globe.gl").then((m) => ({ default: m.default as any })));

export function CountryGlobe() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<CountryInfo | null>(null);
  const [size, setSize] = useState({ w: 480, h: 480 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      if (wrapRef.current) {
        const w = Math.min(wrapRef.current.clientWidth, 560);
        setSize({ w, h: w });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.6;
      globeRef.current.controls().enableZoom = false;
    }
  }, [mounted, size]);

  const points = COUNTRIES.map((c) => ({
    ...c,
    size: 0.9,
    color: "#F5C158",
  }));

  return (
    <>
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
        <div ref={wrapRef} className="relative aspect-square w-full max-w-[560px] mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-brand-gold/10 blur-2xl" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-gold/30 animate-spin-slow" />
          {mounted && (
            <Suspense fallback={<div className="absolute inset-6 rounded-full bg-secondary animate-pulse" />}>
              <Globe
                ref={globeRef}
                width={size.w}
                height={size.h}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                atmosphereColor="#F5C158"
                atmosphereAltitude={0.18}
                pointsData={points}
                pointLat={(d: any) => d.lat}
                pointLng={(d: any) => d.lng}
                pointColor={(d: any) => d.color}
                pointAltitude={0.04}
                pointRadius={0.7}
                pointLabel={(d: any) => `<div style="background:#0b1733;color:#fff;padding:6px 10px;border-radius:8px;font-family:Inter;font-size:12px;border:1px solid #F5C158"><b>${d.flag} ${d.name}</b><br/><span style="color:#F5C158;font-size:10px">Click to explore</span></div>`}
                onPointClick={(d: any) => setSelected(d)}
                ringsData={points.slice(0, 4)}
                ringLat={(d: any) => d.lat}
                ringLng={(d: any) => d.lng}
                ringColor={() => (t: number) => `rgba(245,193,88,${1 - t})`}
                ringMaxRadius={4}
                ringPropagationSpeed={2}
                ringRepeatPeriod={1400}
              />
            </Suspense>
          )}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground bg-background/70 backdrop-blur px-3 py-1 rounded-full border border-border">
            Click any pin to explore
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {COUNTRIES.map((c, i) => (
            <motion.button
              key={c.code}
              type="button"
              onClick={() => setSelected(c)}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 6, scale: 1.02 }}
              className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-brand-gold hover:shadow-elegant transition-all duration-300 text-left"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-muted to-background flex items-center justify-center text-2xl shadow-card group-hover:rotate-12 transition-transform">
                {c.flag}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-secondary truncate">{c.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Study · Work</div>
              </div>
              <ArrowRight className="h-4 w-4 text-brand-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Country modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-card rounded-3xl shadow-elegant overflow-hidden border border-border"
            >
              <div className="relative h-32 bg-gradient-navy overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)" }} />
                <div className="absolute -right-10 -bottom-10 text-[180px] leading-none opacity-30 select-none">{selected.flag}</div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur grid place-items-center text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-1 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> Destination
                  </div>
                  <h3 className="font-display text-3xl font-bold flex items-center gap-2">
                    <span className="text-3xl">{selected.flag}</span> {selected.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <p className="text-muted-foreground italic mb-6">{selected.tagline}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Why Choose
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.highlights.map((h) => (
                        <li key={h} className="text-sm text-foreground/85 flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5" /> Popular Programs
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {selected.programs.map((p) => (
                        <span key={p} className="text-[11px] px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border">{p}</span>
                      ))}
                    </div>
                    <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Key Perks</h4>
                    <ul className="space-y-1">
                      {selected.perks.map((p) => (
                        <li key={p} className="text-sm text-foreground/85">• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/enquiry"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                  >
                    Get Free Counselling <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold border border-border hover:bg-accent/70 transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
