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
    padding: 0:
    font-size: 1.5rem;
    line-height: 4.0rem;
  `}
`;

const StyledNav = styled.div`
  grid-area: menu;
  // position: fixed;
  right: 0;
  height: 100vh;
  z-index: 1;
  ${props => props.theme.media.md`
    width: 25vw;
  `}
`;

const BackgroundFader = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
  "main main main menu";
  grid-column-gap: 0;
  background-color: #E7E7E7;
  z-index: -1;
  transition: 3s;
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

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    // const { body, documentElement: html } = document;
    const windowHeight = document.documentElement.offsetHeight;
    const windowBottom = windowHeight + window.pageYOffset;
    // const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const { clientHeight } = document.documentElement;
    const backgroundFader = document.getElementById('background-fader');
    if(windowBottom >= clientHeight * 2 && !isContact) {
      backgroundFader.classList.add('invert');
    } else if (!isContact) {
      backgroundFader.classList.remove('invert');
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
            <BackgroundFader id="background-fader" className={isContact ? 'invert' : ''}>
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
