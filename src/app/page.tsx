import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import LogoSlider from "@/components/LogoSlider";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div >
    <HeroSection />
    <LogoSlider />
    <LatestNews />
    <Stats />
    {/* <IndustriesGrid /> */}
    </div>
  );
}
