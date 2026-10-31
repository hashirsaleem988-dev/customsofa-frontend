
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactHero() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[420px] w-full px-2 pt-[76px] pb-2 sm:h-[500px] sm:px-5 sm:pt-[90px] sm:pb-5 lg:h-[560px]"
    >
      <div
        className="relative flex h-full w-full items-center overflow-hidden rounded-[20px] bg-cover bg-center sm:rounded-[28px]"
        style={{
          backgroundImage:
            "url('/images/banners/contact-hero-background.webp')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d171e]/20 via-transparent to-[#fbf6f4]/10" />

        {/* Hero Content */}
        <div className="relative z-10 ml-auto w-full max-w-2xl px-6 text-right sm:px-12 lg:mr-12 lg:px-8">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#a98925] sm:text-xs">
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </span>

          <h1 className="mt-4 ml-auto max-w-xl text-right font-serif text-4xl leading-[1.1] text-[#172433] sm:text-5xl lg:text-6xl">
            {isArabic ? (
              <>
                لنصنع معًا
                <span className="block text-[#8c7047]">
                  شيئًا استثنائيًا
                </span>
              </>
            ) : (
              <>
                Let's Create
                <span className="block text-[#8c7047]">
                  Something Extraordinary
                </span>
              </>
            )}
          </h1>

          <p className="ml-auto mt-5 max-w-lg text-right text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
            {isArabic
              ? "نحن هنا لتحويل رؤيتك إلى واقع. تواصل مع فريقنا للحصول على الأثاث والمواد وحلول التصميم الداخلي المصممة خصيصًا لاحتياجاتك."
              : "We're here to bring your vision to life. Get in touch with our team for furniture, materials and bespoke interior solutions."}
          </p>

          <Link
            href="#contact-information"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#172433] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d9b83f] hover:text-[#172433]"
          >
            {isArabic ? "تواصل معنا" : "Get In Touch"}

            {isArabic ? (
              <ArrowRight size={17} className="rotate-180" />
            ) : (
              <ArrowRight size={17} />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
