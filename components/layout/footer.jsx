
"use client";

import {
  Camera,
  Globe,
  Play,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const quickLinks = [
  { name: "Shop", arabicName: "المتجر", href: "/shop" },
  { name: "Materials", arabicName: "المواد", href: "/materials" },
  { name: "About Us", arabicName: "من نحن", href: "/about" },
  { name: "Contact", arabicName: "اتصل بنا", href: "/contact" },
  { name: "Privacy Policy", arabicName: "سياسة الخصوصية", href: "/privacy-policy" },
];

export default function Footer() {
  const { isArabic } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full border-t border-[#e8e3d9] bg-[#f8f6f0] px-[6%] pt-11 text-[#243447] sm:px-[4%] sm:pt-12 lg:px-[2.5%] lg:pt-[50px]"
    >
      <div className="mx-auto w-full max-w-[1800px]">

        <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-[30px] lg:pb-[38px]">

          {/* Brand */}

          <div className="min-w-0">
            <h2 className="mb-3.5 font-serif text-[25px] font-normal leading-tight text-[#d3a92e] sm:mb-4">
              Rua Sadiq Trading
            </h2>

            <p className="m-0 max-w-[330px] text-sm leading-[1.6] text-[#26394c]">
              {isArabic
                ? "ستائر فاخرة وأرائك راقية وديكورات منزلية مميزة. نضفي الأناقة والحرفية المصممة حسب الطلب على كل منزل سعودي منذ عام 2010."
                : "Premium curtains, luxury sofas & home décor. Bringing elegance and custom craftsmanship to every Saudi home since 2010."}
            </p>

            <div className="mt-[18px] flex items-center gap-[13px] sm:mt-[22px]">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeece6] text-[#374151] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#d8b333] hover:text-[#111827]"
              >
                <Camera size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeece6] text-[#374151] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#d8b333] hover:text-[#111827]"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeece6] text-[#374151] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#d8b333] hover:text-[#111827]"
              >
                <Play size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div className="min-w-0">
            <h3 className="mb-[15px] mt-1 font-serif text-sm font-bold leading-[1.3] tracking-[1px] text-[#bda078] sm:mb-[17px] sm:text-[15px]">
              {isArabic ? "روابط سريعة" : "QUICK LINKS"}
            </h3>

            <ul className="m-0 list-none space-y-[10px] p-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm leading-[1.45] text-[#26394c] no-underline transition-colors duration-300 hover:text-[#c49b2e] sm:text-[15px]"
                  >
                    {isArabic ? link.arabicName : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="min-w-0">
            <h3 className="mb-[15px] mt-1 font-serif text-sm font-bold leading-[1.3] tracking-[1px] text-[#bda078] sm:mb-[17px] sm:text-[15px]">
              {isArabic ? "تواصل معنا" : "GET IN TOUCH"}
            </h3>

            <div className="mb-[13px] flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-[19px] w-[19px] min-w-[19px] text-[#d5a91e]" />

              <a
                href="https://www.google.com/maps/search/?api=1&query=Dhahrat+Laban+Riyadh+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-[13px] leading-[1.45] text-[#26394c] no-underline transition-colors hover:text-[#c49b2e] sm:text-sm"
              >
                JG64+4F8, Dhahrat Laban,
                Riyadh 13787, Saudi Arabia
              </a>
            </div>

            <div className="mb-[13px] flex items-start gap-2.5">
              <Phone className="mt-0.5 h-[19px] w-[19px] min-w-[19px] text-[#d5a91e]" />

              <a
                href="tel:+966550834729"
                className="break-words text-[13px] leading-[1.45] text-[#26394c] no-underline transition-colors hover:text-[#c49b2e] sm:text-sm"
              >
                055 083 4729
              </a>
            </div>

            <div className="mb-[13px] flex items-start gap-2.5">
              <Mail className="mt-0.5 h-[19px] w-[19px] min-w-[19px] text-[#d5a91e]" />

              <a
                href="mailto:info@ruasadiqtrading.com"
                className="break-words text-[13px] leading-[1.45] text-[#26394c] no-underline transition-colors hover:text-[#c49b2e] sm:text-sm"
              >
                info@ruasadiqtrading.com
              </a>
            </div>

            <div className="mb-[13px] flex items-start gap-2.5">
              <Clock className="mt-0.5 h-[19px] w-[19px] min-w-[19px] text-[#d5a91e]" />

              <p className="m-0 text-[13px] leading-[1.45] text-[#26394c] sm:text-sm">
                {isArabic ? "ساعات العمل:" : "Store Hours:"}
                <br />
                {isArabic
                  ? "10:00 صباحاً - 10:00 مساءً (طوال أيام الأسبوع)"
                  : "10:00 AM - 10:00 PM (7 days a week)"}
              </p>
            </div>
          </div>

          {/* Newsletter */}

          <div className="min-w-0">
            <h3 className="mb-[15px] mt-1 font-serif text-sm font-bold leading-[1.3] tracking-[1px] text-[#bda078] sm:mb-[17px] sm:text-[15px]">
              {isArabic ? "ابقَ على اطلاع" : "STAY UPDATED"}
            </h3>

            <p className="mb-4 text-sm leading-[1.6] text-[#26394c]">
              {isArabic
                ? "اشترك للحصول على العروض الحصرية وآخر التحديثات."
                : "Subscribe to get exclusive offers and updates."}
            </p>

            <form
              className="flex w-full items-stretch gap-[9px]"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder={
                  isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"
                }
                aria-label={
                  isArabic ? "بريدك الإلكتروني" : "Your email address"
                }
                required
                className="h-11 min-w-0 w-full rounded-[7px] border border-[#e3e0da] bg-white px-3 text-[13px] text-[#26394c] outline-none placeholder:text-[#b3b6bc] focus:border-[#d5ae36] sm:h-[46px]"
              />

              <button
                type="submit"
                aria-label={isArabic ? "اشترك" : "Subscribe"}
                className="flex h-11 w-11 min-w-11 items-center justify-center rounded-[9px] border-none bg-[#d8b333] p-0 text-[#101820] transition-colors duration-300 hover:bg-[#edc84c] sm:h-[46px] sm:w-[46px] sm:min-w-[46px]"
              >
                <Send size={19} />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}

        <div className="flex min-h-[65px] flex-col items-start justify-center gap-[7px] border-t border-[#e1ddd5] py-[18px] sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-4">
          <p className="m-0 text-[11px] leading-[1.6] text-[#64748b] sm:text-xs">
            © {new Date().getFullYear()} Rua Sadiq Trading
            (Al-Amir Trading Est.). All rights reserved.
          </p>

          <span className="text-[11px] leading-[1.6] text-[#64748b] sm:text-xs">
            {isArabic
              ? "نصنع الفخامة للمنازل السعودية"
              : "Crafting Luxury for Saudi Homes"}
          </span>
        </div>

      </div>
    </footer>
  );
}
