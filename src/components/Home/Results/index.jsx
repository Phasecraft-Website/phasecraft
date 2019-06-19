
import React from 'react';

import styled from 'styled-components';
import whiteLogo from '../../../../assetts/images/logo-white.svg';

const ResultsContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const TextContainer = styled.div`
  height: 100vh;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 122px;
    width: 33%;
  };
`;

const AbstractText = styled.h2`
  margin-left: 3px;
  color: #051736;
  text-transform: uppercase;
  transition: 3s ease;
  @media only screen and (min-width: 768px) {
    margin-bottom: 3.6rem;
  };
`;

const ResultsText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 26px;
  line-height: 32px;
  color: #051736;
  transition: 3s ease;
`;

const WhiteLogo = styled.img`
  position: absolute;
  opacity: 0;
  transition: 3s ease;
  top: 45px;
  @media only screen and (min-width: 768px) {
    top: 36px;
    left: 36px;
  };
`;

const resultsText = 'Phasecraft are pioneering a new quantum computing frontier. Get in touch, and be part of this seismic moment in science.';

function Results() {
  return (
    <ResultsContainer>
      <WhiteLogo src={whiteLogo} alt="PhaseCraft" className="invert-opacity" />
      <TextContainer>
        <AbstractText className="invert-color">Results</AbstractText>
        <ResultsText className="invert-color">
          {resultsText}
        </ResultsText>
      </TextContainer>
    </ResultsContainer>
  );
}

export default Results;
