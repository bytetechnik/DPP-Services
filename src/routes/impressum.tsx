import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

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

function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" intro="Angaben gemäß § 5 TMG.">
      <LegalSection heading="Anbieter">
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

      <LegalSection heading="Kontakt">
        <p>
          Telefon:{" "}
          <a href="tel:+4917670800798" className="text-primary hover:underline">
            +49 (0) 176 70800798
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
          <br />
          Website: www.dpp-services.de
        </p>
      </LegalSection>

      <LegalSection heading="Gesellschafter">
        <p>David Penev / Justin Sitz</p>
      </LegalSection>

      <LegalSection heading="Umsatzsteuer-Identifikationsnummer">
        <p>USt-IdNr.: DE460265715</p>
      </LegalSection>

      <LegalSection heading="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>
          DPP Services GbR
          <br />
          David Penev / Justin Sitz
          <br />
          Am Kronberger Hang 2, 65824 Schwalbach am Taunus
        </p>
      </LegalSection>

      <LegalSection heading="Haftung für Inhalte">
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
        </p>
      </LegalSection>

      <LegalSection heading="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich.
        </p>
      </LegalSection>

      <LegalSection heading="Urheberrecht">
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Eine Vervielfältigung oder Nutzung außerhalb der Grenzen des
          Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
