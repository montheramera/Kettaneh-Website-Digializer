"use client"

import React, { useState } from "react";
import ModelFormContact from "../model/Model";
import ConfirmationMessage from "../confirmation-message/ConfirmationMessage";
import ContactForm from "../contact-form/ContactForm";
interface CallToActionProps {
  background?: string; // Optional background property, can be a string (e.g., URL, color code)
}
const CallToAction: React.FC<CallToActionProps> = ({ background }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  return (
    <>
      <div className="  mb-96 lg:mb-[170px]  ">
        <div
          style={{ background: background || "#BB4A52" }}
          className=" hidden  lg:block z-1 min-w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[254px] lg:min-h-[254px] px-20 "
        >
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center w-full lg:min-h-[254px] max-w-[1440px] m-auto text-white">
            <div className="text-center md:text-left lg:max-w-[768px]">
              <h2 className="text-[36px] font-[800] leading-[40px] mb-[16px]">
                Experience the Kettaneh Difference
              </h2>
              <p className="text-[18px] font-[500] leading-[28px] ">
                Connect with us to discover how we exceed expectations and
                foster strong relationships
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setIsOpen(true)}
                className=" text-primary bg-white  px-4 py-1  ml-4 text-[18px] font-[500] leading-[27px]"
              >
                Get In Touch
              </button>
            </div>
          </div>
          {/* <div className="flex justify-center  ">
            <section className="hidden lg:flex absolute z-1 bottom-[-100px] flex-col bg-white shadow-lg mx-auto max-w-full sm:max-w-[350px] lg:min-w-[1024px] xl:min-w-[1440px]">
              <div className="flex flex-col md:flex-row justify-between gap-10 items-center w-full p-[64px]">
                <div className="text-center md:text-left lg:max-w-[768px]">
                  <h2 className="text-[36px] font-[800] leading-[40px] mb-[16px]">
                    Experience the Kettaneh Difference
                  </h2>
                  <p className="text-[20px] font-[500] leading-[28px] text-paragraph">
                    Connect with us to discover how we exceed expectations and
                    foster strong relationships
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white py-2 px-6  hover:bg-red-700 transition-all"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </section>
          </div> */}
        </div>

        <div
          style={{ background: background || "#BB4A52" }}
          className=" block  lg:hidden relative  z-1 min-w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[254px] lg:min-h-[254px]"
        >
          <div className="flex justify-center ">
            <section className="block  lg:hidden absolute z-1 bottom-[-300px]  flex-col items-center p-[64px] bg-white shadow-lg mx-auto max-w-full sm:max-w-[350px] ">
              <div className="">
                <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
                  <div className="text-center md:text-left lg:max-w-[768px]">
                    <h2 className="text-[36px] font-[800] leading-[40px] mb-[16px]">
                      Experience the Kettaneh Difference
                    </h2>
                    <p className="text-[28px] font-[500] leading-[28px] text-paragraph">
                      Connect with us to discover how we exceed expectations and
                      foster strong relationships
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    {/* <button
                      onClick={() => setIsOpen(true)}
                      className="bg-primary text-white py-2 px-6  font-[500] transition-all"
                    >
                      Get In Touch
                    </button> */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="hidden lg:block text-primary bg-white  px-4 py-1  ml-4 text-[18px] font-[500] leading-[27px]"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default CallToAction;
