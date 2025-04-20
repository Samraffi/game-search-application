import useSWR from "swr";
import { Suspense } from "react";
import { useParams } from "react-router";
import GameView from "../components/GameView";
import LoadingGameSkeleton from "../components/LoadingGameSkeleton";
import { fetchGame } from "../services/fetchGame";

const GamePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: game, error, isLoading } = useSWR(`api/games/${id}`, fetchGame);

  if (error) {
    throw error;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading && <LoadingGameSkeleton amount={8} />}
      <Suspense fallback={<LoadingGameSkeleton amount={8} />}>
        {!isLoading && <GameView key={game.id} game={game} />}
      </Suspense>
    </div>
  );
};

export default GamePage;
