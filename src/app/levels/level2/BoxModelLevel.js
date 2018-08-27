import React, { Component } from 'react';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, LevelDescription, LevelContent } from 'app/common/ComponentsLibrary';
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

  checkAnswer() {
    /**
.ben { padding: 30px; margin: 20px; }
.jerry { margin: 20px; border: 5px solid black; }
     */
    let ben = document.querySelector('.ben');
    let jerry = document.querySelector('.jerry');
    let paddingForBen = window.getComputedStyle(ben, null).getPropertyValue('padding');
    let borderForJerry = window.getComputedStyle(jerry, null).getPropertyValue('border-width');
    let isCorrectAnswer =
      paddingForBen === BOX_MODEL_EXERCISE.correctAnswer.expectedPadding &&
      borderForJerry === BOX_MODEL_EXERCISE.correctAnswer.expectedBorder &&
      jerry.offsetWidth === BOX_MODEL_EXERCISE.correctAnswer.expectedWidth &&
      ben.offsetWidth === jerry.offsetWidth;
    return Promise.resolve(isCorrectAnswer);
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
      this.setState(
        {
          cssCodeAnswer: cssCodeAnswer
        },
        () => {
          this.checkAnswer().then(isCorrectAnswer => {
            this.setState({ isCorrectAnswer: isCorrectAnswer });
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="row">
        <LevelTitle className="col-12 col">
          <h3>Level 2: Box Model</h3>
        </LevelTitle>

        <LevelContent className="col-6 col">
          <LevelDescription>
            {BOX_MODEL_EXERCISE.details}
            <br />
            <br />
            {BOX_MODEL_EXERCISE.description}
          </LevelDescription>
          <CssCodeEditor
            value={this.state.initialCssEditorValue}
            onFocus={this.handleCssCodeEditorFocus}
            onChange={this.handleCssCodeChange}
            onValidate={this.setValidationResult}
          />
          <HtmlCodeEditor value={BOX_MODEL_EXERCISE.html} />
        </LevelContent>

        <LevelContent className="col-6 col">
          <ResultPane
            html={BOX_MODEL_EXERCISE.html}
            isCorrectAnswer={this.state.isCorrectAnswer}
            cssCodeAnswer={this.state.cssCodeAnswer}
          />
        </LevelContent>
      </div>
    );
  }
}

export default BoxModelLevel;
