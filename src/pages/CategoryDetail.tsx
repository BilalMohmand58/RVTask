
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard, { MovieProps } from "@/components/MovieCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [categoryName, setCategoryName] = useState("");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [sortBy, setSortBy] = useState("rating");
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock data - in a real app this would be fetched from Supabase
  useEffect(() => {
    const fetchCategoryData = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Mock category data
      const categories = [
        { id: "1", name: "Action" },
        { id: "2", name: "Horror" },
        { id: "3", name: "Comedy" },
        { id: "4", name: "Animated" },
        { id: "5", name: "Drama" },
        { id: "6", name: "Sci-Fi" },
      ];
      
      // Find category by ID
      const category = categories.find((c) => c.id === id);
      if (category) {
        setCategoryName(category.name);
        
        // Mock movies for this category
        const categoryMovies: MovieProps[] = [
          {
            id: 1,
            title: "The Avengers",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            year: 2012,
            rating: 4.5,
            category: "Action",
            categoryId: 1
          },
          {
            id: 11,
            title: "Iron Man",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
            year: 2008,
            rating: 4.7,
            category: "Action",
            categoryId: 1
          },
          {
            id: 12,
            title: "Spider-Man: No Way Home",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
            year: 2021,
            rating: 4.6,
            category: "Action",
            categoryId: 1
          },
          {
            id: 13,
            title: "Black Panther",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
            year: 2018,
            rating: 4.5,
            category: "Action",
            categoryId: 1
          },
          {
            id: 14,
            title: "Guardians of the Galaxy",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg",
            year: 2014,
            rating: 4.6,
            category: "Action",
            categoryId: 1
          },
          {
            id: 15,
            title: "John Wick",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
            year: 2014,
            rating: 4.4,
            category: "Action",
            categoryId: 1
          },
          {
            id: 16,
            title: "Mad Max: Fury Road",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            year: 2015,
            rating: 4.7,
            category: "Action",
            categoryId: 1
          },
          {
            id: 17,
            title: "Mission: Impossible - Fallout",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg",
            year: 2018,
            rating: 4.6,
            category: "Action",
            categoryId: 1
          },
        ].filter(m => m.categoryId === parseInt(id || "1"));
        
        setMovies(categoryMovies);
      }
      
      setIsLoading(false);
    };
    
    fetchCategoryData();
  }, [id]);

  const sortMovies = (movies: MovieProps[]) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
      case "title":
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "year-desc":
        sortedMovies.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        sortedMovies.sort((a, b) => a.year - b.year);
        break;
      case "rating":
      default:
        sortedMovies.sort((a, b) => b.rating - a.rating);
        break;
    }
    
    return sortedMovies;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-movie-primary border-r-transparent"></div>
              <p className="mt-4">Loading category...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">{categoryName} Movies</h1>
                
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] bg-movie-card">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-movie-card">
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="year-desc">Newest</SelectItem>
                      <SelectItem value="year-asc">Oldest</SelectItem>
                      <SelectItem value="title">Title (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {sortMovies(movies).map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p>No movies found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
