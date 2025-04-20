import useSWR from 'swr';
import { Suspense } from 'react';
import Card from '../components/Card';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { fetchGames } from '../services/fetchGames';
import { GameProps } from '../types/game';

const GamesPage = () => {
  const { data: games, error, isLoading } = useSWR('api/games', fetchGames);

  if (error) {
    throw error;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {isLoading && <LoadingSkeleton amount={8} />}
      <Suspense fallback={<LoadingSkeleton amount={8} />}>
        {!isLoading && games?.map((game: GameProps) => (
          <Card key={game.id} game={game} />
        ))}
      </Suspense>
    </div>
  );
}

export default GamesPage;

