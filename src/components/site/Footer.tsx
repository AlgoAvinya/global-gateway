import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <img
            src={logo}
            alt="AR Overseas"
            className="h-16 w-auto mb-4 bg-white/95 rounded-lg p-2"
          />

          <p className="text-sm text-secondary-foreground/80 leading-relaxed">
            Where Great Things Happen. Empowering Indian students & nurses with
            global career opportunities.
          </p>

          <div className="flex gap-3 mt-5">
            {/* Facebook */}
            <a
              href="http://facebook.com/people/AR-Overseas-Consultancy-OPC-Private-Limited/61579572724088/?rdid=xBtGKAh0f1Faz6Ke&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E5WaPLqjU%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aroverseasconsultancy9?igsh=MXNsYTJ0b2hsMGFodQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/jobs-germany", "Nursing in Germany"],
              ["/ausbildung", "Ausbildung"],
              ["/enquiry", "Enquiry"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">
            Our Services
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services"
                className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                Overseas Education
              </Link>
            </li>

            <li>
              <Link
                to="/jobs-germany"
                className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                Nursing Jobs in Germany
              </Link>
            </li>

            <li>
              <Link
                to="/ausbildung"
                className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                Ausbildung
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                Visa Services
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-secondary-foreground/80 hover:text-brand-gold transition-colors duration-300"
              >
                German Language Training
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-display text-lg font-bold mb-4 text-brand-gold">
            India Office
          </h4>

          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            {/* Address */}
            <li>
              <a
                href="https://maps.app.goo.gl/wfg1DTPP2BV49h9t7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 hover:text-brand-gold transition-colors duration-300"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>
                  Plot 53, HIG Phase 1, H.No 6-2-662, Rajeshwari Complex,
                  Vanasthalipuram, Hyderabad, Telangana 500070
                </span>
              </a>
            </li>

            {/* Phone 1 */}
            <li>
              <a
                href="tel:+918142445464"
                className="flex gap-2 hover:text-brand-gold transition-colors duration-300"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>+91 81424 45464</span>
              </a>
            </li>

            {/* Phone 2 */}
            <li>
              <a
                href="tel:+919052445464"
                className="flex gap-2 hover:text-brand-gold transition-colors duration-300"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>+91 90524 45464</span>
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:aroverseas1125@gmail.com"
                className="flex gap-2 hover:text-brand-gold transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>aroverseas1125@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-center text-secondary-foreground/70">
          © 2025 AR Overseas Consultancy (OPC) Pvt. Ltd. · All Rights Reserved ·{" "}
          <Link
            to="/"
            className="hover:text-brand-gold transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}