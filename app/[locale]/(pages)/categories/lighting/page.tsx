
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
    const res = await fetch(`${API_URL}/api/categories?filters[title]=Lighting&populate=seo`);

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

const fetchCategoryByTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`);
  const data = await res.json();
  const categories = data.data;
  return categories;
};

const fetchPartnersByCategory = async (categoryTitle: string) => {
  const res = await fetch(
    `${API_URL}/api/partners?populate[Partner][populate]=logo,categories&filters[categories][title][$eq]=${encodeURIComponent(
      categoryTitle
    )}`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-store", // Specify cache control header
      },
    }
  );
  const data = await res.json();
  const partners = data.data.map((el: any) => {
    const image = { ...el.attributes.Partner.logo.data.attributes }
    image.src = image.url;
    return image
  });
  return partners;
};



const page = async () => {
  let LightingCategory = await fetchCategoryByTitle('Lighting');
  const categoryTitle = LightingCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);


  const DynamicFirstSection = dynamic(
    () => import('@/compontents/categories/FirstSection'),
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
      {/* <FirstSection
        categoryname={LightingCategory[0]?.attributes?.title}
        categoryParagraph={LightingCategory[0]?.attributes?.category?.summary}
        categoryBg={LightingCategory[0]?.attributes?.category?.background_color}
        imagesLogos={partners}
        imageUrl={LightingCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
      /> */}
      <Suspense fallback={"loading"}>
        <DynamicFirstSection
          categoryname={LightingCategory[0]?.attributes?.title}
          categoryParagraph={LightingCategory[0]?.attributes?.category?.summary}
          categoryBg={LightingCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          imageUrl={LightingCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
        />
      </Suspense>
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
