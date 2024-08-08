import Image from "next/image";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/compontents/main-page/hero-section/HeroSection"
import GlobalPartners from "@/compontents/main-page/global-partners/GlobalPartners";
import LegacySection from "@/compontents/main-page/legacy-section/LegacySection";
import Achievements from "@/compontents/main-page/achievements/Achievements";
import OurCustomer from "@/compontents/main-page/our-customer/OurCustomer";
import News from "@/compontents/main-page/news/News";

export default async function Home() {
    const t = await getTranslations();
  return (
    <main className="min-h-screen ">
      
        <div className="">
          <HeroSection />
      </div>
      <div>
        <GlobalPartners />
      </div>
      <div>
        <LegacySection />
      </div>
      <div>
        <Achievements />
      </div>
      <div>
        <OurCustomer />
      </div>
      <div>
        <News />
      </div>

      {/* <div className="relative w-[400px] h-[400px]"> <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  Electrical
                </div>
              </div>
      </div> */}
    </main>
  );
}
