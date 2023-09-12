import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';

export const HeaderStyled = styled.header`
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 4;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const HeaderContainer = styled.div`
  ${container}
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
`;

export const TitleStyled = styled.h1`
  color: #320e00ed;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: ${mediaSizes.mobile}) {
    width: 200px;
    font-size: 14px;
  }
  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 300px;
    font-size: 14px;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 400px;
    font-size: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const MenuButton = styled.button`
  border: none;
  padding: 8px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 10px;
  height: 10px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;

export const RectStyled = styled.div`
  width: 100%;
  height: 8px;
  background-image: linear-gradient(
    to bottom,
    #ffb800 33%,
    #ff7300 33%,
    #ff7300 66%,
    #711e00 66%
  );
`;
