import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import { ScrollFade } from '../../hooks/useScrollFade';

const StyledPerson = styled.article`
  grid-column-end: span ${({ active }) => active ? 2 : 1};
  position: relative;
  ${props => props.theme.media.md`
    grid-column-end: span ${({ active }) => active ? 3 : 1};
  `}
`;

const GridContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-areas:
  "info"
  "info";
  ${props => props.theme.media.md`
    grid-template-areas:
    "info info info";
  `}
`;

const Grayscale = styled.article`
  filter: grayscale(1);
  transition: filter .3s;
`;

const StyledInfo = styled.button`
  position: absolute;
  bottom: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #2FF2AF;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.media.md`
    padding-top: 0;
    display: block;
    font-size: 1.8rem;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transform: scale(.9) translate(-50%, -50%);
    transform-origin: top left;
    width: 30%;
    height: 30%;
    font-family: GT Pressura Mono Regular;
    font-size: 1.7rem;
    line-height: 1.9rem;
    letter-spacing: 0.2rem;
    cursor: pointer;
    color: #051736;
    opacity: 0;
    transition: 0.6s;
    &:focus {
      outline: none;
    }
  `}
`;

const StyledPicture = styled.figure`
  position: relative;
  margin: 0;
  background-color: ${({ active }) => active ? 'rgba(238, 238, 238, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  ${props => props.theme.media.md`
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
      background: rgba(5, 23, 54, 0.3);
      transition: opacity 0.8s;
    }
  `};
`;

const StyledFunction = styled.span`
  font-family: 'Sul Sans, Light';
  color: #051736;
  font-size: 1.7rem;
  line-height: 1.9rem;
  ${props => props.theme.media.md`
    font-size: 1.7rem;
    line-height: 2.8rem;
  `}
`;

const StyledName = styled.header`
  font-family: 'Sul Sans, Regular';
  color: #051736;
  h2 {
    font-size: 2rem;
    line-height: 2.2rem;
    margin-bottom: 10px;
    text-transform: none;
    letter-spacing: normal;
    cursor: pointer;
    position: relative;
    max-width: fit-content;
    ${props => props.theme.media.md`
      margin-bottom: 0;
      font-size: 2.5rem;
      line-height: 2.7rem;
      &::after {
        content: ' ';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: calc(100% - 3px);
        left: -0.2em;
        bottom: 0;
        padding: 0.2em;
        transition: background-color 0.6s;
      };
    `}
  }
`;

const HoverEffect = styled.div`
  ${props => props.theme.media.md`
    &:hover {
      ${StyledInfo} {
        transform: scale(1) translate(-50%, -50%);
        opacity: ${({ active }) => active ? '0' : '1'};
        cursor: ${({ active }) => active ? 'default' : 'pointer'};
        pointer-events: ${({ active }) => active ? 'none' : 'all'};
        z-index: 1;
      }
      ${StyledPicture}::after {
        opacity: ${({ active }) => active ? '0' : '1'};
      }
      h2 {
        z-index: 1;
        cursor: ${({ active }) => active ? 'default' : 'pointer'};
        pointer-events: ${({ active }) => active ? 'none' : 'all'};
        &::after {
          background-color: ${({ active }) => active ? 'transparent' : '#2FF2AF'};
        }
      }
    }
  `}
`;

const BasicInfo = styled.div`
  grid-area: 'info';
  grid-column-end: span ${({ active }) => active ? '2' : '3'};
  padding: ${({ active }) => active ? '10px' : '0'};
  background-color: ${({ active }) => active ? 'rgba(255, 255, 255, 0.7);' : 'transparent'};
  transition-duration: 0.3s;
  transition-delay: ${({ active }) => active ? '0s' : '0.5s'};
  ${props => props.theme.media.md`
    grid-column-end: span ${({ active }) => active ? '1' : '3'};
  `}
`;

const ExpandedInfo = styled.div`
  grid-area: 'info';
  grid-column-end: span ${({ active }) => active ? '2' : '0'};
  overflow: hidden;
  max-height: ${({ active }) => active ? '100%' : '0'};
  position: relative;
  z-index: ${({ active }) => active ? '1' : '-1'};
  opacity: ${({ active }) => active ? '1' : '0'};
  background: rgba(255, 253, 252, 0.4);
  transition-duration: ${({ active }) => active ? '0.5s' : '0.7s'};
`;

