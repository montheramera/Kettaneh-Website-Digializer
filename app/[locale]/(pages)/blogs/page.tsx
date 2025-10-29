import ScrollSliders from "@/compontents/categories/ScrollSliders";
import GallerySectionSkeleton from "@/compontents/ui/skeleton/GallerySectionSkeleton";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import PopularPostsSidebar from "@/compontents/blogs/PopularPostsSidebar";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { title: string, description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  try {
    // Use a separate fetch for metadata to avoid response cloning issues
    const res = await fetch(`${API_URL}/api/blog-page?populate[seo][populate]=*`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const seo = data.data?.attributes?.seo || {};
    const title = seo.meta_title || "Blogs | Kettaneh - Expert HVAC & Machinery Insights";
    const description = seo.meta_description || "Discover expert insights, tips, and industry news from our expert team.";
   
    
    return {
      title,
      description,
      keywords: "HVAC systems, machinery, air conditioning, smart maintenance, Kettaneh, Jordan, professional solutions, industry insights, technology blog",
      authors: [{ name: "Kettaneh Team" }],
      openGraph: {
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
        siteName: "Kettaneh",
        images: [
          {
            url: "/images/blog.png",
            width: 1200,
            height: 630,
            alt: "Kettaneh Blogs - Expert Insights on HVAC and Machinery",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/blog.png"],
        creator: "@Kettaneh",
        site: "@Kettaneh",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    console.log("Blog page metadata endpoint not found, using default values");

    // Return default metadata if there's an error
    return {
      title: "Blogs | Kettaneh - Expert HVAC & Machinery Insights",
      description: "Discover expert insights, tips, and industry news from Kettaneh's professional team. Your go-to resource for HVAC systems, machinery, and smart maintenance solutions in Jordan.",
      keywords: "HVAC systems, machinery, air conditioning, smart maintenance, Kettaneh, Jordan, professional solutions, industry insights, technology blog",
      authors: [{ name: "Kettaneh Team" }],
      openGraph: {
        title: "Blogs | Kettaneh - Expert HVAC & Machinery Insights",
        description: "Discover expert insights, tips, and industry news from Kettaneh's professional team. Your go-to resource for HVAC systems, machinery, and smart maintenance solutions in Jordan.",
        url: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
        siteName: "Kettaneh",
        images: [
          {
            url: "/images/blog.png",
            width: 1200,
            height: 630,
            alt: "Kettaneh Blogs - Expert Insights on HVAC and Machinery",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Blogs | Kettaneh - Expert HVAC & Machinery Insights",
        description: "Discover expert insights, tips, and industry news from Kettaneh's professional team. Your go-to resource for HVAC systems, machinery, and smart maintenance solutions in Jordan.",
        images: ["/images/blog.png"],
        creator: "@Kettaneh",
        site: "@Kettaneh",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

const fetchBlogs = async () => {
  try {
    const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    const blogs = data.data?.map((el: any) => ({
      id: el.id,
      attributes: el.attributes || el // Fallback to el if attributes doesn't exist
    })) || [];
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

const fetchBlogPage = async() => {
  try {
    const res = await fetch(`${API_URL}/api/blog-page?populate=*`, {
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

  // Generate schema markup
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs`,
    "name": "Kettaneh Jordan Blog",
    "inLanguage": "en",
    "description": "Insights on air conditioning, smart home technology, and energy-efficient solutions in Jordan.",
    "publisher": {
      "@type": "Organization",
      "name": "Kettaneh Jordan",
      "url": process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogs.slice(0, 6).map((blog: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "url": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs/${blog.attributes?.Slug || blog.id}`,
          "headline": blog.attributes?.Title || "Blog Post"
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en` },
      { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs` }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="px-5 lg:px-20 font-avenir">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-[24px] mt-[24px] flex">
              <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase">
                Kettaneh Blogs
              </span>
            </div>
            <h1 className="text-[30px] lg:text-[36px] font-[800] leading-[34px] lg:leading-[40px] text-black mb-[30px] lg:mb-[48px]">
              Your Go-To Resource for Machinery, AC Systems & Smart Maintenance
            </h1>
          </div>
        </section>

      {/* Blog Grid Section with Sidebar */}
      <section className="py-12 lg:py-16 font-avenir">
        <div className="max-w-[1440px] m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Blog Grid */}
            <div className="lg:col-span-8">
              <Suspense fallback="Loading...">
                <DynamicGallerySection blogs={blogs} />
              </Suspense>
            </div>

            {/* Sidebar - Popular Posts */}
            <div className="lg:col-span-4">
              <PopularPostsSidebar blogs={blogs} />
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
    </>
  );
};

export default page;
