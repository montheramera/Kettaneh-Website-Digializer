import FirstSection from '@/compontents/categories/FirstSection';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import React from 'react';
   const imagesLogos = [
      {
        name: "Siemens",
        src: "/images/categories/electrical/logos/1.png",
        width: 150,
        height: 23.68,
      },
      {
        name: "Haier",
        src: "/images/categories/electrical/logos/2.png",
        width: 150,
        height: 23.68,
      },
      {
        name: "Linde",
        src: "/images/categories/electrical/logos/3.png",
        width: 150,
        height: 119.52,
      },
    ];

const page = () => {
    return (
      <>
        <FirstSection
          categoryname={"Electrical"}
          categoryParagraph={
            "Our Electrical Business Unit is a solution provider in the power systems, Automation, Gear Motors, Industrial Couplings, Building Technologies and Drive Technologies through Siemens, Flender and Prysmian."
          }
          categoryBg={"#75B4C2"}
          imagesLogos={imagesLogos}
          imageUrl={"/images/categories/electrical/electrical.png"}
        />

        <CallToAction  />
      </>
    );
};

export default page;