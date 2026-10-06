export const LOCATION_SLUGS = [
  "frankfurt",
  "flughafen-frankfurt",
  "offenbach",
  "taunus",
  "wiesbaden",
  "mainz",
  "darmstadt",
  "neu-isenburg",
  "hanau",
] as const;

export type LocationSlug = (typeof LOCATION_SLUGS)[number];

export function isLocationSlug(value: string | undefined): value is LocationSlug {
  return LOCATION_SLUGS.includes(value as LocationSlug);
}

export type LocationCopy = {
  slug: LocationSlug;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  whyTitle: string;
  why: string[];
  cardText: string;
  places?: string[];
  faqs: { q: string; a: string }[];
  areaServed: string[];
};

const deHub = {
  metaTitle: "Einsatzgebiet Frankfurt & Rhein-Main | DPP Services",
  metaDescription:
    "DPP Services besetzt Empfang und Hotelpersonal in Frankfurt, am Flughafen, im Taunus und in Offenbach, Wiesbaden, Mainz, Darmstadt, Neu-Isenburg und Hanau.",
  eyebrow: "Einsatzgebiet",
  h1: "Empfangsdienst in Frankfurt und dem Rhein-Main-Gebiet",
  lead: "Sitz der DPP Services GbR ist Schwalbach am Taunus. Von dort besetzen wir Rezeption, Night Audit, Tagung, Seminare und Büro-Empfang in Frankfurt und den umliegenden Städten.",
  body: "Frankfurt ist der Schwerpunkt: Innenstadt, Messe, Banken und Flughafen. Dazu kommen der Taunus vor der Haustür, Offenbach, die Landeshauptstädte Wiesbaden und Mainz, Darmstadt, Neu-Isenburg und Hanau. Kurzfristige Schichten sind oft innerhalb von 24 Stunden möglich.",
};

const enHub = {
  metaTitle: "Service area Frankfurt & Rhein-Main | DPP Services",
  metaDescription:
    "DPP Services staffs reception and hotel teams in Frankfurt, at the airport, across the Taunus, and in Offenbach, Wiesbaden, Mainz, Darmstadt, Neu-Isenburg and Hanau.",
  eyebrow: "Service area",
  h1: "Reception staff in Frankfurt and the Rhein-Main region",
  lead: "DPP Services GbR is based in Schwalbach am Taunus. From there we staff reception, night audit, conferences, seminars and office front desks in Frankfurt and the surrounding cities.",
  body: "Frankfurt is the focus: city centre, trade fair, banks and the airport. We also cover the nearby Taunus, Offenbach, the state capitals Wiesbaden and Mainz, Darmstadt, Neu-Isenburg and Hanau. Short-notice shifts are often possible within 24 hours.",
};

