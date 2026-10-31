
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const products = [
  {
    title: "The Royal Majlis",
    arabicTitle: "المجلس الملكي",
    category: "LUXURY COLLECTION",
    arabicCategory: "مجموعة فاخرة",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/majlis.webp",
  },
  {
    title: "Signature Sofa",
    arabicTitle: "الأريكة المميزة",
    category: "CUSTOM MADE",
    arabicCategory: "تصميم حسب الطلب",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/premium-sofa-set.webp",
  },
  {
    title: "The Imperial Chair",
    arabicTitle: "الكرسي الإمبراطوري",
    category: "PREMIUM FURNITURE",
    arabicCategory: "أثاث فاخر",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/chairs-recliners.webp",
  },
  {
    title: "Modern Living Set",
    arabicTitle: "طقم المعيشة العصري",
    category: "LIVING COLLECTION",
    arabicCategory: "مجموعة غرف المعيشة",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/king-size-sofa.webp",
  },
  {
    title: "Royal Comfort",
    arabicTitle: "الراحة الملكية",
    category: "LUXURY COLLECTION",
    arabicCategory: "مجموعة فاخرة",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/curtains.webp",
  },
  {
    title: "The Classic Lounge",
    arabicTitle: "الاستراحة الكلاسيكية",
    category: "CUSTOM MADE",
    arabicCategory: "تصميم حسب الطلب",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/curtain-rods.webp",
  },
  {
    title: "Elegant Living",
    arabicTitle: "أناقة المعيشة",
    category: "PREMIUM FURNITURE",
    arabicCategory: "أثاث فاخر",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/premium-bed.webp",
  },
  {
    title: "The Signature Collection",
    arabicTitle: "المجموعة المميزة",
    category: "LIVING COLLECTION",
    arabicCategory: "مجموعة غرف المعيشة",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/premium-sofa-set.webp",
  },
];

