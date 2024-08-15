"use client";

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
  YourBusiness?: string;
  URLWebsite?: string;
  Message?: string;
  [key: string]: string | undefined;
}
interface FormContactProps {
  setIsOpen: (isOpen: boolean) => void;
  setIsOpenConfirmation: (isOpen: boolean) => void;
}

export default function ContactForm({ setIsOpen, setIsOpenConfirmation }: FormContactProps) {
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
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

      // Validate form data
      setIsOpen(false)
      setIsOpenConfirmation(true)
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
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="first-name"
            >
              First name
            </label>
            <input
              className={` rounded-lg ${errors.FirstName ? "border-red" : ""}`}
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

          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="last-name"
            >
              Last name
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

          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="email"
            >
              Email
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
              Phone number
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={` rounded-lg min-h-[134px] ${
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
