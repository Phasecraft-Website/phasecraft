import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Content } from 'components';
import logoIcon from '../../../../assetts/images/logo-icon.svg';

const CopyrightContainer = styled.div`
  font-family: 'GT Pressura Mono Light';
  color: ${({ normal }) => normal ? '#e7e7e7' : '#051736'};
  opacity: ${({ normal }) => normal ? '0' : '1'};
  width: 240px;
  font-size: ${({ isNav }) => isNav ? '10px' : '12px'};
  line-height: ${({ isNav }) => isNav ? '12px' : '14px'};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  pointer-events: all;
  ${props => props.theme.media.md`
    width: 200px;
    margin-bottom: ${props.isContact ? '32px' : '17px'};
    font-size: 1rem;
    line-height: 1.2rem;
  `}
  p {
    margin: 0;
  }
  p:nth-last-child(2) {
    margin-bottom: 1em;
  }
  p:nth-last-child(1) {
    display: none;
    ${props => props.theme.media.md`
      display: block;
    `}
  }
  a, a:visited {
    margin-top: 1em;
    font-size: ${({ isNav }) => isNav ? '10px' : '12px'};
    line-height: ${({ isNav }) => isNav ? '12px' : '14px'};
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: inherit;

    ${props => props.theme.media.md`
      font-size: 1rem;
      line-height: 1.2rem;
    `}
  }
  strong {
    font-family: 'GT Pressura Mono Bold';
  }
`;

const CopyrightText = styled.p`
  font-family: 'GT Pressura Mono Light';
  font-size: ${({ isNav }) => isNav ? '10px' : '12px'};
  line-height: ${({ isNav }) => isNav ? '12px' : '14px'};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 0;
  ${props => props.theme.media.md`
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 18px;
  `}
`;

const CopyrightLink = styled.a`
  font-family: 'GT Pressura Mono Light';
  font-size: ${({ isNav }) => isNav ? '10px' : '12px'};
  line-height: ${({ isNav }) => isNav ? '12px' : '14px'};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 0;
  &:visited, &:visited:visited {
    color: #051736;
  }
  ${props => props.theme.media.md`
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 18px;
  `}
`;

const Brand = styled.span`
  font-family: 'GT Pressura Mono Bold';
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 0;
  color: #051736;
  &:visited, &:visited:visited {
    color: #051736;
  }
  ${props => props.theme.media.md`
    font-size: 1rem;
    line-height: 1.2rem;
  `}
`;

const TitleText = styled.h1`
  font-family: 'Sul Sans, Regular';
  font-size: 3.3rem;
  margin: 0;
  color: #E5E6E4;
  display: none;
  opacity: 0;
  ${props => props.theme.media.md`
    display: block;
    font-size: 42px;
    line-height: 53px;
    margin-bottom: 49px;
  `}
`;

const StyledImg = styled.img`
  margin-bottom: 10px;
`;

const CopyrightComponent = ({ isContact, isHome, isNav, data: { copyright_information: { html } } }) => {
  const classes = [];
  let normal = false;
  if (isHome) {
    classes.push('invert-opacity-reverse');
  } else if (isHome || isContact) {
    classes.push('invert-color');
  } else if (!isHome && !isNav && !isContact) {
    classes.push('invert-opacity');
    classes.push('invert-color');
    normal = true;
  }
  return (
    <CopyrightContainer normal={normal} isContact={isContact} className={classes.join(' ')}>
      {isNav && <StyledImg src={logoIcon} alt="Phasecraft" />}
      {isContact && <TitleText className="invert-opacity">Contact</TitleText>}
      <Content html={html} />
    </CopyrightContainer>
  );
};

const Copyright = props => (
  <StaticQuery
    query={graphql`
      {
        prismicGlobal {
          data {
            copyright_information {
              html
            }
          }
        }
      }
    `}
    render={({ prismicGlobal: { data } }) => <CopyrightComponent data={data} {...props} />}
  />
);

export default Copyright;

CopyrightComponent.defaultProps = {
  isContact: false,
  isNav: false,
  isHome: false,
};

CopyrightComponent.propTypes = {
  isContact: PropTypes.bool,
  isNav: PropTypes.bool,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    copyright_information: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};