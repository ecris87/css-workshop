import React, { PureComponent } from 'react';
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

const BADGE_VALUES = {
  validCode: ['Excellent', 'Nice', 'Awesome possum', 'Splendid'],
  invalidCode: ['Bummer', 'Nerts', 'Ouch', 'Not awesome']
};

class ResultPane extends PureComponent {
  render() {
    const { status, html, cssCode } = this.props;

    const paneClassName = classnames({
      'result-pane border border-3 border-primary': true,
      'alert-success': status && status.isValid,
      'alert-danger': status && !status.isValid
    });
    const badgeClassName = classnames({
      badge: true,
      success: status && status.isValid,
      danger: status && !status.isValid
    });

    let badgeElement = null;
    if (status) {
      let randomIndex = Math.floor(Math.random() * Math.floor(BADGE_VALUES.validCode.length));
      let message = status.isValid ? BADGE_VALUES.validCode[randomIndex] : BADGE_VALUES.invalidCode[randomIndex];
      badgeElement = <Badge className={badgeClassName}>{message}</Badge>;
    }

    return (
      <Pane status={status} className={paneClassName}>
        {badgeElement}
        <TrustedHtml html={html} />
      </Pane>
    );
  }
}

export default ResultPane;
