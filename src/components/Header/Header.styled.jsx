import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

export const HeaderStyled = styled.header`
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 30;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: -2.5px 6.8px 20px 0px
    rgba(0, 0, 0, 0.23);
`;

export const HeaderContainer = styled.div`
  padding: 4px 8px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 8px 16px;
  }
`;

export const TitleStyled = styled.h1`
  color: #320e00ed;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 400px) {
    width: 120px;
    font-size: 12px;
  }
  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 180px;
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

export const LogInBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  cursor: pointer;

  transition: color 300ms ease-in-out;
  &:hover {
    color: orange;
  }
  &.mobile {
    color: orangered;
  }
`;

export const RegistrationBtn = styled.button`
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background: #ff7300;
  box-shadow: 0px 3.5px 3.5px 0px
    rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  &:hover {
    background: #ea4f01;
  }
`;
export const LogInIcon = styled(FiLogIn)`
  width: 20px;
  height: 20px;
  color: orange;
  margin-right: 8px;
  cursor: pointer;
  &.mobile {
    stroke: orangered;
  }
`;

export const LogOutIcon = styled(FiLogOut)`
  width: 20px;
  height: 20px;
  color: orange;
  margin-right: 8px;
  cursor: pointer;
  &.mobile {
    stroke: orangered;
  }
`;
export const HelloStyled = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  &.mobile {
    color: orangered;
  }
`;
export const AuthWrapper = styled.div`
  display: flex;
  row-gap: 8px;
  flex-wrap: wrap;
  width: 100px;
  margin-left: auto;
  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 200px;
  }
`;
