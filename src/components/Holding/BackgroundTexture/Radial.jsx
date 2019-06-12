/* eslint-disable */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const radialSize = '30vw';

const ScaleAnimation = keyframes`
  from { transform: scale(1); } to { transform: scale(1.8); }
`;

const HorizontalAnimation = keyframes`
  from { left: 0; } to { left: calc(100% - ${radialSize}); }
`;

const HorizontalAnimation2 = keyframes`
  from { left: calc(100% - ${radialSize}); } to { left: 0; }
`;

const VerticalAnimation = keyframes`
  from { top: 0; } to { top: calc(100% - ${radialSize}); }
`;

const VerticalAnimation2 = keyframes`
  from { top: calc(100% - ${radialSize}); } to { top: 0; }
`;

const RadialContainer = styled.div`
  width: ${radialSize};
  height: ${radialSize};
  animation: ${ScaleAnimation} 8s linear 0s infinite alternate,
  ${props => props.top ? HorizontalAnimation : HorizontalAnimation2} ${props => props.hTime} linear 0s infinite alternate, 
  ${props => props.top ? VerticalAnimation : VerticalAnimation2} ${props => props.vTime} linear 0s infinite alternate;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const RadialGradient = styled.div`
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), rgba(43, 194, 210, .28), rgba(43, 194, 210, 1), rgba(44, 210, 198, .23), rgba(44, 210, 198, 0));
  transition: background 0.5s ease;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: ${radialSize};
  height: ${radialSize};
`;

const Phaser = styled.div`
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(50% 50%, rgba(0, 0, 0, 0), #e36400, #e36400, rgba(255, 255, 255, .23), rgba(255, 255, 255, 0));
  background-repeat: no-repeat;
  width: ${radialSize};
  height: ${radialSize};
  transition: opacity 0.5s linear;
  opacity: 0;
`;

class Radial extends React.Component {
  constructor(props) {
    super(props);
    this.radial1 = React.createRef();
    this.radial2 = React.createRef();
    this.phaser1 = React.createRef();
    this.phaser2 = React.createRef();
  }

  componentDidMount() {
    const size = document.documentElement.clientWidth * 0.15;
    setInterval(() => {
      const r1 = this.getPositions(this.radial1.current, size);
      const r2 = this.getPositions(this.radial2.current, size);
      const d = Math.hypot(r2.left-r1.left, r2.top-r1.top);
      if (d < 250) {
        this.phaser1.current.style.opacity = 1 - (d / 250);
        this.phaser2.current.style.opacity = 1 - (d / 250);
        // this.setState({ orange: 1 * (d / 250) });
      } else if (d > 250) {
        this.phaser1.current.style.opacity = 0;
        this.phaser2.current.style.opacity = 0;
        // this.setState({ orange: 0 });
      }
    }, 1000)
  }

  getPositions(el, size) {
    return {
      top: parseInt(window.getComputedStyle(el).getPropertyValue('top')) - size,
      left: parseInt(window.getComputedStyle(el).getPropertyValue('left')) - size,
    }
  }

  render() {
    return (
      <>
        <RadialContainer hTime="19s" vTime="13s" top ref={this.radial1}>
          <RadialGradient/>
          <Phaser ref={this.phaser1} />
        </RadialContainer>
        <RadialContainer hTime="13s" vTime="19s" ref={this.radial2}>
          <RadialGradient />
          <Phaser ref={this.phaser2} />
        </RadialContainer>
      </>
    );
  }
}
  
export default Radial;
