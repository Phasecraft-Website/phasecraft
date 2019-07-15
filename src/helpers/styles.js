/**
 * Helper for margins
 */

export function renderMargins(style) {
  if (!style.margin) return;
  // We expect margins to always be in shorthand version, so we can do this neat trick.
  const [top, right, bottom, left] = style.margin.split(' ');
  return `
    margin-top: ${top};
    margin-right: ${right};
    margin-bottom: ${bottom};
    margin-left: ${left};
  `;
}

/**
 * Helper for paddings
 */

export function renderPaddings(style) {
  if (!style.padding) return;
  // We expect padding to always be in shorthand version, so we can do this neat trick.
  const [top, right, bottom, left] = style.padding.split(' ');
  return `
    padding-top: ${top};
    padding-right: ${right};
    padding-bottom: ${bottom};
    padding-left: ${left};
  `;
}

/**
 * Helper for borders
 */

export function renderBorders(style) {
  return `
    ${style.borderTop ? `border-top: ${style.borderTop};` : ``}
    ${style.borderRight ? `border-right: ${style.borderRight};` : ``}
    ${style.borderBottom ? `border-bottom: ${style.borderBottom};` : ``}
    ${style.borderLeft ? `border-left: ${style.borderLeft};` : ``}
  `;
}

/**
 * Helper for font styles
 */

export function renderFontStyles(typography, key) {
  return `
    font-size: ${typography[key].fontSize};
    font-style: ${typography[key].fontStyle};
    font-weight: ${typography[key].fontWeight};
    line-height: ${typography[key].lineHeight};
    letter-spacing: ${typography[key].letterSpacing};
    text-transform: ${typography[key].textTransform};
    color: ${typography[key].color};
    ${typography[key].margin ? renderMargins(typography[key]) : ``}
    ${typography[key].padding ? renderPaddings(typography[key]) : ``}
  `
}

/**
 * Helper for font family
 */

export function renderFontFamily(fontFamilies, typography, key) {
  return fontFamilies.find(font => font.key === typography[key].font).value;
}

/**
 * Helper for font family (by key)
 */

export function renderFontFamilyByKey(fontFamilies, key) {
  return fontFamilies.find(font => font.key === key).value;
}

/**
 * Helper for named colors
 */

export function renderColor(swatches, key) {
  return swatches.find(color => color.key === key).rgbaValue;
}

/**
 * Helper for color variables
 */

export function renderColorFromVar(swatches, variables, key) {
  return swatches.find(color => color.key === variables[key]).rgbaValue;
}
