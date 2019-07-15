import { css } from "styled-components";

const sizes = {
  xs: 375,
  sm: 600,
  md: 1024,
  lg: 1400,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export { media };
