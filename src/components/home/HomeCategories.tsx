import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/catalog";
import { ArrowRight, ChevronRight } from "lucide-react";

export function HomeCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 mb-4">
            Our Products
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Browse Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Premium appliances available for rent in Gurgaon
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={`${category.title} rental in Gurgaon`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <p className="text-sm text-slate-600 mb-4">
                  {category.shortDescription}
                </p>

                {/* Button */}
                <Button 
                  asChild 
                  className="w-full bg-blue-600 text-white h-11"
                >
                  <Link to={`/category/${category.slug}`} className="inline-flex items-center justify-center gap-2">
                    Book Now
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Buttons */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="h-12 px-8 bg-blue-600 text-white"
            >
              <Link to="/pricing" className="inline-flex items-center gap-2">
                View All Prices
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="h-12 px-8 border-2 border-slate-300"
            >
              <Link to="/repair-service">
                Repair & Service
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}