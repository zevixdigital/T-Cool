import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Wrench, Clock, Phone, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <>
      <Seo
        title={`About Us | ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name} - Your trusted appliance rental and repair service in Gurgaon. Premium AC rentals and fast repair services.`}
        path="/about"
      />

      <SiteHeader />
      <WhatsAppFloat />

      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {siteConfig.name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {siteConfig.name} is a trusted appliance rental and repair service
              provider in Gurgaon, Haryana. We help homes and businesses stay
              comfortable with premium AC rentals, fast repair services, and
              transparent pricing.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Verified Technicians",
                  desc: "Experienced professionals for installation and repair services across Gurgaon.",
                },
                {
                  icon: Wrench,
                  title: "Free Installation & Maintenance",
                  desc: "Selected rental products include free installation and regular maintenance support.",
                },
                {
                  icon: Clock,
                  title: "Fast 24–72hr Delivery",
                  desc: "Quick delivery timelines with responsive WhatsApp support whenever you need help.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple — provide reliable appliance rentals and
              repair services in Gurgaon with honest pricing, quick response,
              and long-term customer satisfaction. We focus on building trust
              through clear communication and dependable service.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need AC Rental or Repair in Gurgaon?
            </h2>

            <p className="text-lg mb-8 text-blue-100">
              Contact us today for quick quotes and availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Call Button */}
              <a
                href="tel:+919050357225"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5" />
                Call +91 90503 57225
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919050357225"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}