import LogosSliderOurCustomer from '@/compontents/main-page/our-customer/LogosSliderOurCustomer';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import React from 'react';

const index = () => {
    return (
      <>
        <div className="p-8 lg:px-20 lg:py-[32px] font-avenir">
          <section className="">
            <div>
              <div className="mb-10 flex">
                <div className="bg-primary w-[2px] min-h-[100%] mr-[4px]"></div>
                <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
                  Our Customer
                </span>
              </div>
              <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
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
          </section>

          <section>
            <div className="mt-[64px]">
              <LogosSliderOurCustomer />
            </div>
          </section>

          <section className='my-[64px]'>
            <CallToAction />
          </section>
        </div>
      </>
    );
};

export default index;