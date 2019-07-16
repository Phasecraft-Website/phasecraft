import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../../../assetts/images/logo.svg';
import whiteLogo from '../../../../assetts/images/logo-white.svg';

const LogoDark = styled.img`
  position: absolute;
  opacity: 1;
  top: 20px;
  ${props => props.theme.media.md`
    top: 36px;
  `}
`;

const LogoWhite = styled.img`
  position: absolute;
  opacity: 0;
  top: 20px;
  ${props => props.theme.media.md`
    top: 36px;
  `}
`;

const StyledLink = styled(props => <Link {...props} />)`
  position: relative;
  left: 20px;
  ${props => props.theme.media.md`
    left: 36px;
  `}
`;
const LogoContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const LogoBackground = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, rgba(6, 22, 55, 1), rgba(6, 22, 55, 0));
  width: 100%;
  height: 140px;
  // z-index: 0;
  opacity: 0;
  pointer-events: none;
  ${props => props.theme.media.md`
    height: 180px;
  `}
`;

const LogoBackgroundWhite = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, rgba(231, 231, 231, 1), rgba(231, 231, 231, 0.9), rgba(231, 231, 231, 0));
  width: 100%;
  height: 140px;
  z-index: -1;
  opacity: 1;
  pointer-events: none;
  ${props => props.theme.media.md`
    height: 180px;
  `}
`;

const FadeHeader = styled.div`
  opacity: 0;
  transition: opacity 1s;
`;

const Logo = ({ white }) => (
  <LogoContainer>
    <FadeHeader id="fade-header">
      <LogoBackground className="invert-opacity" />
      <LogoBackgroundWhite className="invert-opacity-reverse" />
    </FadeHeader>
    <StyledLink to="/">
      <LogoDark src={logo} alt="PhaseCraft" className="invert-opacity-reverse" />
      <LogoWhite src={whiteLogo} alt="PhaseCraft" className="invert-opacity" />
    </StyledLink>
  </LogoContainer>
);

export default Logo;

Logo.defaultProps = {
  white: false,
}

Logo.propTypes = {
  white: PropTypes.bool,
}
