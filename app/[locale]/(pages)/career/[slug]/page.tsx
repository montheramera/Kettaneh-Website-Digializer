import React, { Suspense } from 'react';

import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import ScrollSliders from '@/compontents/categories/ScrollSliders';
import JobDetails from '@/compontents/career/job';

 const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

 type Props = {
  params: { title: string, description: string,slug:string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props) {
const slug=  params.slug;
  try {
    const res = await fetch(`${API_URL}/api/careers?populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json();
    const seo = data.data[0]?.attributes?.seo || {}
    const title = seo.meta_title || 'Default Title'
    const description = seo.meta_description || 'Default Description'
  

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/career/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: "Default Title",
      description: "Default Description",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/career/${slug}`,
      },
    };
  }
}

type PageProps = {
  params: { slug: string }; // Adjusted to match the slug in the URL
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getJobBySlug(slug: string) {
    const res = await fetch(`${API_URL}/api/careers?populate[career][populate]=*&populate[category][populate]=title,category&filters[slug][$eq]=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    const data = await res.json();
    const category = data.data[0].attributes.category.data.attributes.title;
    const job = data.data[0].attributes.career;
    job.category = category;
    return job;
}


const page = async({ params }: PageProps) => {
  
const job = await getJobBySlug(params.slug);
 
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
              <JobDetails job={job} />
            </section>
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