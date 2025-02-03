import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import React from "react";

export const metadata = {
  title: "Page Not Found",
};


const NotFoundPage = () => {
  return (
    <>
    <div className="px-5 lg:px-20 font-avenir">
      <div className="max-w-[1440px] m-auto">
        <div className="flex mb-6 mt-6">
          <div className="bg-primary w-1 min-h-full mr-2"></div>
          <span className="bg-primary text-white py-2 px-4 text-xl font-medium uppercase">
            404
          </span>
        </div>


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

export default NotFoundPage;