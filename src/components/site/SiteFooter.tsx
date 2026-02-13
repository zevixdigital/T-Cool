import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/catalog";
import { Phone, MapPin } from "lucide-react";
import Logo from "../../assets/TrueCool - Logo.png"
import * as React from "react";

export const SiteFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(function SiteFooter({ className, ...props }, ref) {
  const year = new Date().getFullYear();
  const productLinks = categories.slice(0, 4);

  return (
    <footer ref={ref} className={`bg-slate-900 ${className ?? ""}`} {...props}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Top CTA Section */}
        <div className="mb-12 rounded-xl bg-slate-800 border border-slate-700 p-6 lg:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-slate-400">
                Contact us on WhatsApp for quick quotes and availability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              {/* ✅ Fixed WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 font-semibold text-white hover:bg-green-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                WhatsApp Us
              </a>

              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-slate-600 px-6 font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
 <img
  src={Logo}
  alt="TrueCool AC Service"
  className="h-28 w-auto object-contain"
/>
</Link> 

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Premium home appliances on rent with free installation &amp;
              maintenance. Trusted rental &amp; repair services in Gurgaon.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>Gurgaon, Haryana</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>
                  +91 {siteConfig.whatsapp.phoneE164Digits.slice(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Rental Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/repair-service" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Repair Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
});