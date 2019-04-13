const button = {
  default: {
    background: `rgba(255, 255, 255, 1)`,
    borderRadius: "4px",
    border: `none`,
    color: `rgba(38, 153, 251, 1)`,
    minWidth: "148px",
    maxWidth: "none",
    minHeight: "48px",
    maxHeight: "48px",
    hover: {
      background: `rgba(255, 255, 255, 0.5)`,
    },
    disabled: {
      background: `rgba(127, 196, 253, 1)`,
    },
  },
  primary: {
    color: `rgba(255, 255, 255, 1)`,
    background: `rgba(38, 153, 251, 1)`,
    hover: {
      background: `rgba(0, 134, 251, 1)`,
    },
    disabled: {
      background: `rgba(188, 224, 253, 1)`,
    },
  },
  secondary: {},
  outlined: {
    background: `none`,
    color: `rgba(38, 153, 251, 1)`,
    border: "2px solid currentColor",
    hover: {
      background: `rgba(241, 249, 255, 1)`,
    },
  },
  link: {
    background: `none`,
    hover: {
      background: `rgba(241, 249, 255, 1)`,
    },
  },
};

export { button };
