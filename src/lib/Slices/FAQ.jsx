import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledQuestion = styled.header``;

const StyledAnswer = styled.article``;

const StyledFAQ = styled.article``;

function FAQ({ question, answer, ...props }) {
  return (
    <StyledFAQ {...props}>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswer>{answer}</StyledAnswer>
    </StyledFAQ>
  );
}

export default FAQ;

FAQ.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.node.isRequired,
};
