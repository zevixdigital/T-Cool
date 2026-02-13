import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Terms for appliance rentals and repair services in Gurgaon."
      path="/terms"
    >
      <div className="space-y-4">
        <p>
          These Terms & Conditions apply to rental and repair services provided by{" "}
          <span className="font-semibold text-foreground">{siteConfig.name}</span>.
        </p>

        <div>
          <h2 className="text-base font-semibold text-foreground">Rental terms</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Monthly rent and security deposit vary by product and condition.</li>
            <li>Installation/maintenance inclusions are shown on product pages (where applicable).</li>
            <li>Availability and delivery timelines are subject to confirmation.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Service terms</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Technician visits are scheduled based on availability and location.</li>
            <li>Replacement parts (if any) may be chargeable after diagnosis.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Payments</h2>
          <p className="mt-2">Payment mode and schedule will be confirmed on WhatsApp/call before delivery or service.</p>
        </div>
      </div>
    </LegalPage>
  );
}
