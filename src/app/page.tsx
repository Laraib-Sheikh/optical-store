import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategorySection from "@/components/sections/CategorySection";
import NewArrivalsSection from "@/components/sections/NewArrivalsSection";
import FrameShapeSection from "@/components/sections/FrameShapeSection";
import FeaturedFramesSection from "@/components/sections/FeaturedFramesSection";
import LensTypeSection from "@/components/sections/LensTypeSection";
import SummerSaleSection from "@/components/sections/SummerSaleSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <NewArrivalsSection />
        <FrameShapeSection />
        <FeaturedFramesSection />
        <LensTypeSection />
        <SummerSaleSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </>
  );
}
