import "./App.css";
import Anime from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { AnimeProvider } from "./components/AnimeContext";

function App() {
  const [animelist, setAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(searchQuery);
  };

  useEffect(() => {
    FetchTopAnime();
  }, []);

  const FetchAnime = async (query) => {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${query}`
    );
    const json = await res.json();
    console.log(json.data);
    setAnimeList(json.data); // note: it's still called "data" like Jikan v4
  };

  const FetchTopAnime = async () => {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10`
    );
    const json = await res.json();
    console.log(json.data);
    setAnimeList(json.data);
  };

  return (
    <AnimeProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  animelist={animelist}
                  HandleSearch={HandleSearch}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  FetchTopAnime={FetchTopAnime}
                />
              }
            />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </AnimeProvider>
  );
}

export default App;



