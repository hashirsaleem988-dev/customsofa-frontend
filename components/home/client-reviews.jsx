
"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const reviews = [
  {
    name: "Ahmed Al-Rashid",
    city: "Riyadh, Saudi Arabia",
    review:
      "Excellent quality and beautiful finishing. The sofa was exactly what we wanted for our living room. Highly recommended!",
    arabicReview:
      "جودة ممتازة وتشطيب جميل. كانت الأريكة تماماً كما أردنا لغرفة المعيشة. أنصح بهم بشدة!",
  },
  {
    name: "Mohammed Al-Qahtani",
    city: "Jeddah, Saudi Arabia",
    review:
      "Very professional service from start to finish. The team understood our requirements and delivered a beautiful majlis.",
    arabicReview:
      "خدمة احترافية للغاية من البداية إلى النهاية. فهم الفريق متطلباتنا وقدموا مجلساً جميلاً.",
  },
  {
    name: "Abdullah Al-Otaibi",
    city: "Dammam, Saudi Arabia",
    review:
      "The material quality is outstanding. The furniture looks premium and the finishing details are really impressive.",
    arabicReview:
      "جودة الخامات استثنائية. يبدو الأثاث فاخراً وتفاصيل التشطيب مثيرة للإعجاب حقاً.",
  },
  {
    name: "Faisal Al-Harbi",
    city: "Riyadh, Saudi Arabia",
    review:
      "I am extremely satisfied with the custom sofa. The design, comfort and craftsmanship exceeded my expectations.",
    arabicReview:
      "أنا راضٍ للغاية عن الأريكة المصممة حسب الطلب. التصميم والراحة وجودة التصنيع تجاوزت توقعاتي.",
  },
  {
    name: "Khalid Al-Mutairi",
    city: "Makkah, Saudi Arabia",
    review:
      "Great experience and excellent customer service. They helped us choose the right fabric and design for our home.",
    arabicReview:
      "تجربة رائعة وخدمة عملاء ممتازة. ساعدونا في اختيار القماش والتصميم المناسب لمنزلنا.",
  },
  {
    name: "Omar Al-Shehri",
    city: "Khobar, Saudi Arabia",
    review:
      "Beautiful furniture with premium finishing. Everything was handled professionally. I would definitely recommend them.",
    arabicReview:
      "أثاث جميل بتشطيبات فاخرة. تمت إدارة جميع التفاصيل باحترافية. أوصي بهم بالتأكيد.",
  },
  {
    name: "Saad Al-Dosari",
    city: "Jubail, Saudi Arabia",
    review:
      "The quality and attention to detail are impressive. Our living room looks completely different now. Loved the result!",
    arabicReview:
      "الجودة والاهتمام بالتفاصيل مذهلان. أصبحت غرفة معيشتنا مختلفة تماماً الآن. أحببنا النتيجة!",
  },
  {
    name: "Turki Al-Anazi",
    city: "Taif, Saudi Arabia",
    review:
      "Amazing custom furniture experience. The team was helpful, the design was elegant and the final result was beautiful.",
    arabicReview:
      "تجربة رائعة في تصميم الأثاث حسب الطلب. كان الفريق متعاوناً، والتصميم أنيقاً والنتيجة النهائية جميلة.",
  },
];

const extendedReviews = [...reviews, ...reviews, ...reviews];

