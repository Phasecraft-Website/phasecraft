import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components';
import Home from '../components/Home';
import { ScrollFadeProvider } from '../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Index() {
  return (
    <ScrollFadeProvider>
      <Layout isHome>
        <Home />
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </ScrollFadeProvider>
  );
}

export default Index;
