import Image from "next/image";
import BlocksRendererComponent from "@/compontents/ui/blocs-renderer/BlockRenderer";
import React from "react";
import Link from "next/link";

// Function to get the product URL based on product title
const getProductUrl = (productTitle: string): string | null => {
  const title = productTitle.toLowerCase();
  
  if (title.includes('alleasypro') || title.includes('all-easy-pro')) {
    return 'https://arabiemart.com/items/en/midea-all-easy-pro-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099991';
  } else if (title.includes('xtreme')) {
    return 'https://arabiemart.com/items/en/midea-xtreme-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10329457';
  } else if (title.includes('breezeless') || title.includes('breezless')) {
    return 'https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099889';
  }
  
  return null;
};

export default function Product({products, partner, category }: any){
    return (
        <div className="font-avenir px-5 lg:px-20 bg-gray-50 py-12">
        <section className="max-w-[1440px] mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <div
                style={{ background: category.category.background_color }}
                className="w-1 h-[40px] mr-2 rounded-full"
              />
              <span
                style={{ background: category.category.background_color }}
                className="text-white py-2 px-4 text-lg font-medium leading-6 uppercase rounded-lg"
              >
                  {category.title === "Electrical" ? "Electrical & Automation Solutions" : category.title}
              </span>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              {partner?.title?.toLocaleLowerCase() === "linde" ? (
                <a
                  href="https://www.linde-mh.com/en/?utm_source=122817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={partner.logo.data.attributes.url}
                    alt={partner.logo.data.attributes.alternativeText || partner.title}
                    width={partner.logo.data.attributes.width}
                    height={partner.logo.data.attributes.height}
                    className="object-cover h-auto max-h-16"
                  />
                </a>
              ) : (
                <Image
                  src={partner.logo.data.attributes.url}
                  alt={partner.logo.data.attributes.alternativeText || partner.title}
                  width={partner.logo.data.attributes.width}
                  height={partner.logo.data.attributes.height}
                  className="object-cover h-auto max-h-16"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product: any, i: number) => {
              const productUrl = getProductUrl(product.product.title);
              const ProductImage = () => (
                <Image
                  src={product.product.image.data.attributes.url}
                  alt={product.product.image.data.attributes.alternativeText || product.product.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-[250px] border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                />
              );

              return (
                <div 
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    {productUrl ? (
                      <Link 
                        href={productUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <ProductImage />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                          <span className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-full font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                            View Product
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <ProductImage />
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div
                        style={{ background: category.category.background_color }}
                        className="w-1 h-8 mr-3 rounded-full"
                      />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {product.product.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4 text-gray-600 text-sm">
                      <BlocksRendererComponent content={product.product?.description} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span
                        style={{ background: category.category.background_color }}
                        className="text-white text-xs px-3 py-1 rounded-full uppercase font-medium"
                      >
                        {category.title}
                      </span>
                      
                      <div className="flex gap-2">
                        {partner?.title?.toLocaleLowerCase() === "linde" && (
                          <a
                            href="https://www.linde-mh.com/en/?utm_source=122817"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            Explore Linde
                          </a>
                        )}
                        {productUrl && (
                          <Link 
                            href={productUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            Shop Now
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    )
}