import React from "react";

const CallToAction = () => {
  return (
    <div className=" my-96 lg:my-10">
      <div className=" hidden relative lg:block z-1 min-w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[254px] lg:min-h-[254px] bg-primary">
        <div className="flex justify-center ">
          <section className="hidden lg:flex absolute z-1 bottom-[-100px]  flex-col items-center p-[64px] bg-white shadow-lg mx-auto max-w-full sm:max-w-[350px] lg:max-w-[1216px]">
            <div className="">
              <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
                <div className="text-center md:text-left lg:max-w-[768px]">
                  <h2 className="text-[36px] font-[800] leading-[40px] mb-[16px]">
                    Experience the Kettaneh Difference
                  </h2>
                  <p className="text-[28px] font-[500] leading-[28px] text-paragraph">
                    Connect with us to discover how we exceed expectations and
                    foster strong relationships
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-primary text-white py-2 px-6  hover:bg-red-700 transition-all">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className=" block  lg:hidden relative  z-1 min-w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[254px] lg:min-h-[254px] bg-primary">
        <div className="flex justify-center ">
          <section className="block  lg:hidden absolute z-1 bottom-[-300px]  flex-col items-center p-[64px] bg-white shadow-lg mx-auto max-w-full sm:max-w-[350px] lg:max-w-[1216px]">
            <div className="">
              <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
                <div className="text-center md:text-left lg:max-w-[768px]">
                  <h2 className="text-[36px] font-[800] leading-[40px] mb-[16px]">
                    Experience the Kettaneh Difference
                  </h2>
                  <p className="text-[28px] font-[500] leading-[28px] text-paragraph">
                    Connect with us to discover how we exceed expectations and
                    foster strong relationships
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-primary text-white py-2 px-6  hover:bg-red-700 transition-all">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="block  lg:hidden relative min-w-full h-[400px]  md:h-[400px] lg:h-[800px]">
        <Image
          src={"/images/section-seven/8.jpg"}
          priority
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={"section seven"}
        />

        <div className="flex justify-center">
          <section className=" lg:hidden absolute z-1  rounded-3xl bottom-[-350px]  flex-col items-center p-6 bg-white shadow-lg mx-auto max-w-[400px] lg:max-w-[750px]">
            <h2 className="text-2xl font-bold text-center mb-4 text-main">
              {t("home.section-seven-location.location-section")}
            </h2>
            <div className="container mx-auto p-4">
              <ul className="pl-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  {locale === "en"
                    ? featuresEn.map((feature, index) => (
                        <li
                          key={index}
                          className="p-2 text-lg text-gray-700 flex gap-3"
                        >
                          <div className="min-h-3 h-3 min-w-3 w-3  text-main bg-main rounded-full mt-2 "></div>
                          <div>{feature}</div>
                        </li>
                      ))
                    : featuresAr.map((feature, index) => (
                        <li
                          key={index}
                          className="p-2 text-lg text-gray-700 flex gap-3"
                        >
                          <div className="min-h-3 h-3 min-w-3 w-3  text-main bg-main rounded-full mt-2 "></div>
                          <div>{feature}</div>
                        </li>
                      ))}
                  {/* ))} 
                </div>
              </ul>
            </div>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default CallToAction;
