
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const materials = [
  {
    title: "Sofa Fabrics & Leather",
    arabicTitle: "أقمشة الأرائك والجلود",
    image: "/images/materials/sofa-leather.webp",
    tab: "sofa",
  },
  {
    title: "Curtain Fabrics & Drapery",
    arabicTitle: "أقمشة الستائر والمفروشات",
    image: "/images/materials/curtain-fabrics.webp",
    tab: "curtain",
  },
  {
    title: "Solid Timber Woods",
    arabicTitle: "الأخشاب الطبيعية الصلبة",
    image: "/images/materials/solid-timber-wood.webp",
    tab: "timber",
  },
  {
    title: "High-Density Foams",
    arabicTitle: "الإسفنج عالي الكثافة",
    image: "/images/materials/high-density-foam.webp",
    tab: "foam",
  },
];

export default function MaterialsShowcase() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#f7eee5] px-4 py-[38px] sm:px-[5%] sm:py-12 sm:pb-[55px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADING */}

        <div className="mb-[23px] text-center sm:mb-[27px]">
          <h2 className="font-serif text-[23px] font-bold leading-[1.2] tracking-[0.3px] text-[#29232b] sm:text-[clamp(25px,3vw,31px)]">
            {isArabic ? "مواد خام معتمدة" : "CERTIFIED RAW MATERIALS"}
          </h2>

          <p className="mt-1.5 text-[11px] leading-[1.6] text-[#817b7b] sm:text-[13px]">
            {isArabic
              ? "تصفح جميع عينات الأقمشة المعتمدة الـ27، وأخشاب البلوط، والإسفنج بكثافة 60."
              : "Browse all 27 certified fabric swatches, oak timber, and density-60 foams."}
          </p>
        </div>

        {/* MATERIAL CARDS */}

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {materials.map((item) => (
            <Link
              href={`/materials?tab=${item.tab}`}
              className="group relative isolate block h-[190px] min-w-0 overflow-hidden rounded-[10px] bg-[#d9d0c5] shadow-[0_4px_8px_rgba(35,25,15,0.12)] sm:h-[250px] sm:rounded-[14px]"
              key={item.tab}
            >
              <Image
                src={item.image}
                alt={isArabic ? item.arabicTitle : item.title}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1000px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/[0.02] via-black/[0.12] to-black/[0.82] transition-all duration-400 group-hover:from-black/[0.04] group-hover:via-black/[0.28] group-hover:to-black/[0.88]" />

              {/* CARD CONTENT */}

              <div className="absolute bottom-3 left-[10px] right-[10px] z-[2] flex items-center justify-between gap-2 text-white sm:bottom-[17px] sm:left-[17px] sm:right-[17px]">
                <h3 className="max-w-[85%] font-serif text-[12px] font-bold leading-[1.35] transition-colors duration-300 group-hover:text-[#e2c45d] sm:text-[15px]">
                  {isArabic ? item.arabicTitle : item.title}
                </h3>

                <ArrowRight
                  size={16}
                  className={`shrink-0 text-[#d9b84c] transition-transform duration-300 group-hover:translate-x-[5px] ${
                    isArabic ? "rotate-180" : ""
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* EXPLORE BUTTON */}

        <div className="mt-[25px] flex justify-center sm:mt-[34px]">
          <Link
            href="/materials"
            className="inline-flex min-h-[42px] items-center justify-center gap-[7px] rounded-[10px] border border-[#d9b84c] bg-[#d9b84c] px-[13px] text-[9px] font-extrabold tracking-[0.7px] text-[#29231b] shadow-[0_3px_7px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c5a43c] hover:bg-[#c5a43c] sm:min-h-[43px] sm:gap-[10px] sm:px-[21px] sm:text-[10px]"
          >
            <Eye size={15} />
            {isArabic ? "استكشف جميع العينات الـ27" : "EXPLORE ALL 27 SWATCHES"}
            <ArrowRight
              size={16}
              className={isArabic ? "rotate-180" : ""}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
