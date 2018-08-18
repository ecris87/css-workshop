import React, { Component } from 'react';
import CssCodeEditor from '../../common/CssCodeEditor';
import HtmlCodeEditor from '../../common/HtmlCodeEditor';
import ResultPane from '../../common/ResultPane';
import styled from 'styled-components';
import ExerciseSelection from '../../common/ExerciseSelection';
import SELECTOR_EXERCISES from './selectorExercises';

const LevelTitle = styled.h3`
  margin: 0;
`;

class SelectorsLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExerciseIndex: 0,
      cssCodeAnswer: null,
      isCorrectAnswer: false
    };
    this.isValidCss = false;
  }

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: Number(event.target.value),
      // reset other values
      cssCodeAnswer: null,
      isCorrectAnswer: false
      // TODO handle resetting code editor value
    });
  };

  setValidationResult = errors => {
    this.isValidCss = errors.length === 0;
  };

  handleCssCodeChange = cssCodeAnswer => {
    if (this.isValidCss) {
      console.log('css change is valid:', cssCodeAnswer);
      let isCorrectAnswer = true; // TODO handle validating answer
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
        <div className="col-12 col">
          <LevelTitle>Level 1: Selectors, Properties and Values</LevelTitle>
        </div>

        <div className="col-6 col">
          <ExerciseSelection
            onChange={this.handleExerciseSelection}
            value={this.state.currentExerciseIndex}
            exercises={SELECTOR_EXERCISES}
          />
          <CssCodeEditor onChange={this.handleCssCodeChange} onValidate={this.setValidationResult} />
          <HtmlCodeEditor value={currentExercise.html} />
        </div>

        <div className="col-6 col">
          <ResultPane
            html={currentExercise.html}
            isCorrectAnswer={this.state.isCorrectAnswer}
            cssCodeAnswer={this.state.cssCodeAnswer}
          />
        </div>
      </div>
    );
  }
}

export default SelectorsLevel;
