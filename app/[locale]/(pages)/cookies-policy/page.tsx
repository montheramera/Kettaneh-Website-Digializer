
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ParagraphSkeleton from '@/compontents/ui/skeleton/ParagrapgSkeleton';


const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCookiesData = async () => {
  const res = await fetch(`${API_URL}/api/pages?populate=*&filters[title][$eq]=Cookies Policy`);
  const data = await res.json();
  const cookies = data.data.map((el: any)=> el.attributes);
  return cookies;
};

const page = async() => {
    
    const cookiesData = await fetchCookiesData();
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
        <div className="px-5 lg:px-20  font-avenir h-screen">
          <section className="max-w-[1440px] m-auto">
            <div>
              <div className="mb-[24px] mt-[24px] flex">
                <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px] uppercase">
                  {cookiesData[0]?.title}
                </span>
              </div>
       
              <Suspense fallback={"loading"}>
                <DynamicParagraph content={cookiesData[0]?.text} classes="text-[18px] lg:text-[20.1px] font-[400] leading-[28px] text-paragraph lg:my-4 lg:max-w-[1216px]" />
              </Suspense>

            </div>
          </section>
        </div>
      </>
    );
};

export default page;