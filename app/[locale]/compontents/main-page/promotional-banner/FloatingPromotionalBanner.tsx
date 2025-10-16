"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const DynamicPromotionalBanner = dynamic(() => import("./PromotionalBanner"), {
  ssr: false,
});

export default function FloatingPromotionalBanner() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
  };

  const handleBannerClick = () => {
    router.push("/gold");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center">
      <div
        className="relative w-full max-w-2xl mx-auto cursor-pointer"
        onClick={handleBannerClick}
      >
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 z-10 bg-white/80 rounded-full hover:bg-white text-xl font-bold w-6 h-6 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>
        <DynamicPromotionalBanner />
      </div>
    </div>
  );
}
