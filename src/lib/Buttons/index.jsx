import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { renderFontStyles, renderFontFamily } from "../../helpers/styles";

function test(props) {
  console.log("fromComponent", props);
  return "";
}

export const StyledButton = styled.button`
  ${props => test(props)}
  transition: ${props => props.theme.transitions.default};
  min-width: ${props => props.theme.button.default.minWidth};
  max-width: ${props => props.theme.button.default.maxWidth};
  min-height: ${props => props.theme.button.default.minHeight};
  max-height: ${props => props.theme.button.default.maxHeight};
  background: ${props => props.theme.button.default.background};
  border: ${props => props.theme.button.default.border};
  border-radius: ${props => props.theme.button.default.borderRadius};
  color: ${props => props.theme.button.default.color};
  cursor: pointer;
  font-family: ${props =>
    renderFontFamily(
      props.theme.fontFamilies,
      props.theme.typography,
      "button"
    )};
  ${props => renderFontStyles(props.theme.typography, "button")}
  padding: 0;
  display: inline-block;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${props => props.theme.button.default.hover.background};
  }

  &:disabled {
    background: ${props => props.theme.button.default.disabled.background};
  }
`;

function Button({ children, as, ...props }) {
  return (
    <StyledButton as={as} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;

Button.defaultProps = {
  type: "button",
  as: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  as: PropTypes.string,
};
