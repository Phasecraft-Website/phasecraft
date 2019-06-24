import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../../../assetts/images/logo.svg';
import whiteLogo from '../../../../assetts/images/logo-white.svg';

const LogoImg = styled.img`
  margin-top: 20px;
  ${props => props.theme.media.md`
    margin-top: 36px;
  `}
`;

const Logo = ({ white }) => (
  <LogoImg src={white ? whiteLogo : logo} alt="PhaseCraft" />
);

export default Logo;

Logo.defaultProps = {
  white: false,
}

Logo.propTypes = {
  white: PropTypes.bool,
}
