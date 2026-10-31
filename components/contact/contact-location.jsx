
"use client";

import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactLocation() {
  const { isArabic } = useLanguage();

  const address =
    "JG64+4F8, Dhahrat Laban, Riyadh 13787, Saudi Arabia";

  const mapQuery = encodeURIComponent(address);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#fbf6f4] px-4 pb-16 pt-8 sm:px-8 lg:px-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
            {isArabic ? "اعثر علينا" : "Find Us"}
          </span>

          <h2 className="mt-4 font-serif text-3xl text-[#172433] sm:text-4xl lg:text-5xl">
            {isArabic ? (
              <>
                معرضنا في{" "}
                <span className="text-[#c5a43a]">الرياض</span>
              </>
            ) : (
              <>
                Our Riyadh{" "}
                <span className="text-[#c5a43a]">Showroom</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            {isArabic
              ? "تفضل بزيارتنا في الرياض وتواصل مع فريقنا لاستكشاف مجموعات الأثاث وحلول التصميم الداخلي المصممة حسب الطلب."
              : "Visit us in Riyadh and connect with our team to explore furniture collections and bespoke interior solutions."}
          </p>
        </div>

        {/* Location Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#eee5df] bg-white shadow-sm">

          {/* Map */}
          <div className="h-[300px] w-full sm:h-[400px] lg:h-[450px]">
            <iframe
              title={
                isArabic
                  ? "موقع شركة رواء صادق التجارية في الرياض"
                  : "Rua Sadiq Trading Riyadh Location"
              }
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Details */}
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9b83f]/15 text-[#a98925]">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#172433]">
                  شركة رواء صادق التجارية
                </h3>

                <p
                  dir="ltr"
                  className="mt-2 max-w-lg text-sm leading-6 text-gray-500"
                >
                  {address}
                </p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#172433] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d9b83f] hover:text-[#172433]"
            >
              {isArabic ? "احصل على الاتجاهات" : "Get Directions"}
              <Navigation size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
