
"use client";

import Image from "next/image";
import {
  MessageSquare,
  Layers,
  Compass,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const steps = [
  {
    number: "01",
    title: "Floorplan Submission",
    arabicTitle: "إرسال مخطط الأرضية",
    description: "Send room dimensions for layout review.",
    arabicDescription: "أرسل أبعاد الغرفة لمراجعة التصميم والتوزيع.",
    image: "/images/consultation/floorplan-submission.webp",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Material Selection",
    arabicTitle: "اختيار المواد",
    description: "Choose from 27 certified swatches.",
    arabicDescription: "اختر من بين 27 عينة معتمدة من الأقمشة والمواد.",
    image: "/images/consultation/material-selection.webp",
    icon: Layers,
  },
  {
    number: "03",
    title: "Atelier Manufacturing",
    arabicTitle: "التصنيع في الورشة",
    description: "Precision tailoring & D60 foam core.",
    arabicDescription: "تصنيع دقيق باستخدام إسفنج D60 عالي الكثافة.",
    image: "/images/consultation/atelier-manufacturing.webp",
    icon: Compass,
  },
  {
    number: "04",
    title: "Home Fitting & Warranty",
    arabicTitle: "التركيب المنزلي والضمان",
    description: "White-glove fitting with 10y warranty.",
    arabicDescription: "تركيب احترافي مع ضمان لمدة 10 سنوات.",
    image: "/images/consultation/home-fitting-warranty.webp",
    icon: ShieldCheck,
  },
];

export default function ConsultationProcess() {
  const { isArabic } = useLanguage();

  const handleConsultation = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#08131d] px-[5%] py-[42px] pb-[35px] sm:py-12 sm:pb-[25px]"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* HEADING */}

        <div className="mb-[30px] text-center sm:mb-[42px]">
          <h2 className="font-serif text-[30px] font-normal leading-[1.2] text-[#f8f5ef] sm:text-[clamp(30px,3.2vw,44px)]">
            {isArabic ? (
              <>
                من الاستشارة إلى{" "}
                <span className="font-bold text-[#d9ad32]">
                  الفخامة الملكية
                </span>
              </>
            ) : (
              <>
                From Consultation to{" "}
                <span className="font-bold text-[#d9ad32]">
                  Royal Luxury
                </span>
              </>
            )}
          </h2>

          <div className="mx-auto mt-[5px] h-[3px] w-[90px] rounded-full bg-[#d9ad32]" />
        </div>

        {/* DIVIDER */}

        <div className="mb-[22px] h-px w-full bg-[#d9ad32]/20 sm:mb-[29px]" />

        {/* PROCESS GRID */}

        <div className="grid grid-cols-1 gap-[18px] min-[601px]:grid-cols-2 min-[601px]:gap-5 min-[1025px]:grid-cols-4 min-[1025px]:gap-7">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="group relative isolate h-[420px] overflow-hidden rounded-[17px] border border-[#d9ad32]/25 bg-[#17232d] transition-all duration-400 hover:-translate-y-1.5 hover:border-[#d9ad32] min-[601px]:h-[430px] min-[1025px]:h-[455px] min-[1025px]:rounded-[23px]"
                key={step.number}
              >
                {/* IMAGE */}

                <Image
                  src={step.image}
                  alt={isArabic ? step.arabicTitle : step.title}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  className="z-[-2] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/[0.08] via-transparent via-[35%] to-black/[0.88]" />

                {/* ICON */}

                <div className="absolute left-3.5 top-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-[#d9ad32]/35 bg-[#26323b] text-[#e2b52f] shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* NUMBER */}

                <span className="absolute right-3.5 top-[18px] min-w-[42px] rounded-xl border border-[#d9ad32]/25 bg-[#17232d] px-[9px] py-[5px] text-center font-serif text-[15px] font-bold text-[#e2b52f]">
                  {step.number}
                </span>

                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 w-full px-[19px] pb-5 pt-6 sm:px-5">
                  <h3 className="mb-1.5 font-serif text-[19px] font-bold leading-[1.3] text-white sm:text-[20px]">
                    {isArabic ? step.arabicTitle : step.title}
                  </h3>

                  <p className="text-[13px] leading-[1.5] text-[#d6d0c7] sm:text-[14px]">
                    {isArabic
                      ? step.arabicDescription
                      : step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CONSULTATION BUTTON */}

        <div className="mt-5 flex w-full items-center justify-center">
          <button
            type="button"
            onClick={handleConsultation}
            className="inline-flex min-h-[58px] max-w-full items-center justify-center gap-3 whitespace-nowrap rounded-[17px] bg-[#d9b334] px-5 py-2.5 text-[11px] font-extrabold tracking-[0.3px] text-[#101820] transition-colors duration-300 hover:bg-[#edc84c] sm:min-h-[45px] sm:gap-[18px] sm:px-[18px] sm:py-3 sm:text-[12px]"
          >
            <span>
              {isArabic
                ? "احجز استشارتك المجانية"
                : "BOOK FREE CONSULTATION"}
            </span>

            <span className="inline-flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-full bg-[#08131d]/[0.12] text-[#101820] sm:h-8 sm:w-8">
              <ArrowRight
                size={19}
                className={isArabic ? "rotate-180" : ""}
              />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
