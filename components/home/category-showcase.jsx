
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { getCategories, getImageUrl } from "@/lib/api";

const fallbackCategories = [
  {
    title: "King Size Sofa",
    arabicTitle: "أريكة كينغ سايز",
    filter: "King Size Sofa",
    image: "/images/categories/king-size-sofa.webp",
    position: "king",
  },
  {
    title: "Premium Sofa Set",
    arabicTitle: "طقم أرائك فاخر",
    filter: "Premium Sofa Set",
    image: "/images/categories/premium-sofa-set.webp",
    position: "sofa",
  },
  {
    title: "Curtain's Rod",
    arabicTitle: "قضبان الستائر",
    filter: "Curtain's Rod",
    image: "/images/categories/curtain-rods.webp",
    position: "rod",
  },
  {
    title: "Curtains",
    arabicTitle: "ستائر",
    filter: "Curtains",
    image: "/images/categories/curtains.webp",
    position: "curtains",
  },
  {
    title: "Majlis",
    arabicTitle: "مجالس",
    filter: "Majlis",
    image: "/images/categories/majlis.webp",
    position: "majlis",
  },
  {
    title: "Chairs & Recliners",
    arabicTitle: "كراسي ومقاعد استرخاء",
    filter: "Chairs & Recliners",
    image: "/images/categories/chairs-recliners.webp",
    position: "chairs",
  },
  {
    title: "Premium Bed",
    arabicTitle: "سرير فاخر",
    filter: "Premium Bed",
    image: "/images/categories/premium-bed.webp",
    position: "bed",
  },
];

const cardPositions = {
  king: "col-start-1 row-start-1",
  sofa: "col-start-2 row-start-1",
  rod: "col-start-1 row-start-2",
  curtains: "col-start-2 row-start-2 row-span-2",
  majlis: "col-start-1 row-start-3 row-span-2",
  chairs: "col-start-2 row-start-4",
  bed: "col-span-2 col-start-1 row-start-5",
};

function getCategoryPosition(name = "") {
  const value = name.toLowerCase();

  if (value.includes("king size sofa")) return "king";
  if (value.includes("premium sofa set")) return "sofa";
  if (value.includes("curtain's rod")) return "rod";
  if (value === "curtains") return "curtains";
  if (value === "majlis") return "majlis";
  if (value.includes("chairs")) return "chairs";
  if (value.includes("premium bed")) return "bed";

  return null;
}

function getArrayResponse(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.categories)) return data.categories;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

function mapCategory(item) {
  const position = getCategoryPosition(
    item.filter || item.nameEn
  );

  if (!position) return null;

  const fallback = fallbackCategories.find(
    (category) => category.position === position
  );

  return {
    id: item._id,
    title: item.nameEn || fallback?.title || "",
    arabicTitle: item.nameAr || fallback?.arabicTitle || "",
    filter: item.filter || item.nameEn || "",
    image: item.imageId
      ? getImageUrl(item.imageId)
      : fallback?.image || "/images/categories/premium-sofa-set.webp",
    position,
  };
}

