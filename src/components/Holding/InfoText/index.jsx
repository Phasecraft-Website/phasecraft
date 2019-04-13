import React from 'react';
import styled from 'styled-components';

const InfoTextBox = styled.div`
  margin-bottom: 35px;
  margin-top: 243px;
  @media only screen and (min-width: 768px) {
    width: 414px;
    margin-top: 0;
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
      <InfoTextMed>USING DISRUPTIVE THEORY TO UN—LOCK THE POWER OF QUANTUM COMPUTING</InfoTextMed>
      <InfoTextReg>NEW WEBSITE COMING SOON…</InfoTextReg>
    </InfoTextBox>
  );
}

export default InfoText;
