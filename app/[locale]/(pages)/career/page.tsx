import React from 'react';
import JobListings from '@/compontents/career/FirstSection';
import CareerForm from "@/compontents/career/CareerForm";
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';

const page = () => {
    return (
      <>
        <div className="p-10 lg:px-20 lg:py-[32px] font-avenir ">
          <div className="max-w-[1440px] m-auto">
            <section className="">
              <div>
                <div className="mb-10 flex">
                  <div className="bg-primary min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"></div>
                  <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
                    Career
                  </span>
                </div>
              </div>
            </section>
            <section>
              <JobListings />
            </section>

            <section>
              <CareerForm />
            </section>
          </div>
        </div>
        <section>
          <LeadingExcellence />
        </section>
        <section className="my-[20px] lg:my-[64px]">
          <CallToAction />
        </section>
      </>
    );
};

export default page;