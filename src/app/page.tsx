import HeroSection from "@/components/HeroSection";
import InnovationSustainability from "@/components/InnovationSustainability";
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
    <InnovationSustainability />
    {/* <IndustriesGrid /> */}
    </div>
  );
}
