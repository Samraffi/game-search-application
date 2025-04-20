import { Suspense, lazy } from "react";
// import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import { useGames } from "../hooks/useGames";

const GamesPage = () => {
  const { games } = useGames();

  const Card = lazy(() => import('../components/Card'));
  const LoadingSkeleton = ({ amount }: { amount: number }) => {
    return (
      <>
        {Array.from({ length: amount }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* {games.map((game) => (
        <Card key={game.id} game={game} />
      ))} */}
      <Suspense fallback={<LoadingSkeleton amount={8} />}>
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </Suspense>
      {/* {error && <div className="text-red-500">Ошибка: {error.message}</div>} */}
    </div>
  );
};

export default GamesPage;
