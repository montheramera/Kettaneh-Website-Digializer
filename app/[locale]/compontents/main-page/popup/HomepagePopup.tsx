"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomepagePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[900px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-10 h-8 w-8 rounded-full bg-white text-heading shadow-md"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>

        <Image
          src="/images/popup/web.jpg"
          alt="Homepage popup"
          width={900}
          height={600}
          className="hidden h-auto w-full rounded-lg object-cover md:block"
          priority
        />
        <Image
          src="/images/popup/mobile.jpg"
          alt="Homepage popup"
          width={430}
          height={700}
          className="block h-auto w-full rounded-lg object-cover md:hidden"
          priority
        />
      </div>
    </div>
  );
}

