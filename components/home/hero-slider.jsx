
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const slides = [
  {
    id: 1,
    words: ["KING CHAIR", "CARVED OAK"],
    arabicWords: ["كرسي ملكي", "خشب البلوط"],
    backgroundLeft: "ROYAL",
    backgroundRight: "CHAIR",
    description:
      "Artisanal Carved Royal Chairs Crafted with Pure Natural Wood & Luxury Velvet",
    arabicDescription:
      "كراسي ملكية منحوتة بحرفية عالية، مصنوعة من الخشب الطبيعي الفاخر ومغطاة بالمخمل الفاخر",
    image: "/images/hero/king-chair.webp",
    button: "EXPLORE ROYAL CHAIRS",
    arabicButton: "اكتشف الكراسي الملكية",
    link: "/shop?category=chairs-recliners",
  },
  {
    id: 2,
    words: ["SOFA SETS", "CUSTOM DESIGN"],
    arabicWords: ["أطقم الأرائك", "تصميم حسب الطلب"],
    backgroundLeft: "LUXURY",
    backgroundRight: "SOFA",
    description:
      "Complete Custom Sofa Sets Crafted with High-Density Foam & World Fabrics",
    arabicDescription:
      "أطقم أرائك مصممة حسب الطلب، باستخدام إسفنج عالي الكثافة وأقمشة عالمية فاخرة",
    image: "/images/hero/custom-sofa.webp",
    button: "EXPLORE SOFA SETS",
    arabicButton: "اكتشف أطقم الأرائك",
    link: "/shop?category=premium-sofas",
  },
  {
    id: 3,
    words: ["ARMCHAIRS", "ELEGANCE"],
    arabicWords: ["كراسي بذراعين", "الأناقة"],
    backgroundLeft: "RUA",
    backgroundRight: "SADIQ",
    description:
      "Bespoke Armchairs & Wing Chairs Tailored Precisely for Saudi Hospitality",
    arabicDescription:
      "كراسي بذراعين وكراسي وينغ مصممة خصيصاً لتناسب الضيافة السعودية",
    image: "/images/hero/armchair.webp",
    button: "EXPLORE ARMCHAIRS",
    arabicButton: "اكتشف الكراسي الفاخرة",
    link: "/shop?category=chairs-recliners",
  },
];

const textAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

const productAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.9,
    ease: "easeInOut",
  },
};

const backgroundLeftAnimation = {
  initial: { opacity: 0, x: -45 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -25 },
  transition: {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  },
};

