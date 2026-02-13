import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock, Sparkles } from "lucide-react";

type HomeHeroProps = {
  heroImage: string;
};

const FEATURES = [
  { icon: Zap, label: "Free Installation" },
  { icon: Shield, label: "Free Maintenance" },
  { icon: Clock, label: "24-72hr Delivery" },
];

export function HomeHero({ heroImage }: HomeHeroProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                <Sparkles className="h-3.5 w-3.5" />
                Premium AC Rental in Gurgaon
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay Cool with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Premium Rentals
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Rent premium ACs with <strong>free installation</strong>, maintenance,
              and fast delivery across Gurgaon. Quality service guaranteed.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="h-12 px-6">
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="h-12 px-6">
                <Link to="/repair-service">Repair & Service</Link>
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm"
                >
                  <Icon className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-slate-700">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AC rental services in Gurgaon"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="eager"
              />

              {/* Stats badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Happy Customers</div>
                  </div>
                </div>
              </div>

              {/* Location badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Gurgaon
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}