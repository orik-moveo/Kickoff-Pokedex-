import { useState, useMemo } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonList } from '../components/pokemon/PokemonList';
import { PokemonSearch } from '../components/pokemon/PokemonSearch';
import { PokemonTypeFilter } from '../components/pokemon/PokemonTypeFilter';
import type { Pokemon } from '../types/Pokemon';
import {
  PageContainer,
  PageTitle,
  FiltersContainer,
  LoadingMessage,
  ErrorMessage,
  LoadMoreContainer,
  LoadMoreButton,
} from './HomePageStyle';

export const HomePage = () => {
  const { pokemonList, loading, loadingMore, error, hasMore, loadMore } = usePokemonList();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPokemon = useMemo(() => {
    if (!pokemonList.length) return [];

    let filtered: Pokemon[] = pokemonList;

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((pokemon) => {
        const nameMatch = pokemon.name.toLowerCase().includes(searchLower);
        const idMatch = String(pokemon.id).includes(searchTerm);
        return nameMatch || idMatch;
      });
    }

    // Apply type filter
    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === selectedType)
      );
    }

    return filtered;
  }, [pokemonList, searchTerm, selectedType]);

  // Show load more button only when not filtering and there are more pokemon
  const showLoadMore = hasMore && !searchTerm && !selectedType;

  if (loading) {
    return <LoadingMessage>Loading Pokémon...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error loading Pokémon: {error.message}</ErrorMessage>;
  }

  return (
    <PageContainer>
      <PageTitle>Pokédex</PageTitle>
      <FiltersContainer>
        <PokemonSearch onSearchChange={setSearchTerm} />
        <PokemonTypeFilter onTypeChange={setSelectedType} />
      </FiltersContainer>
      <PokemonList pokemon={filteredPokemon} />
      {showLoadMore && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={loadMore} disabled={loadingMore}>
            load more...
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </PageContainer>
  );
};
