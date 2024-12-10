import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ScrollSliders from '@/compontents/categories/ScrollSliders';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import JobListingsSkeleton from '@/compontents/ui/skeleton/JobListingSkeleton';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string, description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata based on the fetched SEO data
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/career-page?populate[seo][populate]=*`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    return {
      title: seo.meta_title || 'Default Title',
      description: seo.meta_description || 'Default Description',
      icons: {
        icon: `/images/logo.png`,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Default Title',
      description: 'Default Description',
      icons: { icon: '/default-favicon.ico' },
    };
  }
}

// Fetch career page data
const fetchCareerPage = async()=> {
  const res = await fetch(`${API_URL}/api/career-page`, { cache: "no-store" });
  const data = await res.json();
  return data.data.attributes;
}

const CareerPage = async () => {
  const res = await fetch(
    `${API_URL}/api/careers?populate[career]=*&populate[category][populate]=title,category`
  );
  const data = await res.json();
  const careers = [...data.data];
  const careerPage = await fetchCareerPage();

  const DynamicJobListing = dynamic(() => import("@/compontents/career/FirstSection"), {
    ssr: false,
    loading: () => <JobListingsSkeleton />,
  });

  return (
    <>
    <div className="px-5 lg:px-20 font-avenir">
      <div className="max-w-[1440px] m-auto">
        <div className="flex mb-6 mt-6">
          <div className="bg-primary w-1 min-h-full mr-2"></div>
          <span className="bg-primary text-white py-2 px-4 text-xl font-medium uppercase">
            {careerPage.title}
          </span>
        </div>

        <section>
          <Suspense fallback={<JobListingsSkeleton />}>
            <DynamicJobListing careers={careers} pageData={careerPage} />
          </Suspense>
        </section>

        <section className="hidden lg:block career">
          <LeadingExcellence />
        </section>
        <section className="block lg:hidden mt-8">
          <ScrollSliders />
        </section>
        <section>
          <CallToAction />
        </section>
      </div>
    </div>
    </>
  );
};

export default CareerPage;
