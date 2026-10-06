import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { locationsCopy } from "@/lib/locations-data";
import { breadcrumbList, professionalServiceSchema } from "@/lib/site";

export function EinsatzgebietPage() {
  const t = useCopy(locationsCopy);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      professionalServiceSchema(t.hub.metaDescription),
      breadcrumbList([
        { name: t.breadcrumbHome, path: "/" },
        { name: t.breadcrumbArea, path: "/einsatzgebiet" },
      ]),
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta
        title={t.hub.metaTitle}
        description={t.hub.metaDescription}
        path="/einsatzgebiet"
        jsonLd={jsonLd}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-20 right-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow text-gold">{t.hub.eyebrow}</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {t.hub.h1}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{t.hub.lead}</p>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{t.hub.body}</p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.locations.map((location) => (
                <RevealItem key={location.slug}>
                  <Link
                    to={`/einsatzgebiet/${location.slug}`}
                    className="card-elevated group flex h-full flex-col p-6"
                  >
                    <h2 className="font-display text-lg font-bold text-ink group-hover:text-primary">
                      {location.name}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {location.cardText}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
