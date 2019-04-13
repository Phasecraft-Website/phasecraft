import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  margin-right: 96px;
  margin-top: 25px;
`;

const ContactTextReg = styled.a`
  font-family: 'Sul Sans, Medium';
  font-size: 2.2rem;
  color: #051736;
  margin: 0;
  margin-top: 52px;
  cursor: pointer;
  &:link,
  :visited,
  :hover,
  :active {
    text-decoration: none;
    color: #051736;
    border-bottom: none;
  }
  @media only screen 
  and (min-device-width: 768px) {
    font-size: 26px;
    margin: 0;
  }
`;

const ContactTextMed = styled.h4`
  font-family: 'Sul Sans, Regular';
  margin: 0;
  font-size: 2.2rem;
  @media only screen 
  and (min-device-width: 768px) {
    font-size: 26px;
  }
`;

function Contact() {
  return (
    <ContactBox>
      <ContactTextMed>GET IN TOUCH…</ContactTextMed>
      <ContactTextReg href="mailto:info@phasecraft.io" target="_blank" rel="noopener noreferrer">
        INFO@PHASECRAFT.IO
      </ContactTextReg>
    </ContactBox>
  );
}

export default Contact;
