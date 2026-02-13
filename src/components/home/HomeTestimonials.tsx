import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import tAditi from "@/assets/testimonial-aditi.jpg";
import tRahul from "@/assets/testimonial-rahul.jpg";
import tNeha from "@/assets/testimonial-neha.jpg";

const testimonials = [
  {
    quote: "Delivery was quick and installation was clean. AC cooling is perfect for the room. Highly recommend!",
    name: "Aditi Sharma",
    area: "Sector 56, Gurgaon",
    img: tAditi,
    rating: 5,
  },
  {
    quote: "Good pricing and fast support on WhatsApp. Technician arrived on time and was very professional.",
    name: "Rahul Verma",
    area: "DLF Phase 3",
    img: tRahul,
    rating: 5,
  },
  {
    quote: "Hassle-free rental experience. Maintenance support was responsive when we needed help.",
    name: "Neha Gupta",
    area: "Sushant Lok",
    img: tNeha,
    rating: 5,
  },
];

export function HomeTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Customers
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from our happy customers in Gurgaon
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.img}
                  alt={`${testimonial.name} review`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover border-2 border-slate-200"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">{testimonial.area}</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Verified Customer
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}