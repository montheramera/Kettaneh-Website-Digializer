"use client";

import React from "react";
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight overflow-hidden" style={{
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
  );
};

export default GallerySection;
