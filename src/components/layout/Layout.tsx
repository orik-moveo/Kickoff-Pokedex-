import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { LayoutContainer, MainContent } from './LayoutStyle';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};
