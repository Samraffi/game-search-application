import Rating from "../components/Rating";
import { GameProps } from "../types/game";

const GameView = ({ game }: { game: GameProps }) => {
  return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-gray-900">
          {game?.background_image && (
            <img
              src={game?.background_image}
              alt={game?.title}
              className="w-full h-full object-cover opacity-50"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {game?.title}
            </h1>
            <div className="flex items-center space-x-4">
              <Rating rating={game?.rating || 0} />
              <span className="text-gray-300">
                {new Date(game?.released ?? '').getFullYear()}
              </span>
              {game?.runtime && (
                <span className="text-gray-300">
                  {game?.runtime} min
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <img
                  src={game?.src}
                  alt={game?.title}
                  className="w-full"
                />
              </div>
              {game?.genres && game?.genres.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-bold text-gray-700 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {game?.genres?.map((genre: { id: number; name: string }, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {game?.description_raw}
                </p>
              </section>

              {game?.developers && game?.developers.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Developers</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {game?.developers?.map((developer: { id: number; name: string }, index: number) => (
                      <div key={index} className="text-gray-700">
                        { developer.name }
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default GameView;
