
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard, { MovieProps } from "@/components/MovieCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState("for-you");
  
  // Mock recommendation data - in a real app this would come from Supabase
  const [recommendedMovies] = useState<MovieProps[]>([
    {
      id: 101,
      title: "The Matrix",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      year: 1999,
      rating: 4.8,
      category: "Sci-Fi",
      categoryId: 5
    },
    {
      id: 102,
      title: "Pulp Fiction",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1994,
      rating: 4.9,
      category: "Drama",
      categoryId: 6
    },
    {
      id: 103,
      title: "Inception",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      year: 2010,
      rating: 4.7,
      category: "Sci-Fi",
      categoryId: 5
    },
    {
      id: 104,
      title: "The Grand Budapest Hotel",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
      year: 2014,
      rating: 4.6,
      category: "Comedy",
      categoryId: 3
    },
  ]);
  
  const [topRatedMovies] = useState<MovieProps[]>([
    {
      id: 201,
      title: "The Shawshank Redemption",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      year: 1994,
      rating: 4.9,
      category: "Drama",
      categoryId: 6
    },
    {
      id: 202,
      title: "The Godfather",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 1972,
      rating: 4.9,
      category: "Drama",
      categoryId: 6
    },
    {
      id: 203,
      title: "The Dark Knight",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      year: 2008,
      rating: 4.9,
      category: "Action",
      categoryId: 1
    },
    {
      id: 204,
      title: "12 Angry Men",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      year: 1957,
      rating: 4.8,
      category: "Drama",
      categoryId: 6
    },
  ]);
  
  const [similarUserMovies] = useState<MovieProps[]>([
    {
      id: 301,
      title: "Parasite",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      year: 2019,
      rating: 4.7,
      category: "Drama",
      categoryId: 6
    },
    {
      id: 302,
      title: "Jojo Rabbit",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
      year: 2019,
      rating: 4.5,
      category: "Comedy",
      categoryId: 3
    },
    {
      id: 303,
      title: "The Truman Show",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
      year: 1998,
      rating: 4.6,
      category: "Drama",
      categoryId: 6
    },
    {
      id: 304,
      title: "Whiplash",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      year: 2014,
      rating: 4.7,
      category: "Drama",
      categoryId: 6
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Movie Recommendations</h1>
          <p className="text-muted-foreground mb-8">
            Discover new movies based on your preferences and ratings
          </p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="bg-movie-card/50">
              <TabsTrigger value="for-you">For You</TabsTrigger>
              <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
              <TabsTrigger value="similar-users">Similar Users</TabsTrigger>
            </TabsList>
            
            <TabsContent value="for-you" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Based on Your Preferences</h2>
                <p className="text-muted-foreground mb-6">
                  These recommendations are tailored to your category preferences and previous ratings
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {recommendedMovies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="top-rated" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Top Rated Movies</h2>
                <p className="text-muted-foreground mb-6">
                  The highest-rated movies across all categories
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {topRatedMovies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="similar-users" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">People Like You Also Enjoyed</h2>
                <p className="text-muted-foreground mb-6">
                  Movies highly rated by users with similar taste
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {similarUserMovies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recommendations;
