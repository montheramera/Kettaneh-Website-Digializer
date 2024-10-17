import FirstSection from '@/compontents/categories/FirstSection';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import React, { Suspense } from 'react';
import { useRouter } from 'next/router';
import FirstSectionSkeleton from '@/compontents/ui/skeleton/FirstSectionSkeleton';
import dynamic from 'next/dynamic';
import ScrollSliders from '@/compontents/categories/ScrollSliders';

const partners = [
  {
    name: "Siemens",
    src: "/images/categories/electrical/logos/1.png",
    width: 150,
    height: 23.68,
  },
  {
    name: "Haier",
    src: "/images/categories/electrical/logos/2.png",
    width: 150,
    height: 23.68,
  },
  {
    name: "Linde",
    src: "/images/categories/electrical/logos/3.png",
    width: 150,
    height: 119.52,
  },
];

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/categories?filters[title]=Electrical&populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data[0]?.attributes.seo || {}
    const title = seo.meta_title || 'Default Title'
    const description = seo.meta_description || 'Default Description'
    const favicon = seo.fav_icon?.data?.attributes?.url || '/default-favicon.ico'
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

const fetchCategoryByTitle = async (title: string) => {
  const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`);
  const data = await res.json();
  const categories = data.data;
  return categories;
};

const fetchPartnersByCategory = async (categoryTitle: string) => {
  const res = await fetch(
    `${API_URL}/api/partners?populate[Partner][populate]=logo,categories&filters[categories][title][$eq]=${encodeURIComponent(
      categoryTitle
    )}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const partners = data?.data?.map((el: any) => {
    const partner = { ...el.attributes.Partner }
    return partner
  });
  return partners;
};



const page = async () => {

  let electricalCategory = await fetchCategoryByTitle('Electrical');
  const categoryTitle = electricalCategory[0].attributes.title
  let partners = await fetchPartnersByCategory(categoryTitle);
  const DynamicFirstSection = dynamic(
    () => import('@/compontents/categories/FirstSection'),
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
          categoryname={electricalCategory[0]?.attributes?.title}
          categoryParagraph={electricalCategory[0]?.attributes?.category?.summary}
          categoryBg={electricalCategory[0]?.attributes?.category?.background_color}
          partners={partners}
          // imageUrl={"/images/categories/electrical/electrical.png"}
          imageUrl={electricalCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
        />
      </Suspense>
      {/* <FirstSection
          categoryname={electricalCategory[0]?.attributes?.title}
          categoryParagraph={electricalCategory[0]?.attributes?.category?.summary}
          categoryBg={electricalCategory[0]?.attributes?.category?.background_color}
          imagesLogos={partners}
          // imageUrl={"/images/categories/electrical/electrical.png"}
          imageUrl={electricalCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
        /> */}

      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>

      <CallToAction />
    </>
  );
};

export default page;