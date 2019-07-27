import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dropdown = styled.div`
  margin-top: 50px;
  margin-right: -20%;
  overflow: hidden;
  ${props => props.theme.media.md`
    min-width: fit-content;
    background: rgba(255, 255, 255, 0.6);
    width: 60%;
    display: flex;
    justify-content: space-between;
  `}
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
  ${props => props.theme.media.md`
    width: auto;
    background: none;
    font-family: 'GT Pressura Mono Regular';
    letter-spacing: 0.3rem;
  `}
  svg {
    transition: 0.7s;
    ${props => props.theme.media.md`
      display: none;
    `}
  }
  .rotate {
    transform: rotate(135deg);
  }
  .md {
    display: none;
    ${props => props.theme.media.md`
      display: block;
    `}
  }
  .sm {
    ${props => props.theme.media.md`
      display: none;
    `}
  }
`;

const ExpandedContainer = styled.div`
  overflow: hidden;
  ${props => props.theme.media.md`
    height: 100%;
  `}
  .show {
    transform: translateY(0%);
    height: 100%;
  }
  .hide {
    transform: translateY(-120%);
    height: 0;
    ${props => props.theme.media.md`
      height: 100%;
      transform: translateY(0%);
    `}
  }
`;

const ExpandedContent = styled.div`
  background: rgba(255, 255, 255, 0.6);
  transition: 0.7s;
  ${props => props.theme.media.md`
    background: none;
  `}
  ul {
    margin: 0;
    list-style: none;
    font-family: 'Sul Sans, Light';
    padding-inline-start: 30px;
    ${props => props.theme.media.md`
      font-family: 'GT Pressura Mono Light';
      text-transform: uppercase;
      display: flex;
      padding: 0;
    `}
    .current {
      font-family: 'Sul Sans, Regular';
      ${props => props.theme.media.md`
      font-family: 'GT Pressura Mono Bold';
      letter-spacing: 0.3rem;
        background: rgba(228, 229, 227, 0.45);
        padding-left: 30px;
      `}
      &:before {
        opacity: 1!important;
      }
    }
  }
  li {
    font-size: 1.7rem;
    line-height: 2.1rem;
    letter-spacing: 0.2rem;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    outline: none;
    ${props => props.theme.media.md`
      padding: 10px 20px;
      transition: 0.4s;
      font-size: 1.2rem;
      line-height: 1.3rem;
    `}
    &:before {
      content: "";
      position: absolute;
      left: -16px;
      top: 40%;
      // bottom: 50%;
      height: 5px;
      width: 5px;
      background-color: #2FF2AF;
      opacity: 0;
      border-radius: 50%;
      transition: 0.4s;
      ${props => props.theme.media.md`
        left: 12px;
      `}
    }
  }
`;

const Filters = ({ filter, setFilter }) => {
  const [active, setActive] = useState(false);
  const filters = ['All', 'Article', 'Opinion', 'Technical'];
  return (
    <Dropdown>
      <StyledButton onClick={() => setActive(!active)}>
        <span className="sm">Filter by</span>
        <span className="md">SHOWING</span>
        <svg className={active ? 'rotate' : ''} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.74997 0.35968L7.74997 15" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
          <path d="M15.1516 7.67982L0.348389 7.67982" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
        </svg>
      </StyledButton>
      <ExpandedContainer>
        <ExpandedContent className={active ? 'show' : 'hide'}>
          <ul>
            {filters.map(el => (
              <li className={filter === el ? 'current' : ''} onClick={() => setFilter(el)}>
                {el}
              </li>
            ))}
          </ul>
        </ExpandedContent>
      </ExpandedContainer>
    </Dropdown>
  );
}

export default Filters;

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
}
