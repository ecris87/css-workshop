import React from 'react';
import PropTypes from 'prop-types';

function createMarkup(html) {
  return { __html: html };
}

const TrustedHtml = ({ html, className }) => {
  return <div className={className} dangerouslySetInnerHTML={createMarkup(html)} />;
};

TrustedHtml.propTypes = {
  html: PropTypes.string,
  className: PropTypes.string
};

export default TrustedHtml;
