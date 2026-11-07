
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { getMaterials, getImageUrl } from "@/lib/api";

// Local fallback images
const fallbackImages = {
  sofa: "/images/categories/premium-sofa-set.webp",
  curtain: "/images/categories/curtains.webp",
  wood: "/images/banners/materials-hero-background.webp",
  foam: "/images/categories/premium-bed.webp",
};

// Backend group configuration
const groupConfig = [
  {
    id: "sofa-fabrics",
    group: "sofa",
    title: "Sofa Fabrics",
    arabicTitle: "أقمشة الأرائك",
    code: "S",
    badge: "PREMIUM SWATCHES",
    arabicBadge: "عينات فاخرة",
  },
  {
    id: "curtain-fabrics",
    group: "curtain",
    title: "Curtain Fabrics",
    arabicTitle: "أقمشة الستائر",
    code: "C",
    badge: "ELEGANT FABRICS",
    arabicBadge: "أقمشة أنيقة",
  },
  {
    id: "solid-timber",
    group: "wood",
    title: "Solid Timber & Woods",
    arabicTitle: "الأخشاب الطبيعية والصلبة",
    code: "W",
    badge: "HARDWOOD OPTIONS",
    arabicBadge: "خيارات من الأخشاب الصلبة",
  },
  {
    id: "sponge-foams",
    group: "foam",
    title: "Ergonomic Sponge Foams",
    arabicTitle: "الإسفنج المريح",
    code: "F",
    badge: "FOAM OPTIONS",
    arabicBadge: "أنواع الإسفنج",
  },
];

const categoryLinks = [
  { label: "All Categories", arabicLabel: "جميع الفئات", id: "all" },
  { label: "Sofa Fabrics", arabicLabel: "أقمشة الأرائك", id: "sofa-fabrics" },
  { label: "Curtain Fabrics", arabicLabel: "أقمشة الستائر", id: "curtain-fabrics" },
  { label: "Solid Timber", arabicLabel: "الأخشاب الصلبة", id: "solid-timber" },
  { label: "Sponge Foams", arabicLabel: "الإسفنج", id: "sponge-foams" },
];

const tabMapping = {
  all: "all",
  sofa: "sofa-fabrics",
  curtain: "curtain-fabrics",
  wood: "solid-timber",
  timber: "solid-timber",
  foam: "sponge-foams",
  "sofa-fabrics": "sofa-fabrics",
  "curtain-fabrics": "curtain-fabrics",
  "solid-timber": "solid-timber",
  "sponge-foams": "sponge-foams",
};

function getArrayResponse(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.materials)) return data.materials;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

function mapApiMaterials(apiMaterials) {
  return groupConfig.map((config) => {
    const groupItems = apiMaterials
      .filter((item) => item.group === config.group)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

    return {
      ...config,
      items: groupItems.map((item, index) => ({
        id: item._id || item.key || `${config.group}-${index}`,
        name: item.nameEn || "Material",
        arabicName: item.nameAr || item.nameEn || "Material",
        description: item.specEn || "",
        arabicDescription: item.specAr || item.specEn || "",
        image: item.imageId
          ? getImageUrl(item.imageId)
          : fallbackImages[config.group],
        group: config.group,
      })),
    };
  });
}

function MaterialCard({ item, code, index, onSelect, isArabic }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-[12px] border border-[#e9e2dc] bg-white p-2 shadow-[0_3px_8px_rgba(30,25,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-lg min-[480px]:p-2.5 sm:rounded-[13px] sm:p-3.5">
      <button
        type="button"
        onClick={onSelect}
        className="relative block aspect-[1/1.05] w-full overflow-hidden rounded-[8px] bg-[#e9e2d8] text-start sm:rounded-[9px]"
        aria-label={
          isArabic
            ? `عرض ${item.arabicName}`
            : `View ${item.name}`
        }
      >
        <Image
          src={item.image}
          alt={isArabic ? item.arabicName : item.name}
          fill
          unoptimized={item.image.startsWith("http")}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <span className="absolute left-1.5 top-1.5 z-[2] rounded-[5px] bg-[#d9b83f] px-1.5 py-1 text-[7px] font-bold text-[#151515] min-[480px]:left-2 min-[480px]:top-2 min-[480px]:px-2 sm:text-[9px]">
          @{code}{index + 1}
        </span>
      </button>

      <div className="min-w-0 px-0.5 pb-1 pt-2.5 sm:pt-3">
        <h3 className="break-words font-serif text-[12px] font-semibold leading-[1.5] text-[#172433] min-[480px]:text-[13px] sm:text-[16px]">
          {isArabic ? item.arabicName : item.name}
        </h3>

        <p className="mt-1.5 break-words text-[9px] leading-[1.5] text-[#77716a] min-[480px]:text-[10px] sm:text-[11px]">
          {isArabic ? item.arabicDescription : item.description}
        </p>
      </div>
    </article>
  );
}

