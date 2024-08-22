const Achievements = () => {
  return (
    <div className="bg-primary  lg:px-20 lg:py-[96px] font-avenir  text-white">
      <div className="max-w-[1440px] m-auto">
        <h2 className="font-[800] text-[36px] leading-[40px]">
          Our Achievements at a Glance
        </h2>
        <p className="text-[20px] leading-[28px] font-[500px] my-[10px] ">
          Delivering Excellence and Building Strong Partnerships Across the
          Globe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[64px]">
          <div className="flex flex-col">
            <div className="font-[800] text-[60px] leading-[60px] text-start">+100</div>
            <div className="my-[20px] font-[800] text-[30px] leading-[28px] text-start">
              Landmark Projects
            </div>
            <p className="font-[500] text-[20px] leading-[24px] ">
              Successfully completed projects that set industry standards
            </p>
          </div>
          <div className="flex flex-col">
            <div className="font-[800] text-[60px] leading-[60px] text-start">+30</div>
            <div className="my-[20px] font-[800] text-[30px] leading-[28px] text-start">
              Global Partners
            </div>
            <p className="font-[500] text-[20px] leading-[24px] ">
              Collaborating with leading brands to deliver innovative solutions
            </p>
          </div>
          <div className="flex flex-col">
            <div className="font-[800] text-[60px] leading-[60px] text-start">+100</div>
            <div className="my-[20px] font-[800] text-[30px] leading-[28px] text-start">
              Years of experience
            </div>
            <p className="font-[500] text-[20px] leading-[24px] ">
              Providing top-tier engineering solutions since 1922
            </p>
          </div>
          <div className="flex flex-col">
            <div className="font-[800] text-[60px] leading-[60px] text-start">+4.7</div>
            <div className="my-[20px] font-[800] text-[30px] leading-[28px] text-start">
              Rating
            </div>
            <p className="font-[500] text-[20px] leading-[24px] ">
              High customer satisfaction ratings across all our services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
