
"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Building2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const locations = [
  { name: "North Riyadh", arabicName: "شمال الرياض", x: "55%", y: "22%" },
  { name: "Al Olaya", arabicName: "العليا", x: "48%", y: "42%" },
  { name: "Al Malaz", arabicName: "الملز", x: "58%", y: "58%" },
  { name: "South Riyadh", arabicName: "جنوب الرياض", x: "43%", y: "79%" },
  { name: "West Riyadh", arabicName: "غرب الرياض", x: "23%", y: "49%" },
  { name: "East Riyadh", arabicName: "شرق الرياض", x: "78%", y: "53%" },
];

export default function AboutRiyadhMap() {
  const { isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#101d29] px-4 py-16 text-white sm:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d9b83f]">
            {isArabic ? "شبكة خدماتنا" : "Our Service Network"}
          </span>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                نخدم جميع أنحاء{" "}
                <span className="text-[#d9b83f]">الرياض</span>
              </>
            ) : (
              <>
                Serving Across{" "}
                <span className="text-[#d9b83f]">Riyadh</span>
              </>
            )}
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            {isArabic
              ? "نقدم أثاثًا استثنائيًا وتصاميم مخصصة وخدمات متميزة للمنازل والشركات في جميع أنحاء الرياض."
              : "Bringing exceptional furniture, bespoke designs and dedicated service to homes and businesses throughout Riyadh."}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Decorative Location Map */}
          <div className="relative mx-auto aspect-square w-full max-w-[570px] overflow-hidden rounded-3xl border border-white/10 bg-[#172b3b]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            {/* Decorative roads */}
            <svg
              viewBox="0 0 500 500"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M-20 140 L520 370 M40 -20 L350 520 M-20 320 L520 100 M150 -20 L80 520 M360 -20 L430 520"
                stroke="#8b9ba7"
                strokeOpacity=".25"
                strokeWidth="7"
              />
              <path
                d="M-20 140 L520 370 M40 -20 L350 520 M-20 320 L520 100"
                stroke="#d9b83f"
                strokeOpacity=".25"
                strokeWidth="1.5"
                strokeDasharray="8 9"
              />
              <path
                d="M100 240 L210 180 L330 240 L390 340 L260 420 L130 360 Z"
                stroke="#d9b83f"
                strokeOpacity=".35"
                strokeWidth="2"
              />
            </svg>

            {/* Riyadh Center Label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="rounded-full border border-[#d9b83f]/30 bg-[#d9b83f]/10 px-4 py-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#d9b83f]">
                  {isArabic ? "الرياض" : "RIYADH"}
                </span>
              </div>
            </div>

            {/* Map Location Pins */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="absolute z-10"
                style={{ left: location.x, top: location.y }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <div className="group relative -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#d9b83f]/40" />

                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d9b83f] bg-[#d9b83f] text-[#172433] shadow-lg">
                    <MapPin size={16} />
                  </span>

                  <span className="absolute left-1/2 top-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0d171e] px-3 py-1.5 text-[10px] text-white shadow-xl sm:block">
                    {isArabic ? location.arabicName : location.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d171e]/80 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#d9b83f]" />
              <span className="text-[9px] uppercase tracking-wider text-white/70">
                {isArabic ? "مناطق الخدمة" : "Service Locations"}
              </span>
            </div>
          </div>

          {/* Location Details */}
          <div>

            {/* Across the City */}
            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
              <div className="rounded-xl bg-[#d9b83f]/10 p-3 text-[#d9b83f]">
                <Navigation size={23} />
              </div>

              <div>
                <h3 className="font-serif text-2xl">
                  {isArabic ? "في جميع أنحاء المدينة" : "Across the City"}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  {isArabic
                    ? "يقدم فريقنا خدماته للعملاء في مختلف مناطق الرياض، ويساعدهم على تنفيذ مشاريع الأثاث والتصميم الداخلي."
                    : "Our team serves customers across multiple areas of Riyadh, helping bring furniture and interior projects to life."}
                </p>
              </div>
            </div>

            {/* Residential & Commercial */}
            <div className="mt-7 flex items-start gap-4">
              <div className="rounded-xl bg-[#d9b83f]/10 p-3 text-[#d9b83f]">
                <Building2 size={23} />
              </div>

              <div>
                <h3 className="font-serif text-2xl">
                  {isArabic
                    ? "المشاريع السكنية والتجارية"
                    : "Residential & Commercial"}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  {isArabic
                    ? "من المنازل الخاصة إلى المساحات التجارية، نركز على التصميم المدروس والحرفية عالية الجودة."
                    : "From private residences to commercial spaces, we focus on thoughtful design and quality craftsmanship."}
                </p>
              </div>
            </div>

            {/* Location List */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3"
                >
                  <MapPin size={14} className="shrink-0 text-[#d9b83f]" />

                  <span className="text-xs text-white/75">
                    {isArabic ? location.arabicName : location.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
