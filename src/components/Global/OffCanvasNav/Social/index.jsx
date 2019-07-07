import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Content } from 'components';

const SocialContainer = styled.div`
  font-family: 'GT Pressura Mono Light';
  align-self: center;
  color: #051736;
  font-size: 11px;
  line-height: 12px;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  p {
    margin: 0;
  }
  a, a:visited {
    font-size: 11px;
    line-height: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: inherit;
    ${props => props.theme.media.md`
      font-size: 1rem;
      line-height: 1.2rem;
    `}
  }
  strong {
    font-family: 'GT Pressura Mono Regular';
  }
`;

const SocialComponent = ({ links }) => {
  console.log({ links });
  return (
    <SocialContainer>
      <p><strong>Social</strong></p>
      {links.map(({ link, site }) => <a href={link.url} target={link.target}>&nbsp;{site}</a>)}
    </SocialContainer>
  )
};

const Social = props => (
  <StaticQuery
    query={graphql`
      {
        prismicSocial {
          data {
            links {
              link {
                url
                target
              }
              site
            }
          }
        }
      }
    `}
    render={({ prismicSocial: { data: { links } } }) => <SocialComponent links={links} {...props} />}
  />
);

export default Social;

SocialComponent.defaultProps = {};

SocialComponent.propTypes = {
  links: PropTypes.array.isRequired,
};