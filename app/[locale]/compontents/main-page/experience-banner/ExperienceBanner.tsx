
"use client"
import ConfirmationMessage from '@/compontents/ui/confirmation-message/ConfirmationMessage';
import ContactForm from '@/compontents/ui/contact-form/ContactForm';
import ModelFormContact from '@/compontents/ui/model/Model';
import Image from 'next/image';
import { useState } from 'react';

export default function ExperienceBanner() {
   const [isOpen, setIsOpen] = useState(false);
   const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  return (
    <>
      <div className="relative h-[308px] w-full font-avenir">
        {/* Background Image */}
        <Image
          src="/images/experence-banner.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Content Layer */}
        <div className="absolute inset-0 bg-paragraph bg-opacity-50 flex items-center flex-col lg:flex-row py-[8px] justify-between px-8 lg:px-56 lg:py-[96px] ">
          <div>
            <h1 className="text-white font-[800] text-[36px] leading-[40px]">
              Experience the Kettaneh Difference
            </h1>
            <p className="text-white mx-h-[768px] font-[500] text-[20px] leading-[28px] mt-[10px]">
              Connect with us to discover how we exceed expectations and foster
              strong <br />
              relationships
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary  text-white px-4 py-2"
          >
            Get In Touch
          </button>
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
}