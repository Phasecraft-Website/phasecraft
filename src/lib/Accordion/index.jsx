import React from "react";
import { Spring } from "react-spring/renderprops.cjs";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAccordion = styled.div`
  overflow: hidden;
`;

function Accordion({ children, toggled, ...props }) {
  return (
    <Spring
      config={{
        tension: 170,
        friction: 22,
        clamp: true,
      }}
      from={{ height: 0 }}
      to={{ height: toggled ? "auto" : 0 }}
    >
      {styleProps => (
        <StyledAccordion style={styleProps} {...props}>
          {children}
        </StyledAccordion>
      )}
    </Spring>
  );
}

export default Accordion;

Accordion.defaultProps = {
  toggled: false,
  className: undefined,
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  toggled: PropTypes.bool,
  className: PropTypes.string,
};
