import * as React from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

type PageShellProps = {
  children: React.ReactNode;
  hideWhatsAppFloat?: boolean;
};

export function PageShell({ children, hideWhatsAppFloat }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
      {!hideWhatsAppFloat ? <WhatsAppFloat /> : null}
    </div>
  );
}
