const fontFamilies = [
  {
    key: 'georgia',
    title: 'Georgia',
    value: 'Georgia, serif',
  },
  {
    key: 'arial',
    title: 'Arial',
    value: 'Arial, sans-serif',
  },
  {
    key: 'GT-Pressura-Mono-Regular',
    title: 'GT Pressura Mono Regular',
    value: '\'GT Pressura Mono Regular\'',
  },
  {
    key: 'Sul-Sans-Regular',
    title: 'Sul Sans, Regular',
    value: '\'Sul Sans, Regular\'',
  },
];

const typography = {
  h1: {
    font: 'Sul-Sans-Regular',
    fontSize: '1.3rem',
    // letterSpacing: '0.3em',
    lineHeight: '1.5rem',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'currentColor',
  },
  h2: {
    font: 'Sul-Sans-Regular',
    fontSize: '1.3rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'currentColor',
    lineHeight: '12px',
  },
  h3: {
    font: 'georgia',
    fontSize: '35px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#051736',
    lineHeight: 'normal',
  },
  h4: {
    font: 'georgia',
    fontSize: '26px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#051736',
    lineHeight: 'normal',
  },
  h5: {
    font: 'arial',
    fontSize: '20px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'currentColor',
    lineHeight: 'normal',
  },
  h6: {
    font: 'arial',
    fontSize: '15px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'currentColor',
    lineHeight: 'normal',
  },
  quote: {
    font: 'georgia',
    fontSize: '20px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'italic',
    fontWeight: 'normal',
    color: 'currentColor',
    lineHeight: 'normal',
    margin: `0 0 0 0`,
  },
  subheader: {
    font: 'arial',
    fontSize: '20px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'currentColor',
    lineHeight: 'normal',
  },
  body: {
    font: 'arial',
    fontSize: '14px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#7F7F7F',
    lineHeight: 'normal',
  },
  secondaryBody: {
    font: 'arial',
    fontSize: '12px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'currentColor',
    lineHeight: 'normal',
  },
  figCaption: {
    font: 'arial',
    fontSize: '12px',
    letterSpacing: '0',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'currentColor',
    lineHeight: 'normal',
  },
  button: {
    font: 'arial',
    fontSize: '12px',
    letterSpacing: '0',
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
  },
};

const link = {
  default: Object.assign({}, typography.body, {
    borderBottom: 'none',
    textDecoration: 'none',
  }),
  hover: {
    color: '#051736',
    borderBottom: 'none',
  },
  visited: {
    color: '#051736',
  },
};

export { fontFamilies, typography, link };
