
"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactForm() {
  const { isArabic } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = isArabic
      ? `
استفسار جديد من الموقع

الاسم: ${form.name}
البريد الإلكتروني: ${form.email}
رقم الهاتف: ${form.phone}

تفاصيل الاستفسار:
${form.inquiry}
      `
      : `
New Website Inquiry

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Inquiry Details:
${form.inquiry}
      `;

    const whatsappURL = `https://wa.me/966550834729?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="rounded-2xl border border-[#eee5df] bg-white p-5 shadow-sm sm:p-8 lg:p-9"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b99a32]">
        {isArabic ? "أرسل استفسارك" : "Send An Inquiry"}
      </span>

      <h2 className="mt-3 font-serif text-3xl text-[#172433]">
        {isArabic ? "أخبرنا عن مشروعك" : "Tell Us About Your Project"}
      </h2>

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {isArabic
          ? "شاركنا متطلباتك، وسيسعد فريقنا بتقديم المساعدة لك."
          : "Share your requirements with us. Our team will be happy to assist you."}
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">

        {/* Full Name */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#172433]">
            {isArabic ? "الاسم الكامل *" : "Full Name *"}
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={
              isArabic ? "أدخل اسمك الكامل" : "Enter your full name"
            }
            required
            dir={isArabic ? "rtl" : "ltr"}
            className="w-full rounded-xl border border-[#e9dfd9] bg-[#fbf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#d9b83f]"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#172433]">
              {isArabic ? "البريد الإلكتروني *" : "Email Address *"}
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              dir="ltr"
              className="w-full rounded-xl border border-[#e9dfd9] bg-[#fbf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#d9b83f]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-[#172433]">
              {isArabic
                ? "رقم الهاتف / واتساب *"
                : "Phone Number / WhatsApp *"}
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+966 5X XXX XXXX"
              required
              dir="ltr"
              className="w-full rounded-xl border border-[#e9dfd9] bg-[#fbf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#d9b83f]"
            />
          </div>
        </div>

        {/* Inquiry Details */}
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#172433]">
            {isArabic
              ? "تفاصيل الاستفسار / الأبعاد *"
              : "Inquiry Details / Dimensions *"}
          </label>

          <textarea
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            placeholder={
              isArabic
                ? "أخبرنا عن متطلبات الأثاث أو تفاصيل المشروع أو الأبعاد..."
                : "Tell us about your furniture requirements, project details or dimensions..."
            }
            required
            rows={5}
            dir={isArabic ? "rtl" : "ltr"}
            className="w-full resize-y rounded-xl border border-[#e9dfd9] bg-[#fbf9f7] px-4 py-3.5 text-sm outline-none transition focus:border-[#d9b83f]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#172433] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d9b83f] hover:text-[#172433] sm:w-auto"
        >
          {isArabic ? "إرسال الاستفسار" : "Submit Inquiry"}
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
