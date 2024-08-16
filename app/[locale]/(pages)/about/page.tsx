import AchievementsSection from "@/compontents/about/AchievementsSection";
import Image from "next/image";

export default function AboutUs() {
   const partners = [
     { name: "Haier", src: "/images/haier.png" },
     { name: "Siemens", src: "/images/siemens.png" },
     { name: "Linde", src: "/images/linde.png" },
     { name: "Delfin", src: "/images/delfin.png" },
     { name: "Atlas Copco", src: "/images/atlascopco.png" },
   ];

  return (
    <>
      <div className="p-8 lg:px-20 lg:py-[32px] font-avenir">
        {/* Who we are section */}
        <section className="">
          <div>
            <div className="mb-10 flex">
              <div className="bg-primary w-[2px] min-h-[100%] mr-[4px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
                About Us
              </span>
            </div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              <span className="text-primary ">Who</span> we are ?
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              A Legacy of Commitment and Growth Since 1922
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-[64px]  text-[18px] font-[400] leading-[28px] text-paragraph">
            <div className="flex">
              <div className="bg-primary w-[2px] min-h-[100%] mr-[10px]"></div>
              <p className="lg:max-w-[536px]">
                Ever since the company &apos;s establishment in 1922, the
                Kettaneh Group has sought to provide true satisfaction to its
                customers and potential clients.
                <br />
                <br />
                Francis the eldest of the four Kettaneh brothers first
                established the company alone but was later joined by his
                brother Alfred, and afterwards by Charles and Desire. Four
                determined men working hand, hand in hand, to start out what
                later expanded into the Kettaneh Freres ventures.
                <br />
                <br />
                Expansion came when they became sole distributors of a number of
                US brands in the region.
                <br />
                <br />
                This was the push they needed to conduct what was to be a long
                productive and diversified business development.
                <br />
                <br />A professional entrepreneurial spirit, and commitment to
                family values, as well as the personal development of Kettaneh’s
                employees are the foundation on which the Group’s entire
                operation is based. Today, the Francis and Charles Kettaneh
                families own the Group and as always Kettaneh since 1922 is,
                committed to serving you.
              </p>
            </div>
            <div className="flex">
              <div className="bg-primary w-[2px] min-h-[100%] mr-[10px]"></div>
              <Image
                src="/images/about/timeline2_2 3 (1).png"
                alt="Kettaneh Company Building"
                width={561}
                height={564}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* What we do section */}
        <section className="py-[48px]">
          <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
            What we <span className="text-primary ">do </span>?
          </h2>
          <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
            Delivering Excellence Through Quality Brands and Unmatched Service
          </p>
          <div className="grid md:grid-cols-2 mt-[64px]  text-[18px] font-[400] leading-[28px] text-paragraph">
            <div className="flex justify-center items-center flex-wrap gap-10 p-[64px] m-auto ">
              {partners.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.src}
                  alt={partner.name}
                  width={100}
                  height={30.8}
                  priority
                  className="w-[100px] h-[30.8px] object-contain"
                />
              ))}
            </div>
            <div className="flex">
              <div className="bg-primary w-[2px] min-h-[100%] mr-[10px]"></div>
              <p className="text-[20px] font-[500] leading-[28px] text-paragraph">
                F. A. Kettaneh & Co LTD Jordan has a long tradition of being a
                first-class company - one that has always exceeded the
                increasing expectations of its customers and strengthened its
                ties with its employees, suppliers and communities. A leading
                company in the Jordanian market, which started its operation in
                1948 and since then has represented a number of premium brands
                such as Siemens, Atlas Copco, Haier, and Linde to name a few.
                With three specialized Departments, Kettaneh is able to provide
                and satisfy all market needs for industrial equipment.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-primary text-white p-8 lg:px-20 lg:py-[32px] font-avenir">
        <div className="">
          <h2 className="text-[36px] font-[800] leading-[40px]  mb-[10px]">
            Where are we heading to?
          </h2>
          <p className=" text-[20px] font-[500] leading-[28px] ">
            Charting the Future with Innovation and Integrity
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-5 mt-[64px]">
            <div className="flex">
              <div className="bg-white w-[2px] min-h-[100%] mr-[10px]"></div>
              <div className="lg:max-w-[536px]">
                <h3 className="text-[20px] font-[600] leading-[30px]">
                  Mission
                </h3>
                <p className="text-[18px] font-[400] leading-[28px] mt-[8px]">
                  Leverage on our historical and ethical business reputation in
                  the region to meet the changing needs of our customers by
                  offering them integrated solutions and services through an
                  expanded offering of leading brands.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-white w-[2px] min-h-[100%] mr-[10px]"></div>
              <div className="lg:max-w-[536px]">
                <h3 className="text-[20px] font-[600] leading-[30px]">
                  Vision
                </h3>
                <p className="text-[18px] font-[400] leading-[28px] mt-[8px]">
                  Lead the market by expanding our product portfolio and
                  integrating it into profitable services and solutions that add
                  comfort, safety, and reliability to our customers while
                  protecting our environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AchievementsSection />
      </section>
    </>
  );
}
