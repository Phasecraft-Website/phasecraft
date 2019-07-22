

import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/Global/Typography';

const ResultsContainer = styled.div`
  position: relative;
  min-height: 80vh;
  margin-top: 50px;
  ${props => props.theme.media.md`
    min-height: 60vh;
    margin-top: 0;
  `}
`;

const AbsoluteBackground = styled.div`
  position: absolute;
  top: 0;
  left: -15px;
  right: calc(-20% - 20px);
  bottom: 0;
  min-height: 180vh;
  background: linear-gradient(to bottom, rgba(255, 253, 252, 0.4), rgba(255, 253, 252, 0.4), rgba(255, 253, 252, 0));
  z-index: -1;
  ${props => props.theme.media.md`
    min-height: 140vh;
    left: -35px;
    right: calc(-50% - 35px);
  `}
`;

const TextContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: -15px;
  padding-left: 40px;
  ${props => props.theme.media.md`
    height: 60vh;
    padding-left: 0;
    margin-right: 0;
    margin-left: 86px;
    width: 70%;
  `}
`;

const AbstractText = styled.h2`
  font-family: 'GT Pressura Mono Light';
  font-size: 1.2rem;
  margin-left: 3px;
  color: #051736;
  text-transform: uppercase;
  margin-bottom: 1rem;
  ${props => props.theme.media.md`
    margin-bottom: 1rem;
  `}
`;

const ResultsText = styled.p`
  font-family: 'Sul Sans, Light';
  font-size: 2rem;
  line-height: 2.5rem;
  color: #051736;
  margin-top: 0;
`;

const EmailText = styled.a`
  font-family: 'Sul Sans, Medium';
  font-size: 2.2rem;
  line-height: 2.7rem;
  color: #051736;
  margin: 0;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  max-width: fit-content;
  border-bottom: 1.5px solid #2FF2AF;
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
    border-bottom: 2px solid transparent;
  }
  ${props => props.theme.media.md`
    margin-top: 52px;
    font-size: 2.6rem;
    margin: 0;
  `}
`;

const Results = () => (
  <ResultsContainer>
    <AbsoluteBackground className="invert-opacity-reverse" />
    <div />
    <TextContainer>
      <AbstractText className="invert-color">References</AbstractText>
      <Title className="invert-color">
        JOIN OUR TEAM...
      </Title>
      <ResultsText className="invert-color">
        Help us change shape the world’s future using quantum computing. Send CVs and job enquiries to...
      </ResultsText>
      {/* <ResultsText className="invert-color">
        Send CVs and job enquiries to...
      </ResultsText> */}
      {/* <PhoneText className="invert-color">
        +44 (0)117 942 0101
      </PhoneText> */}
      <EmailText className="invert-link" href="mailto:careers@phasecraft.io">
        careers@phasecraft.io
      </EmailText>
    </TextContainer>
  </ResultsContainer>
);

export default Results;
