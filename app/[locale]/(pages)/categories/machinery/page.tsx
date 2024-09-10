import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import ScrollSlider from "@/compontents/ui/mobile-scroll-categories/MobileScrollCategories";
import React from "react";
const imagesLogos = [
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/1.png",
    width: 150,
    height: 41,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/2.png",
    width: 150,
    height: 41,
  },
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/3.png",
    width: 150,
    height: 33,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/4.png",
    width: 150,
    height: 73,
  },
  
  {
    name: "Siemens",
    src: "/images/categories/machinery/logos/5.png",
    width: 150,
    height: 46,
  },
  {
    name: "Haier",
    src: "/images/categories/machinery/logos/6.png",
    width: 150,
    height: 75,
  },
];

const page = () => {
  return (
    <>
      <FirstSection
        categoryname={"Machinery"}
        categoryParagraph={
          "At our Machinery Business Unit, we strongly believe that the success of our customers relies on us providing them with solutions to reduce their operating costs, streamline their process and keep their equipment running at peak performance under the most stringent conditions. Such solutions are available from within our global brands such as Atlas Copco, Linde, Delfin, Kubota and Vulcan."
        }
        categoryBg={"#E78F6D"}
        imagesLogos={imagesLogos}
        imageUrl={"/images/categories/machinery/machinery.png"}
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
