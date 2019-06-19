/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Radial from './Radial3';

// const GradientAnimation = keyframes`
//   0% {
//     background-size: 120% 120%;
//     background-position: 75% 75%;
//   }
//   25% {
//     background-size: 75% 75%;
//     background-position: 25% 75%;
//   }
//   50% {
//     background-size: 60% 60%;
//     background-position: 50% 50%;
//   }
//   75% {
//     background-size: 75% 75%;
//     background-position: 75% 25%;
//   }
//   100% {
//     background-size: 120% 120%;
//     background-position: 75% 75%;
//   }
// `;

// const GradientAnimation2 = keyframes`
//   0% {
//     background-size: 120% 120%;
//     background-position: 75% 75%;
//   }
//   25% {
//     background-size: 75% 75%;
//     background-position: 75% 25%;
//   }
//   50% {
//     background-size: 60% 60%;
//     background-position: 50% 50%;
//   }
//   75% {
//     background-size: 75% 75%;
//     background-position: 25% 75%;
//   }
//   100% {
//     background-size: 120% 120%;
//     background-position: 75% 75%;
//   }
// `;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

// const Radial = styled.div`
//   background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(43, 194, 210, 1), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   background-position: 50% 50%;
//   width: 98vh;
//   height: 98vh;
//   animation: ${GradientAnimation} 8s linear infinite;
// `;

// const Radial2 = styled.div`
//   background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(43, 194, 210, 1), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   background-position: 50% 50%;
//   width: 98vh;
//   height: 98vh;
//   animation: ${GradientAnimation2} 8s linear infinite;
// `;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`;

const RadialWrapper = styled.div`
  // position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Svg = styled.svg`
  transition: 3s ease;
`;

const BackgroundTexture = () => (
  <Background>
    <RadialWrapper>
      <Radial />
    </RadialWrapper>
    <PatternOverlay>
      <Svg width="100%" height="100%" fill="#e7e7e7" className="invert-fill">
        <pattern id="pattern-plus" 
                x="0" 
                y="0" 
                width="7" 
                height="7" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <path d="M 2 0 L 2 2 L 0 2 L 0 6 L 2 6 L 2 8 L 6 8 L 6 6 L 8 6 L 8 2 L 6 2 L 6 0 Z" />
        </pattern>
        <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-plus)" />
      </Svg>
    </PatternOverlay>
  </Background>
);
  
export default BackgroundTexture;