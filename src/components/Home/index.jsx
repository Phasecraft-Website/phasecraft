
import React from 'react';
// import BackgroundTexture from 'components/BackgroundTexture/BackgroundExp';
import InfoText from 'components/Home/InfoText';
import Contact from 'components/Home/Contact';
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
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    padding: 0 36px;
    align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
  };
`;

function Home() {
  return (
    <>
      <FlexColumn>
        <div>
          <Logo />
        </div>
        <InfoText />
      </FlexColumn>
      <Introduction />
      <Results />
    </>
  );
}

export default Home;
