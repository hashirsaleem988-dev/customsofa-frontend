
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import InquiryDrawer from "./inquiry-drawer";
import { useLanguage } from "@/context/language-context";

const navLinks = [
  { name: "Materials", ar: "المواد", href: "/materials" },
  { name: "About Us", ar: "من نحن", href: "/about" },
  { name: "Blog", ar: "المدونة", href: "/blog" },
  { name: "Contact", ar: "اتصل بنا", href: "/contact" },
];

const shopCategories = [
  {
    name: "King Size Sofa",
    ar: "أريكة كينغ سايز",
    href: "/shop?category=king-size-sofa",
  },
  {
    name: "Premium Sofas",
    ar: "أرائك فاخرة",
    href: "/shop?category=premium-sofas",
  },
  {
    name: "Majlis",
    ar: "مجالس",
    href: "/shop?category=majlis",
  },
  {
    name: "Chairs & Recliners",
    ar: "كراسي ومقاعد استرخاء",
    href: "/shop?category=chairs-recliners",
  },
  {
    name: "Premium Beds",
    ar: "أسرّة فاخرة",
    href: "/shop?category=premium-beds",
  },
  {
    name: "Curtains",
    ar: "ستائر",
    href: "/shop?category=curtains",
  },
  {
    name: "Curtain Rods",
    ar: "قضبان الستائر",
    href: "/shop?category=curtain-rods",
  },
];

export default function Header() {
  const pathname = usePathname();
  const { isArabic, toggleLanguage } = useLanguage();

  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  // Receive products added from other components
  useEffect(() => {
    const handleAddInquiry = (event) => {
      const product = event.detail;

      if (!product) return;

      setInquiries((current) => {
        const productId =
          product.id || product.slug || product.name || product.title;

        const alreadyAdded = current.some(
          (item) =>
            (item.id || item.slug || item.name || item.title) === productId
        );

        if (alreadyAdded) return current;

        return [...current, product];
      });
    };

    window.addEventListener("add-inquiry", handleAddInquiry);

    return () => {
      window.removeEventListener("add-inquiry", handleAddInquiry);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setMobileShopOpen(false);
  }, [pathname]);

  const removeInquiry = (index) => {
    setInquiries((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const isActive = (href) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const navClass = (active) => `
    flex items-center justify-center
    whitespace-nowrap rounded-full
    px-3 py-0 text-[15px] leading-7 font-semibold
    text-[#171717]
    transition-colors duration-200
    ${active ? "bg-[#DAB52F]" : "bg-transparent hover:bg-[#DAB52F]"}
  `;

  const mobileNavClass = (active) => `
    flex min-h-[43px] w-full items-center justify-between
    rounded-lg px-3 text-left
    text-[14px] font-semibold text-[#171717]
    no-underline transition-colors duration-200
    ${active ? "bg-[#DAB52F]" : "bg-transparent hover:bg-[#DAB52F]"}
  `;

  return (
    <>
      <header
        dir={isArabic ? "rtl" : "ltr"}
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-[#ECEAE5] shadow-[0_3px_15px_rgba(0,0,0,0.07)]"
              : "bg-transparent shadow-none"
          }
        `}
      >
        <div className="mx-auto flex h-[60px] w-full max-w-[1150px] items-center justify-between px-3 sm:px-4 md:h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-[120px] shrink-0 flex-col items-center text-[#171717] no-underline md:w-[190px]"
          >
            <span className="text-[16px] leading-none md:text-[20px]">
              ❀
            </span>
            <span className="mt-0.5 text-[13px] font-extralight leading-none tracking-[2px] md:text-[16px] md:tracking-[3px]">
              RUA SADIQ
            </span>
            <span className="mt-0.5 w-full text-center text-[3px] font-normal tracking-[1.5px] md:text-[4px] md:tracking-[2px]">
              AL-AMIR TRADING EST
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 xl:flex">
            <Link href="/" className={navClass(isActive("/"))}>
              {isArabic ? "الرئيسية" : "Home"}
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setShopDropdownOpen((prev) => !prev)}
                aria-expanded={shopDropdownOpen}
                className={`${navClass(isActive("/shop"))} gap-1`}
              >
                {isArabic ? "المتجر" : "Shop"}

                {shopDropdownOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <div
                className={`absolute left-0 top-full z-[100] w-[312px] pt-2 transition-all duration-200 ${
                  shopDropdownOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white py-3 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex min-h-[54px] items-center px-6 text-[19px] font-normal text-[#17202b] transition-colors duration-200 hover:bg-[#F7F5F0] hover:text-[#A98925]"
                    >
                      {isArabic ? category.ar : category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navClass(isActive(link.href))}
              >
                {isArabic ? link.ar : link.name}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            {/* Language */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isArabic ? "Switch to English" : "التغيير إلى العربية"}
              className="flex h-[30px] items-center gap-1 rounded-lg border border-[#171717]/20 bg-white/30 px-2 text-[10px] font-semibold text-[#171717] shadow-sm transition-colors hover:bg-[#DAB52F] md:h-[32px] md:gap-2 md:rounded-xl md:px-4 md:text-[12px]"
            >
              <Globe size={16} className="md:hidden" />
              <Globe size={19} className="hidden md:block" />
              {isArabic ? "English" : "العربية"}
            </button>

            {/* Inquiry Bag */}
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              aria-label={isArabic ? "فتح قائمة الاستفسارات" : "Open inquiry list"}
              className="relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border border-[#171717]/20 bg-white/30 text-[#171717] shadow-sm transition-colors hover:bg-[#DAB52F] md:h-[42px] md:w-[42px] md:rounded-xl"
            >
              <ShoppingBag size={19} className="md:hidden" />
              <ShoppingBag size={26} className="hidden md:block" />

              {inquiries.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#DAB52F] px-1 text-[10px] font-bold text-[#171717]">
                  {inquiries.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen
                  ? isArabic
                    ? "إغلاق القائمة"
                    : "Close menu"
                  : isArabic
                    ? "فتح القائمة"
                    : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg border border-[#171717]/20 bg-white/30 text-[#171717] shadow-sm transition-colors hover:bg-[#DAB52F] xl:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-[#171717]/10 bg-[#ECEAE5] px-5 py-3 shadow-lg">
            <Link href="/" className={mobileNavClass(isActive("/"))}>
              {isArabic ? "الرئيسية" : "Home"}
            </Link>

            {/* Mobile Shop Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setMobileShopOpen((prev) => !prev)}
                aria-expanded={mobileShopOpen}
                className={mobileNavClass(isActive("/shop"))}
              >
                {isArabic ? "المتجر" : "Shop"}

                {mobileShopOpen ? (
                  <ChevronUp size={17} />
                ) : (
                  <ChevronDown size={17} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileShopOpen
                    ? "max-h-[420px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-3 border-l-2 border-[#DAB52F] py-1 pl-3">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex min-h-[42px] items-center rounded-lg px-3 text-[13px] font-medium text-[#303030] transition-colors hover:bg-[#DAB52F]/30"
                    >
                      {isArabic ? category.ar : category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={mobileNavClass(isActive(link.href))}
              >
                {isArabic ? link.ar : link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Inquiry Drawer */}
      <InquiryDrawer
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        inquiries={inquiries}
        onRemove={removeInquiry}
      />
    </>
  );
}
