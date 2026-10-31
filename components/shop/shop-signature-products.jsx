
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const featuredProducts = [
  {
    id: 1,
    tab: "Premium Sofa",
    arabicTab: "أريكة فاخرة",
    title: "Premium Velvet Sofa Set — 5 Seater",
    arabicTitle: "طقم أريكة مخملية فاخرة — 5 مقاعد",
    description:
      "Luxury bespoke premium sofa set crafted with premium materials, designed to bring sophistication, elegance and exceptional comfort to your living space.",
    arabicDescription:
      "طقم أريكة فاخر مصنوع حسب الطلب باستخدام أجود الخامات، ليضيف الرقي والأناقة والراحة الاستثنائية إلى مساحة معيشتك.",
    image: "/images/categories/premium-sofa-set.webp",
    badge: "10-Year Warranty",
    arabicBadge: "ضمان 10 سنوات",
    tag: "PREMIUM SOFA",
    arabicTag: "أريكة فاخرة",
    specifications: [
      "D60 Medical Foam",
      "German Solid Beechwood",
      "10 Year Warranty",
    ],
    arabicSpecifications: [
      "إسفنج طبي D60",
      "خشب زان ألماني صلب",
      "ضمان لمدة 10 سنوات",
    ],
  },
  {
    id: 2,
    tab: "Majlis",
    arabicTab: "مجلس",
    title: "Traditional Saudi Ground Majlis Suite",
    arabicTitle: "طقم مجلس أرضي سعودي تقليدي",
    description:
      "A beautifully crafted custom majlis designed for Saudi homes, combining traditional elegance with modern comfort and premium finishing.",
    arabicDescription:
      "مجلس مصمم حسب الطلب للمنازل السعودية، يجمع بين الأناقة التقليدية والراحة العصرية والتشطيبات الفاخرة.",
    image: "/images/categories/majlis.webp",
    badge: "10-Year Warranty",
    arabicBadge: "ضمان 10 سنوات",
    tag: "LUXURY MAJLIS",
    arabicTag: "مجلس فاخر",
    specifications: [
      "D60 Medical Foam",
      "Premium Upholstery",
      "Custom Made Design",
    ],
    arabicSpecifications: [
      "إسفنج طبي D60",
      "تنجيد فاخر",
      "تصميم حسب الطلب",
    ],
  },
  {
    id: 3,
    tab: "Curtains",
    arabicTab: "ستائر",
    title: "Royal Velvet Blackout Drapery",
    arabicTitle: "ستائر مخملية ملكية عازلة للضوء",
    description:
      "Custom-tailored blackout and sheer curtains designed to complement your interiors with privacy, elegance and timeless style.",
    arabicDescription:
      "ستائر عازلة للضوء وستائر شفافة مصممة حسب الطلب لتكمل ديكور منزلك وتوفر الخصوصية والأناقة بأسلوب خالد.",
    image: "/images/categories/curtains.webp",
    badge: "PREMIUM QUALITY",
    arabicBadge: "جودة فائقة",
    tag: "PREMIUM CURTAINS",
    arabicTag: "ستائر فاخرة",
    specifications: [
      "Premium Velvet Fabric",
      "Custom Tailored Design",
      "Multiple Fabric Options",
    ],
    arabicSpecifications: [
      "قماش مخملي فاخر",
      "تصميم وتفصيل حسب الطلب",
      "خيارات متعددة من الأقمشة",
    ],
  },
  {
    id: 4,
    tab: "Premium Bed",
    arabicTab: "سرير فاخر",
    title: "Imperial Platform Bed — Dark Walnut",
    arabicTitle: "سرير إمبراطوري بتصميم منخفض — جوز داكن",
    description:
      "A luxurious bed design crafted with quality materials and refined detailing to create a comfortable and elegant bedroom.",
    arabicDescription:
      "تصميم سرير فاخر مصنوع من خامات عالية الجودة وتفاصيل أنيقة لخلق غرفة نوم مريحة وراقية.",
    image: "/images/categories/premium-bed.webp",
    badge: "PREMIUM QUALITY",
    arabicBadge: "جودة فائقة",
    tag: "PREMIUM BED",
    arabicTag: "سرير فاخر",
    specifications: [
      "Premium Upholstery",
      "Solid Wood Structure",
      "Custom Size Options",
    ],
    arabicSpecifications: [
      "تنجيد فاخر",
      "هيكل من الخشب الصلب",
      "خيارات مقاسات حسب الطلب",
    ],
  },
];

