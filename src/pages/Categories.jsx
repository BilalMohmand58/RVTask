
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryItem from "@/components/CategoryItem";

const Categories = () => {
  // Mock categories data - in a real app this would come from Supabase
  const [categories] = useState([
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
    {
      id: 5,
      name: "Drama",
      imageUrl: "https://images.unsplash.com/photo-1520967824495-b529aeba26df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 45
    },
    {
      id: 6,
      name: "Sci-Fi",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 27
    },
    {
      id: 7,
      name: "Documentary",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 19
    },
    {
      id: 8,
      name: "Romance",
      imageUrl: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      movieCount: 32
    }
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Movie Categories</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryItem key={category.id} {...category} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
