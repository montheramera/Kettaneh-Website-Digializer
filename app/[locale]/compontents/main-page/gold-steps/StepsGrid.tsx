import StepCard from "./StepCard";
import { Step, GridColumns } from "./types";

interface StepsGridProps {
  steps: Step[];
  className?: string;
  gridCols?: GridColumns;
}

const StepsGrid: React.FC<StepsGridProps> = ({
  steps,
  className = "",
  gridCols = "2",
}) => {
  const gridClasses = {
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "6": "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div
      className={`grid ${gridClasses[gridCols]} gap-3 md:gap-4 max-w-[38rem] mx-auto ${className}`}
    >
      {steps.map((step, index) => (
        <StepCard
          key={`${step.icon}-${index}`}
          stepNumber={index + 1}
          icon={step.icon}
          title={step.title}
        />
      ))}
    </div>
  );
};

export default StepsGrid;
