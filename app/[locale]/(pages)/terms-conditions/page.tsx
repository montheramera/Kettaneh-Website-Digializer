
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ParagraphSkeleton from '@/compontents/ui/skeleton/ParagrapgSkeleton';
;

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/terms-and-condition?populate=seo.fav_icon`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data?.attributes?.seo || {}
    const title = seo.meta_title || "terms conditions";
    const description = seo.meta_description || "terms conditions";


    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/terms-conditions`,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: "terms-conditions",
      description: "terms-conditions",

      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/terms-conditions`,
      },
    };
  }
}

const fetchTermsData = async () => {
  const res = await fetch(`${API_URL}/api/terms-and-condition?populate=seo.fav_icon`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-store",
    },
  });
  const data = await res.json();
  const terms = data?.data?.attributes;
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
        <div className="px-5 lg:px-20  font-avenir h-full">
          <section className="max-w-[1440px] m-auto">
            <div>
              <div className="mb-[24px] mt-[24px] flex">
                <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                {termsData && (<span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px] uppercase">
                  {termsData?.title}
                </span>)}
              </div>
       
              <Suspense fallback={"loading"}>
                {termsData ? (<DynamicParagraph content={termsData?.text} classes="text-[18px] lg:text-[20.1px] font-[400] leading-[28px] text-paragraph lg:my-4 lg:max-w-[1216px]" />):
                  <div className=''>
                    There is no data in mean Time
                  </div>
                }
              </Suspense>

            </div>
          </section>
        </div>
     
      </>
    );
};

export default page;