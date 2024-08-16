import Image from "next/image";

const AchievementsSection = () => {
  return (
    <section className="p-8 lg:px-20 lg:py-[32px] font-avenir">
      <div className="md:flex items-center justify-between gap-10">
        <div className="md:w-1/2">
          <div className="flex">
            <div className="bg-primary w-[2px] min-h-[100%] mr-[10px]"></div>
            <Image
              src="/images/about/acheivement.png"
              alt="Achievements Image"
              width={561}
              height={564}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="mb-[24px] flex">
            <div className="bg-primary w-[2px] min-h-[100%] mr-[4px]"></div>
            <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
              Highlighting Our Success
            </span>
          </div>
          <h2 className="text-[40px] font-[800] leading-[60px] text-heading">
            <span className="text-primary"> Our Achievements</span> at a Glance
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-[32px]">
            <div className="text-center">
              <p className="text-[48px] font-[800] leading-[60px] text-primary">100</p>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">Years of experience</p>
            </div>
            <div className="text-center">
              <p className="text-[48px] font-[800] leading-[60px] text-primary">4.7</p>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-[48px] font-[800] leading-[60px] text-primary">+30</p>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">Global Partners</p>
            </div>
            <div className="text-center">
              <p className="text-[48px] font-[800] leading-[60px] text-primary">+100</p>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">Landmark Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
