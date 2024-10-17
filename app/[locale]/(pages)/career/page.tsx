import React, { Suspense } from 'react';

import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import dynamic from 'next/dynamic';
import JobListingsSkeleton from '@/compontents/ui/skeleton/JobListingSkeleton';
import ScrollSliders from '@/compontents/categories/ScrollSliders';

 const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

 type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/main?populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data?.attributes?.seo || {}

    console.log(seo);
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


const page = async() => {
  let res = await fetch(
    `${API_URL}/api/careers?populate[career]=*&populate[category][populate]=title,category`
  );
  let data = await res.json();
  let careers = [...data.data];

  const DynamicJobListing = dynamic(
    () => import("@/compontents/career/FirstSection"),
    {
      ssr: false,
      loading: () => (
        <>
         <JobListingsSkeleton />
        </>
      ),
    }
  );
    return (
      <>
        <div className="px-5 lg:px-20  font-avenir ">
          <div className="max-w-[1440px] m-auto">
            <div className="flex mb-[24px] mt-[24px]">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                Career
              </span>
            </div>
            <section>
              {/* <JobListings careers={careers} /> */}

              <Suspense fallback={"loading"}>
                <DynamicJobListing careers={careers} />
              </Suspense>
            </section>

            {/* <section>
              <CareerForm />
            </section> */}
          </div>
        </div>
        <section className="hidden lg:block">
          <LeadingExcellence />
        </section>
        <section className="block lg:hidden mt-[30px]">
          <ScrollSliders />
        </section>
        <section className="">
          <CallToAction />
        </section>
      </>
    );
};

export default page;