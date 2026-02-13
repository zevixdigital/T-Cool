import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import heroImage from "@/assets/hero-appliances.jpg";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeCategories } from "@/components/home/HomeCategories";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeFaq } from "@/components/home/HomeFaq";

const Index = () => {
  const faqs = [
    {
      q: "Do you provide installation with AC rentals?",
      a: "Yes—installation is included for selected rental products. The inclusions are shown on each product page and confirmed on WhatsApp before scheduling.",
    },
    {
      q: "How fast can you deliver in Gurgaon?",
      a: "Most rentals are delivered within 24–72 hours depending on model availability and your location/sector.",
    },
    {
      q: "What documents are required for renting?",
      a: "We typically confirm basic ID/address details during order confirmation. Requirements can vary by product and tenure.",
    },
    {
      q: "Do you offer repair service visits?",
      a: "Yes. Share your appliance type, issue, and location on WhatsApp and we’ll schedule a technician visit based on availability.",
    },
    {
      q: "Is maintenance included during the rental period?",
      a: "Maintenance is included on selected products. Check the product badges and we’ll confirm coverage during booking.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground bg-app">
      <Seo
        title={`${siteConfig.name} | Home Appliance Rental & Repair in Gurgaon`}
        description="Rent ACs and heaters with free installation & maintenance in Gurgaon. Trusted appliance rentals and repair services by TrueCool AC Service."
        path="/"
        image={heroImage}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            areaServed: "Gurgaon, Haryana",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurgaon",
              addressRegion: "Haryana",
              addressCountry: "IN",
            },
            url: siteConfig.url,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          },
        ]}
      />
      <SiteHeader />

      <main>
        <HomeHero heroImage={heroImage} />
        <HomeCategories />
        <HomeTrust />
        <HomeTestimonials />
        <HomeFaq faqs={faqs} />
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
