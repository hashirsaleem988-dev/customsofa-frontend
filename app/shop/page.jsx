
"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ShopHero from "@/components/shop/shop-hero";
import ShopCatalog from "@/components/shop/shop-catalog";
import ShopSignatureProducts from "@/components/shop/shop-signature-products";
import { MessageCircle } from "lucide-react";
import ShopConsultation from "@/components/shop/shop-consultation";
import { useLanguage } from "@/context/language-context";

export default function ShopPage() {
  const { isArabic } = useLanguage();

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf6f4]"
    >
      <Header />

      {/* Shop Hero */}
      <ShopHero />

      {/* Shop Products, Search & Filters */}
      <ShopCatalog />

      {/* Shop Signature Products */}
      <ShopSignatureProducts />

      {/* Shop Consultation */}
      <ShopConsultation />

      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966550834729"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isArabic ? "تواصل معنا عبر واتساب" : "WhatsApp"}
        className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <MessageCircle size={30} />
      </a>
    </main>
  );
}
