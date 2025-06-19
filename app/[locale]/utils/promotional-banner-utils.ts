import {
  PromotionalBannerData,
  PromotionalBannerProps,
} from "../types/promotional-banner";

export const formatPromotionalBannerData = (
  data: PromotionalBannerData | null,
  locale: string = "en"
): PromotionalBannerProps | null => {
  if (!data) return null;

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "";

  // Check if there's a localized version for the current locale
  const localizedData = data.attributes.localizations?.data?.find(
    (localization) => localization.attributes.locale === locale
  );

  // Use localized data if available, otherwise use the default data
  const currentData = localizedData
    ? localizedData.attributes
    : data.attributes;

  return {
    title: currentData.title,
    subtitle: currentData.subtitle,
    description: currentData.description,
    buttonText: currentData.buttonText,
    buttonLink: currentData.buttonLink,
    accentText: currentData.accentText,
    accentNumber: currentData.accentNumber,
    backgroundImage: currentData.backgroundImage?.data
      ? `${baseUrl}${currentData.backgroundImage.data.attributes.url}`
      : "/images/gold-en.jpg",
    productImage: currentData.productImage?.data
      ? `${baseUrl}${currentData.productImage.data.attributes.url}`
      : "/images/gold-medal.png",
    brandLogo: currentData.brandLogo?.data
      ? `${baseUrl}${currentData.brandLogo.data.attributes.url}`
      : "/images/midea-logo.png",
    isVisible: currentData.isVisible,
  };
};

export const getPromotionalBannerTranslationKeys = () => {
  return {
    title: "promotional.title",
    subtitle: "promotional.subtitle",
    description: "promotional.description",
    buttonText: "promotional.buttonText",
    accentText: "promotional.accentText",
  };
};

export const validatePromotionalBannerData = (
  data: any
): data is PromotionalBannerData => {
  return (
    data &&
    data.attributes &&
    typeof data.attributes.title === "string" &&
    typeof data.attributes.description === "string" &&
    typeof data.attributes.buttonText === "string" &&
    typeof data.attributes.buttonLink === "string" &&
    typeof data.attributes.isVisible === "boolean"
  );
};
