import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import TrustedHtml from '../common/TrustedHtml';
import PropTypes from 'prop-types';
import ninjaImage from 'images/ninja.svg';

const Badge = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 200;
`;

const BADGE_VALUE = {
  correctAnswerMessages: ['Excellent', 'Awesome possum', 'Splendid'],
  incorrectAnswerMessages: ['Bummer, try again...', 'Nerts, try again...', 'Nope, try again...']
};

const calcBorderColor = ({ cssCodeAnswer, isCorrectAnswer }) => {
  if (cssCodeAnswer) {
    return isCorrectAnswer ? '#86a361' : '#a7342d';
  }
  return '#41403e'; // TODO use ThemeProvider
};

const Pane = styled.div`
  height: 100%;
  background: #fff;
  padding: 1em;
  position: relative;
  border-color: ${calcBorderColor};

  input {
    min-width: 240px;
  }

  .result-pane__html {
    /* override paper.css default so that the box model exercise can work */
    box-sizing: content-box;
    /* add css code if supplied */
    ${props =>
      props.cssCodeAnswer &&
      css`
        ${props.cssCodeAnswer};
      `};

    /* for box-model and positioning exercises */
    .ben,
    .plate {
      background: papayawhip;
    }
    .jerry,
    .pie {
      background: thistle;
    }
    .ben,
    .jerry,
    .plate {
      width: 300px;
    }
    .plate,
    .pie {
      padding: 30px;
    }
    .pie {
      width: 200px;
    }
    .plate {
      height: 170px;
    }

    .sticky-container {
      height: 500px;
      overflow: auto;

      nav {
        background: black;
      }

      nav a,
      nav span {
        color: white;
        padding: 0 10px;
      }
    }

    .ninja-image {
      background-image: url(${ninjaImage});
      background-color: papayawhip;
      height: 190px;
      width: 320px;
    }
    .ninja-text {
      background: black;
      color: white;
      font-size: 20px;
      padding: 10px;
      display: inline-block;
    }
  }
`;

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
