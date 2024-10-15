import CareerFormNew from "@/compontents/career/CareerFormNew";
import BlocksRendererComponent from "../ui/blocs-renderer/BlockRenderer";

export default async function JobDetails({ job }: any) {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row justify-between   lg:gap-32">
                {/* Job Listings */}
                <div className="w-full  lg:w-1/2 ">
                    <div className="">
                        <h2 className="text-[36px] font-[800] leading-[40px] text-heading mt-[10px] mb-[10px]">
                            {job.title}
                        </h2>
                        <p className="text-[20px] font-[500] leading-[28px] text-paragraph lg:max-w-[768px] mb-[20px]">
                            {job.description}
                        </p>
                    </div>
                    <div className="p-6 pb-6 mb-6 border-b border-[#EAECF0]">
                        <div className="my-4">
                            <BlocksRendererComponent content={job.responsibilities}/>
                        </div>
                        <div className="my-4">
                            <BlocksRendererComponent content={job.skills}/>
                        </div>
                    </div>

                    <p className="text-[20px] font-[500] leading-[28px] text-paragraph lg:max-w-[768px] mb-[20px]">
                        {job.summary}
                    </p>
                </div>

                {/* Join Our Team Section */}
                <div className="w-full lg:w-1/2 ">
                    <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
                        Apply for a Position:
                    </h2>
                    <p className="mt-[20px] text-[20px] font-[400] leading-[28px] text-paragraph">
                        Please complete the form below.
                    </p>
                    <div className="mt-10">
                        <CareerFormNew selectedCategory={[job?.category]} />
                    </div>

                </div>
            </div>
        </div>
    );
}