import { getTranslations } from "next-intl/server";
import HeroSection from "@/compontents/main-page/hero-section/HeroSection";
import GlobalPartners from "@/compontents/main-page/global-partners/GlobalPartners";
import LegacySection from "@/compontents/main-page/legacy-section/LegacySection";
import Achievements from "@/compontents/main-page/achievements/Achievements";
import OurCustomer from "@/compontents/main-page/our-customer/OurCustomer";
import News from "@/compontents/main-page/news/News";
import AdaptiveHeight from "@/compontents/main-page/feed-back/FeedBack";
import ExperienceBanner from "@/compontents/main-page/experience-banner/ExperienceBanner";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
console.log("API_URL", API_URL);
const fetchTestimonials = async ()=>{
  const res = await fetch(`${API_URL}/api/testimonials?populate[Testimonial][populate]=*`);
  const data = await res.json();
  const Testimonials = data.data.map((el: any)=>el.attributes.Testimonial);
  return Testimonials;
}

export default async function Home() {

  const Testimonials = await fetchTestimonials();
  const t = await getTranslations();
  return (
    <main className="min-h-screen ">
      <div className="">
        <HeroSection />
      </div>
      <section className="block lg:hidden">
        <ScrollSlider />
      </section>
      <div className="lg:mt-[250px]">
        <GlobalPartners />
      </div>
      <div>
        <LegacySection />
      </div>
      <div>
        <Achievements />
      </div>
      <div className="overflow-hidden">
        <OurCustomer />
      </div>
      <div>
        <News />
      </div>
      <div>
        <AdaptiveHeight testimonials={Testimonials} />
      </div>
      <div>
        <ExperienceBanner />
      </div>
    </main>
  );
}
