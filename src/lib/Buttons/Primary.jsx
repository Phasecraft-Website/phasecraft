import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./index";

const StyledPrimaryButton = styled(Button)`
  background: ${props => props.theme.button.primary.background};
  border: ${props => props.theme.button.primary.border};
  color: ${props => props.theme.button.primary.color};

  &:hover {
    background: ${props => props.theme.button.primary.hover.background};
  }

  &:disabled {
    background: ${props => props.theme.button.primary.disabled.background};
  }
`;

function PrimaryButton({ children, ...props }) {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};
