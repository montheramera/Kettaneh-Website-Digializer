import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/event-seos?populate=seo`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seoAttributes = data.data[0]?.attributes.seo;

    return {
      title: seoAttributes?.meta_title || 'Default Title',
      description: seoAttributes?.meta_description || 'Default Description',
    };
  } catch (error) {
    return {
      title: 'Default Title',
      description: 'Default Description',
    };
  }
}

const fetchEvents = async () => {
  const res = await fetch(`${API_URL}/api/events?populate[Event][populate]=*&populate=image`);
  const data = await res.json();
  const events = data.data.filter((el: any)=>!el.attributes.Event.Is_main);
  return events;
};



const page = async() => {
  const events = await fetchEvents();

  const DynamicGallerySection = dynamic(
    () => import("@/compontents/news-and-events/GallerySection"),
    {
      ssr: false,
      loading: () => (
        <>
         <GallerySectionSkeleton />
        </>
      ),
    }
  );
  return (
    <>
      <div className="px-5 lg:px-20  font-avenir">
        <section className="max-w-[1440px] m-auto mb-[30px] lg:mb-0">
          <div>
            <div className="flex mb-[24px] mt-[24px]">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                News and Events
              </span>
            </div>
            <h2 className="text-[30px] leading-[36px] lg:text-[36px] font-[800] lg:leading-[40px] text-heading mb-[10px]">
              Explore what&apos;s happening in{" "}
              <span className="text-primary ">our community </span>
            </h2>
            <p className="text-[18px] lg:text-[20px] font-[500] leading-[28px] text-paragraph">
              Stay updated with the latest news and upcoming events.
            </p>
          </div>
        </section>
        <div className="  lg:pt-[6px]">
          <section className="max-w-[1440px] lg:mt-[48px] m-auto">
            {/* <GallerySection events={events} /> */}
            <Suspense fallback={"loading"}>
                <DynamicGallerySection events={events} />
              </Suspense>
          </section>
        </div>
      </div>

      <section className="hidden lg:block">
        <LeadingExcellence />
      </section>
      <section className="block lg:hidden">
        <ScrollSliders />
      </section>

      <section className=" ">
        <CallToAction  />
      </section>
    </>
  );
};

export default page;