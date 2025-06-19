export interface PromotionalBannerConfig {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  accentText: string;
  accentNumber: string;
  backgroundImage: string;
  productImage: string;
  brandLogo: string;
  isVisible: boolean;
  startDate?: string;
  endDate?: string;
  locale?: string;
}

// Define promotional banners for different campaigns
export const promotionalBanners: Record<string, PromotionalBannerConfig> = {
  // Midea Gold Campaign
  midea_gold_en: {
    id: "midea_gold_en",
    title: "WIN THE GOLD",
    subtitle: "",
    description: "Buy Midea Air Conditioner For a Chance to Win Prizes",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
    accentText: "Gold Gifts Every",
    accentNumber: "7",
    backgroundImage: "/images/gold-ar.jpg",
    productImage: "/images/gold-medal.png",
    brandLogo: "/images/midea-logo.png",
    isVisible: true,
    locale: "en",
  },

  // Arabic version
  midea_gold_ar: {
    id: "midea_gold_ar",
    title: "اربح الذهب",
    subtitle: "",
    description: "اشتري مكيف هواء ميديا للحصول على فرصة للفوز بجوائز",
    buttonText: "تواصل معنا",
    buttonLink: "/ar/contact",
    accentText: "هدايا ذهبية كل",
    accentNumber: "7",
    backgroundImage: "/images/gold-ar.jpg",
    productImage: "/images/gold-medal.png",
    brandLogo: "/images/midea-logo.png",
    isVisible: true,
    locale: "ar",
  },

  // You can add more promotional banners here for different campaigns
  // siemens_campaign_en: {
  //   id: "siemens_campaign_en",
  //   title: "SIEMENS EXCELLENCE",
  //   description: "Discover premium Siemens products with special offers",
  //   ...
  // },
};

// Utility functions
export const getPromotionalBanner = (
  bannerId: string
): PromotionalBannerConfig | null => {
  return promotionalBanners[bannerId] || null;
};

export const getPromotionalBannerByLocale = (
  locale: string
): PromotionalBannerConfig | null => {
  const banner = Object.values(promotionalBanners).find(
    (banner) => banner.locale === locale && banner.isVisible
  );
  return banner || null;
};

export const getActivePromotionalBanners = (): PromotionalBannerConfig[] => {
  const now = new Date();
  return Object.values(promotionalBanners).filter((banner) => {
    if (!banner.isVisible) return false;

    if (banner.startDate && new Date(banner.startDate) > now) return false;
    if (banner.endDate && new Date(banner.endDate) < now) return false;

    return true;
  });
};

// Default configuration for fallback
export const defaultPromotionalBanner: PromotionalBannerConfig = {
  id: "default",
  title: "Special Offer",
  description: "Check out our latest promotions and deals",
  buttonText: "Learn More",
  buttonLink: "/offers",
  accentText: "Special Deals",
  accentNumber: "24/7",
  backgroundImage: "/images/default-promo-bg.jpg",
  productImage: "/images/default-product.png",
  brandLogo: "/images/logo.png",
  isVisible: false,
};
