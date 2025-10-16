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

type Props = {
  params: { title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/our-customer?populate[seo][populate]=*`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    const seo = data.data?.attributes?.seo || {}
    const title = 'Trusted Partners | F.A Kettaneh & Co Ltd Jordan';
    const description = "Companies we serve across Jordan & the region. Kettaneh provides tailored engineering solutions for leading clients in electrical, HVAC, and industrial projects.";
  

    return {
      title,
      description,
      keywords: "Kettaneh partners, Jordan business clients, HVAC clients, machinery partners, trusted engineering partners, Jordan companies",
      authors: [{ name: "Kettaneh Team" }],
      openGraph: {
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/our-customer`,
        siteName: "Kettaneh",
        images: [
          {
            url: "/images/logo.png",
            width: 1200,
            height: 630,
            alt: "Kettaneh Trusted Partners",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/logo.png"],
        creator: "@Kettaneh",
        site: "@Kettaneh",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/our-customer`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error)

    // Return default metadata if there's an error
    return {
      title: "Trusted Partners | F.A Kettaneh & Co Ltd Jordan",
      description: "Companies we serve across Jordan & the region. Kettaneh provides tailored engineering solutions for leading clients in electrical, HVAC, and industrial projects.",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/our-customer`,
      },
    };
  }
}

const fetchCustomerData = async () => {
  const res = await fetch(`${API_URL}/api/our-customer?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  const customerData = data.data.attributes
  return customerData;
};

const fetchClients = async ()=>{
  const res = await fetch(`${API_URL}/api/clients?populate[Client][populate]=*&populate=logo`, {
    cache: "no-store",
  });
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
                  Trusted Partners
                </span>
              </div>
              <h1 className="text-[30px] lg:text-[36px] font-[800] leading-[34px] lg:leading-[40px] text-heading mt-[16px] mb-[16px]">
                Trusted Partners
              </h1>
              <p className="text-[20px] lg:text-[24px] font-[500] leading-[30px] text-primary mb-[30px] lg:mb-[48px]">
                Companies we serve across Jordan & the region
              </p>
              <div className="flex flex-row mb-[30px] lg:mb-[64px]">
                <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div> 
                <div>
                <Suspense fallback={"loading"}>
                  <DynamicParagraph content={customerData?.description} classes="text-[18px] lg:text-[20.1px] font-[400] leading-[28px] text-paragraph lg:max-w-[1216px]" />
                </Suspense>
                </div>
              </div>

            </div>
          </section>

          <section>
            <Suspense fallback={"loading"}>
                <DynamicLogoSection Clients={Clients} />
              </Suspense>
          </section>

          {/* CTA Section */}
          <section className="max-w-[1440px] m-auto mt-[48px] lg:mt-[80px] mb-[48px]">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-primary p-8 lg:p-12 rounded-r-lg shadow-md">
              <h2 className="text-[24px] lg:text-[30px] font-[700] leading-[32px] lg:leading-[40px] text-heading mb-[16px]">
                Become Our Customer Today
              </h2>
              <p className="text-[16px] lg:text-[18px] font-[400] leading-[26px] text-paragraph mb-[24px] max-w-[800px]">
                Contact us to discuss how we can work together and deliver excellence through our innovative engineering solutions and premium brands.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:info@kettaneh.com.jo" 
                    className="text-[18px] lg:text-[20px] font-[600] text-primary hover:text-primary/80 transition-colors"
                  >
                    info@kettaneh.com.jo
                  </a>
                </div>
                <a 
                  href="mailto:info@kettaneh.com.jo"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-[500] text-[16px] transition-colors shadow-md hover:shadow-lg"
                >
                  Get In Touch
                </a>
              </div>
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