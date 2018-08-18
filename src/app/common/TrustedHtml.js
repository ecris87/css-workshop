import React from 'react';
import PropTypes from 'prop-types';

function createMarkup(html) {
  return { __html: html };
}

const TrustedHtml = ({ html }) => {
  return <div className="trusted-html" dangerouslySetInnerHTML={createMarkup(html)} />;
};

TrustedHtml.propTypes = {
  html: PropTypes.string
};

export default TrustedHtml;
