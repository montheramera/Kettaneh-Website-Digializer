import AfterMarketing from "@/compontents/categories/AfterMarketing";
import AfterMarketingForm from "@/compontents/categories/AfterMarketingForm";
import FirstSection from "@/compontents/categories/FirstSection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import React from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

    const fetchCategoryByTitle = async (title: string) => {
      const res = await fetch(`${API_URL}/api/categories?populate[category][populate]=*&populate=image&filters[title]=${title}`);
      const data = await res.json();
      const categories = data.data;
      return categories;
    };

const page = async() => {

  let AfterMarketCategory = await fetchCategoryByTitle('After Market');
  return (
    <>
      <AfterMarketing
        categoryname={AfterMarketCategory[0]?.attributes?.title}
        categoryParagraph={AfterMarketCategory[0]?.attributes?.category?.summary}
        categoryBg={AfterMarketCategory[0]?.attributes?.category?.background_color}
        imageUrl={AfterMarketCategory[0]?.attributes?.category?.image?.data?.attributes?.url}
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
      <section>
        <LeadingExcellence />
      </section>
      <CallToAction />
    </>
  );
};

export default page;
