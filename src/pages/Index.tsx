
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard, { MovieProps } from "@/components/MovieCard";
import CategoryItem, { CategoryProps } from "@/components/CategoryItem";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film } from "lucide-react";

const Index = () => {
  // This will be replaced with actual data from Supabase
  const [featuredMovies] = useState<MovieProps[]>([
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
      title: "The Shining",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      year: 1980,
      rating: 4.7,
      category: "Horror",
      categoryId: 2
    },
    {
      id: 3,
      title: "Superbad",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxMjA1MQ@@._V1_.jpg",
      year: 2007,
      rating: 4.2,
      category: "Comedy",
      categoryId: 3
    },
    {
      id: 4,
      title: "Toy Story",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
      year: 1995,
      rating: 4.8,
      category: "Animated",
      categoryId: 4
    },
  ]);

  const [categories] = useState<CategoryProps[]>([
    {
      id: 1,
      name: "Action",
      imageUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 42
    },
    {
      id: 2,
      name: "Horror",
      imageUrl: "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 28
    },
    {
      id: 3,
      name: "Comedy",
      imageUrl: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 36
    },
    {
      id: 4,
      name: "Animated",
      imageUrl: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 31
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-movie-background via-movie-background/70 to-movie-background z-0" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop')] bg-cover bg-center opacity-30 z-[-1]" />
          
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Find and Rate Your Favorite Movies
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover new films, keep track of what you've watched, and share your ratings with a community of movie lovers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-movie-primary text-movie-card hover:bg-movie-primary/90">
                  Browse Movies
                </Button>
                <Button size="lg" variant="outline">
                  <Film className="mr-2 h-4 w-4" />
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-movie-background">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Categories</h2>
              <Button variant="link" className="text-movie-primary">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryItem key={category.id} {...category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Movies Section */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="featured">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">Movies</h2>
                
                <TabsList className="bg-movie-card/50">
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="new">New Releases</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="featured" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {featuredMovies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="trending" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Will be populated with data from Supabase */}
                  <p className="col-span-full text-center py-12 text-muted-foreground">
                    Sign in to see trending movies
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Will be populated with data from Supabase */}
                  <p className="col-span-full text-center py-12 text-muted-foreground">
                    Sign in to see new releases
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
