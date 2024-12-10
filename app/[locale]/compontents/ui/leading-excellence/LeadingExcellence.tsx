import React, { Suspense } from "react";
import HoverEffect from "@/compontents/ui/mouse-over/HoverEffect";
import dynamic from "next/dynamic";
import HoverEffectSkeleton from "../mouse-over/HoverEffectSkeleton";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategories = async () => {
  const res = await fetch(`${API_URL}/api/categories?populate=category.image&filters[title][$ne]=Other`);
  const data = await res.json();
  const Categories = data.data.map((el: any) => ({ title: el.attributes.title, category: el.attributes.category })).sort((a: any, b: any) => a.category.id - b.category.id);
  return Categories;
}

const LeadingExcellence = async () => {
  const categories = await fetchCategories();
  const DynamicHoverSection = dynamic(
    () => import('@/compontents/ui/mouse-over/HoverEffect'),
    {
      ssr: false,
      loading: () => (
        <>
          <HoverEffectSkeleton isFull={false} />
        </>
      ),
    }
  );
  return (

      <div className=" px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir leading">
        <section className="max-w-[1440px] m-auto">
          <div className="mt-[25px] lg:mt-[50px]">
            {/* <HoverEffect categories={categories} /> */}
            <Suspense fallback={"loading"}>
              <DynamicHoverSection categories={categories} />
            </Suspense>
          </div>
        </section>
      </div>

  );
};

export default LeadingExcellence;
