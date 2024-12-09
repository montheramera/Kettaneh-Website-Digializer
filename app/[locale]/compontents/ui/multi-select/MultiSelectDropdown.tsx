import React, { useState } from 'react';

interface Option {
  id: number;
  title: string;
}

interface MultiSelectDropdownProps {
  options: any[];
  selectedOptions: number[];
  onChange: (selected: number[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<any[]>([]);
  let updatedValues: any[] = [];
  
  const handleCheckboxChange = (value: any) => {
    updatedValues = [...selectedValues];

    if (updatedValues.includes(value)) {
      updatedValues = updatedValues.filter((item) => item.id !== value.id);
    } else {
      updatedValues.push(value);
    }

    setSelectedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className="relative text-left w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        role='button'
        type='button'
        className="mt-1 w-full text-paragraph border border-[#d0d5dd] shadow-sm p-3 flex flex-row items-center justify-between"
      >
        <span>{selectedValues.length > 0 ? `${selectedValues.map((el) => el.category.heading)} selected` : 'Select options'}</span>
        <svg className={`-mr-1 ml-2 h-5 w-5 ${isOpen ? '' : 'rotate-180'} gr`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l4 5a1 1 0 01-1.664 1.11L10 5.793 6.832 9.555a1 1 0 11-1.664-1.11l4-5A1 1 0 0110 3z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 z-50 text-paragraph mt-2 w-full rounded-md shadow-lg bg-white border border-[#d0d5dd] focus:outline-none">
          <div className="py-3">
            {options.length === 0 ? (
              <div className="flex justify-center items-center py-4">
                <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2.5a5.5 5.5 0 00-5.5 5.5h2.5z"></path>
                </svg>
              </div>
            ) : (
              options.map((option, index) => (
                <label key={index} className="flex flex-row items-center justify-start gap-4 px-4 mt-2 text-base font-normal">
                  <input
                    type="checkbox"
                    value={option.id}
                    checked={selectedValues.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className='w-auto'
                  />
                  <span>{option.title}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;