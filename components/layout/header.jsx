
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
import { getCategories } from "@/lib/api";

const INQUIRY_STORAGE_KEY = "customsofa-inquiries";

const navLinks = [
  { name: "Materials", ar: "المواد", href: "/materials" },
  { name: "About Us", ar: "من نحن", href: "/about" },
  { name: "Blog", ar: "المدونة", href: "/blog" },
  { name: "Contact", ar: "اتصل بنا", href: "/contact" },
];

const fallbackShopCategories = [
  {
    name: "King Size Sofa",
    ar: "أريكة كينغ سايز",
    filter: "King Size Sofa",
  },
  {
    name: "Premium Sofa Set",
    ar: "أرائك فاخرة",
    filter: "Premium Sofa Set",
  },
  {
    name: "Majlis",
    ar: "مجالس",
    filter: "Majlis",
  },
  {
    name: "Chairs & Recliners",
    ar: "كراسي ومقاعد استرخاء",
    filter: "Chairs & Recliners",
  },
  {
    name: "Premium Bed",
    ar: "أسرّة فاخرة",
    filter: "Premium Bed",
  },
  {
    name: "Curtains",
    ar: "ستائر",
    filter: "Curtains",
  },
  {
    name: "Curtain's Rod",
    ar: "قضبان الستائر",
    filter: "Curtain's Rod",
  },
];

function getArrayResponse(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.categories)) return data.categories;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

// GET UNIQUE PRODUCT ID
function getProductId(product) {
  return (
    product._id ||
    product.id ||
    product.productId ||
    product.slug ||
    product.name ||
    product.title ||
    product.titleEn ||
    null
  );
}

