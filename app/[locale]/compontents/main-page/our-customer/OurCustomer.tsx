import Image from "next/image";
import LogosSliderOurCustomer from "./LogosSliderOurCustomer"
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchClients = async ()=>{
  const res = await fetch(`${API_URL}/api/clients?populate[Client][populate]=*&populate=logo`);
  const data = await res.json();
  const Clients = data.data.map((el: any)=>el.attributes.Client);
  return Clients;
}

const OurCustomer = async() => {
  const Clients = await fetchClients();
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir ">
      <div className="max-w-[1440px] m-auto">
        <div className="">
          <h2 className="font-[800] text-[30px] leading-[36px] lg:text-[36px] lg:leading-[40px]">
            Explore Our <span className="text-primary">Customer</span>
          </h2>
          <p className="font-[500] text-paragraph text-[20px] leading-[28px] mt-[10px]">
            Discover how we deliver excellence through innovative engineering
            solutions and <br />
            premium brands, shaping the future.
          </p>
        </div>
        <div className="mt-[64px]">
          <LogosSliderOurCustomer clients={Clients} />
        </div>

        <div className="mt-[30px] lg:mt-[100px] flex justify-start w-full">
          {/* <div className="bg-primary min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"></div> */}
          {/* <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px]"></span> */}
          <Link
            href="/our-customer"
            className="bg-primary text-white py-2 px-4 inline-block text-[21.86px]  font-[400] leading-[22px]"
            aria-label="Go to the    Our Customer Page"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
