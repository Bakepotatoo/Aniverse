import "../css/MovieCard.css";
import { useAnimeContext } from "./AnimeContext";

function MovieCard({ anime, onFavoriteClick }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
  const { canonicalTitle, synopsis, posterImage } = anime.attributes;
  const favorite = isFavorite(anime.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(anime.id);
    }
    else addToFavorites(anime);
  }

  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={posterImage.large} alt={canonicalTitle} />
          <div className="anime-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              {" "}
              ♥{" "}
            </button>
          </div>
        </figure>
        <h3>{canonicalTitle}</h3>
      </a>
    </article>
  );
}

export default MovieCard;


