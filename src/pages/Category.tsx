import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryBySlug, getProductsByCategorySlug } from "@/data/catalog";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const list = categorySlug ? getProductsByCategorySlug(categorySlug) : [];

  const [query, setQuery] = React.useState("");
  const [brand, setBrand] = React.useState<string>("all");
  const [sort, setSort] = React.useState<string>("recommended");
  const [maxPrice, setMaxPrice] = React.useState<number>(() => {
    const max = Math.max(0, ...list.map((p) => p.monthlyPrice));
    return max || 5000;
  });

  const brands = React.useMemo(() => {
    return Array.from(new Set(list.map((p) => p.brand))).sort();
  }, [list]);

  const priceCeil = React.useMemo(() => {
    return Math.max(0, ...list.map((p) => p.monthlyPrice)) || 5000;
  }, [list]);

  React.useEffect(() => {
    setMaxPrice(priceCeil);
  }, [priceCeil]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = list.filter((p) => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      const matchesBrand = brand === "all" || p.brand === brand;
      const matchesPrice = p.monthlyPrice <= maxPrice;
      return matchesQuery && matchesBrand && matchesPrice;
    });

    if (sort === "price-asc") items = [...items].sort((a, b) => a.monthlyPrice - b.monthlyPrice);
    if (sort === "price-desc") items = [...items].sort((a, b) => b.monthlyPrice - a.monthlyPrice);
    if (sort === "name-asc") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [list, query, brand, maxPrice, sort]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={`${category?.title ?? "Category"} | ${siteConfig.name} Gurgaon`}
        description={
          category?.shortDescription ??
          "Browse home appliances on rent in Gurgaon with free installation and maintenance."
        }
        path={`/category/${categorySlug ?? ""}`}
        image={category?.image}
      />
      <SiteHeader />

      <main>
        <header className="relative overflow-hidden border-b">
          <div className="container relative grid gap-8 py-10 md:py-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{category?.title ?? "Category"}</h1>
              <p className="mt-3 max-w-3xl text-muted-foreground">{category?.description ?? "Browse products."}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border bg-card">
                <div className="aspect-[16/10] bg-muted">
                  <img
                    src={category?.image ?? "/placeholder.svg"}
                    alt={category?.title ?? "Category"}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent blur-3xl opacity-60"
            />
          </div>
        </header>

        <section className="container py-12">
          {list.length > 0 && (
            <div className="mb-6 grid gap-3 rounded-xl border bg-card p-4 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <label className="text-xs font-medium text-muted-foreground">Search</label>
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by model or brand" />
              </div>
              <div className="md:col-span-3">
                <label className="text-xs font-medium text-muted-foreground">Brand</label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">All</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="name-asc">Name: A → Z</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">Max price</label>
                  <span className="text-xs text-muted-foreground">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={priceCeil}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-3 w-full"
                />
              </div>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Card key={p.slug} className="overflow-hidden">
                <div className="aspect-[16/9] bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Monthly Rent</p>
                  <p className="mt-1 text-2xl font-semibold">₹{p.monthlyPrice}/month</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild className="flex-1">
                    <Link to={`/rent/${p.slug}`}>Rent Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link to={`/product/${p.slug}`}>View</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {list.length === 0 && (
            <div className="rounded-xl border bg-card p-6">
              <div className="text-lg font-semibold">Service inquiry</div>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a service category. Tap below and we’ll confirm availability and schedule a visit.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button asChild size="lg">
                  <a href={`https://wa.me/${siteConfig.whatsapp.phoneE164Digits}`} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/repair-service">Repair & Service page</Link>
                </Button>
              </div>
            </div>
          )}

          {list.length > 0 && filtered.length === 0 && (
            <div className="rounded-xl border bg-card p-6 text-sm text-muted-foreground">
              No products match your filters. Try clearing search/brand or increasing the max price.
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
