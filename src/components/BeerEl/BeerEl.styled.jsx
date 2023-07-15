import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GrCheckboxSelected, GrTrash } from 'react-icons/gr';


export const BeersRecipeBox = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 10px auto 30px 10px;
  padding: 30px;
`;


export const SelectStyled = styled(GrCheckboxSelected)`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0.3;
  &.active {
    opacity: 1;
    transform: scale(1.02)
  }
`;
export const TrashStyled = styled(GrTrash)`
  position: absolute;
  top: 40px;
  right: 16px;
  opacity: 0.3;
  &:hover {
    animation: jelly 0.5s;
  }
`;

export const LinkStyled = styled(NavLink)`
  cursor: pointer;
color: white;
  &:hover {
    color: #6f0d00;
  }
`;

export const InfoWrapperStyled = styled.div`
  position: absolute;
  top: 24px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  overflow: hidden;
  width: calc(100% - 160px);
  height: 160px;
`;

export const ItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  padding: 274px  20px 20px 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  width: 100%;

  &.active {
    background-color: #e8ffb1;
    transform: scale(1.02)
  }
`;
export const NameStyled = styled.h2`
  color: #320e00ed;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const RectStyled = styled.div`
  position: absolute;
  top: 260px;
  width: 100%;
  height: 10px;
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
  left: 26px;
  width: 120px;
  height: 228px;
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
  font-size: 16px;
  font-weight: 500;
`;
export const InfoTextBeerDescr = styled.p`
  color: #320e00ed;
  font-size: 14px;
  font-weight: 500;
  display: block;
  height: 50px;

`;

export const BoldText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #320e00ed;
`;

export const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: #320e00ed;
  align-self: flex-start;
`;

export const ReadMoreBtnStyled = styled.div`
  width: 120px;
  padding: 8px;
  gap: 6px;
  border-radius: 4px;
  background: #ff7300;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  &:hover {
    background: #ea4f01;
  }
`;

export const RecipeWrapperStyled = styled.div`
  align-self: flex-start;
  width: 100%;
  table {
        width: 100%;
        border-collapse: collapse;

        th,
        td {
            padding: 8px;
            border-bottom: 1px solid #e3bdaa;
            color: #333;
            font-weight: 500;
        }

        th {
            text-align: left;
            font-weight: 600;
        }

        tbody tr:hover {
            background-color: #fff5ca;
        }
    }
`;