function SourcingBanner({ isArabic }) {
  return (
    <div className="mt-6 flex min-w-0 flex-col gap-4 rounded-[13px] border border-[#d9b83f]/20 bg-gradient-to-r from-[#0d171e] to-[#1b2b3b] p-4 shadow-md min-[480px]:p-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
      <div className="min-w-0">
        <h3 className="break-words font-serif text-[15px] font-semibold leading-tight text-white sm:text-[19px]">
          {isArabic
            ? "لم تجد نوع القماش أو الخشب الذي تبحث عنه؟"
            : "Can't find your specific fabric or wood choice?"}
        </h3>

        <p className="mt-2 text-[10px] leading-relaxed text-white/65 sm:text-[12px]">
          {isArabic
            ? "نوفر خامات مخصصة وفقاً لمواصفاتك واحتياجاتك الدقيقة. دعنا نناقش طلبك."
            : "We source custom materials according to your exact specifications. Let's discuss."}
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex min-h-[42px] w-full shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#d9b83f] px-4 text-[9px] font-bold tracking-[0.8px] text-[#171717] transition hover:bg-[#e8c84e] sm:w-auto sm:px-5"
      >
        {isArabic ? "توفير خامات مخصصة" : "CUSTOM SOURCING"}
        <ArrowRight size={15} className={isArabic ? "rotate-180" : ""} />
      </Link>
    </div>
  );
}

const processSteps = [
  {
    icon: "📐",
    title: "Room Floorplan Review",
    arabicTitle: "مراجعة مخطط الغرفة",
    description: "Architectural analysis of space dimensions.",
    arabicDescription: "تحليل هندسي لأبعاد ومساحة الغرفة.",
  },
  {
    icon: "▱",
    title: "Fabric & Swatch Matching",
    arabicTitle: "اختيار الأقمشة والعينات",
    description: "Selecting Makhmal, Leather, or Jacquard.",
    arabicDescription: "اختيار المخمل أو الجلد أو الجاكار.",
  },
  {
    icon: "✧",
    title: "Kiln-Dried Timber Inspection",
    arabicTitle: "فحص الأخشاب المجففة بالأفران",
    description: "Sindian Oak & German Beechwood check.",
    arabicDescription: "فحص خشب السنديان والزان الألماني.",
  },
  {
    icon: "◈",
    title: "Precision Joinery Framing",
    arabicTitle: "تجميع الهياكل بدقة",
    description: "Mortise-and-tenon frame joinery.",
    arabicDescription: "تجميع الهياكل باستخدام وصلات النقر واللسان.",
  },
  {
    icon: "♙",
    title: "Density-60 Foam Cushioning",
    arabicTitle: "حشوات إسفنج بكثافة 60",
    description: "Sag-free medical foam core layering.",
    arabicDescription: "طبقات إسفنج طبي مقاومة للهبوط.",
  },
  {
    icon: "✓",
    title: "Precision Stitching & Cut",
    arabicTitle: "القص والخياطة الدقيقة",
    description: "Double-stitched German thread tailoring.",
    arabicDescription: "تفصيل بخيوط ألمانية وخياطة مزدوجة.",
  },
  {
    icon: "✧",
    title: "Hand Carving & Gold Leafing",
    arabicTitle: "النحت اليدوي والتذهيب",
    description: "Hand-carved motifs & gold gilding.",
    arabicDescription: "زخارف منحوتة يدوياً ولمسات من التذهيب.",
  },
  {
    icon: "⬡",
    title: "Sag & Weight Quality Audit",
    arabicTitle: "فحص الجودة والتحمل",
    description: "Rigorous structural audit & inspection.",
    arabicDescription: "فحص دقيق للهيكل والمتانة.",
  },
  {
    icon: "♧",
    title: "Protective Packaging & Transit",
    arabicTitle: "التغليف والنقل الآمن",
    description: "Scratch-proof protective wrapping.",
    arabicDescription: "تغليف واقٍ للحماية من الخدوش.",
  },
  {
    icon: "✓",
    title: "White-Glove Villa Fitting",
    arabicTitle: "التركيب الفاخر في الفلل",
    description: "On-site installation & 10y warranty.",
    arabicDescription: "التركيب في الموقع مع ضمان لمدة 10 سنوات.",
  },
];

