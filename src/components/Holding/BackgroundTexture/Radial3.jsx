import React from 'react';
import styled, { keyframes } from 'styled-components';

const radialSize = '75vw';
const speed = 16;

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
  from { background-size: 0% 0%; } to { background-size: 100% 100%; opacity: 0 }
`;

const PhaserAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const RadialContainer = styled.div`
  width: ${radialSize};
  height: ${radialSize};
  position: absolute;
  top: ${props => props.bottom};
  right: 0;
  bottom: 0;
  left: ${props => props.right};
`;

const RadialGradient = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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
  bottom: 0;
  right: 0;
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(227, 100, 0, .7), rgba(255, 255, 255, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-size: 0% 0%;
  background-position: 50% 50%;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${GradientAnimation} ${speed}s ease-in-out ${props => props.delay}s infinite,
  ${PhaserAnimation} ${speed}s ease-in-out ${props => props.delay}s infinite;
  opacity: 0;
`;

const Radial = () => (
  <>
    {/* <Phaser delay={speed / 3.1}/>
    <Phaser delay={(speed / 2) + (speed / 3.1)} />
    <RadialGradient right="10%" delay={0} bottom="5%"/>
    <RadialGradient right="10%" delay={speed / 2} bottom="5%" />
    <RadialGradient right="25%" delay={0} bottom="10%"/>
    <RadialGradient right="25%" delay={speed / 2} bottom="10%" /> */}

    <RadialContainer right="10%" bottom={`calc(20% - (${radialSize} / 2))`}>
      <RadialGradient delay={0} />
      <Phaser delay={0} />

      <RadialGradient delay={speed / 2} />
      <Phaser delay={speed / 2} />
    </RadialContainer>
    <RadialContainer right="25%" bottom={`calc(60% - (${radialSize} / 2))`}>
      <RadialGradient delay={0} />
      <Phaser delay={0} />

      <RadialGradient delay={speed / 2} />
      <Phaser delay={speed / 2} />
    </RadialContainer>
  </>
);
  
export default Radial;
