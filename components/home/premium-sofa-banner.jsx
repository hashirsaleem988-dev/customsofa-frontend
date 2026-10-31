
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function PremiumSofaBanner() {
  const { isArabic } = useLanguage();

  const whatsappMessage = isArabic
    ? "مرحباً، أنا مهتم بتفصيل الأرائك حسب الطلب. يرجى مشاركة تفاصيل التصاميم والأقمشة وخيارات التخصيص والأسعار."
    : "Hello, I am interested in custom sofa tailoring. Please share details about your designs, fabrics, customization options and pricing.";

  const whatsappLink = `https://wa.me/966550834729?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#F8F6F0] px-4 py-3 sm:px-5 md:px-10 lg:px-16"
    >
      <div className="relative mx-auto h-[390px] w-full max-w-[1600px] overflow-hidden rounded-[14px] sm:h-[360px] md:h-[320px] lg:h-[350px]">

        {/* Banner Image */}
        <Image
          src="/images/banners/premium-sofa-sunset-banner.webp"
          alt={
            isArabic
              ? "مجموعة الأرائك الفاخرة"
              : "Premium luxury sofa collection"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />

        {/* Dark Gradient */}
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-black/80 via-black/45 to-black/10"
              : "bg-gradient-to-r from-black/80 via-black/45 to-black/10"
          }`}
        />

        {/* Banner Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 text-white sm:px-8 md:px-10 lg:px-14">

          {/* Heading */}
          <h2 className="font-serif text-[clamp(30px,4vw,58px)] font-normal leading-[1.12] tracking-[-1px]">
            {isArabic ? (
              <>
                صنع <span className="text-[#D9B84C]">حسب الطلب</span>
              </>
            ) : (
              <>
                MADE TO <span className="text-[#D9B84C]">ORDER</span>
              </>
            )}
            <span className="ml-1 animate-pulse text-[#D9B84C]">|</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[780px] text-[13px] leading-[1.65] text-white/85 sm:mt-5 sm:text-[14px] md:text-[18px] md:leading-[1.7]">
            {isArabic
              ? "يتم تشطيب كل قطعة بأقمشة فاخرة وإطارات من الخشب الصلب، لتتحمل الاستخدام اليومي وتحافظ على أناقتها لسنوات طويلة."
              : "Every piece is finished with premium fabric and solid wood framing, designed to handle daily use while keeping its elegant look for years."}
            <span className="ml-2 inline-block h-3 w-3 rounded-full bg-[#D9B84C]" />
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

            {/* Custom Tailoring - WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isArabic
                  ? "استفسر عن تفصيل الأرائك عبر واتساب"
                  : "Inquire about custom sofa tailoring on WhatsApp"
              }
              className="
                inline-flex min-h-[48px] items-center justify-center gap-3
                rounded-[12px] bg-[#D9B84C] px-5
                text-center text-[10px] font-bold tracking-[0.8px] text-[#17202A]
                shadow-md transition-all duration-300
                hover:bg-[#EACB5C] hover:shadow-lg
                sm:min-h-[54px] sm:gap-4 sm:rounded-[15px] sm:px-8
                sm:text-[12px] sm:tracking-[1px]
              "
            >
              {isArabic ? "استفسر عن التفصيل حسب الطلب" : "INQUIRE CUSTOM TAILORING"}
              <ArrowRight
                size={19}
                className={isArabic ? "rotate-180" : ""}
              />
            </a>

            {/* Explore Materials */}
            <Link
              href="/materials"
              className="
                inline-flex min-h-[48px] items-center justify-center gap-3
                rounded-[12px] border border-white/40
                bg-white/10 px-5
                text-center text-[10px] font-bold tracking-[0.8px] text-white
                transition-all duration-300
                hover:border-[#D9B84C] hover:bg-[#D9B84C]
                hover:text-[#17202A]
                sm:min-h-[54px] sm:gap-4 sm:rounded-[15px] sm:px-8
                sm:text-[12px] sm:tracking-[1px]
              "
            >
              {isArabic ? "استكشف الخامات" : "EXPLORE MATERIALS"}
              <ArrowRight
                size={19}
                className={isArabic ? "rotate-180" : ""}
              />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
