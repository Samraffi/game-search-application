import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GameSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 md:h-96 bg-gray-900">
        <Skeleton height="100%" />
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Skeleton height={300} />
            <div className="mt-4">
              <Skeleton width={100} />
              <Skeleton width={80} />
            </div>
          </div>
          <div className="md:col-span-2">
            <Skeleton count={5} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameSkeleton;
