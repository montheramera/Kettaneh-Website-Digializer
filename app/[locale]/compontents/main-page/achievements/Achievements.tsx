const Achievements = () => {
  return (
    <div className="bg-primary p-8 lg:px-20 lg:py-[96px] font-avenir  text-white">
      <div className="max-w-[1440px] m-auto">
        <h2 className="font-[800] text-[36px] leading-[40px]">
          Our Achievements at a Glance
        </h2>
        <p className="text-[20px] leading-[28px] font-[500px] mt-[10px]">
          Delivering Excellence and Building Strong Partnerships Across the
          Globe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[32px]">
          <div>
            <div className="font-[800] text-[60px] leading-[60px]">+100</div>
            <div className="mt-[12px] mb-[8px] font-[800] text-[18px] leading-[28px]">
              Landmark Projects
            </div>
            <div className="font-[500] text-[16px] leading-[24px]">
              Successfully completed projects that set industry standards
            </div>
          </div>
          <div>
            <div className="font-[800] text-[60px] leading-[60px]">+30</div>
            <div className="mt-[12px] mb-[8px] font-[800] text-[18px] leading-[28px]">
              Global Partners
            </div>
            <div className="font-[500] text-[16px] leading-[24px]">
              Collaborating with leading brands to deliver innovative solutions
            </div>
          </div>
          <div>
            <div className="font-[800] text-[60px] leading-[60px]">+100</div>
            <div className="mt-[12px] mb-[8px] font-[800] text-[18px] leading-[28px]">
              Years of experience
            </div>
            <div className="font-[500] text-[16px] leading-[24px]">
              Providing top-tier engineering solutions since 1922
            </div>
          </div>
          <div>
            <div className="font-[800] text-[60px] leading-[60px]">+4.7</div>
            <div className="mt-[12px] mb-[8px] font-[800] text-[18px] leading-[28px]">
              Rating
            </div>
            <div className="font-[500] text-[16px] leading-[24px]">
              High customer satisfaction ratings across all our services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
