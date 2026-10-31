
"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Location",
    arabicTitle: "قم بزيارة موقعنا",
    detail: "JG64+4F8, Dhahrat Laban, Riyadh 13787, Saudi Arabia",
    href: "https://www.google.com/maps/search/?api=1&query=JG64%2B4F8%2C+Dhahrat+Laban%2C+Riyadh",
  },
  {
    icon: Phone,
    title: "Call Our Team",
    arabicTitle: "اتصل بفريقنا",
    detail: "+966 55 083 4729",
    href: "tel:+966550834729",
  },
  {
    icon: Mail,
    title: "Email Us",
    arabicTitle: "راسلنا عبر البريد الإلكتروني",
    detail: "info@ruasadiqtrading.com",
    href: "mailto:info@ruasadiqtrading.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    arabicTitle: "ساعات العمل",
    detail: "10:00 AM – 10:00 PM · 7 Days a Week",
    arabicDetail: "10:00 صباحًا – 10:00 مساءً · طوال أيام الأسبوع",
    href: null,
  },
];

export default function ContactInformation() {
  const { isArabic } = useLanguage();

  return (
    <div
      id="contact-information"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
        {isArabic ? "تواصل معنا" : "Get In Touch"}
      </span>

      <h2 className="mt-3 font-serif text-3xl leading-tight text-[#172433] sm:text-4xl">
        {isArabic ? (
          <>
            يسعدنا أن
            <span className="block text-[#b99a32]">
              نسمع منك
            </span>
          </>
        ) : (
          <>
            We'd Love to
            <span className="block text-[#b99a32]">Hear From You</span>
          </>
        )}
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
        {isArabic
          ? "هل لديك استفسار أو تخطط لمشروع أثاث؟ فريقنا هنا لمساعدتك في العثور على الحل المناسب لمساحتك."
          : "Have a question or planning a furniture project? Our team is here to help you find the right solution for your space."}
      </p>

      <div className="mt-8 space-y-5">
        {contactDetails.map((item) => {
          const Icon = item.icon;

          const content = (
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9b83f]/15 text-[#a98925]">
                <Icon size={21} />
              </div>

              <div className="min-w-0 pt-1">
                <h3 className="font-serif text-lg text-[#172433]">
                  {isArabic ? item.arabicTitle : item.title}
                </h3>

                <p
                  dir="ltr"
                  className="mt-1 break-words text-sm leading-6 text-gray-500"
                >
                  {isArabic
                    ? item.arabicDetail || item.detail
                    : item.detail}
                </p>
              </div>
            </div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={
                item.href.startsWith("https://") ? "_blank" : undefined
              }
              rel={
                item.href.startsWith("https://") ? "noreferrer" : undefined
              }
              className="block rounded-xl transition hover:bg-white hover:shadow-sm"
            >
              {content}
            </a>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>

      <a
        href="https://wa.me/966550834729"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d9b83f] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#172433] transition hover:bg-[#d9b83f]"
      >
        <MessageCircle size={17} />
        {isArabic ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp"}
      </a>
    </div>
  );
}
