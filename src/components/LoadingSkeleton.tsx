import CardSkeleton from "./CardSkeleton";

const LoadingSkeleton = ({ amount }: { amount: number }) => {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  )
};


export default LoadingSkeleton;
