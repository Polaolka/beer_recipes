import {
  HeaderStyled,
  HeaderContainer,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';


const Header = () => {

  // const location = useLocation();
  // const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />

        </HeaderContainer>
      </HeaderStyled>
    </>
  );
};

export default Header;
