import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use, and protect your information when you contact us for rentals and repairs."
      path="/privacy-policy"
    >
      <div className="space-y-4">
        <p>
          This Privacy Policy describes how <span className="font-semibold text-foreground">{siteConfig.name}</span> collects and uses
          information when you contact us via WhatsApp, phone, or email.
        </p>

        <div>
          <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Name, phone number, and city/location you share with us.</li>
            <li>Appliance details required to provide rental/repair support.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">How we use your information</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To respond to your inquiry and coordinate delivery/installation/service visits.</li>
            <li>To share quotations, invoices, and service updates.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Data protection</h2>
          <p className="mt-2">We take reasonable steps to protect your information. We do not sell personal data.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            For privacy questions, email us at <span className="font-semibold text-foreground">{siteConfig.contact.email}</span>.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}
