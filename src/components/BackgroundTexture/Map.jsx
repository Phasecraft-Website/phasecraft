import React from 'react';
import styled from 'styled-components';
import europe from '../../../assetts/images/Europe.svg';

const Background = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(6, 22, 55, 0), rgba(6, 22, 55, 1), rgba(6, 22, 55, 1), rgba(6, 22, 55, 1));
`;

const Svg = styled.svg`
  border: 15px solid #e7e7e7;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  transition: 3s ease;
`;

const MapSvg = styled.img`
  position: absolute;
  top: -20%;
  left: -14%;
  width: 75%;
  ${props => props.theme.media.md`
    top: -30%;
    left: -6%;
    width: 100%;
  `}
`;

const Bristol = styled.div`
  z-index: 3;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #2FF2AF;
  position: absolute;
  top: 14%;
  left: 4%;
  ${props => props.theme.media.md`
    height: 30px;
    width: 30px;
    top: 15%;
    left: 18%;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 15%;
    left: 18%;
  `}
`;

const London = styled.div`
  z-index: 3;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #2FF2AF;
  position: absolute;
  top: 13%;
  left: 8%;
  ${props => props.theme.media.md`
    height: 30px;
    width: 30px;
    top: 14%;
    left: 23.5%;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 14%;
    left: 23.5%;
  `}
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 3500px;
  height: 3595px;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
`;

const Map = () => (
  <AbsoluteContainer>
    <RelativeContainer>
      <Bristol className="fade-out" />
      <London className="fade-out" />
      <Background>
        <MapSvg src={europe} />
        <PatternOverlay>
          <Svg fill="#e7e7e7" className="invert-fill">
            <pattern id="pattern-plus" 
              x="0" 
              y="0" 
              width="8" 
              height="8" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"
            >
              <path d="M 2 0 L 2 2 L 0 2 L 0 6 L 2 6 L 2 8 L 6 8 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 Z" />
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-plus)" />
          </Svg>
        </PatternOverlay>
      </Background>
    </RelativeContainer>
  </AbsoluteContainer>
);
  
export default Map;
