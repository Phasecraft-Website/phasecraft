import React from 'react';
import styled from 'styled-components';
import logoIcon from '../../../../assetts/images/logo-icon.svg';

const CopyrightContainer = styled.div`
  color: #051736;
  width: 240px;
  ${props => props.theme.media.md`
    width: 200px;
    margin-bottom: ${props.isContact ? '32px' : '17px'};
  `}
`;

const CopyrightText = styled.p`
  font-family: 'GT Pressura Mono Light';
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 0;
  ${props => props.theme.media.md`
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 18px;
  `}
`;

const Brand = styled.span`
  font-family: 'GT Pressura Mono Bold';
`;

const TitleText = styled.h1`
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

const Copyright = ({ isContact, isNav }) => (
  <CopyrightContainer isContact={isContact} className="invert-color">
    {isNav &&
      <img src={logoIcon} alt="Phasecraft" />
    }
    {isContact && <TitleText>Contact</TitleText>}
    <CopyrightText>COPYRIGHT PHASECRAFT {isNav ? '2019' : 'twenty nineteen.'} <br />ALL RIGHTS RESERVED. {isNav && <br />} VAT.1234567 Co.1234567</CopyrightText>
    {!isNav && <CopyrightText>brand and website <br />by <Brand>polleni</Brand></CopyrightText>}
  </CopyrightContainer>
);

export default Copyright;