function CategoryCard({ item, isArabic }) {
  const title = isArabic ? item.arabicTitle : item.title;

  return (
    <Link
      href={`/shop?category=${encodeURIComponent(item.filter)}`}
      aria-label={isArabic ? `استكشف ${title}` : `Explore ${title}`}
      className={`group relative isolate block min-h-0 min-w-0 overflow-hidden rounded-[3px] bg-[#ded5ca] ${cardPositions[item.position]}`}
    >
      <Image
        src={item.image}
        alt={title}
        fill
        unoptimized
        sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 25vw"
        className={`object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.055] ${
          item.position === "rod" ? "object-[center_10%]" : ""
        }`}
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/10 to-black/80 transition-all duration-500 group-hover:from-black/10 group-hover:to-black/80" />

      <div className="absolute bottom-[11px] left-[10px] right-[10px] z-[2] sm:bottom-[17px] sm:left-4 sm:right-4">
        <span className="mb-2 block h-[2px] w-8 overflow-hidden bg-white/35">
          <span className="block h-full w-0 bg-[#d9b84c] transition-all duration-700 group-hover:w-full" />
        </span>

        <h3 className="font-serif text-[13px] font-normal leading-tight text-white sm:text-[17px]">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function CategoryShowcase() {
  const { isArabic } = useLanguage();

  const [categories, setCategories] = useState(fallbackCategories);
  const [featureImage, setFeatureImage] = useState(
    "/images/categories/premium-sofa-set.webp"
  );

  // FETCH CATEGORIES FROM PRODUCTION API
  useEffect(() => {
    let cancelled = false;

    async function loadCategories() {
      try {
        const response = await getCategories();

        if (cancelled) return;

        const categoryList = getArrayResponse(response);

        const mappedCategories = categoryList
          .map(mapCategory)
          .filter(Boolean);

        if (mappedCategories.length > 0) {
          setCategories(mappedCategories);

          const sofaCategory = mappedCategories.find(
            (category) => category.position === "sofa"
          );

          if (sofaCategory) {
            setFeatureImage(sofaCategory.image);
          }
        }
      } catch (error) {
        console.error("Category showcase error:", error);
      }
    }

    loadCategories();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#fbf6f4] px-4 py-[26px] sm:px-[5%] sm:py-[45px]"
    >
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-start gap-6 min-[901px]:grid-cols-[minmax(340px,0.42fr)_minmax(0,1fr)] min-[901px]:gap-[38px]">

        {/* LEFT FEATURE CARD */}

        <div className="group relative isolate h-[410px] min-h-[410px] overflow-hidden rounded-[10px] min-[601px]:h-[520px] min-[601px]:min-h-[520px] min-[901px]:sticky min-[901px]:top-[100px] min-[901px]:h-[calc(100vh-130px)] min-[901px]:min-h-[520px] min-[901px]:max-h-[760px]">

          <div className="absolute inset-0">
            <Image
              src={featureImage}
              alt={isArabic ? "أثاث فاخر" : "Luxury furniture"}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.055]"
            />
          </div>

          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#14100c]/5 via-[#14100c]/20 to-[#0c0a08]/90" />

          <div className="absolute bottom-5 left-[17px] right-[17px] z-[2] text-white sm:bottom-7 sm:left-6 sm:right-6">
            <h2 className="font-serif text-[34px] font-normal leading-[0.98] tracking-[-0.7px] sm:text-[42px]">
              {isArabic ? (
                <>
                  من <span className="text-[#d9b84c]">الخيال</span> إلى
                  <br />
                  الواقع
                </>
              ) : (
                <>
                  From <span className="text-[#d9b84c]">Vision</span> to
                  <br />
                  Reality
                </>
              )}
            </h2>

            <span className="my-[14px] block h-[2px] w-[43px] bg-[#d9b84c] sm:my-[18px]" />

            <p className="max-w-[350px] text-[12px] leading-[1.65] text-white/90">
              {isArabic
                ? "حرفية سعودية أصيلة ممزوجة بأفخم الأقمشة العالمية، ومصممة بدقة لتناسب مخطط منزلك."
                : "Artisanal Saudi craftsmanship blended with world luxury fabrics tailored precisely to your floorplan."}
            </p>

            <div className="mt-6 flex items-end justify-between gap-2">
              <Link
                href="/shop"
                aria-label={
                  isArabic ? "استكشف جميع الأثاث" : "Explore all furniture"
                }
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[1px] text-[#d9b84c] transition-all duration-300 hover:gap-3.5"
              >
                {isArabic ? "استكشف الكل" : "EXPLORE ALL"}

                <ArrowRight
                  size={14}
                  className={isArabic ? "rotate-180" : ""}
                />
              </Link>

              <div className="flex flex-col text-right">
                <strong className="font-serif text-[19px] text-[#d9b84c]">
                  {isArabic ? "+14 سنة" : "14+ Years"}
                </strong>

                <span className="text-[9px] text-white/85">
                  {isArabic
                    ? "من التميز والعراقة"
                    : "of Excellence & Heritage"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CATEGORY GRID */}

        <div className="grid min-w-0 grid-cols-2 grid-rows-[repeat(5,145px)] gap-[10px] min-[601px]:grid-rows-[repeat(5,180px)] min-[601px]:gap-4 min-[901px]:grid-rows-[repeat(5,210px)]">
          {categories.map((item) => (
            <CategoryCard
              key={item.id || item.position}
              item={item}
              isArabic={isArabic}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
