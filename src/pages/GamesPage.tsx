import { useEffect, useState } from "react";
import Card from "../components/Card";
import { GameProps } from "../types/game";
import { fetchGames } from "../services/fetchGames";

const GamesPage = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetchGames()
      .then(data => {
        setGames(data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesPage;
