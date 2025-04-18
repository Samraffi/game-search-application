import { Link } from 'react-router';
import Rating from './components/Rating';

const GamesPage = () => {
  const game = {
    id: 1,
    src: 'https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1',
    title: 'Game Title',
    overview: 'This is a brief overview of the game.',
    releaseDate: '2023-10-01',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <Link
        to={`/games/${game.id}`}
        className="game-card block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
      >
        <div className="relative">
          <div className="game-poster">
            <img
              src={game.src}
              alt={game.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <Rating rating={4.7} />
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-1" title={game.title}>
            {game.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2" title={game.overview}>
            {game.overview}
          </p>
          <div className="mt-2 text-sm text-gray-500">
            {new Date(game.releaseDate).getFullYear()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GamesPage;
