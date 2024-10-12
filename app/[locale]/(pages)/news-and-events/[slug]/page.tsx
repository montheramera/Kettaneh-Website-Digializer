import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import EventDetails from "@/compontents/event-details/EventDetails";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

type Props = {
    params: { title: string, description: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

type PageProps = {
    params: { slug: string }; // Adjusted to match the slug in the URL
    searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props) {
    try {
        const res = await fetch(`${API_URL}/api/event-seos?populate=seo`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const seoAttributes = data.data[0]?.attributes.seo;

        return {
            title: seoAttributes?.meta_title || 'Default Title',
            description: seoAttributes?.meta_description || 'Default Description',
        };
    } catch (error) {
        return {
            title: 'Default Title',
            description: 'Default Description',
        };
    }
}

const fetchEvents = async () => {
    const res = await fetch(`${API_URL}/api/events?populate[Event][populate]=*&populate=image&sort[0]=createdAt:desc&pagination[pageSize]=3`);
    const data = await res.json();
    return data.data;
};

const fetchEventByTitle = async (title: string) => {
    const res = await fetch(`${API_URL}/api/events/${title}`);
    const data = await res.json();
    return data;
};

const page = async ({ params }: PageProps) => {
    const title = params.slug.replaceAll('-', ' ');
    const featuredEvents = await fetchEvents();
    const event = await fetchEventByTitle(title as string)
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