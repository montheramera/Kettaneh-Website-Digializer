import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";
import React from "react";
const imagesLogos = [
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/1.png",
    width: 150,
    height: 41,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/2.png",
    width: 150,
    height: 41,
  },
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/3.png",
    width: 150,
    height: 33,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/4.png",
    width: 150,
    height: 73,
  },
  
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/5.png",
    width: 150,
    height: 46,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/6.png",
    width: 150,
    height: 75,
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
  const partners = data.data.map((el: any)=>{
    const image = {...el.attributes.Partner.logo.data.attributes}
    image.src = image.url;
    return image
  });
  return partners;
};

const page = async() => {
  let machineryCategory = await fetchCategoryByTitle('Machinery');
  const categoryTitle = machineryCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);

  return (
    <>
      <FirstSection
          categoryname={machineryCategory[0]?.attributes?.title}
          categoryParagraph={machineryCategory[0]?.attributes?.category?.summary}
          categoryBg={machineryCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          imageUrl={machineryCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
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
