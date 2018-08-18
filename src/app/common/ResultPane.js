import React, { PureComponent } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import TrustedHtml from '../common/TrustedHtml';
import PropTypes from 'prop-types';

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

const BADGE_VALUE = {
  correctAnswerMessages: ['Excellent', 'Nice', 'Awesome possum', 'Splendid'],
  incorrectAnswerMessages: ['Bummer', 'Nerts', 'Ouch', 'Not awesome']
};

class ResultPane extends PureComponent {
  static propTypes = {
    status: PropTypes.shape({
      isCorrectAnswer: PropTypes.bool
    }),
    cssCode: PropTypes.string,
    html: PropTypes.string
  };

  render() {
    const { status, html, cssCode } = this.props;

    const paneClassName = classnames({
      'result-pane border border-3 border-primary': true,
      'alert-success': status && status.isCorrectAnswer,
      'alert-danger': status && !status.isCorrectAnswer
    });
    const badgeClassName = classnames({
      badge: true,
      success: status && status.isCorrectAnswer,
      danger: status && !status.isCorrectAnswer
    });

    let badgeElement = null;
    if (status) {
      let randomIndex = Math.floor(Math.random() * Math.floor(BADGE_VALUE.correctAnswerMessages.length));
      let message = status.isCorrectAnswer
        ? BADGE_VALUE.correctAnswerMessages[randomIndex]
        : BADGE_VALUE.incorrectAnswerMessages[randomIndex];
      badgeElement = <Badge className={badgeClassName}>{message}</Badge>;
    }

    return (
      <Pane className={paneClassName}>
        {badgeElement}
        <TrustedHtml html={html} />
      </Pane>
    );
  }
}

export default ResultPane;
