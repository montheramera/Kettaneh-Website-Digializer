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
  try {
      
    const res = await fetch(`${API_URL}/api/products?populate=Product.seo.fav_icon,partner&filters[partner][title][$eq]=${encodeURIComponent(params.slug)}`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json();
    const seo = data.data[0].attributes.Product.seo || {}
    const title = seo.meta_title || 'Default Title'
    const description = seo.meta_description || 'Default Description'
    const favicon = `/images/logo.png`
    const url = seo.link || 'https://example.com'
    // const siteName = seo.site_name || 'Your Site Name'
    // const locale = seo.locale || 'en_US'
    // const type = seo.type || 'website'
    // const twitterHandle = seo.twitter_handle || '@yourtwitterhandle'

    return {
      title,
      description,
      icons: {
        icon: favicon,
        shortcut: favicon,
        apple: favicon,
      },
      
    }
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: 'Default Title',
      description: 'Default Description',
      icons: {
        icon: '/default-favicon.ico',
        shortcut: '/default-favicon.ico',
        apple: '/default-favicon.ico',
      },
      metadataBase: new URL('https://example.com'),
      alternates: {
        canonical: 'https://example.com',
      },
      openGraph: {
        title: 'Default Title',
        description: 'Default Description',
        url: 'https://example.com',
        siteName: 'Your Site Name',
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Default Title',
        description: 'Default Description',
        site: '@yourtwitterhandle',
        creator: '@yourtwitterhandle',
      },
      other: {
        'og:image': '/default-og-image.jpg',
        'twitter:image': '/default-twitter-image.jpg',
      },
    }
  }
}

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
