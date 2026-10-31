
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  ["King Size Sofa", "/shop/king-size-sofa"],
  ["Premium Sofas", "/shop/premium-sofas"],
  ["Majlis", "/shop/majlis"],
  ["Chairs & Recliners", "/shop/chairs-recliners"],
  ["Premium Beds", "/shop/premium-beds"],
  ["Curtains", "/shop/curtains"],
  ["Curtain Rods", "/shop/curtain-rods"],
];

export default function ShopDropdown({
  open,
  onToggle,
  onClose,
  active,
}) {
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
    >
      <button
        type="button"
        onClick={() => onToggle(!open)}
        aria-expanded={open}
        className={`
          flex items-center gap-2
          whitespace-nowrap rounded-full
          px-4 py-0
          text-[15px] leading-7 font-semibold
          text-[#171717]
          transition-colors duration-200
          ${
            active || open
              ? "bg-[#DAB52F]"
              : "bg-transparent hover:bg-[#DAB52F]"
          }
        `}
      >
        Shop
        <ChevronDown
          size={17}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="
              absolute left-0 top-full z-[100]
              mt-2 w-[220px]
              rounded-[18px]
              border border-black/5
              bg-[#FFFEFC] p-3
              shadow-xl
            "
          >
            {categories.map(([name, href]) => {
              const selected =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={`
                    block rounded-lg
                    px-1 py-[4px]
                    text-[14px] leading-7
                    text-[#202832]
                    transition-colors duration-200
                    ${
                      selected
                        ? "bg-[#DAB52F]"
                        : "bg-transparent hover:bg-[#DAB52F]"
                    }
                  `}
                >
                  {name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
