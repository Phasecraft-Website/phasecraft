import React from 'react';
import styled from 'styled-components';

import textureS from '../../../../assetts/images/texture-mobile@2x.png';
import textureM from '../../../../assetts/images/texture-1366@2x.png';
import textureL from '../../../../assetts/images/texture-1920@2x.png';

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
  state = { windowWidth: null };
  
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
    const { windowWidth = window.innerWidth } = this.state;
    let image = textureM;
    let height = '89%';
    if (windowWidth < 786) {
      image = textureS;
      height = '614px';
    } else if (windowWidth < 1920) {
      image = textureM;
    } else {
      image = textureL;
    }
    return (
      <BackgroundTextureDesktop
        height={height}
        src={image}
        alt="PhaseCraft"
      />
    );
  }
}

export default BackgroundTexture;