export default function ClientReviews() {
  const { isArabic } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(reviews.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [slideStep, setSlideStep] = useState(33.333333);

  // Responsive slide width
  useEffect(() => {
    const updateSlideStep = () => {
      setSlideStep(window.innerWidth <= 768 ? 100 : 33.333333);
    };

    updateSlideStep();
    window.addEventListener("resize", updateSlideStep);

    return () => window.removeEventListener("resize", updateSlideStep);
  }, []);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Seamless infinite loop
  const handleTransitionEnd = () => {
    if (activeIndex >= reviews.length * 2) {
      setTransitionEnabled(false);
      setActiveIndex(reviews.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  // Dots navigation
  const handleDotClick = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(reviews.length + index);
  };

  const currentDot =
    ((activeIndex - reviews.length) % reviews.length + reviews.length) %
    reviews.length;

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#fbf6f2] py-[60px] sm:py-[85px] sm:pb-[75px]"
    >
      {/* HEADING */}

      <div className="mb-[35px] px-5 text-center sm:mb-[65px]">
        <span className="text-[9px] font-bold tracking-[2px] text-[#b18a4b] sm:text-[11px] sm:tracking-[3px]">
          {isArabic ? "تجارب العملاء" : "CUSTOMER EXPERIENCES"}
        </span>

        <h2 className="my-3 font-bold text-[30px] leading-tight text-[#24201c] sm:my-[15px] sm:text-[clamp(30px,4vw,46px)]">
          {isArabic ? (
            <>
              آراء <span className="text-[#b18a4b]">عملائنا</span>
            </>
          ) : (
            <>
              What Our <span className="text-[#b18a4b]">Clients Say</span>
            </>
          )}
        </h2>

        <p className="mx-auto max-w-[420px] text-[12px] leading-[1.7] text-[#77716b] sm:max-w-none sm:text-[14px]">
          {isArabic
            ? "تجارب حقيقية من العملاء الذين اختاروا رُوَى صادق لمنازلهم."
            : "Real experiences from customers who chose RUA SADIQ for their homes."}
        </p>
      </div>

      {/* REVIEWS SLIDER */}

      <div className="w-full overflow-hidden py-5 sm:py-[30px]">
        <div
          className={`flex items-center will-change-transform ${
            transitionEnabled
              ? "transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "transition-none"
          }`}
          style={{
            transform: `translateX(-${activeIndex * slideStep}vw)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedReviews.map((review, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                className="flex w-[100vw] shrink-0 basis-[100vw] justify-center px-[9%] py-[15px] min-[769px]:w-[33.333333vw] min-[769px]:basis-[33.333333vw] min-[769px]:px-[13px] min-[769px]:py-5"
                key={`${review.name}-${index}`}
              >
                <article
                  className={`flex min-h-[270px] w-full max-w-[430px] flex-col rounded-xl border bg-white p-5 shadow-[0_8px_25px_rgba(48,36,20,0.04)] transition-all duration-[650ms] sm:min-h-[290px] sm:max-w-[410px] sm:p-[30px_27px] ${
                    isActive
                      ? "scale-100 border-[#c19a5b] opacity-100 shadow-[0_18px_45px_rgba(90,65,30,0.12)] min-[769px]:scale-[1.08]"
                      : "scale-[0.9] border-[#eee6dc] opacity-50 min-[769px]:scale-[0.88] min-[769px]:opacity-[0.65]"
                  }`}
                >
                  {/* TOP */}

                  <div className="mb-5 flex items-center justify-between sm:mb-[23px]">
                    <Quote
                      className="text-[#c19a5b] opacity-80"
                      size={28}
                    />

                    <div className="flex gap-[3px] text-[#c49a50]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  {/* REVIEW TEXT */}

                  <p className="flex-1 text-[13px] leading-[1.8] text-[#514a43] sm:text-[14px] sm:leading-[1.9]">
                    "{isArabic ? review.arabicReview : review.review}"
                  </p>

                  <div className="my-[17px] h-px bg-[#eee8df] sm:my-[22px]" />

                  {/* AUTHOR */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#f4ead9] text-[17px] font-bold text-[#9b743d]">
                      {review.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="mb-1 text-[12px] font-bold text-[#29241f] sm:text-[13px]">
                        {review.name}
                      </h3>

                      <span className="text-[10px] text-[#8b8379] sm:text-[11px]">
                        {review.city}
                      </span>
                    </div>
                  </div>

                  {/* VERIFIED */}

                  <div className="mt-[15px] flex items-center gap-1.5 text-[10px] text-[#8a795f]">
                    <span className="inline-flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#b18a4b] text-[10px] text-white">
                      ✓
                    </span>
                    {isArabic ? "عميل موثّق" : "Verified Client"}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOTS */}

      <div className="mt-[18px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-[7px] sm:gap-[9px]">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={
                isArabic
                  ? `الانتقال إلى التقييم رقم ${index + 1}`
                  : `Go to review ${index + 1}`
              }
              aria-current={currentDot === index ? "true" : undefined}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                currentDot === index
                  ? "w-[25px] bg-[#b18a4b]"
                  : "w-[7px] bg-[#d7c8b3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
