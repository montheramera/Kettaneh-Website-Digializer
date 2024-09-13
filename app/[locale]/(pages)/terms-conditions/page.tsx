import LogosSliderOurCustomer from '@/compontents/main-page/our-customer/LogosSliderOurCustomer';
import CallToAction from '@/compontents/ui/call-action/CallToAction';
import LeadingExcellence from '@/compontents/ui/leading-excellence/LeadingExcellence';
import HoverEffect from '@/compontents/ui/mouse-over/HoverEffect';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import BlocksRendererComponent from '@/compontents/ui/blocs-renderer/BlockRenderer';
import CustomerLogoSkeleton from '@/compontents/ui/skeleton/CustomerLogoSkeleton';
import dynamic from 'next/dynamic';
import ParagraphSkeleton from '@/compontents/ui/skeleton/ParagrapgSkeleton';
import ScrollSliders from '@/compontents/categories/ScrollSliders';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchTermsData = async () => {
  const res = await fetch(`${API_URL}/api/pages?populate=*`);
  const data = await res.json();
  console.log(data.data[1].attributes.text);
  const terms = data.data.map((el: any)=> el.attributes).filter((el: any)=> el.title === "Terms And Conditions");
  return terms;
};

const page = async() => {
    
    const termsData = await fetchTermsData();
    const DynamicParagraph = dynamic(
      () => import('@/compontents/ui/blocs-renderer/BlockRenderer'),
      {
        ssr: false,
        loading: () => (
          <>
           <ParagraphSkeleton />
          </>
        ),
      }
    );
    return (
      <>
        <div className="px-5 lg:px-20  font-avenir">
          <section className="max-w-[1440px] m-auto">
            <div>
              <div className="mb-[24px] mt-[24px] flex">
                <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px] uppercase">
                  {termsData[0]?.title}
                </span>
              </div>
       
              <Suspense fallback={"loading"}>
                <DynamicParagraph content={termsData[0]?.text} classes="text-[18px] lg:text-[20.1px] font-[400] leading-[28px] text-paragraph lg:my-4 lg:max-w-[1216px]" />
              </Suspense>

            </div>
          </section>
        </div>
        <section className="hidden lg:block">
          <LeadingExcellence />
        </section>
        <section className="block lg:hidden">
          <ScrollSliders />
        </section>
        <section className="">
          <CallToAction />
        </section>
      </>
    );
};

export default page;