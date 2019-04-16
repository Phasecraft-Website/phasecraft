import React from 'react';
import styled from 'styled-components';
// import backgroundTexture from '../../../../assetts/images/background-texture.svg';
// import backgroundTextureMobile from '../../../../assetts/images/background-texture-mobile.svg';

import backgroundTextureS from '../../../../assetts/images/Background-texture-v3.0-mobile.png';
import backgroundTextureM from '../../../../assetts/images/Background-texture-v3.0-1366.png';
import backgroundTextureL from '../../../../assetts/images/Background-texture-v3.0-1920.png';

import backgroundTextureS2 from '../../../../assetts/images/Background-texture-v3.0-mobile@2x.png';
import backgroundTextureM2 from '../../../../assetts/images/Background-texture-v3.0-1366@2x.png';
import backgroundTextureL2 from '../../../../assetts/images/Background-texture-v3.0-1920@2x.png';

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
    let image = backgroundTextureM;
    let srcSet = `${backgroundTextureM} 1x, ${backgroundTextureM2} 2x`;
    let height = '87%';
    if (windowWidth < 786) {
      image = backgroundTextureS;
      srcSet=`${backgroundTextureS} 1x, ${backgroundTextureS2} 2x`;
      height = '614px';
    } else if (windowWidth < 1920) {
      image = backgroundTextureM;
      srcSet=`${backgroundTextureM} 1x, ${backgroundTextureM2} 2x`;
    } else {
      image = backgroundTextureL;
      srcSet=`${backgroundTextureL} 1x, ${backgroundTextureL2} 2x`;
    }
    return (
      <BackgroundTextureDesktop
        height={height}
        src={image}
        srcset={srcSet}
        alt="PhaseCraft"
      />
    );
  }
}

export default BackgroundTexture;
