import React, { Component } from 'react';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import ExerciseSelection from 'app/common/exercises/ExerciseSelection';
import exerciseValidation from 'app/common/exercises/exerciseValidation';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, LevelDescription, LevelContent } from 'app/common/ComponentsLibrary';
import POSITIONING_EXERCISES from './positioningExercises';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    height: 1500px; /* in order to demo position: fixed */
  }
`;

class PositioningLevel extends Component {
  static DEFAULT_CSS_TEXT = `/* style.css */
`;
  static INFO_CSS_TEXT = `/* style.css */
/* Add code here */`;

  static Z_INDEX_CSS_TEXT = `/* style.css */
.ninja-text {
  position: absolute;
}

.ninja-image {
  position: absolute;
}`;

  state = {
    currentExerciseIndex: 0,
    cssCodeAnswer: null,
    isCorrectAnswer: false,
    initialCssEditorValue: PositioningLevel.INFO_CSS_TEXT
  };

  isValidCss = false;

  handleExerciseSelection = event => {
    let index = Number(event.target.value);
    const nextExercise = POSITIONING_EXERCISES[index];
    this.setState({
      currentExerciseIndex: index,
      // reset other values
      cssCodeAnswer: null,
      isCorrectAnswer: false,
      initialCssEditorValue:
        nextExercise && nextExercise.id === 'z-index'
          ? PositioningLevel.Z_INDEX_CSS_TEXT
          : PositioningLevel.INFO_CSS_TEXT
    });
  };

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0 || (errors.length === 1 && errors[0].type === 'warning');
  };

  checkAnswer(cssCode) {
    const currentExercise = POSITIONING_EXERCISES[this.state.currentExerciseIndex];
    let isCorrect;
    if (currentExercise.id === 'z-index') {
      let element = document.querySelector(currentExercise.correctAnswer.selector);
      let elementZIndex = window.getComputedStyle(element, null).getPropertyValue('z-index');
      isCorrect = elementZIndex >= 1;
    } else {
      let correctAnswer = POSITIONING_EXERCISES[this.state.currentExerciseIndex].correctAnswer;
      cssCode = cssCode.replace(PositioningLevel.DEFAULT_CSS_TEXT, '');
      isCorrect = exerciseValidation.isCorrect(cssCode, correctAnswer);
    }
    return Promise.resolve(isCorrect);
  }

  handleCssCodeEditorFocus = event => {
    if (
      this.state.initialCssEditorValue !== PositioningLevel.DEFAULT_CSS_TEXT &&
      this.state.initialCssEditorValue !== PositioningLevel.Z_INDEX_CSS_TEXT
    ) {
      this.setState({ initialCssEditorValue: PositioningLevel.DEFAULT_CSS_TEXT });
    }
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (
      this.isValidCss &&
      cssCodeAnswer !== PositioningLevel.DEFAULT_CSS_TEXT &&
      cssCodeAnswer !== PositioningLevel.INFO_CSS_TEXT
    ) {
      this.setState(
        {
          cssCodeAnswer: cssCodeAnswer
        },
        () => {
          this.checkAnswer(cssCodeAnswer).then(isCorrectAnswer => {
            this.setState({ isCorrectAnswer: isCorrectAnswer });
          });
        }
      );
    }
  };

  render() {
    const currentExercise = POSITIONING_EXERCISES[this.state.currentExerciseIndex];
    return (
      <div className="row">
        <LevelTitle className="col-12 col">
          <h3>Level 3: Positioning</h3>
        </LevelTitle>

        <LevelContent className="col-6 col">
          <ExerciseSelection
            onChange={this.handleExerciseSelection}
            value={this.state.currentExerciseIndex}
            exercises={POSITIONING_EXERCISES}
          />
          <LevelDescription>{currentExercise.details}</LevelDescription>
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

export default PositioningLevel;
