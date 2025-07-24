"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicPromotionalBanner = dynamic(() => import("./PromotionalBanner"), {
  ssr: false,
});

export default function FloatingPromotionalBanner() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center">
      <div className="relative w-full max-w-3xl mx-auto">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-white/80 rounded-full hover:bg-white text-2xl font-bold w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>
        <DynamicPromotionalBanner />
      </div>
    </div>
  );
}
