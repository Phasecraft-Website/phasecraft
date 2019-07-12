import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPerson = styled.article``;

const Grayscale = styled.article`
  filter: grayscale(100%);
`;

const StyledPicture = styled.figure`
  position: relative;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.3);
  &:hover {
    ${StyledInfo} {
      opacity: 1;
    }
  }
`;

const StyledFunction = styled.span`
  font-family: 'Sul Sans, Regular';
  color: #051736;
  font-size: 1.6rem;
`;

const StyledName = styled.header`
  font-family: 'Sul Sans, Regular';
  color: #051736;
  h2 {
    text-transform: none;
    font-size: 2.5rem;
    line-height: 32px;
    margin-bottom: 0;
  }
`;

const StyledInfo = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #2FF2AF;
  opacity: 0;
`;

// const StyledInformation = styled.div``;

function Person({ image, name, workFunction, information, ...props }) {
  return (
    <StyledPerson {...props}>
      <StyledPicture>
        <Grayscale>
          {image}
        </Grayscale>
        <StyledInfo />
      </StyledPicture>
      <StyledName className="invert-color">{name}</StyledName>
      <StyledFunction className="invert-color">{workFunction}</StyledFunction>
      {/* <StyledInformation>{information}</StyledInformation> */}
    </StyledPerson>
  );
}

export default Person;

Person.defaultProps = {
  workFunction: null,
};

Person.propTypes = {
  image: PropTypes.node.isRequired,
  information: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  workFunction: PropTypes.node,
};
