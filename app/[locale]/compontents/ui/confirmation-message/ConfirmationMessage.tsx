"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
interface FormContactProps {

  setIsOpenConfirmation: (isOpen: boolean) => void;
}

export default function ConfirmationMessage({ setIsOpenConfirmation }: FormContactProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center p-4 font-avenir ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full lg:min-w-[598px]">
        <div className="flex justify-end">
          <button
            aria-label="Close"
            className="text-paragraph text-[40px]"
            onClick={() => setIsOpenConfirmation(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center  mt-[40px] ">
          <div className="relative w-[166.67px] h-[166.67px] mb-6">
            {/* You can replace the below div with Next.js Image component to render your checkmark icon */}
            <Image
              src="/images/confirm.png"
              alt="confirm"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-[36px] leading-[40px] font-[800] text-[#101828] mt-[48px] max-w-[518px] text-center">
            We’ve Received Your <br /> Message!
          </h2>
          <p className="text-paragraph text-[18px] leading-[28px] font-[400]  text-center mt-[8px]">
            Thank you for getting in touch. Our team will respond to you as soon
            as possible.
          </p>
          <div className="flex items-center justify-center w-full mt-[48px]">
            <button
              className="bg-primary text-white text-[16px] leading-[24px] font-[800] px-[12px] py-[12px] w-full"
                          onClick={() => {
                              setIsOpenConfirmation(false);
                              router.push("/en")
                          }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
