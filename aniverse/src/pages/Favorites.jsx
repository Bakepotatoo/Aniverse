import "../css/Favorites.css";
import { useAnimeContext } from "../components/AnimeContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useAnimeContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="anime-grid">
          {favorites.map((anime) => (
            <MovieCard anime={anime} key={anime.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }
}

export default Favorites;
