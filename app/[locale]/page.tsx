import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import HeroSection from "@/compontents/main-page/hero-section/HeroSection";
import ExperienceBanner from "@/compontents/main-page/experience-banner/ExperienceBanner";
import GlobalPartnersSkeleton from "./compontents/ui/skeleton/GlobalPartnersSkeleton";
import { Suspense } from "react";
import LegacySectionSkeleton from "./compontents/ui/skeleton/LegacySectionSkeleton";
import MainAchievementsSkeleton from "./compontents/ui/skeleton/MainAchievementsSkeleton";
import MainCustomerSkeleton from "./compontents/ui/skeleton/MainCustomerSkeleton";
import NewsSkeleton from "./compontents/ui/skeleton/NewsSkeleton";
import TestimonialsSkeleton from "./compontents/ui/skeleton/TestimonialsSkeleton";
import ScrollSliders from "./compontents/categories/ScrollSliders";
import VideoCarousel from "./compontents/main-page/video-carousel/VideoCarousel";
import BannerGetInTouch from "./compontents/main-page/banner/BannerGetInTouch";
const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
type Props = {
  params: { title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/main?populate[seo][populate]=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    const title = seo.meta_title || "Default Title";
    const description = seo.meta_description || "Default Description";
    const favicon = "/images/logo.png";
    const url = seo.link || "https://example.com";
    // const siteName = seo.site_name || 'Your Site Name'
    // const locale = seo.locale || 'en_US'
    // const type = seo.type || 'website'
    // const twitterHandle = seo.twitter_handle || '@yourtwitterhandle'

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Return default metadata if there's an error
    return {
      title: "Default Title",
      description: "Default Description",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en`,
      },
    };
  }
}

const fetchTestimonials = async () => {
  try {
    const res = await fetch(
      `${API_URL}/api/testimonials?populate[Testimonial][populate]=*`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    const Testimonials = data.data.map((el: any) => el.attributes.Testimonial);
    return Testimonials;
  } catch (error) {
    return [];
  }
};

export default async function Home() {
  const Testimonials = await fetchTestimonials();
  const t = await getTranslations();

  const DynamicGlobalPartners = dynamic(
    () => import("@/compontents/main-page/global-partners/GlobalPartners"),
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
    () => import("@/compontents/main-page/legacy-section/LegacySection"),
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
    () => import("@/compontents/main-page/achievements/Achievements"),
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
    () => import("@/compontents/main-page/our-customer/OurCustomer"),
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
    () => import("@/compontents/main-page/news/News"),
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
    () => import("@/compontents/main-page/feed-back/FeedBack"),
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
      {/* Banner above videos */}
      <div className="mt-[180px] lg:mt-[260px] px-5 lg:px-20">
        <div className="max-w-[1440px] m-auto">
          <BannerGetInTouch />
        </div>
      </div>
      <div className="mt-[40px] lg:mt-[60px] px-5 lg:px-20">
        {/* Video Carousel Section */}
        <VideoCarousel />
      </div>
      <div className="mt-[30px]">
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
        <ExperienceBanner />
      </div>
    </main>
  );
}
