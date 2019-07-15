import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'context';
import styled from 'styled-components';
import OffCanvas from 'lib/OffCanvas';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import Copyright from 'components/Global/Copyright';
// import Social from './Social';

const StyledOffCanvasNavigation = styled.div`
  background: #2FF2AF;
  width: 80%;
  height: 100%;
  display: flex;
  // flex: 1 1 50%;
  justify-content: space-between;
`;

const StyledFooter = styled.footer`
  padding: 2rem 0 0 2rem;
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 2rem;
`;

function OffCanvasNav({ navToggle, nav }) {
  const toggled = useContext(NavigationContext)
  useLockBodyScroll(toggled)
  return (
    <OffCanvas selector="#___offcanvas" show={toggled} fromRight>
      <StyledOffCanvasNavigation>
        {/* <StyledFooter>{children}</StyledFooter> */}
        <StyledNav>
          {navToggle}
          {nav}
          <Copyright isNav />
          {/* <Social /> */}
        </StyledNav>
      </StyledOffCanvasNavigation>
    </OffCanvas>
  );
}

export default OffCanvasNav;

OffCanvasNav.propTypes = {
  navToggle: PropTypes.node.isRequired,
  nav: PropTypes.node.isRequired,
  // children: PropTypes.node.isRequired,
};
