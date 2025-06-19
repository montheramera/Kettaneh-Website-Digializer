import React, { useEffect, useState } from "react";
import Header from "@/compontents/ui/header/header";
import Footer from "@/compontents/ui/footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/footer`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch footer data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <div className="font-avenir m-auto bg-white w-full overflow-x-hidden">
      <Header data={data} />
      {children}
      <div>
        <Footer data={data} />
      </div>
    </div>
  );
};

export default PageWrapper;
