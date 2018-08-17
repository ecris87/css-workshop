import React, { Component } from 'react';
import CssCodeEditor from '../../common/CssCodeEditor';
import HtmlCodeEditor from '../../common/HtmlCodeEditor';
import ResultPane from '../../common/ResultPane';
import styled from 'styled-components';
import ExerciseSelection from '../../common/ExerciseSelection';
import SELECTOR_EXERCISES from './level1Data';

const LevelTitle = styled.h3`
  margin: 0;
`;

class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExerciseIndex: 0,
      cssCode: null
    };
    this.isValid = false;
  }

  handleExerciseSelection = event => {
    this.setState({
      currentExerciseIndex: event.target.value
    });
  };

  setValidationResult = errors => {
    console.log(errors);
    this.isValid = errors.length === 0;
  };

  handleCssCodeChange = cssCode => {
    if (this.isValid) {
      console.log('css change is valid:', cssCode);
      this.setState({
        cssCode: cssCode
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
          <ResultPane html={currentExercise.html} cssCode={this.state.cssCode} />
        </div>
      </div>
    );
  }
}

export default Level1;
