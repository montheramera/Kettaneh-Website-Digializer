import React from "react";
import Header from "@/compontents/ui/header/header"
import Footer from "../footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=category.image`);
  const data = await res.json();
  const Categories = data.data.map((el: any)=>({id: el.id, title: el.attributes.title, category: el.attributes.category})).filter((el: any)=> el.title != "kettaneh");
  return Categories;
}

const PageWrapper: React.FC<PageWrapperProps> = async({ children }) => {
  const categories = await fetchCategories();
  return (
    <div className="font-avenir m-auto bg-white  ">
      <Header categories={categories} />
      {children}
      <div><Footer /></div>
    </div>
  );
};

export default PageWrapper;
