import React from 'react';
import { Layout } from 'components';
import BackgroundTexture from 'components/Holding/BackgroundTexture';
import InfoText from 'components/Holding/InfoText';
import Contact from 'components/Holding/Contact';
import styled from 'styled-components';
import logo from '../../assetts/images/logo.svg';

const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
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

const Copyright = styled.p`
  font-family: 'GT Pressura Mono Regular';
  font-size: 15px;
  color: #051736;
  letter-spacing: 2px;
  margin-top: 50px;
  margin-bottom: 18px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 35px;
  };
`;

function Index() {
  return (
    <Layout>
      <BackgroundTexture />
      <FlexRow>
        <FlexColumn>
          <div>
            <Logo src={logo} alt="PhaseCraft" />
          </div>
          <InfoText />
        </FlexColumn>
        <FlexColumn right>
          <Contact />
          <Copyright>© PHASECRAFT 2019</Copyright>
        </FlexColumn>
      </FlexRow>
    </Layout>
  );
}

export default Index;
