import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({ title, description, path, image, jsonLd }: SeoProps) {
  const canonical = `${siteConfig.url}${path}`;
  const ogImage = image ?? "/placeholder.svg";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
