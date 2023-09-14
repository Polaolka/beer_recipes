import styled from '@emotion/styled';

export const Button = styled.button`
text-align: center;
  width: 120px;
  padding: 8px;
  gap: 6px;
  border-radius: 4px;
  border: transparent;
  background: #ff7300;
  box-shadow: 0px 3.5px 3.5px 0px
    rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  &.regBtn {
    width: auto;
  }
  &:hover {
    background: #ea4f01;
    animation: jelly 0.5s;
  }
  &.totop {
    background-color: #fff;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: -2px;
      fill: #f38e1ced;
    }

    &::before,
    &::after {
      display: none;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
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
