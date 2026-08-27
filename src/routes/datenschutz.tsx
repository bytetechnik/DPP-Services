import { LegalLayout, LegalSection } from "@/components/site/legal-layout";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";

const title = "Datenschutzerklärung | DPP Services";
const description =
  "Datenschutzerklärung der DPP Services GbR: Informationen zur Verarbeitung personenbezogener Daten, Kontaktformular, Hosting und Ihre Rechte nach DSGVO.";

const copy = {
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Wir freuen uns über Ihr Interesse an DPP Services. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten auf dieser Website.",
    s1Heading: "1. Verantwortlicher",
    s1P1:
      "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
    telefonLabel: "Telefon:",
    emailLabel: "E-Mail:",
    s2Heading: "2. Grundsätze der Datenverarbeitung",
    s2P1:
      "Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TDDDG). Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierbare natürliche Person beziehen – etwa Name, Anschrift, E-Mail-Adresse oder Telefonnummer.",
    s3Heading: "3. Hosting und Server-Logfiles",
    s3P1:
      "Diese Website wird bei einem externen Dienstleister (Hoster) betrieben. Beim Aufruf der Website werden automatisch Informationen in Server-Logfiles erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, verwendeter Browser und Betriebssystem.",
    s3P2:
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO – unser berechtigtes Interesse am sicheren, stabilen und fehlerfreien Betrieb der Website. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach kurzer Zeit gelöscht.",
    s4Heading: "4. Kontaktformular, E-Mail und Telefon",
    s4P1:
      "Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch eine Anfrage senden, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail-Adresse, Telefonnummer, gewünschte Leistung und Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.",
    s4P2:
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der Vorbereitung oder Erfüllung eines Vertrags dient, ansonsten Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Wir löschen die Daten, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    s5Heading: "5. Bewerbungen",
    s5P1:
      "Übersenden Sie uns eine Bewerbung, verarbeiten wir Ihre Bewerbungsdaten zum Zweck des Bewerbungsverfahrens (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG). Nach Abschluss des Verfahrens werden Bewerbungsunterlagen spätestens nach sechs Monaten gelöscht, sofern Sie keiner längeren Speicherung zugestimmt haben.",
    s6Heading: "6. Cookies und lokale Speicherung",
    s6P1:
      "Diese Website verwendet ausschließlich technisch notwendige Cookies bzw. lokale Speicher, soweit sie für den Betrieb und die Sicherheit der Seite erforderlich sind (§ 25 Abs. 2 TDDDG). Ein Tracking zu Marketing- oder Analysezwecken findet nicht statt. Sollten künftig nicht notwendige Dienste eingesetzt werden, holen wir vorab Ihre Einwilligung ein.",
    s7Heading: "7. Schriftarten und externe Inhalte",
    s7P1:
      "Zur einheitlichen Darstellung von Schriften werden Webfonts eingesetzt. Beim Aufruf der Seite kann hierzu eine Verbindung zu den Servern des Anbieters aufgebaut werden, wobei Ihre IP-Adresse übertragen wird. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden und konsistenten Darstellung).",
    s8Heading: "8. Weitergabe von Daten",
    s8P1:
      "Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben. Dienstleister, die in unserem Auftrag Daten verarbeiten (z. B. Hosting, E-Mail), sind durch Auftragsverarbeitungsverträge nach Art. 28 DSGVO gebunden.",
    s9Heading: "9. Speicherdauer",
    s9P1:
      "Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen (insbesondere handels- und steuerrechtlich, bis zu 10 Jahre) dies vorschreiben.",
    s10Heading: "10. Ihre Rechte",
    s10P1: "Sie haben jederzeit das Recht auf:",
    s10Li1: "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)",
    s10Li2: "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
    s10Li3: "Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)",
    s10Li4: "Datenübertragbarkeit (Art. 20 DSGVO)",
    s10Li5: "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
    s10Li6: "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 DSGVO)",
    s10P2Pre: "Zur Ausübung Ihrer Rechte genügt eine Nachricht an",
    s11Heading: "11. Beschwerderecht bei der Aufsichtsbehörde",
    s11P1:
      "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig ist für uns der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.",
    s12Heading: "12. Datensicherheit",
    s12P1:
      "Diese Website nutzt eine SSL/TLS-Verschlüsselung, damit übermittelte Inhalte nicht von Dritten mitgelesen werden können. Zusätzlich treffen wir angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.",
    s13Heading: "13. Änderungen dieser Erklärung",
    s13P1:
      "Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die rechtlichen Vorgaben ändern. Es gilt jeweils die hier veröffentlichte, aktuelle Fassung.",
  },
  en: {
    title: "Privacy Policy",
    intro:
      "This English version is a courtesy translation; the German version is legally binding. We are pleased that you are interested in DPP Services. Protecting your personal data is important to us. Below we inform you about the processing of your data on this website.",
    s1Heading: "1. Controller",
    s1P1:
      "The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR/DSGVO) is:",
    telefonLabel: "Phone:",
    emailLabel: "Email:",
    s2Heading: "2. Principles of data processing",
    s2P1:
      "We process personal data exclusively on the basis of the applicable legal provisions (GDPR, German Federal Data Protection Act (BDSG), TDDDG). Personal data is any information relating to an identifiable natural person – such as name, address, email address, or telephone number.",
    s3Heading: "3. Hosting and server log files",
    s3P1:
      "This website is operated by an external service provider (hosting provider). When you access the website, information is automatically collected in server log files transmitted by your browser: IP address, date and time of access, page accessed, referrer URL, browser used, and operating system.",
    s3P2:
      "The legal basis is Art. 6 (1)(f) GDPR – our legitimate interest in the secure, stable, and error-free operation of the website. This data is not combined with other data sources and is deleted after a short period.",
    s4Heading: "4. Contact form, email, and phone",
    s4P1:
      "If you send us an inquiry via the contact form, by email, or by phone, we process the data you provide (e.g., name, company, email address, phone number, desired service, and your message) solely to process your inquiry and for any follow-up questions.",
    s4P2:
      "The legal basis is Art. 6 (1)(b) GDPR, insofar as your inquiry serves to prepare or fulfill a contract, otherwise Art. 6 (1)(f) GDPR or your consent pursuant to Art. 6 (1)(a) GDPR. We delete the data as soon as the purpose no longer applies and no statutory retention obligations conflict with deletion.",
    s5Heading: "5. Applications",
    s5P1:
      "If you send us a job application, we process your application data for the purpose of the application procedure (Art. 6 (1)(b) GDPR, § 26 BDSG). After completion of the procedure, application documents are deleted no later than six months later, unless you have agreed to longer storage.",
    s6Heading: "6. Cookies and local storage",
    s6P1:
      "This website uses only technically necessary cookies or local storage, insofar as they are required for the operation and security of the site (§ 25 (2) TDDDG). No tracking for marketing or analytics purposes takes place. Should non-essential services be used in the future, we will obtain your consent in advance.",
    s7Heading: "7. Fonts and external content",
    s7P1:
      "Web fonts are used to ensure a consistent display of text. When the page is accessed, a connection to the provider's servers may be established for this purpose, during which your IP address is transmitted. The legal basis is Art. 6 (1)(f) GDPR (legitimate interest in an appealing and consistent presentation).",
    s8Heading: "8. Disclosure of data",
    s8P1:
      "Your data is only transferred to third parties if this is necessary for the performance of a contract, if we are legally obliged to do so, or if you have given your consent. Service providers who process data on our behalf (e.g., hosting, email) are bound by data processing agreements pursuant to Art. 28 GDPR.",
    s9Heading: "9. Retention period",
    s9P1:
      "We store personal data only as long as necessary for the purposes stated or as required by statutory retention periods (in particular under commercial and tax law, up to 10 years).",
    s10Heading: "10. Your rights",
    s10P1: "You have the right at any time to:",
    s10Li1: "Access to the data stored about you (Art. 15 GDPR)",
    s10Li2: "Rectification of inaccurate data (Art. 16 GDPR)",
    s10Li3: "Erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR)",
    s10Li4: "Data portability (Art. 20 GDPR)",
    s10Li5: "Object to processing (Art. 21 GDPR)",
    s10Li6: "Withdraw any consent given, with effect for the future (Art. 7 GDPR)",
    s10P2Pre: "To exercise your rights, simply send a message to",
    s11Heading: "11. Right to lodge a complaint with a supervisory authority",
    s11P1:
      "You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data. The competent authority for us is the Hessian Commissioner for Data Protection and Freedom of Information, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.",
    s12Heading: "12. Data security",
    s12P1:
      "This website uses SSL/TLS encryption so that transmitted content cannot be read by third parties. We also take appropriate technical and organizational measures to protect your data.",
    s13Heading: "13. Changes to this policy",
    s13P1:
      "We adapt this privacy policy whenever our website or the legal requirements change. The version published here is always the current, applicable version.",
  },
} as const;

