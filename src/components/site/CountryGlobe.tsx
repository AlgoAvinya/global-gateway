import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { createPortal } from "react-dom";

// Flag image imports
import flagDE from "../../assets/germany.png";
import flagAU from "../../assets/australia.png";
import flagGB from "../../assets/unitedkingdom.png";
import flagUS from "../../assets/unitedstates.png";
import flagCA from "../../assets/canada.png";
import flagIE from "../../assets/ireland.png";
import flagEU from "../../assets/europe.png";
import flagNZ from "../../assets/newzealand.png";

const FLAG_MAP: Record<string, string> = {
  DE: flagDE,
  AU: flagAU,
  GB: flagGB,
  UK: flagGB,
  US: flagUS,
  CA: flagCA,
  IE: flagIE,
  EU: flagEU,
  NZ: flagNZ,
};

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { COUNTRIES, type CountryInfo } from "@/data/countries";

const Globe = lazy(() => import("react-globe.gl").then((m) => ({ default: m.default as any }))) as any;

function codeToFlag(code: string): string {
  if (!code || code.length !== 2) return "🌍";
  return Array.from(code.toUpperCase())
    .map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)))
    .join("");
}

export function CountryGlobe() {
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<CountryInfo | null>(null);
  const [hovered, setHovered] = useState<string | null>(null); // stores hovered country code
  const GLOBE_SIZE = 420;
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);

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

  // Rotate globe to a country's lat/lng
  const flyToCountry = (country: CountryInfo) => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView(
      { lat: country.lat, lng: country.lng, altitude: 1.8 },
      800 // ms transition
    );
  };

  // Resume auto-rotate when hover ends
  const resumeAutoRotate = () => {
    if (!globeRef.current) return;
    globeRef.current.controls().autoRotate = true;
  };

  const points = COUNTRIES.map((c) => ({
    ...c,
    size: 0.9,
    // highlighted = gold + bigger, normal = red
    color: hovered === c.code ? "#F5C158" : "#FF4D4D",
    radius: hovered === c.code ? 1.2 : 0.65,
  }));

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center max-w-6xl mx-auto w-full overflow-hidden">

        {/* ── Globe ── */}
        <div
          ref={wrapRef}
          className="relative flex-shrink-0"
          style={{ width: GLOBE_SIZE + 24, height: GLOBE_SIZE + 24, padding: 12 }}
          onMouseEnter={() => {
            if (globeRef.current) globeRef.current.controls().autoRotate = false;
          }}
          onMouseLeave={() => {
            if (globeRef.current) globeRef.current.controls().autoRotate = true;
            setHovered(null);
          }}
        >
          <div className="absolute inset-3 rounded-full bg-blue-500/15 blur-2xl pointer-events-none" />
          <div
            className="absolute rounded-full border-2 border-dashed border-blue-400/40 animate-spin-slow pointer-events-none"
            style={{ inset: 0 }}
          />

          {mounted && (
            <Suspense
              fallback={
                <div
                  className="rounded-full bg-blue-900/40 animate-pulse"
                  style={{ width: GLOBE_SIZE, height: GLOBE_SIZE }}
                />
              }
            >
              <div className="absolute" style={{ top: 12, left: 12 }}>
              <Globe
                ref={globeRef}
                width={GLOBE_SIZE}
                height={GLOBE_SIZE}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                atmosphereColor="#4fc3f7"
                atmosphereAltitude={0.18}
                pointsData={points}
                pointLat={(d: any) => d.lat}
                pointLng={(d: any) => d.lng}
                pointColor={(d: any) => d.color}
                pointAltitude={(d: any) => hovered === d.code ? 0.12 : 0.05}
                pointRadius={(d: any) => hovered === d.code ? 1.2 : 0.65}
                pointLabel={(d: any) =>
                  `<div style="background:rgba(10,20,50,0.92);color:#fff;padding:6px 10px;border-radius:8px;font-family:Inter;font-size:12px;border:1px solid ${hovered === d.code ? '#F5C158' : '#FF4D4D'}"><b>${d.name}</b><br/><span style="color:#F5C158;font-size:10px">Click to explore</span></div>`
                }
                onPointClick={(d: any) => setSelected(d)}
                onPointHover={(d: any) => {
                  if (d) {
                    setHovered(d.code);
                  } else {
                    setHovered(null);
                    resumeAutoRotate();
                  }
                }}
                ringsData={hovered ? points.filter(p => p.code === hovered) : points.slice(0, 4)}
                ringLat={(d: any) => d.lat}
                ringLng={(d: any) => d.lng}
                ringColor={() => (t: number) => `rgba(245,193,88,${1 - t})`}
                ringMaxRadius={5}
                ringPropagationSpeed={2.5}
                ringRepeatPeriod={1000}
              />
              </div>
            </Suspense>
          )}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground bg-background/70 backdrop-blur px-2.5 py-1 rounded-full border border-border whitespace-nowrap">
            Click any pin to explore
          </div>
        </div>

        {/* ── Country Cards ── */}
        <div className="flex-1 w-full min-w-0 grid grid-cols-2 gap-2">
          {COUNTRIES.map((c, i) => {
            const isHovered = hovered === c.code;
            return (
              <motion.button
                key={c.code}
                type="button"
                onClick={() => setSelected(c)}
                onMouseEnter={() => {
                  setHovered(c.code);
                  flyToCountry(c);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  resumeAutoRotate();
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                animate={{
                  scale: isHovered ? 1.04 : 1,
                  x: isHovered ? 6 : 0,
                }}
                className={`group flex items-center gap-2 p-2.5 rounded-lg bg-card border transition-all duration-300 text-left ${
                  isHovered
                    ? "border-brand-gold shadow-elegant bg-brand-gold/5"
                    : "border-border hover:border-brand-gold hover:shadow-elegant"
                }`}
              >
                <div className={`h-7 w-10 flex-shrink-0 rounded-sm bg-muted flex items-center justify-center shadow-card transition-transform overflow-hidden ${isHovered ? "rotate-6 scale-110" : ""}`}>
                  <img
                    src={FLAG_MAP[c.code]}
                    alt={c.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-semibold truncate leading-tight transition-colors ${isHovered ? "text-brand-gold" : "text-secondary"}`}>
                    {c.name}
                  </div>
                  <div className="text-[9px] uppercase tracking-wide text-muted-foreground">Study · Work</div>
                </div>
                <ArrowRight className={`h-3 w-3 flex-shrink-0 transition-all ${isHovered ? "opacity-100 translate-x-0 text-brand-gold" : "opacity-0 -translate-x-1 text-brand-gold"}`} />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Country Modal ── */}
      {selected && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm"
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
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 30%, var(--brand-gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--brand-red) 0%, transparent 40%)",
                    }}
                  />
                  <div className="absolute -right-4 -bottom-4 opacity-20 select-none">
                    <img
                      src={FLAG_MAP[selected.code]}
                      alt={selected.name}
                      className="w-48 h-32 object-contain"
                    />
                  </div>
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
                    <h3 className="font-display text-3xl font-bold flex items-center gap-3">
                      <img
                        src={FLAG_MAP[selected.code]}
                        alt={selected.name}
                        className="h-7 w-10 object-contain rounded-sm flex-shrink-0"
                      />
                      {selected.name}
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
                          <span
                            key={p}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Key Perks</h4>
                      <ul className="space-y-1">
                        {selected.perks.map((p) => (
                          <li key={p} className="text-sm text-foreground/85">
                            • {p}
                          </li>
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
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}