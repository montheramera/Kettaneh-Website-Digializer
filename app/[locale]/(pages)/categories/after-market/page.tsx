
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import FirstSectionSkeleton from "@/compontents/ui/skeleton/FirstSectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/categories?filters[title]=After-Market&populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data[0]?.attributes.seo || {}
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
      // icons: {
      //   icon: favicon,
      //   shortcut: favicon,
      //   apple: favicon,
      // },
      
    }
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: 'Default Title',
      description: 'Default Description',
      // icons: {
      //   icon: '/default-favicon.ico',
      //   shortcut: '/default-favicon.ico',
      //   apple: '/default-favicon.ico',
      // },
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

const fetchCategoryByTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`, { cache: "no-store" });
  const data = await res.json();
  const categories = data.data;
  return categories;
};


const page = async () => {

  let AfterMarketCategory = await fetchCategoryByTitle('After-Market');
  const DynamicFirstSection = dynamic(
    () => import('@/compontents/categories/AfterMarketing'),
    {
      ssr: false,
      loading: () => (
        <>
          <FirstSectionSkeleton />
        </>
      ),
    }
  );
  return (
    <>
   

      <Suspense fallback={"loading"}>
        <DynamicFirstSection
          categoryname={AfterMarketCategory[0]?.attributes?.title}
          categoryParagraph={
            AfterMarketCategory[0]?.attributes?.category?.summary
          }
          categoryBg={
            AfterMarketCategory[0]?.attributes?.category?.background_color
          }
          categoryId={AfterMarketCategory[0].attributes.category.id}
          imageUrl={
            AfterMarketCategory[0]?.attributes?.category?.image?.data
              ?.attributes?.url
          }
        />
      </Suspense>
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden mt-[30px]">
        <ScrollSliders />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
