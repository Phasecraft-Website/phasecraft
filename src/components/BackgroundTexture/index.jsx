import React from 'react';
import styled from 'styled-components';
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import map from '../../../assetts/images/map.svg'
import mapMobile from '../../../assetts/images/map-mobile.svg'
import Radial from './Radial3';

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

const Map = styled.img`
  float: right;
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`;

const BackgroundTexture = ({ isContact }) => {
  const viewport = useViewport();
  return (
    <Background>
      {!isContact &&
        <RadialWrapper>
          <Radial />
        </RadialWrapper>
      }
      <PatternOverlay>
        {isContact ?
          <Map src={isViewport(viewport, ['DEFAULT', 'MEDIUM']) ? mapMobile : map} />
          :
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
        }
      </PatternOverlay>
    </Background>
  );
};
  
export default BackgroundTexture;