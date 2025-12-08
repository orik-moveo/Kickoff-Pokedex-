import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'pokemon-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    // Load favorites from localStorage on mount
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFavorites(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  const addFavorite = useCallback((pokemonId: number) => {
    setFavorites((prev) => {
      if (prev.includes(pokemonId)) {
        return prev;
      }
      const updated = [...prev, pokemonId];
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeFavorite = useCallback((pokemonId: number) => {
    setFavorites((prev) => {
      const updated = prev.filter((id) => id !== pokemonId);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const toggleFavorite = useCallback(
    (pokemonId: number) => {
      if (favorites.includes(pokemonId)) {
        removeFavorite(pokemonId);
      } else {
        addFavorite(pokemonId);
      }
    },
    [favorites, addFavorite, removeFavorite]
  );

  const isFavorite = useCallback(
    (pokemonId: number) => {
      return favorites.includes(pokemonId);
    },
    [favorites]
  );

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
};