export function DatenschutzPage() {
  const t = useCopy(copy);
  return (
    <LegalLayout title={t.title} intro={t.intro}>
      <PageMeta title={title} description={description} path="/datenschutz" />
      <LegalSection heading={t.s1Heading}>
        <p>{t.s1P1}</p>
        <p>
          DPP Services GbR
          <br />
          Am Kronberger Hang 2
          <br />
          65824 Schwalbach am Taunus, Deutschland
          <br />
          {t.telefonLabel}{" "}
          <a href="tel:+4917670800798" className="text-primary hover:underline">
            +49 (0) 176 70800798
          </a>
          <br />
          {t.emailLabel}{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
        </p>
      </LegalSection>

      <LegalSection heading={t.s2Heading}>
        <p>{t.s2P1}</p>
      </LegalSection>

      <LegalSection heading={t.s3Heading}>
        <p>{t.s3P1}</p>
        <p>{t.s3P2}</p>
      </LegalSection>

      <LegalSection heading={t.s4Heading}>
        <p>{t.s4P1}</p>
        <p>{t.s4P2}</p>
      </LegalSection>

      <LegalSection heading={t.s5Heading}>
        <p>{t.s5P1}</p>
      </LegalSection>

      <LegalSection heading={t.s6Heading}>
        <p>{t.s6P1}</p>
      </LegalSection>

      <LegalSection heading={t.s7Heading}>
        <p>{t.s7P1}</p>
      </LegalSection>

      <LegalSection heading={t.s8Heading}>
        <p>{t.s8P1}</p>
      </LegalSection>

      <LegalSection heading={t.s9Heading}>
        <p>{t.s9P1}</p>
      </LegalSection>

      <LegalSection heading={t.s10Heading}>
        <p>{t.s10P1}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t.s10Li1}</li>
          <li>{t.s10Li2}</li>
          <li>{t.s10Li3}</li>
          <li>{t.s10Li4}</li>
          <li>{t.s10Li5}</li>
          <li>{t.s10Li6}</li>
        </ul>
        <p>
          {t.s10P2Pre}{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading={t.s11Heading}>
        <p>{t.s11P1}</p>
      </LegalSection>

      <LegalSection heading={t.s12Heading}>
        <p>{t.s12P1}</p>
      </LegalSection>

      <LegalSection heading={t.s13Heading}>
        <p>{t.s13P1}</p>
      </LegalSection>
    </LegalLayout>
  );
}
