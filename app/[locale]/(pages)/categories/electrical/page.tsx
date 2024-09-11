import FirstSection from '@/compontents/categories/FirstSection';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import ScrollSlider from '@/compontents/ui/mobile-scroll-categories/MobileScrollCategories';
import React from 'react';
import { useRouter } from 'next/router';

   const imagesLogos = [
      {
        name: "Siemens",
        src: "/images/categories/electrical/logos/1.png",
        width: 150,
        height: 23.68,
      },
      {
        name: "Haier",
        src: "/images/categories/electrical/logos/2.png",
        width: 150,
        height: 23.68,
      },
      {
        name: "Linde",
        src: "/images/categories/electrical/logos/3.png",
        width: 150,
        height: 119.52,
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
      const partners = data?.data?.map((el: any)=>{
        const image = {...el.attributes.Partner.logo.data.attributes}
        image.src = image.url;
        return image
      });
      return partners;
    };

const page = async () => {
  
  let electricalCategory = await fetchCategoryByTitle('Electrical');
  const categoryTitle = electricalCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);
  console.log("partners", partners);
    return (
      <>
        <FirstSection
          categoryname={electricalCategory[0]?.attributes?.title}
          categoryParagraph={electricalCategory[0]?.attributes?.category?.summary}
          categoryBg={electricalCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          // imageUrl={"/images/categories/electrical/electrical.png"}
          imageUrl={electricalCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
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