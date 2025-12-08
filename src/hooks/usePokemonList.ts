import { useState, useEffect, useCallback } from 'react';
import { getPokemonList, getPokemonDetails } from '../api/pokemonApi';
import type { Pokemon, PokemonListItem } from '../types/Pokemon';

const INITIAL_LIMIT = 20;
const LOAD_MORE_LIMIT = 20;

interface UsePokemonListReturn {
  pokemonList: Pokemon[];
  loading: boolean;
  loadingMore: boolean;
  error: Error | null;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}

export const usePokemonList = (): UsePokemonListReturn => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPokemonBatch = useCallback(async (currentOffset: number, limit: number) => {
    const listResponse = await getPokemonList(limit, currentOffset);
    
    // Fetch details for each pokemon
    const pokemonDetailsPromises = listResponse.results.map((item: PokemonListItem) => {
      const id = item.url.split('/').filter(Boolean).pop();
      return getPokemonDetails(id!);
    });
    
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);
    
    // Check if there are more pokemon to load (next URL exists)
    setHasMore(listResponse.next !== null);
    
    return pokemonDetails;
  }, []);

  useEffect(() => {
    const fetchInitialPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const pokemonDetails = await fetchPokemonBatch(0, INITIAL_LIMIT);
        setPokemonList(pokemonDetails);
        setOffset(INITIAL_LIMIT);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch pokemon list'));
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPokemon();
  }, [fetchPokemonBatch]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      setError(null);
      
      const pokemonDetails = await fetchPokemonBatch(offset, LOAD_MORE_LIMIT);
      setPokemonList((prev) => [...prev, ...pokemonDetails]);
      setOffset((prev) => prev + LOAD_MORE_LIMIT);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load more pokemon'));
    } finally {
      setLoadingMore(false);
    }
  }, [offset, loadingMore, hasMore, fetchPokemonBatch]);

  return { pokemonList, loading, loadingMore, error, hasMore, loadMore };
};

