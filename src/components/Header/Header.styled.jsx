import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';

export const HeaderStyled = styled.header`
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 4;
  top: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  &.bg {
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    border-bottom: none;
  }
`;

export const HeaderContainer = styled.div`
  ${container}
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
`;

export const MenuButton = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;