const backgroundRightAnimation = {
  initial: { opacity: 0, x: 45 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 25 },
  transition: {
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function HeroSlider() {
  const { isArabic } = useLanguage();

  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");

  const slide = slides[current];
  const activeWords = isArabic ? slide.arabicWords : slide.words;

  // Automatic typing and slide switching
  useEffect(() => {
    let timeout;
    let character = 0;
    let wordIndex = 0;
    let cancelled = false;

    const schedule = (callback, delay) => {
      timeout = setTimeout(() => {
        if (!cancelled) callback();
      }, delay);
    };

    const typeWord = () => {
      const word = activeWords[wordIndex];

      character += 1;
      setTypedText(word.slice(0, character));

      if (character < word.length) {
        schedule(typeWord, 100);
      } else {
        schedule(eraseWord, 1450);
      }
    };

    const eraseWord = () => {
      const word = activeWords[wordIndex];

      character -= 1;
      setTypedText(word.slice(0, character));

      if (character > 0) {
        schedule(eraseWord, 55);
      } else if (wordIndex < activeWords.length - 1) {
        wordIndex += 1;
        schedule(typeWord, 300);
      } else {
        schedule(() => {
          setCurrent((previous) => (previous + 1) % slides.length);
        }, 350);
      }
    };

    setTypedText("");
    schedule(typeWord, 450);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [current, isArabic]);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative isolate min-h-[100svh] w-full
        overflow-hidden bg-[#C7AA7F]
      "
      style={{
        background: `
          radial-gradient(
            ellipse 85% 75% at 50% 35%,
            #DEC8A5 0%,
            #D1B58B 45%,
            transparent 100%
          ),
          linear-gradient(
            180deg,
            #D5BB94 0%,
            #C7AA7F 55%,
            #AE8D65 100%
          )
        `,
      }}
    >
      {/* Background Typography */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`watermark-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="
            pointer-events-none absolute inset-x-0
            bottom-[8%] z-0 flex items-end
            justify-between overflow-hidden
            px-[5%] md:px-[6%] select-none
          "
        >
          <motion.span
            key={`left-${slide.id}`}
            {...backgroundLeftAnimation}
            className="
              -translate-y-5 md:-translate-y-12
              font-serif
              text-[clamp(34px,10vw,55px)]
              md:text-[clamp(50px,8vw,110px)]
              leading-[0.8] tracking-[-2px] md:tracking-[-5px]
              text-white/[0.22]
            "
          >
            {slide.backgroundLeft}
          </motion.span>

          <motion.span
            key={`right-${slide.id}`}
            {...backgroundRightAnimation}
            className="
              font-serif
              text-[clamp(48px,14vw,75px)]
              md:text-[clamp(90px,12vw,180px)]
              leading-[0.8] tracking-[-2px] md:tracking-[-5px]
              text-white/[0.22]
            "
          >
            {slide.backgroundRight}
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Main Composition */}
      <div
        className="
          relative z-10 mx-auto grid
          min-h-[100svh] w-full max-w-[1700px]
          grid-cols-1 grid-rows-[auto_1fr]
          items-center gap-0
          px-5 pb-[72px] pt-[135px]
          sm:px-7
          md:grid-cols-2 md:grid-rows-1
          md:gap-5 md:px-10 md:pb-[85px] md:pt-[110px]
          lg:px-16 xl:px-20
        "
      >
        {/* Left: Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}-${isArabic ? "ar" : "en"}`}
            {...textAnimation}
            className="relative z-20 flex flex-col items-start md:items-start"
          >
            <h1
              className={`
                font-serif
                text-[clamp(32px,8vw,45px)]
                md:text-[clamp(38px,4vw,60px)]
                font-light leading-[0.98]
                tracking-[-1px] md:tracking-[-2px]
                text-[#262A2D]
                md:-translate-y-10
                ${isArabic ? "font-sans tracking-normal" : ""}
              `}
            >
              {isArabic ? "نصنع" : "CRAFTING"}

              <span className="mt-1 block min-h-[1.05em] font-light text-[#FFFEFC]">
                {typedText}
                <span className="ml-1 inline-block animate-pulse font-light">
                  |
                </span>
              </span>
            </h1>

            <p
              className={`
                mt-3 md:mt-6
                max-w-[420px]
                text-[12px] leading-[1.65]
                sm:text-[13px]
                md:-translate-y-[52px] md:text-[16px]
                md:leading-[1.6]
                text-[#171717]
                ${isArabic ? "font-sans" : ""}
              `}
            >
              {isArabic ? slide.arabicDescription : slide.description}
            </p>

            {/* Functional Explore Button */}
            <Link
              href={slide.link}
              className="
                mt-5 md:mt-7
                inline-flex min-h-[38px] md:min-h-[44px]
                items-center justify-center gap-3 md:gap-4
                rounded-[12px] md:rounded-[17px]
                bg-[#DAB52F]
                px-5 md:px-6
                text-[10px] md:text-[12px]
                font-bold tracking-[1px] md:tracking-[1.5px]
                text-[#171717] shadow-md
                transition-all duration-300
                hover:bg-[#E5C54A] hover:shadow-lg
                md:-translate-y-[52px]
              "
            >
              {isArabic ? slide.arabicButton : slide.button}
              <ArrowRight
                size={17}
                className={`md:hidden ${isArabic ? "rotate-180" : ""}`}
              />
              <ArrowRight
                size={21}
                className={`hidden md:block ${isArabic ? "rotate-180" : ""}`}
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Right: Product Image */}
        <div
          className="
            relative flex
            h-[min(43vh,340px)]
            min-h-[250px] w-full
            items-center justify-center
            mt-2
            md:mt-0 md:h-[min(65vh,590px)]
            md:min-h-[380px]
          "
        >
          <div
            className="
              absolute h-[94%] aspect-square
              rounded-[35%] border border-white/30
            "
          />

          <div
            className="
              absolute h-[88%] aspect-square
              rounded-[35%] border border-white/25
            "
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={`product-${slide.id}`}
              src={slide.image}
              alt={isArabic ? slide.arabicWords[0] : slide.backgroundRight}
              {...productAnimation}
              className="relative z-10 h-full w-full object-contain"
            />
          </AnimatePresence>
        </div>

        {/* Bottom Divider */}
        <div
          className="
            absolute bottom-[42px]
            left-5 right-5
            h-px bg-[#171717]/20
            md:left-10 md:right-10
            lg:left-16 lg:right-16
            xl:left-20 xl:right-20
          "
        />

        {/* Clickable Slide Indicators */}
        <div
          className="
            absolute bottom-[18px] left-1/2
            flex -translate-x-1/2
            items-center gap-2
          "
        >
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={
                isArabic
                  ? `عرض الشريحة ${index + 1}`
                  : `Show slide ${index + 1}`
              }
              aria-current={current === index ? "true" : undefined}
              className="flex h-6 items-center justify-center"
            >
              <motion.span
                animate={{
                  width: current === index ? 30 : 12,
                  opacity: current === index ? 1 : 0.4,
                  backgroundColor:
                    current === index ? "#171717" : "#6E5B43",
                }}
                transition={{ duration: 0.35 }}
                className="block h-[8px] rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
