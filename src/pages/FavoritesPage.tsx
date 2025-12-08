import { useFavoritesContext } from '../context/FavoritesContext';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonList } from '../components/pokemon/PokemonList';
import {
  PageContainer,
  PageTitle,
  EmptyState,
  EmptyStateTitle,
  EmptyStateText,
  LoadingMessage,
} from './FavoritesPageStyle';

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