export default function MaterialsCatalog({ initialTab = "all" }) {
  const { isArabic } = useLanguage();

  const [materialGroups, setMaterialGroups] = useState(() =>
    groupConfig.map((group) => ({ ...group, items: [] }))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    tabMapping[initialTab] || "all"
  );

  useEffect(() => {
    let isMounted = true;

    async function loadMaterials() {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await getMaterials();
        const apiMaterials = getArrayResponse(response);
        const mappedGroups = mapApiMaterials(apiMaterials);

        if (isMounted) {
          setMaterialGroups(mappedGroups);
        }
      } catch (error) {
        console.error("Materials catalog API error:", error);

        if (isMounted) {
          setLoadError(
            isArabic
              ? "تعذر تحميل العينات. يرجى المحاولة مرة أخرى."
              : "Unable to load materials. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadMaterials();

    return () => {
      isMounted = false;
    };
  }, [isArabic]);

  useEffect(() => {
    const queryTab =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("tab")
        : null;

    const requestedTab = queryTab || initialTab || "all";
    const targetCategory = tabMapping[requestedTab] || "all";

    setActiveCategory(targetCategory);

    if (targetCategory !== "all") {
      requestAnimationFrame(() => {
        document.getElementById(targetCategory)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [initialTab]);

  const scrollToCategory = (id) => {
    setActiveCategory(id);

    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#fbf6f4] px-3 py-7 min-[480px]:px-4 sm:px-[5%] sm:py-12"
    >
      {/* CATEGORY NAVIGATION */}
      <div className="sticky top-[65px] z-20 mb-7 border-b border-[#e8dfd2] bg-[#fbf6f4]/95 py-3 backdrop-blur-md sm:top-[75px] sm:mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categoryLinks.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => scrollToCategory(category.id)}
              className={`max-w-full rounded-full border px-3 py-2 text-center text-[8px] font-bold tracking-wide transition min-[480px]:px-3.5 min-[480px]:text-[9px] sm:px-4 sm:text-[10px] ${
                activeCategory === category.id
                  ? "border-[#d9b83f] bg-[#d9b83f] text-[#151515]"
                  : "border-[#e4dcd0] bg-white text-[#36312b] hover:border-[#d9b83f]"
              }`}
            >
              {isArabic ? category.arabicLabel : category.label}
            </button>
          ))}
        </div>
      </div>

      {/* MATERIAL GROUPS */}
      <div className="mx-auto w-full max-w-[1500px] space-y-9 sm:space-y-12">
        {isLoading && (
          <p className="py-10 text-center text-sm text-[#77716a]">
            {isArabic ? "جاري تحميل العينات..." : "Loading materials..."}
          </p>
        )}

        {!isLoading && loadError && (
          <p className="py-10 text-center text-sm text-red-600">
            {loadError}
          </p>
        )}

        {!isLoading &&
          !loadError &&
          materialGroups.map((group) => (
            <div
              id={group.id}
              key={group.id}
              className="scroll-mt-36"
            >
              <div className="mb-4 flex min-w-0 flex-wrap items-center gap-2 border-b border-[#dfc98d] pb-3 sm:mb-5 sm:gap-3">
                <h2 className="break-words font-serif text-[21px] font-semibold leading-tight text-[#172433] min-[480px]:text-[23px] sm:text-[29px]">
                  {isArabic ? group.arabicTitle : group.title}
                </h2>

                <span className="rounded-full bg-[#d9b83f] px-2.5 py-1.5 text-[7px] font-bold tracking-wide text-[#151515] min-[480px]:text-[8px] sm:px-3 sm:text-[9px]">
                  {group.items.length}{" "}
                  {isArabic ? group.arabicBadge : group.badge}
                </span>
              </div>

              {group.items.length > 0 ? (
                <div className="grid min-w-0 grid-cols-2 gap-2.5 min-[480px]:gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                  {group.items.map((item, index) => (
                    <MaterialCard
                      key={item.id}
                      item={item}
                      code={group.code}
                      index={index}
                      isArabic={isArabic}
                      onSelect={() =>
                        setSelectedMaterial({
                          ...item,
                          code: `@${group.code}${index + 1}`,
                          category: group.title,
                          arabicCategory: group.arabicTitle,
                        })
                      }
                    />
                  ))}
                </div>
              ) : (
                <p className="py-5 text-center text-sm text-[#77716a]">
                  {isArabic
                    ? "لا توجد عينات متاحة حالياً."
                    : "No materials available in this category."}
                </p>
              )}

              <SourcingBanner isArabic={isArabic} />
            </div>
          ))}
      </div>

      {/* FROM CONSULTATION TO ROYAL LUXURY */}
      <section className="mt-10 w-full sm:mt-16">
        <div className="mb-7 px-1 text-center sm:mb-8">
          <span className="text-[8px] font-bold tracking-[1.7px] text-[#b28e2e] sm:text-[9px] sm:tracking-[2px]">
            {isArabic ? "عملية التصنيع حسب الطلب" : "OUR BESPOKE PROCESS"}
          </span>

          <h2 className="mt-3 font-serif text-[27px] font-bold leading-[1.15] text-[#172433] min-[480px]:text-[32px] sm:text-[42px]">
            {isArabic ? (
              <>
                من الاستشارة إلى
                <span className="block">الفخامة الملكية</span>
              </>
            ) : (
              <>
                FROM CONSULTATION TO ROYAL
                <span className="block">LUXURY</span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-3 max-w-[500px] text-[11px] leading-relaxed text-[#64748b] sm:text-[15px]">
            {isArabic
              ? "10 خطوات دقيقة تبدأ باختيار الخامات وتنتهي بالتركيب في منزلك."
              : "10 precision steps from material selection to home installation."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="group min-w-0 rounded-[18px] border border-[#e2ded5] bg-[#f8f6f1] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b83f] hover:shadow-md sm:min-h-[175px] sm:rounded-[23px] sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[11px] border border-[#d9b83f]/30 bg-[#0d171e] text-[20px] text-[#d9b83f] sm:h-11 sm:w-11">
                  {step.icon}
                </span>

                <span className="font-serif text-[14px] font-bold text-[#c49b27] sm:text-[15px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="break-words font-serif text-[15px] font-bold leading-tight text-[#172433] sm:text-[16px]">
                {isArabic ? step.arabicTitle : step.title}
              </h3>

              <p className="mt-2.5 text-[11px] leading-[1.6] text-[#64748b] sm:mt-3 sm:text-[12px]">
                {isArabic ? step.arabicDescription : step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex min-w-0 flex-col gap-4 rounded-[18px] border border-[#d9b83f]/30 bg-[#0d171e] p-5 shadow-lg min-[480px]:p-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-[23px] sm:px-8 sm:py-7">
          <div className="min-w-0">
            <h3 className="break-words font-serif text-[18px] font-bold leading-tight text-white min-[480px]:text-[20px] sm:text-[24px]">
              {isArabic
                ? "هل أنت مستعد لبدء رحلة تصميم أثاثك الخاص؟"
                : "Ready to Start Your Bespoke Furniture Journey?"}
            </h3>

            <p className="mt-2 text-[11px] leading-relaxed text-[#c2b5a5] sm:text-[14px]">
              {isArabic
                ? "تواصل مع خبرائنا في الرياض للحصول على إرشادات حول المخططات والخامات."
                : "Contact our Riyadh engineers for floorplan & material guidance."}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-[9px] bg-[#d9b83f] px-4 text-center text-[10px] font-extrabold tracking-[0.8px] text-[#111923] transition hover:bg-[#e8c84e] min-[480px]:text-[11px] sm:w-auto sm:min-h-[53px] sm:rounded-[10px] sm:px-7 sm:text-[11px] sm:tracking-[1px]"
          >
            {isArabic ? "احجز استشارة مجانية" : "BOOK FREE CONSULTATION"}
          </Link>
        </div>
      </section>

      {/* MATERIAL DETAIL POPUP */}
      {selectedMaterial && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="relative my-auto grid max-h-[90dvh] w-full max-w-[650px] grid-cols-1 overflow-y-auto rounded-xl bg-[#fbf6f4] sm:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMaterial(null)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-[#172433] shadow"
              aria-label={isArabic ? "إغلاق تفاصيل الخامة" : "Close material details"}
            >
              ✕
            </button>

            <div className="relative h-[190px] min-h-[190px] sm:h-full sm:min-h-[300px]">
              <Image
                src={selectedMaterial.image}
                alt={
                  isArabic
                    ? selectedMaterial.arabicName
                    : selectedMaterial.name
                }
                fill
                unoptimized={selectedMaterial.image.startsWith("http")}
                sizes="(max-width: 640px) 100vw, 325px"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8">
              <span className="text-[8px] font-bold tracking-widest text-[#b28e2e] sm:text-[9px]">
                {isArabic
                  ? `${selectedMaterial.arabicCategory} · ${selectedMaterial.code}`
                  : `${selectedMaterial.category} · ${selectedMaterial.code}`}
              </span>

              <h3 className="mt-3 break-words font-serif text-[23px] leading-tight text-[#172433] sm:text-[26px]">
                {isArabic
                  ? selectedMaterial.arabicName
                  : selectedMaterial.name}
              </h3>

              <p className="mt-3 text-[11px] leading-relaxed text-[#77716a] sm:text-[12px]">
                {isArabic
                  ? selectedMaterial.arabicDescription
                  : selectedMaterial.description}
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#d9b83f] px-4 text-[9px] font-bold text-[#171717] sm:mt-6 sm:w-auto sm:text-[10px]"
              >
                {isArabic ? "اطلب هذه العينة" : "REQUEST THIS SWATCH"}
                <ArrowRight
                  size={15}
                  className={isArabic ? "rotate-180" : ""}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
