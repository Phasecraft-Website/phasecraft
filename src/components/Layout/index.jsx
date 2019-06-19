import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize, GlobalStyles } from 'lib';
import theme from 'theme';
import { isViewport } from 'helpers';

import useViewport from 'hooks/useViewport';
import Global from 'components/Global';
import BackgroundTexture from 'components/BackgroundTexture/BackgroundExp';
import SEO from '../SEO';

const StyledLayout = styled.main`
  display: grid;
  position: relative;
  grid-template-areas:
  "main main main menu"
  "main main main menu";
  grid-column-gap: 0;
  min-height: 100vh;
  &:before { 
    content:"";
    position:fixed;
    top:50%;
    left: 50%;
    z-index: 9999;
    width: 1px; height: 1px;
    outline: 2999px solid invert;
  }
`;

const StyledMain = styled.div`
  grid-area: main;
`;

const StyledNav = styled.div`
  grid-area: menu;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 25vw;
`;

// const StickyNav = styled.div`
//   position: absolute;
//   right: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

function Layout({ children, ...props }) {
  const viewport = useViewport();
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <Normalize />
        <GlobalStyles />
        <StyledLayout {...props}>
          <BackgroundTexture />
          <StyledMain>
            {children}
          </StyledMain>
          <StyledNav>
            {/* <StickyNav> */}
            {!isViewport(viewport, ['DEFAULT', 'MEDIUM']) && (
              <>
                <Global.Navigation />
                <Global.Copyright />
              </>
            )}
            {/* </StickyNav> */}
          </StyledNav>
        </StyledLayout>
      </>
    </ThemeProvider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
