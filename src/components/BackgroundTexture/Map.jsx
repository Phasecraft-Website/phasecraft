import React from 'react';
import styled from 'styled-components';
import europe from '../../../assetts/images/matrix.svg';

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
  overflow-x: hidden;
`;

const MapSvg = styled.img`
  position: absolute;
  width: 1725px;
  left: -320px;
  top: 90px;
  height: auto;
  mask-image: linear-gradient(to bottom, rgba(6, 22, 55, 1) 50%, rgba(6, 22, 55, 0) 65%);
  ${props => props.theme.media.md`
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(6, 22, 55, 1) 50%, rgba(6, 22, 55, 0) 75%);
    height: auto;
    top: -50px;
    left: 0;
    width: 1400px;
  `}
  ${props => props.theme.media.lg`
    width: 2200px;
  `}
`;

const Map = () => (
  <AbsoluteContainer>
    <MapContainer>
      <MapSvg src={europe} />
    </MapContainer>
  </AbsoluteContainer>
);
  
export default Map;
