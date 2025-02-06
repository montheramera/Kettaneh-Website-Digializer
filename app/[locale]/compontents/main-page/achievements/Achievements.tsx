const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

const fetchAchivements = async () => {
  const res = await fetch(`${API_URL}/api/achievements?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  const achivements = data.data.map((el: any)=> el.attributes.Achievement).sort((a: any, b: any)=> a.id - b.id)
  return achivements;
}

const Achievements = async() => {

  const Achivements = await fetchAchivements();
  return (
    <div className="px-5 py-[30px] bg-primary mt-8  lg:px-20 lg:py-[96px] font-avenir  text-white">
      <div className="max-w-[1440px] m-auto">
        <h2 className="font-[800] text-[30px] lg:text-[36px] leading-[36px] lg:leading-[40px]">
          Our Achievements at a Glance
        </h2>
        <p className="text-[20px] lg:text-[16px] leading-[28px] font-[500px] my-[10px]">
          Delivering Excellence and Building Strong Partnerships Across the
          Globe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[30px] lg:mt-[64px]">
          {
            Achivements.map((el: any, index: number) => (
              <div className="flex flex-col items-center lg:items-start"
              key={index}
              >
                <div className="font-[800] text-[60px] leading-[60px] text-start">
                  +{el.number}
                </div>
                <div className="my-[20px] font-[800] text-[30px] leading-[28px] text-start whitespace-nowrap">
                  {el.title}
                </div>
                <p className="font-[500] text-[16px] leading-[24px] text-center lg:text-start">
                  {el.paragraph}
                </p>
              </div>
            ))
          }
        
        </div>
      </div>
    </div>
  );
};

export default Achievements;
