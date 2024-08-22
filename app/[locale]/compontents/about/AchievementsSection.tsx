import Image from "next/image";

const AchievementsSection = () => {
  return (
    <section className=" lg:px-20 lg:py-[96px] font-avenir">
      <div className="flex items-center justify-between gap-20 max-w-[1440px] m-auto">
        <div className="">
          <div className="flex">
            <div className="bg-primary min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"></div>
            <Image
              // src="/images/about/acheivement.png"
              src="/images/our-legacy.png"
              alt="Achievements Image"
              width={561}
              height={564}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className=" mt-8 md:mt-0  ">
          <div className="mb-[24px] flex">
            <div className="bg-primary min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"></div>
            <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
              Highlighting Our Success
            </span>
          </div>
          <h2 className="text-[40px] font-[800] leading-[60px] text-heading">
            <span className="text-primary"> Our Achievements</span> at a Glance
          </h2>
          <div className="grid grid-cols-2 gap-0 mt-[32px]">
            <div className="text-center py-4">
              <h4 className="text-[48px] font-[800] leading-[60px] text-primary">
                100
              </h4>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">
                Years of experience
              </p>
            </div>
            <div className="text-center py-4 border-l  border-[#D1D5DB]">
              <h4 className="text-[48px] font-[800] leading-[60px] text-primary">
                4.7
              </h4>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">
                Rating
              </p>
            </div>
            <div className="text-center py-4 border-t border-[#D1D5DB]">
              <h4 className="text-[48px] font-[800] leading-[60px] text-primary">
                +30
              </h4>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">
                Global Partners
              </p>
            </div>
            <div className="text-center py-4  border-l border-t border-[#D1D5DB] ">
              <h4 className="text-[48px] font-[800] leading-[60px] text-primary">
                +100
              </h4>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">
                Landmark Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
