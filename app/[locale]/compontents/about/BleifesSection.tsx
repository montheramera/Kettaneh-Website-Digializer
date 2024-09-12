import Image from "next/image";
import BlocksRendererComponent from "../ui/blocs-renderer/BlockRenderer";

const BleifesSection = ({AboutData}: any) => {
  return (
    <>
    <div className="px-5  lg:px-20  font-avenir lg:overflow-hidden">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-[16px] mt-[24px] flex">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                {AboutData.title}
              </span>
            </div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              <span className="text-primary ">Who</span> we are ?
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              A Legacy of Commitment and Growth Since 1922
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-[51px]  gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            <div className="flex">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
                <div className="flex flex-col">
                {
                  AboutData.description1.map((el: any, index: number)=> (
                    <BlocksRendererComponent key={index} content={[el]}/>
                  ))
                }
                </div>
            </div>
            <div className="flex ">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[300px] lg:min-h-[100%] mr-[10px] "></div>
              <div
                className="flex-1"
                style={{
                  backgroundImage: `url(${AboutData.first_section_iamge.url})`,
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
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              <span className="text-primary ">Who</span> we are ?
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              Delivering Excellence Through Quality Brands and Unmatched
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-[51px]  gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            <div className="flex">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[300px] lg:min-h-[100%] mr-[10px] "></div>
              <div
                className="flex-1"
                style={{
                  backgroundImage: `url(${AboutData.second_section_iamge.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="flex">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              {/* {AboutData.description2.map((el: any, index:number)=>(
                <p key={index} className="">{el.text}</p>
              ))
              } */}

            <BlocksRendererComponent content={AboutData?.description2}/>
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
            {AboutData.beliefs_and_goals.slice(0,2).map((el: any, index: number)=>(
              <div className="flex" key={index}>
              <div className="bg-white min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <div className="">
                <h3 className="text-[24px] font-[600] leading-[30px]">
                  {el.title}
                </h3>
                <p className="text-[18px] font-[400] leading-[28px] mt-[8px]">
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
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 mt-[32] lg:mt-[64px]">
          {AboutData.beliefs_and_goals.slice(2,4).map((el: any, index: number)=>(
              <div className="flex" key={index}>
              <div className="bg-white min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <div className="">
                <h3 className="text-[24px] font-[600] leading-[30px]">
                  {el.title}
                </h3>
                <p className="text-[18px] font-[400] leading-[28px] mt-[8px]">
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
