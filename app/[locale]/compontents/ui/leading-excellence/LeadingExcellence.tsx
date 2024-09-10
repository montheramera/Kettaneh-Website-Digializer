import React from "react";
import HoverEffect from "../mouse-over/HoverEffect";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=category.image`);
  const data = await res.json();
  const Categories = data.data.map((el: any)=>({title: el.attributes.title, category: el.attributes.category})).sort((a: any, b: any)=> a.category.id - b.category.id);
  return Categories;
}

const LeadingExcellence = async() => {
  const categories = await fetchCategories();
  return (
    <>
      <div className=" px-5 py-[30px] lg:px-20  lg:py-[96px] font-avenir">
        <section className="max-w-[1440px] m-auto">
          <div className="mt-[25px] lg:mt-[50px]">
            <HoverEffect categories={categories} />
          </div>
        </section>
      </div>
    </>
  );
};

export default LeadingExcellence;
