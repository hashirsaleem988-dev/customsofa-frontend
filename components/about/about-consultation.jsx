
"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function AboutConsultation() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#fbf6f4] px-3 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-[#101d29] px-6 py-16 text-center sm:rounded-[30px] sm:px-12 sm:py-20 lg:px-20">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d9b83f]/10" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d9b83f]/15" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#d9b83f]/10" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d9b83f]/40 bg-[#d9b83f]/10 text-[#d9b83f]">
            <Sparkles size={25} />
          </div>

          <span className="mt-6 inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#d9b83f]">
            {isArabic
              ? "لنصنع شيئًا جميلًا معًا"
              : "Let's Create Something Beautiful"}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                تواصل مع فريق
                <span className="block text-[#d9b83f]">
                  أتيليه الرياض
                </span>
              </>
            ) : (
              <>
                Connect With Our
                <span className="block text-[#d9b83f]">
                  Riyadh Atelier Team
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {isArabic
              ? "هل لديك مشروع أثاث أو رؤية خاصة لمساحتك؟ دع فريقنا يساعدك في استكشاف التصاميم المصممة حسب الطلب والمواد الفاخرة والحلول الأنيقة التي تلبي احتياجاتك."
              : "Have a furniture project or a vision for your space? Let our team help you explore bespoke designs, premium materials and elegant solutions tailored to your needs."}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">

            <Link
              href="/contact"
              className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#d9b83f] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#172433] transition hover:bg-white sm:w-auto"
            >
              {isArabic ? "احجز استشارة" : "Book a Consultation"}
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
              {isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/50">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#d9b83f]" />
              +966 55 083 4729
            </span>

            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#d9b83f]" />
              {isArabic
                ? "حلول تصميم مخصصة"
                : "Personalized Design Solutions"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
