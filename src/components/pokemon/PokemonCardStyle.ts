import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`;

export const CardInfo = styled.div`
  text-align: center;
`;

export const PokemonName = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const PokemonId = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  justify-content: center;
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

export const HeartButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $isFavorite }) =>
    $isFavorite ? '#E91E63' : theme.colors.textSecondary};
  font-size: 24px;
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
    top: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
    font-size: 20px;
  }
`;
