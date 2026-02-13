import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ShieldCheck, Wrench, Headphones, Truck, CreditCard } from "lucide-react";

const features = [
  {
    title: "Verified Technicians",
    desc: "Experienced professionals for installations and repairs",
    Icon: BadgeCheck,
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs, everything confirmed upfront",
    Icon: ShieldCheck,
  },
  {
    title: "Free Maintenance",
    desc: "Ongoing support included with rentals",
    Icon: Wrench,
  },
  {
    title: "24/7 Support",
    desc: "WhatsApp support whenever you need help",
    Icon: Headphones,
  },
  {
    title: "Fast Delivery",
    desc: "24-72 hour delivery across Gurgaon",
    Icon: Truck,
  },
  {
    title: "Secure Payments",
    desc: "Safe and flexible payment options",
    Icon: CreditCard,
  },
];

export function HomeTrust() {
  // Add your background image path here
  const backgroundImage = "https://res.cloudinary.com/dadqwaqis/image/upload/v1771015758/air-conditioner-repair_qidmsw.jpg"; // Change this to your image path

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Image with Overlay */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      )}

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6">
              Why Choose Us
            </span>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Built for <span className="text-blue-400">Trust</span>.
              <br />
              Designed for <span className="text-blue-400">Speed</span>.
            </h2>

            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              Gurgaon-first operations with clear pricing, fast delivery windows,
              and real human support that actually responds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-slate-600 text-white bg-transparent hover:bg-slate-700 hover:text-white hover:border-slate-500"
              >
                <Link to="/repair-service">Repair Service</Link>
              </Button>
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}