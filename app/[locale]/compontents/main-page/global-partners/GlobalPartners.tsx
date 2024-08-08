import Image from "next/image";

export default function GlobalPartners() {
  const partners = [
    { name: "Haier", src: "/images/haier.png" },
    { name: "Siemens", src: "/images/siemens.png" },
    { name: "Linde", src: "/images/linde.png" },
    { name: "Delfin", src: "/images/delfin.png" },
    { name: "Atlas Copco", src: "/images/atlascopco.png" },
  ];

  return (
    <div className="lg:px-20 px-6 py-4 lg:py-[96px] font-avenir">
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <div className=" lg:min-w-[425px]">
          <h2 className="font-[800] text-[36px] text-[#101828] leading-[40px]">
            Our Global Partners
          </h2>
          <p className="font-[500] mb-8 lg:mb-0 text-[20] leading-[28px] mt-[10px] text-[#475467]">
            More than 30 global brands
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center space-y-4 lg:space-y-0 space-x-4">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              alt={partner.name}
              width={100}
              height={30.8}
              priority
              className="w-[100px] h-[30.8px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
