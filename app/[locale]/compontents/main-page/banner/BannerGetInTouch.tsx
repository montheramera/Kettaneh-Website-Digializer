"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/compontents/ui/contact-form/ContactForm";
import ConfirmationMessage from "@/compontents/ui/confirmation-message/ConfirmationMessage";
import ModelFormContact from "@/compontents/ui/model/Model";

export default function BannerGetInTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-hidden="true"
      >
        <Image
          src="/images/eco/use2.jpg"
          alt="Kettaneh eco banner"
          width={1440}
          height={400}
          priority
          className="w-full h-auto shadow-xl object-cover"
        />
      </div>

      {isOpen && (
        <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
          <ContactForm
            setIsOpen={setIsOpen}
            setIsOpenConfirmation={setIsOpenConfirmation}
          />
        </ModelFormContact>
      )}

      {isOpenConfirmation && (
        <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
          <ConfirmationMessage
            setIsOpenConfirmation={setIsOpenConfirmation}
          />
        </ModelFormContact>
      )}
    </>
  );
}

