
import React from 'react';

import styled from 'styled-components';

const IntroContainer = styled.div`
  min-height: calc(100vh - 90px);
  // width: 80%;
  ${props => props.theme.media.md`
    padding-top: 90px;
    width: 62%;
  `}
`;

const AbstractText = styled.h2`
  font-family: 'GT Pressura Mono Light';
  font-size: 1.2rem;
  margin-left: 3px;
  color: #051736;
  text-transform: uppercase;
  margin-bottom: 1.83em;
  ${props => props.theme.media.md`
    margin-bottom: 3.6rem;
  `}
`;

const IntroText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #051736;
  ${props => props.theme.media.md`
    font-size: 35px;
    line-height: 43px;
  `}
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
