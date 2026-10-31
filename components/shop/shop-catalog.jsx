
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  Plus,
  ArrowRight,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const products = [
  {
    title: "The Royal Majlis",
    arabicTitle: "المجلس الملكي",
    category: "Majlis",
    arabicCategory: "مجالس",
    label: "LUXURY COLLECTION",
    arabicLabel: "مجموعة فاخرة",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/majlis.webp",
  },
  {
    title: "Signature Sofa",
    arabicTitle: "الأريكة المميزة",
    category: "Sofas",
    arabicCategory: "أرائك",
    label: "CUSTOM MADE",
    arabicLabel: "تصميم حسب الطلب",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/premium-sofa-set.webp",
  },
  {
    title: "The Imperial Chair",
    arabicTitle: "الكرسي الإمبراطوري",
    category: "Chairs",
    arabicCategory: "كراسي",
    label: "PREMIUM FURNITURE",
    arabicLabel: "أثاث فاخر",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/chairs-recliners.webp",
  },
  {
    title: "Modern Living Set",
    arabicTitle: "طقم المعيشة العصري",
    category: "Sofas",
    arabicCategory: "أرائك",
    label: "LIVING COLLECTION",
    arabicLabel: "مجموعة غرف المعيشة",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/king-size-sofa.webp",
  },
  {
    title: "Royal Comfort",
    arabicTitle: "الراحة الملكية",
    category: "Curtains",
    arabicCategory: "ستائر",
    label: "LUXURY COLLECTION",
    arabicLabel: "مجموعة فاخرة",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/curtains.webp",
  },
  {
    title: "The Classic Lounge",
    arabicTitle: "الاستراحة الكلاسيكية",
    category: "Curtain Rods",
    arabicCategory: "قضبان الستائر",
    label: "CUSTOM MADE",
    arabicLabel: "تصميم حسب الطلب",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/curtain-rods.webp",
  },
  {
    title: "Elegant Living",
    arabicTitle: "أناقة المعيشة",
    category: "Beds",
    arabicCategory: "أسرة",
    label: "PREMIUM FURNITURE",
    arabicLabel: "أثاث فاخر",
    badge: "FEATURED",
    arabicBadge: "مميز",
    image: "/images/categories/premium-bed.webp",
  },
  {
    title: "The Signature Collection",
    arabicTitle: "المجموعة المميزة",
    category: "Sofas",
    arabicCategory: "أرائك",
    label: "LIVING COLLECTION",
    arabicLabel: "مجموعة غرف المعيشة",
    badge: "NEW",
    arabicBadge: "جديد",
    image: "/images/categories/premium-sofa-set.webp",
  },
];

const categories = [
  { name: "All Products", arabicName: "جميع المنتجات" },
  { name: "Sofas", arabicName: "أرائك" },
  { name: "Majlis", arabicName: "مجالس" },
  { name: "Chairs", arabicName: "كراسي" },
  { name: "Curtains", arabicName: "ستائر" },
  { name: "Curtain Rods", arabicName: "قضبان الستائر" },
  { name: "Beds", arabicName: "أسرة" },
];

