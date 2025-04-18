interface RatingProps {
  rating: number;
  showText?: boolean;
}

const Rating = ({ rating, showText = true }: RatingProps) => {
  const stars = Math.round((rating));
  
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-lg">
          {star <= stars ? '★' : '☆'}
        </span>
      ))}
      {showText && (
        <span className="ml-2 text-white text-sm">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;
