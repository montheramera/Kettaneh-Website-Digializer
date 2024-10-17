
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import BlocksRendererComponent from "@/compontents/ui/blocs-renderer/BlockRenderer";
import AchievementsSkeleton from "@/compontents/ui/skeleton/AchievementsSkeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import TimelineSkeleton from "@/compontents/ui/skeleton/TimelineSliderSkeleton";
import PartnerSliderSkeleton from "@/compontents/ui/skeleton/PartnerSliderSkeleton";
import BleifesSection from "@/compontents/about/BleifesSection";
import BleifesSectionSkeleton from "@/compontents/ui/skeleton/BleifesSectionSkeleton";
import ScrollSliders from "@/compontents/categories/ScrollSliders";


const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/about-us?populate[seo][populate]=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seoAttributes = data.data?.attributes.seo;

    return {
      title: seoAttributes?.meta_title || 'Default Title',
      description: seoAttributes?.meta_description || 'Default Description',
      favIcon: seoAttributes?.fav_icon?.data.attributes.url || '/default-favicon.ico',
      url: seoAttributes?.link || '',
    };
  } catch (error) {
    return {
      title: 'Default Title',
      description: 'Default Description',
      favIcon: '/default-favicon.ico',
      url: '',
    };
  }
}


const fetchAchivements = async () => {
  const res = await fetch(`${API_URL}/api/achievements?populate=*`);
  const data = await res.json();
  const achivements = data.data.map((el: any)=> el.attributes.Achievement)
  return achivements;
}

const fetchGlobalPartners = async () => {
  const res = await fetch(`${API_URL}/api/partners?populate[Partner][populate]=logo`);
  const data = await res.json();
  const partners = data.data.map((el: any)=>{
    const image = {...el.attributes.Partner.logo.data.attributes}
    image.src = image.url;
    return image
  });
  return partners;
};

const fetchAboutData = async () => {
  const res = await fetch(`${API_URL}/api/about-us?populate=first_section_image,second_section_image,Achievement_section_image,Time_lines,beliefs_and_goals,description_section1,description_section2,title`);
  const data = await res.json();
  const about = data.data;
  const AboutData = {
    title: about?.attributes?.title,
    description1: about?.attributes.description_section_1,
    description2: about?.attributes?.description_section_2,
    first_section_image: about?.attributes?.first_section_image?.data?.attributes,
    second_section_image: about?.attributes?.second_section_image?.data?.attributes,
    Achievement_section_image: about?.attributes?.Achievement_section_image?.data?.attributes,
    Time_lines: about?.attributes?.Time_lines,
    beliefs_and_goals: about?.attributes?.beliefs_and_goals
  }
  return AboutData;
};

export default async function AboutUs() {
  const AboutData = await fetchAboutData();
  const Achivements = await fetchAchivements();
  const GlobalPartners = await fetchGlobalPartners();
  const DynamicAchievementSection = dynamic(
    () => import('@/compontents/about/AchievementsSection'),
    {
      ssr: false,
      loading: () => (
        <>
          <AchievementsSkeleton />
        </>
      ),
    }
  );
  const DynamicTimeLineSection = dynamic(
    () => import('@/compontents/about/TimelineSlider'),
    {
      ssr: false,
      loading: () => (
        <>
          <TimelineSkeleton />
        </>
      ),
    }
  );
  const DynamicPartnerSection = dynamic(
    () => import('@/compontents/about/PartnerSlider'),
    {
      ssr: false,
      loading: () => (
        <>
          <PartnerSliderSkeleton />
        </>
      ),
    }
  );
  const DynamicBleifesSection = dynamic(
    () => import('@/compontents/about/BleifesSection'),
    {
      ssr: false,
      loading: () => (
        <>
          <BleifesSectionSkeleton />
        </>
      ),
    }
  );
  return (
    <>
      <section>
        {/* <BleifesSection AboutData={AboutData} /> */}
        <Suspense fallback={"loading"}>
          <DynamicBleifesSection AboutData={AboutData}/>
        </Suspense>
      </section>
      <section>
        {/* <AchievementsSection achivements={Achivements} image={AboutData.Achievement_section_image}/> */}
        <Suspense fallback={"loading"}>
          <DynamicAchievementSection achivements={Achivements} image={AboutData?.Achievement_section_image}/>
        </Suspense>
      </section>
      <section className="overflow-hidden">
        {/* <TimelineSlider timelineData={AboutData.Time_lines}/> */}
        <Suspense fallback={"loading"}>
          <DynamicTimeLineSection timelineData={AboutData?.Time_lines}/>
        </Suspense>
      </section>
      <section className="overflow-hidden">
        {/* <PartnerSlider partners={GlobalPartners} /> */}
        <Suspense fallback={"loading"}>
          <DynamicPartnerSection partners={GlobalPartners}/>
        </Suspense>
      </section>
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
      <section>
        <CallToAction  />
      </section>
    </>
  );
}
