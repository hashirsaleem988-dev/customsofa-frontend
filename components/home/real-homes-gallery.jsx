
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const galleryImages = [
  "/images/categories/king-size-sofa.webp",
  "/images/categories/premium-sofa-set.webp",
  "/images/categories/curtain-rods.webp",
  "/images/categories/curtains.webp",
  "/images/categories/majlis.webp",
  "/images/categories/chairs-recliners.webp",
  "/images/categories/premium-bed.webp",
  "/images/materials/sofa-leather.webp",
  "/images/materials/curtain-fabrics.webp",
  "/images/materials/solid-timber-wood.webp",
  "/images/materials/high-density-foam.webp",
  "/images/categories/premium-sofa-set.webp",
];

export default function RealHomesGallery() {
  const { isArabic } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#fbf6f4] px-4 py-[38px] sm:px-[4%] sm:py-12 sm:pb-[35px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADING */}

        <div className="mb-[25px] text-center">
          <span className="mb-[7px] inline-block rounded-[20px] bg-[#d9b84c]/[0.13] px-3 py-1 text-[9px] font-extrabold tracking-[1.8px] text-[#a88b3d]">
            {isArabic ? "منازل سعودية حقيقية" : "REAL SAUDI HOMES"}
          </span>

          <h2 className="font-serif text-[26px] font-normal leading-[1.2] text-[#29241e] sm:text-[clamp(27px,3vw,35px)]">
            {isArabic
              ? "معرض المنازل السعودية"
              : "Real Saudi Homes Gallery"}
          </h2>

          <p className="mx-auto mt-1.5 max-w-[320px] text-[10px] leading-[1.6] text-[#77716a] sm:max-w-none sm:text-[11px]">
            {isArabic
              ? "أعمال حقيقية ومساحات معيشة صممها ونفذها رُوَى صادق في مختلف أنحاء المملكة."
              : "Actual client makings and living spaces styled by RUA SADIQ across the Kingdom."}
          </p>
        </div>

        {/* AUTO SLIDER */}

        <div className="relative w-full overflow-hidden [--slide-width:calc((100vw-80px)/5)] [--slide-gap:13px] max-[900px]:[--slide-width:calc((100vw-64px)/3)] max-[600px]:[--slide-width:75vw] max-[600px]:[--slide-gap:10px]">
          <div
            className="flex w-max gap-[var(--slide-gap)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform"
            style={{
              transform: `translateX(calc(-${activeIndex} * (var(--slide-width) + var(--slide-gap))))`,
            }}
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                className="w-[var(--slide-width)] shrink-0"
                key={index}
              >
                <div className="group relative h-[170px] w-full overflow-hidden rounded-[9px] border border-black/10 bg-[#e7dfd5] sm:h-[190px] sm:rounded-[11px]">
                  <Image
                    src={image}
                    alt={
                      isArabic
                        ? `صورة من معرض المنازل السعودية رقم ${(index % 12) + 1}`
                        : `Real Saudi home gallery ${((index % 12) + 1)}`
                    }
                    fill
                    sizes="(max-width: 600px) 75vw, (max-width: 900px) 35vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLIDER DOTS */}

        <div className="mt-[15px] flex items-center justify-center gap-[5px]">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={
                isArabic
                  ? `عرض الصورة رقم ${index + 1}`
                  : `Show image ${index + 1}`
              }
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-[5px] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-5 bg-[#d9b84c]"
                  : "w-[5px] bg-[#d8d0c7]"
              }`}
            />
          ))}
        </div>

        {/* BOTTOM INQUIRY */}

        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center sm:mt-6 sm:flex-row sm:gap-[18px]">
          <p className="max-w-[300px] font-serif text-[11px] leading-[1.6] text-[#746c62] sm:max-w-none">
            {isArabic
              ? "هل ترغب في تحويل مخطط غرفتك إلى مجلس سعودي مصمم خصيصاً لك في الرياض؟"
              : "Looking to translate your roomplan into a bespoke Saudi majlis in Riyadh?"}
          </p>

          <Link
            href="/contact"
            className="inline-flex min-h-[38px] items-center justify-center gap-[9px] rounded-[7px] bg-[#d9b84c] px-4 text-[9px] font-extrabold tracking-[0.5px] text-[#211e18] shadow-[0_3px_7px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:gap-[14px] hover:bg-[#c5a43c]"
          >
            {isArabic
              ? "استفسر عن تصميم غرفتك حسب الطلب"
              : "INQUIRE CUSTOM ROOM TAILORING"}

            <ArrowRight
              size={15}
              className={isArabic ? "rotate-180" : ""}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
