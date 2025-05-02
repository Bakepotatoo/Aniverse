import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (anime) => {
    if (!favorites.some((a) => a.id === anime.id)) {
      setFavorites([...favorites, anime]);
    }
  };

  const removeFromFavorites = (animeId) => {
    setFavorites(favorites.filter((a) => a.id !== animeId));
  };

  const isFavorite = (animeId) => {
    return favorites.some((a) => a.id === animeId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>
  );
};
