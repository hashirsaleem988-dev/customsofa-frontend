
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  UserRound,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function BlogArticle({ article }) {
  const { isArabic } = useLanguage();

  if (!article) return null;

  const title = isArabic
    ? article.arabicTitle || article.title
    : article.title;

  const description = isArabic
    ? article.arabicDescription || article.description
    : article.description;

  const category = isArabic
    ? article.arabicCategory || article.category
    : article.category;

  const author = isArabic
    ? article.arabicAuthor || article.author
    : article.author;

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbf6f4] px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">

        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a98925] transition hover:gap-4"
        >
          {isArabic ? (
            <>
              <ArrowRight size={16} />
              العودة إلى المدونة
            </>
          ) : (
            <>
              <ArrowLeft size={16} />
              Back to Blog
            </>
          )}
        </Link>

        {/* Article Header */}
        <header className="mx-auto mt-10 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#d9b83f]/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a98925]">
            {category}
          </span>

          <h1 className="mt-6 font-serif text-3xl leading-tight text-[#172433] sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            {description}
          </p>

          {/* Article Meta */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-[#e9dfd9] py-5 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <UserRound size={15} className="text-[#b99a32]" />
              {author}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={15} className="text-[#b99a32]" />
              {article.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={15} className="text-[#b99a32]" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mt-10 overflow-hidden rounded-2xl sm:mt-14">
          <img
            src={article.image}
            alt={title}
            className="max-h-[550px] w-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="mx-auto mt-12 max-w-3xl">

          <p className="text-base leading-8 text-gray-600">
            {description}
          </p>

          <h2 className="mt-10 font-serif text-2xl text-[#172433] sm:text-3xl">
            {isArabic ? "فهم التفاصيل" : "Understanding the Details"}
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
            {isArabic
              ? "التصميم الرائع لا يقتصر على المظهر فقط، بل يتعلق بفهم التفاصيل واستكشاف الإمكانيات المختلفة واتخاذ خيارات مدروسة تخلق تجربة مميزة وذات معنى."
              : "Great design is about more than appearance. It is about understanding the details, exploring different possibilities and making thoughtful choices that create a meaningful experience."}
          </p>

          <h2 className="mt-10 font-serif text-2xl text-[#172433] sm:text-3xl">
            {isArabic
              ? "إلهام للحياة اليومية"
              : "Inspiration for Everyday Living"}
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
            {isArabic
              ? "لكل مساحة طابعها الخاص. ويمكن للمزيج المناسب من المواد والأنسجة والألوان والتفاصيل المختارة بعناية أن يساعد في إنشاء بيئة مريحة ومتوازنة تعكس شخصيتك."
              : "Every space has its own character. The right combination of materials, textures, colours and carefully selected details can help create an environment that feels comfortable, balanced and personal."}
          </p>

          <blockquote className="mt-10 rounded-r-xl border-l-4 border-[#d9b83f] bg-white px-6 py-7 font-serif text-xl leading-relaxed text-[#172433] sm:px-9 sm:text-2xl">
            {isArabic
              ? "التفاصيل المدروسة تصنع الفرق بين المساحة العادية والتجربة الاستثنائية."
              : "Thoughtful details make the difference between an ordinary space and an extraordinary experience."}
          </blockquote>

          <h2 className="mt-10 font-serif text-2xl text-[#172433] sm:text-3xl">
            {isArabic ? "كلمة أخيرة" : "Final Thoughts"}
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
            {isArabic
              ? "في شركة رواء صادق التجارية، نؤمن بالجودة والحرفية والتصميم المدروس. هدفنا هو تقديم الإلهام والحلول الأنيقة لكل مشروع."
              : "At Rua Sadiq Trading Co., we believe in quality, craftsmanship and thoughtful design. Our goal is to bring inspiration and elegant solutions to every project."}
          </p>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#e9dfd9] pt-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a98925] hover:gap-4"
          >
            {isArabic ? (
              <>
                <ArrowRight size={16} />
                جميع المقالات
              </>
            ) : (
              <>
                <ArrowLeft size={16} />
                All Articles
              </>
            )}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#172433] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d9b83f] hover:text-[#172433]"
          >
            {isArabic ? "ناقش مشروعك معنا" : "Discuss Your Project"}

            {isArabic ? (
              <ArrowLeft size={16} />
            ) : (
              <ArrowRight size={16} />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