export default function ShopSignatureProducts() {
  const [activeProduct, setActiveProduct] = useState(0);
  const { isArabic } = useLanguage();

  const product = featuredProducts[activeProduct];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#fbf6f4] px-4 py-12 sm:px-[5%] sm:py-[75px]"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* MAIN DARK SECTION */}
        <div className="relative overflow-hidden rounded-[12px] bg-[#0d171e] p-4 shadow-xl sm:p-6 lg:p-8">

          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c9a63b]/[0.07] blur-[80px]" />

          {/* SECTION HEADING */}
          <div className="relative mb-6 border-b border-white/[0.08] pb-5 sm:mb-7">
            <span className="mb-2 block text-[8px] font-bold tracking-[2px] text-[#d9b83f] sm:text-[9px]">
              {isArabic
                ? "تشكيلة أثاث حصرية"
                : "EXCLUSIVE FURNITURE SELECTION"}
            </span>

            <h2 className="font-serif text-[23px] font-normal text-white sm:text-[30px]">
              {isArabic ? (
                <>
                  منتجاتنا{" "}
                  <span className="text-[#d9b83f]">
                    المميزة والحصرية
                  </span>
                </>
              ) : (
                <>
                  Featured{" "}
                  <span className="text-[#d9b83f]">
                    Signature Products
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <div className="relative mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {featuredProducts.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveProduct(index)}
                className={`flex min-h-[58px] items-center gap-2 rounded-[8px] border px-2.5 py-2 text-start transition-all duration-300 sm:min-h-[65px] sm:px-3 ${
                  activeProduct === index
                    ? "border-[#d9b83f] bg-[#d9b83f] text-[#171a1c]"
                    : "border-white/[0.07] bg-[#19232b] text-white hover:border-[#d9b83f]/60"
                }`}
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-white/10 sm:h-11 sm:w-11">
                  <Image
                    src={item.image}
                    alt={isArabic ? item.arabicTab : item.tab}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <span
                    className={`mb-1 block text-[7px] font-bold tracking-[1px] ${
                      activeProduct === index
                        ? "text-[#29241e]/65"
                        : "text-[#d9b83f]"
                    }`}
                  >
                    0{item.id}
                  </span>

                  <span className="block truncate text-[9px] font-bold sm:text-[11px]">
                    {isArabic ? item.arabicTab : item.tab}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* PRODUCT DETAIL CARD */}
          <div className="relative grid grid-cols-1 gap-5 rounded-[10px] border border-white/[0.06] bg-[#18232c] p-3 sm:p-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-6 lg:p-5">

            {/* PRODUCT IMAGE */}
            <div className="relative h-[230px] overflow-hidden rounded-[8px] bg-[#26313a] sm:h-[320px] lg:h-[360px]">
              <Image
                key={product.image}
                src={product.image}
                alt={isArabic ? product.arabicTitle : product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* WARRANTY BADGE */}
              <div
                className={`absolute top-3 flex items-center gap-1.5 rounded-full border border-[#d9b83f]/40 bg-[#101a20]/90 px-3 py-1.5 text-[8px] font-bold tracking-[0.6px] text-[#e0bd4b] sm:top-4 sm:text-[9px] ${
                  isArabic ? "right-3 sm:right-4" : "left-3 sm:left-4"
                }`}
              >
                <ShieldCheck size={13} />
                {isArabic ? product.arabicBadge : product.badge}
              </div>

              {/* IMAGE LABEL */}
              <span
                className={`absolute bottom-3 rounded-full bg-[#d9b83f] px-3 py-1.5 text-[8px] font-bold tracking-[1px] text-[#1b1b18] ${
                  isArabic ? "right-3" : "left-3"
                }`}
              >
                {isArabic ? product.arabicTag : product.tag}
              </span>
            </div>

            {/* PRODUCT CONTENT */}
            <div className="flex flex-col justify-center px-1 py-2 sm:px-3 lg:py-5">

              <span className="mb-2 text-[8px] font-bold tracking-[1.5px] text-[#d9b83f] sm:text-[9px]">
                {isArabic
                  ? `المجموعة المميزة / 0${product.id}`
                  : `SIGNATURE COLLECTION / 0${product.id}`}
              </span>

              <h3 className="max-w-[480px] font-serif text-[24px] leading-[1.5] text-white sm:text-[30px] lg:text-[34px]">
                {isArabic ? product.arabicTitle : product.title}
              </h3>

              <p className="mt-3 max-w-[490px] text-[11px] leading-[1.9] text-[#aab2b8] sm:text-[12px]">
                {isArabic
                  ? product.arabicDescription
                  : product.description}
              </p>

              {/* SPECIFICATIONS */}
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <span className="mb-3 block text-[8px] font-bold tracking-[1.2px] text-[#d9b83f] sm:text-[9px]">
                  {isArabic
                    ? "مواصفات التفصيل والحرفية"
                    : "TAILORING & CRAFT SPECIFICATIONS"}
                </span>

                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                  {(isArabic
                    ? product.arabicSpecifications
                    : product.specifications
                  ).map((specification) => (
                    <div
                      key={specification}
                      className="flex items-center gap-2 text-[9px] text-[#d0d4d6] sm:text-[10px]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-[#d9b83f]" />
                      {specification}
                    </div>
                  ))}
                </div>
              </div>

              {/* INQUIRY BUTTON */}
              <div className="mt-6 flex">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[7px] bg-[#d9b83f] px-4 text-[8px] font-bold tracking-[0.8px] text-[#1b1b18] transition-all duration-300 hover:gap-3 hover:bg-[#c5a43c] sm:min-h-[47px] sm:px-5 sm:text-[9px]"
                >
                  <MessageSquare size={14} />
                  {isArabic ? "استفسر عن المنتج" : "INQUIRE FEATURED ITEM"}
                  <ArrowRight
                    size={14}
                    className={isArabic ? "rotate-180" : ""}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM NOTE */}
          <div className="relative mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-4 text-center sm:flex-row sm:text-start">
            <p className="text-[9px] leading-[1.7] text-[#929da4]">
              {isArabic
                ? "يمكن تخصيص كل قطعة لتتناسب مع مساحتك وذوقك الخاص."
                : "Every piece can be customized to match your space and style."}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[1px] text-[#d9b83f] transition hover:gap-3"
            >
              {isArabic
                ? "خصص أثاثك حسب طلبك"
                : "CUSTOMIZE YOUR FURNITURE"}
              <ArrowRight
                size={14}
                className={isArabic ? "rotate-180" : ""}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
