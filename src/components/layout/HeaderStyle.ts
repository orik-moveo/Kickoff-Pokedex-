import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #020166;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  min-height: 60px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  min-height: 60px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
  padding-right: ${({ theme }) => theme.spacing.lg};

  & > a:first-child {
    margin-right: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: ${({ theme }) => theme.spacing.md};

    & > a:first-child {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 0;
  transition: background-color 0.2s ease, color 0.2s ease;
  background-color: ${({ $isActive }) => ($isActive ? '#94D97E' : '#020166')};
  color: ${({ $isActive }) => ($isActive ? '#020166' : 'white')};

  &:active {
    background-color: #94D97E;
    color: #020166;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    width: 50px;
    height: 50px;
  }
`;


export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 30px;
  }
`;