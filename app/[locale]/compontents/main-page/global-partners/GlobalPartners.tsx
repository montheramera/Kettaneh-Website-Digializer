import Image from "next/image";

export default function GlobalPartners() {
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
        <div className="flex  items-center lg:justify-center space-y-8 space-x-8 lg:space-y-0 lg:space-x-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${index==0?"mt-[22px] lg:mt-0":""}`}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={100}
                height={30.8}
                priority
                className="w-[100px] h-[30.8px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
