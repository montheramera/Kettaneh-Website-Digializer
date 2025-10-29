/* eslint-disable react/no-unescaped-entities */
import ScrollSliders from "@/compontents/categories/ScrollSliders";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlocksRendererComponent from "@/compontents/ui/blocs-renderer/BlockRenderer";
// import SocialShareButtons from "@/compontents/blogs/SocialShareButtons";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Helper function to extract plain text from description (handles strings, objects, arrays)
const extractPlainText = (description: any, maxLength: number = 160): string => {
  if (!description) return '';
  
  // If it's already a string, return it (truncated if needed)
  if (typeof description === 'string') {
    return description.length > maxLength 
      ? description.substring(0, maxLength).trim() + '...' 
      : description.trim();
  }
  
  // If it's an array, try to extract text from each item
  if (Array.isArray(description)) {
    const textParts = description
      .map((item: any) => {
        if (typeof item === 'string') return item;
        if (item?.text) return item.text;
        if (item?.children) {
          return Array.isArray(item.children)
            ? item.children.map((child: any) => 
                typeof child === 'string' ? child : child?.text || ''
              ).join(' ')
            : '';
        }
        return '';
      })
      .filter((text: string) => text.length > 0);
    
    const fullText = textParts.join(' ').trim();
    return fullText.length > maxLength 
      ? fullText.substring(0, maxLength).trim() + '...' 
      : fullText;
  }
  
  // If it's an object, try to extract text from common fields
  if (typeof description === 'object') {
    // Try common Strapi rich text fields
    if (description.text) return extractPlainText(description.text, maxLength);
    if (description.children) return extractPlainText(description.children, maxLength);
    if (description.content) return extractPlainText(description.content, maxLength);
    
    // Try to stringify and extract
    try {
      const stringified = JSON.stringify(description);
      // Remove JSON syntax and extract actual text
      const textOnly = stringified
        .replace(/[{}"\[\]]/g, ' ')
        .replace(/[,:]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return textOnly.length > maxLength 
        ? textOnly.substring(0, maxLength).trim() + '...' 
        : textOnly;
    } catch (e) {
      return '';
    }
  }
  
  return '';
};

export async function generateMetadata({ params }: Props) {
  try {
    // Use the same robust approach as fetchBlog - fetch all and find matching slug
    const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    
    // Search for the specific blog by slug (same approach as fetchBlog)
    let blogData = null;
    if (data.data && data.data.length > 0) {
      blogData = data.data.find((blog: any) => 
        blog.attributes?.Slug === params.slug || 
        blog.attributes?.slug === params.slug ||
        blog.Slug === params.slug ||
        blog.slug === params.slug
      );
    }
    
    const blog = blogData?.attributes || blogData;
    
    if (!blog) {
      return {
        title: "Blog Not Found | Kettaneh",
        description: "The requested blog post could not be found. Explore our latest insights on machinery, HVAC systems, and smart maintenance.",
      };
    }

    // Create SEO-optimized title - use blog title directly, or meta_title if available
    // Ensure title is always a string (handle cases where it might be an object)
    const rawTitle = typeof blog.meta_title === 'string' ? blog.meta_title : 
                     typeof blog.Title === 'string' ? blog.Title : 
                     extractPlainText(blog.meta_title || blog.Title, 60).trim();
    const seoTitle = rawTitle ? `${rawTitle} | Kettaneh` : "Blog Post | Kettaneh";
    
    // Create comprehensive meta description - use meta_description if available, otherwise use Description
    // Extract plain text to handle cases where description might be an object/array
    const rawDescription = blog.meta_description || blog.Description;
    const extractedDescription = extractPlainText(rawDescription, 160);
    const metaDescription = extractedDescription || `Read our latest insights on ${blog.Title || 'machinery, HVAC systems, and smart maintenance'} from Kettaneh, Jordan's trusted partner for over 50 years.`;
   
    // Extract primary keyword from title (first 2-3 words typically)
    const titleWords = (blog.Title || "Blog Post").split(' ');
    const primaryKeyword = titleWords.slice(0, 2).join(' ');

    return {
      title: seoTitle,
      description: metaDescription,
      keywords: `${primaryKeyword}, HVAC systems, machinery, air conditioning, smart maintenance, Kettaneh, Jordan, professional solutions`,
      authors: [{ name: "Kettaneh Team" }],
      openGraph: {
        title: seoTitle,
        description: metaDescription,
        url: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs/${params.slug}`,
        siteName: "Kettaneh",
        images: [
          {
            url: blog.image?.data?.attributes?.url || "/images/blog.png",
            width: 1200,
            height: 630,
            alt: blog.image?.data?.attributes?.alternativeText || `${blog.Title} - Kettaneh Blog`,
          },
        ],
        locale: "en_US",
        type: "article",
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt || blog.publishedAt,
        authors: ["Kettaneh Team"],
        section: "Technology & Innovation",
        tags: [primaryKeyword, "HVAC", "Machinery", "Smart Maintenance"],
      },
      twitter: {
        card: "summary_large_image",
        title: seoTitle,
        description: metaDescription,
        images: [blog.image?.data?.attributes?.url || "/images/blog.png"],
        creator: "@Kettaneh",
        site: "@Kettaneh",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs/${params.slug}`,
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
    console.error("Error fetching metadata:", error);

    return {
      title: "Blog Post | Kettaneh - Expert Solutions",
      description: "Read our latest blog post about machinery, HVAC systems, and smart maintenance solutions from Kettaneh, Jordan's trusted partner.",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs/${params.slug}`,
      },
    };
  }
}

const fetchBlog = async (slug: string) => {
  try {
    // Fetch all blogs since Strapi filter isn't working properly
    const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    
    // Search for the specific blog by slug
    let blogData = null;
    if (data.data && data.data.length > 0) {
      blogData = data.data.find((blog: any) => 
        blog.attributes?.Slug === slug || 
        blog.attributes?.slug === slug ||
        blog.Slug === slug ||
        blog.slug === slug
      );
    }
    
    if (!blogData) {
      return null;
    }
    
    return {
      id: blogData.id,
      ...blogData.attributes
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
};


const page = async ({ params }: Props) => {
  // Fetch both blog and related articles in parallel to avoid Response.clone issues
  const [blog, relatedArticles] = await Promise.all([
    fetchBlog(params.slug),
    fetch(`${API_URL}/api/blogs?filters[slug][$ne]=${params.slug}&populate=*&pagination[limit]=4`, {
      cache: "no-store",
    }).then(res => res.json()).then(data => 
      data.data?.map((el: any) => ({
        id: el.id,
        attributes: el.attributes || el
      })) || []
    ).catch(() => [])
  ]);

  if (!blog) {
    notFound();
  }

  // Filter out the current blog by ID as well
  const filteredRelatedArticles = relatedArticles.filter((article: any) => article.id !== blog.id);

  // Generate BlogPosting schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs/${params.slug}`
    },
    "url": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs/${params.slug}`,
    "inLanguage": "en",
    "headline": blog.Title,
    "description": blog.Description,
    "image": blog.image?.data?.attributes?.url || "/images/blog.png",
    "datePublished": blog.publishedAt,
    "dateModified": blog.updatedAt || blog.publishedAt,
    "timeRequired": "PT5M",
    "articleSection": "Technology & Innovation",
    "author": {
      "@type": "Organization",
      "name": "Kettaneh Jordan",
      "url": process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kettaneh Jordan",
      "url": process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo',
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/images/LOGO_White%20on%20Grey_ADJUSTED.svg`
      }
    },
    "isAccessibleForFree": true,
    "keywords": "HVAC systems, machinery, air conditioning, smart maintenance, Kettaneh, Jordan"
  };

  // Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs/${params.slug}#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose Kettaneh for your air conditioning and machinery needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kettaneh has been Jordan's trusted partner for over 50 years, providing professional-grade solutions with comprehensive customer support and warranty coverage. Our expert team ensures proper installation and maintenance for optimal performance."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty coverage do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our products come with manufacturer warranties, and we provide additional support through our service excellence programs. Our team ensures proper installation and offers ongoing maintenance support."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get professional installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact our expert team for professional installation services. We provide comprehensive support from consultation to installation and ongoing maintenance."
        }
      }
    ]
  };

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en` },
      { "@type": "ListItem", "position": 2, "name": "Blogs", "item": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs` },
      { "@type": "ListItem", "position": 3, "name": blog.Title, "item": `${process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo'}/en/blogs/${params.slug}` }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Breadcrumbs */}
      <div className="px-5 lg:px-20 py-4 bg-white">
        <div className="max-w-[1440px] m-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/en" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/en/blogs" className="hover:text-primary">Blogs</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-800 truncate max-w-xs">{blog.Title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-800 relative overflow-hidden">
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
        
        <div className="px-5 lg:px-20 py-12 lg:py-16 font-avenir relative z-10">
          <div className="max-w-[1440px] m-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.Title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto">
              {blog.Description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content - Three Column Layout */}
      <div className="px-5 lg:px-20 py-12 lg:py-16 font-avenir">
        <div className="max-w-7xl m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-3">
              <div className="sticky top-8 shadow-lg rounded-lg bg-white p-4">
                <div className="bg-primary text-white p-4 mb-4 shadow-lg">
                  <h3 className="text-lg font-semibold">Categories</h3>
                </div>
                <ul className="space-y-0">
                  <li className="border-b border-gray-200 py-3">
                    <Link href="/categories/electrical" className="text-[#727272] hover:text-primary flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Electrical & Automation Solutions
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <Link href="/categories/hvac" className="text-[#727272] hover:text-primary flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Air Conditioning
                    </Link>
                  </li>
                  <li className="border-b border-gray-200 py-3">
                    <Link href="/categories/machinery" className="text-[#727272] hover:text-primary flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Machinery
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/categories/after-market" className="text-[#727272] hover:text-primary flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      Service excellence
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-6">
              {/* Blog Metadata */}
              <div className="flex items-center justify-between text-sm text-[#bcbcbc] mb-6">
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span>2 min read</span>
              </div>

              {/* Blog Image */}
              {blog.image?.data?.attributes?.url && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={blog.image.data.attributes.url}
                    alt={blog.image.data.attributes.alternativeText || `Featured image for blog post: ${blog.Title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-800 leading-relaxed prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                >
                  {blog.Content ? (
                    <div className="prose max-w-none">
                      {/* Introduction Section */}
                      <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h2>
                        <p className="text-gray-700 mb-0">
                          In this comprehensive guide, we'll explore the latest insights and expert recommendations for {blog.Title?.toLowerCase() || 'our featured topic'}. 
                          As Jordan's leading provider of <Link href="/categories/hvac" className="text-primary hover:underline">air conditioning systems</Link> and 
                          <Link href="/categories/machinery" className="text-primary hover:underline"> machinery solutions</Link>, 
                          Kettaneh brings over 50 years of industry expertise to help you make informed decisions.
                        </p>
                      </div>

                      <BlocksRendererComponent 
                        content={blog.Content} 
                        classes="mb-4 text-gray-700 leading-relaxed"
                      />

                      {/* FAQ Section */}
                      <div className="bg-gray-50 p-6 rounded-lg mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                          <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why choose Kettaneh for your air conditioning and machinery needs?</h3>
                            <p className="text-gray-700">
                              Kettaneh has been Jordan's trusted partner for over 50 years, providing professional-grade solutions with comprehensive 
                              <Link href="/about" className="text-primary hover:underline"> customer support</Link> and warranty coverage. 
                              Our expert team ensures proper installation and maintenance for optimal performance.
                            </p>
                          </div>
                          <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">What warranty coverage do you provide?</h3>
                            <p className="text-gray-700">
                              All our products come with manufacturer warranties, and we provide additional support through our 
                              <Link href="/categories/after-market" className="text-primary hover:underline"> service excellence programs</Link>. 
                              Our team ensures proper installation and offers ongoing maintenance support.
                            </p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get professional installation?</h3>
                            <p className="text-gray-700">
                              Contact our expert team for professional installation services. We provide comprehensive support from consultation to 
                              installation and ongoing maintenance. <Link href="/our-customer" className="text-primary hover:underline">See our customer success stories</Link> 
                              and learn why businesses across Jordan trust Kettaneh.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Conclusion Section */}
                      <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                        <p className="text-gray-700 mb-4">
                          {blog.Title} represents just one aspect of the comprehensive solutions Kettaneh provides. 
                          As Jordan's leading provider of professional-grade machinery and air conditioning systems, we're committed to 
                          delivering excellence in every project.
                        </p>
                        <p className="text-gray-700 mb-0">
                          Ready to experience the Kettaneh difference? <Link href="/our-customer" className="text-primary hover:underline font-semibold">Contact our expert team</Link> 
                          today for personalized solutions tailored to your specific needs.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No content available for this blog post.</p>
                  )}
                </div>
              </div>

              {/* Social Share Buttons */}
              {/* <div className="mt-8">
                <SocialShareButtons
                  url={`${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs/${params.slug}`}
                  title={blog.Title}
                  description={blog.Description}
                />
              </div> */}

              {/* Product Recommendations Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Air Conditioning Solutions from Kettaneh</h2>
                <p className="text-gray-600 mb-6">
                  Discover our top-rated air conditioning systems with professional installation and comprehensive warranty coverage. 
                  <Link href="/categories/hvac" className="text-primary hover:underline ml-1">Explore our full air conditioning range</Link> 
                  or <Link href="/our-customer" className="text-primary hover:underline ml-1">contact our experts</Link> for personalized recommendations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Midea Xtreme 2 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac1.jpg"
                        alt="Midea Xtreme Split Air Conditioner 2 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea Xtreme Split Air Conditioner, 2 Ton, Energy Saving, Smart WiFi Control, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• HEPA Filter & Silver Ionizer Filter</li>
                      <li>• Built-in Ionizer</li>
                      <li>• 1W Standby Mode for energy saving</li>
                      <li>• Smart WiFi Control via smartphone</li>
                      <li>• Self-Cleaning (I-Clean)</li>
                      <li>• Eco+ Gear Function</li>
                      <li>• 3D Airflow & "Follow Me" Function</li>
                      <li>• Turbo & Wind Avoid Me Modes</li>
                      <li>• Golden Fin Coating for durability</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-primary">600 JOD</span>
                        <p className="text-xs text-gray-500">+ Professional Installation</p>
                      </div>
                      <a 
                        href="https://arabiemart.com/items/en/midea-xtreme-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10329457" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      ✓ 2-year warranty ✓ Expert installation ✓ 24/7 support
                    </div>
                  </div>

                  {/* Midea All Easy Pro 2 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac2.jpg"
                        alt="Midea All Easy Pro Split Air Conditioner 2 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea All Easy Pro Split Air Conditioner, 2 Ton, Energy Saving, Smart WiFi Control, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Easy to install; Easy to maintain; Easy to clean</li>
                      <li>• Intelligent Eye</li>
                      <li>• Thermal and Humid detection</li>
                      <li>• 3D air flow; Follow me; Turbo; Wind Avoid me</li>
                      <li>• Self cleaning (I-Clean)</li>
                      <li>• Ionizer</li>
                      <li>• Smart WiFi Control</li>
                      <li>• Eco+ Gear function</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-primary">650 JOD</span>
                        <p className="text-xs text-gray-500">+ Professional Installation</p>
                      </div>
                      <a 
                        href="https://arabiemart.com/items/en/midea-all-easy-pro-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099991" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      ✓ 2-year warranty ✓ Expert installation ✓ 24/7 support
                    </div>
                  </div>

                  {/* Midea Breezeless 2 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac3.jpg"
                        alt="Midea Breezeless Split Air Conditioner 2 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea Breezeless Split Air Conditioner, 2 Ton, Energy Saving, Smart WiFi Control, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Energy Saving Report via MSmart Home App</li>
                      <li>• Intelligent Learning Algorithm (up to 20% more efficient for Eco Comfort)</li>
                      <li>• Breezeless Technology with Twinflap™ and 5013 mini-holes</li>
                      <li>• Cool Flash Plus: lowers room temp by 6.3°C in 10 min</li>
                      <li>• Heat Flash: raises temp by 10.4°C in 10 min</li>
                      <li>• Air Magic+: negative ions inhibit bacteria & viruses</li>
                      <li>• Over-The-Air software updates</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-primary">690 JOD</span>
                        <p className="text-xs text-gray-500">+ Professional Installation</p>
                      </div>
                      <a 
                        href="https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099889" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      ✓ 2-year warranty ✓ Expert installation ✓ 24/7 support
                    </div>
                  </div>

                  {/* Midea Forest 2 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac4.jpg"
                        alt="Midea Forest Split Air Conditioner 2 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea Forest Split Air Conditioner, 2 Ton, Inverter, Energy Saving, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Fast Cooling for instant comfort</li>
                      <li>• High-efficiency filter for cleaner air</li>
                      <li>• Inverter technology for energy saving</li>
                      <li>• Ultra-quiet operation with near-silent sound</li>
                      <li>• Durable and sleek design</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-primary">580 JOD</span>
                        <p className="text-xs text-gray-500">+ Professional Installation</p>
                      </div>
                      <a 
                        href="https://arabiemart.com/items/en/midea-forest-split-air-conditioner-2-ton-inverter-energy-saving-white-10327578" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90 transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      ✓ 2-year warranty ✓ Expert installation ✓ 24/7 support
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Section */}
              <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 text-white p-8 rounded-lg">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Let Kettaneh's expert team help you find the perfect solution for your needs. 
                    With over 50 years of experience and comprehensive support, we're your trusted partner in Jordan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/our-customer" 
                      className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      View Our Work
                    </Link>
                    <Link 
                      href="/categories/hvac" 
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                    >
                      Explore Products
                    </Link>
                  </div>
                  <p className="text-sm mt-4 opacity-75">
                    ✓ Free consultation ✓ Professional installation ✓ 24/7 support ✓ Comprehensive warranty
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Related Articles */}
            <div className="lg:col-span-3">
              <div className="sticky top-8 shadow-lg rounded-lg bg-white p-4">
                <div className="bg-primary text-white p-4 mb-4 shadow-lg">
                  <h3 className="text-lg font-semibold">Related Articles</h3>
                </div>
                <div className="space-y-4">
                  {filteredRelatedArticles.length > 0 ? (
                    filteredRelatedArticles.map((article: any) => (
                      <div key={article.id} className="border-0 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-32 relative">
                          <Image
                            src={
                              article.attributes.image?.data?.attributes?.url
                                ? article.attributes.image.data.attributes.url
                                : "/images/news/card-header.png"
                            }
                            alt={article.attributes.image?.data?.attributes?.alternativeText || `Featured image for blog post: ${article.attributes.Title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="font-semibold text-gray-900 mb-2 overflow-hidden" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}>
                            {article.attributes.Title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 overflow-hidden" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}>
                            {article.attributes.Description}
                          </p>
                          <Link href={`/en/blogs/${article.attributes.Slug}`} className="text-primary text-sm hover:underline">
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 text-sm">No related articles found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="block lg:hidden">
        <ScrollSliders />
      </section>
    </>
  );
};

export default page;
