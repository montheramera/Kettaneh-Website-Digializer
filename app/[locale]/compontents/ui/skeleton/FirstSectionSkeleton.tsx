// components/ui/skeleton/FirstSectionSkeleton.tsx
const FirstSectionSkeleton = () => {
    return (
      <div className="font-avenir px-5 lg:px-20">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="flex my-[24px]">
              <div className="min-w-[5px] w-[5px] min-h-[100%] mr-[10px] bg-skeleton animate-pulse"></div>
              <span className="text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase bg-skeleton animate-pulse w-[120px] h-[30px] block"></span>
            </div>
          </div>
          <div className="flex px-10 relative flex-col lg:flex-row inset-0 bg-paragraph bg-opacity-50 text-[18px] font-[400] leading-[28px] text-paragraph min-h-[300px]">
            <div className="absolute inset-0 bg-paragraph bg-opacity-70"></div>
            <div className="max-w-[1440px] text-white w-full m-auto z-[100]">
              <h2 className="text-[36px] font-[800] leading-[40px] mt-[30px] mb-[32px] bg-skeleton animate-pulse h-[40px] w-[300px] block"></h2>
              <div className="flex">
                <div className="min-w-[5px] w-[5px] min-h-[100%] mr-[10px] bg-skeleton animate-pulse"></div>
                <p className="lg:max-w-[536px] bg-skeleton animate-pulse h-[60px] w-[300px] block"></p>
              </div>
              <div className="flex items-center border border-[#E5E7EB] max-w-[280px] my-[32px] rounded-md p-3 bg-white">
                <span className="inline-block h-3 w-3 rounded-full bg-skeleton mr-2"></span>
                <p className="text-heading text-[16px] leading-[20px] font-[500] bg-skeleton animate-pulse h-[20px] w-[180px] block"></p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap max-w-[1420px] m-auto gap-5 lg:gap-10 mt-10">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-[100px] h-[100px] bg-skeleton animate-pulse rounded-md"></div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default FirstSectionSkeleton;
  