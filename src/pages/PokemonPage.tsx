import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { PokemonDetails } from '../components/pokemon/PokemonDetails';
import { PageContainer, BackButton, LoadingMessage, ErrorMessage } from './PokemonPageStyle';

export const PokemonPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, description, loading, error } = usePokemonDetails(id || '');

  if (loading) {
    return <LoadingMessage>Loading Pokémon details...</LoadingMessage>;
  }

  if (error || !pokemon) {
    return (
      <PageContainer>
        <ErrorMessage>
          Error loading Pokémon: {error?.message || 'Pokémon not found'}
        </ErrorMessage>
        <BackButton onClick={() => navigate('/')}>← Back to Home</BackButton>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton onClick={() => navigate('/')}>← Back to Home</BackButton>
      <PokemonDetails pokemon={pokemon} description={description} />
    </PageContainer>
  );
};
