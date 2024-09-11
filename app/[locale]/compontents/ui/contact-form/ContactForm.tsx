"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { usePathname } from "next/navigation";
import { parseUTMParameters } from "@/utilis/utmParser";

interface FormData {
  first_name: string,
  last_name: string,
  email: string,
  category:string,
  country_code: string,
  phone_number: string,
  your_business_industry: string,
  url_website: string,
  message: string,
  [key: string]: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  category?: string;
  country_code?: string;
  phone_number?: string;
  your_business_industry?: string;
  url_website?: string;
  message?: string;
  [key: string]: string | undefined;
}

const submitForm = async (formData: any) => {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
  const res = await fetch(`${API_URL}/api/inquiries`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    }
  );

  return 'ok';
};

interface FormContactProps {
  setIsOpen: (isOpen: boolean) => void;
  setIsOpenConfirmation: (isOpen: boolean) => void;
}

function isMarketingOrLightingOrRelated(path:string) {
  return (
    path.includes("after-marketing") ||
    path.includes("lighting") ||
    path.includes("hvac") ||
    path.includes("machinery") ||
    path.includes("electrical")
  );
}

export default function ContactForm({ setIsOpen, setIsOpenConfirmation }: FormContactProps) {
  // State management for form data
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const path = usePathname();

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    category: path ? path : "",
    country_code: "",
    phone_number: "",
    your_business_industry: "",
    url_website: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isShowCategory, setIsShowCategory]=useState<boolean>(false)

  const utmData = parseUTMParameters();
  console.log(utmData);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formData.phone_number = phone;
    formData.country_code = countryCode
      setIsOpen(false)
      setIsOpenConfirmation(true)
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
     const Data = {...formData, utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          utm_term: utmData.utm_term,
          utm_content: utmData.utm_content}

    await submitForm(Data);
  };

  const validateForm = (data: FormData): FormErrors => {
    let errors: FormErrors = {};
    if (!data.first_name) errors.first_name = "First Name is required";
    if (!data.last_name) errors.last_name = "Last Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.category) errors.category = "Please select a Category";
    // if (!data.phone) errors.phone = "Phone is required";
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

  useEffect(() => {
   setIsShowCategory( isMarketingOrLightingOrRelated(path))
  },[path])
  return (
    <div className="bg-white shadow-lg mx-auto  lg:pt-0 contact-form lg:min-w-[600px] font-avenir ">
      <form
        className="w-full  px-[24px] py-[40px] overflow-y-scroll lg:overflow-auto"
        onSubmit={handleSubmit}
      >
        <div className=" flex justify-between w-full ">
          <h2 className="text-[36px] leading-[40px] font-[800] text-[#101828] mb-[16px]">
            Get in touch
          </h2>
          <button className=" text-[#101828]" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-paragraph text-[18px] leading-[28px] font-[400] mb-[20px]">
          Our friendly team would love to hear from you
        </p>
        <div className="">
          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="first_name"
              >
                First name*
              </label>
              <input
                className={` rounded-lg ${
                  errors.first_name ? "border-red" : ""
                }`}
                id="first_name"
                name="first_name"
                type="text"
                placeholder=""
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
              {errors.first_name && (
                <p className="text-red text-xs mt-1">{errors.first_name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="last_name"
              >
                Last name*
              </label>
              <input
                className={` rounded-lg ${errors.last_name ? "border-red" : ""}`}
                id="last_name"
                name="last_name"
                type="text"
                placeholder=""
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
              {errors.last_name && (
                <p className="text-red text-xs mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className={` rounded-lg ${errors.email ? "border-red-500" : ""}`}
              id="email"
              name="email"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <p className="text-red text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div
            //   className="mb-4"
            style={{ marginBottom: "30px" }}
          >
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="phone"
            >
              Phone number*
            </label>

            <IntlTelInput
              containerClassName="intl-tel-input"
              style={{ direction: "ltr", width: "100%" }}
              inputClassName="font-[800] text-[14px] leading-[20px]"
              // name="phone"
              defaultCountry="ae"
              separateDialCode={true}
              onPhoneNumberChange={(status, value, countryData, number, id) => {
                setPhone(number);
                setCountryCode(countryData.dialCode || "");
                setCountry(
                  countryData?.name?.replace(/\(.*\)/, "").trim() || ""
                );
              }}
            />
            {errors.phone_number && (
              <p className="text-red text-xs mt-1">{errors.phone_number}</p>
            )}
          </div>
          {isShowCategory ? (
            ""
          ) : (
            <div className="mb-4">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="category"
              >
                Category*
              </label>
              <select
                className={`rounded-lg w-full ${
                  errors.category ? "border-red-500" : ""
                }`}
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                <option value="Electrical">Electrical</option>
                <option value="HVAC">HVAC</option>
                <option value="Machinery">Machinery</option>
                <option value="Lighting">Lighting</option>
                <option value="Aftermarket">Aftermarket</option>
              </select>
              {errors.category && (
                <p className="text-red text-xs mt-1">{errors.category}</p>
              )}
            </div>
          )}{" "}
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="your_business_industry"
            >
              Your Business Industry (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.your_business_industry ? "border-red-500" : ""
              }`}
              id="your_business_industry"
              name="your_business_industry"
              type="text"
              placeholder=""
              value={formData.your_business_industry}
              onChange={handleInputChange}
            />
            {errors.your_business_industry && (
              <p className="text-red text-xs mt-1">{errors.your_business_industry}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="url_website"
            >
              URL Website (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.url_website ? "border-red-500" : ""
              }`}
              id="url_website"
              name="url_website"
              type="text"
              placeholder=""
              value={formData.url_website}
              onChange={handleInputChange}
            />
            {errors.url_website && (
              <p className="text-red text-xs mt-1">{errors.url_website}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={` rounded-lg min-h-[134px] ${
                errors.message ? "border-red-500" : ""
              }`}
              id="message"
              name="message"
              placeholder="Leave us a message..."
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <p className="text-red text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary text-white text-[16px] leading-[24px] font-[800] px-[12px] py-[12px] w-full"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
