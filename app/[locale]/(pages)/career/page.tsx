import React, { Suspense } from 'react';

import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import dynamic from 'next/dynamic';
import JobListingsSkeleton from '@/compontents/ui/skeleton/JobListingSkeleton';
import ScrollSliders from '@/compontents/categories/ScrollSliders';

 const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
const page = async() => {
  let res = await fetch(
    `${API_URL}/api/careers?populate[career]=*&populate[category][populate]=title,category`
  );
  let data = await res.json()
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