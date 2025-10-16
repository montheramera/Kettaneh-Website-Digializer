import React from "react";

export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} !flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-primary shadow-2xl hover:shadow-3xl rounded-full p-5 lg:p-6 transition-all duration-300 group`}
      onClick={onClick}
      aria-label="Next"
      style={{ display: 'flex !important' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-800 group-hover:text-white transition-colors"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} !flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-primary shadow-2xl hover:shadow-3xl rounded-full p-5 lg:p-6 transition-all duration-300 group`}
      onClick={onClick}
      aria-label="Previous"
      style={{ display: 'flex !important' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-800 group-hover:text-white transition-colors"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};


