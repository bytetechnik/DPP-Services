import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";
import { useCopy } from "@/lib/i18n";

const title = "Impressum | DPP Services GbR";
const description =
  "Impressum der DPP Services GbR, Am Kronberger Hang 2, 65824 Schwalbach am Taunus – Angaben gemäß § 5 TMG, Kontakt und Haftungshinweise.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://dpp-modern-revival.lovable.app/impressum" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dpp-modern-revival.lovable.app/impressum" }],
  }),
  component: ImpressumPage,
});

const copy = {
  de: {
    title: "Impressum",
    intro: "Angaben gemäß § 5 TMG.",
    anbieter: "Anbieter",
    kontakt: "Kontakt",
    gesellschafter: "Gesellschafter",
    ustHeading: "Umsatzsteuer-Identifikationsnummer",
    ustValue: "USt-IdNr.: DE460265715",
    verantwortlichHeading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    haftungInhalteHeading: "Haftung für Inhalte",
    haftungInhalteText:
      "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.",
    haftungLinksHeading: "Haftung für Links",
    haftungLinksText:
      "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
    urheberrechtHeading: "Urheberrecht",
    urheberrechtText:
      "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung oder Nutzung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    telefonLabel: "Telefon:",
    emailLabel: "E-Mail:",
    websiteLabel: "Website: www.dpp-services.de",
  },
  en: {
    title: "Legal Notice",
    intro: "Information pursuant to § 5 TMG (German Telemedia Act).",
    anbieter: "Provider",
    kontakt: "Contact",
    gesellschafter: "Partners",
    ustHeading: "VAT Identification Number",
    ustValue: "VAT ID: DE460265715",
    verantwortlichHeading: "Responsible for content pursuant to § 55 (2) RStV",
    haftungInhalteHeading: "Liability for content",
    haftungInhalteText:
      "The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.",
    haftungLinksHeading: "Liability for links",
    haftungLinksText:
      "Our website contains links to external third-party websites, over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
    urheberrechtHeading: "Copyright",
    urheberrechtText:
      "The content and works created by the site operator on these pages are subject to German copyright law. Reproduction or use beyond the scope of copyright law requires the written consent of the respective author or creator.",
    telefonLabel: "Phone:",
    emailLabel: "Email:",
    websiteLabel: "Website: www.dpp-services.de",
  },
} as const;

function ImpressumPage() {
  const t = useCopy(copy);
  return (
    <LegalLayout title={t.title} intro={t.intro}>
      <LegalSection heading={t.anbieter}>
        <p>
          DPP Services GbR
          <br />
          Am Kronberger Hang 2
          <br />
          65824 Schwalbach am Taunus
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection heading={t.kontakt}>
        <p>
          {t.telefonLabel}{" "}
          <a href="tel:+4917670800798" className="text-primary hover:underline">
            +49 (0) 176 70800798
          </a>
          <br />
          {t.emailLabel}{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
          <br />
          {t.websiteLabel}
        </p>
      </LegalSection>

      <LegalSection heading={t.gesellschafter}>
        <p>David Penev / Justin Sitz</p>
      </LegalSection>

      <LegalSection heading={t.ustHeading}>
        <p>{t.ustValue}</p>
      </LegalSection>

      <LegalSection heading={t.verantwortlichHeading}>
        <p>
          DPP Services GbR
          <br />
          David Penev / Justin Sitz
          <br />
          Am Kronberger Hang 2, 65824 Schwalbach am Taunus
        </p>
      </LegalSection>

      <LegalSection heading={t.haftungInhalteHeading}>
        <p>{t.haftungInhalteText}</p>
      </LegalSection>

      <LegalSection heading={t.haftungLinksHeading}>
        <p>{t.haftungLinksText}</p>
      </LegalSection>

      <LegalSection heading={t.urheberrechtHeading}>
        <p>{t.urheberrechtText}</p>
      </LegalSection>
    </LegalLayout>
  );
}
