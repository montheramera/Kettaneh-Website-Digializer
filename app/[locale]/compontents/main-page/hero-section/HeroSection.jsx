
import HoverEffect from '@/compontents/ui/mouse-over/HoverEffect';
import React from 'react';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchCategories = async ()=>{
  const res = await fetch(`${API_URL}/api/categories?populate=category.image`);
  const data = await res.json();
  const Categories = data.data.map(el=>({title: el.attributes.title, category: el.attributes.category})).sort((a, b)=> a.category.id - b.category.id);
  return Categories;
}


const HeroSection = async() => {
  const categories = await fetchCategories();
    return (
      <div className="bg-primary lg:px-20 p-10 font-avenir ">
        <div className="relative group max-w-[1440px] m-auto  lg:min-h-[125px]">
          {/* <div className=" text-white">
            <h1 className=" font-[800] text-[60px] leading-none">
              100 Years Legacy Engineering Solutions
            </h1>
            <p className="font-inter font-[400] text-[20px] max-w-[618px] leading-[30px] mt-[24px]">
              Since 1922, delivering top-tier industrial solutions ensuring
              unmatched customer satisfaction
            </p>
          </div> */}

          {/* <div className="flex mt-4">
            <div className="relative w-1/5">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  Electrical
                </div>
              </div>
            </div>
            <div className="relative w-1/5">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  HVAC
                </div>
              </div>
            </div>
            <div className="relative w-1/5">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  Machinery
                </div>
              </div>
            </div>
            <div className="relative w-1/5">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  Lighting
                </div>
              </div>
            </div>
            <div className="relative w-1/5">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-out scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url("/images/image1.jpg")` }}
              >
                <div className="bg-white bg-opacity-40 p-4 text-white">
                  After Market
                </div>
              </div>
            </div>
          </div> */}
          <section className="hidden lg:block absolute z-[5000] top-[0px] w-full ">
            <HoverEffect categories={categories}/>
          </section>
        </div>
      </div>
    );
};

export default HeroSection;