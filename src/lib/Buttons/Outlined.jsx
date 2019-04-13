import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./index";

const StyledOutlinedButton = styled(Button)`
  background: ${props => props.theme.button.outlined.background};
  border: ${props => props.theme.button.outlined.border};
  color: ${props => props.theme.button.outlined.color};

  &:hover {
    ${props =>
      props.theme.button.outlined.hover
        ? `background: ${props.theme.button.outlined.hover.background};`
        : ``}
  }

  &:disabled {
    ${props =>
      props.theme.button.outlined.disabled
        ? `background: ${props.theme.button.outlined.disabled.background};`
        : ``}
  }
`;

function OutlinedButton({ children, ...props }) {
  return <StyledOutlinedButton {...props}>{children}</StyledOutlinedButton>;
}

export default OutlinedButton;

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
};
