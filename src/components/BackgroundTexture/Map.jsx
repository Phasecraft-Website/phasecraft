import React from 'react';
import styled from 'styled-components';
import europe from '../../../assetts/images/matrix.svg';

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
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  transition: 3s ease;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const MapSvg = styled.img`
  position: absolute;
  width: 1725px;
  left: -320px;
  top: 90px;
  // width: 460%;
  // left: -85%;
  // top: 14%;
  height: auto;
  ${props => props.theme.media.md`
    height: auto;
    top: 0;
    left: 0;
    width: 1400px;
  `}
  ${props => props.theme.media.lg`
    width: 2200px;
  `}
`;

const Gradient = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(6, 22, 55, 0), rgba(6, 22, 55, 0), rgba(6, 22, 55, 0), rgba(6, 22, 55, 1));
  ${props => props.theme.media.md`
    background: radial-gradient(rgba(6, 22, 55, 0), rgba(6, 22, 55, 0), rgba(6, 22, 55, 0.7), rgba(6, 22, 55, 1));
    height: auto;
    width: 1400px;
  `}
  ${props => props.theme.media.lg`
    width: 2200px;
  `}
`;

const Bristol = styled.div`
  z-index: 1;
  border-radius: 50%;
  height: 23px;
  width: 23px;
  background-color: #2FF2AF;
  position: absolute;
  top: 502px;
  left: 141px;
  ${props => props.theme.media.md`
    height: 20px;
    width: 20px;
    top: 376px;
    left: 372px;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 523px;
    left: 586px;
  `}
`;

const London = styled.div`
  z-index: 1;
  border-radius: 50%;
  height: 23px;
  width: 23px;
  background-color: #2FF2AF;
  position: absolute;
  top: 524px;
  left: 270px;
  ${props => props.theme.media.md`
    height: 20px;
    width: 20px;
    top: 394px;
    left: 477px;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 551px;
    left: 750px;
  `}
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 3500px;
  height: 3595px;
`;

const Map = () => (
  <AbsoluteContainer>
    <MapContainer>
      <MapSvg src={europe} />
      <Gradient />
      <Bristol className="fade-out" />
      <London className="fade-out" />
    </MapContainer>
  </AbsoluteContainer>
  // <AbsoluteContainer>
  //   <RelativeContainer>
  //     {/* <Bristol className="fade-out" />
  //     <London className="fade-out" /> */}
  //     <Background>
  //       <MapSvg src={europe} />
  //       {/* <PatternOverlay>
  //         <Svg fill="#051736">
  //           <pattern id="pattern-plus" 
  //             x="0"
  //             y="0"
  //             width="8"
  //             height="8" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"
  //           >
  //             <path d="M 2 0 L 2 2 L 0 2 L 0 6 L 2 6 L 2 8 L 6 8 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 Z" />
  //           </pattern>
  //           <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-plus)" />
  //         </Svg>
  //       </PatternOverlay> */}
  //     </Background>
  //   </RelativeContainer>
  // </AbsoluteContainer>
);
  
export default Map;
