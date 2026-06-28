import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import heroDefault from "@/assets/enquiry.png";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Free Consultation Enquiry — AR Overseas Consultancy" },
      { name: "description", content: "Get free legal consultation for studying or working abroad. Submit your enquiry today." },
      { property: "og:title", content: "Enquiry — AR Overseas Consultancy" },
      { property: "og:description", content: "Tell us about your goals — we'll guide you free of cost." },
    ],
  }),
  component: Enquiry,
});

// ─── REPLACE THESE 3 VALUES ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_3dm3zlj";  // from Email Services
const EMAILJS_TEMPLATE_ID = "template_c24x74q"; // from Email Templates
const EMAILJS_PUBLIC_KEY  = "BmcfnhfqttCAsQZqU";     // from Account → General
// ─────────────────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease } },
};

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const formRef                   = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden text-secondary-foreground" style={{ marginTop: -120 }}>
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={heroDefault}
            alt="Enquiry"
            style={{ width: "50%", height: "100%", objectFit: "fill", justifySelf: "end", padding: 10 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/75 via-secondary/35 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 28%, var(--brand-gold) 0%, transparent 38%), radial-gradient(circle at 82% 72%, var(--brand-red) 0%, transparent 42%)",
          }}
        />

        <motion.div
          className="container mx-auto px-4 py-20 md:py-28 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-semibold">
            AR Overseas Consultancy (OPC) Pvt. Ltd.
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl font-bold mb-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Enquiry
          </motion.h1>
          <motion.div variants={fadeIn} className="text-sm text-brand-gold flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/80">Enquiry</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Form ── */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            className="bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-12"
          >
            <motion.div
              className="text-center mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                Get In Touch
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold mt-3 text-secondary">
                Free Legal Consultation
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
                Fill out the form — our experts respond within 24 hours.
              </motion.p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-16 w-16 mx-auto text-primary mb-4" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4, ease }}
                  className="text-2xl font-bold text-secondary mb-2"
                >
                  Thank you!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4, ease }}
                  className="text-muted-foreground"
                >
                  Your enquiry has been received. We'll be in touch shortly.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-5">
                  <FormInput label="Full Name"     name="from_name"  required />
                  <FormInput label="Email"         name="from_email" type="email" required />
                  <FormInput label="Mobile Number" name="phone"      type="tel" required />
                  <FormInput label="Address"       name="address"    required />
                </motion.div>

                <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-5">
                  <FormSelect
                    label="Service"
                    name="service"
                    options={["Overseas Education", "Nursing Jobs in Germany", "Ausbildung", "Visa Guidance", "German Language", "IELTS / GRE / TOEFL / PTE"]}
                  />
                  <FormSelect
                    label="Country"
                    name="country"
                    options={["Germany", "USA", "UK", "Canada", "Australia", "New Zealand", "EU Countries", "Other Country"]}
                  />
                </motion.div>

              

                <motion.div variants={fadeUp}>
                  <label className="text-sm font-medium text-secondary block mb-2">Description</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                    placeholder="Tell us about your goals..."
                  />
                </motion.div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-500 text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.div variants={fadeUp}>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={sending ? {} : { scale: 1.02 }}
                    whileTap={sending ? {} : { scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-8 py-4 font-semibold shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending…" : <><Send className="h-4 w-4" /> Submit Enquiry</>}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function FormInput({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">
        {label}{props.required && " *"}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

function FormSelect({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">{label}</label>
      <select
        name={name}
        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
      >
        <option>--- Select {label} ---</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function FormFile({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">{label}</label>
      <input
        type="file"
        className="w-full text-sm text-muted-foreground file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-brand file:text-primary-foreground hover:file:opacity-90 cursor-pointer"
      />
    </div>
  );
}