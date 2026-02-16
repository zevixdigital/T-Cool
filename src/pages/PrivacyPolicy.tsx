import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use, and protect your information when you contact us for rentals and repairs."
      path="/privacy-policy"
    >
      <div className="space-y-6 text-sm leading-relaxed">

        <p>
          This Privacy Policy describes how{" "}
          <span className="font-semibold text-foreground">
            {siteConfig.name}
          </span>{" "}
          collects, uses, and protects your information when you contact us for
          appliance rentals and repair services in Gurgaon, Haryana.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Information We Collect
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Name, phone number, email address, and location you share with us.</li>
            <li>Appliance details required to provide rental or repair support.</li>
            <li>Address details for delivery, installation, or service visits.</li>
            <li>Communication records via WhatsApp, phone, or email.</li>
            <li>Payment details necessary for billing (processed securely).</li>
          </ul>
        </div>

        {/* How We Use Information */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To respond to your inquiries and provide quotations.</li>
            <li>To coordinate delivery, installation, maintenance, and repair services.</li>
            <li>To send invoices, payment confirmations, and service updates.</li>
            <li>To improve our services and customer experience.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>
        </div>

        {/* Data Sharing */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Data Sharing & Third Parties
          </h2>
          <p className="mt-2">
            We do not sell, trade, or rent your personal information to third
            parties. Your information may only be shared with verified technicians
            or service partners strictly for the purpose of completing your rental
            or repair request.
          </p>
        </div>

        {/* Data Protection */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Data Protection & Security
          </h2>
          <p className="mt-2">
            We take reasonable technical and organizational measures to protect your
            personal data against unauthorized access, misuse, or disclosure.
            However, no method of online transmission is 100% secure.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Cookies & Website Usage
          </h2>
          <p className="mt-2">
            Our website may use cookies or analytics tools to improve performance
            and understand visitor behavior. These tools do not collect sensitive
            personal information.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Your Rights
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>You may request access to the personal information we hold about you.</li>
            <li>You may request correction or deletion of your information.</li>
            <li>You may opt out of promotional communication at any time.</li>
          </ul>
        </div>

        {/* Retention */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Data Retention
          </h2>
          <p className="mt-2">
            We retain personal information only as long as necessary to provide
            services and comply with legal obligations.
          </p>
        </div>

        {/* Policy Updates */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Updated versions
            will be posted on this page with a revised effective date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-2">
            If you have questions regarding this Privacy Policy, please contact us at{" "}
            <span className="font-semibold text-foreground">
              {siteConfig.contact.email}
            </span>{" "}
            or call us directly at +91 90503 57225 / +91 98136 86975.
          </p>
        </div>

      </div>
    </LegalPage>
  );
}