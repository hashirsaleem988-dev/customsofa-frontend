
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const slides = [
  {
    label: "PREMIUM SOFA SET",
    arabicLabel: "طقم أرائك فاخر",
    title: "Grand Family",
    arabicTitle: "أريكة عائلية",
    highlight: "L-Shape Sofa Set",
    arabicHighlight: "بتصميم حرف L",
    description:
      "Tailored luxury furniture crafted with dried Sindian oak, density-60 foam, and authentic velvet drapery.",
    arabicDescription:
      "أثاث فاخر مصمم بعناية باستخدام خشب السنديان المجفف وإسفنج بكثافة 60 وأقمشة مخملية أصلية.",
    image: "/images/banners/shop-sofa-banner.webp",
  },
  {
    label: "ROYAL DRAPERY",
    arabicLabel: "ستائر ملكية",
    title: "Blackout & Sheer",
    arabicTitle: "ستائر عازلة للضوء",
    highlight: "Drapery",
    arabicHighlight: "وستائر شفافة",
    description:
      "Discover elegant curtains designed to bring privacy, comfort and timeless beauty to your home.",
    arabicDescription:
      "اكتشف ستائر أنيقة مصممة لتمنح منزلك الخصوصية والراحة والجمال الخالد.",
    image: "/images/banners/shop-curtains-banner.webp",
  },
  {
    label: "AUTHENTIC SAUDI KING",
    arabicLabel: "كنب ملكي سعودي أصيل",
    title: "Executive King Sofa &",
    arabicTitle: "أريكة ملكية فاخرة",
    highlight: "Majlis",
    arabicHighlight: "ومجلس سعودي",
    description:
      "Experience traditional Saudi elegance with premium materials and custom-made craftsmanship.",
    arabicDescription:
      "استمتع بالأناقة السعودية الأصيلة مع خامات فاخرة وحرفية متقنة وتصاميم تُنفذ حسب الطلب.",
    image: "/images/banners/shop-majlis-banner.webp",
  },
];

export default function ShopHero() {
  const { isArabic } = useLanguage();

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="px-3 pb-5 pt-[72px] sm:px-5 sm:pt-[82px] lg:px-[4%]"
    >
      <div className="relative mx-auto min-h-[310px] max-w-[1700px] overflow-hidden rounded-[18px] border border-[#c8ad70]/40 bg-[#17232d] sm:min-h-[350px] lg:min-h-[390px] lg:rounded-[22px]">

        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={isArabic ? item.arabicLabel : item.label}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-black/85 via-black/55 to-black/10"
              : "bg-gradient-to-r from-black/85 via-black/55 to-black/10"
          }`}
        />

        <div
          key={active}
          className="relative z-10 flex min-h-[310px] max-w-[780px] flex-col items-start justify-center px-5 py-10 sm:min-h-[350px] sm:px-9 lg:min-h-[390px] lg:px-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9b334]/40 bg-[#332b19]/80 px-3 py-2 text-[9px] font-bold tracking-[1px] text-[#e5bd3e] sm:px-4 sm:text-xs">
            <Sparkles size={14} />
            {isArabic ? slide.arabicLabel : slide.label}
          </span>

          <h1 className="mt-4 font-serif text-[34px] leading-[1.08] text-white sm:mt-5 sm:text-[46px] lg:text-[62px]">
            {isArabic ? slide.arabicTitle : slide.title}
            <br />
            <span className="font-bold text-[#e0b832]">
              {isArabic ? slide.arabicHighlight : slide.highlight}
            </span>
          </h1>

          <p className="mt-3 max-w-[590px] text-[11px] leading-5 text-white/85 sm:mt-4 sm:text-sm sm:leading-6">
            {isArabic ? slide.arabicDescription : slide.description}
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex min-h-[43px] items-center justify-center gap-2 rounded-[10px] bg-[#d9b334] px-4 py-2.5 text-[10px] font-extrabold tracking-wide text-[#101820] transition hover:bg-[#edc84c] sm:mt-6 sm:min-h-[48px] sm:gap-3 sm:px-7 sm:text-xs"
          >
            <MessageSquare size={16} />
            {isArabic ? "اطلب تصميمك حسب الطلب" : "REQUEST CUSTOM ORDER"}
            <ArrowRight
              size={17}
              className={isArabic ? "rotate-180" : ""}
            />
          </a>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 sm:bottom-5 sm:right-7 sm:gap-3">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={
                isArabic
                  ? `عرض الشريحة ${index + 1}`
                  : `Show slide ${index + 1}`
              }
              aria-current={active === index ? "true" : undefined}
              className={`h-[9px] rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-[#d9b334] sm:w-10"
                  : "w-[9px] bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
