
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function MaterialsHero() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#fbf6f4] px-2.5 pb-3 pt-[74px] sm:px-[3.8%] sm:pb-4 sm:pt-[105px]"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-86px)] w-full max-w-[1700px] items-center overflow-hidden rounded-[16px] border border-[#8b806d]/50 bg-[#211910] sm:min-h-[calc(100svh-125px)] sm:rounded-[30px]">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/banners/materials-hero-background.webp"
          alt={
            isArabic
              ? "أنسجة الخشب الفاخر ومواد الأثاث"
              : "Premium wood and furniture material textures"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />

        {/* DARK OVERLAY */}
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-black/85 via-black/60 to-black/15"
              : "bg-gradient-to-r from-black/85 via-black/60 to-black/15"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full px-5 py-9 min-[480px]:px-7 sm:px-10 sm:py-10 lg:px-[5.2%]">
          <div className="max-w-[850px]">

            {/* BADGE */}
            <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d9b83f]/40 bg-[#d9b83f]/10 px-3.5 py-2.5 text-[8px] font-bold tracking-[0.9px] text-[#e7c64b] min-[480px]:text-[9px] sm:mb-6 sm:px-5 sm:text-[11px] sm:tracking-[1.2px]">
              <Sparkles size={14} className="shrink-0 sm:h-[15px] sm:w-[15px]" />
              {isArabic
                ? "دليل 27 خامة معتمدة"
                : "27 CERTIFIED MATERIALS GUIDE"}
            </span>

            {/* HEADING */}
            <h1 className="max-w-[700px] font-serif text-[clamp(34px,8vw,44px)] font-normal leading-[1.2] text-white min-[480px]:text-[48px] sm:text-[58px] sm:leading-[1.15] lg:text-[72px]">
              {isArabic ? (
                <>
                  خامات مصنفة
                  <span className="block font-semibold text-[#d9b83f]">
                    وعينات منسقة
                  </span>
                </>
              ) : (
                <>
                  Categorized Material
                  <span className="block font-semibold text-[#d9b83f]">
                    Texture Swatches
                  </span>
                </>
              )}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[600px] text-[11px] leading-[1.7] text-white/85 min-[480px]:text-[13px] sm:mt-5 sm:text-[16px] lg:text-[18px]">
              {isArabic
                ? "تصفح جميع العينات الـ 27 المعتمدة من الأقمشة وخشب البلوط وإسفنج بكثافة 60، والمصنفة بدقة حسب الفئات."
                : "Browse all 27 certified fabric, oak timber, and density-60 foam swatches organized strictly by category."}
            </p>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-[46px] max-w-full items-center justify-center gap-2 rounded-[9px] bg-[#d9b83f] px-4 text-center text-[9px] font-extrabold tracking-[0.7px] text-[#151515] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8c84e] min-[480px]:px-5 sm:mt-8 sm:min-h-[55px] sm:gap-3 sm:px-8 sm:text-[12px] sm:tracking-[1px]"
            >
              {isArabic ? "اطلب عينات الخامات" : "REQUEST CUSTOM SWATCH"}
              <ArrowRight
                size={17}
                className={`shrink-0 sm:h-[19px] sm:w-[19px] ${
                  isArabic ? "rotate-180" : ""
                }`}
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
