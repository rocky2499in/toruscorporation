import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import DefenceProducts from "./pages/DefenceProducts";
import SportsAmmunition from "./pages/SportsAmmunition";
import SmallCaliberAmmunition from "./pages/SmallCaliberAmmunition";
import MediumCaliberAmmunition from "./pages/MediumCaliberAmmunition";
import LargeCaliberAmmunition from "./pages/LargeCaliberAmmunition";
import RocketsAndBombs from "./pages/RocketsAndBombs";
import MortarBombs from "./pages/MortarBombs";
import ExplosivesAndPropellants from "./pages/ExplosivesAndPropellants";
import Technologies from "./pages/Technologies";
import TNTManufacturing from "./pages/technologies/TNTManufacturing";
import NitrocelluloseProduction from "./pages/technologies/NitrocelluloseProduction";
import SpecializedExplosives from "./pages/technologies/SpecializedExplosives";
import RDXManufacturing from "./pages/technologies/RDXManufacturing";
import PropellantPortfolio from "./pages/technologies/PropellantPortfolio";
import WorkWithUs from "./pages/WorkWithUs";
import Schedule from "./pages/Schedule";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Toaster />
              <Sonner />
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/defence-products" element={<DefenceProducts />} />
                  <Route path="/sports-ammunition" element={<SportsAmmunition />} />
                  <Route path="/defence-products/small-caliber" element={<SmallCaliberAmmunition />} />
                  <Route path="/defence-products/medium-caliber" element={<MediumCaliberAmmunition />} />
                  <Route path="/defence-products/large-caliber" element={<LargeCaliberAmmunition />} />
                  <Route path="/defence-products/rockets-bombs" element={<RocketsAndBombs />} />
                  <Route path="/defence-products/mortar-bombs" element={<MortarBombs />} />
                  <Route path="/defence-products/explosives" element={<ExplosivesAndPropellants />} />
                  <Route path="/technologies" element={<Technologies />} />
                  <Route path="/technologies/tnt" element={<TNTManufacturing />} />
                  <Route path="/technologies/nitrocellulose" element={<NitrocelluloseProduction />} />
                  <Route path="/technologies/specialized" element={<SpecializedExplosives />} />
                  <Route path="/technologies/rdx" element={<RDXManufacturing />} />
                  <Route path="/technologies/propellants" element={<PropellantPortfolio />} />
                  <Route path="/work-with-us" element={<WorkWithUs />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;