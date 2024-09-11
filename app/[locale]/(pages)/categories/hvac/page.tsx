import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";
import React from "react";
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
  const res = await fetch(`${API_URL}/api/partners?populate[Partner][populate]=logo,categories&filters[categories][title][$eq]=${encodeURIComponent(categoryTitle)}`);
  const data = await res.json();
  const partners = data.data.map((el: any)=>{
    const image = {...el.attributes.Partner.logo.data.attributes}
    image.src = image.url;
    return image
  });
  return partners;
};

const page = async () => {

  let hvacCategory = await fetchCategoryByTitle('hvac');
  const categoryTitle = hvacCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);

  return (
    <>
      <FirstSection
          categoryname={hvacCategory[0]?.attributes?.title}
          categoryParagraph={hvacCategory[0]?.attributes?.category?.summary}
          categoryBg={hvacCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          imageUrl={hvacCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
      />
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSlider />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
