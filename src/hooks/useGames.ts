import { useEffect, useState } from "react";
import { fetchGames } from "../services/fetchGames";
import { GameProps } from "../types/game";

export const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchGames()
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  
  return { games, loading, error };
}