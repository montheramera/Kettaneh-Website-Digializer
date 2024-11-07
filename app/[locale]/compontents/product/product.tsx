import Image from "next/image";
import BlocksRendererComponent from "@/compontents/ui/blocs-renderer/BlockRenderer";
import React from "react";
export default function Product({products, partner, category }: any){
    return (
        <div className="font-avenir px-5 lg:px-20">
        <section className="max-w-[1440px] mx-auto">
          <div className="flex items-center my-6">
            <div
              style={{ background: category.category.background_color }}
              className="w-1 h-[40px] mr-2"
            />
            <span
              style={{ background: category.category.background_color }}
              className="text-white py-2 px-4 text-lg font-medium leading-6 uppercase"
            >
              {category.title}
            </span>
          </div>

          <div className="flex items-center mx-3 mb-6">
            <Image
              src={partner.logo.data.attributes.url}
              alt={partner.title}
              width={partner.logo.data.attributes.width}
              height={partner.logo.data.attributes.height}
              className="object-cover h-auto"
            />
          </div>

          <div className="flex flex-col space-y-6">
            {products.map((product: any, i: number) => (
              <div className="flex items-start py-6 border-b border-[#ddd]" key={i}>
                <div
                  style={{ background: category.category.background_color }}
                  className="w-1 h-12 mr-2"
                />
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                  <Image
                    src={product.product.image.data.attributes.url}
                    alt={product.product.title}
                    width={300}
                    height={176}
                    className="object-cover w-full lg:w-[300px] border border-[#ddd]"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="text-3xl font-semibold">{product.product.title}</h3>
                    <div className="my-3">
                      <BlocksRendererComponent content={product.product?.description} />
                    </div>
                    <span
                      style={{ background: category.category.background_color }}
                      className="text-start text-sm lg:text-lg text-white py-[6px] px-4 uppercase"
                    >
                      {category.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
}