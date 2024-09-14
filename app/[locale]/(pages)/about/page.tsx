import AchievementsSection from "@/compontents/about/AchievementsSection";
import TimelineSlider from "@/compontents/about/TimelineSlider";
import PartnerSlider from "@/compontents/about/PartnerSlider";
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

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

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

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=*`);
  const data = await res.json();
  const Categories = data.data.map((el: any)=>({id: el.id, title: el.attributes.title, category: el.attributes.category})).filter((el: any)=> el.title != "kettaneh");
  return Categories;
}

const fetchAboutData = async () => {
  const res = await fetch(`${API_URL}/api/about-pages?populate=*`);
  const data = await res.json();
  const about = data.data;
  const AboutData = {
    title: about[0].attributes.title,
    description1: about[0].attributes.description_section1,
    description2: about[0].attributes.description_section2,
    first_section_iamge: about[0].attributes.first_section_iamge.data.attributes,
    second_section_iamge: about[0].attributes.second_section_image.data.attributes,
    Achievement_section_image: about[0].attributes.Achievement_section_image.data.attributes,
    Time_lines: about[0].attributes.Time_lines,
    beliefs_and_goals: about[0].attributes.beliefs_and_goals
  }
  return AboutData;
};

export default async function AboutUs() {
  const AboutData = await fetchAboutData();
  const Achivements = await fetchAchivements();
  const GlobalPartners = await fetchGlobalPartners();
  const categories = await fetchCategories();
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
          <DynamicAchievementSection achivements={Achivements} image={AboutData.Achievement_section_image}/>
        </Suspense>
      </section>
      <section className="overflow-hidden">
        {/* <TimelineSlider timelineData={AboutData.Time_lines}/> */}
        <Suspense fallback={"loading"}>
          <DynamicTimeLineSection timelineData={AboutData.Time_lines}/>
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
        <CallToAction categories={categories} />
      </section>
    </>
  );
}
