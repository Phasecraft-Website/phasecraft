import React from 'react';
import PropTypes from 'prop-types';

function Content({ html, ...props }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export default Content;

Content.propTypes = {
  html: PropTypes.string.isRequired,
};
