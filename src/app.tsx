import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CookieBanner } from "@/components/site/cookie-banner";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { LanguageProvider, resolveInitialLang } from "@/lib/i18n";
import { ScrollManager } from "@/lib/scroll-manager";
import { DatenschutzPage } from "@/routes/datenschutz";
import { ImpressumPage } from "@/routes/impressum";
import { IndexPage } from "@/routes/index";
import { KarrierePage } from "@/routes/karriere";
import { KarriereDetailPage } from "@/routes/karriere-detail";
import { KontaktPage } from "@/routes/kontakt";
import { LeistungDetailPage } from "@/routes/leistung-detail";
import { LeistungenPage } from "@/routes/leistungen";
import { NotFoundPage } from "@/routes/not-found";
import { UeberUnsPage } from "@/routes/ueber-uns";

export function App() {
  return (
    <LanguageProvider initialLang={resolveInitialLang()}>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/leistungen" element={<LeistungenPage />} />
        <Route path="/leistungen/:slug" element={<LeistungDetailPage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/karriere" element={<KarrierePage />} />
        <Route path="/karriere/:slug" element={<KarriereDetailPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <WhatsAppFloat />
      <CookieBanner />
      <Toaster />
    </LanguageProvider>
  );
}
