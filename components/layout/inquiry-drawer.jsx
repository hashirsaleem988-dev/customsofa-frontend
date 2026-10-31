
"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X, Trash2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const WHATSAPP_NUMBER = "966550834729";

export default function InquiryDrawer({
  open,
  onClose,
  inquiries = [],
  onRemove,
}) {
  const { isArabic } = useLanguage();

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  const sendInquiry = () => {
    const productDetails = inquiries
      .map((product, index) => {
        const name = product.name || product.title || "Furniture item";
        const category = product.category || "";

        return `${index + 1}. ${name}${category ? ` (${category})` : ""}`;
      })
      .join("\n");

    const message = isArabic
      ? `مرحبًا شركة رواء صادق التجارية، أود الاستفسار عن المنتجات التالية:\n\n${productDetails}`
      : `Hello Rua Sadiq Trading Co., I would like to inquire about these products:\n\n${productDetails}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.82 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            dir={isArabic ? "rtl" : "ltr"}
            className="fixed right-0 top-0 z-[201] flex h-dvh w-full flex-col bg-[#F8F6F0] px-6 pt-10 sm:w-[65%] lg:w-[35%]"
            aria-label={isArabic ? "قائمة الاستفسارات" : "Inquiry List"}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DCDAD3] pb-5">
              <h2 className="flex items-center gap-3 font-serif text-[22px] text-[#1C2C3D]">
                <ShoppingBag size={32} color="#DAB52F" />

                {isArabic ? "قائمة الاستفسارات" : "Inquiry List"}

                <span className="text-[14px] text-[#66717E]">
                  ({inquiries.length})
                </span>
              </h2>

              <button
                onClick={onClose}
                aria-label={isArabic ? "إغلاق القائمة" : "Close inquiry list"}
                className="rounded-xl border-[3px] border-[#DAB52F]/70 p-1 text-[#525B63] hover:bg-[#DAB52F]/20"
              >
                <X size={22} />
              </button>
            </div>

            {/* Products */}
            {inquiries.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3">
                <ShoppingBag size={42} className="text-[#DAB52F]" />

                <p className="text-[14px] text-[#66717E]">
                  {isArabic ? "لا توجد استفسارات حتى الآن" : "No inquiries yet"}
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto py-6">
                  {inquiries.map((product, index) => {
                    const image =
                      product.image ||
                      product.imageUrl ||
                      product.img ||
                      product.src;

                    const name =
                      product.name || product.title || "Furniture item";

                    return (
                      <div
                        key={`${name}-${index}`}
                        className="flex gap-4 border-b border-[#DCDAD3] pb-4"
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={name}
                            className="h-[95px] w-[95px] shrink-0 rounded-lg bg-white object-cover"
                          />
                        ) : (
                          <div className="flex h-[95px] w-[95px] shrink-0 items-center justify-center rounded-lg bg-[#EAE6DC]">
                            <ShoppingBag
                              size={28}
                              className="text-[#B49A58]"
                            />
                          </div>
                        )}

                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <h3 className="font-serif text-[16px] text-[#1C2C3D]">
                            {name}
                          </h3>

                          {product.category && (
                            <p className="mt-1 text-[12px] text-[#66717E]">
                              {product.category}
                            </p>
                          )}

                          <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="mt-3 flex w-fit items-center gap-1 text-[12px] text-red-600 transition-colors hover:text-red-800"
                          >
                            <Trash2 size={14} />
                            {isArabic ? "إزالة" : "Remove"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Inquiry */}
                <div className="border-t border-[#DCDAD3] py-5">
                  <button
                    type="button"
                    onClick={sendInquiry}
                    className="w-full rounded-full bg-[#DAB52F] px-5 py-4 text-[13px] font-semibold tracking-[1px] text-[#1C2C3D] transition-colors hover:bg-[#c5a126]"
                  >
                    {isArabic
                      ? "إرسال الاستفسار عبر واتساب"
                      : "SEND INQUIRY ON WHATSAPP"}
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
