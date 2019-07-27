import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { gatsbyImgTransformer } from 'helpers/image';

const Wrapper = styled.div`
  padding: 14px;
  margin-top: 30px;
  position: relative;
  width: calc(100% - 28px)!important;
  svg {
    position: absolute;
  }
  svg:nth-child(1) {
    top: 0;
    left: 0;
  }
  svg:nth-child(2) {
    top: 0;
    right: 0;
  }
  svg:nth-child(3) {
    bottom: 0;
    right: 0;
  }
  svg:nth-child(4) {
    bottom: 0;
    left: 0;
  }
`;

const InfoTextBox = styled.figure`
  background: rgba(255, 253, 252, 0.4);
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: auto!important;
  margin: 0;
  figcaption {
    font-family: 'GT Pressura Mono Light';
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin-bottom: 150px;
  }
  ${props => props.theme.media.md`
    max-height: 420px;
    width: calc(100% - 20px)!important;
    figcaption {
      width: 60%;
      margin-bottom: 40px;
    }
  `}
`;

const ImageContainer = styled.div`
  ${props => props.theme.media.md`
    width: 60%!important;
    align-self: flex-end;
  `}
`;

const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0V14" stroke="#C4C4C4" strokeMiterlimit="10"/>
    <path d="M14 7H0" stroke="#C4C4C4" strokeMiterlimit="10"/>
  </svg>
);

const ImageWrapper = ({ image, info: { text } }) => {
  const gatsbyImage = gatsbyImgTransformer(image);
  return (
    <Wrapper>
      <Plus />
      <Plus />
      <Plus />
      <Plus />
      <InfoTextBox>
        <figcaption>{text}</figcaption>
        <ImageContainer>
          <Img fluid={gatsbyImage.main} />
        </ImageContainer>
      </InfoTextBox>
    </Wrapper>
  );
}

export default ImageWrapper;

ImageWrapper.propTypes = {
  image: PropTypes.shape().isRequired,
  info: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
