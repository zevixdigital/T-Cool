import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Terms governing appliance rentals and repair services in Gurgaon, Haryana."
      path="/terms"
    >
      <div className="space-y-6 text-sm leading-relaxed">

        <p>
          These Terms & Conditions govern the use of services provided by{" "}
          <span className="font-semibold text-foreground">
            {siteConfig.name}
          </span>. By booking a rental or repair service, you agree to comply
          with these terms.
        </p>

        {/* Rental Terms */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Rental Terms
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Monthly rent, security deposit, and rental duration vary by
              product type, model, and condition.
            </li>
            <li>
              Installation and maintenance inclusions are specified at the
              time of booking confirmation.
            </li>
            <li>
              Availability and delivery timelines are subject to stock and
              operational feasibility.
            </li>
            <li>
              The customer agrees to use rented appliances responsibly and
              maintain them in reasonable condition.
            </li>
            <li>
              Any damage beyond normal wear and tear may result in repair or
              replacement charges.
            </li>
          </ul>
        </div>

        {/* Rental Duration & Early Termination */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Rental Duration & Early Termination
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Minimum rental period terms may apply depending on the product.
            </li>
            <li>
              Early termination requests may involve adjustment of deposit or
              minimum rental charges.
            </li>
          </ul>
        </div>

        {/* Service Terms */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Repair & Service Terms
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Technician visits are scheduled based on availability and service location.
            </li>
            <li>
              Diagnosis may involve inspection charges, which will be communicated beforehand.
            </li>
            <li>
              Replacement parts (if required) may be chargeable after approval from the customer.
            </li>
            <li>
              Service timelines depend on spare part availability and technical complexity.
            </li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Payments
          </h2>
          <p className="mt-2">
            Payment mode, rental schedule, service charges, and deposit terms
            will be confirmed via WhatsApp or phone before delivery or service.
            Failure to make timely payments may result in service suspension or
            retrieval of rented appliances.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-2">
            {siteConfig.name} shall not be liable for indirect, incidental,
            or consequential damages arising from misuse of appliances,
            improper electrical conditions, or external factors beyond our control.
          </p>
        </div>

        {/* Customer Responsibilities */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Customer Responsibilities
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Provide accurate address and contact details at the time of booking.
            </li>
            <li>
              Ensure safe electrical and installation environment.
            </li>
            <li>
              Allow reasonable access for delivery, installation, and service visits.
            </li>
          </ul>
        </div>

        {/* Modifications */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Modifications to Terms
          </h2>
          <p className="mt-2">
            We reserve the right to update these Terms & Conditions at any time.
            Updated versions will be posted on this page.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-2">
            For questions regarding these Terms & Conditions, contact us at{" "}
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