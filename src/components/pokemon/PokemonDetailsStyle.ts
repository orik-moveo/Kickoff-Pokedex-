import styled from 'styled-components';

export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const PokemonName = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }
`;

export const PokemonId = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeartButton = styled.button<{ $isFavorite: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${({ theme, $isFavorite }) =>
    $isFavorite ? '#E91E63' : theme.colors.textSecondary};
  transition: transform 0.2s ease;
  min-width: 44px; /* Touch-friendly size */
  min-height: 44px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PokemonImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
    height: 200px;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

export const TypeBadge = styled.span<{ $typeName: string }>`
  background-color: ${({ theme, $typeName }) =>
    theme.colors.type[$typeName as keyof typeof theme.colors.type] || theme.colors.type.normal};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StatsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const StatsTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

export const StatItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StatLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const StatBarContainer = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

export const StatBar = styled.div<{ $value: number }>`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ $value }) => Math.min(($value / 255) * 100, 100)}%;
  transition: width 0.3s ease;
`;
