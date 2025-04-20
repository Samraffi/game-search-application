import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { fetchGames } from "../services/fetchGames";
import { GameProps } from "../types/game";

export const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    fetchGames()
      .then(data => {
        setGames(data);
      })
      .catch(error => {
        showBoundary(error); // Pass the error to the nearest ErrorBoundary
      });
  }, []);
  
  return { games };
}