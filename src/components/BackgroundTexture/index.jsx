import React from 'react';
import styled from 'styled-components';
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import map from '../../../assetts/images/map.svg'
import mapMobile from '../../../assetts/images/map-mobile.svg'
import Radial from './Radial';

const Background = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`;

const RadialWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Svg = styled.svg`
  border: 15px solid #e7e7e7;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  transition: 3s ease;
`;

const MapContainer = styled.div`
  // position: relative;
  // height: 100%;
  max-height: 100vh;
  overflow: none;
`;

const Map = styled.img`
  // float: right;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
  transform:translate(-50%,-50%);
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  overflow: none;
`;

const Bristol = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #2FF2AF;
  position: absolute;
  left: 36%;
  top: 77%;
  ${props => props.theme.media.md`
    left: 38%;
    top: 48%;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 46%;
    left: 37%;
  `}
`;

const London = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #2FF2AF;
  position: absolute;
  left: 71%;
  top: 74%;
  ${props => props.theme.media.md`
    left: 50%;
    top: 46%;
  `}
  ${props => props.theme.media.lg`
    height: 30px;
    width: 30px;
    top: 41%;
    left: 51%;
  `}
`;

const BackgroundTexture = ({ isContact }) => {
  const viewport = useViewport();
  return (
    <>
      {isContact ?
        <MapContainer>
          <Map src={isViewport(viewport, ['DEFAULT']) ? mapMobile : map} />
          <Bristol />
          <London />
        </MapContainer>
        :
        <Background>
          {!isContact &&
            <RadialWrapper>
              <Radial />
            </RadialWrapper>
          }
          <PatternOverlay>
            <Svg fill="#e7e7e7" className="invert-fill">
              <pattern id="pattern-plus" 
                x="0" 
                y="0" 
                width="6" 
                height="6" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"
              >
                <path d="M 2 0 L 2 2 L 0 2 L 0 6 L 2 6 L 2 8 L 6 8 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 Z" />
              </pattern>
              <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-plus)" />
            </Svg>
          </PatternOverlay>
        </Background>
      }
    </>
  );
};
  
export default BackgroundTexture;
