
import React from 'react';
// import BackgroundTexture from 'components/BackgroundTexture/BackgroundExp';
import InfoText from 'components/Home/InfoText';
import Contact from 'components/Home/Contact';
import Results from 'components/Home/Results';
import styled from 'styled-components';
import logo from '../../../assetts/images/logo.svg';
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

const FlexRow = styled.div`
  display: flex;
  min-height: 100vh;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 36px;
    flex-direction: row;
  };
`;

const Logo = styled.img`
  margin-top: 45px;
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
  };
`;

const CopyrightContainer = styled.div`
  width: 156px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
`;

const Copyright = styled.p`
  font-family: 'GT Pressura Mono Light';
  font-size: .8rem;
  text-transform: uppercase;
  line-height: 8px;
  letter-spacing: 0.3em;
  color: #051736;
  margin-bottom: 18px;
`;

const Brand = styled.span`
  font-family: 'GT Pressura Mono Bold';
`;

function Home() {
  return (
    <>
      {/* <BackgroundTexture /> */}
      {/* <FlexRow> */}
        <FlexColumn>
          <div>
            <Logo src={logo} alt="PhaseCraft" />
          </div>
          <InfoText />
        </FlexColumn>
        <Introduction />
        <Results />
        {/* <FlexColumn right>
          <Contact />
          <CopyrightContainer>
            <Copyright>COPYRIGHT PHASECRAFT twenty nineteen. <br />ALL RIGHTS RESERVED. VAT.1234567 Co.1234567</Copyright>
            <Copyright>brand and website <br />by <Brand>polleni</Brand></Copyright>
          </CopyrightContainer>
        </FlexColumn> */}
      {/* </FlexRow> */}
    </>
  );
}

export default Home;
