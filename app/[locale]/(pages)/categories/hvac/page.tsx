import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";
import React from "react";
const imagesLogos = [
  {
    name: "Siemens",
    src: "/images/categories/hvac/logos/1.png",
    width: 150,
    height: 46.2,
  },
  {
    name: "Haier",
    src: "/images/categories/hvac/logos/2.png",
    width: 145,
    height: 126,
  },
  
];

const page = () => {
  return (
    <>
      <FirstSection
        categoryname={"HVAC"}
        categoryParagraph={
          "Our HVAC department provides the market with comfortable and healthy air quality, for both heating & cooling seasons from world leaders such as Haier and our locally renowned brand that is Home Master."
        }
        categoryBg={"#5389B9"}
        imagesLogos={imagesLogos}
        imageUrl={"/images/categories/hvac/hvac.png"}
      />
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
