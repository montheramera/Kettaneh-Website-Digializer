"use client"
import Image from 'next/image';
import React from 'react';

 const CustomerLogoSection = ({Clients}: any)=>{
    return (
       <div className="mt-[64px] mb-[32px] max-w-[1440px] m-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 items-center">
                  {Clients.map((logo: any, index:number) => (
                    <div key={index} className={`flex  ${index%2===0?"justify-start":"justify-end"} lg:justify-center items-center`}>
                      <Image
                        src={logo.logo.data.attributes.url}
                        alt={logo.logo.data.attributes.name}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </div>
    )
  }

  export default CustomerLogoSection