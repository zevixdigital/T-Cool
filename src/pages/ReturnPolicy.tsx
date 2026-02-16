import { LegalPage } from "@/components/site/LegalPage";
import { siteConfig } from "@/config/site";

export default function ReturnPolicy() {
  return (
    <LegalPage
      title="Return / Cancellation Policy"
      description="Cancellation, refund, and return guidelines for appliance rentals and repair services."
      path="/return-policy"
    >
      <div className="space-y-6 text-sm leading-relaxed">

        <p>
          This Return / Cancellation Policy outlines the terms applicable to
          appliance rentals and repair services provided by{" "}
          <span className="font-semibold text-foreground">
            {siteConfig.name}
          </span>.
        </p>

        {/* Rental Cancellations */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Rental Cancellations
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Rental orders can be cancelled before delivery or installation
              by contacting us via WhatsApp or phone.
            </li>
            <li>
              If cancellation is requested after dispatch, applicable logistics
              charges may be deducted.
            </li>
            <li>
              Advance payments, if any, will be adjusted or refunded as per
              confirmation shared at the time of booking.
            </li>
          </ul>
        </div>

        {/* Rental Returns */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Rental Returns
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Rental appliances may be returned at the end of the agreed rental period.
            </li>
            <li>
              Early returns may be subject to minimum rental duration terms.
            </li>
            <li>
              Appliances must be returned in reasonable working condition.
              Damage beyond normal wear may result in additional charges.
            </li>
          </ul>
        </div>

        {/* Service Cancellations */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Repair / Service Cancellations
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Service visits can be rescheduled or cancelled by informing us
              before technician dispatch.
            </li>
            <li>
              If a technician has already reached the location, a service visit
              charge may apply.
            </li>
          </ul>
        </div>

        {/* Refund Policy */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Refund Policy
          </h2>
          <p className="mt-2">
            Refund timelines and eligibility depend on the nature of the service
            or rental agreement. Any eligible refund will be processed through
            the original payment method within a reasonable timeframe.
          </p>
        </div>

        {/* Non-Refundable Situations */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Non-Refundable Situations
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Completed installation or repair services.</li>
            <li>Custom delivery or urgent dispatch charges.</li>
            <li>Damage caused due to misuse or negligence.</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-2">
            For cancellation or refund-related queries, please contact us at{" "}
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