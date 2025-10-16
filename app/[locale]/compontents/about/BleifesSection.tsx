import Image from "next/image";
import BlocksRendererComponent from "../ui/blocs-renderer/BlockRenderer";

const BleifesSection = ({ AboutData }: any) => {
  return (
    <>
      <div className="px-5  lg:px-20  font-avenir lg:overflow-hidden">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-[16px] mt-[24px] flex">
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                {AboutData?.title}
              </span>
            </div>
            <h1 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              About Kettaneh Jordan: Delivering Engineering Excellence
            </h1>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              A Legacy of Commitment and Growth Since 1922
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-[51px]  gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            <div className="flex">
              <div className="flex flex-col">
                {
                  AboutData?.description1.map((el: any, index: number) => (
                    <BlocksRendererComponent key={index} content={[el]} />
                  ))
                }
              </div>
            </div>
            <div className="flex ">
              <div
                className="flex-1"
                style={{
                  backgroundImage: `url(${AboutData?.first_section_image.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] m-auto lg:my-[96px]">
          <div>
            <div className="mb-[16px] mt-[24px] flex"></div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-primary mb-[10px]">
              Who we are ?
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              Delivering Excellence Through Quality Brands and Unmatched
            </p>
            <div className="bg-primary w-[80px] h-[4px] mt-[16px]"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 mt-[51px] gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            {/* Left Column */}
            <div className="space-y-10">
              {/* We are our Past */}
              <div>
              
                <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/about1.jpg"
                    alt="Our Past - Company History"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden mt-[16px]">
                  <Image
                    src="/images/about/about2.jpg"
                    alt="Our Future - Innovation and Growth"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* We are our Future */}
              <div>
             
                <h3 className="text-[24px] font-[600] leading-[30px] text-heading mb-[16px]">
                  We are our Future
                </h3>
                <p className="mb-[20px]">
                  As we look ahead, we are committed to embracing innovation and sustainable practices. Our vision extends beyond business success to include meaningful contributions to research and development, community engagement, and environmental stewardship. We are building a future where technology and human values work hand in hand.
                </p>
               
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* We are our Present */}
              <div>
              <h3 className="text-[24px] font-[600] leading-[30px] text-heading mb-[16px]">
                  We are our Past
                </h3>
                <p className="mb-[20px]">
                  Our journey began in 1922 as a small family business in Lebanon, founded on the principles of integrity, quality, and customer satisfaction. Over the decades, we have grown from a modest trading company into a leading engineering solutions provider, building strong relationships with global partners and establishing ourselves as a trusted name in the industry.
                </p>
                <h3 className="text-[24px] font-[600] leading-[30px] text-heading mb-[16px]">
                  We are our Present
                </h3>
                <p className="mb-[50px]">
                  Today, we stand as a dynamic team of specialized engineers, skilled technicians, dedicated logistics professionals, and quality assurance experts. Our diverse workforce brings together decades of experience and fresh perspectives, creating a collaborative environment where innovation thrives and excellence is the standard.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/about/about3.jpg"
                      alt="Our Present - Modern Building"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/images/about/about4.jpg"
                      alt="Our Present - Office Interior"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <p className="mt-[20px]">
                  We actively collaborate with educational institutions and industry leaders to motivate and educate the next generation of engineers, ensuring that our legacy of excellence continues to grow and evolve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-primary text-white px-5 py-4 mt-[30px] lg:px-20 lg:pt-[96px] font-avenir">
        <div className="max-w-[1440px] m-auto">
          <h2 className="text-[36px] font-[800] leading-[40px]  mb-[10px]">
            Where are we heading to?
          </h2>
          <p className=" text-[20px] font-[500] leading-[28px] ">
            Charting the Future with Innovation and Integrity
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[64px]">
            {AboutData?.beliefs_and_goals.slice(0, 2).map((el: any, index: number) => (
              <div className="flex w-full" key={index}>
                <div className="bg-white min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <div className="">
                  <h3 className="text-[24px] font-[600] leading-[30px]">
                    {el.title}
                  </h3>
                  <p className="text-[18px] font-[400] leading-[28px] mt-[8px] text-justify">
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary text-white px-5 py-4 lg:px-20 lg:pt-[1px] lg:pb-[96px] font-avenir">
        <div className="max-w-[1440px] m-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[32] lg:mt-[64px]">
            {AboutData?.beliefs_and_goals.slice(2, 4).map((el: any, index: number) => (
              <div className="flex w-full" key={index}>
                <div className="bg-white min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <div className="">
                  <h3 className="text-[24px] font-[600] leading-[30px]">
                    {el.title}
                  </h3>
                  <p className="text-[18px] font-[400] leading-[28px] mt-[8px] text-justify">
                    {el.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BleifesSection;
