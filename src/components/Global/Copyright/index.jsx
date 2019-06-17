import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
  width: 156px;
  color: #051736;
  @media only screen and (min-width: 768px) {
    margin-bottom: 17px;
  }
  .invert-background {
    ${CopyrightContainer} {
      color: white;
    }
  }
`;

const CopyrightText = styled.p`
  font-family: 'GT Pressura Mono Light';
  font-size: .8rem;
  text-transform: uppercase;
  line-height: 8px;
  letter-spacing: 0.3em;
  margin-bottom: 18px;
`;

const Brand = styled.span`
  font-family: 'GT Pressura Mono Bold';
`;

const Copyright = () => (
  <CopyrightContainer className="invert-color">
    <CopyrightText>COPYRIGHT PHASECRAFT twenty nineteen. <br />ALL RIGHTS RESERVED. VAT.1234567 Co.1234567</CopyrightText>
    <CopyrightText>brand and website <br />by <Brand>polleni</Brand></CopyrightText>
  </CopyrightContainer>
);

export default Copyright;
