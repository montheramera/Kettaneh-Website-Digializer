"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Eye } from "lucide-react";

interface Blog {
  id: string;
  attributes: {
    Title: string;
    Description: string;
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

interface PopularPostsSidebarProps {
  blogs: Blog[];
}

const PopularPostsSidebar: React.FC<PopularPostsSidebarProps> = ({ blogs }) => {
  // Get the 5 most recent blogs as "popular" (you can modify this logic based on actual view counts)
  const popularBlogs = blogs.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4">
        <div className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          <h3 className="text-lg font-bold">Most Read Posts</h3>
        </div>
      </div>

      {/* Popular Posts List */}
      <div className="divide-y divide-gray-200">
        {popularBlogs.length > 0 ? (
          popularBlogs.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/en/blogs/${blog.attributes.Slug}`}
              className="block p-4 hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="flex gap-3">
                {/* Ranking Badge */}
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 
                      ? 'bg-yellow-400 text-yellow-900' 
                      : index === 1 
                      ? 'bg-gray-300 text-gray-700' 
                      : index === 2
                      ? 'bg-orange-300 text-orange-900'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={
                      blog.attributes.image?.data?.attributes?.url ||
                      "/images/news/card-header.png"
                    }
                    alt={blog.attributes.image?.data?.attributes?.alternativeText || `Featured image for blog post: ${blog.attributes.Title}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-primary transition-colors overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {blog.attributes.Title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Eye className="w-3 h-3 mr-1" />
                    <span>
                      {new Date(blog.attributes.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500 text-sm">
            No popular posts available.
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <Link
          href="/en/blogs"
          className="block text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View All Articles →
        </Link>
      </div>
    </div>
  );
};

export default PopularPostsSidebar;





