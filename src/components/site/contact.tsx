import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./reveal";

export function Contact() {
  const [sending, setSending] = useState(false);


  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="glow-orb -right-24 bottom-0 h-80 w-80 opacity-20" />
      <div className="grid-lines absolute inset-0 opacity-20" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow text-primary">Kontakt</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Gemeinsam etwas schaffen
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Erzählen Sie uns kurz von Ihrem Bedarf – Standort, Schichten und Zeitraum genügen für
            den Start. Wir melden uns mit einem konkreten Vorschlag zurück.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "E-Mail", value: "info@dpp-services.de", href: "mailto:info@dpp-services.de" },
              { icon: Phone, label: "Telefon", value: "+49 176 70800798", href: "tel:+4917670800798" },
              { icon: MapPin, label: "Einsatzgebiet", value: "Rhein-Main-Gebiet" },
              { icon: Clock3, label: "Erreichbarkeit", value: "Mo–So, Einsätze 24/7" },
            ].map((c) => (
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
                toast.success("Danke für Ihre Anfrage!", {
                  description: "Wir melden uns innerhalb eines Werktages bei Ihnen.",
                });
              }, 700);
            }}
            className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Ihr Name" required />
              <Field label="Unternehmen" name="company" placeholder="Hotel / Firma" />
              <Field label="E-Mail" name="email" type="email" placeholder="name@unternehmen.de" required />
              <Field label="Telefon" name="phone" placeholder="Optional" />
            </div>

            <label className="mt-5 block">
              <span className="text-[11px] font-bold tracking-[0.18em] text-white/60 uppercase">
                Leistung
              </span>
              <select
                name="service"
                defaultValue={services[0]}
                className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block">
              <span className="text-[11px] font-bold tracking-[0.18em] text-white/60 uppercase">
                Ihre Nachricht
              </span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Standort, Zeitraum, Schichten, Besonderheiten …"
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-brand shadow-brand mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? "Wird gesendet …" : "Anfrage absenden"}
            </button>
            <p className="mt-4 text-center text-xs text-white/45">
              Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
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
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
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
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}
