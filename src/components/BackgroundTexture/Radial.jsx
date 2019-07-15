import React from 'react';
import styled, { keyframes } from 'styled-components';

const radialSize = '150vw';
const speed = 18;
const startPointX = `calc(25% - (${radialSize} / 2))`;
const endPointX = (width) => `calc(${width}px - (${radialSize} / 2))`;
const startPointY = `calc(0px - (${radialSize} / 2))`;
const endPointY = (height) => `calc(${height}px - (${radialSize} / 2))`;

const GradientAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const HorizontalAnimation = (width) => keyframes`
  from { transform: translateX(${startPointX}); } to { transform: translateX(${endPointX(width)}); }
`;

const VerticalAnimation = (height) => keyframes`
  from { top: ${startPointY}; } to { top: ${endPointY(height)}; }
`;

const RadialContainer = styled.div`
  display: inline-block;
  width: ${radialSize};
  height: ${radialSize};
  position: absolute;
  will-change: transform, top;
  animation: ${({ width }) => HorizontalAnimation(width)} ${({ time }) => time.h} -${({ startAt }) => startAt}s linear infinite alternate,
  ${({ height }) => VerticalAnimation(height)} ${({ time }) => time.v} -${({ startAt }) => startAt}s linear infinite alternate;
`;

const RadialGradient = styled.div`
  // will-change: transform, opacity, background-size;
  transform: scale(0);
  position: absolute;
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .38), rgba(${({ rgb }) => rgb}, 1), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-blend-mode: luminosity;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${GradientAnimation} ${speed}s ease-in ${props => props.delay}s infinite;
`;

class Radial extends React.Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.setState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <>
        <RadialContainer
          time={{ h: '62s', v: '84s'}}
          height={height}
          width={width}
          startAt={Math.floor(Math.random() * 60) + 20}
        >
          <RadialGradient delay={-(speed / 2)} rgb="43, 194, 210" />

          <RadialGradient delay={0} rgb="43, 194, 210" />
        </RadialContainer>
        <RadialContainer
          time={{ h: '68s', v: '94s'}}
          height={height}
          width={width}
          startAt={Math.floor(Math.random() * 20) + 1}
        >
          <RadialGradient delay={-(speed * 0.25)} rgb="23, 145, 189" />

          <RadialGradient delay={speed * 0.25} rgb="23, 145, 189" />
        </RadialContainer>
      </>
    );
  }
}
  
export default Radial;
