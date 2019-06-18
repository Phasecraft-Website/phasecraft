
import React from 'react';

import styled from 'styled-components';

const ResultsContainer = styled.div`
  min-height: 100vh;
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
  @media only screen and (min-width: 768px) {
    margin-bottom: 3.6rem;
  };
`;

const ResultsText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 26px;
  line-height: 32px;
  color: #051736;
  transition: 1s;
`;

const resultsText = 'Phasecraft are pioneering a new quantum computing frontier. Get in touch, and be part of this seismic moment in science.';

function Results() {
  return (
    <ResultsContainer>
      <AbstractText className="invert-color">Introduction</AbstractText>
      <ResultsText className="invert-color">
        {resultsText}
      </ResultsText>
    </ResultsContainer>
  );
}

export default Results;
