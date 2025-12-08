import { useLocation } from 'react-router-dom';
import pokedexLogo from '../../assets/pokedex-logo.png';
import {
  HeaderContainer,
  Nav,
  NavLinks,
  NavLink,
  LogoContainer,
  LogoImage,
} from './HeaderStyle';

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <LogoImage src={pokedexLogo} alt="PokéDex" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/favorites" $isActive={location.pathname === '/favorites'}>
            Favorites
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};
