
"use client";

import { Award, House, ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const stats = [
  {
    icon: Award,
    number: "14+",
    label: "YEARS EXPERIENCE",
    arabicLabel: "سنوات من الخبرة",
  },
  {
    icon: House,
    number: "1,200+",
    label: "VILLAS FITTED",
    arabicLabel: "فيلا تم تجهيزها",
  },
  {
    icon: ShieldCheck,
    number: "10 Years",
    arabicNumber: "10 سنوات",
    label: "FOAM WARRANTY",
    arabicLabel: "ضمان الإسفنج",
  },
  {
    icon: Star,
    number: "100%",
    label: "SAUDI QUALITY",
    arabicLabel: "جودة سعودية",
  },
];

export default function StatusBar() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full border-b border-[#E8E4DC] bg-[#F8F6F0] px-4 py-5 sm:px-6 sm:py-[30px] md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                group flex min-h-[112px] flex-col
                items-center justify-center
                rounded-[18px] border border-[#EEEEEE]
                bg-white px-2 py-4
                shadow-[0_1px_3px_rgba(0,0,0,0.07)]
                transition-all duration-300 ease-in-out
                hover:-translate-y-1
                hover:border-[#E5C66B]
                hover:shadow-[0_6px_14px_rgba(0,0,0,0.10)]
                sm:min-h-[130px] sm:rounded-[25px] sm:px-5 sm:py-5
              "
            >
              <Icon
                size={24}
                strokeWidth={1.6}
                className="mb-2 text-[#DDBA4D] transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:h-7 sm:w-7"
              />

              <h3 className="whitespace-nowrap font-serif text-[23px] font-medium leading-none text-[#D5A934] sm:text-[28px]">
                {isArabic && item.arabicNumber
                  ? item.arabicNumber
                  : item.number}
              </h3>

              <p className="mt-2 text-center text-[8px] font-normal tracking-[0.7px] text-[#45515F] sm:text-[10px] sm:tracking-[1px]">
                {isArabic ? item.arabicLabel : item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
