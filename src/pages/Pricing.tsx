import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";
import { getProductsByCategory } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { 
  Plus, 
  Minus, 
  Wind, 
  Snowflake, 
  Flame, 
  WashingMachine,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = {
  "window-ac": Wind,
  "split-ac": Snowflake,
  "oil-heater": Flame,
  "washing-machine": WashingMachine,
};

const categoryColors: Record<string, string> = {
  "window-ac": "from-blue-500 to-cyan-500",
  "split-ac": "from-indigo-500 to-purple-500",
  "oil-heater": "from-orange-500 to-red-500",
  "washing-machine": "from-emerald-500 to-teal-500",
};

function PricingCard({
  name,
  price,
  capacity,
  slug,
  categorySlug,
  benefits,
  deliveryTimeline,
}: {
  name: string;
  price: number;
  capacity: string;
  slug: string;
  categorySlug: string;
  benefits: string[];
  deliveryTimeline: string;
}) {
  const [quantity, setQuantity] = React.useState(1);
  const totalPrice = price * quantity;

  const Icon = categoryIcons[categorySlug] || Wind;
  const colorClass = categoryColors[categorySlug] || "from-blue-500 to-cyan-500";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
    >
      {/* Gradient accent */}
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", colorClass)} />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className={cn("mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white", colorClass)}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <Badge variant="secondary" className="mt-1.5">
            {capacity}
          </Badge>
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-foreground">₹{totalPrice.toLocaleString("en-IN")}</span>
          <span className="text-muted-foreground">/season</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">Per unit • {quantity} selected</p>
      </div>

      {/* Quantity Selector */}
      <div className="mt-5 flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">Qty:</span>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-1">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground disabled:opacity-50"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-semibold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            disabled={quantity >= 10}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground disabled:opacity-50"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Benefits */}
      <ul className="mt-5 space-y-2">
        {benefits.slice(0, 3).map((benefit) => (
          <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Delivery */}
      <p className="mt-4 text-xs text-muted-foreground">
        🚚 {deliveryTimeline}
      </p>

      {/* CTA */}
      <div className="mt-6 flex gap-2">
        <Button asChild size="sm" className="flex-1">
          <Link to={`/rent/${slug}`}>
            Rent Now
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link to={`/product/${slug}`}>Details</Link>
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity group-hover:opacity-5" />
    </motion.div>
  );
}

function CategorySection({
  categorySlug,
  title,
  products,
  index,
}: {
  categorySlug: string;
  title: string;
  products: Array<{
    slug: string;
    name: string;
    monthlyPrice: number;
    capacityLabel: string;
    benefits: string[];
    deliveryTimeline: string;
  }>;
  index: number;
}) {
  const Icon = categoryIcons[categorySlug] || Wind;
  const colorClass = categoryColors[categorySlug] || "from-blue-500 to-cyan-500";

  return (
    <ScrollAnimation variant="fadeUp" delay={index * 0.1}>
      <section className="py-12 first:pt-0">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white", colorClass)}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{products.length} options available</p>
          </div>
        </div>

        {/* Products Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <PricingCard
                name={product.name}
                price={product.monthlyPrice}
                capacity={product.capacityLabel}
                slug={product.slug}
                categorySlug={categorySlug}
                benefits={product.benefits}
                deliveryTimeline={product.deliveryTimeline}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </ScrollAnimation>
  );
}

export default function PricingPage() {
  const groupedProducts = getProductsByCategory();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AC & Appliance Rental Prices in Gurgaon",
    description: "Complete pricing for Window AC, Split AC, Oil Heaters, and Washing Machine rentals in Gurgaon.",
    numberOfItems: Object.values(groupedProducts).reduce((acc, g) => acc + g.products.length, 0),
    itemListElement: Object.values(groupedProducts).flatMap((group, groupIndex) =>
      group.products.map((product, productIndex) => ({
        "@type": "ListItem",
        position: groupIndex * 10 + productIndex + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          offers: {
            "@type": "Offer",
            price: product.monthlyPrice,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          },
        },
      }))
    ),
  };

  return (
    <PageShell>
      <Seo
        title="AC Rental Prices in Gurgaon | Window AC, Split AC, Heater Rent"
        description="Check AC rental prices in Gurgaon. Window AC from ₹6,999, Split AC from ₹10,999, Oil Heaters from ₹3,499. Free installation & maintenance included."
        path="/pricing"
        jsonLd={jsonLd}
      />

      <main className="bg-app">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="container relative">
            <ScrollAnimation variant="fadeUp">
              <div className="mx-auto max-w-3xl text-center">
                <Badge variant="outline" className="mb-4 gap-1.5 px-3 py-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Transparent Pricing
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Appliance Rental{" "}
                  <span className="text-gradient">Pricing</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  Seasonal rental rates for ACs, heaters, and washing machines in Gurgaon. 
                  All prices include delivery, installation, and maintenance support.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/25">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}?text=Hi, I want to know more about rental pricing`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Get Custom Quote
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Pricing Categories */}
        <section className="container pb-24">
          <div className="divide-y divide-border">
            {Object.entries(groupedProducts).map(([slug, group], index) => (
              <CategorySection
                key={slug}
                categorySlug={slug}
                title={group.category.title}
                products={group.products}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <ScrollAnimation variant="slideUp">
          <section className="section-dark py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Need a Custom Quote?
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  For bulk orders, long-term rentals, or corporate requirements, contact us for special pricing.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    variant="whatsapp"
                    className="gap-2 shadow-lg shadow-whatsapp/25"
                  >
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}?text=Hi, I need a custom quote for appliance rental`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/contact">
                      Contact Form
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>
    </PageShell>
  );
}
