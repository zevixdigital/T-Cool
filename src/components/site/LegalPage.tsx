import * as React from "react";
import { Seo } from "@/components/site/Seo";
import { siteConfig } from "@/config/site";
import { PageShell } from "@/components/site/PageShell";

type LegalPageProps = {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
};

export function LegalPage({ title, description, path, children }: LegalPageProps) {
  return (
    <PageShell>
      <Seo title={`${title} | ${siteConfig.name}`} description={description} path={path} />
      <main className="container py-12 md:py-16">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </header>
        <section className="mt-10 max-w-3xl rounded-xl border bg-card p-6">
          <div className="text-sm text-muted-foreground">{children}</div>
        </section>
      </main>
    </PageShell>
  );
}
