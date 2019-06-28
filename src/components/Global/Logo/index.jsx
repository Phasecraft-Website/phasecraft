import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../../../assetts/images/logo.svg';
import whiteLogo from '../../../../assetts/images/logo-white.svg';

const LogoDark = styled.img`
  position: absolute;
  margin-top: 20px;
  opacity: 1;
  ${props => props.theme.media.md`
    margin-top: 36px;
  `}
`;

const LogoWhite = styled.img`
  position: absolute;
  margin-top: 20px;
  opacity: 0;
  ${props => props.theme.media.md`
    margin-top: 36px;
  `}
`;

const StyledLink = styled(props => <Link {...props} />)`
  position: relative;
  margin-left: 14px;
  ${props => props.theme.media.md`
    margin-left: 36px;
  `}
`;

const Logo = ({ white }) => (
  <StyledLink to="/">
    <LogoDark src={logo} alt="PhaseCraft" className="invert-opacity-reverse" />
    <LogoWhite src={whiteLogo} alt="PhaseCraft" className="invert-opacity" />
  </StyledLink>
);

export default Logo;

Logo.defaultProps = {
  white: false,
}

Logo.propTypes = {
  white: PropTypes.bool,
}
