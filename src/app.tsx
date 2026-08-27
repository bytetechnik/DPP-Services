import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, resolveInitialLang } from "@/lib/i18n";
import { ScrollManager } from "@/lib/scroll-manager";
import { DatenschutzPage } from "@/routes/datenschutz";
import { ImpressumPage } from "@/routes/impressum";
import { IndexPage } from "@/routes/index";
import { KontaktPage } from "@/routes/kontakt";
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
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </LanguageProvider>
  );
}
