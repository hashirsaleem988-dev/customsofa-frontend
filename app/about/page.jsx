
"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AboutHero from "@/components/about/about-hero";
import AboutIntroduction from "@/components/about/about-introduction";
import AboutRiyadhMap from "@/components/about/about-riyadh-map";
import AboutJourney from "@/components/about/about-journey";
import AboutShowcase from "@/components/about/about-showcase";
import AboutConsultation from "@/components/about/about-consultation";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const { isArabic } = useLanguage();

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf6f4]"
    >
      <Header />

      <AboutHero />
      <AboutIntroduction />
      <AboutRiyadhMap />
      <AboutJourney />
      <AboutShowcase />
      <AboutConsultation />

      <Footer />
    </main>
  );
}
