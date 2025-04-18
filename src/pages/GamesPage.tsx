import { useEffect, useState } from "react";
import Card from "../components/Card";
import { GameProps } from "../types/game";

const GamesPage = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    const apiKey = '833dd8c1d40a4fd1a03174dee01b887b';

    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log('Список игр:', data.results);

        setGames(data.results);
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
