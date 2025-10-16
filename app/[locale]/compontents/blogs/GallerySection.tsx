"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    Content: string;
    publishedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    Slug: string;
  };
}

interface GallerySectionProps {
  blogs: Blog[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ blogs }) => {
  const [displayCount, setDisplayCount] = useState(6);
  const blogsToShow = blogs.slice(0, displayCount);
  const hasMore = displayCount < blogs.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, blogs.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogsToShow.length > 0 ? (
          blogsToShow.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
            {/* Image Section */}
            <div className="relative h-64 w-full">
              <Image
                src={
                  blog.attributes.image?.data?.attributes?.url
                    ? blog.attributes.image.data.attributes.url
                    : "/images/news/card-header.png"
                }
                alt={blog.attributes.image?.data?.attributes?.alternativeText || `Featured image for blog post: ${blog.attributes.Title}`}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight overflow-hidden hover:text-primary transition-colors" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {blog.attributes?.Title || 'No Title Available'}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}>
                {blog.attributes?.Description || 'No description available'}
              </p>

              {/* Trust Signals */}
              <div className="flex items-center mb-4 text-xs text-gray-500">
                <span className="flex items-center mr-4">
                  <svg className="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Expert Insights
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kettaneh Team
                </span>
              </div>
              
              {/* Metadata */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#bcbcbc]">
                  {blog.attributes?.publishedAt ? new Date(blog.attributes.publishedAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }) : 'No Date'}
                </span>
                <span className="text-xs text-[#bcbcbc]">
                  5 min read
                </span>
              </div>
              
              {/* Read More Button */}
              <div className="text-center">
                <Link
                  href={`/en/blogs/${blog.attributes?.Slug || 'no-slug'}`}
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="bg-gray-100 rounded-lg p-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">No blogs available at the moment.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for new content!</p>
            </div>
          </div>
        )}
      </div>

    {/* Load More Button */}
    {hasMore && (
      <div className="mt-12 text-center">
        <button
          onClick={handleLoadMore}
          className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
          </svg>
          Load More Articles
        </button>
        <p className="text-sm text-gray-600 mt-3">
          Showing {displayCount} of {blogs.length} articles
        </p>
      </div>
    )}

    {/* All Loaded Message */}
    {!hasMore && blogs.length > 6 && (
      <div className="mt-12 text-center">
        <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
          <p className="text-gray-600 font-medium">
            ✓ You&apos;ve viewed all {blogs.length} articles
          </p>
        </div>
      </div>
    )}
    </div>
  );
};

export default GallerySection;
