import Image from "next/image";
import Link from "next/link";

export default function GallerySection({events}:any) {
  const images = [
    {
      src: "/images/events-news/gallery/1.png",
      title: "F.A. Kettaneh Kick Off Meeting",
    },
    {
      src: "/images/events-news/gallery/2.png",
      title: "Jordanian Technicians Forum",
    },
    {
      src: "/images/events-news/gallery/3.png",
      title: "JIMEX Exhibition 2019",
    },
    { src: "/images/events-news/gallery/4.png", title: "Siemens Partner Day" },
    { src: "/images/events-news/gallery/5.png", title: "Aqaba Seminar" },
    {
      src: "/images/events-news/gallery/6.png",
      title: "Water Authority workshop",
    },
  ];

  return (
    <div className="font-avenir">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event:any, index: number) => (
          <Link
            href={`/news-and-events/${event.attributes.Event.title}`}
            key={index}
            aria-label="Go to the News and Events Page"
          >
          <div
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <Image
              src={event.attributes.Event.image.data.attributes.url}
              alt={event.attributes.Event.title}
              width={384}
              height={176}
              className="object-cover w-full h-auto"
            />
            <h3 className="text-[18px] font-[800] leading-[28px] text-heading mx-2 mt-[10px] ">
              {event.attributes.Event.title}
            </h3>
            <p className="font-[400] underline mb-[10px] text-[16px] leading-[28px] mx-2 text-[#111928] ">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
