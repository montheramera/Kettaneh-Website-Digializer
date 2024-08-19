import Image from "next/image";

const LegacySection = () => {
  return (
    <div className="p-8 lg:px-20 lg:py-[96px] font-avenir border-y-primary  border-opacity-25 border-y-[1px] ">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1440px] m-auto">
        <div className="md:w-1/2 flex flex-col justify-between lg:h-[342px]">
          <div className="flex-grow">
            <h3 className="font-[800] leading-[40px] text-[36px] text-heading">
              Our Legacy of <br /> Excellence
            </h3>
            <p className="mt-[10px] text-paragraph font-[500] text-[20px] leading-[28px] mb-[32px] max-w-[425px]">
              For over a century, F. A. Kettaneh & Co LTD Jordan has set
              industry standards, fostering strong ties with clients, employees,
              and communities.
            </p>
          </div>
          <button className="bg-primary max-w-[196px] mb-8 lg:mb-0 text-white py-2 px-4 ">
            Explore Our Journey
          </button>
        </div>
        <div className="md:w-1/2 flex">
          <div className="bg-primary w-[4px] min-h-[100%] mr-[4px]"></div>
          <div>
            <Image
              src={"/images/our-legacy.png"}
              alt="Legacy Image"
              width={561}
              height={342}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacySection;
