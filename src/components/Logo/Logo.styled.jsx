import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logotweets from 'images/BeerLogo.jpg';

export const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: url(${logotweets}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  &:hover {
    animation: jelly 0.5s;
  }
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

export const LinkStyled = styled(NavLink)`
  cursor: pointer;
  position: relative;
  top: 2px;
  margin-left: 15px;


  &:hover {
  }

  &.active {
  }

`;
