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

  // Responsive image sources for different screen sizes
  const getResponsiveImageSrc = () => {
    // Check if the backgroundImage is from the gold folder and has responsive variants
    if (backgroundImage.includes("gold") && backgroundImage.includes(".jpg")) {
      const basePath = "/images/gold/";
      const isArabic = backgroundImage.includes("ar");

      // Return the base image path for srcSet generation
      return isArabic ? "/images/gold-ar.jpg" : "/images/gold/Gold_Desktop.jpg";
    }

    return backgroundImage;
  };

  // Generate responsive image sources for Next.js Image component
  const getImageSources = () => {
    if (backgroundImage.includes("gold")) {
      const isArabic = backgroundImage.includes("ar");

      if (isArabic) {
        return {
          mobile: "/images/gold-ar.jpg",
          tablet: "/images/gold-ar.jpg",
          desktop: "/images/gold-ar.jpg",
          large: "/images/gold-ar.jpg",
        };
      } else {
        return {
          mobile: "/images/gold/Gold_Mobile.jpg",
          tablet: "/images/gold/Gold_Tablet.jpg",
          desktop: "/images/gold/Gold_Desktop.jpg",
          large: "/images/gold/Gold_Large.jpg",
        };
      }
    }

    return {
      mobile: backgroundImage,
      tablet: backgroundImage,
      desktop: backgroundImage,
      large: backgroundImage,
    };
  };

  const imageSources = getImageSources();

  return (
    // <div
    //   className={`relative w-full overflow-hidden ${className}`}
    //   style={{
    //     aspectRatio: "auto",
    //     minHeight: "180px",
    //   }}
    // >
    //   {/* Container with responsive height that maintains aspect ratio */}
    //   <div className="w-full h-[135px] xs:h-[200px] sm:h-[280px] md:h-[328px] lg:h-[420px] xl:h-[564px] 2xl:h-[700px]">
    //     {/* Background Image - Fully responsive with enhanced clarity */}
    //     <div className="relative w-full h-full">
    //       {/* Mobile Image */}
    //       <Image
    //         src={imageSources.mobile}
    //         alt="Promotional Background"
    //         fill
    //         className="object-cover object-center transition-all duration-300 ease-in-out block sm:hidden"
    //         priority
    //         sizes="100vw"
    //         quality={95}
    //         style={{
    //           objectFit: "fill",
    //           objectPosition: "center center",
    //         }}
    //       />

    //       {/* Tablet Image */}
    //       <Image
    //         src={imageSources.tablet}
    //         alt="Promotional Background"
    //         fill
    //         className="object-cover object-center transition-all duration-300 ease-in-out hidden sm:block md:hidden"
    //         priority
    //         sizes="100vw"
    //         quality={95}
    //         style={{
    //           objectFit: "fill",
    //           objectPosition: "center center",
    //         }}
    //       />

    //       {/* Desktop Image */}
    //       <Image
    //         src={imageSources.desktop}
    //         alt="Promotional Background"
    //         fill
    //         className="object-cover object-center transition-all duration-300 ease-in-out hidden md:block xl:hidden"
    //         priority
    //         sizes="100vw"
    //         quality={95}
    //         style={{
    //           objectFit: "fill",
    //           objectPosition: "center center",
    //         }}
    //       />

    //       {/* Large Screen Image */}
    //       <Image
    //         src={'/images/gold-offers/Camapaignbanner.jpg'}
    //         alt="Promotional Background"
    //         fill
    //         className="object-cover object-center transition-all duration-300 ease-in-out hidden xl:block"
    //         priority
    //         sizes="100vw"
    //         quality={95}
    //         style={{
    //           objectFit: "contain",
    //           objectPosition: "center center",
    //         }}
    //       />

    //       {/* Optional overlay for better content readability if needed */}
    //       <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    //     </div>
    //   </div>
    // </div>
    <div className="w-full  relative flex items-center justify-center bg-white">
      <img
        src="/images/gold-offers/Camapaignbanner.jpg"
        alt="Promotional Banner"
        className="w-full h-full object-contain"
        style={{ display: "block" }}
      />
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </div>
  );
};

export default PromotionalBanner;
