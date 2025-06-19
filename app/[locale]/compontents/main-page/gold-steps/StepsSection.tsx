import SectionHeader from "./SectionHeader";
import StepsGrid from "./StepsGrid";
import { Step, GridColumns } from "./types";

interface StepsSectionProps {
  stepsTitle: string;
  steps: Step[];
  isRTL?: boolean;
  gridCols?: GridColumns;
  className?: string;
}

const StepsSection: React.FC<StepsSectionProps> = ({
  stepsTitle,
  steps,
  isRTL = false,
  gridCols = "2",
  className = "mb-16",
}) => {
  return (
    <div className={className}>
      <SectionHeader title={stepsTitle} />
      <StepsGrid steps={steps} gridCols={gridCols} />
    </div>
  );
};

export default StepsSection;
