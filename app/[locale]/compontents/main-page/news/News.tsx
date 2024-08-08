import Image from "next/image";

const News = () => {
  return (
    <div className="p-8 lg:px-20 lg:py-[96px] font-avenir border-y-primary  border-opacity-25 border-y-[1px]">
      <div className="">
        <h2 className="font-[800] text-[36px] leading-[40px] text-heading">
          News and Events
        </h2>
        <p className="mt-[10px] text-paragraph font-[500] text-[20px] leading-[28px] max-w-[768px]">
          Stay updated with the latest news and upcoming events. Explore what's
          happening in our community.
        </p>
        <button className="mt-[16px] bg-primary text-white py-2 px-6 ">
          Explore News and Events
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[32px]">
        <div className="lg:col-span-2 shadow-lg">
          {/* <div className="relative w-[769px] h-[337px] mb-6"> */}
          <Image
            src={"/images/news/Frame 1272631876.png"}
            alt="Haier Factory Visit"
            //   layout="fill"
            //   objectFit="cover"
            width={769}
            height={337}
            priority
          />
          {/* </div> */}
          <h3 className="font-[800] text-[18px] leading-[28px] mx-2 text-[#111928] ">
            Haier Factory Visit
          </h3>
        </div>
        <div className="lg:col-span-1 space-y-20">
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
              Join us for industry-leading events featuring expert speakers and
              the latest innovations.
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
              Bring Kettaneh’s expertise to your community with our specialized
              workshops and seminars.
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[64px]">
        <div className="shadow-lg">
          <div className="relative  w-[100%] h-[176px]">
            <Image
              src={"/images/news/card-header.png"}
              alt="F.A. Kettaneh Kick Off Meeting"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="font-[800] text-[18px] leading-[28px] text-heading my-[10px] mx-2">
            F.A. Kettaneh Kick Off Meeting
          </h3>
        </div>

        <div className="shadow-lg">
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
        </div>
      </div>
    </div>
  );
};

export default News;
