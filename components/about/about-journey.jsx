
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Hammer,
  Armchair,
  Building2,
  Award,
  Gem,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const milestones = [
  {
    year: "2011",
    title: "The Beginning",
    arabicTitle: "البداية",
    description:
      "Rua Sadiq Trading Co. began its journey in Riyadh with a vision to bring quality furniture and craftsmanship to customers.",
    arabicDescription:
      "بدأت شركة رواء صادق التجارية رحلتها في الرياض برؤية تهدف إلى تقديم أثاث عالي الجودة وحرفية متميزة للعملاء.",
    icon: Sparkles,
    side: "left",
  },
  {
    year: "2014",
    title: "Growing Our Craft",
    arabicTitle: "تطوير خبراتنا الحرفية",
    description:
      "Expanding our furniture expertise with a stronger focus on premium materials, skilled workmanship and customer satisfaction.",
    arabicDescription:
      "وسعنا خبراتنا في صناعة الأثاث مع التركيز بشكل أكبر على المواد الفاخرة والحرفية الماهرة ورضا العملاء.",
    icon: Hammer,
    side: "right",
  },
  {
    year: "2017",
    title: "Expanding Our Collection",
    arabicTitle: "توسيع مجموعتنا",
    description:
      "Introducing more furniture styles and bespoke solutions to serve different tastes, interiors and lifestyle needs.",
    arabicDescription:
      "قدمنا المزيد من أنماط الأثاث والحلول المصممة حسب الطلب لتلبية مختلف الأذواق والتصاميم الداخلية واحتياجات الحياة العصرية.",
    icon: Armchair,
    side: "left",
  },
  {
    year: "2020",
    title: "Stronger Project Capabilities",
    arabicTitle: "تعزيز قدراتنا في المشاريع",
    description:
      "Developing our approach to residential and commercial projects with a continued commitment to detail and quality.",
    arabicDescription:
      "طورنا أساليبنا في تنفيذ المشاريع السكنية والتجارية مع مواصلة التزامنا بأدق التفاصيل وأعلى معايير الجودة.",
    icon: Building2,
    side: "right",
  },
  {
    year: "2023",
    title: "A Commitment to Excellence",
    arabicTitle: "الالتزام بالتميز",
    description:
      "Strengthening our dedication to refined designs, reliable service and lasting relationships with our customers.",
    arabicDescription:
      "عززنا التزامنا بالتصاميم الراقية والخدمات الموثوقة وبناء علاقات طويلة الأمد مع عملائنا.",
    icon: Award,
    side: "left",
  },
  {
    year: "TODAY",
    arabicYear: "اليوم",
    title: "Continuing the Legacy",
    arabicTitle: "مواصلة المسيرة",
    description:
      "Moving forward with the same passion for craftsmanship while creating elegant and meaningful spaces for our customers.",
    arabicDescription:
      "نواصل مسيرتنا بالشغف نفسه نحو الحرفية المتميزة، ونعمل على ابتكار مساحات أنيقة وذات قيمة لعملائنا.",
    icon: Gem,
    side: "right",
  },
];

export default function AboutJourney() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#fbf6f4] px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
            {isArabic ? "رحلتنا" : "Our Journey"}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#172433] sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                14 عامًا من الحرفية
                <span className="text-[#c5a43a]"> والابتكار</span>
              </>
            ) : (
              <>
                14 Years of Craftsmanship
                <span className="text-[#c5a43a]"> & Innovation</span>
              </>
            )}
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            {isArabic
              ? "تمثل كل محطة في رحلتنا تفانينا في الجودة والتصميم المدروس والسعي المستمر نحو التميز."
              : "Every milestone represents our dedication to quality, thoughtful design and the pursuit of excellence."}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Center Line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-[#d9b83f]/50 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="relative grid grid-cols-[32px_1fr] gap-4 sm:grid-cols-[1fr_60px_1fr] sm:gap-4"
                >
                  {/* Timeline Icon */}
                  <div className="relative z-10 col-start-1 flex justify-center sm:col-start-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d9b83f] bg-[#172433] text-[#d9b83f] shadow-lg sm:h-11 sm:w-11">
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`col-start-2 row-start-1 ${
                      item.side === "left"
                        ? "sm:col-start-1 sm:row-start-1 sm:text-right"
                        : "sm:col-start-3 sm:row-start-1 sm:text-left"
                    }`}
                  >
                    <div className="rounded-2xl border border-[#eee4df] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                      <span className="inline-block rounded-full bg-[#d9b83f]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#a98925]">
                        {isArabic
                          ? item.arabicYear || item.year
                          : item.year}
                      </span>

                      <h3 className="mt-4 font-serif text-xl text-[#172433] sm:text-2xl">
                        {isArabic ? item.arabicTitle : item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-500">
                        {isArabic
                          ? item.arabicDescription
                          : item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
