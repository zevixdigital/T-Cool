import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import RentNowPage from "./pages/RentNow";
import RepairService from "./pages/RepairService";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import ReturnPolicy from "./pages/ReturnPolicy";
import PricingPage from "./pages/Pricing";
import { ScrollToTop } from "@/components/site/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/product/:productSlug" element={<ProductPage />} />
            <Route path="/rent/:productSlug" element={<RentNowPage />} />
            <Route path="/repair-service" element={<RepairService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
