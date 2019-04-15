import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div`
  position: relative;
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
  &:visited,
  &:hover,
  &:active {
    text-decoration: none !important;
    color: #051736 !important;
    border-bottom: none !important;
  };
  &::after {
		content: ' ';
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 1em;
		left: -0.2em;
		bottom: 0;
    padding: 0.2em;
    transition: 0.6s;
  };
  &:hover::after {
    background-color: #2FF2AF;
  }
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    margin: 0;
  };
`;

const ContactTextMed = styled.h4`
  font-family: 'Sul Sans, Regular';
  margin: 0;
  font-size: 2.2rem;
  @media only screen and (min-width: 768px) {
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
