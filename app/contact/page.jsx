
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactHero from "@/components/contact/contact-hero";
import ContactInformation from "@/components/contact/contact-information";
import ContactForm from "@/components/contact/contact-form";
import ContactLocation from "@/components/contact/contact-location";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f4]">
      <Header />

      <ContactHero />

      <section
        id="contact-information"
        className="px-4 py-16 sm:px-8 lg:px-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ContactInformation />
          <ContactForm />
        </div>
      </section>

      <ContactLocation />

      <Footer />
    </main>
  );
}
