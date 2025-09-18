import ScrollSliders from "@/compontents/categories/ScrollSliders";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  try {
    const res = await fetch(`${API_URL}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const blog = data.data?.[0]?.attributes;
    
    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const title = blog.Title || "Blog Post";
    const description = blog.Description || "Read our latest blog post";
   
    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_SITE}/en/blogs/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);

    return {
      title: "Blog Post",
      description: "Read our latest blog post",
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

  return (
    <>
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
                      HVAC
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
                      Aftermarket
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
                  {typeof blog.Content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: blog.Content }} />
                  ) : blog.Content ? (
                    <div>
                      {Array.isArray(blog.Content) ? (
                        blog.Content.map((block: any, index: number) => {
                          if (typeof block === 'string') {
                            return <p key={index} className="mb-4">{block}</p>;
                          } else if (block && typeof block === 'object') {
                            // Handle rich text blocks
                            if (block.type === 'paragraph' && block.children) {
                              return (
                                <p key={index} className="mb-4">
                                  {block.children.map((child: any, childIndex: number) => {
                                    if (child.type === 'text') {
                                      return <span key={childIndex}>{child.text}</span>;
                                    } else if (child.type === 'bold') {
                                      return <strong key={childIndex}>{child.children?.[0]?.text || ''}</strong>;
                                    } else if (child.type === 'italic') {
                                      return <em key={childIndex}>{child.children?.[0]?.text || ''}</em>;
                                    }
                                    return null;
                                  })}
                                </p>
                              );
                            } else if (block.type === 'heading' && block.children) {
                              const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                              return (
                                <HeadingTag key={index} className="font-bold text-gray-900 mb-4">
                                  {block.children.map((child: any, childIndex: number) => {
                                    if (child.type === 'text') {
                                      return <span key={childIndex}>{child.text}</span>;
                                    }
                                    return null;
                                  })}
                                </HeadingTag>
                              );
                            }
                          }
                          return null;
                        })
                      ) : (
                        <p className="mb-4">{String(blog.Content)}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No content available for this blog post.</p>
                  )}
                </div>
              </div>

              {/* Product Recommendations Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Air Conditioners - Buy Now</h2>
                <p className="text-gray-600 mb-6">Professional-grade air conditioning units with expert installation available</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Midea Breezeless 2 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac1.jpg"
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
                      <li>• Intelligent Learning Algorithm (up to 20% more efficient)</li>
                      <li>• Breezeless Technology with Twinflap™ and 5013 mini-holes</li>
                      <li>• Cool Flash Plus: lowers room temp by 6.3°C in 10 min</li>
                      <li>• Air Magic+: negative ions inhibit bacteria & viruses</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">690 JOD</span>
                      <a 
                        href="https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10330110" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>

                  {/* Midea Breezeless E 1 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac2.jpg"
                        alt="Midea Breezeless E Split Air Conditioner 1 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea Breezeless E Split Air Conditioner, 1 Ton, Energy Saving, Smart WiFi Control, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Energy Saving Report via MSmart Home App</li>
                      <li>• Intelligent Learning Algorithm (up to 20% more efficient)</li>
                      <li>• Breezeless Technology with Twinflap™ and 5013 mini-holes</li>
                      <li>• Heat Flash: raises temp by 10.4°C in 10 min</li>
                      <li>• Over-The-Air software updates</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">480 JOD</span>
                      <a 
                        href="https://arabiemart.com/items/en/midea-breezeless-e-split-air-conditioner-1-ton-energy-saving-smart-wifi-control-white-10330098" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>

                  {/* Midea Breezeless 1.5 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac3.jpg"
                        alt="Midea Breezeless Split Air Conditioner 1.5 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Midea Breezeless Split Air Conditioner, 1.5 Ton, Energy Saving, Smart WiFi Control, White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Energy Saving Report via MSmart Home App</li>
                      <li>• Intelligent Learning Algorithm (up to 20% more efficient)</li>
                      <li>• Breezeless Technology with Twinflap™ and 5013 mini-holes</li>
                      <li>• Cool Flash Plus: lowers room temp by 6.3°C in 10 min</li>
                      <li>• Air Magic+: negative ions inhibit bacteria & viruses</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">590 JOD</span>
                      <a 
                        href="https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-1-5-ton-energy-saving-smart-wifi-control-white-10330104" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>

                  {/* TCL Split Air Condition 1.5 Ton */}
                  <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 relative rounded mb-3 overflow-hidden">
                      <Image
                        src="/images/ac4.jpg"
                        alt="TCL Split Air Condition 1.5 Ton"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">TCL Split Air Condition 1.5 Ton – White</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        ★★★★☆
                      </div>
                    </div>
                    <ul className="text-xs text-paragraph mb-3">
                      <li>• Model Number: ELITE TAC-18CHSD/XAB1</li>
                      <li>• Faster cooling and heating</li>
                      <li>• Energy efficient with sleep mode</li>
                      <li>• Auto restart to cut off power</li>
                      <li>• 5 speeds with digital temperature display</li>
                      <li>• 18000 Btu Capacity: 1.5 tons</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">380 JOD</span>
                      <a 
                        href="https://arabiemart.com/items/en/tcl-split-air-condition-1-5-ton-white-9738439" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
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
