import { Seo } from "@/components/site/Seo";
import { PageShell } from "@/components/site/PageShell";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <PageShell>
      <Seo
        title={`Contact | ${siteConfig.name}`}
        description={`${siteConfig.name} - Contact us for AC rental and appliance repair services in Gurgaon. Fast WhatsApp support and quick response.`}
        path="/contact"
      />

      <main className="py-16">

        {/* Header */}
        <section className="container text-center max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Contact & Support
          </h1>
          <p className="mt-4 text-muted-foreground">
            Need AC rental or repair service? Reach out to us for quick
            availability, pricing, and scheduling.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://wa.me/919050357225"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="tel:+919050357225">
                Call +91 90503 57225
              </a>
            </Button>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="container mt-14">
          <div className="grid gap-6 md:grid-cols-3">

            {/* WhatsApp */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fastest way to book rentals and repair services.
                </p>
                <Button asChild className="mt-4 w-full">
                  <a
                    href="https://wa.me/919050357225"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Speak directly with our support team.
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+919050357225"
                    className="block font-medium hover:underline"
                  >
                    +91 90503 57225
                  </a>
                  <a
                    href="tel:+919813686975"
                    className="block font-medium hover:underline"
                  >
                    +91 98136 86975
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" /> Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  For invoices, documentation, and formal queries.
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </Button>
              </CardContent>
            </Card>

          </div>
        </section>

      </main>
    </PageShell>
  );
}