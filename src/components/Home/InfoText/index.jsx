import React from 'react';
import styled from 'styled-components';

const InfoTextBox = styled.div`
  margin-bottom: 35px;
  margin-top: 243px;
  @media only screen and (min-width: 768px) {
    width: 445px;
    margin-top: 0;
  };
`;

const AbstractText = styled.h2`
  margin-left: 3px;
  color: #051736;
  @media only screen and (min-width: 768px) {
    margin-bottom: 3.6rem;
  };
`;

const InfoTextReg = styled.h3`
  font-family: 'Sul Sans, Medium';
  font-size: 3.3rem;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 42px;
  };
`;

const InfoTextMed = styled.h3`
  font-family: 'Sul Sans, Regular';
  font-size: 3.3rem;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 42px;
  };
`;

function InfoText() {
  return (
    <InfoTextBox>
      <AbstractText>H2 ABSTRACT</AbstractText>
      <InfoTextMed>USING DISRUPTIVE THEORY TO UNLOCK THE POWER OF</InfoTextMed>
      <InfoTextReg>QUANTUM COMPUTING</InfoTextReg>
    </InfoTextBox>
  );
}

export default InfoText;
