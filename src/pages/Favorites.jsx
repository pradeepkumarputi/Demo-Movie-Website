import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites){
      return (
        <div className="favorites">
          <h2>your favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div> 
        </div>
      ); 
    }
  return (
    <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>
            Add movies to your favorites list  </p>
      </div>
    );
}

export default Favorites;