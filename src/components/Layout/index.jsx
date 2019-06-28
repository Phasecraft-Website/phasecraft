import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize, GlobalStyles } from 'lib';
import theme from 'theme';
import { isViewport } from 'helpers';

import { NavigationContext } from 'context';
import useViewport from 'hooks/useViewport';
import Global from 'components/Global';
import BackgroundTexture from 'components/BackgroundTexture';
import SEO from '../SEO';

const StyledLayout = styled.main`
  min-height: 100vh;
`;

const StyledMain = styled.div`
  grid-area: main;
  z-index: 1;
  padding: 0 14px;
  ${props => props.theme.media.md`
    padding: 0 36px;
    font-size: 1.5rem;
    line-height: 4.0rem;
  `}
`;

const StyledNav = styled.div`
  grid-area: menu;
  right: 0;
  height: 100vh;
  z-index: 1;
`;

const BackgroundFader = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 0;
  background-color: #E7E7E7;
  z-index: 0;
  transition: background-color 3s;
  grid-template-areas:
  "main main main main main menu";
  ${props => props.theme.media.md`
    grid-template-areas:
    "main main main menu";
    overflow: hidden;
    position: relative;
  `}
`;

const FixedNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const FixedToggle = styled.div`
  position: fixed;
  top: 32px;
  right: 24px;
`;

// const StickyNav = styled.div`
//   position: absolute;
//   right: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

function Layout({ isContact, children, ...props }) {
  const [navToggled, setNavToggled] = useState(false);
  const viewport = useViewport();

  function handleNavToggle() {
    setNavToggled(prev => !prev);
  }

  let scrollHeight;
  let windowHeight;
  let clientHeight;
  let backgroundFader;
  let scrollPoint;
  let fadeOuts = [];

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    windowHeight = document.documentElement.offsetHeight;
    ({ clientHeight } = document.documentElement);
    backgroundFader = document.getElementById('background-fader');
    fadeOuts = document.getElementsByClassName('fade-out');
    scrollPoint = scrollHeight - (clientHeight * 0.5);
  });

  const handleScroll = () => {
    const windowBottom = windowHeight + window.pageYOffset;
    Array.from(fadeOuts).forEach(item => {
      const { top } = item.getBoundingClientRect();
      console.log(top);
      item.setAttribute('style', `opacity: ${(top - 100) / 100}`);
    });
    // const fadeOutY = fadeOut.getBoundingClientRect();
    // console.log(fadeOutY.top);
    // fadeOut.setAttribute('style', `opacity: ${fadeOutY.top / 100}`);
    if(windowBottom >= scrollPoint && !isContact) {
      backgroundFader.classList.remove('invert');
    } else if (!isContact) {
      backgroundFader.classList.add('invert');
    } else {
      backgroundFader.classList.add('invert');
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <Normalize />
        <GlobalStyles />
        <NavigationContext.Provider value={navToggled}>
          <StyledLayout {...props}>
            <BackgroundFader id="background-fader" className="invert">
              <BackgroundTexture isContact={isContact} />
              <StyledMain>
                {children}
              </StyledMain>
              <StyledNav>
                {isViewport(viewport, ['DEFAULT', 'MEDIUM']) ? (
                  <FixedToggle>
                    <Global.NavigationToggle onToggle={handleNavToggle} />
                  </FixedToggle>
                ) : (
                  <FixedNav>
                    <Global.Navigation />
                    <Global.Copyright isContact={isContact} />
                  </FixedNav>
                )}
              </StyledNav>
            </BackgroundFader>
          </StyledLayout>
          {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && (
            <Global.OffCanvasNav
              navToggle={
                <Global.NavigationToggle onToggle={handleNavToggle} />
              }
              nav={<Global.Navigation />}
            >
            </Global.OffCanvasNav>
          )}
        </NavigationContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default Layout;

Layout.defaultProps = {
  isContact: false,
}

Layout.propTypes = {
  isContact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
