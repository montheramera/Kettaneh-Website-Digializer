
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import FirstSectionSkeleton from "@/compontents/ui/skeleton/FirstSectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/categories?filters[title]=Service excellence&populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data[0]?.attributes.seo || {}
    const title = seo.meta_title || "Service excellence";
    const description = seo.meta_description || "Service excellence";
  

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/categories/after-market`,
      },
    
      
    }
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: "Service excellence",
      description: "Service excellence",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/categories/after-market`,
      },
    };
  }
}

const fetchCategoryByTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`, { cache: "no-store" });
  const data = await res.json();
  const categories = data.data;
  return categories;
};


const page = async () => {

  let AfterMarketCategory = await fetchCategoryByTitle('Service excellence');
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