const BioContainer = styled.div`
  width: calc(100% - 60px);
  float: right;
  padding: 40px 30px 95px 30px;
  color: #051736;
  font-size: 1.7rem;
  line-height: 2.8rem;
  font-family: 'Sul Sans, Light';
  opacity: ${({ active }) => active ? '1' : '0'};
  transition-delay: ${({ active }) => active ? '0.3s' : '0s'};
  transition-property: opacity;
  transition-duration: 0.2s;
  position: relative;
  ${props => props.theme.media.md`
    width: calc(100% - 180px);
    padding: 60px 120px 60px 60px;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 23px;
  right: 23px;
  padding: 0;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  ${props => props.theme.media.md`
    top: 23px;
    right: 23px;
    bottom: auto;
  `}
`;

const ExpandedContact = styled.div`
  overflow: hidden;
  max-height: ${({ active }) => active ? '100%' : '0'};
  position: relative;
  z-index: ${({ active }) => active ? '1' : '-1'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transition-duration: ${({ active }) => active ? '0.5s' : '0.5s'};
  font-family: 'Sul Sans, Light';
  color: #051736;
  font-size: 1.7rem;
  line-height: 2.8rem;
  p {
    margin: 0;
  }
  div {
    margin-top: 30%;
  }
  a {
    font-family: 'Sul Sans, Light';
    color: #051736;
    font-size: 1.7rem;
    line-height: 2.8rem;
  }
`;

const SocialContainer = styled.div`
  font-family: 'GT Pressura Mono Light';
  align-self: center;
  color: #051736;
  font-size: 11px;
  line-height: 12px;
  background: rgba(229, 230, 228, 0.25);
  padding: ${({ active }) => active ? '17px 10px' : '0'};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  max-height: ${({ active }) => active ? '100%' : '0'};
  z-index: ${({ active }) => active ? '1' : '-1'};
  transition-duration: ${({ active }) => active ? '0.5s' : '0.7s'};
  overflow: hidden;
  margin: 10px -10px -10px -10px;
  p {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }
  div > p {
    display: inline;
    margin-right: 8px;
  }
  a, a:visited {
    font-size: 1.3rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: inherit;
    letter-spacing: 0.3em;
    ${props => props.theme.media.md`
      font-size: 1rem;
      line-height: 1.2rem;
    `}
  }
`;

function Person({ image, name, workFunction, bio, socialLinks, qualification, contact, ...props }) {
  const [active, setActive] = useState(false);
  const { dispatch } = React.useContext(ScrollFade);
  const expand = () => {
    setActive(!active);
    setTimeout(() => {
      dispatch({ type: 'update' });
    }, 1000)
  }
  const viewport = useViewport();
  const isBio = bio.props.html && bio.props.html !== '<p></p>';
  const isSocial = socialLinks.props.html && socialLinks.props.html !== '<p></p>';
  return (
    <StyledPerson className={active ? 'active' : ''} active={active} {...props}>
      <GridContainer>
        <BasicInfo active={active}>
          <HoverEffect active={active}>
            <StyledPicture active={active}>
              <Grayscale>
                {image}
              </Grayscale>
              <StyledInfo active={active} onClick={() => expand()}>
                {isViewport(viewport, ['DEFAULT', 'MEDIUM']) 
                  ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.12451 0.768799V15.572" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
                      <path d="M15.5261 8.17039H0.7229" stroke="#051736" strokeWidth="1.5" strokeMiterlimit="10"/>
                    </svg>
                  ) : 'INFO'}
              </StyledInfo>
            </StyledPicture>
            <StyledName onClick={() => expand()} className="invert-color">{name}</StyledName>
          </HoverEffect>
          <StyledFunction className="invert-color">{workFunction}</StyledFunction>
          <ExpandedContact active={active}>
            {qualification}
            {contact}
          </ExpandedContact>
          {isSocial && <SocialContainer active={active}>
            {socialLinks}
          </SocialContainer>}
        </BasicInfo>
        <ExpandedInfo active={active}>
          <BioContainer active={active}>
            <CloseButton type="button" id="clicky" onClick={() => expand()}>
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.06055" y="0.835297" width="30" height="1.5" transform="rotate(45 1.06055 0.835297)" fill="#051736"/>
                <rect y="22.0485" width="30" height="1.5" transform="rotate(-45 0 22.0485)" fill="#051736"/>
              </svg>
            </CloseButton>
            {isBio ? bio : <p>More info coming soon...</p>}
          </BioContainer>
        </ExpandedInfo>
      </GridContainer>
      {/* <StyledInformation>{information}</StyledInformation> */}
    </StyledPerson>
  );
}

export default Person;

Person.defaultProps = {
  workFunction: null,
  qualification: null,
};

Person.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  workFunction: PropTypes.node,
  contact: PropTypes.node.isRequired,
  qualification: PropTypes.node,
  bio: PropTypes.node.isRequired,
  socialLinks: PropTypes.node.isRequired,
  animate: PropTypes.func.isRequired,
};
