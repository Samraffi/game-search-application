import useSWR from 'swr';
import { Suspense } from 'react';
import Card from '../components/Card';
import LoadingGamesSkeleton from '../components/LoadingGamesSkeleton';
import { fetchGames } from '../services/fetchGames';
import { GameCardProps } from '../types/game';

const GamesPage = () => {
  const { data: games, error, isLoading } = useSWR('games', fetchGames);

  console.log('games', games);
  console.log('error', error);
  if (error) {
    throw error;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {isLoading && <LoadingGamesSkeleton amount={8} />}
      <Suspense fallback={<LoadingGamesSkeleton amount={8} />}>
        {!isLoading && games?.map((game: GameCardProps) => (
          <Card key={game?.id} game={game} />
        ))}
      </Suspense>
    </div>
  );
}

export default GamesPage;

