"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import ModelFormContact from "../model/Model";
import ConfirmationMessage from "../confirmation-message/ConfirmationMessage";
import Link from "next/link";
// import logo from "../public/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  return (
    <nav className="bg-primary lg:px-20 p-8 text-white font-[500] text-[18px]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={36.18}
            priority
          />
        </div>
        {/* Hamburger Menu (visible on small screens) */}
        <div className="block lg:hidden">
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
          className={`hidden lg:flex space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* <li className="text-white hover:text-prbg-primary">
            <Link href="/">Home</Link>
          </li> */}

          <li className="text-white hover:text-prbg-primary">
            <Link href="/about">About Us</Link>
          </li>
          <div className="group inline-block">
            <button className="outline-none focus:outline-none   bg-primary rounded-sm flex items-center min-w-32">
              <span className="pr-1 font-semibold flex-1">Categories</span>
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
              className="bg-heading z-[2000000] border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link href="/categories/electrical"> Electrical</Link>
                  </span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link href="/categories/hvac"> HVAC</Link>
                  </span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-heading border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link href="/categories/machinery"> Machinery</Link>
                  </span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    {/* <Link href="/our-customer"> Lighting</Link> */}
                    <Link href="/categories/lighting"> Lighting</Link>
                  </span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">
                    {" "}
                    <Link href="/our-customer"> Aftermarket</Link>
                  </span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                  <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* <li>
            <a href="#" className="text-white hover:text-prbg-primary">
              Our Customer
            </a>
          </li> */}
          <li className="text-white hover:text-prbg-primary">
            <Link href="/our-customer"> Our Cusomers</Link>
          </li>
          {/* <li>
            <a href="#" className="text-white hover:text-prbg-primary">
             
            </a>
          </li> */}
          <li className="text-white hover:text-prbg-primary">
            <Link href="/news-and-events"> News and Events</Link>
          </li>
          {/* <li>
            <a href="#" className="text-white hover:text-prbg-primary">
              Carrer
            </a>
          </li> */}
          <li className="text-white hover:text-prbg-primary">
            <Link href="/career"> Career</Link>
          </li>
        </ul>
        {/* Get In Touch Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="hidden lg:block text-primary bg-white  px-4 py-2  ml-4"
        >
          Get In Touch
        </button>
      </div>

      {/* Responsive Menu */}
      <ul
        className={`lg:hidden flex flex-col mt-4 space-y-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* <li className="text-white hover:text-prbg-primary">
          <Link href="/">Home</Link>
        </li> */}

        <li className="text-white hover:text-prbg-primary">
          <Link href="/about">About Us</Link>
        </li>
        <div className="group inline-block">
          <button className="outline-none focus:outline-none   bg-primary rounded-sm flex items-center min-w-32">
            <span className="pr-1 font-semibold ">Categories</span>
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
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">
                  {" "}
                  <Link href="/categories/electrical"> Electrical</Link>
                </span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">
                  {" "}
                  <Link href="/categories/hvac"> HVAC</Link>
                </span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">
                  {" "}
                  <Link href="/categories/machinery"> Machinery</Link>
                </span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">
                  {" "}
                  {/* <Link href="/our-customer"> Lighting</Link> */}
                  <Link href="/categories/lighting"> Lighting</Link>
                </span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">
                  {" "}
                  <Link href="/our-customer"> Aftermarket</Link>
                </span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out white-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-primary border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <li>
          <a href="#" className="text-white hover:text-prbg-primary">
            Our Cusomers
          </a>
        </li> */}
        <li className="text-white hover:text-prbg-primary">
          <Link href="/our-customer"> Our Cusomers</Link>
        </li>
        {/* <li>
          <a href="#" className="text-white hover:text-prbg-primary">
            News and Events
          </a>
        </li> */}
        <li className="text-white hover:text-prbg-primary">
          <Link href="/news-and-events"> News and Events</Link>
        </li>
        {/* <li>
          <a href="#" className="text-white hover:text-prbg-primary">
            Carrer
          </a>
        </li> */}
        <li className="text-white hover:text-prbg-primary">
          <Link href="/career"> Career</Link>
        </li>
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
    </nav>
  );
};

export default Header;
