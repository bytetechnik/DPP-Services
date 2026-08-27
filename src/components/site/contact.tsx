import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { useCopy } from "@/lib/i18n";

const contactIcons = [Mail, Phone, MapPin, Clock3];

const copy = {
  de: {
    eyebrow: "Kontakt",
    heading: "Gemeinsam etwas schaffen",
    intro:
      "Erzählen Sie uns kurz von Ihrem Bedarf – Standort, Schichten und Zeitraum genügen für den Start. Wir melden uns mit einem konkreten Vorschlag zurück.",
    contactItems: [
      { label: "E-Mail", value: "info@dpp-services.de", href: "mailto:info@dpp-services.de" },
      { label: "Telefon", value: "+49 176 70800798", href: "tel:+4917670800798" },
      { label: "Einsatzgebiet", value: "Rhein-Main-Gebiet" },
      { label: "Erreichbarkeit", value: "Mo–So, Einsätze 24/7" },
    ],
    fields: {
      firstName: "Vorname*",
      lastName: "Nachname*",
      position: "Position*",
      positionPlaceholder: "z. B. Hotelleitung",
      company: "Unternehmensname*",
      companyPlaceholder: "Hotel / Firma",
      address: "Adresse*",
      addressPlaceholder: "Straße, PLZ, Ort",
      email: "E-Mail-Adresse*",
      emailPlaceholder: "name@unternehmen.de",
      phone: "Telefonnummer*",
      phonePlaceholder: "+49 …",
    },
    firstNamePlaceholder: "Vorname",
    lastNamePlaceholder: "Nachname",
    descriptionLabel: "Beschreibung / Anfrage*",
    descriptionPlaceholder: "Standort, Zeitraum, Schichten, Besonderheiten …",
    sending: "Wird gesendet …",
    submit: "Einreichen",
    disclaimer: "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.",
    toastTitle: "Danke für Ihre Anfrage!",
    toastDescription: "Wir melden uns innerhalb eines Werktages bei Ihnen.",
  },
  en: {
    eyebrow: "Contact",
    heading: "Let's build something together",
    intro:
      "Tell us briefly about your needs – location, shifts and timeframe are enough to get started. We'll get back to you with a concrete proposal.",
    contactItems: [
      { label: "Email", value: "info@dpp-services.de", href: "mailto:info@dpp-services.de" },
      { label: "Phone", value: "+49 176 70800798", href: "tel:+4917670800798" },
      { label: "Service area", value: "Rhein-Main region" },
      { label: "Availability", value: "Mon–Sun, deployments 24/7" },
    ],
    fields: {
      firstName: "First name*",
      lastName: "Last name*",
      position: "Position*",
      positionPlaceholder: "e.g. Hotel management",
      company: "Company name*",
      companyPlaceholder: "Hotel / Company",
      address: "Address*",
      addressPlaceholder: "Street, postcode, city",
      email: "Email address*",
      emailPlaceholder: "name@company.com",
      phone: "Phone number*",
      phonePlaceholder: "+49 …",
    },
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    descriptionLabel: "Description / Request*",
    descriptionPlaceholder: "Location, timeframe, shifts, special requirements …",
    sending: "Sending …",
    submit: "Submit",
    disclaimer: "Your information will only be used to process your inquiry.",
    toastTitle: "Thank you for your inquiry!",
    toastDescription: "We will get back to you within one business day.",
  },
};

export function Contact() {
  const [sending, setSending] = useState(false);
  const t = useCopy(copy);
  const contactItems = t.contactItems.map((c, i) => ({ ...c, icon: contactIcons[i]! }));

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="glow-orb -right-24 bottom-0 h-80 w-80 opacity-20" />
      <div className="grid-lines absolute inset-0 opacity-20" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow text-primary">{t.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            {t.intro}
          </p>

          <div className="mt-10 space-y-5">
            {contactItems.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/5 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-display text-base font-semibold break-words text-white"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display text-base font-semibold text-white">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              const form = e.currentTarget;
              window.setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success(t.toastTitle, {
                  description: t.toastDescription,
                });
              }, 700);
            }}
            className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.fields.firstName} name="firstName" placeholder={t.firstNamePlaceholder} required maxLength={100} />
              <Field label={t.fields.lastName} name="lastName" placeholder={t.lastNamePlaceholder} required maxLength={100} />
              <Field label={t.fields.position} name="position" placeholder={t.fields.positionPlaceholder} required maxLength={100} />
              <Field
                label={t.fields.company}
                name="company"
                placeholder={t.fields.companyPlaceholder}
                required
                maxLength={150}
              />
              <Field
                label={t.fields.address}
                name="address"
                placeholder={t.fields.addressPlaceholder}
                required
                maxLength={200}
              />
              <Field
                label={t.fields.email}
                name="email"
                type="email"
                placeholder={t.fields.emailPlaceholder}
                required
                maxLength={255}
              />
              <Field
                label={t.fields.phone}
                name="phone"
                type="tel"
                placeholder={t.fields.phonePlaceholder}
                required
                maxLength={30}
              />
            </div>

            <label className="mt-5 block">
              <span className="text-[11px] font-bold tracking-[0.18em] text-white/60 uppercase">
                {t.descriptionLabel}
              </span>
              <textarea
                name="description"
                rows={5}
                required
                maxLength={1000}
                placeholder={t.descriptionPlaceholder}
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary"
              />
            </label>


            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-brand shadow-brand mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? t.sending : t.submit}
            </button>
            <p className="mt-4 text-center text-xs text-white/45">
              {t.disclaimer}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-[11px] font-bold tracking-[0.18em] text-white/60 uppercase">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}
