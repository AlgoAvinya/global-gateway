import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AR Overseas Consultancy Hyderabad" },
      { name: "description", content: "Visit our Hyderabad office or call us. Mon–Sat, 9 AM – 6 PM. We're here to help your global journey." },
      { property: "og:title", content: "Contact AR Overseas Consultancy" },
      { property: "og:description", content: "Reach our team for free counselling and support." },
    ],
  }),
  component: Contact,
});

const cards = [
  { icon: Phone, title: "Phone", lines: ["+91 81424 45464", "+91 90524 45464", "+91 8885949498"] },
  { icon: MapPin, title: "Location", lines: ["Plot 53, HIG Phase 1, H.No 6-2-662", "Rajeshwari Complex, Vanasthalipuram", "Hyderabad, Telangana 500070"] },
  { icon: Mail, title: "E-mail", lines: ["aroverseas1125@gmail.com", "www.aroverseasconsultancy.com"] },
];

function Contact() {
  return (
    <>
      <PageHero title="Contact Us" crumb="Contact Us" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant border border-border transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                  <c.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary mb-3">{c.title}</h3>
                <div className="space-y-1">
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border"
          >
            <iframe
              title="AR Overseas Office"
              src="https://www.google.com/maps?q=Vanasthalipuram,+Hyderabad,+Telangana+500070&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-secondary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Globe className="h-12 w-12 mx-auto mb-4 text-brand-gold animate-float" />
          <h2 className="text-4xl font-bold mb-4">Let's Build Your Global Future</h2>
          <p className="text-white/80 mb-8">Open Mon–Sat, 9 AM – 6 PM. Walk in, call or write — your dream destination is one conversation away.</p>
          <a href="tel:+918142445464" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold shadow-glow hover:scale-105 transition-transform">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
