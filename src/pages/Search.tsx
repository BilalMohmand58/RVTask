
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard, { MovieProps } from "@/components/MovieCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("movies");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock categories data - in a real app this would come from Supabase
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "1", name: "Action" },
    { id: "2", name: "Horror" },
    { id: "3", name: "Comedy" },
    { id: "4", name: "Animated" },
  ];

  // Mock search results - in a real app this would be fetched from Supabase
  const mockMovies: MovieProps[] = [
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
      id: 2,
      title: "The Dark Knight",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      year: 2008,
      rating: 4.9,
      category: "Action",
      categoryId: 1
    },
    {
      id: 3,
      title: "The Shining",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      year: 1980,
      rating: 4.7,
      category: "Horror",
      categoryId: 2
    },
    {
      id: 4,
      title: "Get Out",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
      year: 2017,
      rating: 4.6,
      category: "Horror",
      categoryId: 2
    },
    {
      id: 5,
      title: "Superbad",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxMjA1MQ@@._V1_.jpg",
      year: 2007,
      rating: 4.2,
      category: "Comedy",
      categoryId: 3
    },
    {
      id: 6,
      title: "The Hangover",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmQ3YjNiNDUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      year: 2009,
      rating: 4.3,
      category: "Comedy",
      categoryId: 3
    },
    {
      id: 7,
      title: "Toy Story",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
      year: 1995,
      rating: 4.8,
      category: "Animated",
      categoryId: 4
    },
    {
      id: 8,
      title: "Finding Nemo",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      year: 2003,
      rating: 4.7,
      category: "Animated",
      categoryId: 4
    },
  ];

  const searchMovies = () => {
    setIsLoading(true);
    
    // Update URL with the current search query
    const newSearchParams = new URLSearchParams();
    if (searchQuery) newSearchParams.set("q", searchQuery);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams}`
    );

    // Simulate API call with timeout
    setTimeout(() => {
      let filtered = mockMovies;
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(movie => 
          movie.title.toLowerCase().includes(query)
        );
      }
      
      // Filter by category
      if (category !== "all") {
        filtered = filtered.filter(movie => 
          movie.categoryId.toString() === category
        );
      }
      
      setResults(filtered);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (initialQuery) {
      searchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Search</h1>
          
          <div className="space-y-6">
            {/* Search Form */}
            <div className="bg-movie-card p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-movie-background"
                  />
                </div>
                
                <div>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-movie-background">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-movie-card">
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4">
                <Button 
                  onClick={searchMovies}
                  className="bg-movie-primary text-movie-card hover:bg-movie-primary/90 w-full md:w-auto"
                  disabled={isLoading}
                >
                  <SearchIcon className="mr-2 h-4 w-4" />
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </div>
            </div>
            
            {/* Search Results */}
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-movie-card/50">
                  <TabsTrigger value="movies">Movies</TabsTrigger>
                  <TabsTrigger value="actors">Actors</TabsTrigger>
                  <TabsTrigger value="directors">Directors</TabsTrigger>
                </TabsList>
                
                <TabsContent value="movies" className="mt-6">
                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-movie-primary border-r-transparent"></div>
                      <p className="mt-4">Searching movies...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <>
                      <p className="mb-4 text-muted-foreground">
                        Found {results.length} results for "{searchQuery}"
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {results.map((movie) => (
                          <MovieCard key={movie.id} {...movie} />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      {searchQuery ? (
                        <p>No movies found matching "{searchQuery}"</p>
                      ) : (
                        <p>Enter a search query to find movies</p>
                      )}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="actors" className="mt-6">
                  <p className="text-center py-8">
                    Actor search coming soon
                  </p>
                </TabsContent>
                
                <TabsContent value="directors" className="mt-6">
                  <p className="text-center py-8">
                    Director search coming soon
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
