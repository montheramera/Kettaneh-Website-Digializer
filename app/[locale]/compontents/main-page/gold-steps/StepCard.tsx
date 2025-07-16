import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  icon: string;
  title: string;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  icon,
  title,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-between p-3 bg-gray-50 rounded-lg min-h-[120px] 
        transform transition-all duration-500 ease-out cursor-pointer
        hover:scale-105 hover:shadow-xl hover:bg-white hover:-translate-y-2
        animate-fade-in-up opacity-0 card-hover-effect
        group
        ${className}`}
      style={{
        animationDelay: `${(stepNumber - 1) * 150}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Step Number Badge */}
      <div className="absolute top-1 right-1 w-8 h-8 bg-[#CF4149] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm z-10 animate-pulse-badge">
        {stepNumber}
      </div>

      {/* Icon */}
      <div className="flex-shrink-0 w-[70px] mb-2 mt-1 flex items-center justify-center animate-float-icon group-hover:animate-none relative z-10">
        <Image
          src={`/images/gold/${icon}.svg`}
          alt={title}
          width={120}
          height={120}
          className="object-contain h-[100px] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-gray-800 text-center leading-tight flex-grow flex items-center px-1 relative z-10 transition-colors duration-300 group-hover:text-gray-900">
        {title}
      </h4>

      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#CF4149]/5 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

export default StepCard;
