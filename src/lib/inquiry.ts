import { siteConfig } from "@/config/site";

export type InquiryPayload = {
  name: string;
  phone: string;
  city: string;
  category: string;
  product: string;
  monthlyPrice: number;
  message?: string;
};

export function formatInquiryMessage(p: InquiryPayload) {
  return [
    "New Rental Inquiry 🚀",
    `Name: ${p.name}`,
    `Phone: ${p.phone}`,
    `City: ${p.city}`,
    `Category: ${p.category}`,
    `Product: ${p.product}`,
    `Monthly Price: ₹${p.monthlyPrice}/month`,
    `Message: ${p.message?.trim() ? p.message.trim() : "-"}`,
  ].join("\n");
}

export function buildWhatsAppLink(message: string) {
  const phone = siteConfig.whatsapp.phoneE164Digits;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
