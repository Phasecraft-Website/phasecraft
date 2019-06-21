import React from 'react';
import styled from 'styled-components';

const CopyrightContainer = styled.div`
  color: #051736;
  transition: color 3s;
  ${props => props.theme.media.md`
    width: 156px;
    margin-bottom: ${props.isContact ? '82px' : '17px'};
  `}
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

const TitleText = styled.h2`
  font-family: 'Sul Sans, Regular';
  font-size: 3.3rem;
  margin: 0;
  color: #E5E6E4;
  display: none;
  ${props => props.theme.media.md`
    display: block;
    font-size: 42px;
    line-height: 53px;
    margin-bottom: 49px;
  `}
`;

const Copyright = ({ isContact }) => (
  <CopyrightContainer isContact={isContact} className="invert-color">
    {isContact && <TitleText>Contact</TitleText>}
    <CopyrightText>COPYRIGHT PHASECRAFT twenty nineteen. <br />ALL RIGHTS RESERVED. VAT.1234567 Co.1234567</CopyrightText>
    <CopyrightText>brand and website <br />by <Brand>polleni</Brand></CopyrightText>
  </CopyrightContainer>
);

export default Copyright;
