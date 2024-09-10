"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import ModelFormContact from "../model/Model";
import ConfirmationMessage from "../confirmation-message/ConfirmationMessage";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <nav
      className={`bg-primary px-5 py-4 lg:px-20 lg:py-8 text-white font-[500] text-[18px]  ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-md" : ""
      } z-[50000] `}
    >
      <div className="max-w-[1440px] m-auto">
        <div className="mx-auto flex justify-between items-center">
          <div onClick={() => setIsMenuOpen(false)}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={233}
                height={56}
                priority
              />
            </Link>
          </div>
          {/* Hamburger Menu (visible on small screens) */}
          <div className="block lg:hidden font-light">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <ul
            className={`hidden lg:flex space-x-6 font-light ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li
              className="text-white hover:text-prbg-primary"
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Link
                className="text-[16px] uppercase leading-[28px] font-[500]"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <div className="group inline-block">
              <button className="outline-none focus:outline-none   bg-primary rounded-sm flex items-center min-w-32">
                <span className="pr-1  flex-1 text-[16px] uppercase  leading-[28px] font-[500]">
                  Categories
                </span>
                <span>
                  <svg
                    className="fill-current white-fill h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary z-[2000000] border rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">
                      {" "}
                      <Link
                        className="text-[16px] uppercase leading-[28px] font-[500]"
                        href="/categories/electrical"
                      >
                        {" "}
                        Electrical
                      </Link>
                    </span>
                    {/* <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span> */}
                  </button>
                  {/* <ul
                    className="bg-primary border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul> */}
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">
                      {" "}
                      <Link
                        className="text-[16px] uppercase leading-[28px] font-[500]"
                        href="/categories/hvac"
                      >
                        {" "}
                        HVAC
                      </Link>
                    </span>
                    {/* <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span> */}
                  </button>
                  {/* <ul
                    className="bg-heading border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul> */}
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">
                      {" "}
                      <Link
                        className="text-[16px] uppercase leading-[28px] font-[500]"
                        href="/categories/machinery"
                      >
                        {" "}
                        Machinery
                      </Link>
                    </span>
                    {/* <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span> */}
                  </button>
                  {/* <ul
                    className="bg-primary border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul> */}
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">
                      {" "}
                      {/* <Link href="/our-customer"> Lighting</Link> */}
                      <Link
                        className="text-[16px] uppercase  leading-[28px] font-[500]"
                        href="/categories/lighting"
                      >
                        {" "}
                        Lighting
                      </Link>
                    </span>
                    {/* <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span> */}
                  </button>
                  {/* <ul
                    className="bg-primary border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul> */}
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">
                      {" "}
                      <Link
                        className="text-[16px] uppercase  leading-[28px] font-[500]"
                        href="/categories/after-market"
                      >
                        {" "}
                        Aftermarket
                      </Link>
                    </span>
                    {/* <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span> */}
                  </button>
                  {/* <ul
                    className="bg-primary border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                  </ul> */}
                </li>
              </ul>
            </div>
            <li className="text-white hover:text-prbg-primary">
              <Link
                className="text-[16px] uppercase  leading-[28px] font-[500]"
                href="/our-customer"
              >
                {" "}
                Our Customers
              </Link>
            </li>
            {/* <li>
            <a href="#" className="text-white hover:text-prbg-primary">
             
            </a>
          </li> */}
            <li className="text-white hover:text-prbg-primary">
              <Link
                className="text-[16px] uppercase  leading-[28px] font-[500]"
                href="/news-and-events"
              >
                {" "}
                News and Events
              </Link>
            </li>
            {/* <li>
            <a href="#" className="text-white hover:text-prbg-primary">
              Carrer
            </a>
          </li> */}
            <li className="text-white hover:text-prbg-primary">
              <Link
                className="text-[16px] uppercase  leading-[28px] font-[500]"
                href="/career"
              >
                {" "}
                Career
              </Link>
            </li>
          </ul>
          {/* Get In Touch Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:block text-primary bg-white  px-4 py-1  ml-4"
          >
            Get In Touch
          </button>
        </div>

        {/* Responsive Menu */}
        <ul
          className={`lg:hidden flex flex-col items-center mt-4 space-y-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            className="text-white hover:text-prbg-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              className="text-[16px] uppercase  leading-[28px] font-[500]"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <div className="group inline-block">
            <button className="outline-none focus:outline-none   bg-primary rounded-sm flex items-center min-w-32">
              <span className="pr-1 text-[16px] uppercase  leading-[28px] font-[500] ">
                Categories
              </span>
              <span>
                <svg
                  className="fill-current white-fill h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className="bg-primary border rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li
                className="rounded-sm relative px-3 py-1 hover:bg-gray-100 "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link
                      className="text-[16px] uppercase  leading-[28px] font-[500]"
                      href="/categories/electrical"
                    >
                      {" "}
                      Electrical
                    </Link>
                  </span>
                </button>
              </li>
              <li
                className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link
                      className="text-[16px] uppercase  leading-[28px] font-[500]"
                      href="/categories/hvac"
                    >
                      {" "}
                      HVAC
                    </Link>
                  </span>
                </button>
              </li>
              <li
                className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link
                      className="text-[16px] uppercase  leading-[28px] font-[500]"
                      href="/categories/machinery"
                    >
                      {" "}
                      Machinery
                    </Link>
                  </span>
                </button>
              </li>
              <li
                className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link
                      className="text-[16px] uppercase  leading-[28px] font-[500]"
                      href="/categories/lighting"
                    >
                      {" "}
                      Lighting
                    </Link>
                  </span>
                </button>
              </li>
              <li
                className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link
                      className="text-[16px] uppercase  leading-[28px] font-[500]"
                      href="/categories/after-market"
                    >
                      {" "}
                      Aftermarket
                    </Link>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <li
            className="text-white hover:text-prbg-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              className="text-[16px] uppercase  leading-[28px] font-[500]"
              href="/our-customer"
            >
              {" "}
              Our Cusomers
            </Link>
          </li>

          <li
            className="text-white hover:text-prbg-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              className="text-[16px] uppercase  leading-[28px] font-[500]"
              href="/news-and-events"
            >
              {" "}
              News and Events
            </Link>
          </li>

          <li
            className="text-white hover:text-prbg-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              className="text-[16px] uppercase  leading-[28px] font-[500]"
              href="/career"
            >
              {" "}
              Career
            </Link>
          </li>
          <button
            onClick={() => {
              setIsOpen(true);
              setIsMenuOpen(!isMenuOpen);
            }}
            className=" lg:hidden text-primary bg-white max-w-[200px] px-4 py-1"
          >
            Get In Touch
          </button>
        </ul>
        {isOpen && (
          <>
            <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
              <ContactForm
                setIsOpen={setIsOpen}
                setIsOpenConfirmation={setIsOpenConfirmation}
              />
            </ModelFormContact>
          </>
        )}

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
    </nav>
  );
};

export default Header;


