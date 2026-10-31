
"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MaterialsHero from "@/components/materials/materials-hero";
import MaterialsCatalog from "@/components/materials/materials-catalog";
import { useLanguage } from "@/context/language-context";

export default function MaterialsPage({ searchParams }) {
  const { isArabic } = useLanguage();

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf6f4]"
    >
      <Header />

      <MaterialsHero />

      <MaterialsCatalog />

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966550834729"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isArabic ? "تواصل معنا عبر واتساب" : "WhatsApp"}
        className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <span className="text-[25px]">☎</span>
      </a>
    </main>
  );
}
