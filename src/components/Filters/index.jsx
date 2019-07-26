import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dropdown = styled.div`
  margin-top: 50px;
  margin-right: -20%;
  overflow: hidden;
`;

const StyledButton = styled.div`
  width: calc(100% - 28px);
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 14px;
  border: none;
  font-family: 'Sul Sans, Light';
  font-size: 1.3rem;
  line-height: 1.6rem;
  letter-spacing: 0.2rem;
  svg {
    transition: 0.7s;
  }
  .rotate {
    transform: rotate(135deg);
  }
`;

const ExpandedContainer = styled.div`
  overflow: hidden;
  .show {
    transform: translateY(0%);
    height: 100%;
  }
  .hide {
    transform: translateY(-120%);
    height: 0;
  }
`;

const ExpandedContent = styled.div`
  background: rgba(255, 255, 255, 0.6);
  transition: 0.7s;
  ul {
    margin: 0;
    list-style: none;
  }
  li {
    font-family: 'Sul Sans, Light';
    font-size: 1.7rem;
    line-height: 2.1rem;
    padding: 10px 0;

  }
`;

const Filters = () => {
  const [active, setActive] = useState(false);
  return (
    <Dropdown>
      <StyledButton onClick={() => setActive(!active)}>
        <span>Filter by</span>
        <svg className={active ? 'rotate' : ''} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.74997 0.35968L7.74997 15" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
          <path d="M15.1516 7.67982L0.348389 7.67982" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
        </svg>
      </StyledButton>
      <ExpandedContainer>
        <ExpandedContent className={active ? 'show' : 'hide'}>
          <ul>
            <li>
              All
            </li>
            <li>
              Opinion
            </li>
            <li>
              Article
            </li>
            <li>
              Technical
            </li>
          </ul>
        </ExpandedContent>
      </ExpandedContainer>
    </Dropdown>
  );
}

export default Filters;
