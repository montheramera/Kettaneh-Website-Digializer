import FirstSection from "@/compontents/categories/FirstSection";
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import FirstSectionSkeleton from "@/compontents/ui/skeleton/FirstSectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const imagesLogos = [
  {
    name: "Siemens",
    src: "/images/categories/hvac/logos/1.png",
    width: 150,
    height: 46.2,
  },
  {
    name: "Haier",
    src: "/images/categories/hvac/logos/2.png",
    width: 145,
    height: 126,
  },

];

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

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

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=category.image`);
  const data = await res.json();
  const Categories = data.data.map((el: any)=>({id: el.id, title: el.attributes.title, category: el.attributes.category})).filter((el: any)=> el.title != "kettaneh");
  return Categories;
}

const page = async () => {

  let hvacCategory = await fetchCategoryByTitle('hvac');
  const categoryTitle = hvacCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);
  const categories = await fetchCategories();
  
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
          categoryname={hvacCategory[0]?.attributes?.title}
          categoryParagraph={hvacCategory[0]?.attributes?.category?.summary}
          categoryBg={hvacCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          imageUrl={hvacCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
      /> */}

      <Suspense fallback={"loading"}>
        <DynamicFirstSection
          categoryname={hvacCategory[0]?.attributes?.title}
          categoryParagraph={hvacCategory[0]?.attributes?.category?.summary}
          categoryBg={hvacCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          imageUrl={hvacCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
        />
      </Suspense>
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
      <CallToAction categories={categories} />
    </>
  );
};

export default page;
