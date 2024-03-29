import { createGlobalStyle } from 'styled-components';
import {
  renderFontStyles,
  renderFontFamily,
  renderBorders,
} from '../../helpers/styles';

function renderGoogleFont(googleFont) {
  return `@import url('https://fonts.googleapis.com/css?family=${googleFont}');`;
}

function renderFontFace(fontFace) {
  return fontFace.map(
    font => `
      @font-face {
        font-family: '${font.title}';
        src: url('/fonts/${font.value}.woff2') format('woff2'),
            url('/fonts/${font.value}.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
  `
  );
}

const GlobalStyles = createGlobalStyle`
  ${props =>
    props.theme.global.googleFont
      ? renderGoogleFont(props.theme.global.googleFont)
      : ''}
  ${props =>
    props.theme.global.fontFace
      ? renderFontFace(props.theme.global.fontFace)
      : ''}

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    background-color: #E7E7E7;
    color: ${props => props.theme.global.body.color};
    font-family: ${props =>
    renderFontFamily(
      props.theme.fontFamilies,
      props.theme.typography,
      'body'
    )};
    height: 100%;
    min-height: 100vh;
    ${props => renderFontStyles(props.theme.typography, 'body')}
  }

  #svg-pattern {
    transition: fill, border-color 3s ease;
  }
  .invert-color {
    transition: color 3s ease;
    will-change: color;
  }

  .invert-fill {
    transition: fill, border-color 3s ease;
    will-change: fill, border-color;
  }

  .invert-opacity {
    transition: opacity 3s ease;
    will-change: opacity;
  }

  .invert-opacity-reverse {
    transition: opacity 3s ease;
    will-change: opacity;
  }

  .invert-link {
    transition: color 3s ease;
    will-change: color;
  }

  .fade-out {
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: 100% 100%;
  }

  .invert {
    transition: background-color 3s ease;
    background-color: #061637!important;
    .invert-color {
      color: #E5E6E4!important;

      &:visited, &:visited:visited {
        color: #E5E6E4;
      }
    }

    .invert-fill {
      fill: #061637!important;
      border-color: #061637!important;
    }

    .invert-opacity {
      opacity: 1!important;
    }

    .invert-border {
      border-color: #e7e7e7!important;
    }

    .invert-opacity-reverse {
      opacity: 0!important;
    }

    .invert-link {
      color: #2FF2AF!important;
      &:hover {
        color: #051736!important;
      }
    }
  }

  #___gatsby, main {
    height: 100%;
  }

  h1 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h1')};
    ${props => renderFontStyles(props.theme.typography, 'h1')}
  }

  h2 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h2')};
    ${props => renderFontStyles(props.theme.typography, 'h2')}
  }

  h3 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h3')};
    ${props => renderFontStyles(props.theme.typography, 'h3')}
  }

  h4 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h4')};
    ${props => renderFontStyles(props.theme.typography, 'h4')}
  }

  h5 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h5')};
    ${props => renderFontStyles(props.theme.typography, 'h5')}
  }

  h6 {
    font-family: ${props =>
    renderFontFamily(props.theme.fontFamilies, props.theme.typography, 'h6')};
    ${props => renderFontStyles(props.theme.typography, 'h6')}
  }

  blockquote {
    font-family: ${props =>
    renderFontFamily(
      props.theme.fontFamilies,
      props.theme.typography,
      'quote'
    )};
    font-size: ${props => props.theme.typography.quote.fontSize};
    ${props => renderFontStyles(props.theme.typography, 'quote')}
  }

  figcaption {
    font-family: ${props =>
    renderFontFamily(
      props.theme.fontFamilies,
      props.theme.typography,
      'figCaption'
    )};
    ${props => renderFontStyles(props.theme.typography, 'figCaption')}
  }

  a {
    transition: ${props => props.theme.transitions.default};
    ${props => renderBorders(props.theme.link.default)}
  }

  a, a:visited {
    font-size: ${props => props.theme.link.default.fontSize};
    font-style: ${props => props.theme.link.default.fontStyle};
    font-weight: ${props => props.theme.link.default.fontWeight};
    letter-spacing: ${props => props.theme.link.default.letterSpacing};
    text-transform: ${props => props.theme.link.default.textTransform};
    text-decoration: ${props => props.theme.link.default.textDecoration};
    color: ${props => props.theme.link.default.color};

    &:visited {
      color: ${props => props.theme.link.visited.color};
      ${props => renderBorders(props.theme.link.visited)}
    }

    &:hover {
      color: ${props => props.theme.link.hover.color};
      ${props => renderBorders(props.theme.link.hover)}
    }
  }
`;

export default GlobalStyles;
