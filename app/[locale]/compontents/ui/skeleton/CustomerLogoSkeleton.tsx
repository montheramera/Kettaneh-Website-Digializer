export default function CustomerLogoSkeleton() {
    return (
      <div className="mt-[64px] mb-[32px] max-w-[1440px] m-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 items-center">
          {[...Array(21)].map((_, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} lg:justify-center items-center animate-pulse`}
            >
              <div className="w-[100px] h-[100px] bg-skeleton"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }