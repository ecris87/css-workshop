import React, { Component } from 'react';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import ExerciseSelection from 'app/common/exercises/ExerciseSelection';
import exerciseValidation from 'app/common/exercises/exerciseValidation';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, LevelContent } from 'app/common/ComponentsLibrary';
import SELECTOR_EXERCISES from './selectorExercises';

class SelectorsLevel extends Component {
  static DEFAULT_CSS_TEXT = `/* style.css */
`;
  static INFO_CSS_TEXT = `/* style.css */
/* Type in selector and declarations here */`;

  state = {
    currentExerciseIndex: 0,
    cssCodeAnswer: null,
    isCorrectAnswer: false,
    initialCssEditorValue: SelectorsLevel.INFO_CSS_TEXT
  };

  isValidCss = false;

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: Number(event.target.value),
      // reset other values
      cssCodeAnswer: null,
      isCorrectAnswer: false,
      initialCssEditorValue: SelectorsLevel.INFO_CSS_TEXT
    });
  };

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0 || (errors.length === 1 && errors[0].type === 'warning');
  };

  isCorrectAnswer(cssCode) {
    let correctAnswer = SELECTOR_EXERCISES[this.state.currentExerciseIndex].correctAnswer;
    cssCode = cssCode.replace(SelectorsLevel.DEFAULT_CSS_TEXT, '');
    return exerciseValidation.isCorrect(cssCode, correctAnswer);
  }

  handleCssCodeEditorFocus = event => {
    if (this.state.initialCssEditorValue !== SelectorsLevel.DEFAULT_CSS_TEXT) {
      this.setState({ initialCssEditorValue: SelectorsLevel.DEFAULT_CSS_TEXT });
    }
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (
      this.isValidCss &&
      cssCodeAnswer !== SelectorsLevel.DEFAULT_CSS_TEXT &&
      cssCodeAnswer !== SelectorsLevel.INFO_CSS_TEXT
    ) {
      let isCorrectAnswer = this.isCorrectAnswer(cssCodeAnswer);
      this.setState({
        cssCodeAnswer: cssCodeAnswer,
        isCorrectAnswer: isCorrectAnswer
      });
    }
  };

  render() {
    let currentExercise = SELECTOR_EXERCISES[this.state.currentExerciseIndex];
    return (
      <div className="row">
        <LevelTitle className="col-12 col">
          <h3>Level 1: Selectors, Properties and Values</h3>
        </LevelTitle>

        <LevelContent className="col-6 col">
          <ExerciseSelection
            onChange={this.handleExerciseSelection}
            value={this.state.currentExerciseIndex}
            exercises={SELECTOR_EXERCISES}
          />
          <CssCodeEditor
            value={this.state.initialCssEditorValue}
            onFocus={this.handleCssCodeEditorFocus}
            onChange={this.handleCssCodeChange}
            onValidate={this.setValidationResult}
          />
          <HtmlCodeEditor value={currentExercise.html} />
        </LevelContent>

        <LevelContent className="col-6 col">
          <ResultPane
            html={currentExercise.html}
            isCorrectAnswer={this.state.isCorrectAnswer}
            cssCodeAnswer={this.state.cssCodeAnswer}
          />
        </LevelContent>
      </div>
    );
  }
}

export default SelectorsLevel;
