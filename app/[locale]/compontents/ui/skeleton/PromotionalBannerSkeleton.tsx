const PromotionalBannerSkeleton: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 animate-pulse overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-200" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Side - Text Content Skeleton */}
          <div className="space-y-6">
            {/* Title skeleton */}
            <div className="space-y-3">
              <div className="h-12 md:h-16 lg:h-20 bg-gray-300 rounded-lg w-3/4" />
              <div className="h-8 md:h-10 bg-gray-300 rounded-lg w-1/2" />
            </div>

            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-300 rounded w-full max-w-md" />
              <div className="h-6 bg-gray-300 rounded w-4/5 max-w-md" />
            </div>

            {/* Button skeleton */}
            <div className="pt-4">
              <div className="h-12 bg-gray-300 rounded-lg w-40" />
            </div>
          </div>

          {/* Right Side - Visual Content Skeleton */}
          <div className="relative flex items-center justify-center">
            {/* Main image skeleton */}
            <div className="w-[300px] h-[300px] bg-gray-300 rounded-full" />

            {/* Brand logo skeleton */}
            <div className="absolute top-4 right-4 w-[120px] h-[60px] bg-gray-300 rounded" />

            {/* Accent box skeleton */}
            <div className="absolute bottom-8 right-8 w-32 h-20 bg-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Bottom logo skeleton */}
      <div className="absolute bottom-4 left-4 w-20 h-10 bg-gray-300 rounded" />
    </div>
  );
};

export default PromotionalBannerSkeleton;
