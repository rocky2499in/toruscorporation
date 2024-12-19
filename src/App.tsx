import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import DefenceProducts from "./pages/DefenceProducts";
import SmallCaliberAmmunition from "./pages/SmallCaliberAmmunition";
import MediumCaliberAmmunition from "./pages/MediumCaliberAmmunition";
import LargeCaliberAmmunition from "./pages/LargeCaliberAmmunition";
import RocketsAndBombs from "./pages/RocketsAndBombs";
import MortarBombs from "./pages/MortarBombs";
import ExplosivesAndPropellants from "./pages/ExplosivesAndPropellants";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/defence-products" element={<DefenceProducts />} />
          <Route path="/defence-products/small-caliber" element={<SmallCaliberAmmunition />} />
          <Route path="/defence-products/medium-caliber" element={<MediumCaliberAmmunition />} />
          <Route path="/defence-products/large-caliber" element={<LargeCaliberAmmunition />} />
          <Route path="/defence-products/rockets-bombs" element={<RocketsAndBombs />} />
          <Route path="/defence-products/mortar-bombs" element={<MortarBombs />} />
          <Route path="/defence-products/explosives" element={<ExplosivesAndPropellants />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;