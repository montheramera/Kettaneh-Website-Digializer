import Image from "next/image";
import CareerFormNew from "@/compontents/career/CareerFormNew";

export default function JobListings() {
  const jobs = [
    {
      title: "Sales Engineer",
      department: "Electrical Department",
      departmentColor: "#175CD3",
      departmentBg: "#B2DDFF",
      description:
        "We're looking for sales engineer experienced in Automation & LV to join our team.",
    },
    {
      title: "Sales Engineer",
      department: "Machinery Department",
      departmentColor: "#B93815",
      departmentBg: "#F9DBAF",
      description:
        "We're looking for sales engineer experienced in Air Compressors to join our team.",
    },
    {
      title: "Sales Engineer",
      department: "Aftermarket Department",
      departmentColor: "#067647",
      departmentBg: "#ABEFC6",
      description:
        "We're looking for sales engineer experienced in Machinery spare parts to join our team.",
    },
    {
      title: "Sales Engineer",
      department: "Water Department",
      departmentColor: "#175CD3",
      departmentBg: "#B2DDFF",
      description:
        "We're looking for sales engineer experienced in Water pumps to join our team.",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Job Listings */}
        <div className="flex-1 lg:max-w-[576px]">
          {jobs.map((job, index) => (
            <div key={index} className="pb-6 mb-6 border-b border-[#EAECF0]">
              <h3 className="text-[24px] font-[800] leading-[28px] text-heading">
                {job.title}
                <span
                  style={{
                    background: job.departmentBg,
                    color: job.departmentColor,
                    border: `1px solid ${job.departmentColor}`,
                  }}
                  className={`ml-2 border-[${job.departmentColor}] border p-2 rounded-3xl text-[14px] font-[500] leading-[20px] text-[${job.departmentColor}] bg-[${job.departmentBg}]`}
                >
                  {job.department}
                </span>
              </h3>
              <p className="mt-[8px] text-[18px] font-[400] leading-[28px] text-paragraph">
                {job.description}
              </p>
              <div className="flex items-center text-[16px] font-[500] leading-[24px] text-paragraph  space-x-4 mt-[24px]">
                <span className="flex gap-2">
                  <Image
                    src="/images/icons/location-icon.png"
                    alt="on site logo"
                    priority
                    width={13.33}
                    height={16.67}
                  />{" "}
                  On Site
                </span>
                <span className="flex ">
                  {" "}
                  <Image
                    src="/images/icons/fulltime-icon.png"
                    alt="full time icon"
                    priority
                    width={20}
                    height={20}
                  />{" "}
                  <span className="mx-2">Full-time</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="flex-1 lg:max-w-[576px]">
          <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
            Join our team
          </h2>
          <p className="mt-[20px] text-[20px] font-[400] leading-[28px] text-paragraph">
            F.A. Kettaneh is opening the below mentioned vacancies, please apply
            to
            <a href="mailto:rula@kettaneh.com.jo" className="text-primary">
              {" "}
              rula@kettaneh.com.jo{" "}
            </a>
            mentioning the job & title departments in the subject.
          </p>

          <CareerFormNew />
          {/* <h3 className="text-[20px] font-[800] leading-[28px] text-heading mt-[32px]">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-[20px] font-[400] leading-[28px] text-paragraph space-y-1 mt-[20px]">
            <li>Good English.</li>
            <li>3+ years related experience.</li>
            <li>Owns a car.</li>
            <li>Experience in CRM is a plus.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}