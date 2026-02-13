import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={`About | ${siteConfig.name} Gurgaon`}
        description="Smart Eager provides appliance rentals and repair services in Gurgaon with quick support and free installation/maintenance on selected products."
        path="/about"
      />
      <SiteHeader />
      <main className="container py-12 md:py-16">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">About Smart Eager</h1>
          <p className="mt-3 text-muted-foreground">
            We help Gurgaon homes stay comfortable with premium appliance rentals and reliable repair services—backed by quick support and
            transparent communication.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {["Trusted service", "Free installation", "Free maintenance"].map((title) => (
            <div key={title} className="rounded-xl border bg-card p-6">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our process is designed for speed, clarity, and long-term reliability—so you can rent with confidence.
              </p>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
