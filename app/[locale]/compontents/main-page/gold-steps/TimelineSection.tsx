"use client";
import { useState } from "react";

interface TimelineListItem {
  rank?: number;
  title: string;
  subtitle?: string;
}

interface TimelineItem {
  period: string;
  date: string;
  content?: string;
  listItems?: TimelineListItem[];
}

interface TimelineSectionProps {
  timelineTitle: string;
  timeline: TimelineItem[];
  isRTL?: boolean;
}

interface TimelineItemHeaderProps {
  date: string;
  period: string;
  isOpen: boolean;
  onClick: () => void;
}

interface TimelineItemContentProps {
  item: TimelineItem;
  isOpen: boolean;
}

interface TimelineListItemProps {
  listItem: TimelineListItem;
  index: number;
}

interface TimelineAccordionItemProps {
  item: TimelineItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

// Individual Timeline List Item Component
const TimelineListItem: React.FC<TimelineListItemProps> = ({
  listItem,
  index,
}) => (
  <div
    className="flex items-center justify-between bg-white rounded-md px-4 py-3 border border-gray-200 hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up opacity-0"
    style={{
      animationDelay: `${100 + index * 50}ms`,
      animationFillMode: "forwards",
    }}
  >
    {/* Rank/Number */}
    {listItem.rank && (
      <span className="text-sm font-bold text-gray-600 w-8 text-center">
        {listItem.rank}.
      </span>
    )}

    {/* Main Content */}
    <div className="flex-1 px-3">
      <div className="text-sm font-medium text-gray-800">{listItem.title}</div>
      {listItem.subtitle && (
        <div className="text-xs text-gray-600 mt-1">{listItem.subtitle}</div>
      )}
    </div>
  </div>
);

// Timeline Item Header Component
const TimelineItemHeader: React.FC<TimelineItemHeaderProps> = ({
  date,
  period,
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="w-full flex items-center px-6 py-4 hover:bg-gray-300 transition-all duration-300 focus:outline-none group transform hover:scale-[1.01]"
  >
    {/* Left side - Dropdown Arrow */}
    <div className="flex items-center w-8">
      <svg
        className={`w-4 h-4 text-black transition-all duration-300 ease-out group-hover:text-red-500 ${
          isOpen ? "rotate-180 scale-110" : "hover:scale-110"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>

    {/* Center - Date */}
    <span className="text-gray-800 font-medium text-base flex-1 text-center transition-all duration-300 group-hover:text-red-600 group-hover:scale-105">
      {date}
    </span>

    {/* Right - Period Text */}
    <span className="font-medium text-gray-800 text-base w-24 text-right transition-all duration-300 group-hover:text-red-600 group-hover:scale-105">
      {period}
    </span>
  </button>
);

// Timeline Item Content Component
const TimelineItemContent: React.FC<TimelineItemContentProps> = ({
  item,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="px-6 pb-4 pt-4 bg-gray-100 border-t border-gray-300 animate-slide-down opacity-0"
      style={{ animationFillMode: "forwards" }}
    >
      {/* List Items Display */}
      {item.listItems && item.listItems.length > 0 ? (
        <div className="space-y-2">
          {item.listItems.map((listItem, listIndex) => (
            <TimelineListItem
              key={listIndex}
              listItem={listItem}
              index={listIndex}
            />
          ))}
        </div>
      ) : (
        /* Default text content if no list items */
        <p
          className="text-sm text-gray-700 animate-fade-in-up opacity-0"
          style={{
            animationDelay: "100ms",
            animationFillMode: "forwards",
          }}
        >
          {item.content ||
            `تفاصيل جائزة ${item.period} - تاريخ السحب: ${item.date}`}
        </p>
      )}
    </div>
  );
};

// Timeline Accordion Item Component
const TimelineAccordionItem: React.FC<TimelineAccordionItemProps> = ({
  item,
  index,
  isOpen,
  onToggle,
}) => (
  <div
    className="bg-[#EBEBEB] rounded-lg overflow-hidden shadow-sm transform transition-all duration-500 ease-out animate-slide-in-left opacity-0 hover:shadow-md hover:scale-[1.02]"
    style={{
      animationDelay: `${1400 + index * 100}ms`,
      animationFillMode: "forwards",
    }}
  >
    <TimelineItemHeader
      date={item.date}
      period={item.period}
      isOpen={isOpen}
      onClick={onToggle}
    />
    <TimelineItemContent item={item} isOpen={isOpen} />
  </div>
);

// Timeline Header Component
const TimelineHeader: React.FC<{ title: string }> = ({ title }) => (
  <div
    className="text-center mb-6 animate-fade-in-up opacity-0"
    style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
  >
    <h3 className="text-xl font-bold text-red-500 transform transition-all duration-500 hover:scale-105">
      {title}
    </h3>
  </div>
);

// Main Timeline Container Component
const TimelineContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    className="w-full max-w-lg border-2 border-black rounded-xl bg-white p-6 transform transition-all duration-700 ease-out animate-scale-up opacity-0"
    style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
  >
    {children}
  </div>
);

// Custom hook for timeline state management
const useTimelineState = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return { openItems, toggleItem };
};

const TimelineSection: React.FC<TimelineSectionProps> = ({
  timelineTitle,
  timeline,
  isRTL = false,
}) => {
  const { openItems, toggleItem } = useTimelineState();

  return (
    <div
      className="flex justify-center py-8 animate-fade-in-up opacity-0"
      style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
    >
      <TimelineContainer>
        <TimelineHeader title={timelineTitle} />

        {/* Timeline Items - Accordion */}
        <div className="space-y-3">
          {timeline.map((item, index) => (
            <TimelineAccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </TimelineContainer>
    </div>
  );
};

export default TimelineSection;
