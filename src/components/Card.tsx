import { Link } from 'react-router';
import Rating from './Rating';
import { CardProps } from '../types/game';

const Card = (game: CardProps) => {
  return (
    <Link
      to={`/games/${game.id}`}
      className="game-card block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <div className="relative">
        <div className="game-poster">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Rating rating={game.rating ?? 0} />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1" title={game.name}>
          {game.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2" title={game.name}>
          {game.name} 
          {/* Add a description or any other text here if needed */}
        </p>
        <div className="mt-2 text-sm text-gray-500">
          {new Date(game.released).getFullYear()}
        </div>
      </div>
    </Link>
  );
}

export default Card;
