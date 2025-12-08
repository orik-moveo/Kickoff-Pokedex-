import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { PokemonDetails } from '../components/pokemon/PokemonDetails';

const PageContainer = styled.div`
  width: 100%;
`;

const BackButton = styled.button`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px; /* Touch-friendly size */

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
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
