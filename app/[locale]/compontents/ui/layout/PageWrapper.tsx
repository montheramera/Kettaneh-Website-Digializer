import React from "react";
import Header from "@/compontents/ui/header/header";
import Footer from "@/compontents/ui/footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

// Fetch footer data
const fetchFooterData = async () => {
  const res = await fetch(`${API_URL}/api/footer`, {
    cache: "no-store",
  });
  const data = await res.json();
  const footer = data.data.attributes;
  return footer;
};

// Check if a specific page exists
const checkPageExists = async (path: string) => {
  try {
    const response = await fetch(`${API_URL}/api${path}`, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

const PageWrapper: React.FC<PageWrapperProps> = async ({ children }) => {
  // Fetch footer data
  const footerData = await fetchFooterData();

  // Check for specific pages
  const [hasPrivacyPolicy, hasTermsAndConditions, hasCookiesPolicy] =
    await Promise.all([
      checkPageExists("/privacy-policy"),
      checkPageExists("/terms-and-condition"),
      checkPageExists("/cookies-policy"),
    ]);

  return (
    <div className="font-avenir m-auto bg-white">
      <Header />
      {children}
      <div>
        <Footer
          data={footerData}
          hasPrivacyPolicy={hasPrivacyPolicy}
          hasTermsAndConditions={hasTermsAndConditions}
          hasCookiesPolicy={hasCookiesPolicy}
        />
      </div>
    </div>
  );
};

export default PageWrapper;