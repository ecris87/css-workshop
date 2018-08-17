import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import TrustedHtml from '../common/TrustedHtml';

const Pane = styled.div`
  height: 100%;
  background: #fff;
  padding: 1em;
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ResultPane = ({ status, html }) => {
  const paneClassName = classnames({
    'border border-3 border-primary': true,
    'alert-success': status && status.isValid,
    'alert-danger': status && !status.isValid
  });
  const badgeClassName = classnames({
    badge: true,
    success: status && status.isValid,
    danger: status && !status.isValid
  });
  return (
    <Pane status={status} className={paneClassName}>
      {status && <Badge className={badgeClassName}>Excellent!</Badge>}
      <TrustedHtml html={html} />
    </Pane>
  );
};

export default ResultPane;
