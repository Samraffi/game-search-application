import GameSkeleton from "./GameSkeleton";

const LoadingGamesSkeleton = ({ amount }: { amount: number }) => {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <GameSkeleton key={index} />
      ))}
    </>
  )
};


export default LoadingGamesSkeleton;
