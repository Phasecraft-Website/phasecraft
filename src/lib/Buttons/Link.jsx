import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledButton } from "./index";

const StyledLinkButton = styled(StyledButton)`
  background: ${props => props.theme.button.link.background};
  border: ${props => props.theme.button.link.border};
  color: ${props => props.theme.button.link.color};
  display: inline-block;

  &:hover {
    ${props =>
      props.theme.button.link.hover
        ? `background: ${props.theme.button.link.hover.background};`
        : ``}
  }

  &:disabled {
    ${props =>
      props.theme.button.link.disabled
        ? `background: ${props.theme.button.link.disabled.background};`
        : ``}
  }
`;

const StyledLinkInner = styled.span`
  line-height: ${props => props.theme.button.default.minHeight};
  text-decoration: ${props => props.theme.button.link.textDecoration};
  text-align: center;
  display: block;
`;

function LinkButton({ children, ...props }) {
  return (
    <StyledLinkButton {...props}>
      <StyledLinkInner>{children}</StyledLinkInner>
    </StyledLinkButton>
  );
}

export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};
