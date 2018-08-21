import React, { Component } from 'react';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, LevelDescription } from 'app/common/ComponentsLibrary';
import BOX_MODEL_EXERCISE from './boxModelExercises';

class BoxModelLevel extends Component {
  static DEFAULT_CSS_TEXT = `/* style.css */
`;
  static INFO_CSS_TEXT = `/* style.css */
/* Add code here */`;

  state = {
    cssCodeAnswer: null,
    isCorrectAnswer: false,
    initialCssEditorValue: BoxModelLevel.INFO_CSS_TEXT
  };

  isValidCss = false;

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0 || (errors.length === 1 && errors[0].type === 'warning');
  };

  checkAnswer(callback) {
    /**
.ben { padding: 30px; margin: 20px; }
.jerry {margin: 20px; border: 1px solid black; }
     */
    setTimeout(() => {
      let ben = document.querySelector('.ben');
      let jerry = document.querySelector('.jerry');
      let paddingForBen = window.getComputedStyle(ben, null).getPropertyValue('padding');
      let isCorrectAnswer =
        paddingForBen === '30px' && jerry.offsetWidth === 300 && ben.offsetWidth === jerry.offsetWidth;
      callback(isCorrectAnswer);
    }, 0);
  }

  handleCssCodeEditorFocus = event => {
    if (this.state.initialCssEditorValue !== BoxModelLevel.DEFAULT_CSS_TEXT) {
      this.setState({ initialCssEditorValue: BoxModelLevel.DEFAULT_CSS_TEXT });
    }
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (
      this.isValidCss &&
      cssCodeAnswer !== BoxModelLevel.DEFAULT_CSS_TEXT &&
      cssCodeAnswer !== BoxModelLevel.INFO_CSS_TEXT
    ) {
      this.setState({ cssCodeAnswer: cssCodeAnswer });
      const callback = isCorrectAnswer => {
        this.setState({ isCorrectAnswer: isCorrectAnswer });
      };
      this.checkAnswer(callback);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col">
          <LevelTitle>Level 1: Selectors, Properties and Values</LevelTitle>
        </div>

        <div className="col-6 col">
          <LevelDescription>{BOX_MODEL_EXERCISE.description}</LevelDescription>
          <CssCodeEditor
            value={this.state.initialCssEditorValue}
            onFocus={this.handleCssCodeEditorFocus}
            onChange={this.handleCssCodeChange}
            onValidate={this.setValidationResult}
          />
          <HtmlCodeEditor value={BOX_MODEL_EXERCISE.html} />
        </div>

        <div className="col-6 col">
          <ResultPane
            html={BOX_MODEL_EXERCISE.html}
            isCorrectAnswer={this.state.isCorrectAnswer}
            cssCodeAnswer={this.state.cssCodeAnswer}
          />
        </div>
      </div>
    );
  }
}

export default BoxModelLevel;
