export interface PromotionalBannerData {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    accentText: string;
    accentNumber: string;
    isVisible: boolean;
    backgroundImage: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    productImage: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    brandLogo: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    locale: string;
    localizations?: {
      data: PromotionalBannerData[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface PromotionalBannerResponse {
  data: PromotionalBannerData;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PromotionalBannerProps {
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
}
