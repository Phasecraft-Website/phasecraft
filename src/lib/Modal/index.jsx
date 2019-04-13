import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalInner from "./ModalInner";

function Modal({ children, selector, ...props }) {
  const modalRoot = document.querySelector(selector);
  const el = document.createElement("div");

  if (props.show) modalRoot.appendChild(el);

  function cleanup() {
    modalRoot.removeChild(el);
  }

  return ReactDOM.createPortal(
    <ModalInner onCleanup={cleanup} {...props}>
      {children}
    </ModalInner>,
    el
  );
}

export default Modal;

Modal.defaultProps = {
  selector: "#root",
  show: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
  show: PropTypes.bool,
};
