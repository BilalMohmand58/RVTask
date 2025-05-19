
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}

const RatingStars = ({ initialRating = 0, onChange, readOnly = false }: RatingStarsProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleSetRating = (value: number) => {
    if (readOnly) return;
    
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };
  
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          className={cn(
            "rating-star",
            (hoverRating || rating) >= star ? "filled" : "",
            readOnly ? "cursor-default" : "cursor-pointer"
          )}
          onClick={() => handleSetRating(star)}
          onMouseEnter={() => !readOnly && setHoverRating(star)}
          onMouseLeave={() => !readOnly && setHoverRating(0)}
        />
      ))}
    </div>
  );
};

export default RatingStars;