export default function MasterpieceCollection() {
  const { isArabic } = useLanguage();

  const [selectedProduct, setSelectedProduct] = useState(null);

  // ADD PRODUCT TO HEADER INQUIRY BAG
  const addToInquiry = (product) => {
    window.dispatchEvent(
      new CustomEvent("add-inquiry", {
        detail: {
          title: product.title,
          image: product.image,
          category: product.category,
        },
      })
    );
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#fbf6f4] px-4 py-12 sm:px-[5%] sm:py-[75px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* SECTION HEADING */}

        <div className="mb-[30px] text-center sm:mb-[42px]">
          <span className="mb-[13px] block text-[9px] font-bold tracking-[2px] text-[#a88b3d] sm:text-[10px] sm:tracking-[2.5px]">
            {isArabic
              ? "صُنع لحياة استثنائية"
              : "CRAFTED FOR EXCEPTIONAL LIVING"}
          </span>

          <h2 className="font-serif text-[30px] font-normal leading-[1.15] text-[#24201b] sm:text-[clamp(30px,4vw,46px)]">
            {isArabic ? (
              <>
                مجموعة <span className="text-[#b99a43]">التحف الفنية</span>
              </>
            ) : (
              <>
                The <span className="text-[#b99a43]">Masterpiece</span> Collection
              </>
            )}
          </h2>

          <span className="mx-auto my-[17px] block h-[2px] w-12 bg-[#d9b84c]" />

          <p className="mx-auto max-w-[550px] text-[12px] leading-[1.8] text-[#77716a] sm:text-[13px]">
            {isArabic
              ? "اكتشف قطع الأثاث الخالدة المصممة بعناية لتضفي الأناقة والراحة على منزلك."
              : "Discover timeless furniture pieces, thoughtfully designed to bring elegance and comfort into your home."}
          </p>
        </div>

        {/* PRODUCT GRID */}

        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-[18px] sm:gap-y-[30px] lg:grid-cols-4">
          {products.map((product, index) => (
            <article className="min-w-0" key={index}>
              <div className="group relative isolate h-[220px] overflow-hidden rounded-[8px] bg-[#e7dfd5] sm:h-[280px] lg:h-[310px]">
                <Image
                  src={product.image}
                  alt={isArabic ? product.arabicTitle : product.title}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />

                {/* BADGE */}

                <span className="absolute left-2.5 top-2.5 z-[2] rounded-[5px] bg-[#d9b84c] px-2 py-1.5 text-[8px] font-bold tracking-[0.7px] text-[#211e18] sm:left-[14px] sm:top-[14px] sm:px-[11px] sm:py-[7px] sm:text-[9px] sm:tracking-[1px]">
                  {isArabic ? product.arabicBadge : product.badge}
                </span>

                {/* PLUS BUTTON - ADD TO INQUIRY BAG */}

                <button
                  type="button"
                  className="absolute right-2.5 top-2.5 z-[3] grid h-[30px] w-[30px] place-items-center rounded-full border border-white/70 bg-black/25 text-white transition-all duration-300 hover:border-[#d9b84c] hover:bg-[#d9b84c] hover:text-[#211e18] sm:right-[13px] sm:top-[13px] sm:h-[34px] sm:w-[34px]"
                  aria-label={
                    isArabic
                      ? `أضف ${product.arabicTitle} إلى قائمة الاستفسارات`
                      : `Add ${product.title} to inquiry list`
                  }
                  onClick={() => addToInquiry(product)}
                >
                  <Plus size={18} />
                </button>

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black/50 opacity-100 transition-opacity duration-400 sm:opacity-0 sm:group-hover:opacity-100" />

                {/* READ MORE */}

                <button
                  type="button"
                  className="absolute bottom-3 left-3 z-[2] inline-flex translate-y-0 items-center gap-2 text-[8px] font-bold tracking-[0.7px] text-white opacity-100 transition-all duration-300 sm:bottom-[17px] sm:left-[17px] sm:translate-y-2 sm:text-[10px] sm:tracking-[1px] sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                  onClick={() => setSelectedProduct(product)}
                >
                  {isArabic ? "اقرأ المزيد" : "READ MORE"}
                  <ArrowRight
                    size={14}
                    className={isArabic ? "rotate-180" : ""}
                  />
                </button>
              </div>

              {/* PRODUCT INFO */}

              <div className="px-[2px] pt-3 sm:pt-[15px]">
                <span className="mb-[7px] block text-[7px] font-bold tracking-[0.8px] text-[#a88b3d] sm:text-[9px] sm:tracking-[1.5px]">
                  {isArabic ? product.arabicCategory : product.category}
                </span>

                <h3 className="font-serif text-[14px] font-normal leading-tight text-[#29241e] sm:text-[19px]">
                  {isArabic ? product.arabicTitle : product.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM INQUIRY */}

        <div className="mt-9 flex flex-col items-center justify-center gap-4 border-t border-[#e6ded2] pt-7 text-center sm:mt-12 sm:flex-row sm:gap-[22px]">
          <span className="font-serif text-[15px] text-[#625b52] sm:text-[17px]">
            {isArabic
              ? "هل تبحث عن قطعة مصممة خصيصاً لك؟"
              : "Looking for something made just for you?"}
          </span>

          <Link
            href="/contact"
            className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-[#d9b84c] px-6 text-[10px] font-bold tracking-[1px] text-[#211e18] transition-all duration-300 hover:gap-[17px] hover:bg-[#c5a43c] sm:min-h-12 sm:px-[23px]"
          >
            {isArabic ? "استفسر الآن" : "INQUIRE NOW"}
            <ArrowRight
              size={16}
              className={isArabic ? "rotate-180" : ""}
            />
          </Link>
        </div>
      </div>

      {/* PRODUCT DETAIL POPUP */}

      {selectedProduct && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-[5px] sm:p-5"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-[850px] grid-cols-1 overflow-y-auto rounded-xl bg-[#fbf6f4] sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="absolute right-3 top-3 z-[4] grid h-9 w-9 place-items-center rounded-full bg-white text-[#29241e] shadow-sm"
              onClick={() => setSelectedProduct(null)}
              aria-label={isArabic ? "إغلاق النافذة" : "Close popup"}
            >
              <X size={20} />
            </button>

            {/* POPUP IMAGE */}

            <div className="relative h-[230px] min-h-[230px] sm:h-auto sm:min-h-[380px]">
              <Image
                src={selectedProduct.image}
                alt={
                  isArabic
                    ? selectedProduct.arabicTitle
                    : selectedProduct.title
                }
                fill
                sizes="(max-width: 700px) 90vw, 450px"
                className="object-cover"
              />
            </div>

            {/* POPUP CONTENT */}

            <div className="flex flex-col items-start justify-center p-6 sm:p-[42px]">
              <span className="text-[9px] font-bold tracking-[1.5px] text-[#a88b3d] sm:text-[10px]">
                {isArabic
                  ? selectedProduct.arabicCategory
                  : selectedProduct.category}
              </span>

              <h2 className="mt-3 font-serif text-[26px] font-normal text-[#29241e] sm:text-[32px]">
                {isArabic
                  ? selectedProduct.arabicTitle
                  : selectedProduct.title}
              </h2>

              <p className="my-4 text-[12px] leading-[1.8] text-[#77716a] sm:my-[16px] sm:mb-[25px] sm:text-[13px]">
                {isArabic
                  ? "صُممت هذه القطعة باستخدام مواد فاخرة واهتمام بأدق التفاصيل، لتضفي الأناقة الخالدة والراحة على مساحة معيشتك."
                  : "Crafted with premium materials and attention to detail, bringing timeless elegance and comfort to your living space."}
              </p>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[7px] bg-[#d9b84c] px-5 text-[10px] font-bold tracking-[1px] text-[#211e18] transition-all duration-300 hover:gap-[17px] hover:bg-[#c5a43c]"
              >
                {isArabic ? "استفسر الآن" : "INQUIRE NOW"}
                <ArrowRight
                  size={16}
                  className={isArabic ? "rotate-180" : ""}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
