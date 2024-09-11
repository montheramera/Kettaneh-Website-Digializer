import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchMain = async ()=>{
  const res = await fetch(`${API_URL}/api/main-pages?populate=*`);
  const data = await res.json();
  const mainData = data.data.map((el: any)=>el.attributes);
  return mainData;
}

const LegacySection = async() => {
  const mainData = await fetchMain();
  const legacyImage = mainData[0].our_legacy_img.data.attributes
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir border-y-[#F9FAFB]  border-opacity-25 border-y-[1px] ">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1440px] m-auto justify-between">
        <div className="md:w-1/2 flex flex-col justify-between lg:h-[342px]">
          <div className="flex-grow">
            <h3 className="font-[800] leading-[36px] lg:leading-[40px]  text-[30px] lg:text-[36px] text-heading">
              Our Legacy of <span className="text-primary">Excellence</span>
            </h3>
            <p className=" mt-[15px] lg:mt-[30px] text-paragraph font-[500] text-[20px] leading-[28px] mb-[32px] lg:mb-[32px] max-w-[700px]">
              For over a century, F. A. Kettaneh & Co LTD Jordan has set
              industry standards, fostering strong ties with clients, employees,
              and communities.
            </p>
          </div>
          <Link
            href="/about"
            className="bg-primary max-w-[196px] mb-8 lg:mb-0 text-white py-2 px-4"
            aria-label="Go to the  About Us Page"
          >
            Explore Our Journey
          </Link>
        </div>
        <div className="md:w-1/2 flex  justify-end">
          <div className="bg-primary w-[4px] min-h-[100%] mr-[4px]"></div>
          <div>
            <Image
              src={legacyImage.url}
              alt={legacyImage.name}
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
