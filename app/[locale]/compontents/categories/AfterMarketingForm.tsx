"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { parseUTMParameters } from "@/utilis/utmParser";
import ModelFormContact from "../ui/model/Model";
import ConfirmationMessage from "../ui/confirmation-message/ConfirmationMessage";

interface FormData {
  first_name: string,
  last_name: string,
  email: string,
  category:string[],
  country_code: string,
  phone_number: string,
  your_business_industry: string,
  url_website: string,
  message: string,
  [key: string]: string | string[];
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

  if (!res.ok) {
    console.error("Error uploading file:", await res.text());
    return "error";
  }

  return "ok";
};

export default function AfterMarketingForm({id}: any) {
  // State management for form data
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState(false)
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    category:[id],
    country_code: "",
    phone_number: "",
    your_business_industry: "",
    url_website: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [curCountry, setCurCountry] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const utmData = parseUTMParameters();

  const handleSubmit = async (e: FormEvent) => {
      setLoading(true);
      setError(false);
    e.preventDefault();
    formData.phone_number = phone;
    formData.country_code = countryCode
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

    const result=await submitForm(Data);
    if (result === "ok") {
      //Success Logic
      setLoading(false);
      setIsOpen(true);
      setIsOpenConfirmation(true);
    } else {
      setLoading(false);
      setError(true);
      //Fail Logic
    }
  };

  const validateForm = (data: FormData): FormErrors => {
    let errors: FormErrors = {};
    if (!data.first_name) errors.first_name = "First Name is required";
    if (!data.last_name) errors.last_name = "Last Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.message) errors.message = "Message is required";
    // if (!data.phone) errors.phone = "Phone is required";
    // if (!data.category) errors.category = "Please select a Category";
    return errors;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    <div className="bg-white  mx-auto  lg:pt-0 contact-form  font-avenir ">
      <form className="w-full  " onSubmit={handleSubmit}>
        <div className=" flex justify-between w-full ">
          <h2 className="text-[24px] leading-[32px] font-[800] text-[#101828] mb-[8px]">
            Contact Our Aftermarket Team
          </h2>
        </div>
        <p className="text-paragraph text-[18px] leading-[28px] font-[400] mb-[16px]">
          Reach out for expert maintenance services, warranty contracts, and
          service agreements
        </p>
        <div className="">
          <div className=" flex gap-5 justify-between">
            <div className="mb-2">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="first_name"
              >
                First name*
              </label>
              <input
                className={` rounded-lg ${
                  errors.first_name ? "border-red" : "w-full"
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

            <div className="mb-2">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="last_name"
              >
                Last name*
              </label>
              <input
                className={` rounded-lg ${
                  errors.last_name ? "border-red" : "w-full"
                }`}
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

          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className={` rounded-lg ${
                errors.email ? "border-red-500" : "w-full"
              }`}
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
            //   className="mb-2"
            style={{ marginBottom: "30px" }}
          >
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="phone_number"
            >
              Phone number*
            </label>

            <IntlTelInput
              containerClassName="intl-tel-input"
              style={{ direction: "ltr", width: "100%" }}
              inputClassName="font-[800] text-[14px] leading-[20px]"
              geoIpLookup={handleGeoIpLookup}
              defaultCountry={curCountry ? curCountry.toLowerCase() : "jo"}
              separateDialCode={true}
              preferredCountries={[
                "ae",
                "sa",
                "eg",
                "qa",
                "bh",
                "om",
                "kw",
                "jo",
                "lb",
                "sy",
                "iq",
                "ye",
                "ma",
                "dz",
                "ly",
                "sd",
                "so",
              ]}
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
          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="your_business_industry"
            >
              Your Business Industry (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.your_business_industry ? "border-red-500" : "w-full"
              }`}
              id="your_business_industry"
              name="your_business_industry"
              type="text"
              placeholder=""
              value={formData.your_business_industry}
              onChange={handleInputChange}
            />
            {errors.your_business_industry && (
              <p className="text-red text-xs mt-1">
                {errors.your_business_industry}
              </p>
            )}
          </div>

          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="url_website"
            >
              URL Website (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.url_website ? "border-red-500" : "w-full"
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

          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              className={` rounded-lg min-h-[120px] ${
                errors.message ? "border-red-500" : "w-full"
              }`}
              id="message"
              name="message"
              placeholder="Leave us a message..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {errors.message && (
              <p className="text-red text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="mb-2 flex items-center">
            <input
              id="privacy-checkbox"
              type="checkbox"
              style={{ width: "16px", height: "16px" }}
              className="h-4 w-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="privacy-checkbox"
              className="ml-2 text-paragraph text-[16px] leading-[24px] font-[400]"
            >
              You agree to our friendly{" "}
              <Link href="" className="underline">
                Privacy Policy
              </Link>{" "}
              and <Link href={"underline"}>Terms of Conditions</Link> .
            </label>
          </div>

          {error && (
            <p className="text-primary text-[16px] leading-[24px] font-[800] my-3">
              Something go wrong please try again
            </p>
          )}
          <div className="flex items-center justify-center">
            <button
              className="bg-primary text-white text-[16px] leading-[24px] font-[800] px-[12px] py-[12px] w-full flex items-center justify-center"
              type="submit"
            >
              {/* Send Message */}
              {loading ? (
                // Spinner while loading
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                // Button text when not loading
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </form>
      {isOpenConfirmation && (
        <>
          <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
            <ConfirmationMessage
              setIsOpenConfirmation={setIsOpenConfirmation}
            />
          </ModelFormContact>
        </>
      )}
    </div>
  );
}
