import { LegalPage } from "@/components/site/LegalPage";

export default function ReturnPolicy() {
  return (
    <LegalPage
      title="Return / Cancellation Policy"
      description="Cancellation, refund, and return guidelines for rentals and services."
      path="/return-policy"
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">Rental cancellations</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>You can request cancellation before delivery/installation by contacting us on WhatsApp.</li>
            <li>Any advance payment handling will be communicated during confirmation.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Service cancellations</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Service visit reschedules/cancellations can be requested on WhatsApp.</li>
          </ul>
        </div>

        <p>
          For policy questions, contact us via the <span className="font-semibold text-foreground">Contact</span> page.
        </p>
      </div>
    </LegalPage>
  );
}
