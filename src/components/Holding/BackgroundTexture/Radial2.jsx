/* eslint-disable */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const radialSize = '55vw';
const speed = 4;

const GradientAnimation = keyframes`
  // 0% {
  //   background-size: 0% 0%;
  // }
  // 25% {
  //   background-size: 25% 25%;
  // }
  // 50% {
  //   background-size: 50% 50%;
  // }
  // 75% {
  //   background-size: 75% 75%;
  // }
  // 100% {
  //   background-size: 100% 100%;
  // }
  from { background-size: 0% 0%; } to { background-size: 100% 100%; opacity: 0; }
`;

// const RadialContainer = styled.div`
//   width: ${radialSize};
//   height: ${radialSize};
//   animation: ${ScaleAnimation} 8s linear 0s infinite alternate,
//   ${props => props.top ? HorizontalAnimation : HorizontalAnimation2} ${props => props.hTime} linear 0s infinite alternate, 
//   ${props => props.top ? VerticalAnimation : VerticalAnimation2} ${props => props.vTime} linear 0s infinite alternate;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
// `;

const RadialGradient = styled.div`
  position: absolute;
  right: ${props => props.right};
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(43, 194, 210, 1), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${GradientAnimation} ${speed}s ease-in-out ${props => props.delay}s infinite;
`;

const Phaser = styled.div`
  position: absolute;
  right: 17.5%;
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), #e36400, rgba(255, 255, 255, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${GradientAnimation} ${speed}s ease-in-out ${props => props.delay}s infinite;
`;

const Radial = () => (
  <>
    <Phaser delay={speed / 3.2}/>
    <Phaser delay={(speed / 2) + (speed / 3.2)}/>
    <RadialGradient right="10%" delay={0}/>
    <RadialGradient right="10%" delay={speed / 2}/>
    <RadialGradient right="25%" delay={0}/>
    <RadialGradient right="25%" delay={speed / 2} />
  </>
);
  
export default Radial;
