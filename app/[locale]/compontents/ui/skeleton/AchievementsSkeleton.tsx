// components/ui/skeleton/AchievementsSkeleton.tsx
const AchievementsSkeleton = () => {
    return (
      <section className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir">
        <div className="grid md:grid-cols-2 gap-20 max-w-[1440px] m-auto">
          {/* Right Content Section */}
          <div className="mt-8 md:mt-0">
            <div className="mb-[12px] lg:mb-[24px] flex">
              <span className="font-[800] bg-skeleton animate-pulse h-[40px] w-[250px] mb-[10px] block"></span>
            </div>
            <h2 className="text-[24px] lg:text-[30px] font-[800] bg-skeleton animate-pulse h-[30px] w-[300px] block"></h2>
            <div className="grid grid-cols-2 gap-0 mt-[32px]">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`${
                    index === 1
                      ? "border-l border-[#D1D5DB] text-center py-4"
                      : index === 2
                      ? "text-center py-4 border-t border-[#D1D5DB]"
                      : index === 3
                      ? "text-center py-4 border-l border-t border-[#D1D5DB]"
                      : "text-center py-4"
                  }`}
                >
                  <div className="bg-skeleton animate-pulse h-[60px] w-[100px] mx-auto"></div>
                  <div className="bg-skeleton animate-pulse h-[20px] w-[150px] mx-auto mt-2"></div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="flex">
            <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[300px] lg:min-h-[100%] mr-[10px]"></div>
            <div className="flex-1 bg-skeleton animate-pulse h-[300px] lg:h-[100%]"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AchievementsSkeleton;  