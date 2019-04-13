import React from 'react';
import styled from 'styled-components';
import backgroundTexture from '../../../../assetts/images/background-texture.svg';
import backgroundTextureMobile from '../../../../assetts/images/background-texture-mobile.svg';

const BackgroundTextureDesktop = styled.img`
  position: absolute;
  top: 19px;
  right: 5px;
  z-index: -1;
  @media only screen 
  and (min-width: 768px) {
    top: 36px;
    right: 69px;
  }
`;

class BackgroundTexture extends React.Component {
  state = { windowWidth: 0 };
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { windowWidth } = this.state;
    const image = windowWidth < 786 ? backgroundTextureMobile : backgroundTexture;
    return (
      <BackgroundTextureDesktop src={image} alt="PhaseCraft" />
    );
  }
}

export default BackgroundTexture;
