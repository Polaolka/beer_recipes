import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GrCheckboxSelected, GrTrash } from 'react-icons/gr';

export const SelectStyled = styled(GrCheckboxSelected)`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0.3;
  cursor: pointer;
  &.active {
    opacity: 1;
    transform: scale(1.02);
  }
`;
export const TrashStyled = styled(GrTrash)`
  position: absolute;
  top: 40px;
  right: 16px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    animation: jelly 0.5s;
  }
`;

export const LinkStyled = styled(NavLink)`
  cursor: pointer;

  &:hover {
    animation: jelly 0.5s;
    color: #f38e1ced;
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

  &.active {
  }
`;

export const InfoWrapperStyled = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  overflow: hidden;
  width: 160px;
  height: 160px;
`;

export const ItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  padding: 200px 20px 20px 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  width: 320px;
  height: 320px;
  &.active {
    background-color: #e8ffb1;
    transform: scale(1.02);
  }
`;
export const NameStyled = styled.h3`
  color: #320e00ed;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const RectStyled = styled.div`
  position: absolute;
  top: 180px;
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
export const AvaThumbStyled = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 26px;
  width: 120px;
  height: 150px;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ImgStyled = styled.img`
  position: absolute;
  top: 5px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoTextBeer = styled.p`
  color: #320e00ed;
  font-size: 12px;
  font-weight: 500;
`;
export const InfoTextBeerDescr = styled.p`
  color: #320e00ed;
  font-size: 12px;
  font-weight: 500;
  display: block;
  height: 50px;
`;

export const BoldText = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #320e00ed;
`;

export const ReadMoreBtnStyled = styled.div`
  text-align: center;
  width: 120px;
  padding: 8px;
  gap: 6px;
  border-radius: 4px;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  &:hover {
    background: #ea4f01;
  }
  background-color: ${(props) => (props.disabled ? 'gray' : '#ff7300')};

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const ReadMoreBtnStyledDisabled = styled.button`
  text-align: center;
  width: 120px;
  padding: 8px;
  gap: 6px;
  border-radius: 4px;
  border: transparent;
  box-shadow: 0px 3.5px 3.5px 0px
    rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: #d1a784;
  cursor: pointer;
  &:hover {
    background: #985b3d;
  }
`;

