"use client"

import React, { useState } from "react";
import ModelFormContact from "../model/Model";
import ConfirmationMessage from "../confirmation-message/ConfirmationMessage";
import ContactForm from "../contact-form/ContactForm";
interface CallToActionProps {
  background?: string;
}
const CallToAction: React.FC<CallToActionProps> = ({ background }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  return (
    <section>
      <div className="">
        <div
          style={{ background: background || "#BB4A52" }}
          className="px-5 lg:px-20 py-[30px] lg:py-0 my-[30px] min-w-full  lg:h-[254px] lg:min-h-[254px] "
        >
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center w-full lg:min-h-[254px] max-w-[1440px] m-auto text-white">
            <div className="text-center md:text-left lg:max-w-[768px]">
              <h2 className="text-[30px] lg:text-[36px] font-[800] leading-[40px] mb-[16px]">
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
        </div>
      </div>
      {isOpen && (
        <>
          <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
            <ContactForm
              setIsOpen={setIsOpen}
              setIsOpenConfirmation={setIsOpenConfirmation}
              // categories={categories}
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
    </section>
  );
};

export default CallToAction;
