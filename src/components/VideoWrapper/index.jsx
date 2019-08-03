import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import play from '../../../assetts/images/play.svg'

const Wrapper = styled.div`
  padding: 14px;
  margin-top: 30px;
  margin-bottom: 52px;
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
  position: relative;
  width: auto!important;
  margin: 0;
  .video-react-big-play-button-center {
    background-color: transparent!important;
    border: none!important;
    font-size: 25em!important;
    margin-top: 0!important;
    margin-left: 0!important;
    height: 25rem!important;
    width: 25rem!important;
    transform: translate(-50%, -50%)!important;
    left: 50%!important;
    &:before {
      content: url(${play})!important;
      color: rgba(255, 255, 255, 0.75);
      top: -50%!important;
    }
  }
  ${props => props.theme.media.md`
    width: 100%!important;
  `}
`;

const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0V14" stroke="#051736" strokeMiterlimit="10"/>
    <path d="M14 7H0" stroke="#051736" strokeMiterlimit="10"/>
  </svg>
);

const StyledVideo = styled.video`
  width: 100%;
`;

const VideoWrapper = ({ src }) => (
  <Wrapper>
    <Plus />
    <Plus />
    <Plus />
    <Plus />
    <InfoTextBox>
      {/* <StyledVideo controls>
        <source src={src} type="video/mp4" />
      </StyledVideo> */}
      <Player src={src}>
        <BigPlayButton position="center" />
      </Player>
    </InfoTextBox>
  </Wrapper>
);

export default VideoWrapper;

VideoWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  // info: PropTypes.shape({
  //   text: PropTypes.string,
  // }).isRequired,
};
