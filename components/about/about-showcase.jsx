
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Maximize2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const categories = [
  { name: "All Projects", arabicName: "جميع المشاريع" },
  { name: "Living Rooms", arabicName: "غرف المعيشة" },
  { name: "Majlis", arabicName: "المجالس" },
  { name: "Bedrooms", arabicName: "غرف النوم" },
  { name: "Curtains", arabicName: "الستائر" },
];

const projects = [
  {
    title: "Luxury Living Collection",
    arabicTitle: "مجموعة غرف المعيشة الفاخرة",
    category: "Living Rooms",
    image: "/images/categories/premium-sofa-set.webp",
    description: "Elegant furniture designed for refined living spaces.",
    arabicDescription: "أثاث أنيق مصمم لإضفاء الرقي والجمال على مساحات المعيشة.",
  },
  {
    title: "Traditional Majlis Design",
    arabicTitle: "تصميم المجالس التقليدية",
    category: "Majlis",
    image: "/images/categories/majlis.webp",
    description: "A beautiful blend of traditional inspiration and comfort.",
    arabicDescription: "مزيج جميل يجمع بين الطابع التقليدي والراحة.",
  },
  {
    title: "Premium Bedroom Collection",
    arabicTitle: "مجموعة غرف النوم الفاخرة",
    category: "Bedrooms",
    image: "/images/categories/premium-bed.webp",
    description: "Thoughtfully designed bedroom furniture and interiors.",
    arabicDescription: "أثاث وتصاميم داخلية لغرف النوم بعناية واهتمام بأدق التفاصيل.",
  },
  {
    title: "Elegant Curtain Designs",
    arabicTitle: "تصاميم الستائر الأنيقة",
    category: "Curtains",
    image: "/images/categories/curtains.webp",
    description: "Finishing touches that bring elegance to every room.",
    arabicDescription: "لمسات نهائية تضفي الأناقة والجمال على كل غرفة.",
  },
  {
    title: "Contemporary Seating",
    arabicTitle: "جلسات عصرية",
    category: "Living Rooms",
    image: "/images/categories/chairs-recliners.webp",
    description: "Comfort-focused seating with timeless appeal.",
    arabicDescription: "جلسات تجمع بين الراحة والتصميم العصري ذي الطابع الخالد.",
  },
  {
    title: "Bespoke Furniture Craft",
    arabicTitle: "حرفية الأثاث المصمم حسب الطلب",
    category: "Majlis",
    image: "/images/banners/about-us-hero-background.webp",
    description: "Craftsmanship and attention to detail in every piece.",
    arabicDescription: "حرفية متميزة واهتمام بأدق التفاصيل في كل قطعة.",
  },
];

export default function AboutShowcase() {
  const { isArabic } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="our-craft"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#fbf6f4] px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
            {isArabic ? "أعمالنا • شغفنا" : "Our Work • Our Passion"}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#172433] sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                أعمالنا المصممة
                <span className="text-[#c5a43a]"> حسب الطلب</span>
              </>
            ) : (
              <>
                Our Bespoke
                <span className="text-[#c5a43a]"> Installation Showcase</span>
              </>
            )}
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            {isArabic
              ? "اكتشف مجموعات الأثاث لدينا وإلهام التصميم الداخلي والحرفية التي تضفي الحياة على كل مساحة."
              : "Explore our furniture collections, interior inspiration and craftsmanship that brings every space to life."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition sm:px-5 sm:text-xs ${
                activeCategory === category.name
                  ? "border-[#172433] bg-[#172433] text-white"
                  : "border-[#e7ded8] bg-white text-gray-600 hover:border-[#d9b83f] hover:text-[#a98925]"
              }`}
            >
              {isArabic ? category.arabicName : category.name}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.button
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-[#172433] text-left"
              >
                <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
                  <img
                    src={project.image}
                    alt={isArabic ? project.arabicTitle : project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d171e]/90 via-transparent to-transparent opacity-90" />

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition group-hover:bg-[#d9b83f] group-hover:text-[#172433]">
                    <Maximize2 size={17} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e5c95b]">
                      {isArabic
                        ? categories.find(
                            (cat) => cat.name === project.category
                          )?.arabicName
                        : project.category}
                    </span>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl text-white sm:text-2xl">
                        {isArabic ? project.arabicTitle : project.title}
                      </h3>

                      <ArrowUpRight
                        size={20}
                        className={`shrink-0 text-[#d9b83f] transition group-hover:-translate-y-1 ${
                          isArabic
                            ? "group-hover:-translate-x-1 rotate-[-90deg]"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                onClick={(event) => event.stopPropagation()}
                dir={isArabic ? "rtl" : "ltr"}
                className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#172433]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label={isArabic ? "إغلاق الصورة" : "Close image"}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[#d9b83f] hover:text-[#172433]"
                >
                  <X size={20} />
                </button>

                <img
                  src={selectedProject.image}
                  alt={
                    isArabic
                      ? selectedProject.arabicTitle
                      : selectedProject.title
                  }
                  className="max-h-[65vh] w-full object-cover"
                />

                <div className="p-5 sm:p-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b83f]">
                    {isArabic
                      ? categories.find(
                          (cat) => cat.name === selectedProject.category
                        )?.arabicName
                      : selectedProject.category}
                  </span>

                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {isArabic
                      ? selectedProject.arabicTitle
                      : selectedProject.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {isArabic
                      ? selectedProject.arabicDescription
                      : selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
