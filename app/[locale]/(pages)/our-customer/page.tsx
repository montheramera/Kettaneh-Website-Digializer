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

const fetchCustomerData = async () => {
  const res = await fetch(`${API_URL}/api/our-customer-pages?populate=*`);
  const data = await res.json();
  const customerData = data.data.map((el: any)=>el.attributes)
  return customerData;
};

const fetchClients = async ()=>{
  const res = await fetch(`${API_URL}/api/clients?populate[Client][populate]=*&populate=logo`);
  const data = await res.json();
  const Clients = data.data.map((el: any)=>el.attributes.Client)
  return Clients;
}


const index = async() => {
 

    const customerData = await fetchCustomerData();
    const Clients = await fetchClients();
    const DynamicLogoSection = dynamic(
      () => import('@/compontents/customer/CustomerSection'),
      {
        ssr: false,
        loading: () => (
          <>
           <CustomerLogoSkeleton />
          </>
        ),
      }
    );
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
                  Our Customer
                </span>
              </div>
              <h2 className="text-[30px] lg:text-[36px] font-[800] leading-[34px] lg:leading-[40px] text-heading mt-[16px] mb-[30px] lg:mb-[64px]">
                <span className="text-primary "> Our Valued </span>Partners and
                Landmark Projects
              </h2>
              <Suspense fallback={"loading"}>
                <DynamicParagraph content={customerData[0]?.description} classes="text-[18px] lg:text-[20.1px] font-[400] leading-[28px] text-paragraph lg:mt-[64px] lg:max-w-[1216px]" />
              </Suspense>

            </div>
          </section>

          <section>
            <Suspense fallback={"loading"}>
                <DynamicLogoSection Clients={Clients} />
              </Suspense>
            <div className="mb-[36px] mt-[64px] flex justify-start  w-full max-w-[1440px]  m-auto">
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px]">
                View Success Stories
              </span>
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

export default index;