import ScrollSliders from "@/compontents/categories/ScrollSliders";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string, description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/blog-page?populate[seo][populate]=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    const title = seo.meta_title || "Blogs";
    const description = seo.meta_description || "Discover insights, tips, and industry news from our expert team.";
   
    
    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
      },
    };
  } catch (error) {
    console.log("Blog page metadata endpoint not found, using default values");

    // Return default metadata if there's an error
    return {
      title: "Blogs",
      description: "Discover insights, tips, and industry news from our expert team.",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
      },
    };
  }
}

const fetchBlogs = async () => {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data.data?.map((el: any) => ({
    id: el.id,
    attributes: el.attributes || el // Fallback to el if attributes doesn't exist
  })) || [];
  return blogs;
};

const fetchBlogPage = async() => {
  try {
    const res = await fetch(`${API_URL}/api/blog-page`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.data?.attributes || {
      title: "Blogs",
      description: "Discover insights, tips, and industry news from our expert team."
    };
  } catch (error) {
    console.log('Blog page endpoint not found, using default values');
    return {
      title: "Blogs",
      description: "Discover insights, tips, and industry news from our expert team."
    };
  }
}

const page = async () => {
  const blogs = await fetchBlogs();
  const blogPage = await fetchBlogPage();

  const DynamicGallerySection = dynamic(
    () => import("@/compontents/blogs/GallerySection"),
    {
      ssr: false,
      loading: () => <GallerySectionSkeleton />,
    }
  );

  return (
    <>
      {/* Breadcrumbs */}
      <div className="px-5 lg:px-20 py-2 bg-white">
        <div className="max-w-[1440px] m-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/en" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-800">Blogs</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-5 lg:px-20 pt-4 pb-16 lg:pb-24 font-avenir">
        <div className="max-w-[1440px] m-auto">
          <section className="bg-gray-800 py-16 lg:py-24 relative overflow-hidden rounded-lg">
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
               style={{
                 backgroundImage: "url('/images/blog.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat"
               }}
             ></div>
             
             {/* Overlay for better text readability */}
             <div className="absolute inset-0 bg-black/50"></div>
             
             {/* Decorative Elements */}
             <div className="absolute inset-0">
               <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
               <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
               <div className="absolute bottom-20 right-32 w-12 h-12 border border-white/20 rounded-full"></div>
             </div>
             
             <div className="px-5 lg:px-20 relative z-10">
               <div className="text-center">
                 <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                   Kettaneh <span className="relative">
                     Blogs
                     <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></div>
                   </span>
                 </h1>
                 <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                   Your Go-To Resource for Machinery, AC Systems & Smart Maintenance
                 </p>
               </div>
             </div>
          </section>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="px-5 lg:px-20 py-12 lg:py-16 font-avenir">
        <div className="max-w-[1440px] m-auto">
          <Suspense fallback="Loading...">
            <DynamicGallerySection blogs={blogs} />
          </Suspense>
        </div>
      </div>

      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
    </>
  );
};

export default page;
