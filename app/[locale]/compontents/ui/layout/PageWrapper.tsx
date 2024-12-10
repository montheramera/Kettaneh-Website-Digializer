import Header from "@/compontents/ui/header/header";
import Footer from "@/compontents/ui/footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

const fetchFooterData = async () => {
  const res = await fetch(`${API_URL}/api/footer`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const PageWrapper: React.FC<PageWrapperProps> = async ({ children }) => {
  const data = await fetchFooterData();

  return (
    <div className="font-avenir m-auto bg-white">
      <Header data={data} />
      {children}
      <div>
        <Footer
          data={data}
        />
      </div>
    </div>
  );
};

export default PageWrapper;