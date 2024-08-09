

import Image from 'next/image';

export default function ExperienceBanner() {
  return (
    <div className="relative h-[308px] w-full font-avenir">
      {/* Background Image */}
      <Image
        src="/images/experence-banner.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
              className="z-0"
              priority
      />

      {/* Content Layer */}
      <div className="absolute inset-0 bg-paragraph bg-opacity-50 flex items-center flex-col lg:flex-row py-[8px] justify-between px-8 lg:px-20 lg:py-[96px] ">
        <div>
          <h1 className="text-white font-[800] text-[36px] leading-[40px]">
            Experience the Kettaneh Difference
          </h1>
          <p className="text-white mx-h-[768px] font-[500] text-[20px] leading-[28px] mt-[10px]">
            Connect with us to discover how we exceed expectations and foster
            strong <br />relationships
          </p>
        </div>
        <button className="bg-primary  text-white px-4 py-2">
          Get In Touch
        </button>
      </div>
    </div>
  );
}