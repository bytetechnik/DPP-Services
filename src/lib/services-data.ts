import { Building2, ConciergeBell, Moon, Presentation, Users, type LucideIcon } from "lucide-react";
import empfang from "@/assets/service-empfang.jpg";
import nightAudit from "@/assets/service-night-audit.jpg";
import tagung from "@/assets/service-tagung.jpg";
import buero from "@/assets/service-buero.jpg";
import seminar from "@/assets/service-seminar.jpg";

export const SERVICE_SLUGS = ["empfang", "night-audit", "tagung", "seminar-support", "buero-empfang"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceMeta = {
  slug: ServiceSlug;
  icon: LucideIcon;
  image: string;
};

export const serviceMeta: ServiceMeta[] = [
  { slug: "empfang", icon: ConciergeBell, image: empfang },
  { slug: "night-audit", icon: Moon, image: nightAudit },
  { slug: "tagung", icon: Users, image: tagung },
  { slug: "seminar-support", icon: Presentation, image: seminar },
  { slug: "buero-empfang", icon: Building2, image: buero },
];

export function isServiceSlug(value: string | undefined): value is ServiceSlug {
  return SERVICE_SLUGS.includes(value as ServiceSlug);
}

export function getServiceMeta(slug: ServiceSlug): ServiceMeta {
  return serviceMeta.find((s) => s.slug === slug)!;
}

export type ServiceCopyItem = {
  slug: ServiceSlug;
  title: string;
  seoTitle: string;
  seoDescription: string;
  text: string;
  points: string[];
  detailLead: string;
  detailBody: string[];
  deliverablesTitle: string;
  deliverables: string[];
  idealTitle: string;
  idealText: string;
};

export const servicesCopy = {
  de: {
    services: [
      {
        slug: "empfang" as const,
        title: "Empfangsdienst / Hotelrezeption",
        seoTitle: "Hotelrezeption Frankfurt | Empfangsdienst | DPP Services",
        seoDescription:
          "Hotelrezeption und Empfangsdienst in Frankfurt und dem Rhein-Main-Gebiet: Check-in, Gästebetreuung und Vertretung – oft innerhalb von 24 Stunden.",
        text: "Herzlicher Empfang, Check-in und Check-out, Gästekommunikation und Concierge-Aufgaben – professionell besetzt, auch kurzfristig.",
        points: ["Check-in & Check-out", "Gästebetreuung & Beschwerdemanagement", "Reservierungen & Telefonie"],
        detailLead:
          "Der Empfang ist die Visitenkarte Ihres Hauses. Wir stellen geschulte Rezeptionskräfte, die Ihre Standards leben – dauerhaft, als Vertretung oder innerhalb von 24 Stunden.",
        detailBody: [
          "Von der Anreise bis zur Abreise begleiten unsere Mitarbeitenden Ihre Gäste mit Souveränität und Herzlichkeit. Check-in, Check-out, Upselling und Concierge-Anfragen gehören zum Tagesgeschäft.",
          "Wir arbeiten nach Ihren SOPs, in Ihrem PMS und mit Ihrer Dienstkleidung. So bleibt der Empfang auch bei Personalengpässen verlässlich besetzt – ohne Qualitätsverlust.",
        ],
        deliverablesTitle: "Was wir am Empfang übernehmen",
        deliverables: [
          "Check-in, Check-out und Zimmereinteilung",
          "Gästebetreuung, Beschwerdemanagement und Concierge",
          "Reservierungen, Telefonie und E-Mail-Korrespondenz",
          "Übergaben und Dokumentation für die nächste Schicht",
        ],
        idealTitle: "Ideal für",
        idealText:
          "Hotels, Aparthotels und Boardinghäuser in Frankfurt und im Rhein-Main-Gebiet, die planbare Kontinuität oder kurzfristige Vertretung an der Rezeption brauchen.",
      },
      {
        slug: "night-audit" as const,
        title: "Night Audit",
        seoTitle: "Night Audit Frankfurt | Nachtrezeption | DPP Services",
        seoDescription:
          "Night Audit und Nachtrezeption in Frankfurt: Tagesabschluss, Reporting und besetzte Rezeption in der Nacht für Hotels im Rhein-Main-Gebiet.",
        text: "Während Ihr Haus schläft, sichern wir Tagesabschluss, Reporting und Sicherheit – präzise, ruhig und zuverlässig.",
        points: ["Tagesabschluss & Kassenprüfung", "Nachtrezeption & Sicherheit", "Reporting für das Management"],
        detailLead:
          "Der Nachtdienst entscheidet über reibungslose Übergaben und belastbare Zahlen. Unsere Night Auditoren schließen den Tag ab, behalten die Sicherheit im Blick und bereiten den Morgen vor.",
        detailBody: [
          "Tagesabschluss, Kassenprüfung und Systemreports erledigen wir nach Ihren Vorgaben – ruhig, diskret und mit klarer Dokumentation für die Frühschicht.",
          "Gleichzeitig bleibt die Nachtrezeption besetzt: Anreisen, Spätgäste und Notfälle werden professionell betreut, ohne dass Ihr Management nachts eingreifen muss.",
        ],
        deliverablesTitle: "Was der Night Audit abdeckt",
        deliverables: [
          "Tagesabschluss und Kassenprüfung",
          "Nachtrezeption und Sicherheitspatrouillen nach Absprache",
          "Reporting und Übergabe an die Frühschicht",
          "Umgang mit Spätanreisen und Sonderfällen",
        ],
        idealTitle: "Ideal für",
        idealText:
          "Hotels in Frankfurt und im Rhein-Main-Gebiet mit Nachtschichtbedarf, die Verlässlichkeit beim Audit und eine besetzte Rezeption in den ruhigen Stunden brauchen.",
      },
      {
        slug: "tagung" as const,
        title: "Hotelservice / Tagung / Servicekräfte",
        seoTitle: "Tagungsservice Frankfurt | Hotelservice | DPP Services",
        seoDescription:
          "Tagungsservice und Servicekräfte in Frankfurt: Bankett, Frühstück und Event-Support für Hotels und Veranstaltungsorte im Rhein-Main-Gebiet.",
        text: "Verstärkung für Bankett, Tagung und Restaurant: eingespielte Servicekräfte, die Ihr Team im Alltag und bei Peaks tragen.",
        points: ["Tagungs- & Bankettservice", "Frühstücks- & Restaurantservice", "Event-Support nach Bedarf"],
        detailLead:
          "Tagungen, Bankette und Peak-Zeiten brauchen eingespielte Kräfte. Wir stellen Servicepersonal, das Ihr Haus-Team entlastet – vom Frühstück bis zum Event.",
        detailBody: [
          "Unsere Servicekräfte kennen Hotelabläufe: Auf- und Abbau, Buffets, Meeting-Breaks und Gästekommunikation laufen strukturiert und unauffällig.",
          "Ob Messewochen in Frankfurt oder Hochsaison im Haus: Sie bekommen kurzfristig Verstärkung, die sich in Ihr Team einfügt und Ihre Qualitätsstandards hält.",
        ],
        deliverablesTitle: "Einsatzbereiche",
        deliverables: [
          "Tagungs- und Bankettservice",
          "Frühstücks- und Restaurantservice",
          "Event-Support und Peak-Verstärkung",
          "Koordination mit Küche, Hauswirtschaft und Empfang",
        ],
        idealTitle: "Ideal für",
        idealText:
          "Hotels und Veranstaltungsorte in Frankfurt und im Rhein-Main-Gebiet, die bei Messen, Kongressen oder Hochsaison zusätzliche Servicekapazität brauchen.",
      },
      {
        slug: "seminar-support" as const,
        title: "Seminar Support",
        seoTitle: "Seminar Support Frankfurt | Event-Empfang | DPP Services",
        seoDescription:
          "Seminar Support in Frankfurt: Registrierung, Raumführung und Speaker-Betreuung für Seminare und Workshops im Rhein-Main-Gebiet.",
        text: "Professionelle Front-of-House-Betreuung für Seminare und Workshops: Anmeldung, Badges, Raumführung und Speaker-Support – diskret und punktgenau.",
        points: ["Teilnehmer-Registrierung & Badges", "Raumführung & Ushering", "Speaker- & Break-Support"],
        detailLead:
          "Seminare und Workshops brauchen einen reibungslosen Ablauf vom ersten Check-in bis zur letzten Session. Wir besetzen Ihr Event-Front-of-House mit Personal, das Orientierung gibt und Zeitpläne hält.",
        detailBody: [
          "Unsere Kräfte übernehmen die Teilnehmeranmeldung, Badge-Ausgabe und Wegeleitung – damit Delegierte ankommen, sich zurechtfinden und pünktlich in den richtigen Räumen sitzen.",
          "Darüber hinaus unterstützen wir Speaker und Organisatoren: Green-Room-Betreuung, Materialverteilung, Pausenlogistik und Abstimmung mit Technik – unauffällig, verbindlich und im Rhein-Main-Gebiet kurzfristig verfügbar.",
        ],
        deliverablesTitle: "Was Seminar Support abdeckt",
        deliverables: [
          "Teilnehmer-Check-in, Namensschilder und Gästelisten",
          "Raumführung, Ushering und Sitzplatzhilfe",
          "Speaker-Support, Runner-Aufgaben und Materialverteilung",
          "Pausenbetreuung und Koordination mit Technik und Haus-Team",
        ],
        idealTitle: "Ideal für",
        idealText:
          "Hotels, Tagungszentren und Unternehmen in Frankfurt und im Rhein-Main-Gebiet, die für Seminare, Trainings und Corporate Workshops zuverlässiges Front-of-House-Personal brauchen.",
      },
      {
        slug: "buero-empfang" as const,
        title: "Büro-Empfang",
        seoTitle: "Büro-Empfang Frankfurt | Empfangsdienst | DPP Services",
        seoDescription:
          "Büro-Empfang in Frankfurt und dem Rhein-Main-Gebiet: Besuchermanagement, Telefonzentrale und repräsentativer Empfang für Unternehmen.",
        text: "Ein Empfang, der Ihr Unternehmen repräsentiert: Besuchermanagement, Post, Telefonzentrale und Facility-Koordination.",
        points: ["Besucher- & Ausweismanagement", "Telefonzentrale & Post", "Koordination von Dienstleistern"],
        detailLead:
          "Auch außerhalb der Hotellerie zählt der erste Eindruck. Wir besetzen Ihren Büro-Empfang mit Personal, das Besucher, Telefonie und Abläufe souverän steuert.",
        detailBody: [
          "Besucheranmeldung, Ausweise, Post und Telefonzentrale werden diskret und verbindlich geführt – als Visitenkarte Ihres Unternehmens.",
          "Bei Bedarf koordinieren unsere Kräfte Dienstleister und interne Ansprechpartner, damit Ihr Empfang als klarer Knotenpunkt funktioniert.",
        ],
        deliverablesTitle: "Leistungen am Büro-Empfang",
        deliverables: [
          "Besucher- und Ausweismanagement",
          "Telefonzentrale und Postannahme",
          "Koordination von Dienstleistern und Lieferungen",
          "Repräsentatives Auftreten im Firmenkontext",
        ],
        idealTitle: "Ideal für",
        idealText:
          "Unternehmen und Bürostandorte in Frankfurt und im Rhein-Main-Gebiet, die einen professionellen, dauerhaft oder zeitweise besetzten Empfang brauchen.",
      },
    ] satisfies ServiceCopyItem[],
  },
  en: {
    services: [
      {
        slug: "empfang" as const,
        title: "Front Desk / Hotel Reception",
        seoTitle: "Hotel reception Frankfurt | Front desk staff | DPP Services",
        seoDescription:
          "Hotel reception and front desk staff in Frankfurt and the Rhein-Main region: check-in, guest care and cover – often within 24 hours.",
        text: "Warm welcomes, check-in and check-out, guest communication and concierge duties – staffed professionally, even at short notice.",
        points: ["Check-in & check-out", "Guest relations & complaint handling", "Reservations & telephone service"],
        detailLead:
          "Reception is your property’s calling card. We provide trained front desk staff who live your standards – permanently, as cover, or within 24 hours.",
        detailBody: [
          "From arrival to departure, our staff guide your guests with confidence and warmth. Check-in, check-out, upselling and concierge requests are part of everyday operations.",
          "We work to your SOPs, in your PMS and in your uniform. That keeps reception reliably staffed even during shortages – without a drop in quality.",
        ],
        deliverablesTitle: "What we cover at reception",
        deliverables: [
          "Check-in, check-out and room allocation",
          "Guest care, complaint handling and concierge",
          "Reservations, switchboard and email correspondence",
          "Handovers and documentation for the next shift",
        ],
        idealTitle: "Ideal for",
        idealText:
          "Hotels, aparthotels and boarding houses in Frankfurt and the Rhein-Main region that need predictable continuity or short-notice cover at the front desk.",
      },
      {
        slug: "night-audit" as const,
        title: "Night Audit",
        seoTitle: "Night audit Frankfurt | Night reception | DPP Services",
        seoDescription:
          "Night audit and night reception in Frankfurt: daily close, reporting and a staffed desk overnight for hotels in the Rhein-Main region.",
        text: "While your property sleeps, we take care of the daily close, reporting and security – precise, calm and reliable.",
        points: ["Daily close & cash reconciliation", "Night reception & security", "Reporting for management"],
        detailLead:
          "Night duty decides smooth handovers and reliable figures. Our night auditors close the day, keep security in view and prepare the morning.",
        detailBody: [
          "Daily close, cash reconciliation and system reports are handled to your specifications – calmly, discreetly and with clear documentation for the morning shift.",
          "Night reception stays staffed at the same time: late arrivals, late guests and emergencies are handled professionally without management needing to intervene overnight.",
        ],
        deliverablesTitle: "What night audit covers",
        deliverables: [
          "Daily close and cash reconciliation",
          "Night reception and security rounds as agreed",
          "Reporting and handover to the morning shift",
          "Handling late arrivals and special cases",
        ],
        idealTitle: "Ideal for",
        idealText:
          "Hotels in Frankfurt and the Rhein-Main region that need night staffing for a reliable audit and a staffed front desk during quiet hours.",
      },
      {
        slug: "tagung" as const,
        title: "Hotel Service / Conference / Service Staff",
        seoTitle: "Conference staff Frankfurt | Hotel service | DPP Services",
        seoDescription:
          "Conference service and service staff in Frankfurt: banquets, breakfast and event support for hotels and venues in the Rhein-Main region.",
        text: "Support for banquets, conferences and restaurants: seasoned service staff who carry your team through everyday business and peak periods.",
        points: ["Conference & banquet service", "Breakfast & restaurant service", "Event support on demand"],
        detailLead:
          "Conferences, banquets and peak periods need seasoned hands. We provide service staff who relieve your in-house team – from breakfast to events.",
        detailBody: [
          "Our service staff know hotel workflows: set-up and tear-down, buffets, meeting breaks and guest communication run structured and unobtrusively.",
          "Whether trade-fair weeks in Frankfurt or high season in-house: you get short-notice reinforcement that fits into your team and holds your quality standards.",
        ],
        deliverablesTitle: "Areas of deployment",
        deliverables: [
          "Conference and banquet service",
          "Breakfast and restaurant service",
          "Event support and peak reinforcement",
          "Coordination with kitchen, housekeeping and reception",
        ],
        idealTitle: "Ideal for",
        idealText:
          "Hotels and venues in Frankfurt and the Rhein-Main region that need extra service capacity for trade fairs, congresses or high season.",
      },
      {
        slug: "seminar-support" as const,
        title: "Seminar Support",
        seoTitle: "Seminar support Frankfurt | Event front desk | DPP Services",
        seoDescription:
          "Seminar support in Frankfurt: registration, room guidance and speaker care for seminars and workshops in the Rhein-Main region.",
        text: "Professional front-of-house support for seminars and workshops: registration, badges, room guidance and speaker support – discreet and on schedule.",
        points: ["Attendee registration & badges", "Room guidance & ushering", "Speaker & break support"],
        detailLead:
          "Seminars and workshops need a smooth run from first check-in to the final session. We staff your event front of house with people who provide orientation and keep schedules on track.",
        detailBody: [
          "Our staff handle attendee registration, badge distribution and wayfinding – so delegates arrive, find their way and sit in the right rooms on time.",
          "We also support speakers and organisers: green-room attendance, material distribution, break logistics and liaison with AV – unobtrusively, reliably and available at short notice in the Rhein-Main region.",
        ],
        deliverablesTitle: "What seminar support covers",
        deliverables: [
          "Attendee check-in, name badges and guest lists",
          "Room guidance, ushering and seating assistance",
          "Speaker support, runner duties and material distribution",
          "Break hospitality and coordination with AV and the in-house team",
        ],
        idealTitle: "Ideal for",
        idealText:
          "Hotels, conference centres and companies in Frankfurt and the Rhein-Main region that need reliable front-of-house staff for seminars, trainings and corporate workshops.",
      },
      {
        slug: "buero-empfang" as const,
        title: "Office Reception",
        seoTitle: "Office reception Frankfurt | Front desk | DPP Services",
        seoDescription:
          "Office reception in Frankfurt and the Rhein-Main region: visitor management, switchboard and a representative front desk for companies.",
        text: "A reception that represents your company: visitor management, mail, switchboard and facility coordination.",
        points: ["Visitor & badge management", "Switchboard & mail", "Coordination of service providers"],
        detailLead:
          "Outside hospitality, first impressions still matter. We staff your office reception with people who handle visitors, calls and workflows with confidence.",
        detailBody: [
          "Visitor check-in, badges, mail and switchboard are handled discreetly and reliably – as your company’s calling card.",
          "Where needed, our staff coordinate service providers and internal contacts so reception works as a clear hub.",
        ],
        deliverablesTitle: "Office reception services",
        deliverables: [
          "Visitor and badge management",
          "Switchboard and mail handling",
          "Coordination of vendors and deliveries",
          "Representative presence in a corporate setting",
        ],
        idealTitle: "Ideal for",
        idealText:
          "Companies and office sites in Frankfurt and the Rhein-Main region that need a professional reception – permanent or temporary.",
      },
    ] satisfies ServiceCopyItem[],
  },
} as const;
