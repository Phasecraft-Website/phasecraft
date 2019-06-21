import React from 'react';
import styled from 'styled-components';

const LocationText = styled.p`
  font-size: 26px;
  line-height: 32px;
  // margin-bottom: 0;
  transition: 3s ease;
  color: #051736;
`;

const PhoneText = styled.p`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 0;
  transition: 3s ease;
  color: #051736;
`;

const EmailText = styled.a`
  font-size: 26px;
  line-height: 32px;
  color: #2FF2AF;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  margin-top: 0;
  width: fit-content;
  padding-bottom: 3px;
  transition: 3s ease;
  &:visited, &:visited:visited {
    color: #2FF2AF;
  }
  &:hover {
    border-bottom: 2px solid #fff;
    color: #2FF2AF;
  }
`;

const ContactInfo = ({ location, email, phone, links }) => (
  <div>
    <LocationText className="invert-color">
      {location}
    </LocationText>
    <PhoneText className="invert-color">
      {phone}
    </PhoneText>
    <EmailText>
      {email}
    </EmailText>
  </div>
);

export default ContactInfo;
