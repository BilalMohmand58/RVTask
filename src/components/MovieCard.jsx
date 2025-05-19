
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, posterUrl, year, rating, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={`/movie/${id}`}>
      <Card 
        className="movie-card overflow-hidden bg-movie-card border-0 shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 relative">
          <img 
            src={posterUrl || "/placeholder.svg"}
            alt={title}
            className="movie-poster w-full h-[300px]"
            onError={(e) => {
              e.target.src = "/placeholder.svg";
            }}
          />
          
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-90"
          }`}>
            <Badge className="absolute top-3 right-3 bg-movie-primary text-movie-card">
              {category}
            </Badge>
            <h3 className="font-medium text-white truncate">{title}</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-gray-300">{year}</span>
              <div className="flex items-center">
                <Star size={14} className="fill-movie-primary text-movie-primary mr-1" />
                <span className="text-sm">{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
