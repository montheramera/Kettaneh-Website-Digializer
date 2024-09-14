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
        className="mt-1 w-full text-paragraph border border-[#d0d5dd] rounded-md shadow-sm p-3 flex flex-row items-center justify-between"
      >
        <span>{selectedValues.length > 0 ? `${selectedValues.map((el)=> el.category.heading)} selected` : 'Select options'}</span>
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 3a1 1 0 01.832.445l4 5a1 1 0 01-1.664 1.11L10 5.793 6.832 9.555a1 1 0 11-1.664-1.11l4-5A1 1 0 0110 3z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 z-50 text-paragraph mt-2 w-full rounded-md shadow-lg bg-white border border-[#d0d5dd] focus:outline-none">
          <div className="py-3">
            {options.map((option, index) => (
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
