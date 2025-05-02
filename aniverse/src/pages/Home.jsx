import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home(props) {
  return (
    <div className="home">
      <form onSubmit={props.HandleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for anime..."
          className="search-input"
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="anime-grid">
        {props.animelist.map((anime) => (
          <MovieCard
            key={anime.id}
            anime={anime}
            onFavoriteClick={anime.onFavoriteClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
