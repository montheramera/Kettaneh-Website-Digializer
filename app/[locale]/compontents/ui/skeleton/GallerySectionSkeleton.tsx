import Image from "next/image";

export default function GallerySectionSkeleton() {
  return (
    <div className="font-avenir">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-skeleton shadow-md rounded-md overflow-hidden animate-pulse"
          >
            {/* Skeleton for Image */}
            <div className="w-full h-[176px] bg-skeletion"></div>
            <div className="p-2">
              {/* Skeleton for Title */}
              <div className="bg-paragraph h-[24px] w-[70%] rounded-md mb-2"></div>
              {/* Skeleton for Date */}
              <div className="bg-paragraph h-[20px] w-[50%] rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
