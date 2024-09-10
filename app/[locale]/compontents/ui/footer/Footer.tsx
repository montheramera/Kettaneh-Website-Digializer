import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" font-avenir ">
      <div className=" bg-white   lg:pt-[64px] lg:pb-[48px] px-5 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between max-w-[1440px] m-auto">
          {/* Logo and Description */}
          <div className=" md:mb-0">
            <Image
              src="/images/footer-logo.png"
              alt="Kettaneh Logo"
              priority
              width={233}
              height={56.29}
              className="mb-[16px]"
            />
            <p className="text-[16px] font-[400] text-paragraph leading-[24px] lg:max-w-[320px]">
              F. A. Kettaneh & Co LTD Jordan has a long tradition of being a
              first-class company - one that has always exceeded the increasing
              expectations of its customers
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-10 flex-grow lg:max-w-[700px] justify-between w-full md:w-auto mt-[30px] lg:mt-0 ">
            <div className="  md:w-auto md:mb-0">
              <h4
                style={{ fontWeight: 900 }}
                className="font-[900] text-[20px] leading-[24px] text-primary mb-[16px] uppercase"
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className=" font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Our Customer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    News and Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className=" md:w-auto  md:mb-0">
              <h4 className="font-[900] text-[20px] leading-[20px] text-primary mb-[16px] uppercase">
                Categories
              </h4>
              <ul className="flex flex-col gap-3 ">
                <li>
                  <a
                    href="#"
                    className="font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Electrical
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    HVAC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Machinery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Lighting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-light text-paragraph leading-[24px] text-[14px]"
                  >
                    Aftermarket
                  </a>
                </li>
              </ul>
            </div>
            <div className=" md:w-auto">
              <h4 className="font-[900] text-[20px] leading-[20px] text-primary mb-[16px] uppercase">
                Connect with us
              </h4>
              <p className="font-light text-paragraph leading-[24px] text-[14px] flex gap-2">
                <a className="flex" href="https://wa.me/+96264398642">
                  <Image
                    src="/images/icons/whatsapp.png"
                    alt="Kettaneh Logo"
                    priority
                    width={24}
                    height={24}
                  />{" "}
                  <span>+962 6 4398642</span>
                </a>
              </p>
              <p className="font-[500] text-paragraph leading-[24px]  text-[16px] flex gap-2 my-[20px]">
                <Image
                  src="/images/icons/marker-pin-02.png"
                  alt="Kettaneh Logo"
                  priority
                  width={24}
                  height={24}
                  className="max-h-[24px] max-w-[24px]"
                />
                <span>
                  F.A. Kettaneh & Co, Al Quds <br /> St 338, Amman, Jordan
                </span>
              </p>
              <div className="flex space-x-4 items-center">
                {/* <a href="#">
                  <Image
                    src="/images/icons/whatsapp.png"
                    alt="WhatsApp"
                    priority
                    width={24}
                    height={24}
                  />
                </a> */}
                <a
                  href="https://www.instagram.com/kettanehjo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src="/path-to-instagram-icon.png" alt="Instagram" /> */}
                  <Image
                    src="/images/icons/insta.png"
                    alt="Kettaneh Logo"
                    priority
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.facebook.com/KettanehJo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src="/path-to-facebook-icon.png" alt="Facebook" /> */}
                  <Image
                    src="/images/icons/facebook.png"
                    alt="Facebook"
                    priority
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/f.a.kettaneh&coltdinjordansince1948/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src="/path-to-linkedin-icon.png" alt="LinkedIn" /> */}
                  <Image
                    src="/images/icons/linkedin.png"
                    alt="LinkedIn"
                    priority
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCN_3mZJzPJrh-gAkWwd0kfw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/youtube.png"
                    alt="YouTube"
                    priority
                    width={24}
                    height={24}
                  />
                </a>
                <a href="tel:+96264398642">
                  {/* <img src="/path-to-whatsapp-icon.png" alt="WhatsApp" /> */}
                  <Image
                    src="/images/icons/call.png"
                    alt="call"
                    priority
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
      <div className="py-[48px] mt-[30px] lg:mt-0 text-center md:text-left font-[350] text-[16px] leading-[24px] text-paragraph bg-[#F9FAFB] ">
        <div className="px-5  lg:px-20">
          <div className="max-w-[1440px] lg:m-auto flex flex-col  md:flex-row lg:justify-between lg:items-center">
            <p>© 2024 Kettaneh. All rights reserved.</p>
            <p className="flex justify-between lg:justify-normal space-x-4 mt-4 md:mt-0">
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
