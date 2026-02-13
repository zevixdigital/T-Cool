import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

type FAQ = {
  q: string;
  a: string;
};

type HomeFaqProps = {
  faqs: readonly FAQ[];
};

export function HomeFaq({ faqs }: HomeFaqProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading & Context */}
          <motion.div 
            className="lg:col-span-5 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              FAQs
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to know about our rental services, delivery, billing, and support guarantees.
            </p>

            {/* Contact card */}
            <motion.div 
              className="mt-10 overflow-hidden rounded-2xl border bg-card p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Still have questions?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our support team is available 24/7 to help you.
                  </p>
                </div>
              </div>
              <Button asChild className="mt-6 w-full">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Accordion List */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, idx) => (
                  <AccordionItem
                    key={f.q}
                    value={`faq-${idx}`}
                    className="border-b border-border/50 last:border-0"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold hover:no-underline hover:text-primary transition-colors sm:px-8">
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                          {idx + 1}
                        </span>
                        <span>{f.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-muted-foreground sm:px-8 sm:pl-20">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
