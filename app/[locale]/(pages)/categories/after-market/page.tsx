import AfterMarketing from "@/compontents/categories/AfterMarketing";
import AfterMarketingForm from "@/compontents/categories/AfterMarketingForm";
import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";
import React from "react";


const page = () => {
  return (
    <>
      <AfterMarketing
        categoryname={"After Market"}
        categoryParagraph={
          "Our Aftermarket Business Unit offers services by means of its fully trained maintenance team which executes periodical checks, service works, repairs or replacement of necessary devices, equipment and machinery. We also support utilities, industries, businesses, governmental and residential customers by offering them warranty maintenance contracts, service agreements and on-call interventions."
        }
        categoryBg={"#85C5B0"}
        imageUrl={"/images/categories/after-marketing/after-marketing.png"}
      />

      {/* <FirstSection
        categoryname={"After Market"}
        categoryParagraph={
          "Our Aftermarket Business Unit offers services by means of its fully trained maintenance team which executes periodical checks, service works, repairs or replacement of necessary devices, equipment and machinery. We also support utilities, industries, businesses, governmental and residential customers by offering them warranty maintenance contracts, service agreements and on-call interventions."
        }
        categoryBg={"#85C5B0"}
        imagesLogos={[]}
        // imageUrl={"/images/categories/electrical/electrical.png"}
        imageUrl={"/images/categories/after-marketing/after-marketing.png"}
      />
      <section className="max-w-[1420px] m-auto">

      <div className="max-w-[600px]  ">
      <AfterMarketingForm />
      </div>
      </section> */}
      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSlider />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
