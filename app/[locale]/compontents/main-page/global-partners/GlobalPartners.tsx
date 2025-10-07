import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchGlobalPartners = async () => {
  try {
    const res = await fetch(`${API_URL}/api/partners?populate=Partner.logo`
        , {
        method: "GET",
        headers: {
          "Cache-Control": "no-store", // Specify cache control header
        },
      }
    );
    const data = await res.json();
    const GlobalPartners = data.data.map((el: any) => el.attributes.Partner).filter((el: any) => el.promated_to_front_page);
  
    return GlobalPartners;
    
  } catch(error) {
    return []
  }
}

export default async function GlobalPartners() {
  const globalPartners = await fetchGlobalPartners();

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
        <div className="flex flex-wrap justify-between lg:justify-center gap-8 mt-[30px] lg:mt-0">
          {globalPartners.length > 0 ? (
            globalPartners.map((partner: any, index: number) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={partner?.logo?.data?.attributes?.url}
                  alt={partner?.logo?.data?.attributes?.alternativeText || partner?.title}
                  width={partner?.logo?.data?.attributes?.width || 150}
                  height={partner?.logo?.data?.attributes?.height || 45.8}
                  priority
                  className="object-contain"
                />
              </div>
            ))
          ) : (
            <p>No partners available at the moment</p>
          )}
        </div>
      </div>
    </div>
  );
}
