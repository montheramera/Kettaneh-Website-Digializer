import Header from "@/compontents/ui/header/header";
import Footer from "@/compontents/ui/footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

// Function to fetch footer data
const fetchFooterData = async () => {
  const res = await fetch(`${API_URL}/api/footer`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data.attributes;
};

// Function to check if a specific page exists
const checkPageExists = async (path: string) => {
  try {
    const response = await fetch(`${API_URL}/api${path}`, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Function to get page existence flags
const getPageExistenceFlags = async () => {
  const [hasPrivacyPolicy, hasTermsAndConditions, hasCookiesPolicy] =
    await Promise.all([
      checkPageExists("/privacy-policy"),
      checkPageExists("/terms-and-condition"),
      checkPageExists("/cookies-policy"),
    ]);

  return {
    hasPrivacyPolicy,
    hasTermsAndConditions,
    hasCookiesPolicy,
  };
};

// Server Component to fetch all necessary data
async function PageWrapperData() {
  const footerData = await fetchFooterData();
  const pageExistenceFlags = await getPageExistenceFlags();

  return { footerData, pageExistenceFlags };
}

const PageWrapper: React.FC<PageWrapperProps> = async ({ children }) => {
  const { footerData, pageExistenceFlags } = await PageWrapperData();

  return (
    <div className="font-avenir m-auto bg-white">
      <Header />
      {children}
      <div>
        <Footer
          data={footerData}
          {...pageExistenceFlags}
        />
      </div>
    </div>
  );
};

export default PageWrapper;