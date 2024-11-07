import React from "react";
import Header from "@/compontents/ui/header/header"
import Footer from "../footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

// const fetchCategories = async ()=>{
  //   const res = await fetch(`${API_URL}/api/categories?populate=category.image`);
  //   const data = await res.json();
  //   const Categories = data.data.map((el: any)=>({id: el.id, title: el.attributes.title, category: el.attributes.category})).filter((el: any)=> el.title != "kettaneh");
  //   return Categories;
  // }
  
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
const fetchFooterData = async () => {
  const res = await fetch(`${API_URL}/api/footer`, {
    cache: "no-store",
  });
  const data = await res.json();
  const footer = data.data.attributes;
  return footer;
};
const PageWrapper: React.FC<PageWrapperProps> =async({ children }) => {
  const footerData = await fetchFooterData();
  return (
    <div className="font-avenir m-auto bg-white  ">
      <Header
      
      />
      {children}
      <div><Footer data={footerData} /></div>
    </div>
  );
};

export default PageWrapper;
