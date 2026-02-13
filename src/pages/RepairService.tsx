import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Seo } from "@/components/site/Seo";

export default function RepairService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={`Appliance Repair & Service | ${siteConfig.name} Gurgaon`}
        description="AC, geyser, refrigerator and washing machine repair service in Gurgaon. Fast WhatsApp support and technician visits."
        path="/repair-service"
      />
      <SiteHeader />

      <main className="container py-12 md:py-16">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Appliance Repair & Service</h1>
          <p className="mt-3 text-muted-foreground">
            Quick support for AC, geyser, refrigerator and washing machine issues across Gurgaon.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Diagnosis", desc: "Share your issue and get a clear next step." },
            { title: "Fast Visit", desc: "We schedule a technician visit based on availability." },
            { title: "Quality Checks", desc: "Service is tested before completion." },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Get service on WhatsApp</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Message us your appliance type, issue and location. We’ll confirm timing.
          </p>
          <div className="mt-4">
            <Button asChild size="lg">
              <a href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
