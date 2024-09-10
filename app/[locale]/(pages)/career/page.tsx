import React from 'react';
import JobListings from '@/compontents/career/FirstSection';
import CareerForm from "@/compontents/career/CareerForm";
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';

const page = async() => {
  let res = await fetch('https://kettaneh-strapi.onrender.com/api/careers?populate[career]=*&populate[category][populate]=title,category')
  let data = await res.json()
  let careers = [...data.data];
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
              <JobListings careers={careers} />
            </section>

            {/* <section>
              <CareerForm />
            </section> */}
          </div>
        </div>
        <section>
          <LeadingExcellence />
        </section>
        <section className="">
          <CallToAction />
        </section>
      </>
    );
};

export default page;