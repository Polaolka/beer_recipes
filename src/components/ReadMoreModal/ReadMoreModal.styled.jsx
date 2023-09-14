import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const ReadMoreModalInfo = styled.p`
text-align: center;
`;

export const AuthWrapperModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  flex-wrap: wrap;
  width: 200px;
  margin: 24px auto 0 auto;
  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 250px;
  }
`;

