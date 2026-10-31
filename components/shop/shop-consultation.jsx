
"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ShopConsultation() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#f1ecdf] px-4 py-10 sm:px-[5%] sm:py-[65px]"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-[22px] bg-[#101e2b] px-5 py-12 text-center shadow-[0_20px_55px_rgba(0,0,0,0.15)] sm:min-h-[470px] sm:px-10 sm:py-16 lg:min-h-[560px]">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 top-0 h-[350px] w-[350px] rounded-full bg-[#d9b83f]/[0.07] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-[300px] w-[300px] rounded-full bg-[#31516a]/20 blur-[100px]" />

          {/* Content */}
          <div className="relative z-[1] mx-auto flex w-full max-w-[1050px] flex-col items-center">

            {/* Badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d9b83f] px-5 py-3 text-[9px] font-extrabold tracking-[1.2px] text-[#111923] sm:mb-7 sm:px-6 sm:text-[12px] sm:tracking-[1.5px]">
              <Sparkles size={16} />
              {isArabic
                ? "تفصيل ملكي فاخر في الرياض"
                : "BESPOKE ROYAL RIYADH FITTING"}
            </span>

            {/* Heading */}
            <h2 className="max-w-[900px] font-serif text-[31px] font-normal leading-[1.4] text-white sm:text-[42px] lg:text-[54px]">
              {isArabic
                ? "هل لديك مخطط مخصص أو صورة للتصميم؟"
                : "Have a Custom Floorplan or Design Photo?"}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[900px] text-[13px] leading-[1.8] text-[#d4b9a5] sm:mt-6 sm:text-[17px]">
              {isArabic
                ? "أرسل إلينا أبعاد غرفتك وصور التصميم لخبرائنا في الرياض للحصول على إرشادات مباشرة حول الخامات والأسعار المخصصة."
                : "Send your room dimensions & design photos to our Riyadh engineers for direct material guidance and custom pricing."}
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[56px] w-full max-w-[540px] items-center justify-center gap-3 rounded-[13px] bg-[#d9b83f] px-5 py-4 text-[10px] font-extrabold tracking-[1px] text-[#111923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7c84f] sm:mt-10 sm:min-h-[66px] sm:text-[14px] sm:tracking-[1.5px]"
            >
              <MessageSquare size={19} />
              {isArabic
                ? "احجز استشارتك المخصصة الآن"
                : "BOOK CUSTOM CONSULTATION NOW"}
              <ArrowRight
                size={20}
                className={isArabic ? "rotate-180" : ""}
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
