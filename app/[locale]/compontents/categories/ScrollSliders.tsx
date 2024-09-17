import React from "react";
import ScrollSlider from '@/compontents/ui/mobile-scroll-categories/MobileScrollCategories';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategories = async () => {
  const res = await fetch(`${API_URL}/api/categories?populate=category.image&filters[title][$ne]=Other`);
  const data = await res.json();
  const Categories = data.data.map((el: any) => ({ title: el.attributes.title, category: el.attributes.category })).sort((a: any, b: any) => a.category.id - b.category.id);
  return Categories;
}
export default async function ScrollSliders() {
    const categories = await fetchCategories();
  return (
    <>
        <ScrollSlider categories={categories} />
    </>
  );
}