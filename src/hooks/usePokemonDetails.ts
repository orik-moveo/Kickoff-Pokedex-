import { useState, useEffect } from 'react';
import { getPokemonDetails, getPokemonSpecies } from '../api/pokemonApi';
import type { Pokemon, PokemonSpecies } from '../types/Pokemon';

interface UsePokemonDetailsReturn {
  pokemon: Pokemon | null;
  description: string;
  loading: boolean;
  error: Error | null;
}

export const usePokemonDetails = (idOrName: string | number): UsePokemonDetailsReturn => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [pokemonData, speciesData] = await Promise.all([
          getPokemonDetails(idOrName),
          getPokemonSpecies(idOrName),
        ]);
        
        setPokemon(pokemonData);
        
        // Extract English description from flavor text entries
        const englishEntry = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        );
        
        if (englishEntry) {
          // Clean up flavor text (remove newlines and multiple spaces)
          const cleanedText = englishEntry.flavor_text
            .replace(/\f/g, ' ')
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          setDescription(cleanedText);
        } else {
          setDescription('No description available.');
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch pokemon details'));
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [idOrName]);

  return { pokemon, description, loading, error };
};

