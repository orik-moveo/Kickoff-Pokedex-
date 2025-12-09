import styled from 'styled-components';

export const Card = styled.div`
  background-color: #F7F7F9;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 4px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 4px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0;
  flex: 1;
  width: 100%;
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
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;

export const PokemonName = styled.h3`
  margin: 0;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
  text-transform: capitalize;
  line-height: 1.2;
`;

export const PokemonId = styled.p`
  position: absolute;
  top: 2px;
  left: 4px;
  margin: 0;
  font-size: 9px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: 'Roboto', sans-serif;
  color: #373299;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 8px;
    top: 2px;
    left: 4px;
  }
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
  }
`;

