import { LegalLayout, LegalSection } from "@/components/site/legal-layout";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";

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
    s2P2:
      "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.",
    s3Heading: "3. Hosting und Server-Logfiles",
    s3P1:
      "Diese Website wird bei einem externen Dienstleister (Hoster) betrieben. Beim Aufruf der Website werden automatisch Informationen in Server-Logfiles erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, verwendeter Browser und Betriebssystem.",
    s3P2:
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und fehlerfreien Bereitstellung der Website sowie in der Abwehr und Aufklärung missbräuchlicher Zugriffe. Die Logdaten werden nicht mit anderen Datenquellen zusammengeführt und gelöscht, sobald sie für diese Zwecke nicht mehr erforderlich sind, sofern kein Sicherheitsvorfall eine längere Aufbewahrung erfordert.",
    s3P3:
      "Hosting-Anbieter ist HOSTINGER INTERNATIONAL LIMITED, 61 Lordou Vironos Street, 6023 Larnaca, Zypern („Hostinger“). Hostinger verarbeitet die beim Betrieb der Website anfallenden Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Zypern ist Mitglied der Europäischen Union. Hostinger kann verbundene Unternehmen und Unterauftragnehmer einsetzen; etwaige Drittlandübermittlungen erfolgen nach Maßgabe der Art. 44 ff. DSGVO. Weitere Informationen: https://www.hostinger.com/legal/privacy-policy.",
    s4Heading: "4. Kontaktformular, E-Mail und Telefon",
    s4P1:
      "Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch eine Anfrage senden, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail-Adresse, Telefonnummer, gewünschte Leistung und Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.",
    s4P2:
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der Anbahnung oder Erfüllung eines Vertrags dient. Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der sachgerechten Beantwortung der an uns gerichteten Anfrage.",
    s4P3:
      "Die Bereitstellung Ihrer Daten erfolgt freiwillig. Die im Kontaktformular als Pflichtfelder gekennzeichneten Angaben sind jedoch erforderlich, damit wir Ihre Anfrage zuordnen, prüfen und beantworten können; ohne diese Angaben kann das Formular nicht abgesendet werden. Das Formular wird durch einen von uns betriebenen PHP-Handler auf derselben Hosting-Umgebung verarbeitet und unmittelbar an unser betriebliches E-Mail-Postfach übermittelt. Ein externer Kontaktformular- oder Newsletter-Dienst wird nicht eingesetzt. Im Rahmen des Hostings verarbeitet Hostinger die Daten als Auftragsverarbeiter.",
    s5Heading: "5. WhatsApp-Kontaktbutton",
    s5P1:
      "Auf dieser Website wird ein fest positioniertes WhatsApp-Symbol (Floating-Button) angezeigt. Über diesen Link können Sie uns direkt über den Messaging-Dienst WhatsApp kontaktieren. Der Link führt zu einem Dienst von Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland („WhatsApp“ / „Meta“).",
    s5P2:
      "Beim Anklicken des Buttons wird eine Verbindung zu den Servern von WhatsApp / Meta aufgebaut. Dabei können technisch erforderliche Daten (insbesondere Ihre IP-Adresse, Gerät-/Browserinformationen sowie Informationen zum genutzten WhatsApp-Konto) an WhatsApp übermittelt werden. Der Inhalt Ihrer Nachricht sowie Ihre WhatsApp-Profilinformationen werden von Meta verarbeitet, um die Kommunikation zu ermöglichen.",
    s5P3:
      "Für die Verarbeitung der von Ihnen an uns gesendeten Nachricht ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage, soweit die Kommunikation der Anbahnung oder Erfüllung eines Vertrags dient. Bei sonstigen Anfragen beruht die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Beantwortung der von Ihnen gewählten Kontaktaufnahme. Ohne Anklicken des Buttons findet durch diesen Link keine Verbindung zu WhatsApp statt.",
    s5P4:
      "WhatsApp verarbeitet Daten auch in eigener datenschutzrechtlicher Verantwortlichkeit. Dabei kann es zu einer Datenübermittlung in Drittländer, insbesondere in die USA, kommen. Informationen zu Empfängern, Speicherdauer, Rechtsgrundlagen und Drittlandübermittlungen finden Sie in der Datenschutzrichtlinie von WhatsApp: https://www.whatsapp.com/legal/privacy-policy. Die Nutzung von WhatsApp ist freiwillig; alternativ können Sie uns per Telefon, E-Mail oder über das Kontaktformular erreichen.",
    s6Heading: "6. Bewerbungen",
    s6P1:
      "Übersenden Sie uns eine Bewerbung, verarbeiten wir die von Ihnen bereitgestellten Kontaktdaten, Bewerbungsunterlagen und sonstigen Angaben zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses auf Grundlage von § 26 Abs. 1 BDSG in Verbindung mit Art. 6 Abs. 1 lit. b DSGVO. Soweit besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO enthalten sind, erfolgt deren Verarbeitung nur, soweit dies nach Art. 9 Abs. 2 DSGVO zulässig ist.",
    s6P2:
      "Nach Abschluss des Bewerbungsverfahrens bewahren wir die Daten grundsätzlich für bis zu sechs Monate auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO auf, um mögliche Rechtsansprüche abzuwehren. Eine darüber hinausgehende Aufnahme in einen Bewerberpool erfolgt nur mit Ihrer ausdrücklichen Einwilligung, die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.",
    s7Heading: "7. Cookies und lokale Speicherung",
    s7P1:
      "Zur Speicherung der von Ihnen gewählten Sprache (Deutsch oder Englisch) verwenden wir den Schlüssel „dpp-lang“ sowohl in einem Cookie als auch im Local Storage Ihres Browsers. Ihre Entscheidung über optionale Dienste wird unter dem Schlüssel „dpp-cookie-consent“ im Local Storage gespeichert. Dieser Eintrag enthält ausschließlich Ihre Auswahl (angenommen oder abgelehnt), den Zeitpunkt und eine Versionsnummer. Er ist erforderlich, um Ihre Entscheidung zu beachten und das Banner nicht bei jedem Seitenaufruf erneut anzuzeigen.",
    s7P2:
      "Rechtsgrundlage für diese notwendigen Zugriffe auf Ihr Endgerät ist § 25 Abs. 2 Nr. 2 TDDDG; die anschließende Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das Sprach-Cookie hat eine Laufzeit von einem Jahr; der zugehörige Local-Storage-Eintrag bleibt bis zur Löschung oder einer neuen Sprachauswahl gespeichert. Die Einwilligungsentscheidung wird für 180 Tage gespeichert. Danach fragen wir erneut nach Ihrer Auswahl. Tracking zu Marketing- oder Analysezwecken findet nicht statt.",
    s8Heading: "8. Google Fonts und externe Schriften",
    s8P1:
      "Zur einheitlichen Darstellung von Schriften bieten wir Google Fonts an (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Mutterkonzern: Google LLC, USA). Die externen Schriftdateien werden erst geladen, nachdem Sie im Einwilligungsbanner „Alle akzeptieren“ gewählt haben. Erst dann wird eine Verbindung zu Google-Servern hergestellt; dabei werden insbesondere Ihre IP-Adresse sowie technische Browserdaten an Google übermittelt. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und, soweit einschlägig, § 25 Abs. 1 TDDDG.",
    s8P2:
      "Google kann Daten in eigener Verantwortlichkeit verarbeiten und in Drittländer, insbesondere in die USA, übermitteln. Weitere Informationen finden Sie unter: https://policies.google.com/privacy. Wenn Sie ablehnen, werden keine Google-Schriften geladen und keine Verbindung zu Google hergestellt. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die Schaltfläche „Datenschutzeinstellungen“ widerrufen.",
    s9Heading: "9. Hinweis zu Bildmaterial (KI-generierte Bilder)",
    s9P1:
      "Die auf dieser Website verwendeten illustrative Bilder und Visualisierungen (insbesondere Hero- und Atmosphärenbilder) wurden mithilfe von künstlicher Intelligenz (KI) erzeugt bzw. bearbeitet. Es handelt sich um synthetisches Bildmaterial und nicht um Fotografien realer Personen oder realer Einsatzorte unserer Kunden, sofern nicht ausdrücklich anders gekennzeichnet.",
    s9P2:
      "Die Nutzung von KI-generiertem Bildmaterial dient ausschließlich der Gestaltung und Veranschaulichung unseres Angebots. Mit dem bloßen Betrachten dieser Bilder werden keine personenbezogenen Daten von Ihnen an KI-Anbieter übermittelt; die Bilder werden von uns lokal auf der Website ausgeliefert.",
    s10Heading: "10. Weitergabe von Daten",
    s10P1:
      "Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben. Hostinger verarbeitet Hosting- und Formulardaten in unserem Auftrag und ist durch einen Vertrag nach Art. 28 DSGVO gebunden. Ein zusätzlicher externer Formulardienst wird nicht eingesetzt.",
    s10P2:
      "Eine Übermittlung in Staaten außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums erfolgt nur, wenn die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind. Soweit einzelne Anbieter Daten in eigener Verantwortlichkeit übermitteln, gelten ergänzend deren Datenschutzhinweise.",
    s11Heading: "11. Speicherdauer",
    s11P1:
      "Über das Kontaktformular übermittelte Angaben werden durch den PHP-Handler lediglich zur Übermittlung verarbeitet und nicht in einer gesonderten Formulardatenbank gespeichert. Die Nachricht wird an unser betriebliches E-Mail-Postfach weitergeleitet und dort nur so lange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen erforderlich ist. Technisch bedingte Server- und Mail-Logs können vorübergehend bei Hostinger anfallen. Entsteht aus der Anfrage eine Geschäftsbeziehung oder wird eine Nachricht Bestandteil aufbewahrungspflichtiger Geschäftsunterlagen, gelten je nach Art der Unterlage die gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen, regelmäßig sechs, acht oder zehn Jahre. Im Übrigen werden Nachrichten gelöscht, sobald der Verarbeitungszweck entfällt und keine gesetzlichen Pflichten oder berechtigten Interessen an einer weiteren Aufbewahrung entgegenstehen.",
    s12Heading: "12. Ihre Rechte",
    s12P1: "Sie haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf:",
    s12Li1: "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)",
    s12Li2: "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
    s12Li3: "Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)",
    s12Li4: "Datenübertragbarkeit (Art. 20 DSGVO)",
    s12Li5: "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
    s12Li6: "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 DSGVO)",
    s12P2:
      "Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, haben Sie gemäß Art. 21 DSGVO das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.",
    s12P2Pre: "Zur Ausübung Ihrer Rechte genügt eine Nachricht an",
    s13Heading: "13. Beschwerderecht bei der Aufsichtsbehörde",
    s13P1:
      "Sie haben gemäß Art. 77 DSGVO das Recht, sich unbeschadet anderweitiger Rechtsbehelfe bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Die für uns zuständige Behörde ist: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Wilhelmstraße 7, 65185 Wiesbaden; Postfach 3163, 65021 Wiesbaden; Telefon: +49 611 1408-0; E-Mail: poststelle@datenschutz.hessen.de; Website: https://datenschutz.hessen.de.",
    s14Heading: "14. Datensicherheit",
    s14P1:
      "Diese Website nutzt eine SSL/TLS-Verschlüsselung, damit übermittelte Inhalte nicht von Dritten mitgelesen werden können. Zusätzlich treffen wir angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.",
    s15Heading: "15. Änderungen dieser Erklärung",
    s15P1:
      "Wir passen diese Datenschutzerklärung an, wenn sich unsere Website, die eingesetzten Dienste oder die rechtlichen Vorgaben ändern. Es gilt jeweils die hier veröffentlichte Fassung. Stand: September 2026.",
    country: "Deutschland",
    metaTitle: "Datenschutzerklärung | DPP Services",
    metaDescription:
      "Datenschutzerklärung der DPP Services GbR: Informationen zur Verarbeitung personenbezogener Daten, WhatsApp, Kontaktformular, Hosting und Ihre Rechte nach DSGVO.",
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
    s2P2:
      "No automated decision-making, including profiling within the meaning of Art. 22 GDPR, takes place.",
    s3Heading: "3. Hosting and server log files",
    s3P1:
      "This website is operated by an external service provider (hosting provider). When you access the website, information is automatically collected in server log files transmitted by your browser: IP address, date and time of access, page accessed, referrer URL, browser used, and operating system.",
    s3P2:
      "The legal basis is Art. 6 (1)(f) GDPR. Our legitimate interest lies in providing the website securely, stably, and without errors, and in preventing and investigating abusive access. Log data is not combined with other data sources and is deleted as soon as it is no longer required for these purposes, unless a security incident requires longer retention.",
    s3P3:
      "Our hosting provider is HOSTINGER INTERNATIONAL LIMITED, 61 Lordou Vironos Street, 6023 Larnaca, Cyprus (“Hostinger”). Hostinger processes data generated while operating the website on our behalf under a data processing agreement pursuant to Art. 28 GDPR. Cyprus is a member of the European Union. Hostinger may engage affiliates and subprocessors; any third-country transfers are governed by Art. 44 et seq. GDPR. Further information: https://www.hostinger.com/legal/privacy-policy.",
    s4Heading: "4. Contact form, email, and phone",
    s4P1:
      "If you send us an inquiry via the contact form, by email, or by phone, we process the data you provide (e.g., name, company, email address, phone number, desired service, and your message) solely to process your inquiry and for any follow-up questions.",
    s4P2:
      "The legal basis is Art. 6 (1)(b) GDPR where your inquiry serves to initiate or perform a contract. Other inquiries are processed pursuant to Art. 6 (1)(f) GDPR; our legitimate interest lies in properly responding to inquiries addressed to us.",
    s4P3:
      "Providing your data is voluntary. However, information marked as mandatory in the contact form is required so that we can identify, assess, and respond to your inquiry; without it, the form cannot be submitted. The form is processed by a PHP handler operated by us in the same hosting environment and sent directly to our business email inbox. No external contact-form or newsletter service is used. Hostinger processes the data as a processor in connection with the hosting.",
    s5Heading: "5. WhatsApp contact button",
    s5P1:
      "This website displays a fixed WhatsApp icon (floating button). Via this link you can contact us directly through the WhatsApp messaging service. The link leads to a service operated by Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland (“WhatsApp” / “Meta”).",
    s5P2:
      "When you click the button, a connection to WhatsApp / Meta servers is established. Technically necessary data (in particular your IP address, device/browser information, and information relating to the WhatsApp account used) may be transmitted to WhatsApp. The content of your message and your WhatsApp profile information are processed by Meta to enable the communication.",
    s5P3:
      "Art. 6 (1)(b) GDPR is the legal basis for processing the message you send us where the communication serves to initiate or perform a contract. Other inquiries are processed pursuant to Art. 6 (1)(f) GDPR; our legitimate interest lies in responding through the contact method you selected. This link does not establish a connection to WhatsApp unless you click the button.",
    s5P4:
      "WhatsApp also processes data under its own responsibility for data protection purposes. Data may be transferred to third countries, particularly the USA. Information about recipients, retention periods, legal bases, and third-country transfers is available in WhatsApp’s privacy policy: https://www.whatsapp.com/legal/privacy-policy. Using WhatsApp is voluntary; alternatively, you can contact us by phone, email, or through the contact form.",
    s6Heading: "6. Applications",
    s6P1:
      "If you submit an application, we process the contact details, application documents, and other information you provide in order to decide whether to establish an employment relationship, pursuant to § 26 (1) BDSG in conjunction with Art. 6 (1)(b) GDPR. Where the documents contain special categories of personal data within the meaning of Art. 9 GDPR, they are processed only to the extent permitted by Art. 9 (2) GDPR.",
    s6P2:
      "After the application process ends, we generally retain the data for up to six months pursuant to Art. 6 (1)(f) GDPR in order to defend against possible legal claims. Inclusion in an applicant pool for a longer period takes place only with your express consent, which you may withdraw at any time with future effect.",
    s7Heading: "7. Cookies and local storage",
    s7P1:
      "To store the language you select (German or English), we use the key “dpp-lang” both in a cookie and in your browser’s local storage. Your decision concerning optional services is stored in local storage under the key “dpp-cookie-consent”. This entry contains only your choice (accepted or rejected), the time, and a version number. It is necessary to respect your decision and avoid displaying the banner again on every page view.",
    s7P2:
      "The legal basis for these necessary accesses to your device is § 25 (2) no. 2 TDDDG; subsequent processing is based on Art. 6 (1)(f) GDPR. The language cookie has a lifetime of one year; the corresponding local-storage entry remains until deletion or a new language choice. The consent decision is retained for 180 days, after which we ask for your choice again. No tracking for marketing or analytics purposes takes place.",
    s8Heading: "8. Google Fonts and external typefaces",
    s8P1:
      "We offer Google Fonts for a consistent display of text (provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; parent company: Google LLC, USA). The external font files are loaded only after you choose “Accept all” in the consent banner. Only then is a connection established to Google servers, transmitting in particular your IP address and technical browser data. The legal basis is your consent pursuant to Art. 6 (1)(a) GDPR and, where applicable, § 25 (1) TDDDG.",
    s8P2:
      "Google may process data under its own responsibility and transfer it to third countries, particularly the USA. Further information is available at: https://policies.google.com/privacy. If you reject, Google fonts are not loaded and no connection to Google is established. You may withdraw your consent at any time with future effect through the “Privacy settings” button.",
    s9Heading: "9. Notice regarding imagery (AI-generated images)",
    s9P1:
      "The illustrative images and visualizations used on this website (in particular hero and atmospheric images) were created or edited using artificial intelligence (AI). This is synthetic imagery and not photographs of real persons or of our customers’ actual premises, unless expressly stated otherwise.",
    s9P2:
      "AI-generated imagery is used solely for design and to illustrate our offering. Merely viewing these images does not transmit any of your personal data to AI providers; the images are served locally from this website.",
    s10Heading: "10. Disclosure of data",
    s10P1:
      "Your data is only transferred to third parties if this is necessary for the performance of a contract, if we are legally obliged to do so, or if you have given your consent. Hostinger processes hosting and form data on our behalf and is bound by an agreement pursuant to Art. 28 GDPR. No additional external form service is used.",
    s10P2:
      "Data is transferred to countries outside the European Union or European Economic Area only where the requirements of Art. 44 et seq. GDPR are met. Where individual providers transfer data under their own responsibility, their privacy information also applies.",
    s11Heading: "11. Retention period",
    s11P1:
      "Information submitted through the contact form is processed by the PHP handler solely for transmission and is not stored in a separate form database. The message is forwarded to our business email inbox and retained there only for as long as necessary to handle your inquiry and any follow-up questions. Technical server and mail logs may be generated temporarily by Hostinger. If the inquiry results in a business relationship or a message becomes part of business records subject to retention, statutory commercial and tax retention periods apply depending on the type of document, generally six, eight, or ten years. Otherwise, messages are deleted once the purpose of processing no longer applies and no statutory obligation or legitimate interest requires further retention.",
    s12Heading: "12. Your rights",
    s12P1: "Subject to the applicable statutory requirements, you have in particular the right to:",
    s12Li1: "Access to the data stored about you (Art. 15 GDPR)",
    s12Li2: "Rectification of inaccurate data (Art. 16 GDPR)",
    s12Li3: "Erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR)",
    s12Li4: "Data portability (Art. 20 GDPR)",
    s12Li5: "Object to processing (Art. 21 GDPR)",
    s12Li6: "Withdraw any consent given, with effect for the future (Art. 7 GDPR)",
    s12P2:
      "Where processing is based on Art. 6 (1)(f) GDPR, Art. 21 GDPR gives you the right to object at any time on grounds relating to your particular situation.",
    s12P2Pre: "To exercise your rights, simply send a message to",
    s13Heading: "13. Right to lodge a complaint with a supervisory authority",
    s13P1:
      "Pursuant to Art. 77 GDPR and without prejudice to any other remedy, you have the right to lodge a complaint with a data protection supervisory authority, in particular in the Member State of your habitual residence, place of work, or the place of the alleged infringement. The authority competent for us is: The Hessian Commissioner for Data Protection and Freedom of Information, Wilhelmstraße 7, 65185 Wiesbaden; postal address: Postfach 3163, 65021 Wiesbaden; phone: +49 611 1408-0; email: poststelle@datenschutz.hessen.de; website: https://datenschutz.hessen.de.",
    s14Heading: "14. Data security",
    s14P1:
      "This website uses SSL/TLS encryption so that transmitted content cannot be read by third parties. We also take appropriate technical and organizational measures to protect your data.",
    s15Heading: "15. Changes to this policy",
    s15P1:
      "We update this privacy policy when our website, the services used, or legal requirements change. The version published here applies. Last updated: September 2026.",
    country: "Germany",
    metaTitle: "Privacy Policy | DPP Services",
    metaDescription:
      "Privacy policy of DPP Services GbR: information on the processing of personal data, WhatsApp, contact form, hosting, and your rights under the GDPR.",
  },
} as const;

