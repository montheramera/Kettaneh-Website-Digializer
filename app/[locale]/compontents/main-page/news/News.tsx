import Image from "next/image";
import Link from "next/link";



const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

const fetchEvents = async () => {
  const res = await fetch(
    `${API_URL}/api/events?populate[Event][populate]=*&populate=image`,
    {
      method: "GET"
    }
  );
  const data = await res.json();
  const Events = data.data.map((el: any) => el.attributes.Event);
  return Events;
};

const fetchMain = async ()=>{
  const res = await fetch(`${API_URL}/api/main?populate=*`);
  const data = await res.json();
  const mainData = data.data.attributes;
  return mainData;
}

const News = async () => {

  const mainData = await fetchMain();
  const Events = await fetchEvents();
  const mainEvent = Events.find((el: any) => el.Is_main);
  const otherEvents = Events.filter((el: any) => !el.Is_main && el.promated_to_front_page);
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir border-y-[#F9FAFB]  border-opacity-25 border-y-[5px]">
      <div className="max-w-[1440px] m-auto">
        <div className="">
          <h2 className="font-[800] text-[30px] leading-[36px] lg:text-[36px] lg:leading-[40px] text-heading">
            News and <span className="text-primary">Events</span>
          </h2>
          <p className="mt-[10px] text-paragraph font-[500] text-[20px] leading-[28px] max-w-[768px]">
            {/* Stay updated with the latest news and upcoming events. Explore what
            &apos;s happening in our community. */}

            {mainData.events_description}
          </p>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[30px] lg:my-[64px] ">
          <div className="lg:col-span-2 shadow-lg">
            <Image
              src={mainEvent.image.data.attributes.url}
              alt={mainEvent.title}
              //   layout="fill"
              //   objectFit="cover"
              width={769}
              height={337}
              priority
            />
            <h3 className="font-[800] mt-[20px] text-[18px] leading-[28px] mx-2 text-[#111928] ">
              {mainEvent.title}
            </h3>

            <p className="font-[400] my-[20px] text-[16px] leading-[28px] mx-2 text-[#111928] underline ">
              {new Date(mainEvent.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="lg:col-span-1 space-y-10 mb-[30px] lg:mb-0">
            <div>
              <div className="gap-2 flex">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src={"/images/news/arrow.png"}
                    alt="Jordanian Technicians Forum"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                  Attend Our Latest Event
                </h3>
              </div>
              <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                Join us for industry-leading events featuring expert speakers
                and the latest innovations.
              </p>
              <p className="font-[400] my-[10px] text-[16px] leading-[28px] ml-7 text-[#111928] underline">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>
              <div className="gap-2 flex">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src={"/images/news/arrow.png"}
                    alt="Jordanian Technicians Forum"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                  Organize a Kettaneh Workshop
                </h3>
              </div>
              <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                Bring Kettaneh’s expertise to your community with our
                specialized workshops and seminars.
              </p>
              <p className="font-[400] my-[10px] text-[16px] leading-[28px] ml-7 text-[#111928] underline">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>
              <div className="gap-2 flex">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src={"/images/news/arrow.png"}
                    alt="Jordanian Technicians Forum"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-[800] text-[18px] leading-[28px] text-heading">
                  About Kettaneh Events
                </h3>
              </div>
              <p className="max-w-[416px] font-[400] text-[16px] leading-[24px] ml-7 text-paragraph">
                Our events foster growth, innovation, and collaboration across
                industries, connecting professionals worldwide.
              </p>
              <p className="font-[400] my-[10px] text-[16px] leading-[28px] ml-7 text-[#111928] underline">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {otherEvents.map((event: any, index: number) => (
            
            <Link
              href={`en/news-and-events/${event.slug}`}
              key={index}
              aria-label="Go to the News and Events Page"
            >
              <div className="shadow-lg">
                <div className="relative  w-[100%] h-[176px]">
                  <Image
                    src={event.image.data.attributes.url}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-[800] text-[18px] leading-[28px] text-heading my-[10px] mx-2">
                  {event.title}
                </h3>
                <p className="font-[400] my-[20px] text-[16px] leading-[28px] mx-2 text-[#111928] underline">
                  {new Date(event.date).toLocaleDateString("en-US", {
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

          {/* <div className="shadow-lg">
            <div className="relative  w-[100%] h-[176px]">
              <Image
                src={"/images/news/card-header (1).png"}
                alt="Jordanian Technicians Forum"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="font-[800] text-[18px] leading-[28px] text-heading my-[10px] mx-2">
              Jordanian Technicians Forum
            </h3>
            <p className="font-[400] my-[20px] text-[16px] leading-[28px] mx-2 text-[#111928] underline ">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="shadow-lg">
            <div className="relative w-[100%] h-[176px]">
              <Image
                src={"/images/news/card-header (2).png"}
                alt="JIMEX Exhibition 2019"
                layout="fill"
                objectFit="cover"
                // width={100}
                // height={176}
                // priority
              />
            </div>
            <h3 className="font-[800] text-[18px] leading-[28px] text-heading my-[10px] mx-2">
              JIMEX Exhibition 2019
            </h3>
            <p className="font-[400] my-[20px] text-[16px] leading-[28px] mx-2 text-[#111928] underline ">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div> */}
        </div>

        <Link
          href="/news-and-events"
          aria-label="Go to the News and Events Page"
          className="mt-[40px] bg-primary text-white py-2 px-6 inline-block"
        >
          Explore News and Events
        </Link>
      </div>
    </div>
  );
};

export default News;
