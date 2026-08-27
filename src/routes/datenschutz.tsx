import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

const title = "Datenschutzerklärung | DPP Services";
const description =
  "Datenschutzerklärung der DPP Services GbR: Informationen zur Verarbeitung personenbezogener Daten, Kontaktformular, Hosting und Ihre Rechte nach DSGVO.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Wir freuen uns über Ihr Interesse an DPP Services. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten auf dieser Website."
    >
      <LegalSection heading="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          DPP Services GbR
          <br />
          Am Kronberger Hang 2
          <br />
          65824 Schwalbach am Taunus, Deutschland
          <br />
          Telefon:{" "}
          <a href="tel:+4917670800798" className="text-primary hover:underline">
            +49 (0) 176 70800798
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="2. Grundsätze der Datenverarbeitung">
        <p>
          Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der gesetzlichen
          Bestimmungen (DSGVO, BDSG, TDDDG). Personenbezogene Daten sind alle Informationen, die
          sich auf eine identifizierbare natürliche Person beziehen – etwa Name, Anschrift,
          E-Mail-Adresse oder Telefonnummer.
        </p>
      </LegalSection>

      <LegalSection heading="3. Hosting und Server-Logfiles">
        <p>
          Diese Website wird bei einem externen Dienstleister (Hoster) betrieben. Beim Aufruf der
          Website werden automatisch Informationen in Server-Logfiles erfasst, die Ihr Browser
          übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL,
          verwendeter Browser und Betriebssystem.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes Interesse am sicheren,
          stabilen und fehlerfreien Betrieb der Website. Diese Daten werden nicht mit anderen
          Datenquellen zusammengeführt und nach kurzer Zeit gelöscht.
        </p>
      </LegalSection>

      <LegalSection heading="4. Kontaktformular, E-Mail und Telefon">
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch eine Anfrage senden,
          verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail-Adresse,
          Telefonnummer, gewünschte Leistung und Ihre Nachricht) ausschließlich zur Bearbeitung
          Ihrer Anfrage und für den Fall von Anschlussfragen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der Vorbereitung oder
          Erfüllung eines Vertrags dient, ansonsten Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre
          Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Wir löschen die Daten, sobald der Zweck
          entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection heading="5. Bewerbungen">
        <p>
          Übersenden Sie uns eine Bewerbung, verarbeiten wir Ihre Bewerbungsdaten zum Zweck des
          Bewerbungsverfahrens (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG). Nach Abschluss des
          Verfahrens werden Bewerbungsunterlagen spätestens nach sechs Monaten gelöscht, sofern Sie
          keiner längeren Speicherung zugestimmt haben.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies und lokale Speicherung">
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies bzw. lokale Speicher,
          soweit sie für den Betrieb und die Sicherheit der Seite erforderlich sind (§ 25 Abs. 2
          TDDDG). Ein Tracking zu Marketing- oder Analysezwecken findet nicht statt. Sollten künftig
          nicht notwendige Dienste eingesetzt werden, holen wir vorab Ihre Einwilligung ein.
        </p>
      </LegalSection>

      <LegalSection heading="7. Schriftarten und externe Inhalte">
        <p>
          Zur einheitlichen Darstellung von Schriften werden Webfonts eingesetzt. Beim Aufruf der
          Seite kann hierzu eine Verbindung zu den Servern des Anbieters aufgebaut werden, wobei
          Ihre IP-Adresse übertragen wird. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer ansprechenden und konsistenten Darstellung).
        </p>
      </LegalSection>

      <LegalSection heading="8. Weitergabe von Daten">
        <p>
          Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung
          erforderlich ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben.
          Dienstleister, die in unserem Auftrag Daten verarbeiten (z. B. Hosting, E-Mail), sind
          durch Auftragsverarbeitungsverträge nach Art. 28 DSGVO gebunden.
        </p>
      </LegalSection>

      <LegalSection heading="9. Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke
          erforderlich ist oder gesetzliche Aufbewahrungsfristen (insbesondere handels- und
          steuerrechtlich, bis zu 10 Jahre) dies vorschreiben.
        </p>
      </LegalSection>

      <LegalSection heading="10. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="11. Beschwerderecht bei der Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
          Ihrer personenbezogenen Daten zu beschweren. Zuständig ist für uns der Hessische
          Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189
          Wiesbaden.
        </p>
      </LegalSection>

      <LegalSection heading="12. Datensicherheit">
        <p>
          Diese Website nutzt eine SSL/TLS-Verschlüsselung, damit übermittelte Inhalte nicht von
          Dritten mitgelesen werden können. Zusätzlich treffen wir angemessene technische und
          organisatorische Maßnahmen zum Schutz Ihrer Daten.
        </p>
      </LegalSection>

      <LegalSection heading="13. Änderungen dieser Erklärung">
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die rechtlichen
          Vorgaben ändern. Es gilt jeweils die hier veröffentlichte, aktuelle Fassung.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
