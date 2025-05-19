
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import MovieCard, { MovieProps } from "@/components/MovieCard";

interface MovieDetailProps extends MovieProps {
  description: string;
  director: string;
  cast: string[];
}

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailProps | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [similar, setSimilar] = useState<MovieProps[]>([]);
  const { toast } = useToast();

  // Mock movie data - in a real app this would be fetched from Supabase
  useEffect(() => {
    const fetchMovie = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Mock movie data based on ID
      const mockMovies: Record<string, MovieDetailProps> = {
        "1": {
          id: 1,
          title: "The Avengers",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          year: 2012,
          rating: 4.5,
          category: "Action",
          categoryId: 1,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Chris Hemsworth", "Jeremy Renner"],
        },
        "2": {
          id: 2,
          title: "The Shining",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          year: 1980,
          rating: 4.7,
          category: "Horror",
          categoryId: 2,
          description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
          director: "Stanley Kubrick",
          cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
        },
        "3": {
          id: 3,
          title: "Superbad",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxMjA1MQ@@._V1_.jpg",
          year: 2007,
          rating: 4.2,
          category: "Comedy",
          categoryId: 3,
          description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
          director: "Greg Mottola",
          cast: ["Michael Cera", "Jonah Hill", "Christopher Mintz-Plasse", "Bill Hader", "Seth Rogen"],
        },
        "4": {
          id: 4,
          title: "Toy Story",
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
          year: 1995,
          rating: 4.8,
          category: "Animated",
          categoryId: 4,
          description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
          director: "John Lasseter",
          cast: ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn"],
        },
      };
      
      // Get movie by ID
      const foundMovie = mockMovies[id || "1"];
      
      if (foundMovie) {
        setMovie(foundMovie);
        
        // Also fetch similar movies of the same category
        const mockSimilarMovies: MovieProps[] = [
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
        ].filter(m => m.categoryId === foundMovie.categoryId && m.id !== foundMovie.id);
        
        setSimilar(mockSimilarMovies);
      }
      
      setIsLoading(false);
    };
    
    fetchMovie();
  }, [id]);

  const handleRateMovie = async (rating: number) => {
    setUserRating(rating);
    setIsSubmitting(true);
    
    // Simulate API call to save rating
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    toast({
      title: "Rating submitted",
      description: `You rated ${movie?.title} ${rating} stars`,
    });
    
    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center py-16">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-movie-primary border-r-transparent"></div>
            <p className="mt-4">Loading movie details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Movie Not Found</h2>
            <p>The movie you're looking for couldn't be found.</p>
            <Button className="mt-6" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Movie Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-movie-background via-movie-background/80 to-transparent z-0" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-[-1]" />
          
          <div className="container py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Movie Poster */}
              <div className="md:col-span-1">
                <img
                  src={movie.posterUrl || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              
              {/* Movie Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <Badge className="mb-2 bg-movie-primary text-movie-card">
                    {movie.category}
                  </Badge>
                  <h1 className="text-4xl font-bold">{movie.title}</h1>
                  <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <span>Rating: {movie.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg">{movie.description}</p>
                
                <div>
                  <p className="text-muted-foreground">Director: <span className="text-movie-text">{movie.director}</span></p>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-2">Cast:</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <Badge key={index} variant="outline" className="bg-movie-card">
                        {actor}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Rating Section */}
                <div className="bg-movie-card p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-xl">Rate this movie</h3>
                  <div className="flex items-center gap-4">
                    <RatingStars 
                      initialRating={userRating} 
                      onChange={(rating) => setUserRating(rating)} 
                      readOnly={isSubmitting}
                    />
                    <span className="text-muted-foreground">
                      {userRating ? `${userRating}/5` : "Select rating"}
                    </span>
                  </div>
                  
                  <Button
                    className="bg-movie-primary text-movie-card hover:bg-movie-primary/90"
                    onClick={() => handleRateMovie(userRating)}
                    disabled={!userRating || isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Rating"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Movies */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6">Similar Movies</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similar.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetail;
