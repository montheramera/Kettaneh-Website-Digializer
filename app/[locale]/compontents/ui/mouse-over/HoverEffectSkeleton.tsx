const HoverEffectSkeleton = ({isFull}: any) => {
    return (
      <div className="hidden lg:flex container1 font-avenir justify-between overflow-hidden">
        {Array(6).fill(0).map((_, index) => (
            index === 0 ? <CustomeBanner key={index} isFull={isFull} /> : <div
            key={index}
            className={`section overflow-hidden max-w-[100px] transition-all duration-2000 animate-pulse`}
          >
            <div className={`relative h-[${isFull ? '400px' : '270px'}] w-full font-avenir`}>
              {/* Image Skeleton */}
              <div className="bg-skeleton h-full w-full" />
              {/* Overlay Skeleton */}
              <div
                className={`absolute inset-0 bg-opacity-50 bg-skeleton flex justify-end p-1 flex-col`}
              >
                <div
                  className={`max-w-[270px] max-h-[270px] w-[270px] h-[270px] flex items-center`}
                >
                  <span className="text-gray-400 bg-skeleton text-lg font-bold h-4 w-20 rounded"></span>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    );
  };
  
  function CustomeBanner({isFull}: any) {
    return (
      <div className="section overflow-hidden max-w-[850px] transition-all duration-2000">
        <div className={`relative h-[${isFull ? '400px' : '270px'}] w-full font-avenir`}>
          {/* Pulse Skeleton */}
          <div className="animate-pulse w-full h-full bg-skeleton">
            <div className="p-10">
              <div className="h-[40px] w-[60%] bg-gray-400 mb-4"></div>
              <div className="h-[20px] w-[40%] bg-gray-400 mb-2"></div>
              <div className="h-[20px] w-[50%] bg-gray-400 mb-4"></div>
              <div className="h-[20px] w-[30%] bg-gray-400"></div>
            </div>
          </div>
  
          {/* Static Banner Content */}
          <div className="absolute inset-0 bg-opacity-50 bg-primary flex justify-end p-10 flex-col transition-all duration-[2000ms]">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-[30px] leading-[32px] font-[800] text-start bg-gray-400 w-[60%] h-[40px]"></h2>
                <p className="text-[18px] leading-[28px] font-[500] my-[16px] text-start max-w-[500px] bg-gray-400 h-[20px] w-[80%]"></p>
              </div>
              <button className="text-[16px] leading-[28px] font-[500] text-start bg-gray-400 h-[20px] w-[30%]"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default HoverEffectSkeleton;  