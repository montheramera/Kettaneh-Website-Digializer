import React from "react";
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import Product from "@/compontents/product/product";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type PageProps = {
  params: { slug: string }; // Adjusted to match the slug in the URL
  searchParams: { [key: string]: string | string[] | undefined };
};

const fetchProductsByPartnerTitle = async (title: string) => {
  try {
    const res = await fetch(
      `${API_URL}/api/products?populate[Product][populate]=*&populate[partner][populate]=Partner.logo,categories.category&filters[partner][title][$eq]=${encodeURIComponent(title)}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    const products = data.data.map((el: any) => ({
      product: el?.attributes?.Product,
      partner: el?.attributes?.partner,
    }));

    const partner = products[0]?.partner?.data?.attributes?.Partner;
    const category = products[0]?.partner?.data?.attributes?.categories?.data[0]?.attributes;

    return { products, partner, category };
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

const Page = async ({ params }: PageProps) => {
  const { products, partner, category }: any = await fetchProductsByPartnerTitle(params.slug);
  return (
    <>
      {
        products.length ? <Product products={products} partner={partner} category={category}/>: (
          <section className="font-avenir px-5 lg:px-20 mt-5">
            <div className="max-w-[1440px] mx-auto">
              <h3 className="font-semibold text-2xl">No Provided Products for the Selected Partner</h3>
            </div>
            </section>
        )}

      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>

      <section>
        <CallToAction />
      </section>
    </>
  );
};

export default Page;