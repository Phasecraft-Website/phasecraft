import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring/web.cjs";
import styled from "styled-components";

const StyledOffcanvasInner = styled.div`
  position: fixed;
  z-index: 9500;
  top: ${props => (props.direction === "bottom" ? "auto" : 0)};
  bottom: ${props => (props.direction === "top" ? "auto" : 0)};
  left: ${props => (props.direction === "right" ? "auto" : 0)};
  right: ${props => (props.direction === "left" ? "auto" : 0)};
`;

function OffCanvasInner({
  children,
  fromTop,
  fromRight,
  fromBottom,
  fromLeft,
  show,
  ...props
}) {
  const [initialized, setInitialized] = useState(false);
  let direction;
  let transform = ["", ""];

  useEffect(() => {
    // Simple assertion of wether or not the component mounted.
    if (!initialized) setInitialized(true);
  });

  if (fromTop) {
    direction = "top";
    transform = ["translateY(-100%)", "translateY(0%)"];
  }
  if (fromRight) {
    direction = "right";
    transform = ["translateX(100%)", "translateX(0%)"];
  }
  if (fromBottom) {
    direction = "bottom";
    transform = ["translateY(100%)", "translateY(0%)"];
  }
  if (fromLeft) {
    direction = "left";
    transform = ["translateX(-100%)", "translateX(0%)"];
  }

  // Using array deconstruction, we can easily switch between transition states
  let [from, to] = transform;
  if (!show) [to, from] = transform;

  const styleProps = useSpring({
    from: { transform: from },
    to: { transform: to },
    immediate: !initialized,
  });

  return (
    <StyledOffcanvasInner direction={direction} {...props}>
      <animated.div style={styleProps}>{children}</animated.div>
    </StyledOffcanvasInner>
  );
}

export default OffCanvasInner;

OffCanvasInner.defaultProps = {
  show: false,
  fromTop: false,
  fromBottom: false,
  fromLeft: false,
  fromRight: false,
};

OffCanvasInner.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  fromTop: PropTypes.bool,
  fromBottom: PropTypes.bool,
  fromLeft: PropTypes.bool,
  fromRight: PropTypes.bool,
};