export const locationsCopy = {
  de: {
    hub: deHub,
    breadcrumbHome: "Startseite",
    breadcrumbArea: "Einsatzgebiet",
    servicesTitle: "Leistungen vor Ort",
    servicesText: "Dieselben fünf Einsätze, abgestimmt auf Haus und Schichtplan.",
    faqTitle: "Fragen zu diesem Einsatzort",
    napTitle: "Anfahrt und Kontakt",
    napText: "DPP Services GbR, Am Kronberger Hang 2, 65824 Schwalbach am Taunus.",
    route: "Route planen",
    cta: "Personal für diesen Ort anfragen",
    allAreas: "Alle Einsatzorte",
    locations: [
      {
        slug: "frankfurt",
        name: "Frankfurt am Main",
        metaTitle: "Empfangsdienst Frankfurt | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Frankfurt am Main: Rezeption, Night Audit, Tagung, Seminar Support und Büro-Empfang, oft innerhalb von 24 Stunden.",
        h1: "Empfangsdienst und Hotelpersonal in Frankfurt",
        lead: "Frankfurt ist unser Kerngebiet. Wir besetzen Hotelrezeption, Nachtdienst, Tagungs- und Seminarpersonal sowie Büro-Empfänge in der Stadt – dauerhaft, als Vertretung oder kurzfristig.",
        body: [
          "Messewochen, Kongresse und der internationale Gästestrom am Hauptbahnhof und in der Innenstadt lassen den Personalbedarf stark schwanken. Ein festes Stammteam trägt den Alltag, zusätzliche Kräfte fangen die Spitzen ab.",
          "Unsere Mitarbeitenden arbeiten nach Ihren SOPs, in Ihrem PMS und auf Deutsch und Englisch. Der Sitz in Schwalbach am Taunus liegt wenige Fahrminuten von der Stadtgrenze.",
        ],
        whyTitle: "Warum Frankfurt ein eigenes Einsatzprofil braucht",
        why: [
          "Die Messe Frankfurt, das Bankenviertel und die Hotels zwischen Hauptbahnhof, Innenstadt und City West haben unterschiedliche Schichtzeiten. Frühdienste, Late-Check-ins und Nachtübergaben liegen oft am selben Tag.",
          "Internationale Gäste erwarten eine besetzte Rezeption, klare Auskünfte und ruhige Beschwerdewege. Genau dafür stellen wir Empfangs- und Servicekräfte, die Hotelabläufe kennen.",
        ],
        cardText: "Rezeption, Night Audit und Tagungspersonal für Innenstadt, Messe und Banken.",
        faqs: [
          {
            q: "Besetzen Sie Schichten während der Messe Frankfurt?",
            a: "Ja. Für Messe- und Kongresswochen planen wir zusätzliche Rezeptions- und Servicekräfte ein. Kurzfristige Ausfälle können wir oft innerhalb von 24 Stunden auffangen.",
          },
          {
            q: "Welche Frankfurter Lagen decken Sie ab?",
            a: "Innenstadt, Bahnhofsviertel, Westend, Messe und die an die Stadt grenzenden Hotel- und Bürostandorte. Den Flughafen führen wir als eigenen Einsatzort.",
          },
        ],
        areaServed: ["Frankfurt am Main"],
      },
      {
        slug: "flughafen-frankfurt",
        name: "Flughafen Frankfurt",
        metaTitle: "Empfang Flughafen Frankfurt | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfang und Hotelservice am Flughafen Frankfurt und in Gateway Gardens: Rezeption, Night Audit und Tagungspersonal für frühe Anreisen und späte Abflüge.",
        h1: "Empfang und Hotelservice am Flughafen Frankfurt",
        lead: "Rund um den Flughafen Frankfurt laufen Anreisen und Abreisen um die Uhr. Wir besetzen Rezeption, Night Audit und Tagungsempfang in Flughafenhotels und Büros in Gateway Gardens.",
        body: [
          "Crews, Umsteiger und frühe Geschäftsreisen erzeugen Schichten, die vor dem klassischen Frühdienst beginnen und weit nach Mitternacht enden. Eine unbesetzte Nachtrezeption ist hier sofort spürbar.",
          "Gateway Gardens und die Hotelachse am Flughafen liegen gut erreichbar von unserem Sitz in Schwalbach. Wir arbeiten in Ihrem System und nach Ihrer Übergabe an die Frühschicht.",
        ],
        whyTitle: "Was den Flughafen von der Innenstadt unterscheidet",
        why: [
          "Der Takt folgt dem Flugplan, nicht dem Bürotag. Late Arrivals, verpasste Anschlüsse und frühe Check-outs gehören zum normalen Betrieb und brauchen Personal, das nachts ruhig bleibt.",
          "Tagungen und Crew-Briefings in Flughafennähe brauchen dazu einen klaren Front-of-House: Anmeldung, Wegeleitung und eine Rezeption, die Zeiten hält.",
        ],
        cardText: "Nachtrezeption und Frühschichten für Hotels und Büros am Flughafen und in Gateway Gardens.",
        faqs: [
          {
            q: "Übernehmen Sie Nachtschichten am Flughafen?",
            a: "Ja. Night Audit und besetzte Nachtrezeption gehören zu unserem Kerngeschäft und passen zum Flugbetrieb rund um die Uhr.",
          },
          {
            q: "Zählt Gateway Gardens dazu?",
            a: "Ja. Hotels und Unternehmensstandorte in Gateway Gardens und unmittelbar am Flughafen Frankfurt besetzen wir über diese Seite.",
          },
        ],
        areaServed: ["Frankfurt am Main"],
      },
      {
        slug: "offenbach",
        name: "Offenbach am Main",
        metaTitle: "Empfangsdienst Offenbach | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Offenbach am Main: Rezeption, Büro-Empfang, Night Audit und Tagungsservice, kurzfristig aus dem Rhein-Main-Gebiet.",
        h1: "Empfangsdienst und Hotelpersonal in Offenbach",
        lead: "Offenbach liegt direkt an Frankfurt und hat eigene Hotels, Büros und Veranstaltungsflächen. Wir besetzen dort Empfang und Service mit demselben Personalstamm wie in der Innenstadt.",
        body: [
          "Zwischen Kaiserlei, Hafen und Innenstadt treffen Bürostandorte und Häuser, die Frankfurter Überlauf und lokale Gäste zugleich aufnehmen. Der Empfang muss beide Welten bedienen.",
          "Die Wege von Schwalbach über Frankfurt nach Offenbach sind kurz. Dauerbesetzung, Krankheitsvertretung und Peak-Schichten planen wir mit einer festen Ansprechperson.",
        ],
        whyTitle: "Offenbach zwischen Bürostandort und Hotellerie",
        why: [
          "Am Kaiserlei und in den Gewerbegebieten braucht der Empfang Besuchermanagement, Telefonie und ein Auftreten, das zum Unternehmen passt. In den Hotels daneben zählen Check-in, Concierge und Schichtübergabe.",
          "Wir trennen diese Profile nicht künstlich: Hotelkräfte bleiben an der Rezeption, Bürokräfte am Firmenempfang, beide aus demselben Einsatzgebiet.",
        ],
        cardText: "Hotelrezeption und Büro-Empfang für Kaiserlei, Hafen und die Offenbacher Innenstadt.",
        faqs: [
          {
            q: "Stellen Sie in Offenbach auch Büro-Empfang?",
            a: "Ja. Besuchermanagement, Telefonzentrale und Post gehören zum Büro-Empfang, die Hotelrezeption bleibt ein eigener Einsatz.",
          },
          {
            q: "Wie kurzfristig ist eine Schicht in Offenbach möglich?",
            a: "Ausfälle können wir häufig innerhalb von 24 Stunden besetzen. Dauerhafte Schichten planen wir mit Einarbeitung nach Ihren Standards.",
          },
        ],
        areaServed: ["Offenbach am Main"],
      },
      {
        slug: "taunus",
        name: "Taunus",
        metaTitle: "Empfangsdienst Taunus | Schwalbach, Eschborn, Bad Homburg | DPP Services",
        metaDescription:
          "Empfangsdienst im Taunus: Schwalbach, Eschborn, Kronberg, Bad Soden, Königstein, Oberursel, Bad Homburg, Hofheim und Kelkheim – Rezeption und Büro-Empfang.",
        h1: "Empfangsdienst im Taunus vor Frankfurt",
        lead: "Schwalbach am Taunus ist unser Sitz. Von hier besetzen wir Empfang und Hotelpersonal in Eschborn, Kronberg, Bad Soden, Königstein, Oberursel, Bad Homburg, Hofheim und Kelkheim.",
        body: [
          "Der Vordertaunus mischt Büroparks, Kur- und Tagungshäuser und kleinere Hotels. Eschborn ist ein dichter Bürostandort, Bad Homburg und Königstein bringen Tagung und Übernachtung zusammen.",
          "Kurze Wege sind hier der Vorteil: Vertretungen erreichen das Haus schnell, und ein Stammteam kann mehrere nahe Standorte eines Auftraggebers kennen.",
        ],
        whyTitle: "Viele Orte, ein Einsatzradius",
        why: [
          "Eschborn verlangt vor allem einen repräsentativen Büro-Empfang. Bad Homburg, Königstein und Bad Soden brauchen dazu Rezeption und Tagungspersonal in Häusern mit Kongress- und Kurgästen.",
          "Oberursel, Hofheim, Kelkheim, Kronberg und Schwalbach selbst liegen im selben Radius. Wir führen sie auf dieser Seite, damit kein Ort eine dünne Einzeladresse bekommt.",
        ],
        cardText: "Büro-Empfang und Hotelrezeption von Schwalbach und Eschborn bis Bad Homburg und Königstein.",
        places: [
          "Schwalbach am Taunus",
          "Eschborn",
          "Kronberg im Taunus",
          "Bad Soden am Taunus",
          "Königstein im Taunus",
          "Oberursel (Taunus)",
          "Bad Homburg vor der Höhe",
          "Hofheim am Taunus",
          "Kelkheim (Taunus)",
        ],
        faqs: [
          {
            q: "Liegt Ihr Büro im Einsatzgebiet Taunus?",
            a: "Ja. Die DPP Services GbR sitzt Am Kronberger Hang 2 in 65824 Schwalbach am Taunus, mitten in diesem Gebiet.",
          },
          {
            q: "Besetzen Sie Eschborn und Bad Homburg getrennt von Frankfurt?",
            a: "Ja. Bürostandorte in Eschborn und Häuser in Bad Homburg planen wir als Taunus-Einsätze, Frankfurt und der Flughafen haben eigene Seiten.",
          },
        ],
        areaServed: [
          "Schwalbach am Taunus",
          "Eschborn",
          "Kronberg im Taunus",
          "Bad Soden am Taunus",
          "Königstein im Taunus",
          "Oberursel (Taunus)",
          "Bad Homburg vor der Höhe",
          "Hofheim am Taunus",
          "Kelkheim (Taunus)",
        ],
      },
      {
        slug: "wiesbaden",
        name: "Wiesbaden",
        metaTitle: "Empfangsdienst Wiesbaden | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Wiesbaden: Rezeption, Tagungsservice und Büro-Empfang für Kurstadt, Behörden und Kongresshäuser.",
        h1: "Empfangsdienst und Hotelpersonal in Wiesbaden",
        lead: "Wiesbaden verbindet Landeshauptstadt, Kurhäuser und Kongress. Wir stellen Rezeption, Tagungspersonal und Büro-Empfang für Häuser, die Gäste aus Behörden, Kurbetrieb und Tagung zugleich empfangen.",
        body: [
          "Rund um Kurhaus und Innenstadt liegen Häuser mit einem anderen Takt als die Frankfurter Messe: Tagungen unter der Woche, Kur- und Wochenendgäste, dazu Büros der Landesverwaltung und der Wirtschaft.",
          "Von Schwalbach ist Wiesbaden über die A66 erreichbar. Schichten planen wir so, dass Übergaben und Einarbeitung zu Ihren Standards passen.",
        ],
        whyTitle: "Kurstadt und Landeshauptstadt an einem Empfang",
        why: [
          "Tagungsgäste erwarten Wegeleitung und pünktliche Pausenbetreuung. Übernachtungsgäste erwarten Check-in, Auskunft und eine besetzte Rezeption am Abend.",
          "Behördennahe und unternehmensnahe Büros in Wiesbaden brauchen daneben einen diskreten Empfang mit Besucheranmeldung. Beides besetzen wir, jeweils mit dem passenden Profil.",
        ],
        cardText: "Rezeption und Tagungspersonal für Kurstadt, Kongress und Büros in der Landeshauptstadt.",
        faqs: [
          {
            q: "Kommen Ihre Kräfte aus Wiesbaden oder aus Frankfurt?",
            a: "Der Einsatz wird von Schwalbach am Taunus gesteuert. Die Kräfte arbeiten vor Ort in Wiesbaden, nach Ihren Abläufen und in Ihrer Dienstkleidung.",
          },
          {
            q: "Gibt es Night Audit in Wiesbaden?",
            a: "Ja, sofern Ihr Haus eine Nachtschicht braucht. Tagesabschluss, Kasse und besetzte Nachtrezeption gehören zum Night Audit.",
          },
        ],
        areaServed: ["Wiesbaden"],
      },
      {
        slug: "mainz",
        name: "Mainz",
        metaTitle: "Empfangsdienst Mainz | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Mainz: Rezeption, Night Audit und Servicekräfte für Rheinhotels, Universität und Kongresse.",
        h1: "Empfangsdienst und Hotelpersonal in Mainz",
        lead: "Mainz bringt Rheinhotels, Universität und Landespolitik auf engem Raum zusammen. Wir besetzen Rezeption, Nachtdienst und Service für Häuser, deren Auslastung mit Kongress, Saison und Stadtterminen schwankt.",
        body: [
          "Hotels an Rhein und Innenstadt nehmen Geschäftsreisende, Tagungsgäste und Stadtbesucher auf. In Spitzenzeiten, etwa rund um große Stadtfeste, fehlt an Rezeption und im Service oft das Stammteam.",
          "Wir verstärken genau diese Stellen: Check-in, Bankett, Frühstück und, wo nötig, die Nacht. Deutsch und Englisch sind im Gästekontakt Standard.",
        ],
        whyTitle: "Rhein, Universität und Kongress",
        why: [
          "Die Universität und die Landesinstitutionen erzeugen unter der Woche einen stetigen Bedarf an Übernachtung und an professionellem Empfang in Büros.",
          "Kongresse und städtische Großtermine kippen denselben Betrieb in den Peak. Dafür halten wir Service- und Empfangskräfte bereit, die Hotelabläufe bereits kennen.",
        ],
        cardText: "Rezeption und Servicekräfte für Rheinhotels, Universität und Kongresse in Mainz.",
        faqs: [
          {
            q: "Besetzen Sie auch Büros in Mainz, nicht nur Hotels?",
            a: "Ja. Der Büro-Empfang mit Besuchern, Telefon und Post ist eine eigene Leistung, die Hotelrezeption eine andere.",
          },
          {
            q: "Wie weit im Voraus sollen wir anfragen?",
            a: "Für dauerhafte Schichten planen wir die Einarbeitung gemeinsam. Kurzfristige Ausfälle melden Sie, sobald sie feststehen – oft reicht ein Tag.",
          },
        ],
        areaServed: ["Mainz"],
      },
      {
        slug: "darmstadt",
        name: "Darmstadt",
        metaTitle: "Empfangsdienst Darmstadt | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Darmstadt: Rezeption, Seminar Support und Büro-Empfang für Wissenschaftsstadt, Kongress und Unternehmen.",
        h1: "Empfangsdienst und Hotelpersonal in Darmstadt",
        lead: "Darmstadt ist Wissenschafts- und Kongressstadt. Wir besetzen Hotelrezeption, Seminar-Front-of-House und Büro-Empfang für Häuser, die Tagungen, Institute und Unternehmen unter einem Dach empfangen.",
        body: [
          "Kongresse rund um das darmstadtium und die Technische Universität füllen die Hotels in Wellen. Zwischen den Peaks bleibt der Empfang trotzdem die Visitenkarte des Hauses.",
          "Seminare brauchen Anmeldung, Badges und Raumführung. Die Rezeption braucht Check-in und Übergabe. Wir stellen beides, abgestimmt mit Ihrem Haus-Team.",
        ],
        whyTitle: "Kongresswellen und ein normaler Empfang dazwischen",
        why: [
          "Wissenschaftliche Tagungen bringen internationale Teilnehmende, die sich auf dem Gelände zurechtfinden müssen. Seminar Support übernimmt Registrierung und Wegeleitung, die Rezeption bleibt für die Übernachtungsgäste da.",
          "Unternehmen in Darmstadt brauchen parallel einen Büro-Empfang, der Besucher und Lieferungen steuert, ohne wie ein Hotelcounter aufzutreten.",
        ],
        cardText: "Rezeption und Seminar Support für Kongresse, Universität und Unternehmen in Darmstadt.",
        faqs: [
          {
            q: "Unterstützen Sie Kongresse in Darmstadt nur an der Rezeption?",
            a: "Nein. Neben der Hotelrezeption stellen wir Seminar Support für Anmeldung, Badges und Raumführung sowie Servicekräfte für Tagung und Bankett.",
          },
          {
            q: "Ist Darmstadt noch in Ihrem Radius?",
            a: "Ja. Darmstadt gehört fest zum Rhein-Main-Einsatz, gesteuert vom Sitz in Schwalbach am Taunus.",
          },
        ],
        areaServed: ["Darmstadt"],
      },
      {
        slug: "neu-isenburg",
        name: "Neu-Isenburg",
        metaTitle: "Empfangsdienst Neu-Isenburg | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst in Neu-Isenburg, Dreieich und Langen: Hotelrezeption und Büro-Empfang im Südkorridor zwischen Frankfurt und dem Flughafen.",
        h1: "Empfangsdienst in Neu-Isenburg und im Südkorridor",
        lead: "Neu-Isenburg, Dreieich und Langen liegen zwischen Frankfurter Stadtgebiet und Flughafen. Wir besetzen dort Hotelrezeption und Büro-Empfang für Häuser an der Autobahn und in den Gewerbegebieten.",
        body: [
          "Viele Gäste übernachten hier, weil Messe, Flughafen und Büroparks nah sind, ohne in der Innenstadt zu stehen. Der Empfang erklärt Wege, Check-in-Zeiten und den Transfer, oft spät am Abend.",
          "Bürostandorte im selben Korridor brauchen einen anderen Empfang: Ausweise, Anmeldung, Lieferungen. Wir besetzen beide Profile aus einem Einsatz.",
        ],
        whyTitle: "Zwischen Innenstadt und Flughafen",
        why: [
          "Der Südkorridor hängt am Frankfurter Kalender. Messetage und Flugtage füllen die Häuser, normale Wochen sind ruhiger. Vertretung und Peak-Kräfte müssen denselben Standard halten.",
          "Dreieich und Langen führen wir auf dieser Seite mit, weil sie denselben Verkehr und dieselben Gäste teilen wie Neu-Isenburg.",
        ],
        cardText: "Hotel- und Büroempfang für Neu-Isenburg, Dreieich und Langen zwischen Stadt und Flughafen.",
        places: ["Neu-Isenburg", "Dreieich", "Langen"],
        faqs: [
          {
            q: "Gehören Dreieich und Langen dazu?",
            a: "Ja. Beide Orte liegen im selben Südkorridor und werden über den Einsatz Neu-Isenburg mit besetzt.",
          },
          {
            q: "Ist das derselbe Einsatz wie der Flughafen?",
            a: "Nein. Gateway Gardens und die Flughafenhotels haben eine eigene Seite. Neu-Isenburg deckt die Gemeinden südlich von Frankfurt.",
          },
        ],
        areaServed: ["Neu-Isenburg", "Dreieich", "Langen"],
      },
      {
        slug: "hanau",
        name: "Hanau",
        metaTitle: "Empfangsdienst Hanau | Hotelpersonal | DPP Services",
        metaDescription:
          "Empfangsdienst und Hotelpersonal in Hanau: Rezeption, Büro-Empfang und Servicekräfte für Geschäftsreisen und Veranstaltungen östlich von Frankfurt.",
        h1: "Empfangsdienst und Hotelpersonal in Hanau",
        lead: "Hanau ist der östliche Rand unseres Rhein-Main-Einsatzes. Wir besetzen Hotelrezeption, Service und Büro-Empfang für Häuser, die Geschäftsreisende und Veranstaltungsgäste aus dem Rhein-Main-Gebiet aufnehmen.",
        body: [
          "Industrie, Handel und die Innenstadt erzeugen einen stetigen Bedarf an Übernachtung unter der Woche. Veranstaltungstermine verstärken Empfang und Service zusätzlich.",
          "Die Strecke von Schwalbach nach Hanau führt über Frankfurt und ist für geplante Schichten fest eingeplant. Kurzfristige Ausfälle sprechen Sie direkt mit uns ab.",
        ],
        whyTitle: "Östlich von Frankfurt, derselbe Standard",
        why: [
          "Gäste vergleichen den Empfang in Hanau mit dem, den sie aus Frankfurter Häusern kennen. Check-in, Auskunft und eine ruhige Nachtübergabe müssen denselben Ansprüchen genügen.",
          "Unternehmen vor Ort brauchen dazu einen Büro-Empfang, der Besucher führt, ohne den Hotelton zu kopieren. Wir stellen das Profil passend zum Haus.",
        ],
        cardText: "Rezeption und Büro-Empfang für Geschäftsreisen und Veranstaltungen in Hanau.",
        faqs: [
          {
            q: "Fahren Ihre Teams regelmäßig nach Hanau?",
            a: "Ja. Hanau gehört zum festen Einsatzgebiet. Schichten werden vom Sitz in Schwalbach am Taunus geplant und vor Ort gearbeitet.",
          },
          {
            q: "Welche Leistungen sind in Hanau verfügbar?",
            a: "Hotelrezeption, Night Audit, Tagungs- und Seminarpersonal sowie Büro-Empfang. Den passenden Umfang klären wir im Erstgespräch.",
          },
        ],
        areaServed: ["Hanau"],
      },
    ] satisfies LocationCopy[],
  },
  en: {
    hub: enHub,
    breadcrumbHome: "Home",
    breadcrumbArea: "Service area",
    servicesTitle: "Services on site",
    servicesText: "The same five assignments, matched to the property and the rota.",
    faqTitle: "Questions about this location",
    napTitle: "Directions and contact",
    napText: "DPP Services GbR, Am Kronberger Hang 2, 65824 Schwalbach am Taunus, Germany.",
    route: "Plan a route",
    cta: "Request staff for this location",
    allAreas: "All locations",
    locations: [
      {
        slug: "frankfurt",
        name: "Frankfurt am Main",
        metaTitle: "Reception staff Frankfurt | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Frankfurt am Main: front desk, night audit, conferences, seminar support and office reception, often within 24 hours.",
        h1: "Reception and hotel staff in Frankfurt",
        lead: "Frankfurt is our core area. We staff hotel reception, night duty, conference and seminar teams, and office front desks in the city – permanently, as cover, or at short notice.",
        body: [
          "Trade-fair weeks, congresses and international arrivals around the main station and the city centre make staffing swing sharply. A core team carries the everyday shifts, extra staff cover the peaks.",
          "Our people work to your SOPs, in your PMS, in German and English. The office in Schwalbach am Taunus is a short drive from the city boundary.",
        ],
        whyTitle: "Why Frankfurt needs its own staffing profile",
        why: [
          "Messe Frankfurt, the banking district and hotels between the main station, the centre and City West run on different shift patterns. Early duties, late check-ins and night handovers often fall on the same day.",
          "International guests expect a staffed desk, clear answers and calm complaint handling. That is what our reception and service staff are there for.",
        ],
        cardText: "Reception, night audit and conference staff for the centre, the trade fair and the banks.",
        faqs: [
          {
            q: "Do you cover shifts during Messe Frankfurt?",
            a: "Yes. For trade-fair and congress weeks we schedule extra reception and service staff. Short-notice absences can often be filled within 24 hours.",
          },
          {
            q: "Which parts of Frankfurt do you cover?",
            a: "The centre, the station district, Westend, the trade fair and hotel or office sites on the city edge. The airport has its own page.",
          },
        ],
        areaServed: ["Frankfurt am Main"],
      },
      {
        slug: "flughafen-frankfurt",
        name: "Frankfurt Airport",
        metaTitle: "Reception Frankfurt Airport | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel service at Frankfurt Airport and Gateway Gardens: front desk, night audit and conference staffing for early arrivals and late departures.",
        h1: "Reception and hotel service at Frankfurt Airport",
        lead: "Around Frankfurt Airport, arrivals and departures run around the clock. We staff reception, night audit and conference front desks in airport hotels and Gateway Gardens offices.",
        body: [
          "Crews, transfer passengers and early business trips create shifts that start before a classic morning duty and end well after midnight. An empty night desk is noticed immediately.",
          "Gateway Gardens and the airport hotel strip are an easy drive from our office in Schwalbach. We work in your system and to your handover for the morning shift.",
        ],
        whyTitle: "How the airport differs from the city centre",
        why: [
          "The rhythm follows the flight schedule, not the office day. Late arrivals, missed connections and early check-outs are normal operations and need staff who stay calm at night.",
          "Meetings and crew briefings near the airport also need a clear front of house: registration, wayfinding and a desk that keeps to the timetable.",
        ],
        cardText: "Night reception and early shifts for hotels and offices at the airport and in Gateway Gardens.",
        faqs: [
          {
            q: "Do you cover night shifts at the airport?",
            a: "Yes. Night audit and a staffed night desk are core work and fit an operation that follows the flight schedule.",
          },
          {
            q: "Does Gateway Gardens count?",
            a: "Yes. Hotels and company sites in Gateway Gardens and directly at Frankfurt Airport are covered on this page.",
          },
        ],
        areaServed: ["Frankfurt am Main"],
      },
      {
        slug: "offenbach",
        name: "Offenbach am Main",
        metaTitle: "Reception staff Offenbach | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Offenbach am Main: front desk, office reception, night audit and conference service, at short notice from the Rhein-Main region.",
        h1: "Reception and hotel staff in Offenbach",
        lead: "Offenbach sits directly beside Frankfurt and has its own hotels, offices and event space. We staff reception and service there with the same pool we use in the city centre.",
        body: [
          "Between Kaiserlei, the harbour and the centre, offices and hotels take both Frankfurt overflow and local guests. The desk has to serve both.",
          "The drive from Schwalbach through Frankfurt to Offenbach is short. Permanent cover, sick-leave replacement and peak shifts are planned with one point of contact.",
        ],
        whyTitle: "Offenbach between offices and hotels",
        why: [
          "At Kaiserlei and in the business areas, reception means visitors, calls and a manner that fits the company. In the hotels next door it means check-in, concierge and shift handover.",
          "We do not blur those profiles: hotel staff stay on the desk, office staff stay on the company reception, both from the same service area.",
        ],
        cardText: "Hotel reception and office front desk for Kaiserlei, the harbour and central Offenbach.",
        faqs: [
          {
            q: "Do you also staff office reception in Offenbach?",
            a: "Yes. Visitor management, switchboard and mail are the office reception service. Hotel reception stays a separate assignment.",
          },
          {
            q: "How quickly can a shift in Offenbach be filled?",
            a: "Absences can often be covered within 24 hours. Ongoing shifts are planned with onboarding to your standards.",
          },
        ],
        areaServed: ["Offenbach am Main"],
      },
      {
        slug: "taunus",
        name: "Taunus",
        metaTitle: "Reception staff Taunus | Schwalbach, Eschborn, Bad Homburg | DPP Services",
        metaDescription:
          "Reception staff in the Taunus: Schwalbach, Eschborn, Kronberg, Bad Soden, Königstein, Oberursel, Bad Homburg, Hofheim and Kelkheim – front desk and office reception.",
        h1: "Reception staff in the Taunus just outside Frankfurt",
        lead: "Schwalbach am Taunus is our base. From here we staff reception and hotel teams in Eschborn, Kronberg, Bad Soden, Königstein, Oberursel, Bad Homburg, Hofheim and Kelkheim.",
        body: [
          "The front Taunus mixes office parks, spa and conference houses and smaller hotels. Eschborn is a dense office location. Bad Homburg and Königstein combine meetings with overnight stays.",
          "Short distances are the advantage: cover can reach the property quickly, and one core team can learn several nearby sites of the same client.",
        ],
        whyTitle: "Many towns, one radius",
        why: [
          "Eschborn mainly needs a representative office reception. Bad Homburg, Königstein and Bad Soden also need front desk and conference staff in houses with congress and spa guests.",
          "Oberursel, Hofheim, Kelkheim, Kronberg and Schwalbach itself sit in the same radius. They share this page so none of them gets a thin standalone URL.",
        ],
        cardText: "Office reception and hotel front desk from Schwalbach and Eschborn to Bad Homburg and Königstein.",
        places: [
          "Schwalbach am Taunus",
          "Eschborn",
          "Kronberg im Taunus",
          "Bad Soden am Taunus",
          "Königstein im Taunus",
          "Oberursel (Taunus)",
          "Bad Homburg vor der Höhe",
          "Hofheim am Taunus",
          "Kelkheim (Taunus)",
        ],
        faqs: [
          {
            q: "Is your office inside the Taunus service area?",
            a: "Yes. DPP Services GbR is at Am Kronberger Hang 2, 65824 Schwalbach am Taunus, in the middle of this area.",
          },
          {
            q: "Do you staff Eschborn and Bad Homburg separately from Frankfurt?",
            a: "Yes. Offices in Eschborn and properties in Bad Homburg are planned as Taunus assignments. Frankfurt and the airport have their own pages.",
          },
        ],
        areaServed: [
          "Schwalbach am Taunus",
          "Eschborn",
          "Kronberg im Taunus",
          "Bad Soden am Taunus",
          "Königstein im Taunus",
          "Oberursel (Taunus)",
          "Bad Homburg vor der Höhe",
          "Hofheim am Taunus",
          "Kelkheim (Taunus)",
        ],
      },
      {
        slug: "wiesbaden",
        name: "Wiesbaden",
        metaTitle: "Reception staff Wiesbaden | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Wiesbaden: front desk, conference service and office reception for the spa city, public authorities and congress houses.",
        h1: "Reception and hotel staff in Wiesbaden",
        lead: "Wiesbaden combines a state capital, spa houses and congress business. We provide reception, conference staff and office front desks for properties that welcome public-sector, spa and meeting guests at once.",
        body: [
          "Around the Kurhaus and the centre, houses run on a different clock than the Frankfurt trade fair: weekday meetings, spa and weekend guests, plus offices of the state and of business.",
          "From Schwalbach, Wiesbaden is reached via the A66. Shifts are planned so handovers and onboarding match your standards.",
        ],
        whyTitle: "Spa city and state capital at one desk",
        why: [
          "Meeting guests expect wayfinding and breaks that start on time. Overnight guests expect check-in, information and a staffed desk in the evening.",
          "Offices close to public authorities and companies in Wiesbaden also need a discreet reception with visitor sign-in. We staff both, each with the right profile.",
        ],
        cardText: "Reception and conference staff for the spa city, congress business and offices in the state capital.",
        faqs: [
          {
            q: "Do your staff come from Wiesbaden or from Frankfurt?",
            a: "Assignments are coordinated from Schwalbach am Taunus. People work on site in Wiesbaden, to your procedures and in your uniform.",
          },
          {
            q: "Is night audit available in Wiesbaden?",
            a: "Yes, where the property needs a night shift. Daily close, cash and a staffed night desk are part of night audit.",
          },
        ],
        areaServed: ["Wiesbaden"],
      },
      {
        slug: "mainz",
        name: "Mainz",
        metaTitle: "Reception staff Mainz | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Mainz: front desk, night audit and service teams for Rhine hotels, the university and congresses.",
        h1: "Reception and hotel staff in Mainz",
        lead: "Mainz packs Rhine hotels, the university and state politics into a small area. We staff reception, night duty and service for properties whose occupancy moves with congresses, the season and city dates.",
        body: [
          "Hotels on the Rhine and in the centre take business travellers, meeting guests and city visitors. At peak times, including major city festivals, the core team at reception and in service is often short.",
          "We reinforce exactly those posts: check-in, banquet, breakfast and, where needed, the night. German and English are standard in guest contact.",
        ],
        whyTitle: "The Rhine, the university and congress business",
        why: [
          "The university and state institutions create a steady weekday need for overnight stays and for a professional office reception.",
          "Congresses and major city dates push the same operation into a peak. For that we keep service and reception staff who already know hotel routines.",
        ],
        cardText: "Reception and service staff for Rhine hotels, the university and congresses in Mainz.",
        faqs: [
          {
            q: "Do you staff offices in Mainz, not only hotels?",
            a: "Yes. Office reception with visitors, telephone and mail is its own service. Hotel reception is another.",
          },
          {
            q: "How far ahead should we ask?",
            a: "For ongoing shifts we plan onboarding together. Report short-notice absences as soon as they are known – one day is often enough.",
          },
        ],
        areaServed: ["Mainz"],
      },
      {
        slug: "darmstadt",
        name: "Darmstadt",
        metaTitle: "Reception staff Darmstadt | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Darmstadt: front desk, seminar support and office reception for the science city, congresses and companies.",
        h1: "Reception and hotel staff in Darmstadt",
        lead: "Darmstadt is a science and congress city. We staff hotel reception, seminar front of house and office desks for properties that welcome meetings, institutes and companies under one roof.",
        body: [
          "Congresses around the darmstadtium and the technical university fill the hotels in waves. Between the peaks, reception is still the property’s calling card.",
          "Seminars need registration, badges and room guidance. Reception needs check-in and handover. We provide both, aligned with your in-house team.",
        ],
        whyTitle: "Congress waves, and a normal desk between them",
        why: [
          "Scientific meetings bring international participants who need to find their way on site. Seminar support handles registration and wayfinding. Reception stays with the overnight guests.",
          "Companies in Darmstadt also need an office reception that steers visitors and deliveries without sounding like a hotel desk.",
        ],
        cardText: "Reception and seminar support for congresses, the university and companies in Darmstadt.",
        faqs: [
          {
            q: "Do you support Darmstadt congresses only at reception?",
            a: "No. Besides hotel reception we provide seminar support for registration, badges and room guidance, plus service staff for conferences and banquets.",
          },
          {
            q: "Is Darmstadt still inside your radius?",
            a: "Yes. Darmstadt is a fixed part of the Rhein-Main coverage, coordinated from Schwalbach am Taunus.",
          },
        ],
        areaServed: ["Darmstadt"],
      },
      {
        slug: "neu-isenburg",
        name: "Neu-Isenburg",
        metaTitle: "Reception staff Neu-Isenburg | Hotel staff | DPP Services",
        metaDescription:
          "Reception staff in Neu-Isenburg, Dreieich and Langen: hotel front desk and office reception on the southern corridor between Frankfurt and the airport.",
        h1: "Reception staff in Neu-Isenburg and the southern corridor",
        lead: "Neu-Isenburg, Dreieich and Langen sit between the Frankfurt city area and the airport. We staff hotel reception and office front desks there for properties along the motorway and in the business parks.",
        body: [
          "Many guests stay here because the trade fair, the airport and office parks are close, without standing in the city centre. The desk explains routes, check-in times and transfers, often late in the evening.",
          "Offices in the same corridor need a different desk: badges, sign-in, deliveries. We staff both profiles from one assignment.",
        ],
        whyTitle: "Between the city centre and the airport",
        why: [
          "The southern corridor follows the Frankfurt calendar. Trade-fair days and flight days fill the houses, ordinary weeks are quieter. Cover and peak staff have to hold the same standard.",
          "Dreieich and Langen are on this page because they share the same traffic and the same guests as Neu-Isenburg.",
        ],
        cardText: "Hotel and office reception for Neu-Isenburg, Dreieich and Langen between the city and the airport.",
        places: ["Neu-Isenburg", "Dreieich", "Langen"],
        faqs: [
          {
            q: "Are Dreieich and Langen included?",
            a: "Yes. Both towns sit on the same southern corridor and are staffed with the Neu-Isenburg assignment.",
          },
          {
            q: "Is this the same assignment as the airport?",
            a: "No. Gateway Gardens and the airport hotels have their own page. Neu-Isenburg covers the municipalities south of Frankfurt.",
          },
        ],
        areaServed: ["Neu-Isenburg", "Dreieich", "Langen"],
      },
      {
        slug: "hanau",
        name: "Hanau",
        metaTitle: "Reception staff Hanau | Hotel staff | DPP Services",
        metaDescription:
          "Reception and hotel staff in Hanau: front desk, office reception and service teams for business travel and events east of Frankfurt.",
        h1: "Reception and hotel staff in Hanau",
        lead: "Hanau is the eastern edge of our Rhein-Main coverage. We staff hotel reception, service and office front desks for properties that take business travellers and event guests from the region.",
        body: [
          "Industry, retail and the town centre create a steady weekday need for overnight stays. Event dates add extra pressure on reception and service.",
          "The drive from Schwalbach to Hanau crosses Frankfurt and is built into planned shifts. Short-notice absences are agreed with us directly.",
        ],
        whyTitle: "East of Frankfurt, the same standard",
        why: [
          "Guests compare a desk in Hanau with what they know from Frankfurt properties. Check-in, information and a calm night handover have to meet the same expectations.",
          "Local companies also need an office reception that guides visitors without copying a hotel tone. We match the profile to the site.",
        ],
        cardText: "Reception and office front desk for business travel and events in Hanau.",
        faqs: [
          {
            q: "Do your teams travel to Hanau regularly?",
            a: "Yes. Hanau is part of the fixed service area. Shifts are planned from Schwalbach am Taunus and worked on site.",
          },
          {
            q: "Which services are available in Hanau?",
            a: "Hotel reception, night audit, conference and seminar staff, and office reception. We agree the scope in the first conversation.",
          },
        ],
        areaServed: ["Hanau"],
      },
    ] satisfies LocationCopy[],
  },
} as const;