export default function Header() {
  const pathname = usePathname();
  const { isArabic, toggleLanguage } = useLanguage();

  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoaded, setInquiriesLoaded] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  const [shopCategories, setShopCategories] = useState(
    fallbackShopCategories
  );

  // LOAD SAVED INQUIRIES
  useEffect(() => {
    try {
      const savedInquiries = localStorage.getItem(
        INQUIRY_STORAGE_KEY
      );

      if (savedInquiries) {
        const parsedInquiries = JSON.parse(savedInquiries);

        if (Array.isArray(parsedInquiries)) {
          setInquiries(parsedInquiries);
        }
      }
    } catch (error) {
      console.error("Unable to load saved inquiries:", error);
    } finally {
      setInquiriesLoaded(true);
    }
  }, []);

  // SAVE INQUIRIES
  useEffect(() => {
    if (!inquiriesLoaded) return;

    try {
      localStorage.setItem(
        INQUIRY_STORAGE_KEY,
        JSON.stringify(inquiries)
      );
    } catch (error) {
      console.error("Unable to save inquiries:", error);
    }
  }, [inquiries, inquiriesLoaded]);

  // LOAD SHOP CATEGORIES FROM BACKEND
  useEffect(() => {
    let isMounted = true;

    async function loadCategories() {
      try {
        const response = await getCategories();
        const apiCategories = getArrayResponse(response);

        if (!isMounted || apiCategories.length === 0) return;

        const mappedCategories = apiCategories
          .filter((category) => category.filter)
          .map((category) => ({
            id: category._id || category.filter,
            name: category.nameEn || category.filter,
            ar:
              category.nameAr ||
              category.nameEn ||
              category.filter,
            filter: category.filter,
          }));

        if (isMounted && mappedCategories.length > 0) {
          setShopCategories(mappedCategories);
        }
      } catch (error) {
        console.error("Header categories API error:", error);
      }
    }

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  // RECEIVE PRODUCTS ADDED FROM OTHER COMPONENTS
  useEffect(() => {
    const handleAddInquiry = (event) => {
      const product = event.detail;

      if (!product) return;

      setInquiries((current) => {
        const productId = getProductId(product);

        const alreadyAdded = current.some((item) => {
          return (
            productId &&
            getProductId(item) === productId
          );
        });

        if (alreadyAdded) return current;

        return [...current, product];
      });

      setInquiryOpen(true);
    };

    window.addEventListener("add-inquiry", handleAddInquiry);

    return () => {
      window.removeEventListener(
        "add-inquiry",
        handleAddInquiry
      );
    };
  }, []);

  // HEADER SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLOSE MENUS AFTER NAVIGATION
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setMobileShopOpen(false);
  }, [pathname]);

  // REMOVE INQUIRY
  const removeInquiry = (index) => {
    setInquiries((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  // ACTIVE NAVIGATION
  const isActive = (href) => {
    return href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);
  };

  // DESKTOP NAVIGATION STYLE
  const navClass = (active) => `
    flex items-center justify-center
    whitespace-nowrap rounded-full
    px-3 py-0 text-[15px] leading-7 font-semibold
    text-[#171717]
    transition-colors duration-200
    ${
      active
        ? "bg-[#DAB52F]"
        : "bg-transparent hover:bg-[#DAB52F]"
    }
  `;

  // MOBILE NAVIGATION STYLE
  const mobileNavClass = (active) => `
    flex min-h-[43px] w-full items-center justify-between
    rounded-lg px-3 text-start
    text-[14px] font-semibold text-[#171717]
    no-underline transition-colors duration-200
    ${
      active
        ? "bg-[#DAB52F]"
        : "bg-transparent hover:bg-[#DAB52F]"
    }
  `;

  // CATEGORY URL
  const getCategoryHref = (category) =>
    `/shop?category=${encodeURIComponent(category.filter)}`;

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

          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 xl:flex">
            <Link
              href="/"
              className={navClass(isActive("/"))}
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>

            {/* SHOP DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setShopDropdownOpen((prev) => !prev)
                }
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
                className={`absolute ${
                  isArabic ? "right-0" : "left-0"
                } top-full z-[100] w-[312px] pt-2 transition-all duration-200 ${
                  shopDropdownOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-[20px] border border-gray-200 bg-white py-3 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
                  {shopCategories.map((category) => (
                    <Link
                      key={category.id || category.filter}
                      href={getCategoryHref(category)}
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

          {/* RIGHT CONTROLS */}
          <div className="flex shrink-0 items-center gap-2 md:gap-4">

            {/* LANGUAGE SWITCH */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                isArabic
                  ? "Switch to English"
                  : "التغيير إلى العربية"
              }
              className="flex h-[30px] items-center gap-1 rounded-lg border border-[#171717]/20 bg-white/30 px-2 text-[10px] font-semibold text-[#171717] shadow-sm transition-colors hover:bg-[#DAB52F] md:h-[32px] md:gap-2 md:rounded-xl md:px-4 md:text-[12px]"
            >
              <Globe size={16} className="md:hidden" />
              <Globe size={19} className="hidden md:block" />

              {isArabic ? "English" : "العربية"}
            </button>

            {/* INQUIRY BAG */}
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              aria-label={
                isArabic
                  ? "فتح قائمة الاستفسارات"
                  : "Open inquiry list"
              }
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

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
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
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-[#171717]/10 bg-[#ECEAE5] px-5 py-3 shadow-lg">
            <Link
              href="/"
              className={mobileNavClass(isActive("/"))}
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>

            {/* MOBILE SHOP DROPDOWN */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileShopOpen((prev) => !prev)
                }
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
                <div
                  className={`py-1 ${
                    isArabic
                      ? "mr-3 border-r-2 border-[#DAB52F] pr-3"
                      : "ml-3 border-l-2 border-[#DAB52F] pl-3"
                  }`}
                >
                  {shopCategories.map((category) => (
                    <Link
                      key={category.id || category.filter}
                      href={getCategoryHref(category)}
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

      {/* INQUIRY DRAWER */}
      <InquiryDrawer
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        inquiries={inquiries}
        onRemove={removeInquiry}
      />
    </>
  );
}
