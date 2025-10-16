import Image from "next/image";

const AchievementsSection = ({achivements, image}: any) => {
  return (
    <section className=" px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir">
      <div className="grid md:grid-cols-2 gap-20 max-w-[1440px] m-auto">
        {/* Right Content Section */}
        <div className=" mt-8 md:mt-0  ">
          <div className="mb-[12px] lg:mb-[24px] flex">
            <span className="font-[800]  text-heading  mb-[10px] text-[30px] lg:text-[36px] lg:leading-[40px] ">
              Highlighting Our <span className="text-primary">Success</span>
            </span>
          </div>
          <h2 className="text-[24px] lg:text-[30px] font-[800] lg:leading-[60px] text-heading">
            <span className=""> Our Achievements</span> at a Glance
          </h2>
          <div className="grid grid-cols-2 gap-0 mt-[32px]">
            {achivements.map((el: any, index: number)=>(
              <div className={index == 1 ? "border-l  border-[#D1D5DB] text-center py-4": index == 2 ? "text-center py-4 border-t border-[#D1D5DB]": index == 3 ? "text-center py-4  border-l border-t border-[#D1D5DB]" :"text-center py-4"} key={index}>
              <h4 className="text-[48px] font-[800] leading-[60px] text-primary">
                {el.number}
              </h4>
              <p className="text-[18px] text-paragraph font-[500] leading-[28px]">
                {el.title}
              </p>
            </div>
            ))}
            {/* <div className="text-center py-4">
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
            </div> */}
          </div>
        </div>

        <div className="flex">
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
