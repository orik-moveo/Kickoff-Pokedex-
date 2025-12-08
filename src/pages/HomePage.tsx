import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonList } from '../components/pokemon/PokemonList';
import { PokemonSearch } from '../components/pokemon/PokemonSearch';
import { PokemonTypeFilter } from '../components/pokemon/PokemonTypeFilter';
import type { Pokemon } from '../types/Pokemon';

const PageContainer = styled.div`
  width: 100%;
`;

const PageTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.error};
`;

const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const LoadMoreButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px; /* Touch-friendly size */

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary}dd;
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    width: 100%;
    max-width: 300px;
  }
`;

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
            {loadingMore ? 'Loading...' : 'Load More Pokémon'}
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </PageContainer>
  );
};
