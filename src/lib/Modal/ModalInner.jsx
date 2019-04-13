import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops.cjs";
import styled from "styled-components";
import useKeyPress from "../../hooks/useKeyPress";

const StyledModal = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  background: ${props => props.theme.modal.bg};
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  background: ${props => props.theme.modal.container.bg};
  border: ${props => props.theme.modal.container.borderRadius};
  box-shadow: ${props => props.theme.modal.container.boxShadow};
  position: absolute;
  z-index: 400;
`;

function ModalInner({ onCancel, onCleanup, show, children, ...props }) {
  const [toggled, toggleShow] = useState(show);
  const keyPressed = useKeyPress;

  async function handleModalToggle() {
    // Wait until any potential cancel side-effects are executed
    if (toggled) await onCancel();
    toggleShow(t => !t);
  }

  function handleCleanup() {
    // Once animation concludes, and show is false, remove modal from the DOM.
    if (toggled === false) onCleanup();
  }

  function handleOnKeyDown() {
    console.log(keyPressed);
    if (keyPressed === "esc") handleModalToggle();
  }

  return (
    <StyledModal {...props}>
      <Spring
        from={{ opacity: 0, transform: "translateY(-100%)" }}
        to={{ opacity: 1, transform: "translateY(0%)" }}
        reset
        reverse={!toggled}
        onRest={handleCleanup}
      >
        {styleProps => (
          <ModalContainer style={styleProps}>{children}</ModalContainer>
        )}
      </Spring>
      <Spring
        from={{
          opacity: 0,
        }}
        to={{
          opacity: 1,
        }}
        reset
        reverse={!toggled}
      >
        {styleProps => (
          <ModalBackground
            role="link"
            tabIndex={0}
            onClick={handleModalToggle}
            onKeyDown={handleOnKeyDown}
            style={styleProps}
          />
        )}
      </Spring>
    </StyledModal>
  );
}

export default ModalInner;

ModalInner.defaultProps = {
  show: false,
};

ModalInner.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onCleanup: PropTypes.func.isRequired,
};
