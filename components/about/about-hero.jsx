
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const slides = [
  {
    image: "/images/banners/about-us-hero-background.webp",
    badge: "OUR STORY • OUR CRAFT",
    arabicBadge: "قصتنا • حرفيتنا",
    heading: "Crafting Excellence Through Generations",
    arabicHeading: "نصنع التميز عبر الأجيال",
    description:
      "Discover our passion for fine craftsmanship, premium materials, and timeless furniture designed to transform your living spaces.",
    arabicDescription:
      "اكتشف شغفنا بالحرفية المتقنة والخامات الفاخرة والأثاث الخالد المصمم لتحويل مساحات معيشتك إلى أماكن استثنائية.",
    button: "Explore Our Story",
    arabicButton: "اكتشف قصتنا",
    link: "#our-story",
  },
  {
    image: "/images/banners/about-us-sofa-slide.webp",
    badge: "COMFORT • ELEGANCE",
    arabicBadge: "الراحة • الأناقة",
    heading: "Redefining Luxury Furniture & Comfort",
    arabicHeading: "نعيد تعريف الأثاث الفاخر والراحة",
    description:
      "From elegant sofas to bespoke furniture, we bring together exceptional comfort, refined details, and sophisticated design.",
    arabicDescription:
      "من الأرائك الأنيقة إلى الأثاث المصمم حسب الطلب، نجمع بين الراحة الاستثنائية والتفاصيل المتقنة والتصاميم الراقية.",
    button: "Discover Our Craft",
    arabicButton: "اكتشف حرفيتنا",
    link: "#our-craft",
  },
  {
    image: "/images/banners/about-us-majlis-slide.webp",
    badge: "HERITAGE • DESIGN",
    arabicBadge: "التراث • التصميم",
    heading: "Inspired by Heritage, Designed for Living",
    arabicHeading: "إلهام من التراث وتصميم للحياة",
    description:
      "Blending traditional inspiration with contemporary elegance to create spaces that feel truly personal and timeless.",
    arabicDescription:
      "نمـزج الإلهام التقليدي بالأناقة العصرية لنصمم مساحات تعكس شخصيتك وتظل جميلة عبر الزمن.",
    button: "Contact Our Team",
    arabicButton: "تواصل مع فريقنا",
    link: "/contact",
  },
];

export default function AboutHero() {
  const { isArabic } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[calc(100svh-70px)] min-h-[480px] max-h-[780px] w-full px-2 pt-[70px] pb-2 sm:h-[calc(100svh-90px)] sm:min-h-[580px] sm:max-h-[820px] sm:px-4 sm:pt-[80px] sm:pb-4"
    >
      <div className="relative flex h-full w-full items-center overflow-hidden rounded-[18px] bg-[#172433] sm:rounded-[28px]">

        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={
                isArabic
                  ? "أثاث فاخر وحرفية متقنة"
                  : "Rua Sadiq Trading furniture craftsmanship"
              }
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 ${
            isArabic
              ? "bg-gradient-to-l from-[#0d171e]/90 via-[#0d171e]/65 to-[#0d171e]/15"
              : "bg-gradient-to-r from-[#0d171e]/90 via-[#0d171e]/65 to-[#0d171e]/15"
          }`}
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl px-5 py-12 sm:px-10 sm:py-14 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.65 }}
              className="w-full"
            >
              <span className="mb-4 inline-flex max-w-full flex-wrap rounded-full border border-[#d9b83f]/60 bg-[#d9b83f]/10 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-[#e5c95b] sm:mb-5 sm:text-xs sm:tracking-[0.22em]">
                {isArabic ? slide.arabicBadge : slide.badge}
              </span>

              <h1 className="max-w-3xl break-words font-serif text-[clamp(2rem,6vw,5rem)] leading-[1.3] text-white">
                {isArabic ? slide.arabicHeading : slide.heading}
              </h1>

              <p className="mt-4 max-w-xl break-words text-sm leading-7 text-white/80 sm:mt-5 sm:text-base sm:leading-8">
                {isArabic ? slide.arabicDescription : slide.description}
              </p>

              <Link
                href={slide.link}
                className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-[#d9b83f] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-[#172433] transition hover:bg-white sm:mt-7 sm:px-7 sm:py-4 sm:text-xs"
              >
                {isArabic ? slide.arabicButton : slide.button}
                <ArrowRight
                  size={16}
                  className={isArabic ? "rotate-180" : ""}
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-5 left-4 z-20 flex items-center gap-2 sm:bottom-8 sm:left-10 sm:gap-3">
          <span className="mr-1 text-[10px] tracking-widest text-white sm:mr-2 sm:text-xs">
            0{active + 1} <span className="text-white/50">/ 03</span>
          </span>

          <button
            onClick={prevSlide}
            aria-label={isArabic ? "الشريحة السابقة" : "Previous slide"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-[#d9b83f] hover:text-[#172433] sm:h-10 sm:w-10"
          >
            {isArabic ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <button
            onClick={nextSlide}
            aria-label={isArabic ? "الشريحة التالية" : "Next slide"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-[#d9b83f] hover:text-[#172433] sm:h-10 sm:w-10"
          >
            {isArabic ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-7 right-5 z-20 flex gap-2 sm:bottom-10 sm:right-12">
          {slides.map((item, index) => (
            <button
              key={item.image}
              onClick={() => setActive(index)}
              aria-label={
                isArabic
                  ? `الانتقال إلى الشريحة ${index + 1}`
                  : `Go to slide ${index + 1}`
              }
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === index
                  ? "w-9 bg-[#d9b83f]"
                  : "w-3 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
