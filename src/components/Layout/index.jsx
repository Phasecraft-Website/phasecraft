import React, { useState, useContext, useEffect } from 'react';
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
import { ScrollFade } from '../../hooks/useScrollFade';

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
    width: 85%;
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
    "main main main main menu";
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

const BackToTop = styled.button`
  position: fixed;
  bottom: 17px;
  right: 22px;
  width: 60px;
  height: 60px;
  background-color: #2FF2AF;
  border-radius: 50%;
  z-index: 3;
  border: none;
  opacity: 0;
  transition: opacity 0.5s;
  outline: none;
  ${props => props.theme.media.md`
    display: none;
  `}
`;

const ScrollListener = ({ isHome, isContact }) => {
  const { state } = useContext(ScrollFade);
  let scrollHeight;
  let docHeight;
  let clientHeight;
  let backgroundFader;
  let scrollFade;
  let fadeHeader;
  let backToTop;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    docHeight = document.documentElement.offsetHeight;
    ({ clientHeight } = document.documentElement);
    backgroundFader = document.getElementById('background-fader');
    fadeHeader = document.getElementById('fade-header');
    backToTop = document.getElementById('to-top');
    scrollFade = scrollHeight - (clientHeight * 0.25);
  });
  useEffect(() => {
    if (state.scrollFade !== 0) {
      ({ scrollFade } = state);
    }
  }, [state.scrollFade]);
  const handleScroll = () => {
    const windowBottom = docHeight + window.pageYOffset;
    const scrollIsBelowTop = window.pageYOffset >= 20;
    const scrollIsAboveBottom = window.pageYOffset <= document.body.scrollHeight - docHeight - 10;
    if (scrollIsBelowTop && scrollIsAboveBottom ) {
      fadeHeader.setAttribute('style', 'opacity: 1');
    } else if (!scrollIsBelowTop || (!scrollIsAboveBottom && !isContact)) {
      fadeHeader.removeAttribute('style');
    }
    if (window.pageYOffset >= docHeight) {
      backToTop.setAttribute('style', 'opacity: 1');
    } else {
      backToTop.removeAttribute('style');
    }

    if ((windowBottom >= scrollFade && isHome) || (windowBottom < scrollFade && !isHome && !isContact)) {
      backgroundFader.classList.remove('invert');
    } else if ((windowBottom < scrollFade && isHome) || (windowBottom >= scrollFade && !isHome)) {
      backgroundFader.classList.add('invert');
    }
  }
  return null;
}

function Layout({ isContact, isHome, children, ...props }) {
  const [navToggled, setNavToggled] = useState(false);
  const viewport = useViewport();

  function handleNavToggle() {
    setNavToggled(prev => !prev);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <Normalize />
        <GlobalStyles />
        <ScrollListener isHome={isHome} isContact={isContact} />
        <BackToTop id="to-top" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>
          <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50441 24.6498L6.50441 2.61809L10.6044 7.71809C10.8044 7.91809 11.1044 7.91809 11.3044 7.71809C11.5044 7.61809 11.6044 7.21809 11.4044 7.01809L6.80441 1.31809C6.60441 1.11809 6.40441 1.01809 6.20441 0.918091C5.90441 0.918091 5.70441 0.918091 5.50441 1.11809C5.40441 1.21809 5.30441 1.21809 5.30441 1.31809L0.604411 7.11809C0.504411 7.11809 0.504411 7.21809 0.504411 7.31809C0.504411 7.41809 0.60441 7.61809 0.704411 7.71809C0.90441 7.91809 1.20441 7.91809 1.40441 7.71809L5.50441 2.61809L5.50441 24.6498C5.50441 24.9498 5.70441 25.1498 6.00441 25.1498C6.30441 25.1498 6.50441 24.9498 6.50441 24.6498Z" fill="#323149"/>
          </svg>
        </BackToTop>
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
                    <Global.Copyright isHome={isHome} isContact={isContact} />
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
