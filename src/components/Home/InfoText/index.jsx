import React from 'react';
import styled from 'styled-components';

const InfoTextBox = styled.div`
  margin-bottom: 35px;
  margin-top: 243px;
  width: 300px;
  ${props => props.theme.media.md`
    width: 445px;
    margin-top: 0;
  `}
`;

const AbstractText = styled.h2`
  margin-left: 3px;
  color: #051736;
  transition: 3s ease;
  ${props => props.theme.media.md`
    margin-bottom: 3.6rem;
  `}
`;

const InfoTextReg = styled.h3`
  font-family: 'Sul Sans, Medium';
  font-size: 3.3rem;
  margin: 0;
  transition: 3s ease;
  ${props => props.theme.media.md`
    font-size: 42px;
  `}
`;

const InfoTextMed = styled.h3`
  font-family: 'Sul Sans, Regular';
  font-size: 3.3rem;
  margin: 0;
  transition: 3s ease;
  ${props => props.theme.media.md`
    font-size: 42px;
  `}
`;

function InfoText() {
  return (
    <InfoTextBox>
      <AbstractText className="invert-color">ABSTRACT</AbstractText>
      <InfoTextMed className="invert-color">USING DISRUPTIVE THEORY TO UNLOCK THE POWER OF</InfoTextMed>
      <InfoTextReg className="invert-color">QUANTUM COMPUTING</InfoTextReg>
    </InfoTextBox>
  );
}

export default InfoText;
