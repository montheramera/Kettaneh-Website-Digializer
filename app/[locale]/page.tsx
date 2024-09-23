import { getTranslations } from "next-intl/server";
import HeroSection from "@/compontents/main-page/hero-section/HeroSection";
import ExperienceBanner from "@/compontents/main-page/experience-banner/ExperienceBanner";
import dynamic from "next/dynamic";
import GlobalPartnersSkeleton from "./compontents/ui/skeleton/GlobalPartnersSkeleton";
import { Suspense } from "react";
import LegacySectionSkeleton from "./compontents/ui/skeleton/LegacySectionSkeleton";
import MainAchievementsSkeleton from "./compontents/ui/skeleton/MainAchievementsSkeleton";
import MainCustomerSkeleton from "./compontents/ui/skeleton/MainCustomerSkeleton";
import NewsSkeleton from "./compontents/ui/skeleton/NewsSkeleton";
import TestimonialsSkeleton from "./compontents/ui/skeleton/TestimonialsSkeleton";
import ScrollSliders from "./compontents/categories/ScrollSliders";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/main-pages?populate=seo`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-store", // Specify cache control header
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seoAttributes = data.data[0]?.attributes.seo;

    return {
      title: seoAttributes?.meta_title || 'Default Title',
      description: seoAttributes?.meta_description || 'Default Description',
    };
  } catch (error) {
    return {
      title: 'Default Title',
      description: 'Default Description',
    };
  }
}


const fetchTestimonials = async ()=>{
  const res = await fetch(`${API_URL}/api/testimonials?populate[Testimonial][populate]=*`);
  const data = await res.json();
  const Testimonials = data.data.map((el: any)=>el.attributes.Testimonial);
  return Testimonials;
}



export default async function Home() {


  const Testimonials = await fetchTestimonials();
  const t = await getTranslations();

  const DynamicGlobalPartners = dynamic(
    () => import('@/compontents/main-page/global-partners/GlobalPartners'),
    {
      ssr: false,
      loading: () => (
        <>
          <GlobalPartnersSkeleton />
        </>
      ),
    }
  );
  const DynamicLegacySection = dynamic(
    () => import('@/compontents/main-page/legacy-section/LegacySection'),
    {
      ssr: false,
      loading: () => (
        <>
          <LegacySectionSkeleton />
        </>
      ),
    }
  );
  const DynamicMainAchievements = dynamic(
    () => import('@/compontents/main-page/achievements/Achievements'),
    {
      ssr: false,
      loading: () => (
        <>
          <MainAchievementsSkeleton />
        </>
      ),
    }
  );
  const DynamicMainCustomer = dynamic(
    () => import('@/compontents/main-page/our-customer/OurCustomer'),
    {
      ssr: false,
      loading: () => (
        <>
          <MainCustomerSkeleton />
        </>
      ),
    }
  );
  const DynamicNewsSection = dynamic(
    () => import('@/compontents/main-page/news/News'),
    {
      ssr: false,
      loading: () => (
        <>
          <NewsSkeleton />
        </>
      ),
    }
  );
  const DynamicTestimonialsSection = dynamic(
    () => import('@/compontents/main-page/feed-back/FeedBack'),
    {
      ssr: false,
      loading: () => (
        <>
          <TestimonialsSkeleton />
        </>
      ),
    }
  );

  return (
    <main className="min-h-screen ">
      <div className="">
        <HeroSection />
      </div>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
      <div className="lg:mt-[250px]">
        {/* <GlobalPartners /> */}
        <Suspense fallback={"loading"}>
              <DynamicGlobalPartners />
        </Suspense>
      </div>
      <div>
        {/* <LegacySection /> */}
        <Suspense fallback={"loading"}>
              <DynamicLegacySection />
        </Suspense>
      </div>
      <div>
        {/* <Achievements /> */}
        <Suspense fallback={"loading"}>
              <DynamicMainAchievements />
        </Suspense>
      </div>
      <div className="overflow-hidden">
        {/* <OurCustomer /> */}
        <Suspense fallback={"loading"}>
              <DynamicMainCustomer />
        </Suspense>
      </div>
      <div>
        {/* <News /> */}
        <Suspense fallback={"loading"}>
              <DynamicNewsSection />
        </Suspense>
      </div>
      <div>
        {/* <AdaptiveHeight testimonials={Testimonials} /> */}
        <Suspense fallback={"loading"}>
              <DynamicTestimonialsSection testimonials={Testimonials} />
        </Suspense>
      </div>
      <div>
        <ExperienceBanner  />
      </div>
    </main>
  );
}