export function DatenschutzPage() {
  const t = useCopy(copy);
  return (
    <LegalLayout title={t.title} intro={t.intro}>
      <PageMeta title={t.metaTitle} description={t.metaDescription} path="/datenschutz" />
      <LegalSection heading={t.s1Heading}>
        <p>{t.s1P1}</p>
        <p>
          DPP Services GbR
          <br />
          Am Kronberger Hang 2
          <br />
          65824 Schwalbach am Taunus, {t.country}
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
        <p>{t.s2P2}</p>
      </LegalSection>

      <LegalSection heading={t.s3Heading}>
        <p>{t.s3P1}</p>
        <p>{t.s3P2}</p>
        <p>{t.s3P3}</p>
      </LegalSection>

      <LegalSection heading={t.s4Heading}>
        <p>{t.s4P1}</p>
        <p>{t.s4P2}</p>
        <p>{t.s4P3}</p>
      </LegalSection>

      <LegalSection heading={t.s5Heading}>
        <p>{t.s5P1}</p>
        <p>{t.s5P2}</p>
        <p>{t.s5P3}</p>
        <p>{t.s5P4}</p>
      </LegalSection>

      <LegalSection heading={t.s6Heading}>
        <p>{t.s6P1}</p>
        <p>{t.s6P2}</p>
      </LegalSection>

      <LegalSection heading={t.s7Heading}>
        <p>{t.s7P1}</p>
        <p>{t.s7P2}</p>
      </LegalSection>

      <LegalSection heading={t.s8Heading}>
        <p>{t.s8P1}</p>
        <p>{t.s8P2}</p>
      </LegalSection>

      <LegalSection heading={t.s9Heading}>
        <p>{t.s9P1}</p>
        <p>{t.s9P2}</p>
      </LegalSection>

      <LegalSection heading={t.s10Heading}>
        <p>{t.s10P1}</p>
        <p>{t.s10P2}</p>
      </LegalSection>

      <LegalSection heading={t.s11Heading}>
        <p>{t.s11P1}</p>
      </LegalSection>

      <LegalSection heading={t.s12Heading}>
        <p>{t.s12P1}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t.s12Li1}</li>
          <li>{t.s12Li2}</li>
          <li>{t.s12Li3}</li>
          <li>{t.s12Li4}</li>
          <li>{t.s12Li5}</li>
          <li>{t.s12Li6}</li>
        </ul>
        <p>{t.s12P2}</p>
        <p>
          {t.s12P2Pre}{" "}
          <a href="mailto:info@dpp-services.de" className="text-primary hover:underline">
            info@dpp-services.de
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading={t.s13Heading}>
        <p>{t.s13P1}</p>
      </LegalSection>

      <LegalSection heading={t.s14Heading}>
        <p>{t.s14P1}</p>
      </LegalSection>

      <LegalSection heading={t.s15Heading}>
        <p>{t.s15P1}</p>
      </LegalSection>
    </LegalLayout>
  );
}
