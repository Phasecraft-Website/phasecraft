import styled from 'styled-components';
import { Content } from 'components';

export const Title = styled.h2`
  font-size: 36px;
  line-height: 45px;
  color: ${({ dark }) => dark ? `#E5E6E4` : `#051736`};
`;

export const BodyText = styled(Content)`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  transition: 3s ease;
  ${props => props.theme.media.md`
    font-size: 26px;
    line-height: 32px;
    margin-top: 60px;
  `}
`;