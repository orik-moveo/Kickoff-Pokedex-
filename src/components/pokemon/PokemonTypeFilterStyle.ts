import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const FilterButton = styled.button<{ $isActive: boolean; $typeName?: string }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 2px solid
    ${({ theme, $isActive, $typeName }) =>
      $isActive
        ? $typeName
          ? theme.colors.type[$typeName as keyof typeof theme.colors.type] || theme.colors.primary
          : theme.colors.primary
        : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme, $isActive, $typeName }) =>
    $isActive
      ? $typeName
        ? theme.colors.type[$typeName as keyof typeof theme.colors.type] || theme.colors.primary
        : theme.colors.primary
      : theme.colors.background};
  color: ${({ theme, $isActive }) =>
    $isActive ? 'white' : theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;
