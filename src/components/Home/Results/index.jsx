
import React from 'react';

import styled from 'styled-components';

const ResultsContainer = styled.footer`
  position: relative;
  min-height: 100vh;
  margin-top: 50px;
  ${props => props.theme.media.md`
    margin-top: 0;
  `}
`;

const TextContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -15px;
  padding-left: 40px;
  ${props => props.theme.media.md`
    padding-left: 0;
    margin-right: 0;
    margin-left: 86px;
    width: 50%;
  `}
`;

const AbstractText = styled.h2`
  font-family: 'GT Pressura Mono Light';
  font-size: 1.2rem;
  margin-left: 3px;
  color: #051736;
  text-transform: uppercase;
  margin-bottom: 5rem;
`;

const ResultsText = styled.p`
  font-family: 'Sul Sans, Light';
  font-size: 20px;
  line-height: 25px;
  color: #051736;
  margin-top: 0;
  ${props => props.theme.media.md`
    font-size: 26px;
    line-height: 32px;
  `}
`;

const PhoneText = styled.p`
  font-family: 'Sul Sans, Light';
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 0;
  color: #051736;
`;

// const EmailText = styled.a`
//   font-size: 26px;
//   line-height: 32px;
//   color: #051736;
//   border-bottom: 2px solid transparent;
//   cursor: pointer;
//   margin-top: 0;
//   width: fit-content;
//   padding-bottom: 3px;
//   &:visited, &:visited:visited {
//     color: #2FF2AF;
//   }
//   &:hover {
//     border-bottom: 2px solid #fff;
//     color: #2FF2AF;
//   }
// `;

const LogoContainer = styled.div`
  position: absolute;
  top: 45px;
  ${props => props.theme.media.md`
    top: 36px;
  `}
`;

const EmailText = styled.a`
  font-family: 'Sul Sans, Regular';
  font-size: 26px;
  line-height: 32px;
  color: #051736;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  max-width: fit-content;
  border-bottom: 2px solid #2FF2AF;
  transition: 0.6s;
  &::after {
		content: ' ';
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 1em;
		left: -0.2em;
		bottom: 0;
    padding: 0.2em;
    transition: background-color 0.6s;
  };
  &:hover::after {
    background-color: #2FF2AF;
  }
  &:hover {
    border-bottom: 2px solid transparent!important;
  }
  ${props => props.theme.media.md`
    margin-top: 52px;
    font-size: 26px;
    margin: 0;
  `}
`;

const resultsText = 'Phasecraft are pioneering a new quantum computing frontier. Get in touch, and be part of this seismic moment in science.';

function Results() {
  return (
    <ResultsContainer>
      <div />
      <TextContainer>
        <AbstractText className="invert-color">Synthesis</AbstractText>
        <ResultsText className="invert-color">
          {resultsText}
        </ResultsText>
        {/* <PhoneText className="invert-color">
          +44 (0)117 942 0101
        </PhoneText> */}
        <EmailText className="invert-link invert-border" href="mailto:info@phasecraft.io">
          info@phasecraft.io
        </EmailText>
      </TextContainer>
    </ResultsContainer>
  );
}

export default Results;
