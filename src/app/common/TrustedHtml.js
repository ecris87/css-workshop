import React from 'react';

function createMarkup(html) {
  return { __html: html };
}

const TrustedHtml = ({ html }) => {
  return <div className="trusted-html" dangerouslySetInnerHTML={createMarkup(html)} />;
};

export default TrustedHtml;