export default function ShopCatalog() {
  const { isArabic } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.arabicTitle.includes(searchTerm) ||
        product.arabicCategory.includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#fbf6f4] px-4 py-12 sm:px-[5%] sm:py-[75px]"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* SECTION HEADING */}

        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-3 block text-[9px] font-bold tracking-[2px] text-[#a88b3d] sm:text-[10px]">
            {isArabic ? "اكتشف مجموعتنا" : "EXPLORE OUR COLLECTION"}
          </span>

          <h2 className="font-serif text-[30px] text-[#24201b] sm:text-[42px]">
            {isArabic ? (
              <>
                تصفح <span className="text-[#b99a43]">أثاثنا</span>
              </>
            ) : (
              <>
                Browse Our <span className="text-[#b99a43]">Furniture</span>
              </>
            )}
          </h2>

          <span className="mx-auto mt-4 block h-[2px] w-12 bg-[#d9b84c]" />
        </div>

        {/* SEARCH BAR */}

        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className={`absolute top-1/2 -translate-y-1/2 text-[#9a9185] ${
                isArabic ? "right-4" : "left-4"
              }`}
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isArabic ? "ابحث عن الأثاث..." : "Search furniture..."
              }
              aria-label={isArabic ? "ابحث عن الأثاث" : "Search furniture"}
              className={`h-12 w-full rounded-md border border-[#e5ddd2] bg-white text-sm text-[#29241e] outline-none transition focus:border-[#c4a34b] ${
                isArabic ? "pl-4 pr-11" : "pl-11 pr-4"
              }`}
            />
          </div>

          <div className="flex h-12 items-center gap-2 rounded-md border border-[#e5ddd2] bg-white px-4 text-[10px] font-bold tracking-[1px] text-[#625b52]">
            <SlidersHorizontal size={16} />
            {isArabic ? "تصفية المجموعة" : "FILTER COLLECTION"}
          </div>
        </div>

        {/* CATEGORY FILTERS */}

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:mb-10 sm:flex-wrap sm:justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              aria-pressed={activeCategory === category.name}
              className={`shrink-0 rounded-md border px-4 py-2.5 text-[9px] font-bold tracking-[0.8px] transition sm:px-5 ${
                activeCategory === category.name
                  ? "border-[#d9b84c] bg-[#d9b84c] text-[#211e18]"
                  : "border-[#e5ddd2] bg-transparent text-[#625b52] hover:border-[#d9b84c]"
              }`}
            >
              {isArabic ? category.arabicName : category.name}
            </button>
          ))}
        </div>

        {/* RESULT COUNT */}

        <div className="mb-5 flex items-center justify-between border-b border-[#e6ded2] pb-3">
          <p className="text-[10px] tracking-[1px] text-[#77716a]">
            {isArabic
              ? `عرض ${filteredProducts.length} منتجات`
              : `SHOWING ${filteredProducts.length} PRODUCTS`}
          </p>

          <p className="text-[10px] text-[#77716a]">
            {isArabic ? "مجموعة أثاث فاخر" : "PREMIUM FURNITURE COLLECTION"}
          </p>
        </div>

        {/* PRODUCT GRID */}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <article
                key={`${product.title}-${index}`}
                className="min-w-0"
              >
                <div className="group relative isolate h-[220px] overflow-hidden rounded-[9px] bg-[#e7dfd5] sm:h-[280px] lg:h-[390px]">
                  <Image
                    src={product.image}
                    alt={isArabic ? product.arabicTitle : product.title}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                  />

                  <span className="absolute left-2.5 top-2.5 z-[2] rounded-[5px] bg-[#d9b84c] px-2 py-1.5 text-[8px] font-bold tracking-[0.7px] text-[#211e18] sm:left-[14px] sm:top-[14px] sm:px-[15px] sm:py-[10px] sm:text-[10px] sm:tracking-[1px]">
                    {isArabic ? product.arabicBadge : product.badge}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={
                      isArabic
                        ? `عرض ${product.arabicTitle}`
                        : `View ${product.title}`
                    }
                    className="absolute right-2.5 top-2.5 z-[3] grid h-[34px] w-[34px] place-items-center rounded-full border border-white/70 bg-black/25 text-white transition hover:border-[#d9b84c] hover:bg-[#d9b84c] hover:text-[#211e18] sm:right-[14px] sm:top-[14px] sm:h-[50px] sm:w-[50px]"
                  >
                    <Plus size={23} />
                  </button>

                  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black/50 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 left-3 z-[2] inline-flex items-center gap-2 text-[9px] font-bold tracking-[1px] text-white sm:bottom-[25px] sm:left-[25px] sm:translate-y-2 sm:text-[11px] sm:opacity-0 sm:transition-all sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                  >
                    {isArabic ? "اقرأ المزيد" : "READ MORE"}
                    <ArrowRight
                      size={15}
                      className={isArabic ? "rotate-180" : ""}
                    />
                  </button>
                </div>

                <div className="px-[2px] pt-3 sm:pt-[17px]">
                  <span className="mb-2 block text-[7px] font-bold tracking-[0.8px] text-[#a88b3d] sm:text-[10px] sm:tracking-[1.5px]">
                    {isArabic ? product.arabicLabel : product.label}
                  </span>

                  <h3 className="font-serif text-[15px] leading-tight text-[#29241e] sm:text-[22px]">
                    {isArabic ? product.arabicTitle : product.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="font-serif text-xl text-[#29241e]">
              {isArabic ? "لم يتم العثور على منتجات" : "No products found"}
            </p>

            <p className="mt-2 text-sm text-[#77716a]">
              {isArabic
                ? "جرّب البحث بكلمات أخرى أو اختر فئة مختلفة."
                : "Try another search or category."}
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-5 text-xs font-bold tracking-wider text-[#a88b3d] underline"
            >
              {isArabic ? "مسح عوامل التصفية" : "CLEAR FILTERS"}
            </button>
          </div>
        )}

        {/* BOTTOM INQUIRY */}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-[#e6ded2] pt-8 text-center sm:mt-14 sm:flex-row">
          <span className="font-serif text-[15px] text-[#625b52] sm:text-[18px]">
            {isArabic
              ? "هل تبحث عن قطعة مصممة خصيصاً لك؟"
              : "Looking for something made just for you?"}
          </span>

          <Link
            href="/contact"
            className="inline-flex min-h-[46px] items-center gap-3 rounded-[7px] bg-[#d9b84c] px-6 text-[10px] font-bold tracking-[1px] text-[#211e18] transition hover:bg-[#c5a43c]"
          >
            {isArabic ? "استفسر الآن" : "INQUIRE NOW"}
            <ArrowRight
              size={16}
              className={isArabic ? "rotate-180" : ""}
            />
          </Link>
        </div>
      </div>

      {/* PRODUCT POPUP */}

      {selectedProduct && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-[5px]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-[850px] grid-cols-1 overflow-y-auto rounded-xl bg-[#fbf6f4] sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label={isArabic ? "إغلاق النافذة" : "Close popup"}
              className="absolute right-3 top-3 z-[4] grid h-9 w-9 place-items-center rounded-full bg-white text-[#29241e] shadow"
            >
              <X size={20} />
            </button>

            <div className="relative h-[230px] sm:h-full sm:min-h-[380px]">
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

            <div className="flex flex-col items-start justify-center p-6 sm:p-10">
              <span className="text-[10px] font-bold tracking-[1.5px] text-[#a88b3d]">
                {isArabic
                  ? selectedProduct.arabicLabel
                  : selectedProduct.label}
              </span>

              <h2 className="mt-3 font-serif text-[28px] text-[#29241e] sm:text-[34px]">
                {isArabic
                  ? selectedProduct.arabicTitle
                  : selectedProduct.title}
              </h2>

              <p className="my-5 text-[13px] leading-[1.8] text-[#77716a]">
                {isArabic
                  ? "اكتشف أثاثاً أنيقاً مصنوعاً من خامات فاخرة مع اهتمام دقيق بالتفاصيل. تواصل معنا لمناقشة متطلباتك وخيارات التصميم حسب الطلب."
                  : "Discover elegant furniture crafted with premium materials and attention to detail. Contact us to discuss your requirements and customization options."}
              </p>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center gap-3 rounded-[7px] bg-[#d9b84c] px-5 text-[10px] font-bold tracking-[1px] text-[#211e18] transition hover:bg-[#c5a43c]"
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
