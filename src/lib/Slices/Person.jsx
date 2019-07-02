import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPerson = styled.article``;

const StyledPicture = styled.figure`
  margin: 0;
  background-color: #2FF2AF;
  width: fit-content;
  height: 150px;
`;

const StyledFunction = styled.span`

`;

const StyledName = styled.header`
  font-family: 'Sul Sans, Regular';
  color: #E5E6E4;
  h2 {
    text-transform: none;
    font-size: 2.5rem;
    line-height: 32px;
  }
`;

const StyledInformation = styled.div``;

function Person({ image, name, workFunction, information, ...props }) {
  return (
    <StyledPerson {...props}>
      <StyledPicture>{image}</StyledPicture>
      <StyledName>{name}</StyledName>
      <StyledFunction>{workFunction}</StyledFunction>
      <StyledInformation>{information}</StyledInformation>
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
