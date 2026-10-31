
"use client";

import { Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const stats = [
  {
    value: "14+",
    label: "Years of Experience",
    arabicLabel: "سنوات من الخبرة",
  },
  {
    value: "1,200+",
    label: "Projects Completed",
    arabicLabel: "مشروع تم إنجازه",
  },
  {
    value: "10+",
    label: "Years of Partnership",
    arabicLabel: "سنوات من الشراكة",
  },
  {
    value: "100%",
    label: "Quality Commitment",
    arabicLabel: "الالتزام بالجودة",
  },
];

export default function AboutIntroduction() {
  const { isArabic } = useLanguage();

  return (
    <section
      id="our-story"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#fbf6f4] px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* COMPANY INTRODUCTION */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
              {isArabic
                ? "نبذة عن شركة رواء صادق التجارية"
                : "About Rua Sadiq Trading Co."}
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-[1.4] text-[#172433] sm:text-4xl lg:text-5xl">
              {isArabic ? (
                <>
                  إرث من الحرفية والإتقان،
                  <span className="text-[#c5a43a]">
                    {" "}ومستقبل من التميز.
                  </span>
                </>
              ) : (
                <>
                  A Legacy of Craftsmanship,
                  <span className="text-[#c5a43a]">
                    {" "}A Future of Excellence.
                  </span>
                </>
              )}
            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-base">
              {isArabic
                ? "تأسست شركة رواء صادق التجارية عام 2011 في قلب مدينة الرياض، وانطلقت بشغف واحد: تحويل المساحات من خلال الحرفية الاستثنائية وتصاميم الأثاث الخالدة."
                : "Established in 2011 in the heart of Riyadh, Rua Sadiq Trading Co. began with a singular passion: transforming spaces through exceptional craftsmanship and timeless furniture design."}
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
              {isArabic
                ? "من الأثاث الفاخر إلى التصاميم الداخلية المخصصة، نجمع بين الخامات الممتازة والحرفية الماهرة والاهتمام بأدق التفاصيل لنصنع مساحات تعكس الراحة والأناقة والتفرد."
                : "From luxury furniture to bespoke interiors, we bring together premium materials, skilled craftsmanship and attention to detail to create spaces that reflect comfort, elegance and individuality."}
            </p>

            {/* QUALITY COMMITMENT */}
            <div className="mt-7 flex items-start gap-3">
              <Award className="mt-1 shrink-0 text-[#c5a43a]" size={23} />
              <div>
                <h3 className="font-serif text-lg text-[#172433]">
                  {isArabic
                    ? "التزامنا بالجودة"
                    : "Our Commitment to Quality"}
                </h3>

                <p className="mt-1 text-sm leading-7 text-gray-500">
                  {isArabic
                    ? "يعكس كل مشروع تفانينا في الجودة والدقة وبناء علاقات طويلة الأمد مع عملائنا."
                    : "Every project reflects our dedication to quality, precision and lasting customer relationships."}
                </p>
              </div>
            </div>
          </div>

          {/* COMPANY IMAGE */}
          <div className="relative">
            <img
              src="/images/banners/about-us-hero-background.webp"
              alt={
                isArabic
                  ? "ورشة صناعة الأثاث والحرفية"
                  : "Furniture craftsmanship workshop"
              }
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[430px]"
            />

            <div className="absolute -bottom-5 right-4 rounded-xl bg-[#172433] px-5 py-4 text-white shadow-xl sm:right-7 sm:px-7">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#d9b83f]" size={27} />
                <div>
                  <p className="font-serif text-2xl text-[#d9b83f]">
                    {isArabic ? "منذ 2011" : "Since 2011"}
                  </p>

                  <p className="text-[10px] uppercase tracking-wider text-white/70">
                    {isArabic
                      ? "نصنع بإتقان وتميز"
                      : "Crafting with Excellence"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY STATISTICS */}
        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#eee4df] bg-white px-3 py-7 text-center shadow-sm"
            >
              <h3 className="font-serif text-2xl text-[#c5a43a] sm:text-3xl">
                {item.value}
              </h3>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">
                {isArabic ? item.arabicLabel : item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
