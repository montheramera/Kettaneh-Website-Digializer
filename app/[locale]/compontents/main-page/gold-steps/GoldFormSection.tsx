"use client";
import Image from "next/image";
import { useState } from "react";

interface GoldFormSectionProps {
  locale?: string;
}

const GoldFormSection: React.FC<GoldFormSectionProps> = ({ locale = "ar" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreeToTerms: false,
  });

  const isRTL = locale === "ar";

  const content = {
    ar: {
      title: "انضم لعالم كتانه لمعرفة جديدنا",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الالكتروني",
      emailPlaceholder: "Example@gmail.com",
      agreeToTerms: "أوافق على الشروط والأحكام العامة",
      subscribe: "اشتراك",
      login: "ارسال",
    },
    en: {
      title: "Welcome to Kettaneh's World",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      emailPlaceholder: "Example@gmail.com",
      agreeToTerms: "I agree to the general terms and conditions",
      subscribe: "Subscribe",
      login: "Login",
    },
  };

  const data = content["ar" as keyof typeof content] || content.ar;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Generate mailto link dynamically based on form data
  const generateMailto = () => {
    const subject = encodeURIComponent("Gold Form Submission");
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${
        formData.lastName
      }\nEmail: ${formData.email}\nAgreed to Terms: ${
        formData.agreeToTerms ? "Yes" : "No"
      }`
    );
    return `mailto:Ghosheh.K@kettaneh.com.jo?subject=${subject}&body=${body}`;
  };

  // Function to handle form submission
  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = generateMailto();
    window.location.href = mailtoUrl;
  };

  return (
    <div
      className="px-5 py-[30px] lg:px-20   lg:py-[97px] font-avenir bg-[#F9FAFB]"
      dir={"ltr"}
    >
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center max-w-[1440px] m-auto row-reverse">
        {/* Logo */}

        <div className="w-1/4 h-1/4">
          <img
            src="/images/gold/landing-page-arabic-logo.svg"
            alt="Kettaneh Logo"
            // width={100}
            // height={60}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Form Content */}
        <div className="">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {data.title}
          </h2>

          {/* Form */}
          <form onSubmit={handleMailtoSubmit} className="space-y-6">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div dir="rtl">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder={data.firstName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  required
                />
              </div>

              {/* Last Name */}
              <div dir="rtl">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder={data.lastName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={data.emailPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3" dir="rtl">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="agreeToTerms"
                className="text-gray-700 text-sm leading-relaxed cursor-pointer"
              >
                {data.agreeToTerms}
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#CF4149] hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {data.login}
              </button>

              {/* <button
                type="button"
                className="px-8 py-3 bg-[#CF4149] hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {data.subscribe}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoldFormSection;
