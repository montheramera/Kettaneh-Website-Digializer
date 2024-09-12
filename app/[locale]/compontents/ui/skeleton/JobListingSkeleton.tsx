// import CareerFormNew from "@/compontents/career/CareerFormNew";

export default function JobListingsSkeleton() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:gap-32">
        {/* Job Listings Skeleton */}
        <div className="w-full lg:w-1/2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="pb-6 mb-6 border-b border-[#EAECF0] animate-pulse">
              <h3 className="text-[24px] font-[800] leading-[28px] text-heading bg-gray-300 rounded-md w-[70%] h-[32px] mb-2"></h3>
              <span className="bg-skeleton rounded-full w-[150px] h-[20px] mb-4 block"></span>
              <p className="mt-[8px] text-[18px] font-[400] leading-[28px] text-paragraph bg-skeleton rounded-md w-[90%] h-[24px] mb-2"></p>
              <p className="bg-skeleton rounded-md w-[80%] h-[24px]"></p>
            </div>
          ))}
        </div>

        {/* Join Our Team Skeleton */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[36px] font-[800] leading-[40px] text-heading bg-gray-300 rounded-md w-[60%] h-[40px] mb-4 animate-pulse"></h2>
          <p className="mt-[20px] text-[20px] font-[400] leading-[28px] text-paragraph bg-skeleton rounded-md w-[80%] h-[24px] mb-2 animate-pulse"></p>
          <p className="bg-skeleton rounded-md w-[60%] h-[24px] mb-2 animate-pulse"></p>
          <p className="bg-skeleton rounded-md w-[70%] h-[24px] mb-6 animate-pulse"></p>

          {/* Simulated loading skeleton for form */}
          <div className="bg-skeleton rounded-md h-[300px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
