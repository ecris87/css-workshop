import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import TrustedHtml from '../common/TrustedHtml';
import PropTypes from 'prop-types';

const Pane = styled.div`
  height: 100%;
  background: #fff;
  padding: 1em;
  position: relative;
  
  /* add green border if correct answer */ 
  ${props =>
    props.cssCodeAnswer &&
    props.isCorrectAnswer &&
    css`
      border-color: #86a361;
    `}

  /* add red border if incorrect answer */ 
  ${props =>
    props.cssCodeAnswer &&
    !props.isCorrectAnswer &&
    css`
      border-color: #a7342d;
    `}

  /* add css code if supplied */ 
  .result-pane__html {
    ${props =>
      props.cssCodeAnswer &&
      css`
        ${props.cssCodeAnswer};
      `};
  }
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
    isCorrectAnswer: PropTypes.bool,
    cssCodeAnswer: PropTypes.string,
    html: PropTypes.string
  };

  render() {
    const { html, cssCodeAnswer, isCorrectAnswer } = this.props;

    const badgeClassName = classnames({
      badge: true,
      success: cssCodeAnswer && isCorrectAnswer,
      danger: cssCodeAnswer && !isCorrectAnswer
    });

    let badgeElement = null;
    if (cssCodeAnswer) {
      let randomIndex = Math.floor(Math.random() * Math.floor(BADGE_VALUE.correctAnswerMessages.length));
      let message = isCorrectAnswer
        ? BADGE_VALUE.correctAnswerMessages[randomIndex]
        : BADGE_VALUE.incorrectAnswerMessages[randomIndex];
      badgeElement = <Badge className={badgeClassName}>{message}</Badge>;
    }

    return (
      <Pane
        className="result-pane border border-3 border-primary"
        isCorrectAnswer={isCorrectAnswer}
        cssCodeAnswer={cssCodeAnswer}
      >
        {badgeElement}
        <TrustedHtml className="result-pane__html" html={html} />
      </Pane>
    );
  }
}

export default ResultPane;
