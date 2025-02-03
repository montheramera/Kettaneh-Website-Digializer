import ScrollSliders from "@/compontents/categories/ScrollSliders";
import CallToAction from "@/compontents/ui/call-action/CallToAction";
import LeadingExcellence from "@/compontents/ui/leading-excellence/LeadingExcellence";
import Image from 'next/image'
import Link from 'next/link'
import React from "react";

export default function NotFound() {
    return (
        <>
            <div className="px-5 lg:px-20 font-avenir">
                <div className="max-w-[1440px] m-auto">
                    <div className="flex mb-6 mt-6">
                        <div className="bg-primary w-1 min-h-full mr-2"></div>
                        <span className="bg-primary text-white py-2 px-4 text-xl font-medium uppercase">
                            404
                        </span>
                    </div>

                    <div className="bg-gray-50 py-20">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center">
                                {/* Left Column */}
                                <div
                                    className="w-full xl:w-1/2 px-4"
                                    data-aos="fade-left"
                                >
                                    <div className="text-center xl:text-left">
                                        <div className="mb-8">
                                            <Image
                                                width={591}
                                                height={452}
                                                className="w-full h-full object-cover"
                                                src="/images/icons/error-page-img.svg"
                                                alt="error-page-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Right Column */}
                                <div
                                    className="w-full xl:w-5/12 xl:ml-auto px-4 mt-8 xl:mt-0"
                                    data-aos="fade-right"
                                >
                                    <div className="text-center xl:text-left mt-12 xl:mt-0">
                                        <div className="text-9xl font-bold text-thm mb-6">
                                            <span className="text-primary">40</span>4
                                        </div>
                                        <h2 className="text-3xl font-semibold mb-4">
                                            Oops! It looks like you're lost.
                                        </h2>
                                        <p className="text-base text-gray-700 mb-6">
                                            The page you’re looking for isn’t available. Try to search again{" "}
                                            <br className="hidden lg:block" /> or use the button below.
                                        </p>
                                        <Link
                                            href="/en"
                                            style={{backgroundColor: 'indianred'}}
                                            className="bg-red-500 text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-gray-700 transition"
                                        >
                                            Go Back To Homepage
                                            {/* <i className="fal fa-arrow-right-long ml-2"></i> */}
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="hidden lg:block career">
                        <LeadingExcellence />
                    </section>
                    <section className="block lg:hidden mt-8">
                        <ScrollSliders />
                    </section>
                    <section>
                        <CallToAction />
                    </section>
                </div>
            </div>
        </>
    );
}