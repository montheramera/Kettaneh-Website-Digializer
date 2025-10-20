"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
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
            Contact Our Service Excellence Team
          </h2>
        </div>
        <p className="text-paragraph text-[18px] leading-[28px] font-[400] mb-[16px]">
          Reach out for expert maintenance services, warranty contracts, and
          service agreements
        </p>
        
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-lg mb-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <h3 className="text-[22px] leading-[30px] font-[800] text-[#101828]">
                Sales and Service Excellence
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Phone */}
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-[14px] leading-[20px] font-[600] text-[#6B7280] uppercase tracking-wide">Phone</span>
                </div>
                <a 
                  href="tel:+96264398642" 
                  className="text-[16px] leading-[24px] font-[600] text-[#101828] hover:text-primary transition-colors duration-200 block"
                >
                  +962 6 439 8642
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-[14px] leading-[20px] font-[600] text-[#6B7280] uppercase tracking-wide">WhatsApp</span>
                </div>
                <a 
                  href="https://wa.me/962780888005" 
                  className="text-[16px] leading-[24px] font-[600] text-[#101828] hover:text-green-600 transition-colors duration-200 block"
                >
                  +962 78 088 8005
                </a>
              </div>

              {/* Email */}
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-[14px] leading-[20px] font-[600] text-[#6B7280] uppercase tracking-wide">Email</span>
                </div>
                <a 
                  href="mailto:AM@kettaneh.com.jo" 
                  className="text-[16px] leading-[24px] font-[600] text-[#101828] hover:text-primary transition-colors duration-200 block break-all"
                >
                  AM@kettaneh.com.jo
                </a>
              </div>
            </div>
          </div>
        </div>
        
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

            <PhoneInput
              value={phone}
              onChange={(value) => {
                setPhone(value || "");
                // Extract country code from the phone number
                if (value) {
                  const countryCode = value.split(' ')[0] || "";
                  setCountryCode(countryCode);
                }
              }}
              defaultCountry="JO"
              className="font-[800] text-[14px] leading-[20px]"
              style={{ direction: "ltr", width: "100%" }}
              placeholder="Enter phone number"
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
          {/* <div className="mb-2 flex items-center">
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
          </div> */}

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
