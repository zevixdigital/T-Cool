import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      description="General information, service limitations, and liability terms for appliance rentals and repair services."
      path="/disclaimer"
    >
      <div className="space-y-6 text-sm leading-relaxed">

        <p>
          The information provided on this website by{" "}
          <span className="font-semibold text-foreground">
            {siteConfig.name}
          </span>{" "}
          is for general informational purposes only. By using our website and services,
          you agree to the terms outlined in this Disclaimer.
        </p>

        {/* Product & Service Information */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Product & Service Information
          </h2>
          <p className="mt-2">
            Product images, appliance specifications, and service descriptions
            displayed on this website are for reference purposes only. Actual
            models, brands, and specifications may vary based on availability,
            supplier stock, and service requirements.
          </p>
        </div>

        {/* Pricing & Availability */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Pricing & Availability
          </h2>
          <p className="mt-2">
            Pricing, delivery timelines, and inclusions such as installation
            and maintenance are confirmed at the time of order confirmation
            via WhatsApp or phone call. Prices may change without prior notice
            depending on demand, availability, and operational factors.
          </p>
        </div>

        {/* Service Limitations */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Service Limitations
          </h2>
          <p className="mt-2">
            Repair services are subject to technical feasibility and appliance
            condition. We do not guarantee repair outcomes in cases where
            appliances are severely damaged, outdated, or beyond economical repair.
          </p>
        </div>

        {/* Third-Party Services */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Third-Party Technicians
          </h2>
          <p className="mt-2">
            In some cases, services may be provided by verified third-party
            technicians or partners. While we strive to ensure quality service,
            we are not liable for indirect damages arising from third-party actions.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-2">
            {siteConfig.name} shall not be held liable for any indirect,
            incidental, or consequential damages arising from the use of our
            rental or repair services. Customers are advised to verify
            appliance suitability and service details before confirmation.
          </p>
        </div>

        {/* Website Content Accuracy */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Website Accuracy
          </h2>
          <p className="mt-2">
            We make reasonable efforts to ensure the accuracy of the information
            published on this website. However, we do not warrant that all
            information is complete, accurate, or current at all times.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-2">
            For questions regarding this Disclaimer, please contact us at{" "}
            <span className="font-semibold text-foreground">
              {siteConfig.contact.email}
            </span>{" "}
            or call +91 90503 57225 / +91 98136 86975.
          </p>
        </div>

      </div>
    </LegalPage>
  );
}