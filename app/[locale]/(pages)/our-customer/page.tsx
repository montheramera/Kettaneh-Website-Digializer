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

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=*`);
  const data = await res.json();
  const Categories = data.data.map((el: any)=>({id: el.id, title: el.attributes.title, category: el.attributes.category})).filter((el: any)=> el.title != "kettaneh");
  return Categories;
}

const index = async() => {
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

    const customerData = await fetchCustomerData();
    const Clients = await fetchClients();
    const categories = await fetchCategories();
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
          <CallToAction categories={categories}/>
        </section>
      </>
    );
};

export default index;