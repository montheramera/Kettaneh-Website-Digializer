import Image from "next/image";

interface PromotionalBannerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  productImage?: string;
  brandLogo?: string;
  accentText?: string;
  accentNumber?: string;
  className?: string;
  isVisible?: boolean;
  locale?: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  backgroundImage = "/images/gold-ar.jpg",
  className = "",
  isVisible = true,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden ${className} group`}
    >
      {/* Background Image with Animation */}
      <div className="absolute inset-0 animate-fade-in">
        <Image
          src={backgroundImage}
          alt="Promotional Background"
          fill
          className="object-fill transition-all duration-700 ease-out group-hover:scale-105"
          priority
        />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-0 animate-overlay-fade-in"></div>

      {/* Subtle Shimmer Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-shimmer"></div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
