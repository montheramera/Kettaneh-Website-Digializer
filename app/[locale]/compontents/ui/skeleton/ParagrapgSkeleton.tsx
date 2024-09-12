const ParagraphSkeleton = () => {
    return (
      <div className="space-y-4">
        <div className="w-full h-6 bg-skeleton rounded-md animate-pulse"></div>
        <div className="w-full h-6 bg-skeleton rounded-md animate-pulse"></div>
      </div>
    );
  };
  
  export default ParagraphSkeleton;