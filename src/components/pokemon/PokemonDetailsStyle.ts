import styled from 'styled-components';

export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: 450px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const LeftSection = styled.div`
  flex: 0 0 auto;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PokemonId = styled.p`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
  z-index: 1;
`;

export const HeartButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $isFavorite }) => ($isFavorite ? '24px' : '20px')};
  font-weight: bold;
  color: #020166;
  transition: transform 0.2s ease;
  z-index: 1;
  line-height: 1;
  font-family: 'Roboto', sans-serif;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ $isFavorite }) => ($isFavorite ? '20px' : '18px')};
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const PokemonName = styled.h2`
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
  text-transform: capitalize;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`;

export const TypeBadge = styled.span<{ $typeName: string }>`
  background-color: ${({ theme, $typeName }) =>
    theme.colors.type[$typeName as keyof typeof theme.colors.type] || theme.colors.type.normal};
  color: white;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
`;

export const DescriptionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
`;

export const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  font-family: 'Roboto', sans-serif;
  color: #373299;
`;

export const StatsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const StatsTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto 1fr;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-family: 'Roboto', sans-serif;
  color: #373299;
  row-gap: ${({ theme }) => theme.spacing.xs};
`;

export const StatCell = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  color: #373299;
`;
