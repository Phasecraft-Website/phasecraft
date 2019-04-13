import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize, GlobalStyles } from 'lib';
import theme from 'theme';

import SEO from '../SEO';

const StyledLayout = styled.main``;

function Layout({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <Normalize />
        <GlobalStyles />
        <StyledLayout {...props}>{children}</StyledLayout>
      </>
    </ThemeProvider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
