
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface CategoryProps {
  id: number;
  name: string;
  imageUrl: string;
  movieCount: number;
}

const CategoryItem = ({ id, name, imageUrl, movieCount }: CategoryProps) => {
  return (
    <Link to={`/categories/${id}`}>
      <Card className="overflow-hidden bg-movie-card border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-0 relative">
          <div className="relative">
            <img 
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              className="w-full h-[120px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          
          <div className="p-4">
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{movieCount} movies</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryItem;
