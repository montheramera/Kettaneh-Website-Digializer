import LogosSliderOurCustomer from "./LogosSliderOurCustomer"

const OurCustomer = () => {
  return (
    <div className="lg:px-20 lg:py-[96px] font-avenir ">
      <div className="max-w-[1440px] m-auto">

      <div className="">
        <h2 className="font-[800] text-[36px] leading-[40px]">
          Explore Our <span className="text-primary">Customer</span>
        </h2>
        <p className="font-[500] text-paragraph text-[20px] leading-[28px] mt-[10px]">
          Discover how we deliver excellence through innovative engineering
          solutions and <br />premium brands, shaping the future.
        </p>
          </div>
          <div className="mt-[64px]">     
          <LogosSliderOurCustomer />
          </div>
    </div>
      </div>
  );
};

export default OurCustomer;
