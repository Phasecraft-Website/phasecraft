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
  ${props => props.theme.media.md`
    margin-right: 10%;
    width: fit-content;
    float: left;
  `}
`;

const LinkContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const LinkText = styled.a`
  font-family: 'Sul Sans, Regular';
  margin-right: 38px;
  color: #051736;
  font-size: 13px;
  line-height: 16px;
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
    <LinkContainer>
      <LinkText className="invert-color">Open in Google Maps</LinkText>
      <LinkText className="invert-color">Get Directions</LinkText>
    </LinkContainer>
  </ContactContainer>
);

export default ContactInfo;
