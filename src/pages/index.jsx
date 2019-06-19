import React from 'react';
import { Layout } from 'components';
import Home from '../components/Home';

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
    console.log(docHeight);
    // const svg = document.getElementById('svg-pattern');
    if(windowBottom >= clientHeight * 2) {
      body.classList.add('invert');
    } else {
      body.classList.remove('invert');
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
    <Layout>
      <Home />
    </Layout>
  );
}

export default Index;
