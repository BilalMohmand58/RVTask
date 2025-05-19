
import { Link } from "react-router-dom";
import { Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-movie-card/80 py-6 mt-auto">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-3">
          <Link to="/" className="flex items-center space-x-2">
            <Film size={24} className="text-movie-primary" />
            <span className="font-bold text-xl">MoviesTask</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Discover, rate and find your favorite movies all in one place.
          </p>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-movie-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-muted-foreground hover:text-movie-primary transition">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/search" className="text-muted-foreground hover:text-movie-primary transition">
                Search
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="text-muted-foreground hover:text-movie-primary transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-muted-foreground hover:text-movie-primary transition">
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-muted-foreground hover:text-movie-primary transition">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-movie-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-movie-primary transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-6 border-t border-muted pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 MoviesTask. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
