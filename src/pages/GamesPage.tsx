import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import { useGames } from "../hooks/useGames";

const GamesPage = () => {
  const { games, loading, error } = useGames();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }
  
  if (error) {
    return <div className="text-red-500">Ошибка: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesPage;
