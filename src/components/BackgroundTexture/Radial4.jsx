import React from 'react';
import styled, { keyframes } from 'styled-components';

const radialSize = '120vw';
const speed = 5;
const startPointX = `calc(0px - (${radialSize} / 2))`;
const endPointX = (width) => `calc(${width}px - (${radialSize} / 2))`;
const startPointY = `calc(0px - (${radialSize} / 2))`;
const endPointY = (height) => `calc(${height}px - (${radialSize} / 2))`;

const GradientAnimation = ({ width, height }) => keyframes`
  // from { background-size: 0% 0%; } to { background-size: 100% 100%; opacity: 0; }
  from { transform: scale(0); left: ${Math.floor(Math.random() * width) + 1}px; top: ${Math.floor(Math.random() * height) + 1}px; } to { transform: scale(1); opacity: 0; }
`;

const HorizontalAnimation = (width) => keyframes`
  from { left: ${startPointX}; } to { left: ${endPointX(width)}; }
  // from { transform: translateX(${startPointX}); } to { transform: translateX(${endPointX(width)}); }
  // from { transform: translate(${startPointX}, ${startPointY}); } to { transform: translate(${endPointX(width)}, ${endPointY()}); }
`;

// from { transform: translate(${endPointX(width)}, ${endPointY(height)}); } to { transform: translate(${startPointX}, ${startPointY}); }
const HorizontalAnimation2 = (width) => keyframes`
  from { left: ${endPointX(width)}; } to { left: ${startPointX}; }
  // from { transform: translateX(${endPointX(width)}); } to { transform: translateX(${startPointX}); }
  // from { transform: translate(${endPointX(width)}, ${endPointY()}); } to { transform: translate(${startPointX}, ${startPointY}); }
`;

const VerticalAnimation = (height) => keyframes`
  from { top: ${startPointY}; } to { top: ${endPointY(height)}; }
  // from { transform: translateY(${startPointY}); } to { transform: translateY(${endPointY(height)}); }
`;

const VerticalAnimation2 = (height) => keyframes`
  from { top: ${endPointY(height)}; } to { top: ${startPointY}; }
  // from { transform: translateY(${endPointY(height)}); } to { transform: translateY(${startPointY}); }
`;

const PhaserAnimation = keyframes`
  0% {
    background-size: 0% 0%;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    background-size: 100% 100%;
  }
`;

const RadialContainer = styled.div`
  display: inline-block;
  width: ${radialSize};
  height: ${radialSize};
  position: absolute;
  // top: ${props => props.bottom};
  // right: 0;
  // bottom: 0;
  // left: ${props => props.right};
  animation: ${({ top, width }) => top ? HorizontalAnimation(width) : HorizontalAnimation2(width)} ${({ time }) => time.h} -30s linear infinite alternate,
  ${({ top, height }) => top ? VerticalAnimation(height) : VerticalAnimation2(height)} ${({ time }) => time.v} -30s linear infinite alternate;
`;

const RadialGradient = styled.div`
  transform: scale(0);
  position: absolute;
  bottom: 0;
  // right: 0;
  top: 0;
  // left: 0
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .38), rgba(${({ rgb }) => rgb}, .8), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-blend-mode: luminosity;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${({ dimensions }) => GradientAnimation(dimensions)} ${speed}s ease-in ${props => props.delay}s infinite;
`;

const Phaser = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(227, 100, 0, .7), rgba(255, 255, 255, .23), rgba(44, 210, 198, 0));
  background-repeat: no-repeat;
  background-size: 70% 70%;
  background-position: 50% 50%;
  width: ${radialSize};
  height: ${radialSize};
  animation: ${PhaserAnimation} ${speed}s ease-in-out ${props => props.delay}s infinite;
  opacity: 0;
`;

class Radial extends React.Component {
  constructor(props) {
    super(props);
    this.radial1 = React.createRef();
    this.radial2 = React.createRef();
    this.phaser1 = React.createRef();
    this.phaser2 = React.createRef();
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    console.log(Math.floor(Math.random() * 100) + 1);
    // const size = document.documentElement.clientWidth * 0.8;
    this.setState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
    // setInterval(() => {
    //   if (this.radial1.current && this.radial2.current)
    //   const r1 = this.getPositions(this.radial1.current, size);
    //   const r2 = this.getPositions(this.radial2.current, size);

    //   console.log(r1, r2);
    //   // const d = Math.hypot(r2.left-r1.left, r2.top-r1.top);
    //   // if (d < size / 2) {
    //   //   this.phaser1.current.style.opacity = 1 - (d / (size / 2));
    //   //   this.phaser2.current.style.opacity = 1 - (d / (size / 2));
    //   // } else if (d > 250) {
    //   //   this.phaser1.current.style.opacity = 0;
    //   //   this.phaser2.current.style.opacity = 0;
    //   // }
    // }, 1000)
  }

  // getPositions = (el, size) => ({
  //   top: parseInt(el.getBoundingClientRect().top, 10) + size / 2,
  //   left: parseInt(el.getBoundingClientRect().left, 10) + size / 2,
  // })

  render() {
    const { width, height } = this.state;
    return (
      <>

        <RadialGradient delay={0} rgb="43, 194, 210" dimensions={{ width, height }} />
        <RadialGradient delay={speed * 0.25} rgb="227, 100, 0" />
        <RadialGradient delay={speed / 2} rgb="43, 194, 210" />
        <RadialGradient delay={speed * 0.75} rgb="227, 100, 0" />
        {/* <RadialContainer
          ref={this.radial1}
          top
          right="10%"
          time={{ h: '62s', v: '84s'}}
          // vTime="74s"
          bottom={`calc(20% - (${radialSize} / 2))`}
          height={height}
          width={width}
        >
          <RadialGradient delay={0} rgb="43, 194, 210" />
          <Phaser delay={0} ref={this.phaser1} />

          <RadialGradient delay={speed / 2} rgb="43, 194, 210" />
          <Phaser delay={speed / 2} />
        </RadialContainer>
        <RadialContainer
          ref={this.radial2}
          right="25%"
          time={{ h: '68s', v: '94s'}}
          // vTime="54s"
          bottom={`calc(60% - (${radialSize} / 2))`}
          height={height}
          width={width}
        >
          <RadialGradient delay={speed * 0.25} rgb="227, 100, 0" />
          <Phaser delay={speed * 0.25} />

          <RadialGradient delay={speed * 0.75} rgb="227, 100, 0" />
          <Phaser delay={speed * 0.75} ref={this.phaser2} />
        </RadialContainer> */}
      </>
    );
  }
}
  
export default Radial;