
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line import/no-cycle
import { Content } from 'components';
import styled from 'styled-components';

const IntroContainer = styled.div`
  min-height: calc(100vh - 90px);
  color: #051736;
  p {
    font-family: 'Sul Sans, Regular';
    font-size: 20px;
    line-height: 25px;
  }
  ${props => props.theme.media.md`
    padding-top: 90px;
    width: 85%;
    p {
      font-size: 35px;
      line-height: 43px;
    }
  `}
`;

const AbstractText = styled.h2`
  font-family: 'GT Pressura Mono Light';
  font-size: 1.2rem;
  margin-left: 3px;
  // color: #051736;
  text-transform: uppercase;
  margin-bottom: 1.83em;
  ${props => props.theme.media.md`
    margin-bottom: 3.6rem;
  `}
`;

const IntroductionComponent = ({ paragraphs }) => (
  <IntroContainer className="invert-color">
    <AbstractText>Introduction</AbstractText>
    {paragraphs.map(({ primary: { content: { html } } }) => <Content key={html} html={html} />)}
  </IntroContainer>
);

const Introduction = props => (
  <StaticQuery
    query={graphql`
      {
        prismicPage(uid: {eq: "about"}) {
          data {
            body {
              ... on PrismicPageBodyParagraph {
                primary {
                  content {
                    html
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ prismicPage: { data: { body } } }) => <IntroductionComponent paragraphs={body} {...props} />}
  />
);

export default Introduction;

IntroductionComponent.propTypes = {
  paragraphs: PropTypes.array.isRequired,
};
