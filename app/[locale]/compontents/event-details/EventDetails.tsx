import Image from "next/image";
import Link from "next/link";
import BlocksRendererComponent from "../ui/blocs-renderer/BlockRenderer";

const EventDetails = async ({ event, FeaturedEvents }: any) => {
    return (
        <div className="py-10 lg:py-16 font-avenir bg-gray-50">
            <div className="max-w-[1440px] m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Event Details */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900">
                            {event.data.attributes.Event.title}
                        </h1>
                        <Image
                            src={event.data.attributes.Event.image.data.attributes.url}
                            alt={event.data.attributes.Event.title}
                            width={1200}
                            height={600}
                            priority
                            className="w-full h-auto object-cover shadow-lg"
                        />
                        <p className="text-sm lg:text-base text-gray-500 mt-4 mb-8">
                            {new Date(event.data.attributes.Event.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                        <BlocksRendererComponent content={event.data.attributes.Event?.summary} />
                    </div>

                    {/* Featured Events (Read Next) */}
                    <div className="lg:col-span-1">
                        <h2 className="text-white bg-primary inline-block px-6 py-1 text-2xl font-bold text-gray-800 mb-4">Read Next</h2>
                        <div className="space-y-8">
                            {FeaturedEvents.map((event: any, index: number) => (
                                <Link
                                    href={`/en/news-and-events/${event.attributes.slug}`}
                                    key={index}
                                    aria-label={`Go to the event: ${event.attributes.Event.title}`}
                                    className="mb-4"
                                >
                                    <div className="mb-4 group bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        <div className="relative w-full h-40 lg:h-52">
                                            <Image
                                                src={event.attributes.Event.image.data.attributes.url}
                                                alt={event.attributes.Event.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg lg:text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">
                                                {event.attributes.Event.title}
                                            </h3>
                                            <p className="text-sm lg:text-base text-gray-500 mt-2">
                                                {new Date(event.attributes.Event.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
