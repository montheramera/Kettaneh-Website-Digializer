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



  // <section className=" max-w-[1440px] m-auto">
  //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[32px]">
  //     <div className="lg:col-span-2 shadow-lg">
  //       {/* <div className="relative w-[769px] h-[337px] mb-6"> */}
  //       <Image
  //         src={"/images/news/Frame 1272631876.png"}
  //         alt="Haier Factory Visit"
  //         //   layout="fill"
  //         //   objectFit="cover"
  //         width={769}
  //         height={337}
  //         priority
  //       />
  //       {/* </div> */}
  //       <h3 className="font-[800] mt-[10px] text-[18px] leading-[28px] mx-2 text-[#111928] ">
  //         Haier Factory Visit
  //       </h3>
  //       <p className="font-[400] underline mt-[10px] text-[16px]  leading-[28px] mx-2 text-[#111928] ">
  //         {new Date().toLocaleDateString("en-US", {
  //           year: "numeric",
  //           month: "long",
  //           day: "numeric",
  //           hour: "2-digit",
  //           minute: "2-digit",
  //         })}
  //       </p>
  //     </div>
  //     <div className="lg:col-span-1 space-y-10">
  //       <div>
  //         <div className="gap-2 flex">
  //           <div className="relative w-[24px] h-[24px]">
  //             <Image
  //               src={"/images/news/arrow.png"}
  //               alt="Jordanian Technicians Forum"
  //               layout="fill"
  //               objectFit="cover"
  //             />
  //           </div>
  //           <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
  //             Attend Our Latest Event
  //           </h3>
  //         </div>
  //         <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
  //           Join us for industry-leading events featuring expert speakers and
  //           the latest innovations.
  //         </p>
  //         <p className="font-[400] my-[10px] underline text-[16px] leading-[28px] ml-7 text-[#111928] ">
  //           {new Date().toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "long",
  //             day: "numeric",
  //             hour: "2-digit",
  //             minute: "2-digit",
  //           })}
  //         </p>
  //       </div>
  //       <div>
  //         <div className="gap-2 flex">
  //           <div className="relative w-[24px] h-[24px]">
  //             <Image
  //               src={"/images/news/arrow.png"}
  //               alt="Jordanian Technicians Forum"
  //               layout="fill"
  //               objectFit="cover"
  //             />
  //           </div>
  //           <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
  //             Organize a Kettaneh Workshop
  //           </h3>
  //         </div>
  //         <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
  //           Bring Kettaneh’s expertise to your community with our specialized
  //           workshops and seminars.
  //         </p>
  //         <p className="font-[400] my-[10px] text-[16px] underline leading-[28px] ml-7 text-[#111928] ">
  //           {new Date().toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "long",
  //             day: "numeric",
  //             hour: "2-digit",
  //             minute: "2-digit",
  //           })}
  //         </p>
  //       </div>
  //       <div>
  //         <div className="gap-2 flex">
  //           <div className="relative w-[24px] h-[24px]">
  //             <Image
  //               src={"/images/news/arrow.png"}
  //               alt="Jordanian Technicians Forum"
  //               layout="fill"
  //               objectFit="cover"
  //             />
  //           </div>
  //           <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
  //             About Kettaneh Events
  //           </h3>
  //         </div>
  //         <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
  //           Our events foster growth, innovation, and collaboration across
  //           industries, connecting professionals worldwide.
  //         </p>
  //         <p className="font-[400] my-[10px] text-[16px] underline leading-[28px] ml-7 text-[#111928] ">
  //           {new Date().toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "long",
  //             day: "numeric",
  //             hour: "2-digit",
  //             minute: "2-digit",
  //           })}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </section>