import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import EventDetails from "@/compontents/event-details/EventDetails";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
    params: { slug: string, title: string, description: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

type PageProps = {
    params: { slug: string }; // Adjusted to match the slug in the URL
    searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props) {
  const newsTitle = params.slug;
    try {
      console.log("newsTitle", newsTitle);
      const res = await fetch(`${API_URL}/api/events/${newsTitle}?populate[seo][populate]=*`, {
        cache: "no-store",
      })
      // const res = await fetch(
      //   `${API_URL}/api/events?filters[newsTitle][$eqi]=${encodeURIComponent(
      //     newsTitle
      //   )}&populate[seo][populate]=*`,
      //   {
      //     cache: "no-store",
      //   }
      // );

  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
  
      const data = await res.json();
      const seo = data.data?.attributes?.seo || {}
      const title = seo.meta_title || newsTitle;
      const description = seo.meta_description || newsTitle;
      
  
      return {
        title,
        description,
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/news-and-events/${newsTitle}`,
        },
      };
    } catch (error) {
      console.error('Error fetching metadata:', error)
  
      // Return default metadata if there's an error
      return {
        title: newsTitle,
        description: newsTitle,
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/news-and-events/${newsTitle}`,
        },
      };
    }
  }

const fetchEvents = async () => {
    const res = await fetch(
      `${API_URL}/api/events?populate[Event][populate]=*&populate=image&sort[0]=createdAt:desc&pagination[limit]=3`,
      {
        cache: "no-store",
      }
    );
  const data = await res.json();
  //  console.log("data", data);
    return data.events;
};

const fetchEventByTitle = async (title: string) => {
    const res = await fetch(`${API_URL}/api/events/${title}`, {
      cache: "no-store",
    });
  const data = await res.json();
 
    return data;
};

const page = async ({ params }: PageProps) => {
    const title = params.slug;
    const featuredEvents = await fetchEvents();
    const event = await fetchEventByTitle(title as string);
    const DynamicGallerySection = dynamic(
        () => import("@/compontents/news-and-events/GallerySection"),
        {
            ssr: false,
            loading: () => (
                <>
                    <GallerySectionSkeleton />
                </>
            ),
        }
    );
    return (
        <>
            <div className="px-5 lg:px-20  font-avenir">
                <div className="  lg:pt-[6px]">
                    <section className="max-w-[1440px] m-auto">
                        {/* <Suspense fallback={"loading"}>
                            <DynamicGallerySection events={events} />
                        </Suspense> */}

                        <EventDetails event={event} FeaturedEvents={featuredEvents} />
                    </section>
                </div>
            </div>

            <section className="hidden lg:block">
                <LeadingExcellence />
            </section>
            <section className="block lg:hidden">
                <ScrollSliders />
            </section>

            <section className=" ">
                <CallToAction />
            </section>
        </>
    );
};

export default page;