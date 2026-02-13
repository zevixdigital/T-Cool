import { siteConfig } from "@/config/site";
import * as React from "react";
import { MessageCircle, Phone } from "lucide-react";

export const WhatsAppFloat = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const phoneNumber = siteConfig.whatsapp.phoneE164Digits;

  return (
    <div
      ref={ref}
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 ${className ?? ""}`}
      {...props}
    >
      {/* 📞 Call Button (Top) */}
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call Now"
        className="
          flex items-center justify-center
          h-14 w-14
          rounded-full
          bg-blue-600
          text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* 💬 WhatsApp Button (Bottom) */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex items-center justify-center
          h-14 w-14
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:shadow-xl
        "
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
});

WhatsAppFloat.displayName = "WhatsAppFloat";