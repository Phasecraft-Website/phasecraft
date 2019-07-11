import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components';
import Home from '../components/Home';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Index() {
  return (
    <>
      <Layout isHome>
        <Home />
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </>
  );
}

export default Index;
