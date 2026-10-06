import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import { Reveal } from "./reveal";

import { useCopy } from "@/lib/i18n";
import { BUSINESS, MAPS_URL } from "@/lib/site";

const contactIcons = [Mail, Phone, MapPin, Clock3];

const copy = {
  de: {
    eyebrow: "Kontakt",
    heading: "Gemeinsam etwas schaffen",
    intro:
      "Erzählen Sie uns kurz von Ihrem Bedarf – Standort, Schichten und Zeitraum genügen für den Start. Wir melden uns mit einem konkreten Vorschlag zurück.",
    contactItems: [
      { label: "E-Mail", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` as string | undefined },
      { label: "Telefon", value: BUSINESS.telephoneDisplay, href: `tel:${BUSINESS.telephone}` as string | undefined },
      {
        label: "Adresse",
        value: `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}`,
        href: MAPS_URL,
        routeLabel: "Route planen",
      },
      { label: "Erreichbarkeit", value: "Mo–So, Einsätze 24/7", href: undefined as string | undefined },
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
    sentSuccess: "Nachricht gesendet",
    sendError:
      "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@dpp-services.de.",
  },
  en: {
    eyebrow: "Contact",
    heading: "Let's build something together",
    intro:
      "Tell us briefly about your needs – location, shifts and timeframe are enough to get started. We'll get back to you with a concrete proposal.",
    contactItems: [
      { label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` as string | undefined },
      { label: "Phone", value: BUSINESS.telephoneDisplay, href: `tel:${BUSINESS.telephone}` as string | undefined },
      {
        label: "Address",
        value: `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}`,
        href: MAPS_URL,
        routeLabel: "Plan a route",
      },
      { label: "Availability", value: "Mon–Sun, deployments 24/7", href: undefined as string | undefined },
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
    sentSuccess: "Message sent",
    sendError:
      "Message could not be sent. Please try again or email info@dpp-services.de.",
  },
};

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useCopy(copy);
  const contactItems = t.contactItems.map((c, i) => ({ ...c, icon: contactIcons[i]! }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      let payload: { ok?: boolean; error?: string } | null = null;
      try {
        payload = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        payload = null;
      }

      if (!response.ok || !payload?.ok) {
        setError(t.sendError);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(t.sendError);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-36 sm:pb-28">
      <motion.div
        aria-hidden
        className="glow-orb -right-24 bottom-0 h-80 w-80 opacity-20"
        animate={{ y: [0, -26, 0], scale: [1, 1.07, 1], opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="glow-orb -top-28 -left-20 h-72 w-72 opacity-15"
        animate={{ y: [0, 22, 0], scale: [1.04, 1, 1.04], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="grid-lines absolute inset-0 opacity-20" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow text-gold">{t.eyebrow}</span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          >
            {t.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {t.intro}
          </motion.p>

          <div className="mt-10 space-y-5">
            {contactItems.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.08 }}
                className="group flex items-start gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/5 text-gold transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold/40 group-hover:bg-gold/10">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                    {c.label}
                  </p>
                  {c.routeLabel ? (
                    <>
                      <p className="font-display text-base font-semibold text-white">{c.value}</p>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex text-sm font-semibold text-gold hover:text-white"
                      >
                        {c.routeLabel}
                      </a>
                    </>
                  ) : c.href ? (
                    <a
                      href={c.href}
                      className="font-display text-base font-semibold break-words text-white transition-colors duration-300 hover:text-gold"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display text-base font-semibold text-white">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>


        <Reveal delay={0.1}>
          {sent ? (
            <div className="grid min-h-[320px] place-items-center rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <p className="font-display text-2xl font-extrabold text-white">{t.sentSuccess}</p>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            {/* Honeypot – leave empty; bots often fill it */}
            <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

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

            {error ? (
              <p className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-brand shadow-brand mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? t.sending : t.submit}
            </button>
            <p className="mt-4 text-center text-xs text-white/45">
              {t.disclaimer}
            </p>
          </form>
          )}
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
