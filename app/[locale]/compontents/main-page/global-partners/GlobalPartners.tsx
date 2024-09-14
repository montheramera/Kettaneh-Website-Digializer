import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchGlobalPartners = async ()=>{
  const res = await fetch(`${API_URL}/api/partners?populate=Partner.logo`);
  const data = await res.json();
  const GlobalPartners = data.data.map((el: any)=>el.attributes.Partner).filter((el: any)=>el.promated_to_front_page);
  return GlobalPartners;
}

export default async function GlobalPartners() {
  const globalPartners = await fetchGlobalPartners();
  const partners = [
    { name: "Haier", src: "/images/haier.png" },
    { name: "Siemens", src: "/images/siemens.png" },
    { name: "Linde", src: "/images/linde.png" },
    { name: "Delfin", src: "/images/delfin.png" },
    { name: "Atlas Copco", src: "/images/atlascopco.png" },
    // { name: "Delfin", src: "/images/delfin.png" },
    // { name: "Atlas Copco", src: "/images/atlascopco.png" },
  ];

  return (
    <div className="px-5 py-[30px] lg:px-20   lg:py-[97px] font-avenir bg-[#F9FAFB]">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center max-w-[1440px] m-auto">
        <div className=" lg:min-w-[425px]">
          <h2 className="font-[800] text-[30px] lg:text-[36px] text-[#101828] leading-[36px] lg:leading-[40px]">
            Our Global <span className="text-primary">Partners</span>
          </h2>
          <p className=" paragraph mb-0 lg:mb-0 text-[20px] leading-[28px] mt-[10px] text-[#475467]">
            More than 30 global brands
          </p>
        </div>
        {/* flex-wrap */}
        {/* <div className="flex flex-wrap items-center lg:justify-center space-y-8 space-x-8 lg:space-y-0 lg:space-x-4">
          {globalPartners.map((partner: any, index: number) => (
            <div
              key={index}
              // className={`${index == 0 ? "mt-[22px] lg:mt-0" : ""}`}
              // width={100}
              // height={30.8}
            >
              <Image
                src={partner?.logo?.data?.attributes?.url}
                alt={partner?.title}
                width={partner?.logo.data.attributes.width}
                height={partner?.logo.data.attributes.height}
                priority
                // className="w-[100px] he-[30px] lg:w-[150px] lg:h-[45.8px] object-contain flex flex-wrap"
              />
            </div>
          ))}
        </div> */}

        <div className="flex flex-wrap justify-between lg:justify-center gap-8 mt-[30px] lg:mt-0">
          {globalPartners.map((partner: any, index: number) => (
            <div key={index} className="flex justify-center">
              <Image
                src={partner?.logo?.data?.attributes?.url}
                alt={partner?.title}
                width={partner?.logo?.data?.attributes?.width || 150} // Default width if not available
                height={partner?.logo?.data?.attributes?.height || 45.8} // Default height if not available
                priority
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
