"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  lookingFor: string;
  contactPreference: string;
  interestedIn: string;
  category: string;
  [key: string]: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  lookingFor?: string;
  contactPreference?: string;
  interestedIn?: string;
  FirstName?: string;
  LastName?: string;
  category?: string;
  YourBusiness?: string;
  URLWebsite?: string;
  Message?: string;
  [key: string]: string | undefined;
}


export default function AfterMarketingForm({
 

}) {
  // State management for form data
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    lookingFor: "",
    contactPreference: "",
    interestedIn: "",
    category:""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form Data Submitted", formData);
  };

  // Validate form fields
  const validateForm = (data: FormData): FormErrors => {
    let errors: FormErrors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email) errors.email = "Email is required";
    // if (!data.phone) errors.phone = "Phone is required";
    if (!data.lookingFor) errors.lookingFor = "Please select an option";
    if (!data.contactPreference)
      errors.contactPreference = "Please select a contact preference";
    if (!data.interestedIn) errors.interestedIn = "Please select a room type";
    return errors;
  };

  // Handle form input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-white  mx-auto  lg:pt-0 contact-form  font-avenir ">
      <form className="w-full  " onSubmit={handleSubmit}>
        <div className=" flex justify-between w-full ">
          <h2 className="text-[24px] leading-[32px] font-[800] text-[#101828] mb-[8px]">
            Contact Our Aftermarket Team
          </h2>
          {/* <button className=" text-[#101828]" onClick={() => setIsOpen(false)}>
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
          </button> */}
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
                htmlFor="first-name"
              >
                First name*
              </label>
              <input
                className={` rounded-lg ${
                  errors.FirstName ? "border-red" : ""
                }`}
                id="first-name"
                name="first-name"
                type="text"
                placeholder=""
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {errors.FirstName && (
                <p className="text-red text-xs mt-1">{errors.FirstName}</p>
              )}
            </div>

            <div className="mb-2">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="last-name"
              >
                Last name*
              </label>
              <input
                className={` rounded-lg ${errors.LastName ? "border-red" : ""}`}
                id="last-name"
                name="last-name"
                type="text"
                placeholder=""
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {errors.LastName && (
                <p className="text-red text-xs mt-1">{errors.LastName}</p>
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
            //   className="mb-2"
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
            {errors.phone && (
              <p className="text-red text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="your-business"
            >
              Your Business Industry (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.YourBusiness ? "border-red-500" : ""
              }`}
              id="your-business"
              name="your-business"
              type="text"
              placeholder=""
              value={formData.yourBusiness}
              onChange={handleInputChange}
            />
            {errors.YourBusiness && (
              <p className="text-red text-xs mt-1">{errors.YourBusiness}</p>
            )}
          </div>

          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="url-website"
            >
              URL Website (Optional)
            </label>
            <input
              className={` rounded-lg ${
                errors.URLWebsite ? "border-red-500" : ""
              }`}
              id="url-website"
              name="url-website"
              type="text"
              placeholder=""
              value={formData.urlWebsite}
              onChange={handleInputChange}
            />
            {errors.URLWebsite && (
              <p className="text-red text-xs mt-1">{errors.URLWebsite}</p>
            )}
          </div>

          <div className="mb-2">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={` rounded-lg min-h-[120px] ${
                errors.Message ? "border-red-500" : ""
              }`}
              id="message"
              name="message"
              placeholder="Leave us a message..."
              value={formData.Message}
              onChange={handleInputChange}
            />
            {errors.Message && (
              <p className="text-red text-xs mt-1">{errors.Message}</p>
            )}
          </div>
          <div className="mb-2 flex items-center">
            <input
              id="privacy-checkbox"
              type="checkbox"
              style={{ width: "16px", height: "16px" }}
              className="h-4 w-4 mt-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
