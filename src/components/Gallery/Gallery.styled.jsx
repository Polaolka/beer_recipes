import styled from '@emotion/styled';
import { Button } from 'components/Styled';
import { container } from 'helpers';

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Info = styled.p`
  margin-top: 20px;
  color: #4b1500ec;
`;

export const BeersListWrapper = styled.div`
  ${container}
  display: flex;
  width: 100%;
  margin: 10px auto 30px 10px;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const LoadMoreBtn = styled(Button)`
  margin-top: 8px;
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
