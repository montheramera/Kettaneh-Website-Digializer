import GallerySection from "@/compontents/news-and-events/GallerySection";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-8 lg:px-20 lg:py-[32px] font-avenir">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-10 flex">
              <div className="bg-primary min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
                News and Events
              </span>
            </div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              Explore what&apos;s happening in{" "}
              <span className="text-primary ">our community </span>
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              Stay updated with the latest news and upcoming events.
            </p>
          </div>
        </section>

        <section className="my-[20px] lg:mt-[64px] max-w-[1440px] m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[32px]">
            <div className="lg:col-span-2 shadow-lg">
              {/* <div className="relative w-[769px] h-[337px] mb-6"> */}
              <Image
                src={"/images/news/Frame 1272631876.png"}
                alt="Haier Factory Visit"
                //   layout="fill"
                //   objectFit="cover"
                width={769}
                height={337}
                priority
              />
              {/* </div> */}
              <h3 className="font-[800] mt-[20px] text-[18px] leading-[28px] mx-2 text-[#111928] ">
                Haier Factory Visit
              </h3>
            </div>
            <div className="lg:col-span-1 space-y-20">
              <div>
                <div className="gap-2 flex">
                  <div className="relative w-[24px] h-[24px]">
                    <Image
                      src={"/images/news/arrow.png"}
                      alt="Jordanian Technicians Forum"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                    Attend Our Latest Event
                  </h3>
                </div>
                <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                  Join us for industry-leading events featuring expert speakers
                  and the latest innovations.
                </p>
              </div>
              <div>
                <div className="gap-2 flex">
                  <div className="relative w-[24px] h-[24px]">
                    <Image
                      src={"/images/news/arrow.png"}
                      alt="Jordanian Technicians Forum"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                    Organize a Kettaneh Workshop
                  </h3>
                </div>
                <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                  Bring Kettaneh’s expertise to your community with our
                  specialized workshops and seminars.
                </p>
              </div>
              <div>
                <div className="gap-2 flex">
                  <div className="relative w-[24px] h-[24px]">
                    <Image
                      src={"/images/news/arrow.png"}
                      alt="Jordanian Technicians Forum"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                    About Kettaneh Events
                  </h3>
                </div>
                <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                  Our events foster growth, innovation, and collaboration across
                  industries, connecting professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-[20px] lg:mt-[64px] max-w-[1440px] m-auto">
          <GallerySection />
        </section>
      </div>

      <section>
        <LeadingExcellence />
      </section>

      <section className="my-[20px] lg:my-[64px] ">
        <CallToAction />
      </section>
    </>
  );
};

export default page;
