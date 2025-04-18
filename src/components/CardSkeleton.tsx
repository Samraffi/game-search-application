import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    <div className="game-card block bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <Skeleton height={200} width="100%" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Skeleton width={60} height={12} />
        </div>
      </div>

      <div className="p-4">
        <Skeleton height={20} width="80%" className="mb-2" />
        <Skeleton height={14} width="100%" className="mb-2" />
        <Skeleton height={12} width="30%" />
      </div>
    </div>
  );
};

export default CardSkeleton;
