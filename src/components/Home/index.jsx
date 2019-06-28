
import React from 'react';
import InfoText from 'components/Home/InfoText';
import Results from 'components/Home/Results';
import Logo from 'components/Global/Logo';
import styled from 'styled-components';
import Introduction from './Introduction';

const FlexColumn = styled.div`
  display: flex;
  min-height: 100vh;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.theme.media.md`
    justify-content: flex-end;
    flex-direction: column;
    align-items: ${props.right ? 'flex-end' : 'flex-start'};
  `}
`;

const LogoContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
`;

const LogoBackground = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, rgba(6, 22, 55, 1), rgba(6, 22, 55, 1), rgba(6, 22, 55, 0));
  width: 100%;
  height: 180px;
  z-index: -1;
  opacity: 0;
`;

const LogoBackgroundWhite = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, rgba(231, 231, 231, 1), rgba(231, 231, 231, 1), rgba(231, 231, 231, 0));
  width: 100%;
  height: 180px;
  z-index: -1;
  opacity: 1;
`;

function Home() {
  return (
    <>
      <LogoContainer>
        <LogoBackground className="invert-opacity" />
        <LogoBackgroundWhite className="invert-opacity-reverse" />
        <Logo white />
      </LogoContainer>
      <FlexColumn>
        <InfoText />
      </FlexColumn>
      <Introduction />
      <Results />
    </>
  );
}

export default Home;
