import { Star, StarHalf } from "lucide-react";

const Rating = ({ value, max = 5 }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="stroke-[--primary] fill-[--primary] !w-4 !h-4" />
      ))}
      {hasHalfStar && 
      <div className={`w-5`}>
        <StarHalf className="stroke-[--primary] fill-[--primary] absolute z-10 !w-4 !h-4" />
        <Star stroke="gray" className="stroke-neutral-300 fill-neutral-300 absolute !w-4 !h-4" />
      </div>}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i + fullStars} className="stroke-neutral-300 fill-neutral-300 !w-4 !h-4" />
      ))}
    </div>
  );
};

export default Rating;
