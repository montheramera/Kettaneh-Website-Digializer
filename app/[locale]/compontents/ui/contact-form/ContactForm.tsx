"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { usePathname, useSearchParams } from "next/navigation";
import { parseUTMParameters } from "@/utilis/utmParser";
import MultiSelectDropdown from "../multi-select/MultiSelectDropdown";

interface Category {
  title: string;
  id: number;
}


interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  category: any[];
  country_code: string;
  phone_number: string;
  your_business_industry: string;
  url_website: string;
  message: string;
  [key: string]: string | number[];
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

interface FormContactProps {
  setIsOpen: (isOpen: boolean) => void;
  setIsOpenConfirmation: (isOpen: boolean) => void;
  // categories?: any[]
}

function isMarketingOrLightingOrRelated(path:string) {
  return (
    path.includes("after-market") ||
    path.includes("lighting") ||
    path.includes("hvac") ||
    path.includes("machinery") ||
    path.includes("electrical")
  );
}

export default function ContactForm({ setIsOpen, setIsOpenConfirmation }: FormContactProps) {

  // State management for form data
  const [categories, setCategories]=useState([]);
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const path = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [crmCategory, setCrmCategory] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    category: [],
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
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [curCountry, setCurCountry] = useState<string>('');
  const [fullUrl, setFullUrl] = useState("");

  const utmData = parseUTMParameters();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryString = searchParams.toString();
      const currentUrl = `${window.location.origin}${path}${queryString ? `?${queryString}` : ""
        }`;
      setFullUrl(currentUrl);
    }
  }, [path, searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    setError(false);
    setSuccessMessage("");
    e.preventDefault();
    formData.phone_number = phone;
    formData.country_code = countryCode
    // setIsOpenConfirmation(true)
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    const Data = {
      ...formData,
      category: selectedCategories.length ? selectedCategories.map((el)=> el.id) : formData.category,
      utm_source: utmData.utm_source,
      utm_medium: utmData.utm_medium,
      utm_campaign: utmData.utm_campaign,
      utm_term: utmData.utm_term,
      utm_content: utmData.utm_content
    }

    const crmData = {
      properties: {
        firstname: formData.first_name,
        lastname: formData.last_name,
        phone: formData.phone_number,
        email: formData.email,
        mobilephone: formData.phone_number,
        country: country,
        hs_country_region_code: formData.country_code,
        website: formData.url_website,
        industry: formData.your_business_industry,
        message: formData.message,
        hs_lead_status: "NEW",
        category: selectedCategories.length ? selectedCategories.map((el)=>el.title).toString().replaceAll(',', ';') : crmCategory,
        urlPage: fullUrl ? fullUrl : "https://kettaneh-website-digializer.vercel.app/en",
        
      },
    }
    const result = await submitForm(Data);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: crmData,
      }),
    });
    const { success } = await response.json();
      if (success && result === "ok") {
        setLoading(false);
        setIsOpen(false);
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
    if (!data.category) errors.category = "Please select a Category";
    if (!data.message) errors.message = "Message is required";
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
    setIsShowCategory(isMarketingOrLightingOrRelated(path))
    const cate = categories?.find((el: any) =>
      path.split("/").includes(el.title.toLowerCase()) 
    ) ||{id:1, title: ''}
    if (cate) {
      setFormData((oldState: FormData) => ({
        ...oldState,
        category: [cate.id],
      }));
      setCrmCategory(cate.title)
    }
  },[path,categories])

  useEffect(()=>{
    async function fetchCurrentCountry(){
      const response = await fetch('https://www.digializer.com/country-detect/ip-adress.json');
      const data = await response.json();
      setCurCountry(data.country_code)
    }
    fetchCurrentCountry();
  }, [])

const API_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
    useEffect(() => {
      async function fetchCategories() {
        const res = await fetch(
          `${API_URL}/api/categories?populate=category.image&filters[title][$ne]=kettaneh`
        );
        const data = await res.json();
        const Categories = data.data
          .map((el: any) => ({
            id: el.id,
            title: el.attributes.title.replace('-', ' '),
            category: el.attributes.category,
          }))
        setCategories(Categories);
      }
      fetchCategories();
    }, []);
  const handleGeoIpLookup = (callback: any) => {
    if (curCountry) {
      callback(curCountry);
    } else {
      // Fallback if country detection fails
      callback('ae'); // Default to 'ae' (UAE)
    }
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
          <button className="flex justify-center items-center text-[#101828]" onClick={() => setIsOpen(false)}>
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
                className={`bg-white ${
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

            <div className="mb-4">
              <label
                className="font-[800] text-[14px] leading-[20px] text-[#344054]"
                htmlFor="last_name"
              >
                Last name*
              </label>
              <input
                className={`bg-white ${
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
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] bg-white text-[#344054]"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className={`${
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
              {/* <select
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
              </select> */}
              <MultiSelectDropdown
                options={categories}
                selectedOptions={selectedCategories}
                onChange={setSelectedCategories}
              />
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
              className={`${
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
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="url_website"
            >
              URL Website (Optional)
            </label>
            <input
              className={`${
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
          <div className="mb-4">
            <label
              className="font-[800] text-[14px] leading-[20px] text-[#344054]"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              className={`min-h-[134px] ${
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
          {error && (
            <p className="text-primary text-[16px] leading-[24px] font-[800] my-3">
              Something go wrong please try again
            </p>
          )}
          <div className="flex items-center justify-center">
            <button
              className="bg-primary text-white text-[16px] leading-[24px] font-[800] px-[12px] py-[12px] w-full"
              type="submit"
            >
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
    </div>
  );
}
