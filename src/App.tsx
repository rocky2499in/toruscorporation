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
import Products from "./pages/Products";
import Components from "./pages/Components";
import Contact from "./pages/Contact";
import TNTManufacturing from "./pages/technology-transfer/TNTManufacturing";
import RDXManufacturing from "./pages/technology-transfer/RDXManufacturing";
import AmmoniumPerchlorate from "./pages/technology-transfer/AmmoniumPerchlorate";
import NitrocelluloseProduction from "./pages/technology-transfer/NitrocelluloseProduction";
import PropellantPortfolio from "./pages/technology-transfer/PropellantPortfolio";
import TechnologyTransfer from "./pages/TechnologyTransfer";
import Dashboard from "./pages/admin/Dashboard";
import DealPipeline from "./pages/admin/DealPipeline";
import Settings from "./pages/admin/Settings";

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
                  <Route path="/products" element={<Products />} />
                  <Route path="/components" element={<Components />} />
                  <Route path="/technology-transfer" element={<TechnologyTransfer />} />
                  <Route path="/technology-transfer/tnt" element={<TNTManufacturing />} />
                  <Route path="/technology-transfer/rdx" element={<RDXManufacturing />} />
                  <Route path="/technology-transfer/ammonium-perchlorate" element={<AmmoniumPerchlorate />} />
                  <Route path="/technology-transfer/nitrocellulose" element={<NitrocelluloseProduction />} />
                  <Route path="/technology-transfer/propellants" element={<PropellantPortfolio />} />
                  <Route path="/contact/*" element={<Contact />} />
                  {/* Admin Routes */}
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/deals" element={<DealPipeline />} />
                  <Route path="/admin/settings" element={<Settings />} />
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