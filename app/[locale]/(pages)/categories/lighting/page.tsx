import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import React from "react";
const imagesLogos = [
  {
    name: "Siemens",
    src: "/images/categories/lighting/logos/1.png",
    width: 150,
    height: 62.67,
  },
  {
    name: "Haier",
    src: "/images/categories/lighting/logos/2.png",
    width: 150,
    height:57.87,
  },
  {
    name: "Siemens",
    src: "/images/categories/lighting/logos/3.png",
    width: 150,
    height: 38,
  },
  {
    name: "Haier",
    src: "/images/categories/lighting/logos/4.png",
    width: 150,
    height: 23,
  },
];

const page = () => {
  return (
    <>
      <FirstSection
        categoryname={"Lighting"}
        categoryParagraph={
          "Our lighting solutions are designed to make our days always brighter while providing easy to install, innovative, reliable and affordable solutions for homes and businesses. Our lighting Business Unit offers such valuable solutions across our multiple brands such as Leviton, Pelsan, P.U.K, Tridonic, Northcliff, Orbik, Secom, Ikizler Megaman, Relco, Pedas, Disano, Grupo MCI and Boluce."
        }
        categoryBg={"#E7C460"}
        imagesLogos={imagesLogos}
        imageUrl={"/images/categories/lighting/lighting.png"}
      />

      <CallToAction  />
    </>
  );
};

export default page;
