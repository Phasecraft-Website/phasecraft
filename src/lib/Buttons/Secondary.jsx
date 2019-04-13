import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./index";

const StyledSecondaryButton = styled(Button)`
  background: ${props =>
    props.theme.button.secondary.background ||
    props.theme.button.default.background};
  border: ${props =>
    props.theme.button.secondary.border || props.theme.button.default.border};
  color: ${props =>
    props.theme.button.secondary.color || props.theme.button.default.color};

  &:hover {
    ${props =>
      props.theme.button.secondary.hover
        ? `background: ${props.theme.button.secondary.hover.background};`
        : ``}
  }

  &:disabled {
    ${props =>
      props.theme.button.secondary.disabled
        ? `background: ${props.theme.button.secondary.disabled.background};`
        : ``}
  }
`;

function SecondaryButton({ children, ...props }) {
  return <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>;
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};
