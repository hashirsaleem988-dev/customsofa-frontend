
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock } from "lucide-react";
import { blogArticles } from "@/data/blog-articles";
import { useLanguage } from "@/context/language-context";

export default function BlogListing() {
  const { isArabic } = useLanguage();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const categoryTranslations = {
    "All Articles": "جميع المقالات",
  };

  const getCategoryName = (category) => {
    if (!isArabic) return category;

    return (
      categoryTranslations[category] ||
      blogArticles.find((article) => article.category === category)
        ?.arabicCategory ||
      category
    );
  };

  const categories = [
    "All Articles",
    ...new Set(blogArticles.map((article) => article.category)),
  ];

  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const searchText = search.toLowerCase();

      const searchableText = [
        article.title,
        article.description,
        article.category,
        article.arabicTitle,
        article.arabicDescription,
        article.arabicCategory,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf6f4] px-4 pb-20 pt-32 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Blog Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
            {isArabic ? "مجلة رواء صادق" : "The Rua Sadiq Journal"}
          </span>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#172433] sm:text-5xl lg:text-6xl">
            {isArabic ? (
              <>
                أفكار وإلهام
                <span className="block text-[#c5a43a]">
                  وحكايات التصميم الداخلي
                </span>
              </>
            ) : (
              <>
                Ideas, Inspiration
                <span className="block text-[#c5a43a]">
                  & Interior Stories
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            {isArabic
              ? "اكتشف الإلهام والرؤى المتخصصة والأفكار المميزة حول الأثاث والتصميم الداخلي ومساحات المعيشة الجميلة."
              : "Discover inspiration, expert insights and thoughtful ideas about furniture, interior design and beautiful living spaces."}
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-full border border-[#e9dfd9] bg-white px-5 py-3.5 shadow-sm focus-within:border-[#d9b83f]">
            <Search size={19} className="shrink-0 text-[#b99a32]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isArabic ? "ابحث في المقالات..." : "Search articles..."
              }
              className="w-full bg-transparent text-sm text-[#172433] outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition sm:text-xs ${
                activeCategory === category
                  ? "border-[#172433] bg-[#172433] text-white"
                  : "border-[#e9dfd9] bg-white text-gray-600 hover:border-[#d9b83f] hover:text-[#a98925]"
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Articles Heading */}
        <div className="mt-16 flex flex-wrap items-end justify-between gap-3 border-b border-[#e9dfd9] pb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b99a32]">
              {isArabic ? "استكشف مجلتنا" : "Explore Our Journal"}
            </span>

            <h2 className="mt-2 font-serif text-2xl text-[#172433] sm:text-3xl">
              {isArabic ? "أحدث المقالات" : "Latest Articles"}
            </h2>
          </div>

          <p className="text-xs text-gray-500">
            {filteredArticles.length}{" "}
            {isArabic ? "مقالات" : "Articles"}
          </p>
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-[#eee5df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="block overflow-hidden"
                >
                  <div className="relative h-[230px] overflow-hidden sm:h-[250px]">
                    <img
                      src={article.image}
                      alt={
                        isArabic
                          ? article.arabicTitle || article.title
                          : article.title
                      }
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#d9b83f] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#172433]">
                      {isArabic
                        ? article.arabicCategory || article.category
                        : article.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-gray-400">
                    <span>{article.date}</span>

                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl leading-snug text-[#172433] transition group-hover:text-[#b99a32] sm:text-2xl">
                    {isArabic
                      ? article.arabicTitle || article.title
                      : article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500">
                    {isArabic
                      ? article.arabicDescription || article.description
                      : article.description}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#a98925] transition hover:gap-4"
                  >
                    {isArabic ? "اقرأ المقال" : "Read Article"}
                    {isArabic ? (
                      <ArrowRight size={15} className="rotate-180" />
                    ) : (
                      <ArrowRight size={15} />
                    )}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-serif text-2xl text-[#172433]">
              {isArabic ? "لم يتم العثور على مقالات" : "No Articles Found"}
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              {isArabic
                ? "جرّب البحث مرة أخرى أو اختر تصنيفًا مختلفًا."
                : "Try another search or select a different category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
