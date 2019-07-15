import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Content } from 'components';

const ContactContainer = styled.div`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #E5E6E4;
  margin-top: 26px;
  p:nth-child(1) {
    margin-bottom: 0;
  }
  p:nth-child(2) {
    // margin: 0;
    a {
      font-size: 20px;
      line-height: 25px;
      color: #2FF2AF;
      border-bottom: 1px solid #fff;
      padding-bottom: 3px;
      position: relative;
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

      a:visited, a:visited:visited {
        color: #2FF2AF;
      }
      &:hover {
        border-bottom-color: transparent;
        color: #051736;
      }
      &:hover::after {
        background-color: #2FF2AF;
      }
    }
  }
  ${props => props.theme.media.md`
    margin-right: 10%;
    width: fit-content;
    float: left;
  `}
`;

// const LinkContainer = styled.div`
//   display: flex;
//   margin-top: 15px;
//   p {
//     margin: 0;
//   }
//   a {
//     font-family: 'Sul Sans, Regular';
//     color: #E5E6E4;
//     font-size: 13px;
//     line-height: 16px;
//   }
//   a:visited, a:visited:visited {
//     color: #E5E6E4;
//   }
//   div:nth-child(1) {
//     margin-right: 38px;
//   }
// `;

const ContactInfo = ({ content } ) => (
  <ContactContainer>
    <Content html={content.html} />
    {/* <LinkContainer> */}
    {/* <Content html={maps.html} /> */}
    {/* <Content html={directions.html} /> */}
    {/* </LinkContainer> */}
  </ContactContainer>
);

export default ContactInfo;

ContactInfo.defaultProps = {};

ContactInfo.propTypes = {
  content: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
  directions: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
  maps: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
};
