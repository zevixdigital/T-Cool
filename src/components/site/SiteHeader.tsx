import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/catalog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

import Logo from "../../assets/TrueCool - Logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  {
    to: `/category/${
      categories.find((c) => c.slug === "window-ac")?.slug ?? "window-ac"
    }`,
    label: "Window AC",
  },
  {
    to: `/category/${
      categories.find((c) => c.slug === "split-ac")?.slug ?? "split-ac"
    }`,
    label: "Split AC",
  },
  { to: "/repair-service", label: "Repair" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center h-full -ml-4 lg:-ml-6">
  <img
    src={Logo}
    alt="TrueCool – Appliance Rentals & Repair Services"
    className="
      block
      h-12 w-auto
      sm:h-14
      lg:h-24
      object-contain
      scale-[1.6]
      origin-left
      leading-none
      align-middle
      m-0
      p-0
    "
  />
</Link>



        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ================= RIGHT ACTIONS ================= */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA */}
          <Button
            asChild
            className="hidden h-11 gap-2 px-6 shadow-md sm:inline-flex"
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`}
              target="_blank"
              rel="noreferrer"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          {/* ================= MOBILE MENU ================= */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-sm p-0">
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <SheetHeader className="border-b p-4">
                  <SheetTitle>
                    <Link
                      to="/"
                      className="flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src={Logo}
                        alt="TrueCool"
                        className="h-9 w-auto object-contain"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Nav */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {navItems.map((item) => {
                    const active = pathname === item.to;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <div className="border-t p-4">
                  <p className="mb-3 text-sm text-muted-foreground">
                    Need help now?
                  </p>
                  <Button asChild className="w-full gap-2">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Phone className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
