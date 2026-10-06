import { AreaLinks } from "@/components/site/area-links";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Faq, faqCopy } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/footer";
import { LogoIntro } from "@/components/site/logo-intro";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { faqPageSchema, professionalServiceSchema } from "@/lib/site";

const copy = {
  de: {
    metaTitle: "Empfangsdienst Frankfurt | Hotelpersonal Rhein-Main | DPP Services",
    metaDescription:
      "DPP Services stellt Empfangsdienst und Hotelpersonal in Frankfurt und dem Rhein-Main-Gebiet: Rezeption, Night Audit, Tagung, Seminar Support und Büro-Empfang.",
  },
  en: {
    metaTitle: "Reception staff Frankfurt | Hotel staff Rhein-Main | DPP Services",
    metaDescription:
      "DPP Services provides reception and hotel staff in Frankfurt and the Rhein-Main region: front desk, night audit, conferences, seminar support and office reception.",
  },
} as const;

export function IndexPage() {
  const t = useCopy(copy);
  const faqs = useCopy(faqCopy).faqs;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [professionalServiceSchema(t.metaDescription), faqPageSchema(faqs)],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={t.metaTitle} description={t.metaDescription} path="/" jsonLd={jsonLd} />
      <LogoIntro />
      <SiteHeader />
      <main>
        <Hero />
        <Process />
        <AreaLinks />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
