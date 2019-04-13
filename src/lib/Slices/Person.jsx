import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPerson = styled.article``;

const StyledPicture = styled.figure``;

const StyledFunction = styled.span``;

const StyledName = styled.header``;

const StyledInformation = styled.div``;

function Person({ image, name, workFunction, information, ...props }) {
  return (
    <StyledPerson {...props}>
      <StyledName>{name}</StyledName>
      <StyledFunction>{workFunction}</StyledFunction>
      <StyledInformation>{information}</StyledInformation>
      <StyledPicture>{image}</StyledPicture>
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
