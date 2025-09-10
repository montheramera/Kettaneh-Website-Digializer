import PromotionalBanner from "@/compontents/main-page/promotional-banner/PromotionalBanner";
import { getPromotionalBannerByLocale } from "@/config/promotional-banners";
import GoldSteps from "@/compontents/main-page/gold-steps/GoldSteps";
import TermsSection from "@/compontents/main-page/gold-steps/TermsSection";
import GoldFormSection from "@/compontents/main-page/gold-steps/GoldFormSection";
import type { Locale } from "@/compontents/main-page/gold-steps/types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { locale: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/main?populate[seo][populate]=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    const title = seo.meta_title || "Default Title";
    const description = seo.meta_description || "Default Description";
    const favicon = "/images/logo.png";
    const url = seo.link || "https://example.com";
    // const siteName = seo.site_name || 'Your Site Name'
    // const locale = seo.locale || 'en_US'
    // const type = seo.type || 'website'
    // const twitterHandle = seo.twitter_handle || '@yourtwitterhandle'

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    // Return default metadata if there's an error
    return {
      title: "Default Title",
      description: "Default Description",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en`,
      },
    };
  }
}

export default async function GoldPage({
  params,
}: {
  params: { locale: string };
}) {
  // Get promotional banner configuration based on locale
  const promotionalBannerConfig = getPromotionalBannerByLocale(params.locale);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Promotional Banner Section */}
      {promotionalBannerConfig && promotionalBannerConfig.isVisible && (
        <PromotionalBanner {...promotionalBannerConfig} />
      )}

      {/* Gold Steps Section */}
      {/* here */}
      <GoldSteps locale={params.locale as Locale} />

      {/* Terms and Conditions Section */}
      <TermsSection locale={params.locale} />

      {/* Gold Form Section */}
      <GoldFormSection locale={params.locale} />
    </main>
  );
}
