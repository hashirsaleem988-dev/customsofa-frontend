
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const features = [
  {
    id: "01",
    category: "10 YEARS IN KSA",
    arabicCategory: "10 سنوات في المملكة",
    title: "Riyadh Atelier Heritage",
    arabicTitle: "إرث ورشة الرياض",
    description: "Solid European oak & German beech timber.",
    arabicDescription: "أخشاب البلوط الأوروبي الصلب والزان الألماني.",
  },
  {
    id: "02",
    category: "BESPOKE INSTALLATION",
    arabicCategory: "تركيب حسب الطلب",
    title: "White-Glove Saudi Fitting",
    arabicTitle: "خدمة تركيب فاخرة في السعودية",
    description: "White-glove delivery & seamless installation.",
    arabicDescription: "توصيل فاخر وتركيب متكامل بكل سهولة.",
  },
  {
    id: "03",
    category: "EXPORT-READY FOAM",
    arabicCategory: "إسفنج بمعايير التصدير",
    title: "Density 60 Foam Guarantee",
    arabicTitle: "ضمان إسفنج بكثافة 60",
    description: "Density 60 medical foam 10-year warranty.",
    arabicDescription: "إسفنج طبي بكثافة 60 مع ضمان لمدة 10 سنوات.",
  },
  {
    id: "04",
    category: "BESPOKE JOINERY",
    arabicCategory: "أعمال نجارة مخصصة",
    title: "Millimeter Custom Room Fit",
    arabicTitle: "تصميم يناسب الغرفة بدقة المليمتر",
    description: "Tailored precisely to your room floorplan.",
    arabicDescription: "تصميم مخصص بدقة ليتناسب مع مخطط غرفتك.",
  },
];

export default function FeatureShowcase() {
  const { isArabic } = useLanguage();

  const [active, setActive] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  const visibleFeatures = [
    features[(active + 3) % 4],
    features[active],
    features[(active + 1) % 4],
  ];

  const whatsappMessage = isArabic
    ? "مرحباً، أنا مهتم بالأثاث وخدمات التصميم الداخلي لديكم. يرجى مشاركة المزيد من التفاصيل."
    : "Hello, I am interested in your furniture and interior services. Please share more details.";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#F8F6F0] px-4 py-8 sm:px-5 sm:py-12 md:px-10 lg:px-16"
    >
      <div
        className="
          relative mx-auto w-full max-w-[1630px]
          overflow-hidden rounded-[20px] sm:rounded-[28px]
          border border-[#D6B84F]/30
          bg-[#101C2A]
          px-4 py-8 sm:px-8 sm:py-12 lg:px-12
          shadow-[0_20px_60px_rgba(15,25,40,0.12)]
        "
        style={{
          background: `
            radial-gradient(
              ellipse 85% 90% at 50% 45%,
              #1C2B3A 0%,
              #142332 55%,
              #0B1723 100%
            )
          `,
        }}
      >
        {/* Heading */}
        <div className="relative z-10 mb-6 text-center sm:mb-8">
          <h2 className="font-serif text-[clamp(21px,5vw,34px)] font-medium leading-tight tracking-[-0.5px] text-[#E0BD4F]">
            {isArabic ? (
              <>
                تصميم{" "}
                <span className="text-[#F0D36E]">الفخامة الملكية</span>
                {" "}للمنازل السعودية
              </>
            ) : (
              <>
                Tailoring{" "}
                <span className="text-[#F0D36E]">Royal Luxury</span>
                {" "}for Saudi Homes
              </>
            )}
          </h2>

          <p className="mx-auto mt-2 max-w-[330px] text-[10px] leading-[1.6] tracking-[0.4px] text-white/55 sm:max-w-none sm:text-[12px]">
            {isArabic
              ? "نحوّل المنازل السعودية إلى تحف فنية مصممة بأناقة وفخامة."
              : "Transforming Saudi homes into bespoke masterpieces of elegance."}
          </p>
        </div>

        {/* Three-card carousel */}
        <div className="relative z-10 mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-4 md:grid-cols-[1fr_1.12fr_1fr] md:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleFeatures.map((feature, index) => {
              const isActive = index === 1;

              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -18 : 18,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.68,
                    x: 0,
                    scale: isActive ? 1 : 0.97,
                  }}
                  exit={{
                    opacity: 0,
                    x: index === 0 ? 18 : -18,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                    layout: {
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className={`
                    relative flex min-h-[140px] flex-col
                    justify-center overflow-hidden
                    rounded-[13px] border px-4 py-5
                    transition-colors duration-700
                    ${
                      isActive
                        ? "border-[#D9B83F] bg-[#253344]/90 shadow-[0_0_28px_rgba(213,177,55,0.20)] md:min-h-[185px] md:px-7"
                        : "border-white/[0.08] bg-[#263442]/55 md:min-h-[150px]"
                    }
                    sm:px-5 sm:py-6
                  `}
                >
                  {/* Card top line */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-serif text-[11px] text-[#DDBB4B]">
                      {feature.id}
                    </span>

                    <div
                      className={`h-px transition-all duration-700 ${
                        isActive
                          ? "w-[45%] bg-[#DDBB4B]"
                          : "w-[25%] bg-[#DDBB4B]/40"
                      }`}
                    />
                  </div>

                  <p className="mb-2 text-[8px] font-semibold tracking-[1.2px] text-[#DDBB4B] sm:text-[9px]">
                    {isArabic
                      ? feature.arabicCategory
                      : feature.category}
                  </p>

                  <h3 className="font-serif text-[17px] leading-snug text-[#F4F0E7] sm:text-[19px]">
                    {isArabic ? feature.arabicTitle : feature.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.6] text-white/55 sm:text-[11px]">
                    {isArabic
                      ? feature.arabicDescription
                      : feature.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="relative z-10 mt-6 flex items-center justify-center gap-[5px] sm:mt-7">
          {features.map((feature, index) => (
            <motion.span
              key={feature.id}
              animate={{
                width: active === index ? 20 : 5,
                opacity: active === index ? 1 : 0.4,
                backgroundColor:
                  active === index ? "#E0BD4F" : "#A5A5A5",
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="h-[4px] rounded-full"
            />
          ))}
        </div>

        {/* Bottom information */}
        <div className="relative z-10 mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.10] pt-5 sm:mt-8 sm:flex-row">
          <p className="text-center text-[9px] leading-relaxed text-white/50 sm:text-left">
            {isArabic
              ? "اكتشف أجود الأخشاب والأقمشة وإسفنج بكثافة 60."
              : "Discover crafted woods, fabrics & Density 60 foams."}
          </p>

          {/* WhatsApp Inquiry Button */}
          <a
            href={`https://wa.me/966550834729?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              isArabic
                ? "استفسر عن الأثاث وخدمات التصميم الداخلي عبر واتساب"
                : "Inquire about furniture and interior services on WhatsApp"
            }
            className="
              inline-flex min-h-[42px] items-center justify-center gap-2
              rounded-full bg-[#DDBB39]
              px-5 py-3 text-[10px] font-bold
              tracking-[0.5px] text-[#17202A]
              transition-all duration-300
              hover:bg-[#EACB5C] hover:shadow-lg hover:scale-105
            "
          >
            <MessageCircle size={14} />
            {isArabic ? "استفسر عبر واتساب" : "INQUIRE ON WHATSAPP"}
            <ArrowRight
              size={14}
              className={isArabic ? "rotate-180" : ""}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
