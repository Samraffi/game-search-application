import CardSkeleton from "./CardSkeleton";

const LoadingGamesSkeleton = ({ amount }: { amount: number }) => {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  )
};


export default LoadingGamesSkeleton;
