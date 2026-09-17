export const JOB_SLUGS = ["empfangskraft", "night-auditor"] as const;
export type JobSlug = (typeof JOB_SLUGS)[number];

export function isJobSlug(value: string | undefined): value is JobSlug {
  return JOB_SLUGS.includes(value as JobSlug);
}

export type JobCopyItem = {
  slug: JobSlug;
  title: string;
  type: string;
  summary: string;
  description: string[];
  requirementsTitle: string;
  requirements: string[];
  responsibilitiesTitle: string;
  responsibilities: string[];
  subject: string;
};

export const jobsCopy = {
  de: {
    location: "Rhein-Main-Gebiet",
    jobs: [
      {
        slug: "empfangskraft" as const,
        title: "Empfangskraft / Hotelrezeption (m/w/d)",
        type: "Vollzeit · Teilzeit · Flexibel",
        summary:
          "Sie sind das Gesicht am Empfang unserer Hotel- und Unternehmenspartner: herzlich, souverän und sicher im Umgang mit internationalen Gästen.",
        description: [
          "Als Empfangskraft bei DPP Services vertreten Sie unsere Partnerhäuser am Front Desk – mit Hotel-DNA, gepflegtem Auftreten und klarer Dienstleistungsorientierung.",
          "Sie arbeiten in festen Schichten oder flexibel nach Bedarf: dauerhafte Besetzung, Urlaubsvertretung oder kurzfristige Einsätze im gesamten Rhein-Main-Gebiet.",
        ],
        requirementsTitle: "Das bringen Sie mit",
        requirements: [
          "Erfahrung an der Hotelrezeption oder im Empfangsdienst",
          "Sicheres Deutsch und gutes Englisch im Gästekontakt",
          "Gepflegtes Auftreten und Dienstleistungsbereitschaft",
          "Bereitschaft zu Schichtdienst inkl. Wochenenden",
          "Idealerweise Erfahrung mit PMS-Systemen (z. B. Opera, Protel)",
        ],
        responsibilitiesTitle: "Ihre Aufgaben",
        responsibilities: [
          "Check-in, Check-out und Gästebetreuung",
          "Telefonie, Reservierungen und Concierge-Anfragen",
          "Beschwerdemanagement und Upselling nach Hausstandards",
          "Saubere Schichtübergaben und Dokumentation",
        ],
        subject: "Bewerbung Empfangskraft / Hotelrezeption",
      },
      {
        slug: "night-auditor" as const,
        title: "Night Auditor (m/w/d)",
        type: "Nachtschicht · Teilzeit möglich",
        summary:
          "Während das Haus schläft, sichern Sie Tagesabschluss, Kasse und Sicherheit – ruhig, präzise und absolut zuverlässig.",
        description: [
          "Als Night Auditor schließen Sie den Hoteltag ab, prüfen Kasse und Systeme und halten die Nachtrezeption besetzt – diskret, selbstständig und belastbar.",
          "Einsätze finden vor allem nachts statt; Teilzeit und flexible Schichtmodelle sind möglich, je nach Partnerhaus und Verfügbarkeit.",
        ],
        requirementsTitle: "Das bringen Sie mit",
        requirements: [
          "Erfahrung im Night Audit oder Nachtrezeption",
          "Sicherer Umgang mit Tagesabschluss und Kassenprüfung",
          "Diskretion, Selbstständigkeit und Belastbarkeit",
          "Gute Deutschkenntnisse; Englisch von Vorteil",
          "Führerschein von Vorteil für flexible Einsätze",
        ],
        responsibilitiesTitle: "Ihre Aufgaben",
        responsibilities: [
          "Tagesabschluss, Reporting und Kassenprüfung",
          "Nachtrezeption und Betreuung von Spätanreisen",
          "Sicherheit und Übergabe an die Frühschicht",
          "Dokumentation besonderer Vorkommnisse",
        ],
        subject: "Bewerbung Night Auditor",
      },
    ] satisfies JobCopyItem[],
  },
  en: {
    location: "Rhein-Main region",
    jobs: [
      {
        slug: "empfangskraft" as const,
        title: "Front Desk / Hotel Reception (m/f/d)",
        type: "Full-time · Part-time · Flexible",
        summary:
          "You are the face of reception for our hotel and corporate partners: warm, composed, and confident with international guests.",
        description: [
          "As a front desk professional at DPP Services, you represent our partner properties with hotel DNA, a polished presence and a clear service mindset.",
          "You work fixed shifts or flexibly as needed: permanent staffing, holiday cover or short-notice assignments across the Rhein-Main region.",
        ],
        requirementsTitle: "What you bring",
        requirements: [
          "Experience at a hotel front desk or in reception services",
          "Confident German and solid English for guest contact",
          "Well-groomed appearance and a service mindset",
          "Willingness to work shifts including weekends",
          "Ideally experience with PMS systems (e.g. Opera, Protel)",
        ],
        responsibilitiesTitle: "Your responsibilities",
        responsibilities: [
          "Check-in, check-out and guest care",
          "Phone, reservations and concierge requests",
          "Complaint handling and upselling to house standards",
          "Clean shift handovers and documentation",
        ],
        subject: "Application Front Desk / Hotel Reception",
      },
      {
        slug: "night-auditor" as const,
        title: "Night Auditor (m/f/d)",
        type: "Night shifts · Part-time possible",
        summary:
          "While the property sleeps, you handle the daily close, cash reconciliation and security – calm, precise and fully reliable.",
        description: [
          "As a night auditor you close the hotel day, check cash and systems, and keep night reception staffed – discreetly, independently and with resilience.",
          "Assignments are mainly overnight; part-time and flexible shift models are possible depending on the partner property and availability.",
        ],
        requirementsTitle: "What you bring",
        requirements: [
          "Experience in night audit or night reception",
          "Confident handling of daily close and cash checks",
          "Discretion, independence and resilience",
          "Good German; English is an advantage",
          "Driver’s licence advantageous for flexible assignments",
        ],
        responsibilitiesTitle: "Your responsibilities",
        responsibilities: [
          "Daily close, reporting and cash reconciliation",
          "Night reception and late arrivals",
          "Security and handover to the morning shift",
          "Documentation of special incidents",
        ],
        subject: "Application Night Auditor",
      },
    ] satisfies JobCopyItem[],
  },
} as const;
