import React from 'react';
import styled from 'styled-components';
import { Layout } from 'components';
import Home from '../components/Home';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Index() {
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const { body, documentElement: html } = document;
    const windowHeight = document.documentElement.offsetHeight;
    const windowBottom = windowHeight + window.pageYOffset;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const { clientHeight } = document.documentElement;
    const backgroundFader = document.getElementById('background-fader');
    console.log(docHeight);
    // const svg = document.getElementById('svg-pattern');
    if(windowBottom >= clientHeight * 2) {
      backgroundFader.classList.add('invert');
    } else {
      backgroundFader.classList.remove('invert');
    }
  }

  function throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </>
  );
}

export default Index;
