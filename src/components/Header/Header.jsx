import {
  HeaderStyled,
  HeaderContainer,
  RectStyled,
  TitleStyled,
} from './Header.styled';

import { Logo } from 'components/Logo/Logo';


const Header = () => {

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <TitleStyled>Unlock the Flavorscape: Beer Recipes for True Enthusiasts!</TitleStyled>
        </HeaderContainer>
          <RectStyled/>
      </HeaderStyled>
    </>
  );
};

export default Header;
