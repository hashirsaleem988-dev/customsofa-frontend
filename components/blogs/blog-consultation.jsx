
"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function BlogConsultation() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#fbf6f4] px-3 pb-16 pt-8 sm:px-6 sm:pb-20"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#101d29] px-6 py-16 text-center sm:px-12 sm:py-20">

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#d9b83f]/10" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#d9b83f]/15" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#d9b83f]/10" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d9b83f]/40 bg-[#d9b83f]/10 text-[#d9b83f]">
            <Sparkles size={25} />
          </div>

          <span className="mt-6 inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#d9b83f]">
            {isArabic
              ? "لنحوّل أفكارك إلى واقع"
              : "Let's Bring Your Ideas to Life"}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                هل ألهمتك قصصنا؟
                <span className="mt-2 block text-[#d9b83f]">
                  لنبـدع قصتك معًا.
                </span>
              </>
            ) : (
              <>
                Inspired by Our Stories?
                <span className="mt-2 block text-[#d9b83f]">
                  Let's Create Yours.
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {isArabic
              ? "اكتشف الأثاث المصمم حسب الطلب، وتعرّف على المواد الفاخرة، ودع فريقنا يساعدك في إنشاء مساحة تعكس أسلوبك الشخصي ورؤيتك."
              : "Explore bespoke furniture, discover premium materials and let our team help you create a space that reflects your personal style and vision."}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">

            <Link
              href="/contact"
              className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#d9b83f] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#172433] transition hover:bg-white sm:w-auto"
            >
              {isArabic ? "تواصل مع فريقنا" : "Contact Our Team"}

              {isArabic ? (
                <ArrowRight size={17} className="rotate-180" />
              ) : (
                <ArrowRight size={17} />
              )}
            </Link>

            <a
              href="https://wa.me/966550834729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#d9b83f] hover:bg-[#d9b83f] hover:text-[#172433] sm:w-auto"
            >
              <MessageCircle size={17} />
              {isArabic ? "تواصل معنا عبر واتساب" : "WhatsApp Us"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
