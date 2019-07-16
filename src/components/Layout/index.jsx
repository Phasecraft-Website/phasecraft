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
  min-height: 110vh;
  ${props => props.theme.media.md`
    min-height: 100vh;
  `}
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
  pointer-events: none;
`;

const BackgroundFader = styled.div`
  display: grid;
  grid-template-areas:
  "main main main main main menu";
  grid-auto-columns: 1fr;
  grid-column-gap: 0;
  width: 100%;
  background-color: #E7E7E7;
  z-index: 0;
  transition: background-color 3s;
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

function Layout({ isContact, isHome, children, ...props }) {
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
  let fadeHeader;

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
    fadeHeader = document.getElementById('fade-header');
    scrollPoint = scrollHeight - (clientHeight * 0.25);
  });

  const handleScroll = () => {
    const windowBottom = windowHeight + window.pageYOffset;
    const scrollIsBelowTop = window.pageYOffset >= 20;
    const scrollIsAboveBottom = window.pageYOffset <= scrollHeight - windowHeight - 10;
    if (scrollIsBelowTop && scrollIsAboveBottom) {
      fadeHeader.setAttribute('style', 'opacity: 1');
    } else if (!scrollIsBelowTop || (!scrollIsAboveBottom && !isContact)) {
      fadeHeader.removeAttribute('style');
    }

    if ((windowBottom >= scrollPoint && isHome) || (windowBottom < scrollPoint && !isHome && !isContact)) {
      backgroundFader.classList.remove('invert');
    } else if ((windowBottom < scrollPoint && isHome) || (windowBottom >= scrollPoint && !isHome)) {
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
            <BackgroundFader id="background-fader" className={isHome || isContact ? 'invert' : ''}>
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
  isHome: false,
}

Layout.propTypes = {
  isContact: PropTypes.bool,
  isHome: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
