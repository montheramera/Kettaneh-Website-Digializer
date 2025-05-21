import React from "react";
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import Product from "@/compontents/product/product";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { slug: string, title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type PageProps = {
  params: { slug: string }; // Adjusted to match the slug in the URL
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
   const slug = params?.slug;
  try {
      
    const res = await fetch(
      // `${API_URL}/api/products?populate=Product.seo.fav_icon,partner&filters[partner][title][$eqi]=${encodeURIComponent(
      //   slug
      // )}`,
      `${API_URL}/api/partners?populate=seo&filters[title][$contains]=${encodeURIComponent(
        slug
      )}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json();
    const seo = data.data[0].attributes.seo || {}
    const title = seo.meta_title || slug
    const description = seo.meta_description || slug
    

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/categories/hvac/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: slug,
      description: slug,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/categories/hvac/${slug}`,
      },
    };
  }
}

const fetchProductsByPartnerTitle = async (title: string) => {
  try {
    const res = await fetch(
      `${API_URL}/api/products?populate[Product][populate]=*&populate[partner][populate]=Partner.logo,categories.category&filters[partner][title][$eqi]=${encodeURIComponent(title)}`,
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
              <h3 className="font-semibold text-2xl">No products available for the selected partner.</h3>
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
