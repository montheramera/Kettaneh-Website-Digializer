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
      className={`relative w-full max-w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden ${className}`}
    >
      {/* Background Image - Fixed for mobile */}
      <div className="absolute inset-0 w-full max-w-full">
        <Image
          src={backgroundImage}
          alt="Promotional Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default PromotionalBanner;
