"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import IntlTelInput from "react-intl-tel-input";
import { parseUTMParameters } from "@/utilis/utmParser";
import MultiSelectDropdown from "../ui/multi-select/MultiSelectDropdown";

interface Form {
  full_name: string;
  email: string;
  category: any[];
  country_code: string;
  phone_number: string;
  cv_resume: File | null;
  [key: string]: string | any[] | File | null | undefined;
}

interface FormErrors {
  full_name?: string;
  email?: string;
  category?: string;
  country_code?: string;
  phone_number?: string;
  cv_resume?: string;
  [key: string]: string | undefined;
}

const submitForm = async (formData: Form) => {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

  // Create FormData instance
  const data = new FormData();

  data.append(`files.cv_resume`, formData['cv_resume'] as File);
  data.append(`data`, JSON.stringify(formData));


  const res = await fetch(`${API_URL}/api/cvs`, {
    method: 'POST',
    body: data,
  });

  if (!res.ok) {
    console.error('Error uploading file:', await res.text());
    return 'error';
  }

  return 'ok';
};

const CareerFormNew = ({categories}: any) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [formData, setFormData] = useState<Form>({
    full_name: "",
    email: "",
    category: [],
    country_code: "",
    phone_number: "",
    cv_resume: null,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [curCountry, setCurCountry] = useState<string>('');

  const utmData = parseUTMParameters();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formData.phone_number = phone;
    formData.country_code = countryCode;
    const validationErrors = validateForm(formData);
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    const Data = {
      ...formData,
      category: selectedCategories.map((el)=> el.id),
      utm_source: utmData.utm_source,
      utm_medium: utmData.utm_medium,
      utm_campaign: utmData.utm_campaign,
      utm_term: utmData.utm_term,
      utm_content: utmData.utm_content
    }
    const result = await submitForm(Data);

    if (result === 'ok') {
      //Success Logic
    } else {
      //Fail Logic
    }
  };

  const validateForm = (data: Form): FormErrors => {
    let errors: FormErrors = {};
    if (!data.full_name) errors.first_name = "Full Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.category) errors.category = "Please select a Category";
    if (!data.cv_resume) errors.cv_resume = "Cv Is Required";
    return errors;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      cv_resume: file,
    });
  };

  useEffect(()=>{
    async function fetchCurrentCountry(){
      const response = await fetch('https://www.digializer.com/country-detect/ip-adress.json');
      const data = await response.json();
      setCurCountry(data.country_code)
    }
    fetchCurrentCountry();
  }, [])

  const handleGeoIpLookup = (callback: any) => {
    if (curCountry) {
      callback(curCountry);
    } else {
      // Fallback if country detection fails
      callback('ae'); // Default to 'ae' (UAE)
    }
  };

  return (
    <section className="font-avenir">
      <div className="">
        {/* Form Section */}
        <div className="">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row mb-[8px]">
              <label
                htmlFor="full_name"
                className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                geoIpLookup={handleGeoIpLookup}
                defaultCountry={curCountry.toLowerCase() || 'ae'}
                separateDialCode={true}
                preferredCountries={["ae", "sa", "eg", "qa", "bh", "om", "kw", "jo", "lb", "sy", "iq", "ye", "ma", "dz", "ly", "sd", "so"]}
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


            <div className="flex flex-col lg:flex-row mb-[8px]">
              <label
                htmlFor="category"
                className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
              >
                Category*
              </label>
              {/* <select
                className={`rounded-lg w-full ${""
                  // errors.category ? "border-red-500" : ""
                  }`}
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">Select a category</option>
                <option value="Electrical">Electrical</option>
                <option value="HVAC">HVAC</option>
                <option value="Machinery">Machinery</option>
                <option value="Lighting">Lighting</option>
                <option value="Aftermarket">Aftermarket</option>
              </select> */}
              <MultiSelectDropdown
                  options={categories}
                  selectedOptions={selectedCategories}
                  onChange={setSelectedCategories}
              />
            </div>

            <div className="flex flex-col lg:flex-row mb-[24px]">
              <label
                htmlFor="cv_resume"
                className="text-[14px] font-[800] leading-[20px] text-heading lg:min-w-[150px]"
              >
                CV / Resume*
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                style={{ width: "100%", color: "#d0d5dd" }}
              >
                <div className="space-y-1 text-center">
                  {formData.cv_resume && <span>{formData.cv_resume.name}</span>}
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
                      htmlFor="cv_resume"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                    >
                      <span className="text-primary text-center w-full">
                        {" "}
                        Click to upload
                      </span>
                      <input
                        id="cv_resume"
                        name="cv_resume"
                        type="file"
                        onChange={handleFileChange}
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

            {/* <div className="flex flex-col lg:flex-row mb-[8px]">
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
              <Image
                src="/images/career/Code.png"
                alt="Captcha"
                width={160}
                height={53.33}
              />
            </div> */}
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
