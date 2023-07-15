import {
  HeaderStyled,
  HeaderContainer,
} from './Header.styled';

import { Logo } from 'components/Logo/Logo';


const Header = () => {

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
