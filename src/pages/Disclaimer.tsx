import { LegalPage } from "@/components/site/LegalPage";

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      description="General information and limitations of liability."
      path="/disclaimer"
    >
      <div className="space-y-4">
        <p>
          Product images and specifications shown on this website are for reference and may vary by model, availability, or supplier.
        </p>
        <p>
          Pricing, delivery timelines, and inclusions (installation/maintenance) are confirmed during order confirmation on WhatsApp or call.
        </p>
      </div>
    </LegalPage>
  );
}
