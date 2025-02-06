
import HoverEffect from '@/compontents/ui/mouse-over/HoverEffect';
import React from 'react';
import { Suspense } from "react";
import dynamic from "next/dynamic";
import HoverEffectSkeleton from '@/compontents/ui/mouse-over/HoverEffectSkeleton';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=category.image`, {
    cache: "no-store",
  });
  const data = await res.json();
  const Categories = data.data.map(el=>({title: el.attributes.title, category: el.attributes.category})).sort((a, b)=> a.category.id - b.category.id).filter((el)=> el.title != "Other");
  return Categories;
}


const HeroSection = async() => {
  const categories = await fetchCategories();
   const DynamicHoverEffect = dynamic(
     () => import("@/compontents/ui/mouse-over/HoverEffect"),
     {
       ssr: false,
       loading: () => (
         <>
          <HoverEffectSkeleton isFull={true} />
         </>
       ),
     }
   );
    return (
      <div className="bg-primary lg:px-20 p-0 lg:p-10 font-avenir ">
        <div className="relative group max-w-[1440px] m-auto min-h-[0px] lg:min-h-[125px]">
          <section className="hidden lg:block absolute z-[50] top-[0px] w-full ">
            <Suspense fallback={"loading"}>
              <DynamicHoverEffect categories={categories} />
            </Suspense>
          </section>
        </div>
      </div>
    );
};

export default HeroSection;