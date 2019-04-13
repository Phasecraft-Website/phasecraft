import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import OffCanvasInner from "./OffCanvasInner";

class OffCanvas extends Component {
  constructor(props) {
    super(props);
    this.offcanvasRoot = document.querySelector(props.selector);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    if (this.offcanvasRoot && this.el) this.offcanvasRoot.appendChild(this.el);
  }

  render() {
    const { children, ...props } = this.props;
    return ReactDOM.createPortal(
      <OffCanvasInner {...props}>{children}</OffCanvasInner>,
      this.el
    );
  }
}

export default OffCanvas;

OffCanvas.defaultProps = { selector: "#root" };

OffCanvas.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
};
