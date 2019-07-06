import styled from 'styled-components';
import { Content } from 'components';

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 40px;
  line-height: 45px;
  color: ${({ dark }) => dark ? `#E5E6E4` : `#051736`};
`;

export const BodyText = styled(Content)`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  ${props => props.theme.media.md`
    font-size: 2.6rem;
    line-height: 3.2rem;
    margin-top: 60px;
  `}
`;