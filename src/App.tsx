
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Helmet>
          <title>Combat Power Calculator | Pokémon GO CP Calculator</title>
          <meta name="description" content="Calculate the Combat Power (CP) of any Pokémon in Pokémon GO with our accurate CP Calculator. Optimize your team with precise CP predictions based on level, IVs, and base stats." />
          <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, CP calculator, Pokémon evolution calculator, IV calculator, Pokémon GO tools" />
          {/* OpenGraph tags for social sharing */}
          <meta property="og:title" content="Combat Power Calculator | Pokémon GO CP Calculator" />
          <meta property="og:description" content="Calculate the Combat Power (CP) of any Pokémon in Pokémon GO with our accurate CP Calculator. Optimize your team with precise CP predictions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://combat-power-calculator.online" />
          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Combat Power Calculator | Pokémon GO CP Calculator" />
          <meta name="twitter:description" content="Calculate the Combat Power (CP) of any Pokémon in Pokémon GO with our accurate CP Calculator." />
          {/* Schema.org markup for Google */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Combat Power Calculator",
              "url": "https://combat-power-calculator.online",
              "description": "Calculate the Combat Power (CP) of any Pokémon in Pokémon GO with our accurate CP Calculator.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://combat-power-calculator.online/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}</script>
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Combat Power Calculator",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "A tool to calculate the Combat Power (CP) of Pokémon in Pokémon GO based on level, IVs, and base stats."
            }
          `}</script>
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Combat Power (CP) in Pokémon GO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Combat Power (CP) is a value that indicates the overall strength of a Pokémon in battles. It's calculated based on the Pokémon's base stats, Individual Values (IVs), and level."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate is the Combat Power Calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Combat Power Calculator uses the official CP formula and up-to-date base stats for all Pokémon, making it highly accurate for calculating potential CP values."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I use the CP Calculator to optimize my Pokémon team?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can use our calculator to predict the CP of Pokémon after evolution or powering up, helping you make informed decisions about which Pokémon to evolve or power up for specific battle leagues."
                  }
                }
              ]
            }
          `}</script>
        </Helmet>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
