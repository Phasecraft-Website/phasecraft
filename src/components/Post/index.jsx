import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SliceZone, Content } from 'components';
import { Link } from 'gatsby';
import Logo from '../Global/Logo';
import Results from '../Home/Results';

const PostContainer = styled.div`
  margin-top: 120px;
  width: 120%;
  margin-right: -10%;
  span {
    min-width: 225px;
    width: 35%;
    display: flex;
    justify-content: space-between;
    font-family: 'Sul Sans, Light';
    h2 {
      font-family: 'GT Pressura Mono Light';
      font-size: 1.2rem;
    }
  }
  div {
    width: 100%;
    p {
      margin-top: 30px;
      margin-right: 20px;
    }
  }

  ${props => props.theme.media.md`
    margin-top: 180px;
    width: 67%;
    margin-right: 0;
    div {
      p {
        margin-top: 52px;
        margin-right: 0;
      }
    }
  `}
`;

const BackButton = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  max-width: fit-content;
  font-family: 'Sul Sans, Light';
  svg {
    margin-left: 8px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const FurtherReading = styled.div`
  margin-top: 100px;
  h2 {
    font-family: 'GT Pressura Mono Light';
    margin-bottom: 35px;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
  p {
    margin: 0!important;
  }
  a {
    font-family: 'Sul Sans, Medium';
    font-size: 2rem;
    line-height: 3rem;
    position: relative;
    color: #051736;
    text-transform: uppercase;
    &::after {
      content: ' ';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 1em;
      left: -0.2em;
      bottom: -0.1em;
      padding: 0.2em;
      transition: background-color 0.6s;
    };
    &:hover::after {
      background-color: #2FF2AF;
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 40px;
  line-height: 45px;
  color: ${({ dark }) => dark ? `#E5E6E4` : `#051736`};
`;

const Post = ({ title, type, published, body, related, youtube }) => {
  return (
    <>
      <script src="https://www.youtube.com/iframe_api" />
      <PostContainer>
        <Logo dark />
        <BackButton to="/news">
          Back to News
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.0135" cy="10.0609" r="9.60388" fill="#2FF2AF"/>
            <path d="M6.68319 9.59872L10.4195 5.86245C10.6748 5.60711 11.0888 5.60711 11.3441 5.86245C11.5995 6.11779 11.5995 6.53179 11.3441 6.78713L8.07021 10.0611L11.3441 13.335C11.5995 13.5903 11.5995 14.0043 11.3441 14.2597C11.0888 14.515 10.6748 14.515 10.4195 14.2597L6.68319 10.5234C6.42785 10.2681 6.42785 9.85406 6.68319 9.59872Z" fill="#051736"/>
          </svg>
        </BackButton>
        <Title>{title}</Title>
        <span>
          <h2>{type}</h2>
          <h2>{published}</h2>
        </span>
        {/* {youtube && youtube.html && <Content ref={player} html={youtube.html} />} */}
        <div id="player" />
        <SliceZone allSlices={body} />
        {related.length > 0 && 
          <FurtherReading>
            <h2 className="invert-color">FURTHER READING</h2>
            {related.map(({ link: { url, target }, text }) => (
              <p key={url}><a className="invert-link" href={url} target={target}>{text}</a></p>
            ))}
          </FurtherReading>
        }
      </PostContainer>
      <Results />
    </>
  );
}

export default Post;

Post.defaultProps = {
  youtube: null,
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  body: PropTypes.shape().isRequired,
  published: PropTypes.string.isRequired,
  related: PropTypes.array.isRequired,
  youtube: PropTypes.shape({
    html: PropTypes.string,
  }),
}
