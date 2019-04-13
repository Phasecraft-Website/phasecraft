const colors = [
  {
    key: "white",
    title: "White",
    rgbaValue: "rgba(255, 255, 255, 1)",
    hexValue: "#fff",
  },
  {
    key: "light-blue",
    title: "Light Blue",
    rgbaValue: "rgba(241, 249, 255, 1)",
    hexValue: "#f1f9ff",
  },
  {
    key: "mid-blue",
    title: "Mid Blue",
    rgbaValue: "rgba(188, 224, 253, 1)",
    hexValue: "#bce0fd",
  },
  {
    key: "blue",
    title: "Blue",
    rgbaValue: "rgba(127, 196, 253, 1)",
    hexValue: "#7fc4fd",
  },
  {
    key: "dark-blue",
    title: "Dark Blue",
    rgbaValue: "rgba(38, 153, 251, 1)",
    hexValue: "#2699fb",
  },
  {
    key: "darkest-blue",
    title: "Darkest Blue",
    rgbaValue: "rgba(0, 134, 251, 1)",
    hexValue: "#0086fb",
  },
];

const colorVariables = {
  primary: `dark-blue`,
  secondary: `white`,
};

const sizeVariables = {
  borderRadius: {
    small: `3px`,
    large: `12px`,
    round: `50%`,
  },
};

export { colors, colorVariables, sizeVariables };
