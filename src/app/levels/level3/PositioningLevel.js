import React, { Component } from 'react';
import CssCodeEditor from 'app/common/codeEditor/CssCodeEditor';
import HtmlCodeEditor from 'app/common/codeEditor/HtmlCodeEditor';
import ExerciseSelection from 'app/common/exercises/ExerciseSelection';
import ResultPane from 'app/common/ResultPane';
import { LevelTitle, LevelDescription, LevelContent } from 'app/common/ComponentsLibrary';
import POSITIONING_EXERCISES from './positioningExercises';

class PositioningLevel extends Component {
  static DEFAULT_CSS_TEXT = `/* style.css */
`;
  static INFO_CSS_TEXT = `/* style.css */
/* Add code here */`;

  state = {
    currentExerciseIndex: 0,
    cssCodeAnswer: null,
    isCorrectAnswer: false,
    initialCssEditorValue: PositioningLevel.INFO_CSS_TEXT
  };

  isValidCss = false;

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: Number(event.target.value),
      // reset other values
      cssCodeAnswer: null,
      isCorrectAnswer: false,
      initialCssEditorValue: PositioningLevel.INFO_CSS_TEXT
    });
  };

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0 || (errors.length === 1 && errors[0].type === 'warning');
  };

  isCorrectAnswer() {
    /**
     * .jerry {
    position: relative;
    left: 20px;
    top: -10px;
    }
     */
    return true;
  }

  handleCssCodeEditorFocus = event => {
    if (this.state.initialCssEditorValue !== PositioningLevel.DEFAULT_CSS_TEXT) {
      this.setState({ initialCssEditorValue: PositioningLevel.DEFAULT_CSS_TEXT });
    }
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (
      this.isValidCss &&
      cssCodeAnswer !== PositioningLevel.DEFAULT_CSS_TEXT &&
      cssCodeAnswer !== PositioningLevel.INFO_CSS_TEXT
    ) {
      let isCorrectAnswer = this.isCorrectAnswer(cssCodeAnswer);
      this.setState({
        cssCodeAnswer: cssCodeAnswer,
        isCorrectAnswer: isCorrectAnswer
      });
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
          <LevelDescription>{currentExercise.descriptionDetails}</LevelDescription>
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
