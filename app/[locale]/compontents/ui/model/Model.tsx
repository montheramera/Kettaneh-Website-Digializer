"use client";

import { ReactNode, useEffect } from "react";

interface ModelFormContactProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  children: ReactNode;
}

export default function ModelFormContact({
  setIsOpen,
  isOpen,
  children,
}: ModelFormContactProps) {
  useEffect(() => {
    // Prevent background scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed z-[200] inset-0 overflow-y-scroll lg:overflow-auto lg:pb-0 flex justify-center bg-heading bg-opacity-75">
        <div className="relative  lg:lg:p-6 rounded-md shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
}
