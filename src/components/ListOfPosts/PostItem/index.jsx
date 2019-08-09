import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ImageContainer = styled.div`
  position: absolute;
  height: auto;
  width: 40%;
  top: 1em;
  right: -6%;
  pointer-events: none;
  z-index: -1;
  opacity: 0;
  transition: 1s;
  max-height: 115%;
  overflow: hidden;
`;

const PostContainer = styled(props => <Link {...props} />)`
  position: relative;
  width: 100%;
  &:hover {
    ${ImageContainer} {
      ${props => props.theme.media.md`
        opacity: 1;
      `}
    }
    svg {
      animation: ${Pulse} 1.5s linear infinite;
    }
    h1 {
      color: #051736;
      background-color: #2FF2AF;
      --box-shadow-color: #2FF2AF;
    }
  }
`;

const StyledPost = styled.div`
  color: #051736;
  width: 90%;
  h1 {
    a {
      color: currentColor;
      width: 100%;
      font: 'Sul Sans, Regular';
      font-size: 3.6rem;
      line-height: 4.5rem;
    }
  }
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Sul Sans, Light';
    margin-bottom: 25px;
    h2 {
      font-family: 'GT Pressura Mono Light';
      font-size: 1.2rem;
    }
  }
  p {
    font-family: 'Sul Sans, Light';
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  h1 {
    position: relative;
    max-width: fit-content;
    text-transform: none;
    display: inline;
    padding: 10px 0 5px 0;
    transition: 0.6s;
    --box-shadow-color: transparent;
    box-shadow: 5px 0 0 var(--box-shadow-color), -5px 0 0 var(--box-shadow-color);
  }

  ${props => props.theme.media.md`
    width: 70%;
    span {
      width: 50%;
    }
  `}
`;

const Published = styled.div`
  width: 150px;
`;

const Pulse = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledLink = styled.div`
  color: #051736;
`;

const PostItem = ({ uid, type, published, title, preview, previewImage }) => (
  <PostContainer to={`/news/${uid}`}>
    <StyledPost>
      <span>
        <h2>{type}</h2>
        <Published>
          <h2>{published}</h2>
        </Published>
      </span>
      <StyledLink>
        {previewImage &&
        <ImageContainer>
          <Img fluid={previewImage.main} />
        </ImageContainer>}
        <h1>{title}</h1>
        <p>
          {preview}
        </p>
        <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 5.99977L22.5317 5.99977L17.4317 10.0998C17.2317 10.2998 17.2317 10.5998 17.4317 10.7998C17.5317 10.9998 17.9317 11.0998 18.1317 10.8998L23.8317 6.29977C24.0317 6.09977 24.1317 5.89977 24.2317 5.69977C24.2317 5.39977 24.2317 5.19977 24.0317 4.99977C23.9317 4.89977 23.9317 4.79977 23.8317 4.79977L18.0317 0.0997719C18.0317 -0.00022847 17.9317 -0.000228479 17.8317 -0.000228488C17.7317 -0.000228496 17.5317 0.0997709 17.4317 0.199771C17.2317 0.399771 17.2317 0.699771 17.4317 0.899771L22.5317 4.99977L0.500001 4.99977C0.200001 4.99977 5.0784e-07 5.19977 4.81614e-07 5.49977C4.55387e-07 5.79977 0.200001 5.99977 0.5 5.99977Z" fill="#323149"/>
        </svg>
      </StyledLink>
    </StyledPost>
  </PostContainer>
);

export default PostItem;

PostItem.defaultProps = {
  previewImage: null,
}

PostItem.propTypes = {
  type: PropTypes.node.isRequired,
  published: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  preview: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  previewImage: PropTypes.shape(),
}
