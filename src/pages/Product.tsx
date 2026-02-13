import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductBySlug, getCategoryBySlug, getSimilarProducts } from "@/data/catalog";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";

export default function ProductPage() {
  const { productSlug } = useParams();
  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const category = product ? getCategoryBySlug(product.categorySlug) : undefined;
  const similar = productSlug ? getSimilarProducts(productSlug, 3) : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={`${product?.name ?? "Product"} | ${siteConfig.name} Gurgaon`}
        description={
          product
            ? `${product.name} on rent in Gurgaon from ₹${product.monthlyPrice}/month. Free installation & maintenance (as applicable).`
            : "Browse appliance rentals in Gurgaon."
        }
        path={`/product/${productSlug ?? ""}`}
        image={product?.image}
      />
      <SiteHeader />

      <main className="container py-10 md:py-14">
        <header className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border bg-card">
            <div className="aspect-[16/10] bg-muted">
              <img src={product?.image ?? "/placeholder.svg"} alt={product?.name ?? "Product"} className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">{category?.title ?? ""}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{product?.name ?? "Product"}</h1>
            <div className="mt-4 rounded-lg border bg-card p-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Monthly Rent</div>
                  <div className="text-3xl font-semibold">₹{product?.monthlyPrice ?? "-"}/month</div>
                </div>
                <Button asChild size="lg">
                  <Link to={product ? `/rent/${product.slug}` : "/"}>Rent Now</Link>
                </Button>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Security Deposit</dt>
                  <dd className="mt-1 font-medium">₹{product?.securityDeposit ?? "-"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Capacity</dt>
                  <dd className="mt-1 font-medium">{product?.capacityLabel ?? "-"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Brand</dt>
                  <dd className="mt-1 font-medium">{product?.brand ?? "-"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Delivery Timeline</dt>
                  <dd className="mt-1 font-medium">{product?.deliveryTimeline ?? "-"}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {product?.badges.freeInstallation && (
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Free Installation
                  </span>
                )}
                {product?.badges.freeMaintenance && (
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Free Maintenance
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="mt-3 text-sm text-muted-foreground">{product?.description ?? ""}</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold">Usage benefits</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {(product?.benefits ?? []).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Ideal for</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {(product?.idealFor ?? []).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-sm font-semibold">Need help choosing?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your room size and usage—we’ll suggest the best option.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link to={product ? `/rent/${product.slug}` : "/"}>Get Recommendation</Link>
              </Button>
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">Similar Products</h2>
            {category && (
              <Button asChild variant="ghost">
                <Link to={`/category/${category.slug}`}>View category</Link>
              </Button>
            )}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((p) => (
              <Card key={p.slug} className="overflow-hidden">
                <div className="aspect-[16/9] bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">₹{p.monthlyPrice}/month</div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={`/product/${p.slug}`}>View</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
