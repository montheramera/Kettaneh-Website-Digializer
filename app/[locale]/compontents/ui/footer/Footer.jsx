import Image from "next/image";
import Link from "next/link";

export default function Footer({ data }) {
  return (
    <footer className="font-avenir bg-white">
      <div className="py-16 px-5 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {/* Logo and Description */}
            <div className="lg:col-span-1 flex flex-col justify-start">
              <Link
                href="/en"
                className="inline-block mb-6"
                aria-label="Go to the Home Page"
              >
                <Image
                  src="/images/LOGO_Grey on White_ADJUSTED.svg"
                  alt="Kettaneh Logo"
                  priority
                  width={233}
                  height={56.29}
                  className="h-auto"
                />
              </Link>
              <p className="text-[16px] font-[400] text-paragraph leading-[24px]">
                {data?.footer?.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 border-l-2 pl-2.5" style={{ borderColor: '#72768A' }}>
              <h4 className="font-[900] text-[18px] leading-[22px] text-primary mb-6 uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-4 list-none p-0 m-0 mt-0">
                <li className="flex items-center min-h-[20px] p-0 m-0">
                  <Link
                    href="/en"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Home Page"
                  >
                    Home
                  </Link>
                </li>
                {data?.aboutUs?.isPublished && (
                  <li className="flex items-center min-h-[20px] p-0 m-0">
                    <Link
                      href="/en/about"
                      className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                      aria-label="Go to the About Us Page"
                    >
                      {data?.aboutUs?.data?.title}
                    </Link>
                  </li>
                )}
                {data?.ourCustomer?.isPublished && (
                  <li className="flex items-center min-h-[20px] p-0 m-0">
                    <Link
                      href="/en/our-customer"
                      className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                      aria-label="Go to the Trusted Partners Page"
                    >
                      Trusted Partners

                    </Link>
                  </li>
                )}
                {data?.eventPage?.isPublished && (
                  <li className="flex items-center min-h-[20px] p-0 m-0">
                    <Link
                      href="/en/news-and-events"
                      className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                      aria-label="Go to the News and Events Page"
                    >
                      News and Events
                    </Link>
                  </li>
                )}
                {data?.careerPage?.isPublished && (
                  <li className="flex items-center min-h-[20px] p-0 m-0">
                    <Link
                      href="/en/career"
                      className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                      aria-label="Go to the Career Page"
                    >
                      {data?.careerPage?.data?.title}
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/en/gold"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Midea Win Gold Page"
                  >
                    Midea Win Gold
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="lg:col-span-1 border-l-2 pl-2.5" style={{ borderColor: '#72768A' }}>
              <h4 className="font-[900] text-[18px] leading-[22px] text-primary mb-6 uppercase tracking-wide">
                Categories
              </h4>
              <ul className="space-y-4 list-none p-0 m-0 mt-0">
                <li className="flex items-center">
                  <Link
                    href="/en/categories/electrical"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Electrical & Automation Solutions Page"
                  >
                    Electrical & Automation Solutions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/en/categories/hvac"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Air Conditioning Page"
                  >
                    Air Conditioning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/categories/machinery"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Machinery Page"
                  >
                    Machinery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/categories/after-market"
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                    aria-label="Go to the Service excellence Page"
                  >
                    Service excellence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sales and Aftermarket */}
            <div className="lg:col-span-1 border-l-2 pl-2.5" style={{ borderColor: '#72768A' }}>
              <h4 className="font-[900] text-[18px] leading-[22px] text-primary mb-6 uppercase tracking-wide">
                Sales and Aftermarket
              </h4>
              <div className="space-y-5 mt-0">
                <div className="flex items-center gap-3 min-h-[20px]">
                  <Image
                    src="/images/icons/call.svg"
                    alt="Phone"
                    priority
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="tel:+96264398642" 
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                  >
                    +962 6 439 8642
                  </a>
                </div>
                <div className="flex items-center gap-3 min-h-[20px]">
                  <Image
                    src="/images/icons/what's.svg"
                    alt="WhatsApp"
                    priority
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="https://wa.me/+962780888005" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                  >
                    +962 78 088 8005
                  </a>
                </div>
                <div className="flex items-center gap-3 min-h-[20px]">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-paragraph flex-shrink-0"
                  >
                    <path 
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <polyline 
                      points="22,6 12,13 2,6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a 
                    href="mailto:AM@kettaneh.com.jo" 
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                  >
                    AM@kettaneh.com.jo
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-1 border-l-2 pl-2.5" style={{ borderColor: '#72768A' }}>
              <h4 className="font-[900] text-[18px] leading-[22px] text-primary mb-6 uppercase tracking-wide">
                Contact Us
              </h4>
              <div className="space-y-5 mt-0">
                <div className="flex items-center gap-3 min-h-[20px]">
                  <Image
                    src="/images/icons/call.svg"
                    alt="Phone"
                    priority
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="tel:+96264398642" 
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                  >
                    +962 6 439 8642
                  </a>
                </div>
                <div className="flex items-center gap-3 min-h-[20px]">
                  <Image
                    src="/images/icons/what's.svg"
                    alt="WhatsApp"
                    priority
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a 
                    href="https://wa.me/+962780888506" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[14px] font-[400] text-paragraph leading-[20px] hover:text-primary transition-colors duration-200"
                  >
                    +962 78 088 8506
                  </a>
                </div>
                <div className="flex items-start gap-3 min-h-[20px]">
                  <Image
                    src="/images/icons/location.svg"
                    alt="Location"
                    priority
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[14px] font-[400] text-paragraph leading-[20px]">
                    F.A. Kettaneh & Co, Al Quds St 338, P.O. Box 485 - 11118, Amman, Jordan
                  </span>
                </div>
                <div className="pt-2">
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/kettanehjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
                    >
                      <Image
                        src="/images/icons/insta.svg"
                        alt="Instagram"
                        priority
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/KettanehJo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
                    >
                      <Image
                        src="/images/icons/facebook.svg"
                        alt="Facebook"
                        priority
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/f.a.kettaneh&coltdinjordansince1948/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
                    >
                      <Image
                        src="/images/icons/linkedin.svg"
                        alt="LinkedIn"
                        priority
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCN_3mZJzPJrh-gAkWwd0kfw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
                    >
                      <Image
                        src="/images/icons/youtube.svg"
                        alt="YouTube"
                        priority
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                    <a
                      href="https://wa.me/+962780888506"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
                    >
                      <Image
                        src="/images/icons/what's.svg"
                        alt="WhatsApp"
                        priority
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="py-8 px-5 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[14px] font-[400] text-paragraph">
                © 2024 Kettaneh. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                {data?.privacyPolicy?.isPublished && (
                  <Link
                    href="/en/privacy-policy"
                    className="text-[14px] font-[400] text-paragraph hover:text-primary transition-colors duration-200 underline"
                    aria-label="Go to the Privacy Policy Page"
                  >
                    {data?.privacyPolicy?.data?.title}
                  </Link>
                )}
                {data?.termsAndCondition?.isPublished && (
                  <Link
                    href="/en/terms-conditions"
                    className="text-[14px] font-[400] text-paragraph hover:text-primary transition-colors duration-200 underline"
                    aria-label="Go to the Terms and Conditions Page"
                  >
                    {data?.termsAndCondition?.data?.title}
                  </Link>
                )}
                {data?.cookiesPolicy?.isPublished && (
                  <Link
                    href="/en/cookies-policy"
                    className="text-[14px] font-[400] text-paragraph hover:text-primary transition-colors duration-200 underline"
                    aria-label="Go to the Cookies Policy Page"
                  >
                    {data?.cookiesPolicy?.data?.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}