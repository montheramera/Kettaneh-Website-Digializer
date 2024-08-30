"use client";
import React, { useState } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";

const CareerFormNew = () => {
  const [phone, setPhone] = useState();
  const [countryCode, setCountryCode] = useState();
  const [country, setCountry] = useState();
  return (
    <section className="font-avenir">
      <div className="">
        <h2 className="text-[36px] font-[800] leading-[40px] text-heading mt-[10px] mb-[10px]">
          Advance <span className="text-primary">Your Career</span> with Us
        </h2>
        <p className="text-[20px] font-[500] leading-[28px] text-paragraph lg:max-w-[768px] mb-[20px]">
          Explore exciting career opportunities at F.A. Kettaneh & Co LTD Jordan
          and become part of our legacy of excellence and innovation.
        </p>
          {/* Form Section */}
          <div className="">
            <form className="contact-form">
              <div className="flex flex-col lg:flex-row mb-[8px]">
                <label
                  htmlFor="full-name"
                  className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className=" block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  required
                />
              </div>

              <div className="flex flex-col lg:flex-row mb-[8px]">
                <label
                  htmlFor="email"
                  className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  required
                />
              </div>

              <div className="flex flex-col lg:flex-row mb-[24px]">
                <label
                  htmlFor="phone-number"
                  className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
                >
                  Phone Number*
                </label>
                <IntlTelInput
                  containerClassName="intl-tel-input"
                  style={{ direction: "ltr", width: "100%" }}
                  inputClassName="font-[800] text-[14px] leading-[20px]"
                  defaultCountry="ae"
                  separateDialCode={true}
                  onPhoneNumberChange={(
                    status,
                    value,
                    countryData,
                    number,
                    id
                  ) => {
                    setPhone(number);
                    setCountryCode(countryData.dialCode || "");
                    setCountry(
                      countryData?.name?.replace(/\(.*\)/, "").trim() || ""
                    );
                  }}
                />
              </div>

              <div className="flex flex-col lg:flex-row mb-[24px]">
                <label
                  htmlFor="cv"
                  className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
                >
                  CV / Resume*
                </label>
                <div
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  style={{ width: "100%", color: "#d0d5dd" }}
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H20C18.8954 8 18 8.89543 18 10V14H10C8.89543 14 8 14.8954 8 16V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V16C40 14.8954 39.1046 14 38 14H30V10C30 8.89543 29.1046 8 28 8ZM20 10H28V14H20V10ZM10 16H38V38H10V16Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="flex justify-center text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                      >
                        <span className="text-primary text-center w-full">
                          {" "}
                          Click to upload
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only w-full"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      txt, rtf, pdf, doc, docx, odt, psd, eps, pdf, cdr, xls,
                      xlsx, pptx, zip, rar, 8 MB max
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row mb-[8px]">
                <label
                  htmlFor="captcha"
                  className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
                >
                  What code is in the image?*
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="Enter the characters shown in the image"
                  required
                />
              </div>
              <div className="my-2 lg:ml-[150px] ">
                {/* Add your captcha image here */}
                <Image
                  src="/images/career/Code.png"
                  alt="Captcha"
                  width={160}
                  height={53.33}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-primary text-white text-[16px] leading-[24px] font-[800] px-[12px] py-[12px] w-full mt-[10px]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {/* <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div> */}
            </form>
          </div>

          {/* Image Section */}
        
     
      </div>
    </section>
  );
};

export default CareerFormNew;
