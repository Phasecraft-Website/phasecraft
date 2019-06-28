import React from 'react';
import styled from 'styled-components';

const LocationText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  // margin-bottom: 0;
  color: #051736;
`;

const PhoneText = styled.p`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 0;
  color: #051736;
`;

const EmailText = styled.a`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #2FF2AF;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  margin-top: 0;
  width: fit-content;
  padding-bottom: 3px;
  position: relative;
  &:visited, &:visited:visited {
    color: #2FF2AF;
  }
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
`;

const ContactContainer = styled.div`
  margin-top: 26px;
`;

const ContactInfo = ({ location, email, phone, links }) => (
  <ContactContainer>
    <LocationText className="invert-color">
      {location}
    </LocationText>
    <PhoneText className="invert-color">
      {phone}
    </PhoneText>
    <EmailText>
      {email}
    </EmailText>
  </ContactContainer>
);

export default ContactInfo;
