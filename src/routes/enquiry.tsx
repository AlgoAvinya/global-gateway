import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

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

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero title="Enquiry" crumb="Enquiry" />

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Get In Touch</span>
              <h2 className="text-4xl font-bold mt-3 text-secondary">Free Legal Consultation</h2>
              <p className="text-muted-foreground mt-3">Fill out the form — our experts respond within 24 hours.</p>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-2">Thank you!</h3>
                <p className="text-muted-foreground">Your enquiry has been received. We'll be in touch shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Full Name" name="name" required />
                  <Input label="Email" name="email" type="email" required />
                  <Input label="Mobile Number" name="phone" type="tel" required />
                  <Input label="Address" name="address" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Select label="Service" options={["Overseas Education", "Nursing Jobs in Germany", "Ausbildung", "Visa Guidance", "German Language", "IELTS / TOEFL"]} />
                  <Select label="Country" options={["Germany", "USA", "UK", "Canada", "Australia", "New Zealand", "EU Countries"]} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <File label="Education Profile" />
                  <File label="Certification Upload" />
                </div>
                <div>
                  <label className="text-sm font-medium text-secondary block mb-2">Description</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder="Tell us about your goals..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-8 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform duration-300">
                  Submit Enquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">{label}{props.required && " *"}</label>
      <input {...props} className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200" placeholder={`Enter ${label}`} />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">{label}</label>
      <select className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200">
        <option>--- Select {label} ---</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function File({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-secondary block mb-2">{label}</label>
      <input type="file" className="w-full text-sm text-muted-foreground file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-brand file:text-primary-foreground hover:file:opacity-90 cursor-pointer" />
    </div>
  );
}
