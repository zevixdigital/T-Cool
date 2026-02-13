import { Seo } from "@/components/site/Seo";
import { PageShell } from "@/components/site/PageShell";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <PageShell>
      <Seo
        title={`Contact | ${siteConfig.name} Gurgaon`}
        description="Contact Smart Eager for appliance rentals and repair service in Gurgaon. Fast response on WhatsApp."
        path="/contact"
      />

      <main>
        <header className="relative overflow-hidden border-b">
          <div className="container relative grid gap-8 py-12 md:py-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Gurgaon, Haryana
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">Contact & Support</h1>
              <p className="mt-3 max-w-2xl text-pretty text-muted-foreground md:text-lg">
                Tell us what you need (rent or repair). We’ll reply with availability, pricing, and a suitable schedule.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border bg-card p-6">
                <div className="text-sm font-semibold">Business hours</div>
                <p className="mt-2 text-sm text-muted-foreground">Mon–Sun • 9:00 AM – 9:00 PM</p>
                <div className="mt-5 grid gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a className="font-medium hover:underline" href={`tel:${siteConfig.whatsapp.phoneE164Digits}`}>
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a className="font-medium hover:underline" href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent blur-3xl opacity-60" />
          </div>
        </header>

        <section className="container py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Fastest way to book rentals and repairs.</p>
                <Button asChild className="mt-4 w-full">
                  <a href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`} target="_blank" rel="noreferrer">
                    Start chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Prefer a quick call? We’ll guide you.</p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <a href={`tel:${siteConfig.whatsapp.phoneE164Digits}`}>{siteConfig.contact.phoneDisplay}</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">For invoices, documents, and details.</p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-xl border bg-card p-6">
            <div className="text-lg font-semibold">What to share on WhatsApp</div>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li>Appliance type (AC/Heater/Geyser etc.)</li>
              <li>Room size / capacity needed (for AC)</li>
              <li>Exact location / sector in Gurgaon</li>
              <li>Preferred delivery or visit date</li>
            </ul>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
