import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "https://example.com"; // Add a fallback URL if needed

type Props = {
  params: { title: string, description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/event-page?populate[seo][populate]=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    const title = seo.meta_title || "Default Title";
    const description = seo.meta_description || "Default Description";
    const favicon = `/images/logo.png`;
    
    return {
      title,
      description,
      icons: {
        icon: favicon,
        shortcut: favicon,
        apple: favicon,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Return default metadata if there's an error
    return {
      title: "Default Title",
      description: "Default Description",
      icons: {
        icon: "/default-favicon.ico",
        shortcut: "/default-favicon.ico",
        apple: "/default-favicon.ico",
      },
      metadataBase: new URL("https://example.com"),
      alternates: {
        canonical: "https://example.com",
      },
      openGraph: {
        title: "Default Title",
        description: "Default Description",
        url: "https://example.com",
        siteName: "Your Site Name",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Default Title",
        description: "Default Description",
        site: "@yourtwitterhandle",
        creator: "@yourtwitterhandle",
      },
      other: {
        "og:image": "/default-og-image.jpg",
        "twitter:image": "/default-twitter-image.jpg",
      },
    };
  }
}

const fetchEvents = async () => {
  const res = await fetch(`${API_URL}/api/events?populate[Event][populate]=*&populate=image`, {
    cache: "no-store",
  });
  const data = await res.json();
  const events = data.data.filter((el: any) => !el.attributes.Event.Is_main);
  return events;
};

const fetchEventPage = async() => {
  const res = await fetch(`${API_URL}/api/event-page`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data.attributes;
}

const page = async () => {
  const events = await fetchEvents();
  const eventPage = await fetchEventPage();

  const DynamicGallerySection = dynamic(
    () => import("@/compontents/news-and-events/GallerySection"),
    {
      ssr: false,
      loading: () => <GallerySectionSkeleton />,
    }
  );

  return (
    <>
      <div className="px-5 lg:px-20 font-avenir">
        <section className="max-w-[1440px] m-auto mb-[30px] lg:mb-0">
          <div>
            <div className="flex mb-[24px] mt-[24px]">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]" />
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                {eventPage.title}
              </span>
            </div>
            <h2 className="text-[30px] leading-[36px] lg:text-[36px] font-[800] lg:leading-[40px] text-heading mb-[10px]">
              Explore what&apos;s happening in{" "}
              <span className="text-primary">our community</span>
            </h2>
            <p className="text-[18px] lg:text-[20px] font-[500] leading-[28px] text-paragraph">
              {eventPage.description}
            </p>
          </div>
        </section>
        <div className="lg:pt-[6px]">
          <section className="max-w-[1440px] lg:mt-[48px] m-auto">
            <Suspense fallback="Loading...">
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

      <section>
        <CallToAction />
      </section>
    </>
  );
};

export default page;
