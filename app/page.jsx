
import Header from "@/components/layout/header";
import HeroSlider from "@/components/home/hero-slider";
import StatusBar from "@/components/home/status-bar";
import FeatureShowcase from "@/components/home/feature-showcase";
import CategoryShowcase from "@/components/home/category-showcase";
import PremiumSofaBanner from "@/components/home/premium-sofa-banner";
import MasterpieceCollection from "@/components/home/masterpiece-collection";
import MaterialsShowcase from "@/components/home/materials-showcase";
import RealHomesGallery from "@/components/home/real-homes-gallery";
import ClientReviews from "@/components/home/client-reviews";
import ConsultationProcess from "@/components/home/consultation-process";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#C7AA7F]">
      <Header />
      <HeroSlider />
      <StatusBar />
      <FeatureShowcase />
      <CategoryShowcase />
      <PremiumSofaBanner />
      <MasterpieceCollection />
      <MaterialsShowcase />
      <RealHomesGallery />
      <ClientReviews />
      <ConsultationProcess />
      <Footer />
    </main>
  );
}
