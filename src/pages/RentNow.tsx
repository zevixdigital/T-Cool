import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";

import { getProductBySlug, getCategoryBySlug } from "@/data/catalog";
import { buildWhatsAppLink, formatInquiryMessage } from "@/lib/inquiry";
import { siteConfig } from "@/config/site";
import { Seo } from "@/components/site/Seo";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid mobile number")
    .max(20)
    .regex(/^[0-9+\s-]+$/, "Only numbers are allowed"),
  city: z.string().trim().min(2, "Enter city").max(60),
  message: z.string().trim().max(500).optional(),
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function RentNowPage() {
  const { productSlug } = useParams();
  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const category = product ? getCategoryBySlug(product.categorySlug) : undefined;

  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "Gurgaon",
      message: "",
    },
  });

  const inquiryPreview = React.useMemo(() => {
    const values = form.getValues();
    if (!product || !category) return "";
    return formatInquiryMessage({
      name: values.name || "",
      phone: values.phone || "",
      city: values.city || "",
      category: category.title,
      product: product.name,
      monthlyPrice: product.monthlyPrice,
      message: values.message,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch(), product?.slug, category?.slug]);

  async function copyToClipboard() {
    if (!inquiryPreview) return;
    await navigator.clipboard.writeText(inquiryPreview);
    toast.success("Inquiry copied");
  }

  function onSubmit(values: InquiryForm) {
    if (!product || !category) {
      toast.error("Product not found");
      return;
    }
    const message = formatInquiryMessage({
      name: values.name,
      phone: values.phone,
      city: values.city,
      category: category.title,
      product: product.name,
      monthlyPrice: product.monthlyPrice,
      message: values.message,
    });

    const wa = buildWhatsAppLink(message);
    toast.success("Opening WhatsApp…");
    window.open(wa, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={`Rent Now | ${product?.name ?? siteConfig.name}`}
        description="Send a rental inquiry on WhatsApp. Share your details and we’ll confirm availability, delivery and installation in Gurgaon."
        path={`/rent/${productSlug ?? ""}`}
        image={product?.image}
      />
      <SiteHeader />

      <main className="container py-10 md:py-14">
        <header className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Rent Inquiry</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Rent Now</h1>
          <p className="mt-3 text-muted-foreground">
            Submit your details and we’ll confirm availability, delivery and installation.
          </p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-xl">Your details</CardTitle>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 98XXXXXX12" inputMode="tel" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Gurgaon" autoComplete="address-level2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-3 rounded-lg border bg-muted/30 p-4 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Product</span>
                      <span className="font-medium">{product?.name ?? "-"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{category?.title ?? "-"}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-muted-foreground">Monthly Price</span>
                      <span className="font-medium">₹{product?.monthlyPrice ?? "-"}/month</span>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any timing preferences or questions?" className="min-h-28" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="rounded-lg border bg-card p-4">
                    <div className="text-sm font-semibold">Telegram later?</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Automatic Telegram sending requires a backend (to keep the bot token secure). For now you can copy the inquiry or open
                      Telegram manually.
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <Button type="button" variant="outline" onClick={copyToClipboard}>
                        Copy Inquiry
                      </Button>
                      <Button asChild type="button" variant="outline">
                        <a href={siteConfig.telegram.link} target="_blank" rel="noreferrer">
                          Open Telegram
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send on WhatsApp
                  </Button>
                  {product && (
                    <Button asChild variant="ghost" className="w-full sm:w-auto">
                      <Link to={`/product/${product.slug}`}>Back to product</Link>
                    </Button>
                  )}
                </CardFooter>
              </form>
            </Form>
          </Card>

          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-6">
              <div className="text-sm font-semibold">Preview (message)</div>
              <pre className="mt-3 whitespace-pre-wrap rounded-md bg-muted/30 p-4 text-xs text-muted-foreground">
                {inquiryPreview || "Fill the form to preview the inquiry message."}
              </pre>
              <div className="mt-4 rounded-lg border bg-muted/30 p-4 text-xs text-muted-foreground">
                <div className="font-medium text-foreground">Setup tip</div>
                Update your WhatsApp number in <code>src/config/site.ts</code> → <code>phoneE164Digits</code>.
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
