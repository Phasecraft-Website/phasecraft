
import React from 'react';

import styled from 'styled-components';

const IntroContainer = styled.div`
  min-height: calc(100vh - 90px);
  @media only screen and (min-width: 768px) {
    padding: 0 36px;
    padding-top: 90px;
    width: 46%;
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

const IntroText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 35px;
  line-height: 43px;
  color: #051736;
  transition: 3s ease;
`;

const introText1 = 'Quantum computers are on the cusp of becoming a practical reality, and could ultimately solve currently intractable computational problems, with vital applications.';
const introText2 = 'Phasecraft can help investigate novel quantum materials, helping to develop better batteries and more efficient solar panels; simulating chemical reactions, helping to discover new catalysts and optimise key industrial processes; and solving hard constraint satisfaction problems, helping to make the most of scarce resources in logistics.'

function Introduction() {
  return (
    <IntroContainer>
      <AbstractText className="invert-color">Introduction</AbstractText>
      <IntroText className="invert-color">
        {introText1}
      </IntroText>
      <IntroText className="invert-color">
        {introText2}
      </IntroText>
    </IntroContainer>
  );
}

export default Introduction;
