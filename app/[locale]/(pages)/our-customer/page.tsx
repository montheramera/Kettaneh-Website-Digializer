import LogosSliderOurCustomer from '@/compontents/main-page/our-customer/LogosSliderOurCustomer';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import HoverEffect from '@/compontents/ui/mouse-over/HoverEffect';
import Image from 'next/image';
import React from 'react';

const index = () => {
    const logos = [
      { alt: "customer logo 1", src: "/images/customer-logos/kett.png" },
      {
        alt: "customer logo 2",
        src: "/images/customer-logos/_0022_cement.png",
      },
      {
        alt: "customer logo 3",
        src: "/images/customer-logos/_0021_Layer-88.png",
      },
      {
        alt: "customer logo 4",
        src: "/images/customer-logos/_0020_Potash.png",
      },
      {
        alt: "customer logo 5",
        src: "/images/customer-logos/_0019_ArabBankLogo.png",
      },
      { alt: "customer logo 6", src: "/images/customer-logos/_0018_index.png" },
      {
        alt: "customer logo 7",
        src: "/images/customer-logos/_0017_hq_logo.png",
      },
      {
        alt: "customer logo 8",
        src: "/images/customer-logos/_0016_Layer-86.png",
      },
      {
        alt: "customer logo 9",
        src: "/images/customer-logos/_0015_Layer-87.png",
      },
      {
        alt: "customer logo 10",
        src: "/images/customer-logos/_0014_sheraton-hotels-logo-11529406977kvwmlh14rx.png",
      },
      {
        alt: "customer logo 11",
        src: "/images/customer-logos/_0013_حمودة.png",
      },
      {
        alt: "customer logo 12",
        src: "/images/customer-logos/_0012_256256.png",
      },
      {
        alt: "customer logo 13",
        src: "/images/customer-logos/_0011_1341345.png",
      },
      {
        alt: "customer logo 14",
        src: "/images/customer-logos/_0010_Layer-89.png",
      },
      {
        alt: "customer logo 15",
        src: "/images/customer-logos/_0009_367367.png",
      },
      {
        alt: "customer logo 16",
        src: "/images/customer-logos/_0008_s5UBoHjS_400x400.png",
      },
      {
        alt: "customer logo 17",
        src: "/images/customer-logos/_0007_Layer-90.png",
      },
      {
        alt: "customer logo 18",
        src: "/images/customer-logos/_0006_14134.png",
      },
      {
        alt: "customer logo 19",
        src: "/images/customer-logos/_0002_Layer-92.png",
      },
      {
        alt: "customer logo 20",
        src: "/images/customer-logos/_0001_logo33.png",
      },
      {
        alt: "customer logo 21",
        src: "/images/customer-logos/_0000_14514.png",
      },
    ];

    return (
      <>
        <div className=" lg:px-20  font-avenir">
          <section className="max-w-[1440px] m-auto">
            <div>
              <div className="mb-[24px] mt-[24px] flex">
                <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px]">
                  Our Customer
                </span>
              </div>
              <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mt-[16px] mb-[64px]">
                <span className="text-primary "> Our Valued </span>Partners and
                Landmark Projects
              </h2>
              <p className=" text-[20.1px] font-[400] leading-[28px] text-paragraph mt-[64px] lg:max-w-[1216px]">
                At Kettaneh, we pride ourselves on delivering excellence through
                our innovative engineering solutions and collaborations with
                premium brands. Our landmark projects reflect our commitment to
                shaping the future with cutting-edge technology and unparalleled
                expertise.
              </p>
              <p className="text-[20.1px] font-[400] leading-[28px] text-paragraph mt-[20px]">
                From hospitality giants like Sheraton and Holiday Inn to leading
                industrial companies such as Arab Potash and Manaseer Group, our
                portfolio showcases a diverse range of successful projects.
                Explore our work and discover how we continuously strive to
                exceed expectations and set new standards in the industry.
              </p>
            </div>

            <div className="mb-[36px] mt-[64px] flex justify-start  w-full">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px]">
                Success Story
              </span>
            </div>
          </section>

          <section>
            <div className="mt-[64px] mb-[32px] max-w-[1440px] m-auto">
              {/* <LogosSliderOurCustomer /> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 items-center">
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150} // Adjust width according to your needs
                      height={150} // Adjust height according to your needs
                      // objectFit="cover" // Ensures logos maintain their aspect ratio
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section>
          <LeadingExcellence />
        </section>
        <section className="my-[64px]">
          <CallToAction />
        </section>
      </>
    );
};

export default index;