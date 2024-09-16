
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import FirstSectionSkeleton from "@/compontents/ui/skeleton/FirstSectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategoryByTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`);
  const data = await res.json();
  const categories = data.data;
  return categories;
};


const page = async () => {

  let AfterMarketCategory = await fetchCategoryByTitle('After-Market');
  const DynamicFirstSection = dynamic(
    () => import('@/compontents/categories/AfterMarketing'),
    {
      ssr: false,
      loading: () => (
        <>
          <FirstSectionSkeleton />
        </>
      ),
    }
  );
  return (
    <>
   

      <Suspense fallback={"loading"}>
        <DynamicFirstSection
          categoryname={AfterMarketCategory[0]?.attributes?.title}
          categoryParagraph={
            AfterMarketCategory[0]?.attributes?.category?.summary
          }
          categoryBg={
            AfterMarketCategory[0]?.attributes?.category?.background_color
          }
          categoryId={AfterMarketCategory[0].attributes.category.id}
          imageUrl={
            AfterMarketCategory[0]?.attributes?.category?.image?.data
              ?.attributes?.url
          }
        />
      </Suspense>
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden mt-[30px]">
        <ScrollSliders />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
