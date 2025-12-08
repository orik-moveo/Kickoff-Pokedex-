import styled from 'styled-components';
import { useFavoritesContext } from '../context/FavoritesContext';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonList } from '../components/pokemon/PokemonList';

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

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const EmptyStateTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const EmptyStateText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();
  const { pokemonList, loading } = usePokemonList();

  const favoritePokemon = pokemonList.filter((pokemon) => favorites.includes(pokemon.id));

  if (loading) {
    return <LoadingMessage>Loading favorites...</LoadingMessage>;
  }

  if (favoritePokemon.length === 0) {
    return (
      <PageContainer>
        <PageTitle>Favorites</PageTitle>
        <EmptyState>
          <EmptyStateTitle>No favorites yet</EmptyStateTitle>
          <EmptyStateText>
            Start adding Pokémon to your favorites by clicking the heart icon on any Pokémon card!
          </EmptyStateText>
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>Favorites ({favoritePokemon.length})</PageTitle>
      <PokemonList pokemon={favoritePokemon} />
    </PageContainer>
  );
};

